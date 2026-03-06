"use client";

import { useEffect, useState } from "react";
import { RankTier } from "@/types";

interface Props {
  score: number;
  total: number;
  rank: RankTier;
}

export default function ScoreDisplay({ score, total, rank }: Props) {
  const [displayScore, setDisplayScore] = useState(0);
  const [showRank, setShowRank] = useState(false);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.floor(score / 20));
    const interval = setInterval(() => {
      current += step;
      if (current >= score) {
        current = score;
        clearInterval(interval);
        setTimeout(() => setShowRank(true), 300);
      }
      setDisplayScore(current);
    }, 30);
    return () => clearInterval(interval);
  }, [score]);

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      {/* Score in retro LED style */}
      <div className="animate-count-up bg-dark-panel border-2 border-faded-white/20 rounded-lg px-8 py-6">
        <span className="font-display text-4xl sm:text-5xl text-ghana-gold animate-flicker">
          {displayScore}
        </span>
        <span className="font-display text-xl sm:text-2xl text-faded-white">
          {" "}/ {total}
        </span>
      </div>
      {showRank && (
        <div className="animate-slide-up">
          <h2 className="font-display text-sm sm:text-base text-ghana-gold uppercase tracking-[0.15em]">
            &ldquo;{rank.rank}&rdquo;
          </h2>
          <p className="font-body text-xs sm:text-sm text-faded-white mt-2 tracking-wide">
            {rank.subtitle}
          </p>
        </div>
      )}
    </div>
  );
}
