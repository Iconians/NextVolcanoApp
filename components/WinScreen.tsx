'use client'

import Link from 'next/link'
import AnimatedVolcanoBackground from './AnimatedVolcanoBackground'

interface WinScreenProps {
  correctAnswers: number
  wrongAnswers: number
}

export default function WinScreen({ correctAnswers, wrongAnswers }: WinScreenProps) {
  return (
    <section className="min-h-screen flex justify-center items-center text-white w-full p-4 relative">
      <AnimatedVolcanoBackground variant="calm-volcano" intensity="subtle" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
      <div className="modern-card p-8 md:p-12 max-w-lg w-full relative z-10 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-volcano-gradient bg-clip-text text-transparent">
            🎉 Congratulations! 🎉
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            You've proven yourself as a true Volcanologist!
          </p>
        </div>
        <div className="text-xl md:text-2xl mb-8 space-y-2">
          <p className="text-volcano-amber font-semibold">Correct: {correctAnswers}</p>
          <p className="text-volcano-red font-semibold">Incorrect: {wrongAnswers}</p>
        </div>
        <div className="flex flex-col gap-4">
          <Link href="/high-scores" className="btn-modern text-center">
            High Scores
          </Link>
          <Link href="/" className="link-modern text-xl font-semibold py-2">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  )
}
