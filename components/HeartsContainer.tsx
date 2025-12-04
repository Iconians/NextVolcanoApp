interface HeartsContainerProps {
  wrongAnswers: number
}

export default function HeartsContainer({ wrongAnswers }: HeartsContainerProps) {
  return (
    <div className="flex gap-3 z-10">
      {wrongAnswers === 0 && <div className="heart"></div>}
      {wrongAnswers <= 1 && <div className="heart"></div>}
      {wrongAnswers <= 2 && <div className="heart"></div>}
    </div>
  )
}
