'use client'

import { useState, useEffect, useRef, useTransition } from 'react'
import MainQuestionSection from '@/components/MainQuestionSection'
import LostScreen from '@/components/LostScreen'
import WinScreen from '@/components/WinScreen'
import LoadingComponent from '@/components/LoadingComponent'
import { useRandomQuestions, useAnswers } from '@/lib/supabase-queries'
import { useGameUtils } from '@/lib/gameUtils'
import type { Question, Answer } from '@/types/game'
import toast from 'react-hot-toast'

function GamePageContent() {
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

  const { questions: allQuestions, loading: questionsLoading } = useRandomQuestions(100)

  const { postScore, updateHighScore, sortQuestions, displayName, userId } = useGameUtils()
  const [isPending, startTransition] = useTransition()

  // Store initial 5 questions for query (never changes)
  const [initialQuestions, setInitialQuestions] = useState<Question[]>([])

  useEffect(() => {
    // Only initialize questions if game hasn't ended
    const totalAnswered = correctAnswers + wrongAnswers
    const gameEnded = wrongAnswers >= 3 || totalAnswered === 5

    if (allQuestions && allQuestions.length > 0 && questionsArray.length === 0 && !gameEnded) {
      // Shuffle the questions array fresh each time to ensure randomization
      const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5)

      // Get 5 unique random questions from the shuffled array
      const uniqueQuestions: Question[] = []
      const questionTexts = new Set<string>()

      for (const question of shuffledQuestions) {
        if (!questionTexts.has(question.question) && uniqueQuestions.length < 5) {
          questionTexts.add(question.question)
          uniqueQuestions.push(question)
        }
      }

      setQuestionsArray(uniqueQuestions)
      setInitialQuestions(uniqueQuestions) // Store for query
    }
  }, [allQuestions, questionsArray.length, correctAnswers, wrongAnswers])

  // Fetch answers once for all 5 questions using initial IDs (never changes)
  const questionIds = initialQuestions.length > 0 ? initialQuestions.map((q) => q.id) : []
  const { answers, loading: answersLoading } = useAnswers(questionIds)

  useEffect(() => {
    if (answers && answers.length > 0 && questionsArray.length > 0) {
      setAnswerArray(answers)
      setLoading(false)
    } else if (questionsArray.length === 0 && allQuestions && allQuestions.length > 0) {
      setLoading(false)
    } else if (questionsLoading || answersLoading) {
      setLoading(true)
    }
  }, [answers, questionsArray.length, allQuestions, questionsLoading, answersLoading])

  const playBackgroundMusic = async () => {
    if (backgroundMusicRef.current) {
      try {
        await backgroundMusicRef.current.play()
      } catch (error) {
        console.log('Audio autoplay prevented (requires user interaction)')
      }
    }
  }

  useEffect(() => {
    playBackgroundMusic()
  }, [])

  const checkAnswer = async (selectedAnswer: string) => {
    if (answerSubmitted) return

    const currentAnswer = answerArray.find((a) => a.question_foreign_key === questionsArray[0]?.id)

    if (!currentAnswer) {
      toast.error('Answer not found')
      return
    }

    const isCorrect = selectedAnswer === currentAnswer.correct_answer
    setAnswerSubmitted(true)
    setLastAnswerCorrect(isCorrect)
    setSelectedAnswer(selectedAnswer)
    setCorrectAnswer(currentAnswer.correct_answer)

    // Calculate new scores before updating state
    const newCorrectAnswers = isCorrect ? correctAnswers + 1 : correctAnswers
    const newWrongAnswers = isCorrect ? wrongAnswers : wrongAnswers + 1
    const totalAnswered = newCorrectAnswers + newWrongAnswers

    // Check if game is over (3 wrong answers) - MUST check first
    if (newWrongAnswers === 3) {
      // Update state immediately
      if (isCorrect) {
        setCorrectAnswers(newCorrectAnswers)
        if (correctSoundRef.current) {
          correctSoundRef.current.play().catch(() => {})
        }
      } else {
        setWrongAnswers(newWrongAnswers)
        if (incorrectSoundRef.current) {
          incorrectSoundRef.current.play().catch(() => {})
        }
      }
      setTimeout(async () => {
        await postScore(newCorrectAnswers, newWrongAnswers)
        setQuestionsArray([]) // Clear to show LostScreen
        // Ensure final state is set
        setCorrectAnswers(newCorrectAnswers)
        setWrongAnswers(newWrongAnswers)
      }, 800)
      return
    }

    // Check if won (answered all 5 questions correctly) - MUST check before moving
    if (totalAnswered === 5 && newWrongAnswers < 3) {
      // Update state immediately
      if (isCorrect) {
        setCorrectAnswers(newCorrectAnswers)
        if (correctSoundRef.current) {
          correctSoundRef.current.play().catch(() => {})
        }
      } else {
        setWrongAnswers(newWrongAnswers)
        if (incorrectSoundRef.current) {
          incorrectSoundRef.current.play().catch(() => {})
        }
      }
      setTimeout(async () => {
        await postScore(newCorrectAnswers, newWrongAnswers)
        // Update high score if player got 4 or more correct (like Vue version)
        if (newCorrectAnswers >= 4 && displayName) {
          await updateHighScore(displayName, newCorrectAnswers)
        }
        setQuestionsArray([]) // Clear to show WinScreen
        // Ensure final state is set
        setCorrectAnswers(newCorrectAnswers)
        setWrongAnswers(newWrongAnswers)
      }, 800)
      return
    }

    // Update state for continuing game
    if (isCorrect) {
      setCorrectAnswers(newCorrectAnswers)
      if (correctSoundRef.current) {
        correctSoundRef.current.play().catch(() => {})
      }
    } else {
      setWrongAnswers(newWrongAnswers)
      if (incorrectSoundRef.current) {
        incorrectSoundRef.current.play().catch(() => {})
      }
    }

    // Move to next question using sortQuestions - ONLY if game continues
    // Don't move if we've answered 5 questions or lost
    if (questionsArray.length > 0 && totalAnswered < 5 && newWrongAnswers < 3) {
      setTimeout(() => {
        startTransition(() => {
          const newQuestions = [...questionsArray]
          const newAnswers = [...answerArray]
          sortQuestions(newQuestions, newAnswers)
          setQuestionsArray(newQuestions)
          setAnswerArray(newAnswers)
        })
      }, 800)
    }

    setTimeout(() => {
      startTransition(() => {
        setAnswerSubmitted(false)
        setSelectedAnswer(null)
        setCorrectAnswer(null)
      })
    }, 800)
  }

  const answerClass = answerSubmitted ? (lastAnswerCorrect ? 'correct' : 'incorrect') : ''

  if (loading) {
    return <LoadingComponent />
  }

  // Show lose screen if 3 wrong answers
  if (wrongAnswers >= 3) {
    return <LostScreen correctAnswers={correctAnswers} wrongAnswers={wrongAnswers} />
  }

  // Show win screen if we've answered 5 questions and haven't lost
  const totalAnswered = correctAnswers + wrongAnswers
  if (totalAnswered === 5 && wrongAnswers < 3) {
    return <WinScreen correctAnswers={correctAnswers} wrongAnswers={wrongAnswers} />
  }

  // Also show win screen if questions array is cleared after winning
  if (questionsArray.length === 0 && totalAnswered >= 5 && wrongAnswers < 3) {
    return <WinScreen correctAnswers={correctAnswers} wrongAnswers={wrongAnswers} />
  }

  return (
    <div className="relative min-h-screen w-full">
      {questionsArray.length > 0 && answerArray.length > 0 && (
        <MainQuestionSection
          questionsArray={questionsArray}
          answerArray={answerArray}
          wrongAnswers={wrongAnswers}
          correctAnswers={correctAnswers}
          answerClass={answerClass}
          onSubmit={checkAnswer}
          selectedAnswer={answerSubmitted ? selectedAnswer : null}
          correctAnswer={answerSubmitted ? correctAnswer : null}
        />
      )}
      <audio ref={backgroundMusicRef} src="/lava-loop-3.wav" autoPlay loop />
      <audio ref={correctSoundRef} src="/correct.mp3" />
      <audio ref={incorrectSoundRef} src="/wronganswer.mp3" />
    </div>
  )
}

export default function GamePage() {
  return <GamePageContent />
}
