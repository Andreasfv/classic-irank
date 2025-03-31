import Encounter from "./encounter";

export interface Zone {
  id: number;
  name: string;
  encounters: Encounter[];
}
