
import { defineTable } from "convex/server";
import { v } from "convex/values";

// @snippet start schema
export default defineTable({
    specRanking: v.string(),
})
