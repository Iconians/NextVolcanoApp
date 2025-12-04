import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
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
    displayName: v.string(),
    scores: v.array(
      v.object({
        correct: v.number(),
        incorrect: v.number(),
        timeStamp: v.string()
      })
    )
  }),
  highScores: defineTable({
    userName: v.string(),
    score: v.number()
  }).index('by_score', ['score'])
})
