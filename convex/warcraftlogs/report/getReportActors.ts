import { v } from "convex/values";
import { action } from "../../_generated/server";
import { getWarcraftLogsAccessToken } from "../auth/getAccessToken";

interface GetReportActorsInput {
    reportCode: string
    fightID: number
}
export async function getReportActors({reportCode, fightID}: GetReportActorsInput)  {
    const accessToken = (await getWarcraftLogsAccessToken()).accessToken;

    const query = {
        query: 
            `query ReportData {
                reportData {
                    report(code: "${reportCode}") {
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
                                subType
                                icon
                            }
                        }
                        fights(fightIDs: ${fightID}) {
                            id
                            encounterID
                            startTime
                            endTime
                        }
                    }
                }
            }
`
    }

    const response = await fetch('https://www.warcraftlogs.com/api/v2/client', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(query)
    })

    if(!response.ok) {
        console.log(response.statusText)
        throw new Error("Failed to get report")
    }

    const body = await response.json();
    console.log(body?.data?.reportData?.report?.masterData?.actors)

    if(!body?.data) {
        console.log("No data found")
        console.log(body)
        throw new Error(`No report found for report code: ${reportCode}`)
    }
    return body.data
}


const GetReportActorsInputValidation = v.object({
    reportCode: v.string(),
    fightID: v.number()
})


export const getSpecRankingForEncounterAction = action({
    args: GetReportActorsInputValidation,
    handler: async (_, args) => {await getReportActors(args)}
})