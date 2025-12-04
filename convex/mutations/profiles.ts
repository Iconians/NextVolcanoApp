import { mutation } from '../_generated/server'
import { v } from 'convex/values'
import { Profiles } from '../_generated/dataModel'

export const updateUserScore = mutation({
  args: {
    userId: v.string(),
    correctAnswers: v.number(),
    wrongAnswers: v.number(),
    timeStamp: v.string()
  },
  handler: async (ctx, args) => {
    const profile = (await ctx.db
      .query('profiles')
      .filter((q) => q.eq(q.field('userId'), args.userId))
      .first()) as Profiles | null

    if (!profile) {
      throw new Error('Profile not found')
    }

    const newScore = {
      correct: args.correctAnswers,
      incorrect: args.wrongAnswers,
      timeStamp: args.timeStamp
    }

    await ctx.db.patch(profile._id, {
      scores: [...profile.scores, newScore]
    })
  }
})

export const createProfile = mutation({
  args: {
    userId: v.string(),
    displayName: v.string()
  },
  handler: async (ctx, args) => {
    await ctx.db.insert('profiles', {
      userId: args.userId,
      displayName: args.displayName,
      scores: []
    })
  }
})

export const updateDisplayName = mutation({
  args: {
    userId: v.string(),
    displayName: v.string()
  },
  handler: async (ctx, args) => {
    const profile = (await ctx.db
      .query('profiles')
      .filter((q) => q.eq(q.field('userId'), args.userId))
      .first()) as Profiles | null

    if (!profile) {
      throw new Error('Profile not found')
    }

    await ctx.db.patch(profile._id, {
      displayName: args.displayName
    })
  }
})
