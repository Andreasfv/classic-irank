import { v } from "convex/values";
import { internalMutation } from "../../_generated/server";
import { rankerEntryInput } from "../../schema/rankings/rankings";




export const createRankerEntry = internalMutation({
    args: rankerEntryInput,

    handler: async (ctx, args) => {
        await ctx.db.insert("rankings", args)
    }
})

export const createRankerEntries = internalMutation({
    args: {
        entries: v.array(rankerEntryInput)    
},
        
    handler: async (ctx, args) => {
        for (const entry of args.entries) {
            await ctx.db.insert("rankings", entry)
        }
    }
})