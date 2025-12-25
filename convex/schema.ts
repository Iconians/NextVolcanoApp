import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'
import { authTables } from '@convex-dev/auth/server'

export default defineSchema({
  ...authTables,
  // Override users table to include name field (for display name)
  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.float64()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.float64()),
    isAnonymous: v.optional(v.boolean())
  })
    .index('email', ['email'])
    .index('phone', ['phone']),
  questions: defineTable({
    question: v.string()
  }),
  answers: defineTable({
    questionId: v.id('questions'),
    answers: v.array(v.string()),
    correctAnswer: v.string()
  }),
  profiles: defineTable({
    userId: v.string(),
    // displayName removed - now using users.name instead
    scores: v.array(
      v.object({
        correct: v.number(),
        incorrect: v.number(),
        timeStamp: v.string()
      })
    )
  }).index('by_userId', ['userId']),
  highScores: defineTable({
    userName: v.string(),
    score: v.number()
  }).index('by_score', ['score'])
})
