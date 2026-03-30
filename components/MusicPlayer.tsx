'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioSource = '/music.mp3';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Keep it subtle
    }
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      setAudioError('');
      await audio.play();
      setIsPlaying(true);
    } catch (e) {
      console.log('Audio play failed:', e);
      setIsPlaying(false);
      setAudioError('Song play nahi ho pa raha. File path `public/music.mp3` check karo aur page refresh karo.');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3">
      {!isPlaying && !audioError && (
        <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg text-sm font-medium text-primary animate-bounce border border-primary/10">
          Play Music 🎵
        </div>
      )}
      {audioError && (
        <div className="max-w-[230px] bg-rose-50/95 backdrop-blur px-3 py-2 rounded-xl shadow-lg text-xs font-medium text-rose-700 border border-rose-200">
          {audioError}
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
        preload="auto"
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onError={() => setAudioError('`music.mp3` nahi mila. Confirm karo file exactly `public/music.mp3` naam se hai.')}
        loop
      />
    </div>
  );
}
