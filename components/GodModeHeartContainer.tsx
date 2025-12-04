interface GodModeHeartContainerProps {
  wrongAnswers: number
}

export default function GodModeHeartContainer({ wrongAnswers }: GodModeHeartContainerProps) {
  return (
    <div className="flex z-10 max-w-full flex-wrap gap-2 md:gap-3">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((noOfHearts) => (
        <div
          key={noOfHearts}
          className="heart"
          style={{ display: wrongAnswers < noOfHearts ? 'block' : 'none' }}
        ></div>
      ))}
    </div>
  )
}
