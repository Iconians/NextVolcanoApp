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

- **Next.js 14+:** React framework with App Router for building the application.
- **TypeScript:** Type-safe JavaScript for better development experience.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Convex:** Backend platform for handling user authentication and storing quiz data.
- **React:** Frontend library for building interactive user interfaces.

## Data Model

### Answer

```json
{
  "_id": "Id<\"answers\">",
  "questionId": "Id<\"questions\">",
  "answers": ["answer1", "answer2", "answer3"],
  "correctAnswer": "text",
  "_creationTime": 1234567890
}
```

### High Score

```json
{
  "_id": "Id<\"highScores\">",
  "userName": "text",
  "score": 5,
  "_creationTime": 1234567890
}
```

### Profile

```json
{
  "_id": "Id<\"profiles\">",
  "userId": "string",
  "displayName": "text",
  "scores": [
    {
      "correct": 3,
      "incorrect": 2,
      "timeStamp": "MMM Do YY"
    }
  ],
  "_creationTime": 1234567890
}
```

### Question

```json
{
  "_id": "Id<\"questions\">",
  "question": "text",
  "_creationTime": 1234567890
}
```

### Getting Started

1 Clone the repository.

```bash
git clone https://github.com/Iconians/volcanoTriviaApp.git
```

2 Install dependencies.

```bash
npm i
```

3 Set up Convex.

```bash
npx convex dev
```

This will create a `.env.local` file with your Convex deployment URL. Make sure `NEXT_PUBLIC_CONVEX_URL` is set.

4 Run the application.

```bash
npm run dev
```

5 Visit [http://localhost:3000](http://localhost:3000) in your browser.

visit the site here [live site](https://volcano-trivia-app.vercel.app/)

## Future Plans

1. Expand the question pool to provide more variety.
2. Enhance user profiles and add additional features.

## Contributing

Contributions are welcome! If you have ideas for improvement, feel free to submit a pull request.
