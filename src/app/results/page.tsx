"use client";

import { useEffect, useRef, useMemo, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import ScoreDisplay from "@/components/ScoreDisplay";
import ShareButtons from "@/components/ShareButtons";
import { generateGrid } from "@/lib/generateGrid";
import { getRank, isTopTier } from "@/lib/scoring";
import { GridSize, BingoItem, RankTier } from "@/types";

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [confettiFired, setConfettiFired] = useState(false);
  const tracked = useRef(false);

  const size = Number(searchParams.get("size")) as GridSize;
  const seed = Number(searchParams.get("g"));
  const selectedParam = searchParams.get("s") || "";

  const selected = useMemo(() => {
    return new Set(selectedParam.split(",").map(Number).filter((n) => !isNaN(n)));
  }, [selectedParam]);

  const { items } = useMemo(() => {
    if (!size || !seed) return { items: [] as BingoItem[], seed: 0 };
    return generateGrid(size, seed);
  }, [size, seed]);

  const total = size * size;
  const score = selected.size;
  const rank: RankTier = useMemo(() => getRank(score, size), [score, size]);

  useEffect(() => {
    if (!tracked.current) {
      tracked.current = true;
      fetch("/api/track", { method: "POST" }).catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (!confettiFired && isTopTier(score, size)) {
      setConfettiFired(true);
      import("canvas-confetti").then((mod) => {
        const confetti = mod.default;
        // Ghana colors confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#CE1126", "#FCD116", "#006B3F"],
        });
        setTimeout(() => {
          confetti({
            particleCount: 50,
            spread: 100,
            origin: { y: 0.5 },
            colors: ["#CE1126", "#FCD116", "#006B3F"],
          });
        }, 500);
      });
    }
  }, [confettiFired, score, size]);

  const handlePlayAgain = () => {
    router.push("/play");
  };

  if (!size || !seed || items.length === 0) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen px-4">
        <p className="text-white/60">Invalid results link.</p>
        <button
          onClick={() => router.push("/play")}
          className="mt-4 px-6 py-2 bg-ghana-gold text-ghana-black rounded-full font-body font-semibold"
        >
          Play Now
        </button>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-6 gap-8">
      <Header />

      <ScoreDisplay score={score} total={total} rank={rank} />

      <ShareButtons
        score={score}
        total={total}
        rank={rank}
        gridSize={size}
        items={items}
        selected={selected}
        onPlayAgain={handlePlayAgain}
      />
    </main>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <main className="flex items-center justify-center min-h-screen">
          <div className="text-white/60">Loading results...</div>
        </main>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
