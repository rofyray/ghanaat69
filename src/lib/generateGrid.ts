import { BingoItem, GridSize } from "@/types";
import { getBingoItems, getFreeSquareText } from "./bingoItems";

// Mulberry32 PRNG - deterministic from seed
function mulberry32(seed: number): () => number {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Fisher-Yates shuffle with seeded PRNG
function seededShuffle<T>(array: T[], rng: () => number): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function generateGrid(
  size: GridSize,
  seed?: number
): { items: BingoItem[]; seed: number } {
  const actualSeed = seed ?? Math.floor(Math.random() * 2147483647);
  const rng = mulberry32(actualSeed);
  const allItems = getBingoItems();
  const totalCells = size * size;
  const hasFreeSquare = size !== 4; // 3x3 and 5x5 have center FREE square
  const itemsNeeded = hasFreeSquare ? totalCells - 1 : totalCells;

  const shuffled = seededShuffle(allItems, rng);
  const selected = shuffled.slice(0, itemsNeeded);

  const freeSquare: BingoItem = {
    id: 0,
    text: getFreeSquareText(),
    category: "FREE",
  };

  if (hasFreeSquare) {
    const centerIndex = Math.floor(totalCells / 2);
    selected.splice(centerIndex, 0, freeSquare);
  }

  return { items: selected, seed: actualSeed };
}

export function getCenterIndex(size: GridSize): number | null {
  if (size === 4) return null;
  return Math.floor((size * size) / 2);
}
