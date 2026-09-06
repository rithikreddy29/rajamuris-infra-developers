import React, { useState, useRef, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider({ beforeImage, afterImage, title = "Progress Comparison" }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-gold-400 font-semibold uppercase">
          <MoveHorizontal className="w-3.5 h-3.5" /> INTERACTIVE COMPARISON
        </span>
        <span>Drag slider to compare</span>
      </div>

      <div
        ref={containerRef}
        className="relative w-full aspect-[16/9] sm:aspect-[16/10] overflow-hidden rounded-xl border border-white/10 select-none cursor-ew-resize bg-[#090D15]"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full background) */}
        <img
          src={afterImage}
          alt={`${title} - Completed`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={`${title} - Before`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          />
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#D4AF37] pointer-events-none shadow-[0_0_10px_#D4AF37]"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle knob */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#090D15] border-2 border-[#D4AF37] flex items-center justify-center shadow-2xl">
            <MoveHorizontal className="w-4 h-4 text-[#D4AF37]" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest uppercase text-white pointer-events-none">
          BEFORE
        </div>
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#D4AF37]/90 text-black font-bold backdrop-blur-md text-[10px] font-mono tracking-widest uppercase pointer-events-none">
          AFTER / COMPLETED
        </div>
      </div>
    </div>
  );
}
