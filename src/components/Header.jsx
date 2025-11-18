import { Snowflake, Gift, TreePine } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-3">
        <Gift className="w-8 h-8 text-red-500 drop-shadow" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-emerald-400 to-yellow-300">
          Christmas To‑Do
        </h1>
        <TreePine className="w-8 h-8 text-emerald-500 drop-shadow" />
      </div>
      <p className="text-emerald-100/80 text-sm md:text-base">
        Make your list and check it twice ✨
      </p>
      {/* Snowflakes */}
      <div className="pointer-events-none absolute -top-6 left-0 right-0 flex justify-center gap-6 opacity-70">
        <Snowflake className="w-4 h-4 text-white animate-pulse" />
        <Snowflake className="w-6 h-6 text-white animate-pulse" />
        <Snowflake className="w-5 h-5 text-white animate-pulse" />
      </div>
    </header>
  )
}
