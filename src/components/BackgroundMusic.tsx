"use client";

import { useState, useRef, useEffect } from "react";

const AUDIO_URL =
  "https://res.cloudinary.com/dwenrtqrv/video/upload/v1772785143/kakalika_oaywqj.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;

    const stored = localStorage.getItem("bg-music-muted");
    if (stored === "false") {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      localStorage.setItem("bg-music-muted", "true");
    } else {
      audio.volume = 0.3;
      audio.play().then(() => {
        setPlaying(true);
        localStorage.setItem("bg-music-muted", "false");
      }).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={AUDIO_URL} loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? "Mute background music" : "Play background music"}
        className="fixed top-16 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-crt-green/40 bg-crt-dark/80 text-crt-green backdrop-blur-sm transition-colors hover:bg-crt-dark hover:border-crt-green/70"
      >
        {playing ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>
    </>
  );
}
