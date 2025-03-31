import { defineTable } from "convex/server";
import { v } from "convex/values";

export const zoneObject = {
  zoneID: v.number(),
  name: v.string(),
  encounters: v.array(v.object({ name: v.string(), encounterID: v.number() })),
};

export default defineTable({ ...zoneObject });
