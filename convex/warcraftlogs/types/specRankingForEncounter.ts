import { ClassName, Spec } from "./consts";
import { Guild } from "./guild";
import { Server } from "./server";


export interface SpecRankingForEncounter {
    name: string;
    class: ClassName;
    spec: Spec;
    amount: number;
    hardModeLevel: number;
    duration: number;
    startTime: number;
    report: { // The attributes vary from the overall report type
        code: string;
        fightID: number;
        startTime: number;
    },
    guild: Pick<Guild, "id" | "name" | "faction">;
    server: Pick<Server, "id" | "name" | "region">
    bracketData: number
    faction: number
    size: number
}