'use client';

import React, { useState, useRef, useEffect } from 'react';

type MusicPlayerProps = {
  playSignal?: number;
};

export default function MusicPlayer({ playSignal = 0 }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioSource = '/mari_jaan.mp3';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Keep it subtle
    }
  }, []);

  useEffect(() => {
    if (!playSignal || !audioRef.current) return;

    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch((e) => console.log('Audio play failed:', e));
  }, [playSignal]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3">
      {!isPlaying && (
        <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg text-sm font-medium text-primary animate-bounce border border-primary/10">
          Play Music 🎵
        </div>
      )}
      <button 
        onClick={togglePlay}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 border-2 ${isPlaying ? 'bg-primary border-primary text-white' : 'bg-white border-primary/20 text-primary hover:scale-110'}`}
        aria-label="Toggle background music"
      >
        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          {isPlaying ? 'pause' : 'play_arrow'}
        </span>
        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white border border-primary"></span>
          </span>
        )}
      </button>
      <audio 
        ref={audioRef} 
        src={audioSource}
        loop 
      />
    </div>
  );
}
