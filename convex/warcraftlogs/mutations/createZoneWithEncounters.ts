import { v } from "convex/values";
import { internalMutation } from "../../_generated/server";
import { zoneWithEncounterInput } from "../convexTypes/zoneWithEncounter";

export const createZoneAndEncounters = internalMutation({
  args: zoneWithEncounterInput,
  handler: async (ctx, args) => {
    const zoneExists = await ctx.db
      .query("zone")
      .filter((zone) => zone.eq(zone.field("zoneID"), args.zoneID))
      .first();

    if (zoneExists) {
      throw new Error("Zone already exists");
    }

    const { name, encounters, zoneID } = args;

    const zone = await ctx.db.insert("zone", {
      name: name,
      zoneID: zoneID,
      encounters: args.encounters.map((encounter) => ({
        encounterID: encounter.encounterID,
        name: encounter.name,
      })),
    });

    if (!zone) {
      throw new Error("Failed to create or find zone");
    }

    for (const encounter of encounters) {
      await ctx.db.insert("encounter", {
        ...encounter,
        zoneID: zoneID,
        zoneConvexID: zone,
      });
    }
  },
});

const createZonesAndEncountersInput = v.object({
  data: v.array(
    v.object({
      name: v.string(),
      zoneID: v.number(),
      encounters: v.array(
        v.object({ encounterID: v.number(), name: v.string() })
      ),
    })
  ),
});

export const createZonesAndEncounters = internalMutation({
  args: createZonesAndEncountersInput,
  handler: async (ctx, args) => {
    for (const zone of args.data) {
      const zoneExists = await ctx.db
        .query("zone")
        .filter((z) => z.eq(z.field("zoneID"), zone.zoneID))
        .first();

      if (zoneExists) {
        console.log("Zone already exists", zone);
        continue;
      }

      const { name, encounters, zoneID } = zone;

      const newZone = await ctx.db.insert("zone", {
        name: name,
        zoneID: zoneID,
        encounters: zone.encounters.map((encounter) => ({
          encounterID: encounter.encounterID,
          name: encounter.name,
        })),
      });

      if (!newZone) {
        console.log("Failed to create or find zone", zone);
        continue;
      }

      for (const encounter of encounters) {
        await ctx.db.insert("encounter", {
          ...encounter,
          zoneID: zoneID,
          zoneConvexID: newZone,
        });
      }
    }
  },
});
