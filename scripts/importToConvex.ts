/**
 * Script to import converted data into Convex
 * Run this with: npx tsx scripts/importToConvex.ts
 *
 * Make sure you have:
 * 1. Run convertSqlToConvex.ts first
 * 2. Set up Convex (npx convex dev)
 * 3. Have your CONVEX_URL in .env.local
 */

import fs from 'fs'
import path from 'path'

// This script will need to be run in a Node.js environment with Convex SDK
// For now, it's a template that shows how to use the mutations

async function importData() {
  const dataDir = path.join(process.cwd(), 'convex', 'migrations', 'data')

  // Read the converted JSON files
  const questions = JSON.parse(fs.readFileSync(path.join(dataDir, 'questions.json'), 'utf-8'))
  const answers = JSON.parse(fs.readFileSync(path.join(dataDir, 'answers.json'), 'utf-8'))
  const highScores = JSON.parse(fs.readFileSync(path.join(dataDir, 'highScores.json'), 'utf-8'))
  const profiles = JSON.parse(fs.readFileSync(path.join(dataDir, 'profiles.json'), 'utf-8'))

  console.log('📦 Data loaded from JSON files')
  console.log(`   Questions: ${questions.length}`)
  console.log(`   Answers: ${answers.length}`)
  console.log(`   High Scores: ${highScores.length}`)
  console.log(`   Profiles: ${profiles.length}`)

  console.log('\n⚠️  To import this data, you have two options:')
  console.log('\nOption 1: Use Convex Dashboard')
  console.log('1. Go to your Convex dashboard')
  console.log('2. Navigate to Functions > mutations > migrations')
  console.log('3. Call importQuestions, importAnswers, importHighScores, importProfiles')
  console.log('4. Pass the JSON data as arguments')

  console.log('\nOption 2: Use Convex CLI (recommended)')
  console.log('Create a script that uses the Convex HTTP API or SDK')
  console.log('See: https://docs.convex.dev/deploy/http-api')

  console.log('\n📝 Example mutation calls:')
  console.log('\n// Import questions first')
  console.log('await ctx.runMutation("migrations/importData:importQuestions", {')
  console.log('  questions: ' + JSON.stringify(questions.slice(0, 2), null, 2))
  console.log('})')

  console.log('\n// Then import answers (with questionIdMap from questions)')
  console.log('await ctx.runMutation("migrations/importData:importAnswers", {')
  console.log('  answers: ' + JSON.stringify(answers.slice(0, 2), null, 2))
  console.log('  questionIdMap: {...} // from importQuestions result')
  console.log('})')

  console.log('\n// Import high scores')
  console.log('await ctx.runMutation("migrations/importData:importHighScores", {')
  console.log('  highScores: ' + JSON.stringify(highScores.slice(0, 2), null, 2))
  console.log('})')

  console.log('\n// Import profiles')
  console.log('await ctx.runMutation("migrations/importData:importProfiles", {')
  console.log('  profiles: ' + JSON.stringify(profiles.slice(0, 2), null, 2))
  console.log('})')
}

importData().catch(console.error)
