'use client'

import { useState, useEffect, useRef } from 'react'
import GodModeMainQuestionSection from '@/components/GodModeMainQuestionSection'
import LostScreen from '@/components/LostScreen'
import WinScreen from '@/components/WinScreen'
import LoadingComponent from '@/components/LoadingComponent'
import { useRandomQuestions, useAnswers } from '@/lib/supabase-queries'
import { useGameUtils } from '@/lib/gameUtils'
import type { Question, Answer } from '@/types/game'
import toast from 'react-hot-toast'

function GodModeGamePageContent() {
  const [questionsArray, setQuestionsArray] = useState<Question[]>([])
  const [answerArray, setAnswerArray] = useState<Answer[]>([])
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [loading, setLoading] = useState(true)
  const [answerSubmitted, setAnswerSubmitted] = useState(false)
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null)
  const backgroundMusicRef = useRef<HTMLAudioElement>(null)
  const correctSoundRef = useRef<HTMLAudioElement>(null)
  const incorrectSoundRef = useRef<HTMLAudioElement>(null)

  const { questions: allQuestions, loading: questionsLoading } = useRandomQuestions(1000)
  const { postScore, updateHighScore, sortQuestions, displayName, userId } = useGameUtils()

  useEffect(() => {
    if (allQuestions && allQuestions.length > 0) {
      // Get 100 unique questions
      const uniqueQuestions: Question[] = []
      const questionTexts = new Set<string>()

      for (const question of allQuestions) {
        if (!questionTexts.has(question.question) && uniqueQuestions.length < 100) {
          questionTexts.add(question.question)
          uniqueQuestions.push(question)
        }
      }

      setQuestionsArray(uniqueQuestions)
    }
  }, [allQuestions])

  // Fetch answers for questions
  const questionIds = questionsArray.length > 0 ? questionsArray.map((q) => q.id) : []
  const { answers, loading: answersLoading } = useAnswers(questionIds)

  useEffect(() => {
    if (answers && answers.length > 0 && questionsArray.length > 0) {
      setAnswerArray(answers)
      setLoading(false)
    } else if (questionsLoading || answersLoading) {
      setLoading(true)
    } else if (allQuestions && allQuestions.length > 0) {
      setLoading(false)
    }
  }, [answers, questionsArray, allQuestions, questionsLoading, answersLoading])

  const playBackgroundMusic = () => {
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.play()
    }
  }

  useEffect(() => {
    playBackgroundMusic()
  }, [])

  const answerClass = answerSubmitted ? (lastAnswerCorrect ? 'correct' : 'incorrect') : ''

  const handlePostScore = async () => {
    if (questionsArray.length === 0 || wrongAnswers === 10) {
      if (userId) {
        await postScore(correctAnswers, wrongAnswers)
      }
    }
    if (correctAnswers >= 50 && userId && displayName) {
      await updateHighScore(displayName, correctAnswers)
    }
  }

  const findAnswer = (correctAnswer: { correct_answer: string }[], answer: string) => {
    const getAnswer = correctAnswer[0]?.correct_answer
    if (answer === getAnswer) {
      setCorrectAnswers((prev) => prev + 1)
      setAnswerSubmitted(true)
      setLastAnswerCorrect(true)
      if (correctSoundRef.current) {
        correctSoundRef.current.play()
      }
    } else {
      setWrongAnswers((prev) => prev + 1)
      setAnswerSubmitted(true)
      setLastAnswerCorrect(false)
      if (incorrectSoundRef.current) {
        incorrectSoundRef.current.play()
      }
    }
  }

  const checkAnswer = async (answer: string) => {
    const correctAnswerArray = answerArray.filter(
      (a) => a.question_foreign_key === questionsArray[0]?.id
    )

    if (correctAnswerArray.length > 0) {
      setSelectedAnswer(answer)
      setCorrectAnswer(correctAnswerArray[0].correct_answer)
      findAnswer(correctAnswerArray, answer)
    }

    if (wrongAnswers === 10) {
      await handlePostScore()
      return
    }

    if (questionsArray.length > 0) {
      const newQuestions = [...questionsArray]
      const newAnswers = [...answerArray]
      sortQuestions(newQuestions, newAnswers)
      setQuestionsArray(newQuestions)
      setAnswerArray(newAnswers)
    }

    if (correctAnswers + wrongAnswers === 100 && wrongAnswers < 10) {
      await handlePostScore()
    }

    setTimeout(() => {
      setAnswerSubmitted(false)
      setSelectedAnswer(null)
      setCorrectAnswer(null)
    }, 800)
  }

  if (loading) {
    return <LoadingComponent />
  }

  if (questionsArray.length > 0 && wrongAnswers < 10 && !loading) {
    return (
      <>
        <GodModeMainQuestionSection
          questionsArray={questionsArray}
          answerArray={answerArray}
          wrongAnswers={wrongAnswers}
          correctAnswers={correctAnswers}
          answerClass={answerClass}
          onSubmit={checkAnswer}
          selectedAnswer={answerSubmitted ? selectedAnswer : null}
          correctAnswer={answerSubmitted ? correctAnswer : null}
        />
        <audio ref={backgroundMusicRef} src="/lava-loop-3.wav" autoPlay loop />
        <audio ref={correctSoundRef} src="/correct.mp3" />
        <audio ref={incorrectSoundRef} src="/wronganswer.mp3" />
      </>
    )
  }

  if (wrongAnswers === 10 && !loading) {
    return <LostScreen correctAnswers={correctAnswers} wrongAnswers={wrongAnswers} />
  }

  if (!loading) {
    return <WinScreen correctAnswers={correctAnswers} wrongAnswers={wrongAnswers} />
  }

  return null
}

export default function GodModeGamePage() {
  return <GodModeGamePageContent />
}
