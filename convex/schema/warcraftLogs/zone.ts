import { defineTable } from "convex/server";
import { v } from "convex/values";

export const zoneObject = { name: v.string() };

export default defineTable({ ...zoneObject });
