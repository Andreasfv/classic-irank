import { defineTable } from "convex/server";
import { v } from "convex/values";

const rankerEntryObject = {
  reportCode: v.string(),
  fightID: v.number(),
  bossID: v.number(),
  name: v.string(),
  className: v.string(),
  spec: v.string(),
  amount: v.number(),
  difficulty: v.number(),
  tenMan: v.boolean(),
  duration: v.number(),
  startTime: v.number(),
  fightStartTime: v.number(),
  abilities: v.array(
    v.object({
      abilityGameID: v.number(),
      fight: v.number(),
      sourceID: v.number(),
      targetID: v.number(),
      timestamp: v.number(),
      type: v.string(),
    })
  ),
};

export const rankerEntryInput = v.object(rankerEntryObject);

export default defineTable({ ...rankerEntryObject });
