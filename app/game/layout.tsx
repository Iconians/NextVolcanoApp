import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Play Game | Volcano Trivia',
  description:
    'Test your knowledge of volcanology! Answer 5 questions correctly to win, but be careful - 3 wrong answers and you lose!'
}

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return children
}
