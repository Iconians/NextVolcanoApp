/**
 * Script to convert SQL INSERT statements to Convex import format
 * Run this with: npx tsx scripts/convertSqlToConvex.ts
 */

import fs from 'fs'
import path from 'path'

// Parse questions SQL
function parseQuestions(sql: string) {
  const questions: Array<{ id: string; question: string }> = []
  // Match all VALUES clauses in the INSERT statement
  const regex = /\('([^']+)', '[^']+', '((?:[^']|'')+)'\)/g

  // Find the INSERT statement first
  const insertMatch = sql.match(/INSERT INTO "public"."questions"/)
  if (!insertMatch) return questions

  let match
  while ((match = regex.exec(sql)) !== null) {
    const [, id, question] = match
    questions.push({
      id,
      question: question.replace(/''/g, "'") // Unescape single quotes
    })
  }

  return questions
}

// Parse answers SQL
function parseAnswers(sql: string) {
  const answers: Array<{
    questionForeignKey: string
    answers: string[]
    correctAnswer: string
  }> = []

  // Find the INSERT statement first
  const insertMatch = sql.match(/INSERT INTO "public"."answers"/)
  if (!insertMatch) return answers

  // Match all VALUES clauses - handle escaped quotes and commas in values
  // Pattern: ('id', 'date', 'answers_json', 'question_id', 'correct_answer')
  const regex = /\('[^']+', '[^']+', '((?:[^']|'')+)', '([^']+)', '((?:[^']|'')+)'\)/g

  let match
  while ((match = regex.exec(sql)) !== null) {
    const [, answersJson, questionForeignKey, correctAnswer] = match

    // Parse the JSON array from the SQL string
    // The format is like: "{\"Stratovolcano\",\"Shield Volcano\",\"Cinder Cone\"]}"
    let answersArray: string[] = []
    try {
      // Remove the outer quotes
      let cleaned = answersJson.replace(/^"|"$/g, '')

      // Handle escaped quotes - unescape them
      cleaned = cleaned.replace(/\\"/g, '"')

      // Extract array elements - look for { "item1", "item2", "item3" }
      const arrayMatch = cleaned.match(/\{([^}]+)\}/)
      if (arrayMatch) {
        const content = arrayMatch[1]
        // Split by comma, but be careful with commas inside quotes
        const items: string[] = []
        let current = ''
        let inQuotes = false

        for (let i = 0; i < content.length; i++) {
          const char = content[i]
          if (char === '"' && (i === 0 || content[i - 1] !== '\\')) {
            inQuotes = !inQuotes
          } else if (char === ',' && !inQuotes) {
            const trimmed = current.trim().replace(/^"|"$/g, '')
            if (trimmed) items.push(trimmed)
            current = ''
          } else {
            current += char
          }
        }
        // Add the last item
        const trimmed = current.trim().replace(/^"|"$/g, '')
        if (trimmed) items.push(trimmed)

        answersArray = items
      }
    } catch (e) {
      console.warn(`Failed to parse answers for question ${questionForeignKey}:`, e)
      console.warn(`Raw value: ${answersJson}`)
    }

    answers.push({
      questionForeignKey,
      answers: answersArray,
      correctAnswer: correctAnswer.replace(/''/g, "'")
    })
  }

  return answers
}

// Parse high scores SQL
function parseHighScores(sql: string) {
  const highScores: Array<{ userName: string; score: number }> = []

  // Find the INSERT statement first
  const insertMatch = sql.match(/INSERT INTO "public"."high_score"/)
  if (!insertMatch) return highScores

  // Match all VALUES clauses
  const regex = /\('[^']+', '([^']+)', '(\d+)'\)/g

  let match
  while ((match = regex.exec(sql)) !== null) {
    const [, userName, score] = match
    highScores.push({
      userName,
      score: parseInt(score, 10)
    })
  }

  return highScores
}

// Parse profiles SQL
function parseProfiles(sql: string) {
  const profiles: Array<{
    userId: string
    displayName: string
    scores: Array<{ correct: number; incorrect: number; timeStamp?: string }>
  }> = []

  // Find the INSERT statement first
  const insertMatch = sql.match(/INSERT INTO "public"."profile"/)
  if (!insertMatch) return profiles

  // Match all VALUES clauses - scores can be very long JSON strings
  // Pattern: ('id', 'scores_json', 'user_id', 'display_name')
  const regex = /\('[^']+', '((?:[^']|'')+)', '([^']+)', '([^']+)'\)/g

  let match
  while ((match = regex.exec(sql)) !== null) {
    const [, scoresJson, userId, displayName] = match

    // Parse the complex JSON structure
    // Format: "{\"{\\\"correct\\\":1,\\\"incorrect\\\":3}\",\"{\\\"correct\\\":2,\\\"incorrect\\\":3}\"}"
    // This is a JSON array of JSON strings, double-escaped
    let scores: Array<{ correct: number; incorrect: number; timeStamp?: string }> = []
    try {
      // Step 1: Remove outer SQL quotes and unescape
      let cleaned = scoresJson.replace(/^"|"$/g, '')

      // Step 2: Unescape the JSON (handle \\\" -> \")
      cleaned = cleaned.replace(/\\\\"/g, '\\"').replace(/\\\\/g, '\\')

      // Step 3: Try to parse as JSON array
      try {
        const jsonArray = JSON.parse(cleaned)
        // jsonArray should be an array of JSON strings
        for (const jsonStr of jsonArray) {
          if (typeof jsonStr === 'string') {
            try {
              const scoreObj = JSON.parse(jsonStr)
              scores.push({
                correct: scoreObj.correct || 0,
                incorrect: scoreObj.incorrect || 0,
                timeStamp: scoreObj.timeStamp || undefined
              })
            } catch (e) {
              // If direct parse fails, try unescaping more
              const unescaped = jsonStr.replace(/\\"/g, '"')
              try {
                const scoreObj = JSON.parse(unescaped)
                scores.push({
                  correct: scoreObj.correct || 0,
                  incorrect: scoreObj.incorrect || 0,
                  timeStamp: scoreObj.timeStamp || undefined
                })
              } catch (e2) {
                // Last resort: try regex extraction
                const correctMatch = jsonStr.match(/"correct":(\d+)/)
                const incorrectMatch = jsonStr.match(/"incorrect":(\d+)/)
                const timeStampMatch = jsonStr.match(/"timeStamp":"([^"]+)"/)
                if (correctMatch || incorrectMatch) {
                  scores.push({
                    correct: correctMatch ? parseInt(correctMatch[1], 10) : 0,
                    incorrect: incorrectMatch ? parseInt(incorrectMatch[1], 10) : 0,
                    timeStamp: timeStampMatch ? timeStampMatch[1] : undefined
                  })
                } else {
                  console.warn(`Failed to parse score: ${jsonStr.substring(0, 50)}...`)
                }
              }
            }
          } else if (typeof jsonStr === 'object' && jsonStr !== null) {
            // Already an object
            scores.push({
              correct: jsonStr.correct || 0,
              incorrect: jsonStr.incorrect || 0,
              timeStamp: jsonStr.timeStamp || undefined
            })
          }
        }
      } catch (e) {
        // If JSON.parse fails, try regex-based extraction as fallback
        const scoreMatches = cleaned.matchAll(
          /"correct":(\d+).*?"incorrect":(\d+)(?:.*?"timeStamp":"([^"]+)")?/g
        )
        for (const match of scoreMatches) {
          scores.push({
            correct: parseInt(match[1], 10),
            incorrect: parseInt(match[2], 10),
            timeStamp: match[3] || undefined
          })
        }
        if (scores.length === 0) {
          console.warn(`Failed to parse scores for user ${userId}, using fallback`)
        }
      }
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : String(e)
      console.warn(`Failed to parse scores for user ${userId}:`, errorMessage)
    }

    profiles.push({
      userId,
      displayName,
      scores
    })
  }

  return profiles
}

// Main function
function main() {
  // SQL files are in the parent directory of the project
  const baseDir = path.join(process.cwd(), '..')

  // Read SQL files
  const questionsSql = fs.readFileSync(path.join(baseDir, 'questions_rows.sql'), 'utf-8')
  const answersSql = fs.readFileSync(path.join(baseDir, 'answers_rows.sql'), 'utf-8')
  const highScoresSql = fs.readFileSync(path.join(baseDir, 'high_score_rows.sql'), 'utf-8')
  const profilesSql = fs.readFileSync(path.join(baseDir, 'profile_rows.sql'), 'utf-8')

  // Parse data
  const questions = parseQuestions(questionsSql)
  const answers = parseAnswers(answersSql)
  const highScores = parseHighScores(highScoresSql)
  const profiles = parseProfiles(profilesSql)

  // Write JSON files for import
  const outputDir = path.join(process.cwd(), 'convex', 'migrations', 'data')
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  fs.writeFileSync(path.join(outputDir, 'questions.json'), JSON.stringify(questions, null, 2))

  fs.writeFileSync(path.join(outputDir, 'answers.json'), JSON.stringify(answers, null, 2))

  fs.writeFileSync(path.join(outputDir, 'highScores.json'), JSON.stringify(highScores, null, 2))

  fs.writeFileSync(path.join(outputDir, 'profiles.json'), JSON.stringify(profiles, null, 2))

  console.log(`✅ Converted ${questions.length} questions`)
  console.log(`✅ Converted ${answers.length} answers`)
  console.log(`✅ Converted ${highScores.length} high scores`)
  console.log(`✅ Converted ${profiles.length} profiles`)
  console.log(`\n📁 Data files written to: ${outputDir}`)
  console.log(`\nNext steps:`)
  console.log(`1. Review the JSON files in convex/migrations/data/`)
  console.log(`2. Use the import mutations to load data into Convex`)
}

main()
