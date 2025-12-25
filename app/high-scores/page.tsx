'use client'

import ScoresComp from '@/components/ScoresComp'
import Link from 'next/link'
import { useHighScores } from '@/lib/supabase-queries'
import { useEffect, useRef } from 'react'

function HighScoresContent() {
  const { highScores: scores, loading } = useHighScores(10)
  const backgroundMusicRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.play()
    }
  }, [])

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
            <ScoresComp scores={scores || []} />
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
      <audio ref={backgroundMusicRef} src="/lava-loop-3.wav" autoPlay loop />
    </section>
  )
}

export default function HighScoresPage() {
  return <HighScoresContent />
}
