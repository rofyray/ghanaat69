"use client";

import { useRef, useState } from "react";
import { GridSize, RankTier, BingoItem } from "@/types";
import { buildTwitterShareUrl, buildWhatsAppShareUrl, downloadShareCard } from "@/lib/shareUtils";
import ShareCard from "./ShareCard";

interface Props {
  score: number;
  total: number;
  rank: RankTier;
  gridSize: GridSize;
  items: BingoItem[];
  selected: Set<number>;
  onPlayAgain: () => void;
}

export default function ShareButtons({
  score,
  total,
  rank,
  gridSize,
  items,
  selected,
  onPlayAgain,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!cardRef.current || downloading) return;
    setDownloading(true);
    try {
      await downloadShareCard(cardRef.current);
    } finally {
      setDownloading(false);
    }
  };

  const btnBase =
    "w-full py-3 rounded-lg font-body font-bold text-xs sm:text-sm text-center uppercase tracking-wider transition-all border-2 active:scale-95";

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-sm mx-auto">
      <ShareCard
        ref={cardRef}
        items={items}
        gridSize={gridSize}
        selected={selected}
        score={score}
        total={total}
        rank={rank}
      />

      <a
        href={buildTwitterShareUrl(score, total, rank.rank)}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnBase} bg-worn-white text-deep-charcoal border-worn-white hover:glow-gold`}
      >
        [ SHARE TO X ]
      </a>

      <a
        href={buildWhatsAppShareUrl(score, total, rank.rank)}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnBase} bg-[#25D366] text-deep-charcoal border-[#25D366] hover:shadow-[0_0_12px_rgba(37,211,102,0.35)]`}
      >
        [ SHARE TO WHATSAPP ]
      </a>

      <button
        onClick={handleDownload}
        disabled={downloading}
        className={`${btnBase} bg-ghana-gold text-ghana-black border-ghana-gold glow-gold disabled:opacity-50`}
      >
        {downloading ? "GENERATING..." : "[ DOWNLOAD IMAGE ]"}
      </button>

      <button
        onClick={onPlayAgain}
        className={`${btnBase} bg-transparent text-worn-white border-faded-white/30 hover:border-ghana-gold/50`}
      >
        [ PLAY AGAIN ]
      </button>
    </div>
  );
}
