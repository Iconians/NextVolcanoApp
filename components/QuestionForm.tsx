'use client'

import type { Question, Answer } from '@/types/game'

interface QuestionFormProps {
  questionsArray: Question[]
  answerArray: Answer[]
  onSubmit: (answer: string) => void
  selectedAnswer: string | null
  correctAnswer: string | null
}

export default function QuestionForm({
  questionsArray,
  answerArray,
  onSubmit,
  selectedAnswer,
  correctAnswer
}: QuestionFormProps) {
  if (questionsArray.length === 0) return null

  const currentQuestion = questionsArray[0]
  const currentAnswers = answerArray.filter((a) => a.question_foreign_key === currentQuestion.id)

  if (currentAnswers.length === 0) return null

  const answerObj = currentAnswers[0]

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="flex flex-col justify-center items-center min-h-[450px] gap-8 py-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-white mb-8 max-w-4xl leading-relaxed">
          {currentQuestion.question}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
          {answerObj.answers.map((answer, index) => {
            const isSelected = selectedAnswer === answer
            const isCorrect = correctAnswer === answer
            const isWrong = isSelected && !isCorrect && selectedAnswer !== null

            let borderClass = 'border-transparent hover:border-volcano-orange/50'
            if (selectedAnswer !== null) {
              if (isCorrect) {
                borderClass = 'border-green-500 border-2 shadow-lg shadow-green-500/50'
              } else if (isWrong) {
                borderClass = 'border-volcano-red border-2 shadow-lg shadow-volcano-red/50'
              }
            }

            return (
              <button
                key={`answer-${index}`}
                className={`modern-card p-6 flex flex-col items-center justify-center min-h-[140px] group ${borderClass} transition-all duration-300 ${
                  selectedAnswer !== null ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'
                } focus:outline-none focus:ring-2 focus:ring-volcano-orange focus:ring-offset-2 focus:ring-offset-transparent`}
                onClick={() => onSubmit(answer)}
                aria-label={`Select answer: ${answer}`}
                disabled={selectedAnswer !== null}
              >
                <p className="text-lg md:text-xl font-medium text-center text-white mb-4 group-hover:text-volcano-amber transition-colors">
                  {answer}
                </p>
                <div className="w-12 h-12 rounded-full bg-volcano-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-xl" aria-hidden="true">
                    ✓
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
