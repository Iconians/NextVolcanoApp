import { query } from '../_generated/server'
import { v } from 'convex/values'

export const getRandomQuestions = query({
  args: { count: v.number() },
  handler: async (ctx, args) => {
    const allQuestions = await ctx.db.query('questions').collect()
    const shuffled = allQuestions.sort(() => Math.random() - 0.5)
    return shuffled.slice(0, args.count)
  }
})
