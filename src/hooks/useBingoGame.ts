"use client";

import { useState, useCallback, useMemo } from "react";
import { BingoItem, GridSize } from "@/types";
import { generateGrid, getCenterIndex } from "@/lib/generateGrid";
import { getRank } from "@/lib/scoring";

export function useBingoGame() {
  const [gridSize, setGridSize] = useState<GridSize | null>(null);
  const [items, setItems] = useState<BingoItem[]>([]);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [seed, setSeed] = useState<number>(0);

  const startGame = useCallback((size: GridSize, existingSeed?: number) => {
    const { items: gridItems, seed: gridSeed } = generateGrid(size, existingSeed);
    setGridSize(size);
    setItems(gridItems);
    setSeed(gridSeed);

    // Auto-select FREE square
    const centerIdx = getCenterIndex(size);
    if (centerIdx !== null) {
      setSelected(new Set([centerIdx]));
    } else {
      setSelected(new Set());
    }
  }, []);

  const toggleCell = useCallback((index: number) => {
    // Don't allow toggling the FREE square
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        // Check if it's the free square
        if (items[index]?.category === "FREE") return prev;
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, [items]);

  const score = selected.size;
  const total = gridSize ? gridSize * gridSize : 0;

  const rank = useMemo(() => {
    if (!gridSize) return null;
    return getRank(score, gridSize);
  }, [score, gridSize]);

  const selectedIndices = useMemo(() => Array.from(selected).sort((a, b) => a - b), [selected]);

  return {
    gridSize,
    items,
    selected,
    seed,
    score,
    total,
    rank,
    selectedIndices,
    startGame,
    toggleCell,
    setGridSize,
  };
}
