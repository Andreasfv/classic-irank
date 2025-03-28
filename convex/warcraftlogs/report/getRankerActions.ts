import { getWarcraftLogsAccessToken } from "../auth/getAccessToken";
import { ClassSpecs } from "../types/consts";
import { classesNotableAbilityCasts, universalNotableCasts } from "./notableAbilityCasts";


export type SpecKeys<T extends keyof ClassSpecs> = keyof ClassSpecs[T];

export interface RankerActionsInput<T extends keyof ClassSpecs> {
    className: T;
    spec: SpecKeys<T>
    fightID: number;
    sourceID: number;
    reportCode: string;
}

export async function getRankerActions<T extends keyof ClassSpecs>({className, spec, fightID, sourceID, reportCode}: RankerActionsInput<T>) {
    const accessToken = (await getWarcraftLogsAccessToken()).accessToken;
    
    // This is a bit of a yolo, but instead of fetching hundreds of events, I try to fetch only the one's I'm interested in.
    const notableCasts = classesNotableAbilityCasts[className]?.[spec] ?? []

    const castQueries = [...notableCasts, ...universalNotableCasts].map(
        ({name, id}) => `${name}: events(fightIDs: ${fightID}, dataType: "Casts", abilityID: ${id}, sourceID: ${sourceID}){data}`
    )

    const query = {
        query: `query ReportData {
            report(code: ${reportCode}) {
                ${castQueries.join("\n")}
            }
        }`
    }
}