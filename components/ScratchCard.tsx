'use client';

import React, { useRef, useEffect, useState } from 'react';

export default function ScratchCard({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || isRevealed) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;

      // Fill with romantic gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#ff4d4d');
      gradient.addColorStop(1, '#ff8080');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add text and heart
      ctx.fillStyle = 'white';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Scratch Me ❤️', canvas.width / 2, canvas.height / 2);
    };

    // Use ResizeObserver to handle image loading and container resizing
    const observer = new ResizeObserver(() => {
      if (!isRevealed) resizeCanvas();
    });
    observer.observe(container);

    return () => observer.disconnect();
  }, [isRevealed]);

  const scratch = (e: React.PointerEvent | React.TouchEvent | React.MouseEvent) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas || isRevealed) return;

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if ('touches' in e) {
      clientX = (e as React.TouchEvent).touches[0].clientX;
      clientY = (e as React.TouchEvent).touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, Math.PI * 2); // 40px brush size
    ctx.fill();

    // Check reveal threshold
    checkReveal();
  };

  const checkReveal = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    // Check every 10th pixel for performance
    for (let i = 3; i < pixels.length; i += 4 * 10) {
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }

    const totalPixelsChecked = pixels.length / (4 * 10);
    const percentScratched = (transparentPixels / totalPixelsChecked) * 100;

    if (percentScratched > 50) {
      setIsRevealed(true);
    }
  };

  const handleDown = (e: any) => {
    setIsDrawing(true);
    scratch(e);
  };

  const handleMove = (e: any) => {
    if (!isDrawing) return;
    scratch(e);
  };

  const handleUp = () => {
    setIsDrawing(false);
  };

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden rounded-md">
      {children}
      {!isRevealed && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 cursor-pointer touch-none transition-opacity duration-500"
          style={{ opacity: isRevealed ? 0 : 1 }}
          onMouseDown={handleDown}
          onMouseMove={handleMove}
          onMouseUp={handleUp}
          onMouseLeave={handleUp}
          onTouchStart={handleDown}
          onTouchMove={handleMove}
          onTouchEnd={handleUp}
        />
      )}
    </div>
  );
}
