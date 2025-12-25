# Volcano Trivia App

Welcome to the Volcano Trivia App! Are you smart enough to be a volcanologist? Test your knowledge with our engaging trivia questions and see how you stack up against the experts. If you're not careful, you might trigger a volcanic eruption!

## Table of Contents

- [Introduction](#volcano-trivia-app)
- [Features](#features)
- [Pages](#pages)
- [Technologies](#technologies)
- [Data Model](#data-model)
- [Getting Started](#getting-started)
- [Future Plans](#future-plans)
- [Contributing](#contributing)

## Features

- Log in to start the quiz.
- Answer 5 randomly selected questions ranging from easy to hard.
- View results to see how well you performed.
- Explore high scores to challenge others.

## Pages

1. **Start Page**
    - Users log in here to start the quiz.

2. **Question Page**
    - Users face a series of 5 random questions, testing their volcano knowledge.

3. **Results Page**
    - Displays the results of the quiz, highlight how many answer you got right/wrong.

4. **Users Page**
    - Explore users scores.
    - change password and log out

5. **High Score Page**
    - view top High scores.
    - navigate to home or user Page

## Technologies

- **Next.js 16+:** React framework with App Router for building the application.
- **React 19:** Latest React version with modern hooks and features.
- **TypeScript:** Type-safe JavaScript for better development experience.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Supabase:** Backend platform for handling user authentication and storing quiz data in PostgreSQL.

## Modern Features

This application showcases modern React 19 and Next.js 16 features:

### React 19 Hooks

- **`useActionState`**: Modern form state management in all authentication and profile forms (SignIn, CreateAccount, ResetPassword, UpdateUsername). Replaces manual `useState` + `useEffect` patterns for cleaner, more declarative form handling.
- **`useFormStatus`**: Provides submission status without prop drilling in form components.
- **`useOptimistic`**: Immediate UI updates for username changes before server confirmation, providing instant feedback.
- **`useTransition`**: Smooth state transitions during game state updates, preventing UI blocking during non-urgent updates.

### Next.js 16 Features

- **Server Components**: High scores page uses Server Components for optimal data fetching and SEO.
- **Server Actions**: Secure server-side mutations for scores and profile updates, keeping credentials on the server.
- **Dynamic Metadata**: Page-specific metadata exports for improved SEO on game, profile, and high-scores pages.
- **App Router**: Modern routing with improved performance and developer experience.

### Other Modern Improvements

- **Native Date Formatting**: Replaced `moment.js` with native `Intl.DateTimeFormat` for smaller bundle size and better performance.
- **TypeScript Improvements**: Shared type definitions in `types/game.ts` for better type safety across components.

## Data Model

### Answer

```json
{
  "id": "uuid",
  "question_foreign_key": "uuid",
  "answers": ["answer1", "answer2", "answer3"],
  "correct_answer": "text",
  "created_at": "2024-01-01T00:00:00Z"
}
```

### High Score

```json
{
  "id": "int8",
  "user_name": "text",
  "score": 5,
  "created_at": "2024-01-01T00:00:00Z"
}
```

### Profile

```json
{
  "id": "int8",
  "user_id": "uuid",
  "display_name": "text",
  "score": [
    {
      "correct": 3,
      "incorrect": 2,
      "time_stamp": "MMM Do YY"
    }
  ],
  "created_at": "2024-01-01T00:00:00Z"
}
```

### Question

```json
{
  "id": "uuid",
  "question": "text",
  "created_at": "2024-01-01T00:00:00Z"
}
```

### Getting Started

1. Clone the repository.

```bash
git clone https://github.com/Iconians/volcanoTriviaApp.git
```

2. Install dependencies.

```bash
npm i
```

3. Set up Supabase.

   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Create the following tables: `questions`, `answers`, `profile`, `high_score`
   - Get your Supabase URL and anon key from the project settings
   - Create a `.env.local` file with:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the application.

```bash
npm run dev
```

5. Run the application.

```bash
npm run dev
```

6. Visit [http://localhost:3000](http://localhost:3000) in your browser.

Visit the site here: [live site](https://volcano-trivia-app.vercel.app/)

## Future Plans

1. Expand the question pool to provide more variety.
2. Enhance user profiles and add additional features.

## Contributing

Contributions are welcome! If you have ideas for improvement, feel free to submit a pull request.
