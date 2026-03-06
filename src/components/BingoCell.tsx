"use client";

import { useState } from "react";
import { BingoItem } from "@/types";

interface Props {
  item: BingoItem;
  isSelected: boolean;
  isFree: boolean;
  gridSize: number;
  onToggle: () => void;
}

export default function BingoCell({ item, isSelected, isFree, gridSize, onToggle }: Props) {
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    if (isFree) return;
    setAnimating(true);
    onToggle();
    setTimeout(() => setAnimating(false), 200);
  };

  const textSize =
    gridSize === 3
      ? "text-[10px] sm:text-xs"
      : gridSize === 4
        ? "text-[9px] sm:text-[10px]"
        : "text-[8px] sm:text-[9px]";

  return (
    <button
      onClick={handleClick}
      className={`
        relative aspect-square rounded-lg p-1.5 sm:p-2 flex items-center justify-center text-center
        transition-all duration-150 select-none overflow-hidden border-2
        ${animating ? "animate-cell-pop" : ""}
        ${isSelected
          ? "bg-ghana-gold/90 text-ghana-black border-ghana-gold glow-gold"
          : "bg-crt-dark text-worn-white/70 border-faded-white/10 hover:border-ghana-gold/30"
        }
        ${isFree ? "cursor-default" : "cursor-pointer active:scale-95"}
      `}
    >
      {isFree ? (
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-lg sm:text-xl leading-none">&#9733;</span>
          <span className={`${textSize} font-body font-bold tracking-wider`}>FREE</span>
        </div>
      ) : (
        <span className={`${textSize} font-body leading-tight`}>
          {item.text}
        </span>
      )}
    </button>
  );
}
