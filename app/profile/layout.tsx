import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile | Volcano Trivia',
  description: 'View your profile, score history, and update your username in Volcano Trivia.'
}

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return children
}
