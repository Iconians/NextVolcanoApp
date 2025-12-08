import { query } from '../_generated/server'
import { v } from 'convex/values'
import { Doc } from '../_generated/dataModel'

export const getAnswersForQuestions = query({
  args: { questionIds: v.array(v.id('questions')) },
  handler: async (ctx, args) => {
    const allAnswers = await ctx.db.query('answers').collect()
    const answers = (allAnswers as Doc<'answers'>[]).filter((answer) =>
      args.questionIds.includes(answer.questionId)
    )
    return answers
  }
})
