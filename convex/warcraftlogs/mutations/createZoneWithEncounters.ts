import { mutation } from "../../_generated/server";
import { zoneWithEncounterInput } from "../convexTypes/zoneWithEncounter";

export const createZoneAndEncounters = mutation({
  args: zoneWithEncounterInput,
  handler: async (ctx, args) => {
    const { name, encounters } = args;
    const zone = await ctx.db.insert("zone", { name });
    for (const encounter of encounters) {
      await ctx.db.insert("encounter", { ...encounter, zoneID: zone });
    }
    return zone;
  },
});
