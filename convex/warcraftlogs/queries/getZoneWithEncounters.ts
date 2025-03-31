import { v } from "convex/values";
import { query } from "../../_generated/server";

export const getZoneWithEncounters = query({
  args: { zoneID: v.number() },
  handler: async (ctx, { zoneID }) => {
    const zone = await ctx.db
      .query("zone")
      .filter((z) => z.eq(z.field("zoneID"), zoneID))
      .first();

    const encounters = await ctx.db
      .query("encounter")
      .filter((e) => e.eq(e.field("zoneID"), zoneID))
      .collect();

    return { ...zone, encounters };
  },
});

export const getZonesWithEncounters = query({
  args: v.object({ zones: v.array(v.number()) }),
  handler: async (ctx, args) => {
    const zones = await ctx.db.query("zone").collect();

    const data = [];

    for (const zone of args.zones) {
      const found = zones.find((z) => z.zoneID === zone);
      if (found) {
        data.push(found);
      }
    }

    if (data.length === 0) {
      throw new Error("No zones found");
    }

    return data;
  },
});
