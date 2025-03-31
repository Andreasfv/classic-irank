import { defineTable } from "convex/server";
import { v } from "convex/values";

export const encounterObject = { name: v.string(), zoneID: v.id("zone") };

export const encounterInput = v.object(encounterObject);
export default defineTable({ ...encounterObject });
