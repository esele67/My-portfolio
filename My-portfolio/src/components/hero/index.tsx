"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { handleSmoothScroll } from "@/utils/helpers.utils";

const Hero = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentWord, setCurrentWord] = useState<number>(0);

  const words = ["Full Stack", "Frontend", "Backend"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const interval = setInterval(() => {
      setCurrentWord((prev: number) => (prev + 1) % words.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [words.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-[70px] pb-[20px]"
    >
      <style jsx>{`
        @keyframes rotate-ring {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes rotate-ring-reverse {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes glow-breathe {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 1; transform: scale(1.03); }
        }
        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes float-down {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(8px); }
        }
        @keyframes gradient-spin {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes image-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes shimmer-dot {
          0%, 100% { opacity: 0.4; transform: scale(0.85); }
          50%       { opacity: 1; transform: scale(1); }
        }
        .ring-cw {
          animation: rotate-ring 24s linear infinite;
        }
        .ring-ccw {
          animation: rotate-ring-reverse 18s linear infinite;
        }
        .glow-breathe {
          animation: glow-breathe 5s ease-in-out infinite;
        }
        .badge-float-1 {
          animation: float-up 5s ease-in-out infinite;
        }
        .badge-float-2 {
          animation: float-down 6s ease-in-out infinite;
        }
        .gradient-border {
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #6366f1);
          background-size: 200% 200%;
          animation: gradient-spin 6s ease infinite;
        }
        .image-float {
          animation: image-float 6s ease-in-out infinite;
        }
        .dot-1 { animation: shimmer-dot 3s ease-in-out infinite; }
        .dot-2 { animation: shimmer-dot 3s ease-in-out infinite 1s; }
        .dot-3 { animation: shimmer-dot 3s ease-in-out infinite 2s; }
      `}</style>

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left text content ── */}
          <div
            className={`transform transition-all duration-1000 w-full ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex justify-center lg:justify-start space-x-4 mb-8 opacity-0 animate-fade-in-up delay-200">
              <Link href="https://github.com/esele67" target="_blank" rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Github size={24} />
              </Link>
        
              <Link href="mailto:eseleandrew67@gmail.com" target="_blank" rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Mail size={24} />
              </Link>
            </div>

            <div className="flex justify-center lg:justify-start opacity-0 animate-fade-in-up delay-300">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-indigo-200/50">
                👋 Hello, I&rsquo;m Esele Andrew
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight opacity-0 animate-fade-in-up delay-500 text-center lg:text-left">
              <span className="relative inline-block">
                <span key={currentWord} className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-shift">
                  {words[currentWord]}
                </span>
                <span className="absolute -inset-2 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 blur-lg -z-10 animate-pulse"></span>
              </span>
              <br />
              <span className="text-gray-800">Developer</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-lg opacity-0 animate-fade-in-up delay-700 text-center lg:text-left mx-auto lg:mx-0">
              I craft beautiful, responsive web experiences that combine
              <span className="text-indigo-600 font-semibold"> cutting-edge technology</span> with
              <span className="text-purple-600 font-semibold"> intuitive design</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-900 justify-center lg:justify-start">
              <Link href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")}
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center font-semibold text-lg hover:scale-105 hover:-translate-y-1">
                View My Work
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="group border-2 border-indigo-200 text-indigo-700 px-8 py-4 rounded-xl hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 flex items-center justify-center font-semibold text-lg hover:scale-105 hover:-translate-y-1 backdrop-blur-sm">
                Let&rsquo;s Talk
              </Link>
            </div>
          </div>

          {/* ── Right: Profile image ── */}
          <div
            className={`flex justify-center items-center transform transition-all duration-1200 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="relative flex items-center justify-center w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px]">

              {/* Outer slow-rotating dashed ring */}
              <div
                className="ring-cw absolute rounded-full border border-dashed border-slate-300/60"
                style={{ inset: "clamp(-30px, -5vw, -48px)" }}
              />

              {/* Inner counter-rotating dashed ring */}
              <div
                className="ring-ccw absolute rounded-full border border-dashed border-indigo-200/50"
                style={{ inset: "clamp(-14px, -2.5vw, -22px)" }}
              />

              {/* Soft glow halo */}
              <div
                className="glow-breathe absolute rounded-full pointer-events-none"
                style={{
                  inset: "-4px",
                  background: "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)",
                }}
              />

              {/* Shimmering dots on the outer ring — 3 positions */}
              <div className="dot-1 absolute w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_6px_2px_rgba(99,102,241,0.5)]" style={{ top: "clamp(-30px,-5vw,-47px)", left: "50%" }} />
              <div className="dot-2 absolute w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_2px_rgba(168,85,247,0.5)]" style={{ bottom: "clamp(-30px,-5vw,-47px)", right: "25%" }} />
              <div className="dot-3 absolute w-1.5 h-1.5 rounded-full bg-indigo-300 shadow-[0_0_5px_2px_rgba(99,102,241,0.4)]" style={{ top: "40%", left: "clamp(-30px,-5vw,-47px)" }} />

              {/* ── Node.js badge — hidden on mobile to avoid overflow ── */}
              <div className="badge-float-1 hidden sm:block absolute -left-12 top-8 z-20">
                <div className="flex items-center gap-2.5 bg-white border border-slate-100 rounded-2xl px-4 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
                  {/* Node.js hexagon logo */}
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 256 289" className="w-6 h-6">
                      <path d="M128 0L0 72.3v144.4L128 289l128-72.3V72.3L128 0z" fill="#539E43"/>
                      <path d="M128 18.4L15.7 81.2v133.7L128 277.6l112.3-62.7V81.2L128 18.4z" fill="#539E43"/>
                      <path d="M128 52.7l-72.5 41.8v83.9l72.5 41.8 72.5-41.8v-83.9L128 52.7z" fill="#fff" opacity="0.15"/>
                      <text x="128" y="175" textAnchor="middle" fill="white" fontSize="100" fontFamily="Arial" fontWeight="bold">N</text>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-700 leading-none tracking-wide">Node.js</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 leading-none">Runtime</p>
                  </div>
                </div>
              </div>

              {/* ── Tailwind CSS badge — hidden on mobile to avoid overflow ── */}
              <div className="badge-float-2 hidden sm:block absolute -right-12 bottom-10 z-20">
                <div className="flex items-center gap-2.5 bg-white border border-slate-100 rounded-2xl px-4 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
                  {/* Tailwind CSS logo */}
                  <div className="w-6 h-5 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 54 33" className="w-6 h-auto">
                      <defs>
                        <linearGradient id="tw-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                      </defs>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                        fill="url(#tw-gradient)"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-700 leading-none tracking-wide">Tailwind CSS</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 leading-none">Styling</p>
                  </div>
                </div>
              </div>

              {/* ── Main image with animated gradient border ── */}
              <div className="image-float relative z-10 group">
                <div className="gradient-border p-[2.5px] rounded-[28px]">
                  <div className="bg-white p-[5px] rounded-[26px]">
                    <div className="relative overflow-hidden rounded-[22px]">
                      {/* Hover shine sweep */}
                      <div
                        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background:
                            "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.22) 52%, transparent 68%)",
                        }}
                      />
                      <Image
                        src="/assets/me.jpg"
                        alt="Esele Andrew - Developer"
                        width={320}
                        height={320}
                        priority
                        className="w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] lg:w-80 lg:h-80 object-cover rounded-[22px] group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Soft drop shadow beneath */}
                <div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-full blur-xl pointer-events-none"
                  style={{ background: "rgba(99,102,241,0.2)" }}
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;