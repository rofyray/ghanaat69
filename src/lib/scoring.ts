import { GridSize, RankTier } from "@/types";

const RANK_TIERS_5x5: RankTier[] = [
  { minScore: 0, maxScore: 3, rank: "Obroni", subtitle: "Are you sure you're Ghanaian?" },
  { minScore: 4, maxScore: 7, rank: "Tourist", subtitle: "You've visited once... maybe" },
  { minScore: 8, maxScore: 11, rank: "Part-Time Patriot", subtitle: "You rep Ghana only during World Cup" },
  { minScore: 12, maxScore: 15, rank: "Certified Ghanaian", subtitle: "Your auntie would be proud" },
  { minScore: 16, maxScore: 19, rank: "National Treasure", subtitle: "Ghana runs through your veins" },
  { minScore: 20, maxScore: 23, rank: "Ghana's Finest", subtitle: "Kwame Nkrumah is smiling at you" },
  { minScore: 24, maxScore: 25, rank: "Independence Incarnate", subtitle: "You ARE Ghana. Happy 69th!" },
];

const RANK_TIERS_4x4: RankTier[] = [
  { minScore: 0, maxScore: 2, rank: "Obroni", subtitle: "Are you sure you're Ghanaian?" },
  { minScore: 3, maxScore: 5, rank: "Tourist", subtitle: "You've visited once... maybe" },
  { minScore: 6, maxScore: 8, rank: "Part-Time Patriot", subtitle: "You rep Ghana only during World Cup" },
  { minScore: 9, maxScore: 11, rank: "Certified Ghanaian", subtitle: "Your auntie would be proud" },
  { minScore: 12, maxScore: 13, rank: "National Treasure", subtitle: "Ghana runs through your veins" },
  { minScore: 14, maxScore: 15, rank: "Ghana's Finest", subtitle: "Kwame Nkrumah is smiling at you" },
  { minScore: 16, maxScore: 16, rank: "Independence Incarnate", subtitle: "You ARE Ghana. Happy 69th!" },
];

const RANK_TIERS_3x3: RankTier[] = [
  { minScore: 0, maxScore: 1, rank: "Obroni", subtitle: "Are you sure you're Ghanaian?" },
  { minScore: 2, maxScore: 3, rank: "Tourist", subtitle: "You've visited once... maybe" },
  { minScore: 4, maxScore: 5, rank: "Part-Time Patriot", subtitle: "You rep Ghana only during World Cup" },
  { minScore: 6, maxScore: 7, rank: "Certified Ghanaian", subtitle: "Your auntie would be proud" },
  { minScore: 8, maxScore: 8, rank: "National Treasure", subtitle: "Ghana runs through your veins" },
  { minScore: 9, maxScore: 9, rank: "Independence Incarnate", subtitle: "You ARE Ghana. Happy 69th!" },
];

function getTiers(size: GridSize): RankTier[] {
  switch (size) {
    case 3: return RANK_TIERS_3x3;
    case 4: return RANK_TIERS_4x4;
    case 5: return RANK_TIERS_5x5;
  }
}

export function getRank(score: number, size: GridSize): RankTier {
  const tiers = getTiers(size);
  for (const tier of tiers) {
    if (score >= tier.minScore && score <= tier.maxScore) return tier;
  }
  return tiers[tiers.length - 1];
}

export function isTopTier(score: number, size: GridSize): boolean {
  const tiers = getTiers(size);
  const topTwo = tiers.slice(-2);
  return score >= topTwo[0].minScore;
}
