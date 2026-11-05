import React from 'react';
import { ArrowRight, Download, Sparkles, Terminal, Cpu, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, METRICS } from '../data/portfolioData';
import { HeroAiCanvas } from './HeroAiCanvas';

interface HomeHeroProps {
  onNavigate: (sectionId: string) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      {/* Background AI Neural Canvas */}
      <HeroAiCanvas />

      {/* Ambient Radial Lighting Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] apple-glow-blue pointer-events-none opacity-40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[450px] h-[450px] apple-glow-purple pointer-events-none opacity-30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Subtle Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-[#2997ff] font-medium backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" />
              <span>AI/ML Engineering & Hardware Systems</span>
            </div>

            {/* Apple-grade Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Intelligence at the Core.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Engineered with Precision.
              </span>
            </h1>

            {/* Subtitle / Intro */}
            <p className="text-base sm:text-lg text-[#86868b] max-w-xl font-normal leading-relaxed">
              I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a
              Computer Engineering specialist and AI/ML practitioner. Bridging low-level
              microcontroller hardware diagnostics with high-performance web systems and
              cloud hosting architecture.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 flex items-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white font-semibold text-xs sm:text-sm border border-white/15 transition-all duration-200 backdrop-blur-md"
              >
                About Me
              </button>

              <a
                href={PERSONAL_INFO.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-full text-[#86868b] hover:text-white hover:bg-white/5 border border-white/10 transition-colors text-xs sm:text-sm flex items-center gap-1.5"
                title="Download verified resume"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </div>

            {/* Micro Quick Tags */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#86868b]">
              <span>Mandaue City, Cebu</span>
              <span aria-hidden="true">·</span>
              <span>LPU BTech CSE (AI/ML)</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400">CSR at one.com</span>
            </div>
          </div>

          {/* Right Column: Hero Portrait Card with Apple Glass Aesthetics */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Outer specular glow border */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-2xl">
                <div className="rounded-[22px] overflow-hidden bg-[#0d0d0f] relative group">
                  {/* Photo */}
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-96 object-cover object-top filter contrast-[1.03] group-hover:scale-102 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Gradient Scrim for crisp text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />

                  {/* Card Overlay Content */}
                  <div className="absolute bottom-0 inset-x-0 p-6 space-y-2">
                    <div className="flex items-center justify-between text-xs text-blue-400 font-medium">
                      <span>Cebu, Philippines</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Available for Tech Roles
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs text-[#86868b] leading-relaxed">
                      Specialist in Hardware Diagnostics, Arduino/ESP32 Prototyping, and AI Systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Apple-style Quick Spec Badges */}
              <div className="absolute -bottom-6 -left-6 apple-glass p-3.5 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3 border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">ESP32 & TinyML</div>
                  <div className="text-[10px] text-[#86868b]">Edge Telemetry</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 apple-glass p-3 rounded-2xl shadow-2xl hidden sm:flex items-center gap-2.5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-white">12+ Credly Badges</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Metric Strip (Full-width below the hero split per Frontend Design constitution) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/[0.08]">
          <div className="apple-glass p-5 rounded-2xl border border-white/[0.06] text-left space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 tabular-nums">
              {METRICS.clientSatisfaction}
            </div>
            <div className="text-xs text-[#86868b]">Client Satisfaction at one.com</div>
          </div>
          <div className="apple-glass p-5 rounded-2xl border border-white/[0.06] text-left space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 tabular-nums">
              {METRICS.onTimeDelivery}
            </div>
            <div className="text-xs text-[#86868b]">On-Time Project Delivery</div>
          </div>
          <div className="apple-glass p-5 rounded-2xl border border-white/[0.06] text-left space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 tabular-nums">
              {METRICS.averageRating}
            </div>
            <div className="text-xs text-[#86868b]">Average Peer & Client Rating</div>
          </div>
          <div className="apple-glass p-5 rounded-2xl border border-white/[0.06] text-left space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tabular-nums">
              {METRICS.happyClientsCount}
            </div>
            <div className="text-xs text-[#86868b]">Assisted Global Users & Peers</div>
          </div>
        </div>
      </div>
    </section>
  );
};
