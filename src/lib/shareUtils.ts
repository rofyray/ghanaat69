import { GridSize } from "@/types";

const SITE_URL = "https://ghanaat69.vercel.app";

export function buildTwitterShareUrl(
  score: number,
  total: number,
  rank: string
): string {
  const text = `I scored ${score}/${total} on my Ghana Card — I'm a "${rank}" \u{1F1EC}\u{1F1ED}\n\nHow Ghanaian are you? Beat my score!\n\n#GhanaAt69 #GhanaIndependenceDay\n${SITE_URL}`;
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppShareUrl(
  score: number,
  total: number,
  rank: string
): string {
  const text = `I scored ${score}/${total} on the Ghana@69 Bingo — I'm a "${rank}" \u{1F1EC}\u{1F1ED}\n\nHow Ghanaian are you? Try beat my score!\n${SITE_URL}`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export function buildResultsUrl(
  size: GridSize,
  seed: number,
  selectedIndices: number[]
): string {
  return `/results?size=${size}&g=${seed}&s=${selectedIndices.join(",")}`;
}

export async function captureShareCard(
  element: HTMLElement
): Promise<Blob | null> {
  const { default: html2canvas } = await import("html2canvas-pro");
  const canvas = await html2canvas(element, {
    scale: 2,
    backgroundColor: "#1a1a1a",
    useCORS: true,
    width: 1080,
    height: 1080,
  });
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), "image/png", 1.0);
  });
}

export async function downloadShareCard(element: HTMLElement): Promise<void> {
  const blob = await captureShareCard(element);
  if (!blob) return;
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ghana-at-69-score.png";
  a.click();
  URL.revokeObjectURL(url);
}
