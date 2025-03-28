import { ClassName, Spec } from "./consts";
import { Guild } from "./guild";
import { Report } from "./report";

export interface SpecRanking {
    name: string;
    class: ClassName;
    spec: Spec;
    amount: number;
    hardModeLevel: number;
    duration: number;
    startTime: number;
    report: Pick<Report, "code" | "fightID" | "startTime">;
    guild: Pick<Guild, "id" | "name" | "faction">;
    bracketData: number
    faction: number
    size: number
}