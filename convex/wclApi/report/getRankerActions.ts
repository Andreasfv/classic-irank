import { v } from "convex/values";
import { action } from "../../_generated/server";
import { getWarcraftLogsAccessToken } from "../auth/getAccessToken";
import { ClassSpecs, wclApi } from "../../warcraftlogs/types/consts";
import {
  classesNotableAbilityCasts,
  safeNameField,
  universalNotableCasts,
} from "./notableAbilityCasts";
import { ReportCast } from "../../warcraftlogs/types";

export type SpecKeys<T extends keyof ClassSpecs> = keyof ClassSpecs[T];

export interface RankerActionsInput<T extends keyof ClassSpecs> {
  accessToken?: string;
  className: T;
  spec: SpecKeys<T>;
  fightID: number;
  sourceID: number;
  reportCode: string;
}

export interface RankerActionsOutput {
  data: {
    reportData: {
      report: {
        [key: string]: {
          data: ReportCast[];
        };
      };
    };
  };
}

export async function getRankerActions<T extends keyof ClassSpecs>({
  className,
  spec,
  fightID,
  sourceID,
  reportCode,
  accessToken,
}: RankerActionsInput<T>) {
  const token = accessToken ?? (await getWarcraftLogsAccessToken()).accessToken;

  // This is a bit of a yolo, but instead of fetching hundreds of events, I try to fetch only the ones I'm interested in.
  const notableCasts = [
    ...classesNotableAbilityCasts[className]?.[spec],
    ...classesNotableAbilityCasts[className]?.common,
  ];

  const castQueries = [...notableCasts, ...universalNotableCasts].map(
    ({ name, id }) =>
      `${safeNameField(name)}: events(fightIDs: ${fightID}, dataType: Casts, abilityID: ${id}, sourceID: ${sourceID}){data}`,
  );

  const query = {
    query: `query ReportData {
            reportData {
                report(code: "${reportCode}") {
                        ${castQueries.join("\n")}
                    }
            }
        }`,
  };

  const response = await fetch(wclApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(query),
  });

  console.log(response);
  if (!response.ok) {
    console.log(response.statusText);
    throw new Error("Failed to get player actions for encounter");
  }

  const body: RankerActionsOutput = await response.json();
  console.log("body", body);

  if ("errors" in body) {
    console.log("something wenbt wrong :o");
  }
  return body;
}

const getRankerActionsInputValidation = v.object({
  className: v.string(),
  spec: v.string(),
  fightID: v.number(),
  sourceID: v.number(),
  reportCode: v.string(),
  accessToken: v.optional(v.string()),
});

export const getRankerActionsAction = action({
  args: getRankerActionsInputValidation,
  handler: async (ctx, args) => {
    const parsedArgs = args as RankerActionsInput<keyof ClassSpecs>;
    const data = getRankerActions(parsedArgs);
    return data;
  },
});
