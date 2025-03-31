import { defineTable } from "convex/server";
import { v } from "convex/values";

const zoneObject = { id: v.number(), name: v.string() };

export default defineTable({ ...zoneObject });
