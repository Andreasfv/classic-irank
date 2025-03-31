import { v } from "convex/values";
import { encounterObject } from "../../schema/warcraftLogs/encounter";
import { zoneObject } from "../../schema/warcraftLogs/zone";

export const zoneWithEncounterObject = {
  ...zoneObject,
  encounters: v.array(v.object(encounterObject)),
};

export const zoneWithEncounterInput = v.object(zoneWithEncounterObject);
