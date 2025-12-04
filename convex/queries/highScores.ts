import { query } from '../_generated/server'
import { HighScores } from '../_generated/dataModel'

export const getTopHighScores = query({
  args: {},
  handler: async (ctx) => {
    const allScores = await ctx.db.query('highScores').collect()
    const sortedScores = (allScores as HighScores[]).sort((a, b) => b.score - a.score)
    const topScores = sortedScores.slice(0, 10)
    return topScores.map((score) => ({
      userName: score.userName,
      score: score.score
    }))
  }
})
