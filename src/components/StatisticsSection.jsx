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
      case 0: return <Clock className="w-5 h-5 text-[#D4AF37]" />;
      case 1: return <Award className="w-5 h-5 text-[#D4AF37]" />;
      case 2: return <Shield className="w-5 h-5 text-[#D4AF37]" />;
      case 3: return <MapPin className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Shield className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section className="relative py-20 bg-[#070A11] border-y border-white/10 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-dots-pattern opacity-15 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-32 bg-[#D4AF37]/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statistics.map((stat, idx) => (
            <div
              key={stat.id || idx}
              className="relative p-6 sm:p-8 rounded-xl bg-[#0B0F1A]/80 border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 group"
            >
              {/* Top Stat Icon & Index */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-[#141C2E] border border-white/5 group-hover:border-[#D4AF37]/30 transition-colors">
                  {getStatIcon(idx)}
                </div>
                <span className="font-mono text-[11px] text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                  0{idx + 1}
                </span>
              </div>

              {/* Stat Value */}
              <div className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none mb-2">
                <span className="text-gold-gradient">
                  <AnimatedCounter endValue={stat.value} suffix={stat.suffix || ""} />
                </span>
              </div>

              {/* Stat Label */}
              <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">
                {stat.label}
              </div>

              {/* Sublabel / Context */}
              {stat.sublabel && (
                <div className="text-[11px] text-slate-400 mt-1 font-light">
                  {stat.sublabel}
                </div>
              )}

              {/* Bottom Subtle Accent Bar */}
              <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-white/5 group-hover:bg-[#D4AF37]/40 transition-colors"></div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
