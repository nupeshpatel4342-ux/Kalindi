'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function PlaneMessageButton() {
  const [isFlying, setIsFlying] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFlying || isExploding) return;

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setStartPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }

    setIsFlying(true);

    // Start scrolling to message section
    const target = document.getElementById('message');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // After 3.5s, the heart reaches the destination (center of screen)
    setTimeout(() => {
      setIsFlying(false);
      setIsExploding(true);
      
      // Reset explosion after 2.5s
      setTimeout(() => {
        setIsExploding(false);
      }, 2500);
    }, 3500);
  };

  // Generate random hearts for explosion
  const hearts = Array.from({ length: 30 }).map((_, i) => {
    const angle = (i / 30) * Math.PI * 2;
    const distance = 50 + Math.random() * 200;
    return {
      id: i,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      scale: 0.5 + Math.random() * 1.5,
      delay: Math.random() * 0.2,
      rotation: Math.random() * 360
    };
  });

  return (
    <>
      <button 
        ref={buttonRef}
        onClick={handleClick}
        className="bg-silk-ribbon text-on-primary px-10 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-lg flex items-center gap-2 cursor-pointer z-10 relative"
      >
        Read the Message <span className="material-symbols-outlined" data-icon="favorite" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
      </button>

      {/* Animation Portal */}
      <AnimatePresence>
        {isFlying && windowSize.width > 0 && (
          <motion.div
            initial={{ 
              x: startPos.x, 
              y: startPos.y, 
              scale: 1, 
              rotate: -15,
              opacity: 1 
            }}
            animate={{ 
              x: windowSize.width / 2, 
              y: [startPos.y, startPos.y - 150, windowSize.height / 2], 
              scale: [1, 1.5, 2],
              rotate: [-15, 15, 0],
            }}
            transition={{ 
              duration: 3.5, 
              ease: "easeInOut" 
            }}
            className="fixed top-0 left-0 z-[100] text-primary pointer-events-none drop-shadow-2xl"
            style={{ marginLeft: '-24px', marginTop: '-24px' }}
          >
            <span className="material-symbols-outlined text-6xl text-red-500" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExploding && windowSize.width > 0 && (
          <div className="fixed top-1/2 left-1/2 z-[100] pointer-events-none">
            {hearts.map((heart) => (
              <motion.div
                key={heart.id}
                initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
                animate={{ 
                  x: heart.x, 
                  y: heart.y, 
                  scale: heart.scale, 
                  opacity: 0,
                  rotate: heart.rotation
                }}
                transition={{ 
                  duration: 1.5 + Math.random(), 
                  delay: heart.delay,
                  ease: "easeOut" 
                }}
                className="absolute text-primary drop-shadow-lg"
                style={{ marginLeft: '-16px', marginTop: '-16px' }}
              >
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
