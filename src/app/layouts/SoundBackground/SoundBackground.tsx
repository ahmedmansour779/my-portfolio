"use client";

import { useEffect, useRef } from "react";

export function SoundBackground() {
  const bgAudio = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!bgAudio.current) return;

    bgAudio.current.muted = false;
    bgAudio.current.play().catch((err) => {
      console.warn("Muted autoplay started:", err);
    });
  }, []);

  return (
    <div>
      <audio id="bg-audio" muted ref={bgAudio} autoPlay loop src="/sounds/videoplayback.mp3">
        <source src="/public/sounds/videoplayback.mp3" type="audio/mpeg" />
        Your browser does not support audio playback.
      </audio>
    </div>
  );
}
