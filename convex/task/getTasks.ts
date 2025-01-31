import { query } from "../_generated/server";

export const getTasks = query({
    handler: async (ctx) => {
        const tasks = await ctx.db.query("tasks").order("desc").collect()
        return tasks
    }
})