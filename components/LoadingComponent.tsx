export default function LoadingComponent() {
  return (
    <section className="relative min-h-screen w-full bg-bg-darker flex justify-center items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="loader"></div>
        <p className="text-xl text-gray-400 font-medium">Loading...</p>
      </div>
    </section>
  )
}
