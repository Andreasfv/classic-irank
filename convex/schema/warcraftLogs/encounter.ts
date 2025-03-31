import { defineTable } from "convex/server";
import { v } from "convex/values";

const encounterObject = {
  id: v.number(),
  name: v.string(),
  zoneID: v.id("zones"),
};

export const encounterInput = v.object(encounterObject);
export default defineTable({ ...encounterObject });
