export interface BingoItem {
  id: number;
  text: string;
  category: string;
}

export type GridSize = 3 | 4 | 5;

export interface GameState {
  gridSize: GridSize;
  items: BingoItem[];
  selected: Set<number>;
  seed: number;
}

export interface RankTier {
  minScore: number;
  maxScore: number;
  rank: string;
  subtitle: string;
}
