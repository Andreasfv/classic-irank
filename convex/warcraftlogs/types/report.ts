import { Actor } from "./actor";
import { Fight } from "./fight";
import { Owner } from "./owner";
import { Zone } from "./zone";

export interface Report {
  id: string;
  code: string;
  title: string;
  startTime: number;
  zone: Pick<Zone, "id" | "name">;
  owner: Owner;
  masterData: { actors: Actor[] };
  fights: Fight[];
}

export interface ReportData {
  report: Report;
}

export interface ReportCast {
  abilityGameID: number;
  fight: number;
  sourceID: number;
  targetID: number;
  timestamp: number;
  type: string;
}
