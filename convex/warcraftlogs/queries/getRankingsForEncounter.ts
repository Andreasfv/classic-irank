import { v } from "convex/values";
import { query } from "../../_generated/server";

export const getRankingsForEncounter = query({
  args: {
    encounterID: v.number(),
    spec: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("xdd", args);
    const rankings = await ctx.db
      .query("rankings")
      .filter((r) => r.eq(r.field("bossID"), args.encounterID))
      .take(20);
    //According to convex docs I should filter after fetch. idk. maybe.
    return rankings;
  },
});
