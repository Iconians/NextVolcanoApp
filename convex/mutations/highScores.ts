import { mutation } from '../_generated/server'
import { v } from 'convex/values'

export const insertHighScore = mutation({
  args: {
    userName: v.string(),
    score: v.number()
  },
  handler: async (ctx, args) => {
    await ctx.db.insert('highScores', {
      userName: args.userName,
      score: args.score
    })
  }
})
