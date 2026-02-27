'use client';

import { useEffect, useState } from 'react';

const ROLES = [
  'Full-Stack Developer',
  'React / Next.js',
  'Node.js / Express',
  'TypeScript',
  'Database Design',
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 pb-28 sm:pb-32"
    >
      {/* Background Orbs */}
      <div className="hero-orb w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[var(--brand-primary)] top-[-100px] left-[-100px] animate-float" />
      <div className="hero-orb w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#64d2ff] bottom-[-50px] right-[-50px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="hero-orb w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-[var(--accent-green)] top-[40%] right-[20%] opacity-20 animate-float" style={{ animationDelay: '1.5s' }} />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-[var(--brand-primary)] mb-6 sm:mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
          Open to Opportunities
        </div>

        {/* Greeting */}
        <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] mb-3 sm:mb-4 animate-fade-in">
          สวัสดีครับ ผมชื่อ
        </p>

        {/* Name */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-4 animate-slide-up">
          Kritthapath
          <br />
          <span className="gradient-text">Thipakaew</span>
        </h1>

        {/* Typing Role */}
        <div className="h-8 sm:h-10 flex items-center justify-center mb-6 sm:mb-8 animate-slide-up delay-200">
          <span className="text-lg sm:text-xl md:text-2xl font-medium text-[var(--text-secondary)]">
            {displayed}
          </span>
          <span className="w-[3px] h-6 sm:h-7 bg-[var(--brand-primary)] ml-1 animate-pulse" />
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 sm:mb-10 animate-slide-up delay-300 leading-relaxed px-2">
          ผมเป็น Programmer ที่ทำงานจริงทั้ง Frontend และ Backend —
          <br className="hidden sm:block" />
          ปัจจุบันทำงานเต็มเวลาที่ T.Logical Resolution พัฒนาระบบให้องค์กรภาครัฐและมหาวิทยาลัย
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-slide-up delay-400">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-[var(--brand-primary)] text-white font-semibold text-sm sm:text-base hover:opacity-90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[var(--brand-primary)]/20"
          >
            ดูผลงาน
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl glass-card font-semibold text-sm sm:text-base hover:border-[var(--brand-primary)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            ติดต่อผม
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-lg mx-auto animate-slide-up delay-500">
          {[
            { value: '7+', label: 'Projects' },
            { value: '2', label: 'Companies' },
            { value: '1+', label: 'Years Exp.' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-[var(--text-secondary)] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 animate-fade-in delay-700">
        <span className="text-[10px] sm:text-xs text-[var(--text-secondary)]">Scroll Down</span>
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-[var(--text-secondary)] flex items-start justify-center p-1 sm:p-1.5">
          <div className="w-1 h-2.5 sm:w-1.5 sm:h-3 rounded-full bg-[var(--brand-primary)] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
