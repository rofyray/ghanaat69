import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 relative">
      {/* Ghana flag stripes top — hard retro bars */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="h-2 bg-ghana-red" />
        <div className="h-2 bg-ghana-gold" />
        <div className="h-2 bg-ghana-green" />
      </div>

      <div className="flex flex-col items-center gap-8 text-center max-w-lg">
        {/* Star — retro panel style */}
        <div className="w-20 h-20 bg-ghana-gold rounded-lg flex items-center justify-center border-2 border-ghana-gold glow-gold">
          <span className="text-ghana-black text-5xl leading-none translate-y-[1px]">&#9733;</span>
        </div>

        <Header />

        <div className="flex flex-col gap-4">
          <h2 className="font-display text-lg sm:text-xl text-worn-white uppercase tracking-[0.15em] leading-relaxed">
            How Ghanaian<br />Are You?
          </h2>
          <p className="font-body text-faded-white text-xs sm:text-sm leading-relaxed">
            Play identity bingo for Ghana&apos;s 69th Independence Day.
            <br />
            Tap the squares that apply to you, get your rank, and flex on your friends.
          </p>
        </div>

        {/* Retro hard-edged CTA button */}
        <Link
          href="/play"
          className="mt-4 px-8 py-4 bg-ghana-gold text-ghana-black font-display text-xs sm:text-sm uppercase tracking-[0.2em] rounded-lg border-2 border-ghana-gold glow-gold hover:scale-105 transition-transform active:scale-95"
        >
          [ PLAY NOW ]
        </Link>

        <p className="text-faded-white text-[10px] font-body tracking-wider uppercase">
          {"March 6, 2026 // Happy Independence Day"}
        </p>
      </div>

      {/* Flag stripes bottom */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <div className="h-2 bg-ghana-green" />
        <div className="h-2 bg-ghana-gold" />
        <div className="h-2 bg-ghana-red" />
      </div>
    </main>
  );
}
