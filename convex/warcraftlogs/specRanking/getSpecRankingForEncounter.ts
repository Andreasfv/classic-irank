import { v } from "convex/values";
import { internal } from "../../_generated/api";
import { action } from "../../_generated/server";
import { getWarcraftLogsAccessToken } from "../auth/getAccessToken";
import convexClass from "../convexTypes/className";
import convexSpec from "../convexTypes/specName";
import { ClassName, Spec, WarcraftLogsdata, wclApi } from "../types/consts";
import { SpecRankingForEncounter } from "../types/specRankingForEncounter";

interface SpecRankingInput {
  className: ClassName;
  spec: Spec;
  boss: number;
  difficulty: number;
  tenMan?: boolean;

  accessToken?: string;
}

interface SpecRankingOutput extends WarcraftLogsdata {
  data: {
    worldData: {
      encounter: { characterRankings: { rankings: SpecRankingForEncounter[] } };
    };
  };
}
export async function getSpecRanking({
  className,
  spec,
  boss,
  difficulty,
  tenMan,
  accessToken,
}: SpecRankingInput): Promise<SpecRankingForEncounter[]> {
  const token = accessToken ?? (await getWarcraftLogsAccessToken()).accessToken;
  const query = {
    query: `query WorldData {
            worldData {
                encounter(id: ${Math.trunc(boss)}) {
                    characterRankings(specName: "${spec}", className: "${className}", difficulty: ${Math.trunc(difficulty)}, ${tenMan ? "size: 10" : ""})
                }
            }
        }`,
  };

  //query to wcl api with bearer token
  const response = await fetch(wclApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(query),
  });

  if (!response.ok) {
    console.log(response.statusText);
    throw new Error("Failed to get spec rankings");
  }

  const body: SpecRankingOutput = await response.json();
  if (!body?.data?.worldData?.encounter?.characterRankings) {
    console.log("No data found");
    console.log(body);
    throw new Error(
      `No spec rankings found for encounter id: ${boss}, spec: ${spec}, class: ${className}, difficulty: ${difficulty}`
    );
  }
  // TODO: Validation via fex. Zod
  const data = body.data.worldData.encounter.characterRankings.rankings;
  if (data.length > 25) {
    return data.slice(0, 24);
  }

  return body.data.worldData.encounter.characterRankings.rankings;
}

const SpecRankingInputValidation = v.object({
  className: convexClass,
  spec: convexSpec,
  boss: v.number(),
  difficulty: v.number(),
  tenMan: v.boolean(),
});

export const getSpecRankingForEncounterAction = action({
  args: SpecRankingInputValidation,
  handler: async (ctx, args) => {
    const token = await ctx.runAction(
      //@ts-ignore "ts-expect-error" doesnt understand the internal object.
      internal.warcraftlogs.auth.getAccessToken.getWarcraftLogsTokenAction
    );
    const data: SpecRankingForEncounter[] = await getSpecRanking({
      className: args.className as ClassName,
      spec: args.spec as Spec,
      boss: args.boss,
      difficulty: args.difficulty,
      accessToken: token,
      ...(args.tenMan ? { tenMan: args.tenMan } : {}),
    });

    return data;
  },
});
