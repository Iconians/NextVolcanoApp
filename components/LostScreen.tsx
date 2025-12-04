import Link from 'next/link'

interface LostScreenProps {
  correctAnswers: number
  wrongAnswers: number
}

export default function LostScreen({ correctAnswers, wrongAnswers }: LostScreenProps) {
  return (
    <section className="bg-lavaVolcano text-white min-h-screen w-full bg-cover bg-center flex justify-center items-center p-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      <div className="modern-card p-8 md:p-12 max-w-lg w-full relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-volcano-gradient bg-clip-text text-transparent">
          Game Over
        </h1>
        <div className="text-xl md:text-2xl mb-8 text-gray-300">
          <p>Would you be this close to an active volcano?</p>
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
