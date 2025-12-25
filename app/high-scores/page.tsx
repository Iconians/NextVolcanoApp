import ScoresComp from '@/components/ScoresComp'
import Link from 'next/link'
import { supabaseServer } from '@/lib/supabase-server'
import { HighScore } from '@/lib/supabase-queries'
import HighScoresClient from './HighScoresClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'High Scores | Volcano Trivia',
  description: 'View the top scores in Volcano Trivia! See who has mastered the art of volcanology.'
}

async function getHighScores(limit: number = 10): Promise<HighScore[]> {
  const { data, error } = await supabaseServer
    .from('high_score')
    .select('*')
    .order('score', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching high scores:', error)
    return []
  }

  return data || []
}

export default async function HighScoresPage() {
  const scores = await getHighScores(10)

  return (
    <section className="relative min-h-screen w-full text-center text-white overflow-y-auto">
      <div className="gradient-mesh-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-4 md:p-8 py-12">
        <div className="max-w-4xl w-full">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-volcano-gradient bg-clip-text text-transparent mb-4">
              High Scores
            </h1>
          </div>
          <div className="mb-8">
            <ScoresComp scores={scores} />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" className="btn-modern text-center min-w-[150px]">
              Home
            </Link>
            <Link href="/profile" className="link-modern text-xl font-semibold py-2 px-6">
              Profile
            </Link>
          </div>
        </div>
      </div>
      <HighScoresClient />
    </section>
  )
}
