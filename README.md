# Ghana@69 - How Ghanaian Are You?

An identity bingo game built for Ghana's 69th Independence Day (March 6, 2026). Tap the squares that apply to you, get your rank, and share with friends.

**Live:** [ghanaat69.vercel.app](https://ghanaat69.vercel.app)

## How It Works

1. **Choose a grid size** — 3x3, 4x4, or 5x5
2. **Tap squares** that apply to you from culturally curated bingo items
3. **See your score** and get ranked from "Obroni" to "Independence Incarnate"
4. **Share** your results on Twitter/X, WhatsApp, or download a share card image

## Categories

Bingo items span 8 categories of Ghanaian life:

- Food & Drink
- Transport & Getting Around
- Diaspora Life
- Social Media & Pop Culture
- Family & Home Life
- Music & Entertainment
- Everyday Struggles & Realities
- Patriotism & National Pride

## Rank Tiers

| Rank | Vibe |
|------|------|
| Obroni | Are you sure you're Ghanaian? |
| Tourist | You've visited once... maybe |
| Part-Time Patriot | You rep Ghana only during World Cup |
| Certified Ghanaian | Your auntie would be proud |
| National Treasure | Ghana runs through your veins |
| Ghana's Finest | Kwame Nkrumah is smiling at you |
| Independence Incarnate | You ARE Ghana. Happy 69th! |

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) 14 (App Router)
- **Styling:** Tailwind CSS with custom Ghana-themed design tokens
- **Fonts:** Press Start 2P (display) + Space Mono (body) — retro CRT aesthetic
- **Confetti:** canvas-confetti for top-tier celebrations
- **Share Cards:** html2canvas-pro for generating downloadable score images
- **Analytics:** Upstash Redis for play tracking

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
src/
  app/
    page.tsx          # Landing page
    play/page.tsx     # Game page (grid size selection + bingo grid)
    results/page.tsx  # Score, rank, and sharing
    api/track/route.ts # Play count tracking
  components/
    BingoGrid.tsx     # The bingo board
    BingoCell.tsx     # Individual cell
    GridSizeSelector.tsx
    ScoreDisplay.tsx
    ShareButtons.tsx
    ShareCard.tsx     # Downloadable share image
    Header.tsx
  data/
    bingoItems.json   # All bingo content by category
  hooks/
    useBingoGame.ts   # Core game state logic
  lib/
    generateGrid.ts   # Seeded random grid generation
    scoring.ts        # Rank tier logic
    shareUtils.ts     # Share URL builders + image capture
    bingoItems.ts     # Data loader
  types/
    index.ts
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
