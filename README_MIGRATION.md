# SQL to Convex Migration Guide

This guide will help you migrate your Supabase SQL data to Convex.

## Step 1: Convert SQL to JSON

First, copy your SQL files to the parent directory (one level up from the project):

```bash
# Your SQL files should be in:
# /Users/claytoncripe/Desktop/Personal projects/volcanoApps/
#   - questions_rows.sql
#   - answers_rows.sql
#   - high_score_rows.sql
#   - profile_rows.sql
```

Then run the conversion script:

```bash
npx tsx scripts/convertSqlToConvex.ts
```

This will create JSON files in `convex/migrations/data/`:
- `questions.json`
- `answers.json`
- `highScores.json`
- `profiles.json`

## Step 2: Import Data into Convex

### Option A: Using Convex Dashboard (Easiest)

1. Start your Convex dev server:
   ```bash
   npx convex dev
   ```

2. Open your Convex dashboard (the URL will be shown in the terminal)

3. Navigate to **Functions** → **mutations** → **migrations** → **importData**

4. Import in this order:

   **a. Import Questions:**
   - Function: `importQuestions`
   - Arguments:
     ```json
     {
       "questions": [/* paste contents of convex/migrations/data/questions.json */]
     }
     ```
   - **Save the returned `questionIdMap`** - you'll need it for answers

   **b. Import Answers:**
   - Function: `importAnswers`
   - Arguments:
     ```json
     {
       "answers": [/* paste contents of convex/migrations/data/answers.json */],
       "questionIdMap": {/* paste the questionIdMap from step a */}
     }
     ```

   **c. Import High Scores:**
   - Function: `importHighScores`
   - Arguments:
     ```json
     {
       "highScores": [/* paste contents of convex/migrations/data/highScores.json */]
     }
     ```

   **d. Import Profiles:**
   - Function: `importProfiles`
   - Arguments:
     ```json
     {
       "profiles": [/* paste contents of convex/migrations/data/profiles.json */]
     }
     ```

### Option B: Using a Script (Advanced)

Create a script that uses the Convex HTTP API or JavaScript SDK to call the mutations programmatically.

## Notes

- **Questions must be imported first** because answers reference question IDs
- The `questionIdMap` maps old Supabase question IDs to new Convex question IDs
- If you have a large amount of data, you may need to import in batches
- Review the converted JSON files before importing to ensure data looks correct

## Troubleshooting

- If answers fail to import, check that the `questionIdMap` contains all referenced question IDs
- If profiles fail, check that the scores JSON structure is valid
- Large imports may take time - be patient!


