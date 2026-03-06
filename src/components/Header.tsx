"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-4 text-center">
      <Link href="/" className="flex items-center justify-center gap-3">
        <div className="w-8 h-8 bg-ghana-gold rounded flex items-center justify-center glow-gold">
          <span className="text-ghana-black text-lg font-bold leading-none">&#9733;</span>
        </div>
        <h1 className="font-display text-sm sm:text-base tracking-[0.2em] text-worn-white uppercase animate-flicker">
          <span className="text-ghana-red">Gh</span><span className="text-ghana-gold">a</span><span className="text-ghana-green">na</span><span className="text-worn-white">@69</span>
        </h1>
      </Link>
    </header>
  );
}
