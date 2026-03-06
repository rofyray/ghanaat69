"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import GridSizeSelector from "@/components/GridSizeSelector";
import BingoGrid from "@/components/BingoGrid";
import { useBingoGame } from "@/hooks/useBingoGame";
import { buildResultsUrl } from "@/lib/shareUtils";

export default function PlayPage() {
  const router = useRouter();
  const { gridSize, items, selected, seed, score, selectedIndices, startGame, toggleCell } =
    useBingoGame();

  const handleSeeScore = () => {
    if (!gridSize) return;
    const url = buildResultsUrl(gridSize, seed, selectedIndices);
    router.push(url);
  };

  const showScoreButton = gridSize && score >= 3;

  return (
    <main className="flex flex-col items-center min-h-screen px-3 py-6 pb-24">
      <Header />

      {!gridSize ? (
        <div className="flex-1 flex items-center">
          <GridSizeSelector onSelect={(size) => startGame(size)} selected={gridSize} />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-5 mt-4 w-full">
          <div className="flex items-center gap-3">
            <GridSizeSelector onSelect={(size) => startGame(size)} selected={gridSize} />
          </div>

          <p className="font-body text-faded-white text-[10px] text-center uppercase tracking-widest">
            {"// Tap squares that apply to you"}
          </p>

          <BingoGrid
            items={items}
            gridSize={gridSize}
            selected={selected}
            onToggle={toggleCell}
          />

          {/* LED-style score counter */}
          <div className="text-center font-body text-xs tracking-wider">
            <span className="text-ghana-gold">{score}</span>
            <span className="text-faded-white"> / {gridSize * gridSize}</span>
            <span className="text-faded-white/50 ml-2">SELECTED</span>
          </div>

          <button
            onClick={handleSeeScore}
            disabled={!showScoreButton}
            className={`
              px-8 py-3.5 rounded-lg font-display text-[10px] sm:text-xs uppercase tracking-[0.2em]
              transition-all border-2
              ${
                showScoreButton
                  ? "bg-ghana-gold text-ghana-black border-ghana-gold animate-pulse-glow hover:scale-105 active:scale-95"
                  : "bg-crt-dark text-faded-white/30 border-faded-white/10 cursor-not-allowed"
              }
            `}
          >
            [ SEE MY SCORE ]
          </button>
        </div>
      )}
    </main>
  );
}
