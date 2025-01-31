import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createTask = mutation({
    args: {
        title: v.string(),
    },
    handler: async (ctx, args) => {
        const newTaskId = await ctx.db.insert("tasks", {title: args.title})
        return newTaskId
    }
})