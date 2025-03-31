import { v } from "convex/values";
import { internal } from "../../../_generated/api";
import { action } from "../../../_generated/server";
import { getWarcraftLogsAccessToken } from "../auth/getAccessToken";
import { ReportData, wclApi } from "../../types";

interface GetReportActorsInput {
  reportCode: string;
  fightID: number;
  accessToken?: string;
}

interface GetReportActorsOutput {
  data: { reportData: ReportData };
}

export async function getActorsReport({
  reportCode,
  fightID,
  accessToken,
}: GetReportActorsInput) {
  const token = accessToken ?? (await getWarcraftLogsAccessToken()).accessToken;

  const query = {
    query: `query ReportData {
                reportData {
                    report(code: "${reportCode}") {
                        code
                        title
                        startTime
                        zone {
                            name
                            id
                        }
                        owner {
                            name
                        }
                        masterData {
                            actors(type: "player") {
                                id
                                name
                                type
                                subType
                                icon
                            }
                        }
                        fights(fightIDs: ${fightID}) {
                            id
                            encounterID
                            startTime
                            endTime
                            phaseTransitions {
                                id
                                startTime
                            }
                        }
                    }
                }
            }
`,
  };

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
    throw new Error("Failed to get report");
  }

  const body: GetReportActorsOutput = await response.json();

  if (!body?.data) {
    console.log("No data found");
    console.log(body);
    throw new Error(`No report found for report code: ${reportCode}`);
  }
  return body.data.reportData;
}

const GetActorsReportInputValidation = v.object({
  reportCode: v.string(),
  fightID: v.number(),
});

export const getActorsReportAction = action({
  args: GetActorsReportInputValidation,
  handler: async (ctx, args) => {
    const token = await ctx.runAction(
      // @ts-ignore
      internal.warcraftlogs.auth.getAccessToken.getWarcraftLogsTokenAction
    );
    const actorData = await getActorsReport({ ...args, accessToken: token });
    return actorData.report;
  },
});
