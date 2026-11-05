import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, ShieldCheck, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'projects', label: 'Projects' },
    { id: 'academics', label: 'Academics' },
    { id: 'research', label: 'Research' },
    { id: 'feedbacks', label: 'Feedbacks' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/90 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-xs text-[#86868b]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
              CF
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-[#86868b]">{PERSONAL_INFO.currentRole}</div>
            </div>
          </div>

          {/* Social / Credential Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.credlyPdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Credly Badges"
              className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Email"
              className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-9 h-9 rounded-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 flex items-center justify-center border border-blue-500/30 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Navigation Links Grid */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="text-[#86868b] hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={PERSONAL_INFO.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#86868b] hover:text-white transition-colors"
          >
            Resume (PDF)
          </a>
          <a
            href={PERSONAL_INFO.credlyPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#86868b] hover:text-white transition-colors"
          >
            Credly Badges (PDF)
          </a>
        </div>

        {/* Bottom Tier: Copyright & Standard Disclaimer */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-[#636366]">
          <p>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Mandaue
            City, Cebu, Philippines.
          </p>
          <p className="flex items-center gap-1 justify-center">
            <span>Engineered with Apple-inspired minimalism · Zero JSON runtime dependency</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
