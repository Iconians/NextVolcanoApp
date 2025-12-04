'use client'

import { useEffect, useRef } from 'react'
import QuestionForm from './QuestionForm'
import GodModeHeartContainer from './GodModeHeartContainer'
import GameStatistics from './GameStatistics'

interface Question {
  _id: string
  question: string
}

interface Answer {
  _id: string
  questionId: string
  answers: string[]
  correctAnswer: string
}

interface GodModeMainQuestionSectionProps {
  questionsArray: Question[]
  answerArray: Answer[]
  wrongAnswers: number
  correctAnswers: number
  answerClass: string
  onSubmit: (answer: string) => void
}

export default function GodModeMainQuestionSection({
  questionsArray,
  answerArray,
  wrongAnswers,
  correctAnswers,
  answerClass,
  onSubmit
}: GodModeMainQuestionSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const adjustHeight = () => {
      if (sectionRef.current) {
        const height = `${sectionRef.current.scrollHeight}px`
        sectionRef.current.style.setProperty('--pseudo-element-height', height)
      }
    }

    if (sectionRef.current) {
      sectionRef.current.addEventListener('scroll', adjustHeight)
      window.addEventListener('resize', adjustHeight)
      adjustHeight()
    }

    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('scroll', adjustHeight)
      }
      window.removeEventListener('resize', adjustHeight)
    }
  }, [])

  return (
    <section
      className={`relative bg-stHelensWithtop text-white min-h-screen w-full bg-cover bg-center ${answerClass}`}
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
        <div className="flex justify-between items-start w-full max-w-7xl mb-8 gap-4">
          <GameStatistics correctAnswers={correctAnswers} />
          <GodModeHeartContainer wrongAnswers={wrongAnswers} />
        </div>
        <div className="w-full flex-1 flex items-center justify-center">
          <QuestionForm
            questionsArray={questionsArray}
            answerArray={answerArray}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </section>
  )
}
