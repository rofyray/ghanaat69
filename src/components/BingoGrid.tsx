"use client";

import { BingoItem, GridSize } from "@/types";
import BingoCell from "./BingoCell";
import { getCenterIndex } from "@/lib/generateGrid";

interface Props {
  items: BingoItem[];
  gridSize: GridSize;
  selected: Set<number>;
  onToggle: (index: number) => void;
}

export default function BingoGrid({ items, gridSize, selected, onToggle }: Props) {
  const centerIndex = getCenterIndex(gridSize);

  return (
    <div
      className="grid gap-1.5 sm:gap-2 w-full max-w-[500px] mx-auto"
      style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
    >
      {items.map((item, index) => (
        <BingoCell
          key={`${item.id}-${index}`}
          item={item}
          isSelected={selected.has(index)}
          isFree={index === centerIndex}
          gridSize={gridSize}
          onToggle={() => onToggle(index)}
        />
      ))}
    </div>
  );
}
