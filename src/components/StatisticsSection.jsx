import React, { useState, useEffect, useRef } from 'react';
import { Shield, Award, MapPin, Clock } from 'lucide-react';
import { useData } from '../context/DataContext';

function AnimatedCounter({ endValue, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const numericEnd = parseInt(endValue, 10);
  const isNumeric = !isNaN(numericEnd);

  useEffect(() => {
    if (!isNumeric) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = numericEnd > 2000 ? 1990 : 0;
          const stepTime = Math.abs(Math.floor(duration / (numericEnd - start || 1)));
          
          const timer = setInterval(() => {
            start += 1;
            if (start >= numericEnd) {
              setCount(numericEnd);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, Math.max(stepTime, 20));
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [numericEnd, duration, hasAnimated, isNumeric]);

  if (!isNumeric) {
    return <span ref={elementRef}>{endValue}{suffix}</span>;
  }

  return (
    <span ref={elementRef}>
      {hasAnimated ? count : (numericEnd > 2000 ? 2014 : 0)}{suffix}
    </span>
  );
}

export default function StatisticsSection() {
  const { statistics } = useData();

  const getStatIcon = (index) => {
    switch (index) {
      case 0: return <Clock className="w-5 h-5 text-[#B8860B]" />;
      case 1: return <Award className="w-5 h-5 text-[#B8860B]" />;
      case 2: return <Shield className="w-5 h-5 text-[#B8860B]" />;
      case 3: return <MapPin className="w-5 h-5 text-[#B8860B]" />;
      default: return <Shield className="w-5 h-5 text-[#B8860B]" />;
    }
  };

  return (
    <section className="relative py-16 sm:py-20 bg-[#F8FAFC] dark:bg-[#0A0F1D] border-y border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-architectural-grid opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-300 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-900 dark:text-slate-200 uppercase tracking-widest font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B8860B]"></span>
            <span>EXPERIENCE METRICS & OPERATIONAL INTEGRITY</span>
          </div>
          <span className="text-xs font-mono text-slate-700 dark:text-slate-300 font-bold hidden sm:inline">
            VERIFIED HISTORICAL DATA • ESTD. 2014
          </span>
        </div>

        {/* 4 Robust Cards Grid - No Overlapping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, idx) => {
            const isTextLong = stat.value && stat.value.length > 5;
            return (
              <div
                key={stat.id || idx}
                className="relative rounded-2xl bg-white dark:bg-[#131B2E] p-6 sm:p-7 border-2 border-slate-300 dark:border-slate-700 shadow-md hover:border-[#B8860B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[210px] group"
              >
                {/* Top Row: Icon + Index Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 flex items-center justify-center text-[#B8860B] dark:text-[#F0CD6D] group-hover:scale-105 transition-transform">
                    {getStatIcon(idx)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                    0{idx + 1}
                  </span>
                </div>

                {/* Middle: Number / Metric */}
                <div className="my-auto py-2">
                  <div className={`font-display font-black tracking-tight text-slate-950 dark:text-white leading-tight ${
                    isTextLong ? 'text-2xl sm:text-3xl' : 'text-4xl sm:text-5xl'
                  }`}>
                    <span className="text-slate-950 dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#F0CD6D] transition-colors">
                      <AnimatedCounter endValue={stat.value} suffix={stat.suffix || ""} />
                    </span>
                  </div>
                </div>

                {/* Bottom: Label and Sublabel (clean vertical separation) */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 mt-2">
                  <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#8B6508] dark:text-[#F0CD6D]">
                    {stat.label}
                  </div>
                  {stat.sublabel && (
                    <div className="text-xs text-slate-800 dark:text-slate-200 font-medium mt-1 leading-snug">
                      {stat.sublabel}
                    </div>
                  )}
                </div>

                {/* Bottom Accent Highlight */}
                <div className="absolute bottom-0 left-6 right-6 h-[2.5px] bg-transparent group-hover:bg-[#B8860B] transition-colors rounded-full"></div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
