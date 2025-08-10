"use client";

export function SoundBackground() {
  return (
    <div>
      <audio id="bg-audio" autoPlay loop src="/sounds/videoplayback.mp3">
        <source src="/public/sounds/videoplayback.mp3" type="audio/mpeg" />
        Your browser does not support audio playback.
      </audio>
    </div>
  );
}
