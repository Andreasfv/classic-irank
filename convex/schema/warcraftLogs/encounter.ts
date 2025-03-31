import { defineTable } from "convex/server";
import { v } from "convex/values";

export const encounterObject = {
  encounterID: v.number(),
  zoneID: v.number(),
  name: v.string(),
  zoneConvexID: v.id("zone"),
};

export const encounterInput = v.object(encounterObject);
export default defineTable({ ...encounterObject });
