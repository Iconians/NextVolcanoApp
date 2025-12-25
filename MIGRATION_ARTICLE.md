# Migrating Volcano Trivia App: From Vue.js to Next.js with Supabase

## Introduction

The Volcano Trivia App is an engaging quiz application that tests users' knowledge of volcanology. Originally built with Vue.js, the application was recently migrated to Next.js 16 with React 19, maintaining Supabase as the backend platform. This article documents the migration process, architectural decisions, challenges faced, and the benefits realized from this modernization effort.

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

### Why Stay with Supabase?

**Supabase Advantages:**
- PostgreSQL database with robust SQL capabilities
- Built-in authentication and authorization
- Real-time subscriptions when needed
- RESTful API automatically generated
- Excellent TypeScript support
- Row-level security policies
- Familiar SQL interface for database management

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

### New Stack (Next.js + Supabase)

```
┌─────────────────┐
│   Next.js 16    │  ← React framework with SSR
│   React 19      │     + App Router
└────────┬────────┘
         │
         │ Supabase Client
         ↓
┌─────────────────┐
│    Supabase     │  ← PostgreSQL database
│   (PostgreSQL)  │     + Authentication
│  + Server API   │     + Row Level Security
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
- Real-time question fetching from Supabase
- Answer validation and scoring
- Audio feedback for correct/incorrect answers
- Game state management (win/lose conditions)
- Score posting to backend

**React Patterns Used:**
- `useState` for local component state
- `useEffect` for side effects and initialization
- `useRef` for audio element references
- Custom hooks (`useGameUtils`) for shared game logic
- Server Actions for secure score posting

## Backend Integration: Supabase

### Database Schema

#### Supabase (PostgreSQL)
```sql
CREATE TABLE questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_foreign_key UUID REFERENCES questions(id),
  answers TEXT[],
  correct_answer TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE profile (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  display_name TEXT,
  score JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE high_score (
  id BIGSERIAL PRIMARY KEY,
  user_name TEXT NOT NULL,
  score INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Query Migration

#### Vue.js with Supabase
```javascript
// Vue.js component
const { data, error } = await supabase
  .from('questions')
  .select('*')
  .limit(5)
```

#### Next.js with Supabase
```typescript
// lib/supabase-queries.ts
export function useRandomQuestions(count: number = 100) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchQuestions() {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
      
      if (error) throw error
      const shuffled = [...(data || [])].sort(() => Math.random() - 0.5)
      setQuestions(shuffled.slice(0, count))
      setLoading(false)
    }
    fetchQuestions()
  }, [count])

  return { questions, loading }
}

// React component
const { questions, loading } = useRandomQuestions(5)
```

### Server Actions for Mutations

#### Next.js Server Actions
```typescript
// app/actions/scores.ts
'use server'

import { supabaseServer } from '@/lib/supabase-server'

export async function updateUserScoreAction(
  userId: string,
  correctAnswers: number,
  wrongAnswers: number
): Promise<ScoreActionResult> {
  // Server-side logic with Supabase
  const { data, error } = await supabaseServer
    .from('profile')
    .update({ score: newScores })
    .eq('user_id', userId)
    .select()
    .single()

  if (error) {
    return { success: false, error: error.message }
  }

  return { success: true, data }
}
```

## Modern React 19 Features

### React 19 Hooks Integration

1. **`useActionState`**: Modern form state management
   ```tsx
   const [state, formAction] = useActionState(signInAction, null)
   ```

2. **`useFormStatus`**: Provides submission status
   ```tsx
   const { pending } = useFormStatus()
   ```

3. **`useOptimistic`**: Immediate UI updates
   ```tsx
   const [optimisticName, updateOptimisticName] = useOptimistic(
     displayName,
     (current, newName) => newName
   )
   ```

4. **`useTransition`**: Smooth state transitions
   ```tsx
   const [isPending, startTransition] = useTransition()
   ```

## Key Challenges and Solutions

### Challenge 1: Server-Side Data Fetching

**Problem:** Vue.js components needed manual refresh to see updated data.

**Solution:** Next.js Server Components enable server-side data fetching:
```tsx
// app/high-scores/page.tsx
export default async function HighScoresPage() {
  const highScores = await getHighScores()
  return <HighScoresClient highScores={highScores} />
}
```

### Challenge 2: Type Safety

**Problem:** Supabase queries needed proper TypeScript typing.

**Solution:** Created shared type definitions and typed Supabase responses:
```typescript
// types/game.ts
export type { Question, Answer, Profile, HighScore } from '@/lib/supabase-queries'

// lib/supabase-queries.ts
export interface Question {
  id: string
  question: string
  created_at?: string
}
```

### Challenge 3: Authentication

**Problem:** Client-side authentication needed proper session management.

**Solution:** Implemented Supabase Auth with Server Actions and proper session handling:
```typescript
// lib/auth.ts
export function useCurrentUser() {
  const { user, loading } = useSupabase()
  return user ? { userId: user.id } : null
}
```

### Challenge 4: Complex State Management

**Problem:** Game state management was complex with multiple interdependent states.

**Solution:** Created custom hooks to encapsulate game logic:
```typescript
// lib/gameUtils.ts
export function useGameUtils() {
  const postScore = async (correctAnswers: number, wrongAnswers: number) => {
    // Encapsulated logic using Server Actions
  }
  
  return { postScore, updateHighScore, sortQuestions }
}
```

## Benefits Realized

### Performance Improvements

1. **Faster Initial Load**: Next.js SSR reduces time to first contentful paint
2. **Better SEO**: Server-rendered pages are fully crawlable
3. **Automatic Code Splitting**: Only necessary code is loaded per route
4. **Server-Side Rendering**: Reduced client-side JavaScript bundle size

### Developer Experience

1. **Type Safety**: End-to-end TypeScript from frontend to backend
2. **Hot Reloading**: Instant feedback during development
3. **Built-in Routing**: File-based routing eliminates route configuration
4. **Server Actions**: Simplified server-side mutations without API routes

### Code Quality

1. **Reduced Boilerplate**: Server Components eliminate client-side data fetching code
2. **Better Organization**: File-based routing is more intuitive
3. **Reusable Logic**: Custom hooks promote code reuse
4. **Error Handling**: Better error boundaries and handling with Server Actions

## Project Structure

```
volcanoTriviaAppRm/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── game/
│   │   └── page.tsx       # Game page
│   ├── profile/
│   │   └── page.tsx       # Profile page
│   ├── actions/           # Server Actions
│   │   ├── auth.ts
│   │   ├── profile.ts
│   │   └── scores.ts
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── StartComponent.tsx
│   ├── MainQuestionSection.tsx
│   └── ...
├── lib/                   # Utility functions
│   ├── auth.ts           # Authentication helpers
│   ├── gameUtils.ts      # Game logic hooks
│   ├── supabase.ts       # Supabase client
│   ├── supabase-server.ts # Supabase server client
│   ├── supabase-queries.ts # Query hooks
│   └── supabase-mutations.ts # Mutation helpers
├── types/                 # TypeScript types
│   └── game.ts           # Shared game types
└── scripts/              # Utility scripts
    └── generateJWTKeys.mjs
```

## Migration Checklist

- [x] Set up Next.js project with TypeScript
- [x] Migrate Vue components to React components
- [x] Implement file-based routing
- [x] Set up Supabase backend integration
- [x] Create Server Actions for mutations
- [x] Migrate authentication logic to Supabase Auth
- [x] Update state management to React hooks
- [x] Implement Server Components for data fetching
- [x] Add TypeScript strict types
- [x] Test all functionality
- [x] Deploy to production

## Lessons Learned

1. **Plan the Migration**: Break down the migration into smaller, manageable steps
2. **Type Safety Matters**: Leverage TypeScript for catching errors early
3. **Server Components are Powerful**: Use Server Components for initial data fetching
4. **Server Actions Simplify Backend**: No need for API routes for simple mutations
5. **Custom Hooks Help**: Encapsulate complex logic in reusable hooks
6. **Test Incrementally**: Test each migrated feature before moving to the next
7. **Maintain Supabase**: Keep using Supabase for its excellent developer experience and features

## Future Improvements

1. **Real-time Features**: Add Supabase real-time subscriptions for live updates
2. **Optimistic Updates**: Implement optimistic UI updates for better UX
3. **Error Boundaries**: Add React error boundaries for better error handling
4. **Performance Monitoring**: Add analytics and performance monitoring
5. **Testing**: Add unit and integration tests
6. **Accessibility**: Improve accessibility features
7. **PWA Features**: Add Progressive Web App capabilities

## Conclusion

The migration from Vue.js to Next.js while maintaining Supabase as the backend has resulted in a more modern, performant, and maintainable application. The new stack provides:

- **Better Performance**: SSR and optimized React rendering
- **Type Safety**: End-to-end TypeScript support
- **Simplified Backend**: Server Actions eliminate API route boilerplate
- **Better DX**: Improved developer experience with Next.js and React 19
- **Proven Backend**: Supabase provides a robust, scalable database and auth solution

While the migration required significant effort, the benefits in terms of performance, developer experience, and code quality make it a worthwhile investment. The application is now better positioned for future growth and feature additions.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Supabase Documentation](https://supabase.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
