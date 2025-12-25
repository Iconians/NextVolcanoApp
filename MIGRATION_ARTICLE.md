# Migrating Volcano Trivia App: From Vue.js to Next.js and Supabase to Convex

## Introduction

The Volcano Trivia App is an engaging quiz application that tests users' knowledge of volcanology. Originally built with Vue.js and Supabase, the application was recently migrated to Next.js 16 with React 19 and Convex as the backend platform. This article documents the migration process, architectural decisions, challenges faced, and the benefits realized from this modernization effort.

## Why Migrate?

### From Vue.js to Next.js

**Vue.js Limitations:**
- Client-side rendering only, leading to slower initial page loads
- Limited SEO capabilities
- Manual routing setup and configuration
- Separate build tooling and configuration overhead

**Next.js Benefits:**
- Server-side rendering (SSR) and static site generation (SSG) for better performance
- Built-in routing with the App Router
- Automatic code splitting and optimization
- Better TypeScript integration
- Improved developer experience with hot reloading and error handling

### From Supabase to Convex

**Supabase Limitations:**
- SQL-based database requiring complex query management
- Separate authentication service integration
- Manual API endpoint creation
- More boilerplate code for data operations

**Convex Benefits:**
- Real-time data synchronization out of the box
- Type-safe queries and mutations with TypeScript
- Simplified backend with functions instead of REST APIs
- Built-in authentication support
- Automatic API generation from schema
- Better developer experience with instant updates

## Architecture Overview

### Original Stack (Vue.js + Supabase)

```
┌─────────────┐
│   Vue.js    │  ← Client-side framework
│  Frontend   │
└──────┬──────┘
       │ REST API
       ↓
┌─────────────┐
│  Supabase   │  ← PostgreSQL database
│  Backend    │     + Authentication
└─────────────┘
```

### New Stack (Next.js + Convex)

```
┌─────────────────┐
│   Next.js 16    │  ← React framework with SSR
│   React 19      │     + App Router
└────────┬────────┘
         │
         │ Convex Client
         ↓
┌─────────────────┐
│     Convex      │  ← Real-time backend
│   (Functions)   │     + Type-safe queries
└─────────────────┘
```

## Frontend Migration: Vue.js to Next.js

### Component Structure Transformation

#### Vue.js Component Pattern
```vue
<template>
  <div class="start-component">
    <h1>{{ title }}</h1>
    <button @click="handleClick">Start Game</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('Volcano Quiz')

function handleClick() {
  // Handle click
}
</script>
```

#### Next.js/React Component Pattern
```tsx
'use client'

import { useState } from 'react'

export default function StartComponent() {
  const [title] = useState('Volcano Quiz')

  const handleClick = () => {
    // Handle click
  }

  return (
    <div className="start-component">
      <h1>{title}</h1>
      <button onClick={handleClick}>Start Game</button>
    </div>
  )
}
```

### Key Changes

1. **File-based Routing**: Next.js uses the `app/` directory structure for routing
   - `app/page.tsx` → Home page (`/`)
   - `app/game/page.tsx` → Game page (`/game`)
   - `app/profile/page.tsx` → Profile page (`/profile`)

2. **Client Components**: Components that use hooks or browser APIs must be marked with `'use client'`
   ```tsx
   'use client'
   import { useState } from 'react'
   ```

3. **Server Components**: By default, components are server components, enabling SSR
   ```tsx
   // No 'use client' directive = Server Component
   import { Metadata } from 'next'
   ```

4. **Styling**: Continued using Tailwind CSS, but with Next.js's built-in CSS support
   ```tsx
   import './globals.css'
   ```

### State Management Migration

**Vue.js (Composition API):**
```javascript
import { ref, reactive } from 'vue'

const count = ref(0)
const state = reactive({ name: 'User' })
```

**React (Hooks):**
```tsx
import { useState, useEffect } from 'react'

const [count, setCount] = useState(0)
const [state, setState] = useState({ name: 'User' })
```

### Example: Game Page Migration

The game page (`app/game/page.tsx`) demonstrates the complexity of the migration:

**Key Features:**
- Real-time question fetching from Convex
- Answer validation and scoring
- Audio feedback for correct/incorrect answers
- Game state management (win/lose conditions)
- Score posting to backend

**React Patterns Used:**
- `useState` for local component state
- `useEffect` for side effects and initialization
- `useRef` for audio element references
- `useQuery` from Convex for real-time data fetching
- Custom hooks (`useGameUtils`) for shared game logic

## Backend Migration: Supabase to Convex

### Database Schema Migration

#### Supabase (PostgreSQL)
```sql
CREATE TABLE questions (
  id UUID PRIMARY KEY,
  question TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE answers (
  id UUID PRIMARY KEY,
  question_id UUID REFERENCES questions(id),
  answers JSONB,
  correct_answer TEXT NOT NULL
);
```

#### Convex Schema
```typescript
// convex/schema.ts
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
  })
})
```

### Query Migration

#### Supabase Query
```javascript
// Vue.js component
const { data, error } = await supabase
  .from('questions')
  .select('*')
  .limit(5)
```

#### Convex Query
```typescript
// convex/queries/questions.ts
import { query } from '../_generated/server'
import { v } from 'convex/values'

export const getRandomQuestions = query({
  args: { count: v.number() },
  handler: async (ctx, args) => {
    const allQuestions = await ctx.db.query('questions').collect()
    const shuffled = allQuestions.sort(() => Math.random() - 0.5)
    return shuffled.slice(0, args.count)
  }
})

// React component
const questions = useQuery(api.queries.questions.getRandomQuestions, { count: 5 })
```

### Mutation Migration

#### Supabase Mutation
```javascript
// Vue.js component
const { data, error } = await supabase
  .from('profiles')
  .update({ scores: newScores })
  .eq('user_id', userId)
```

#### Convex Mutation
```typescript
// convex/mutations/profiles.ts
import { mutation } from '../_generated/server'
import { v } from 'convex/values'

export const updateUserScore = mutation({
  args: {
    userId: v.string(),
    correctAnswers: v.number(),
    wrongAnswers: v.number(),
    timeStamp: v.string()
  },
  handler: async (ctx, args) => {
    const profile = await ctx.db
      .query('profiles')
      .withIndex('by_userId', (q) => q.eq('userId', args.userId))
      .first()
    
    if (profile) {
      await ctx.db.patch(profile._id, {
        scores: [
          ...profile.scores,
          {
            correct: args.correctAnswers,
            incorrect: args.wrongAnswers,
            timeStamp: args.timeStamp
          }
        ]
      })
    }
  }
})

// React component
const updateUserScore = useMutation(api.mutations.profiles.updateUserScore)
await updateUserScore({ userId, correctAnswers, wrongAnswers, timeStamp })
```

## Data Migration Process

### Step 1: SQL to JSON Conversion

A custom script (`scripts/convertSqlToConvex.ts`) was created to parse SQL INSERT statements and convert them to JSON format:

```typescript
function parseQuestions(sql: string) {
  const questions: Array<{ id: string; question: string }> = []
  const regex = /\('([^']+)', '[^']+', '((?:[^']|'')+)'\)/g
  
  let match
  while ((match = regex.exec(sql)) !== null) {
    const [, id, question] = match
    questions.push({
      id,
      question: question.replace(/''/g, "'")
    })
  }
  
  return questions
}
```

**Challenges:**
- Handling escaped quotes in SQL strings
- Parsing complex JSON structures from SQL
- Mapping foreign key relationships
- Preserving data integrity during conversion

### Step 2: Data Import

The migration process involved:
1. Converting SQL files to JSON format
2. Creating import mutations in Convex
3. Mapping old IDs to new Convex IDs
4. Importing data in the correct order (questions → answers → profiles → high scores)

```typescript
// Import order matters due to foreign key relationships
// 1. Questions (no dependencies)
// 2. Answers (depends on questions)
// 3. Profiles (independent)
// 4. High Scores (independent)
```

## Key Challenges and Solutions

### Challenge 1: Real-time Data Synchronization

**Problem:** Vue.js components needed manual refresh to see updated data.

**Solution:** Convex's real-time queries automatically update React components when data changes:

```tsx
// Automatically re-renders when questions change
const questions = useQuery(api.queries.questions.getRandomQuestions, { count: 5 })
```

### Challenge 2: Type Safety

**Problem:** Supabase queries were not fully type-safe, leading to runtime errors.

**Solution:** Convex generates TypeScript types from the schema:

```typescript
// Types are automatically generated from schema
import { api } from '@/convex/_generated/api'
const questions = useQuery(api.queries.questions.getRandomQuestions, { count: 5 })
// questions is fully typed!
```

### Challenge 3: Authentication

**Problem:** Supabase authentication required separate integration.

**Solution:** Implemented a simplified auth system using localStorage (with plans to migrate to Convex Auth):

```typescript
// lib/auth.ts
export function useAuth() {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  }
  return null
}
```

### Challenge 4: Complex State Management

**Problem:** Game state management was complex with multiple interdependent states.

**Solution:** Created custom hooks to encapsulate game logic:

```typescript
// lib/gameUtils.ts
export function useGameUtils() {
  const updateUserScore = useMutation(api.mutations.profiles.updateUserScore)
  const insertHighScore = useMutation(api.mutations.highScores.insertHighScore)
  
  const postScore = async (correctAnswers: number, wrongAnswers: number) => {
    // Encapsulated logic
  }
  
  return { postScore, updateHighScore, sortQuestions }
}
```

## Benefits Realized

### Performance Improvements

1. **Faster Initial Load**: Next.js SSR reduces time to first contentful paint
2. **Better SEO**: Server-rendered pages are fully crawlable
3. **Automatic Code Splitting**: Only necessary code is loaded per route
4. **Real-time Updates**: Convex eliminates the need for polling

### Developer Experience

1. **Type Safety**: End-to-end TypeScript from frontend to backend
2. **Hot Reloading**: Instant feedback during development
3. **Simplified Backend**: No REST API endpoints to maintain
4. **Automatic API Generation**: Convex generates types from schema

### Code Quality

1. **Reduced Boilerplate**: Less code needed for data operations
2. **Better Organization**: File-based routing is more intuitive
3. **Reusable Logic**: Custom hooks promote code reuse
4. **Error Handling**: Better error boundaries and handling

## Project Structure

```
volcanoTriviaAppRm/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── game/
│   │   └── page.tsx       # Game page
│   ├── profile/
│   │   └── page.tsx       # Profile page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── StartComponent.tsx
│   ├── MainQuestionSection.tsx
│   └── ...
├── convex/                # Convex backend
│   ├── schema.ts          # Database schema
│   ├── queries/           # Query functions
│   ├── mutations/         # Mutation functions
│   └── migrations/        # Data migration scripts
├── lib/                   # Utility functions
│   ├── auth.ts           # Authentication helpers
│   └── gameUtils.ts      # Game logic hooks
└── scripts/              # Migration scripts
    └── convertSqlToConvex.ts
```

## Migration Checklist

- [x] Set up Next.js project with TypeScript
- [x] Migrate Vue components to React components
- [x] Implement file-based routing
- [x] Set up Convex backend
- [x] Define Convex schema
- [x] Create query functions
- [x] Create mutation functions
- [x] Convert SQL data to JSON
- [x] Import data into Convex
- [x] Migrate authentication logic
- [x] Update state management
- [x] Test all functionality
- [x] Deploy to production

## Lessons Learned

1. **Plan the Migration**: Break down the migration into smaller, manageable steps
2. **Preserve Data**: Ensure data migration scripts are thoroughly tested
3. **Type Safety Matters**: Leverage TypeScript for catching errors early
4. **Real-time is Powerful**: Convex's real-time capabilities eliminate many manual updates
5. **Custom Hooks Help**: Encapsulate complex logic in reusable hooks
6. **Test Incrementally**: Test each migrated feature before moving to the next

## Future Improvements

1. **Convex Auth**: Migrate from localStorage to Convex's built-in authentication
2. **Optimistic Updates**: Implement optimistic UI updates for better UX
3. **Error Boundaries**: Add React error boundaries for better error handling
4. **Performance Monitoring**: Add analytics and performance monitoring
5. **Testing**: Add unit and integration tests
6. **Accessibility**: Improve accessibility features

## Conclusion

The migration from Vue.js to Next.js and Supabase to Convex has resulted in a more modern, performant, and maintainable application. The new stack provides:

- **Better Performance**: SSR and optimized React rendering
- **Type Safety**: End-to-end TypeScript support
- **Real-time Capabilities**: Automatic data synchronization
- **Simplified Backend**: No REST API maintenance
- **Better DX**: Improved developer experience

While the migration required significant effort, the benefits in terms of performance, developer experience, and code quality make it a worthwhile investment. The application is now better positioned for future growth and feature additions.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Convex Documentation](https://docs.convex.dev)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
