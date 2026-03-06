"use client";

import { forwardRef } from "react";
import { BingoItem, GridSize } from "@/types";
import { RankTier } from "@/types";
import { getCenterIndex } from "@/lib/generateGrid";

interface Props {
  items: BingoItem[];
  gridSize: GridSize;
  selected: Set<number>;
  score: number;
  total: number;
  rank: RankTier;
}

const ShareCard = forwardRef<HTMLDivElement, Props>(
  ({ items, gridSize, selected, score, total, rank }, ref) => {
    const centerIndex = getCenterIndex(gridSize);
    const cellSize = gridSize === 3 ? 120 : gridSize === 4 ? 95 : 78;
    const gap = 6;

    return (
      <div
        ref={ref}
        style={{
          width: 1080,
          height: 1080,
          background: "#0E0E12",
          position: "absolute",
          left: "-9999px",
          top: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "'Press Start 2P', 'Courier New', monospace",
        }}
      >
        {/* Top stripes: red → gold → green */}
        <div style={{ width: "100%", height: 17, background: "#CE1126" }} />
        <div style={{ width: "100%", height: 17, background: "#FCD116" }} />
        <div style={{ width: "100%", height: 16, background: "#006B3F" }} />

        {/* Scan line effect overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 3px)",
            zIndex: 10,
          }}
        />

        {/* Logo */}
        <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 12, zIndex: 1 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 8,
              background: "#FCD116",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              lineHeight: 1,
              color: "#000",
              boxShadow: "0 0 12px rgba(252,209,22,0.35)",
            }}
          >
            &#9733;
          </div>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#D6D0C4", letterSpacing: 4 }}>
            GHANA<span style={{ color: "#FCD116" }}>@69</span>
          </div>
        </div>

        <div style={{ fontSize: 18, color: "#D6D0C4", marginTop: 8, letterSpacing: 3, zIndex: 1 }}>
          {"// HOW GHANAIAN ARE YOU?"}
        </div>

        {/* Mini grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
            gap: `${gap}px`,
            marginTop: 40,
            zIndex: 1,
          }}
        >
          {items.map((item, i) => {
            const isChecked = selected.has(i);
            const isFree = i === centerIndex;
            return (
              <div
                key={i}
                style={{
                  width: cellSize,
                  height: cellSize,
                  borderRadius: 8,
                  background: isChecked ? "#FCD116" : "#1A1A22",
                  border: isChecked ? "2px solid #FCD116" : "2px solid rgba(138,133,123,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: isFree ? 32 : 14,
                  color: isChecked ? "#000" : "rgba(214,208,196,0.2)",
                  boxShadow: isChecked ? "0 0 8px rgba(252,209,22,0.3)" : "none",
                }}
              >
                {isFree ? "\u2605" : ""}
              </div>
            );
          })}
        </div>

        {/* Score panel */}
        <div
          style={{
            marginTop: 40,
            background: "#16161C",
            border: "2px solid rgba(138,133,123,0.2)",
            borderRadius: 8,
            padding: "20px 40px",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <div style={{ fontSize: 56, fontWeight: 900, color: "#FCD116", letterSpacing: 4 }}>
            {score} <span style={{ color: "#D6D0C4", fontSize: 36 }}>/ {total}</span>
          </div>
        </div>

        {/* Rank */}
        <div style={{ fontSize: 24, fontWeight: 900, color: "#FCD116", marginTop: 16, textTransform: "uppercase", letterSpacing: 4, zIndex: 1 }}>
          &ldquo;{rank.rank}&rdquo;
        </div>
        <div style={{ fontSize: 16, color: "#D6D0C4", marginTop: 8, letterSpacing: 2, zIndex: 1 }}>
          {rank.subtitle}
        </div>

        {/* CTA */}
        <div style={{ fontSize: 14, color: "#D6D0C4", marginTop: 32, letterSpacing: 3, zIndex: 1 }}>
          {"// I DARE YOU TO BEAT MY SCORE"}
        </div>
        <div style={{ fontSize: 12, color: "rgba(214,208,196,0.6)", marginTop: 6, letterSpacing: 2, zIndex: 1 }}>
          ghanaat69.vercel.app &middot; #GhanaAt69
        </div>

        {/* Bottom stripes: green → gold → red (mirrored) */}
        <div style={{ marginTop: "auto", width: "100%", zIndex: 1 }}>
          <div style={{ width: "100%", height: 24, background: "#006B3F" }} />
          <div style={{ width: "100%", height: 24, background: "#FCD116" }} />
          <div style={{ width: "100%", height: 24, background: "#CE1126" }} />
        </div>
      </div>
    );
  }
);

ShareCard.displayName = "ShareCard";
export default ShareCard;
