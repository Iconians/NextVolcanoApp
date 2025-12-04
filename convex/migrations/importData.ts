import { mutation } from '../_generated/server'
import { v } from 'convex/values'

// Import questions
export const importQuestions = mutation({
  args: {
    questions: v.array(
      v.object({
        id: v.string(),
        question: v.string()
      })
    )
  },
  handler: async (ctx, args) => {
    const questionIdMap: Record<string, string> = {}

    for (const q of args.questions) {
      const convexId = await ctx.db.insert('questions', {
        question: q.question
      })
      questionIdMap[q.id] = convexId
    }

    return questionIdMap
  }
})

// Import answers (requires questionIdMap from questions)
export const importAnswers = mutation({
  args: {
    answers: v.array(
      v.object({
        questionForeignKey: v.string(),
        answers: v.array(v.string()),
        correctAnswer: v.string()
      })
    ),
    questionIdMap: v.record(v.string(), v.string()) // Map of old question IDs to new Convex IDs
  },
  handler: async (ctx, args) => {
    const questionIdMap = args.questionIdMap
    let imported = 0
    let skipped = 0

    for (const answer of args.answers) {
      const questionId = questionIdMap[answer.questionForeignKey]
      if (!questionId) {
        skipped++
        continue
      }

      await ctx.db.insert('answers', {
        questionId: questionId as any,
        answers: answer.answers,
        correctAnswer: answer.correctAnswer
      })
      imported++
    }

    return { imported, skipped }
  }
})

// Import high scores
export const importHighScores = mutation({
  args: {
    highScores: v.array(
      v.object({
        userName: v.string(),
        score: v.number()
      })
    )
  },
  handler: async (ctx, args) => {
    let imported = 0

    for (const score of args.highScores) {
      await ctx.db.insert('highScores', {
        userName: score.userName,
        score: score.score
      })
      imported++
    }

    return { imported }
  }
})

// Import profiles
export const importProfiles = mutation({
  args: {
    profiles: v.array(
      v.object({
        userId: v.string(),
        displayName: v.string(),
        scores: v.array(
          v.object({
            correct: v.number(),
            incorrect: v.number(),
            timeStamp: v.optional(v.string())
          })
        )
      })
    )
  },
  handler: async (ctx, args) => {
    let imported = 0

    for (const profile of args.profiles) {
      await ctx.db.insert('profiles', {
        userId: profile.userId,
        displayName: profile.displayName,
        scores: profile.scores.map((score) => ({
          correct: score.correct,
          incorrect: score.incorrect,
          timeStamp: score.timeStamp || ''
        }))
      })
      imported++
    }

    return { imported }
  }
})
