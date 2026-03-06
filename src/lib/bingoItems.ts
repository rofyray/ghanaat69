import { BingoItem } from "@/types";
import data from "@/data/bingoItems.json";

let allItems: BingoItem[] | null = null;

export function getBingoItems(): BingoItem[] {
  if (allItems) return allItems;

  let id = 1;
  allItems = [];
  for (const category of data.categories) {
    for (const text of category.items) {
      allItems.push({ id: id++, text, category: category.name });
    }
  }
  return allItems;
}

export function getFreeSquareText(): string {
  return data.freeSquareText;
}
