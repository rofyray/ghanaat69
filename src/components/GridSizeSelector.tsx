"use client";

import { GridSize } from "@/types";

interface Props {
  onSelect: (size: GridSize) => void;
  selected: GridSize | null;
}

const options: { size: GridSize; label: string; desc: string; color: string; selected: string; glow: string }[] = [
  { size: 3, label: "3x3", desc: "QUICK", color: "bg-ghana-red/80 border-ghana-red text-worn-white", selected: "bg-ghana-red text-white border-ghana-red", glow: "shadow-[0_0_12px_rgba(206,17,38,0.5)]" },
  { size: 4, label: "4x4", desc: "MEDIUM", color: "bg-ghana-gold/80 border-ghana-gold text-ghana-black", selected: "bg-ghana-gold text-ghana-black border-ghana-gold", glow: "glow-gold" },
  { size: 5, label: "5x5", desc: "FULL", color: "bg-ghana-green/80 border-ghana-green text-worn-white", selected: "bg-ghana-green text-white border-ghana-green", glow: "shadow-[0_0_12px_rgba(0,107,63,0.5)]" },
];

export default function GridSizeSelector({ onSelect, selected }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="font-display text-[10px] sm:text-xs text-faded-white uppercase tracking-[0.2em]">
        {"// SELECT GRID SIZE"}
      </h2>
      <div className="flex gap-3">
        {options.map((opt) => {
          const isSelected = selected === opt.size;
          const isDulled = selected !== null && !isSelected;
          return (
          <button
            key={opt.size}
            onClick={() => onSelect(opt.size)}
            className={`px-4 py-3 rounded-lg font-body text-xs transition-all border-2 ${
              isSelected
                ? `${opt.selected} ${opt.glow} scale-105`
                : isDulled
                  ? `${opt.color} opacity-40`
                  : opt.color
            }`}
          >
            <span className="block text-sm font-bold tracking-wider">{opt.label}</span>
            <span className="block text-[10px] opacity-60 tracking-widest">{opt.desc}</span>
          </button>
          );
        })}
      </div>
    </div>
  );
}
