import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'apple-glass-nav border-b border-white/10 shadow-2xl py-3'
          : 'bg-black/30 backdrop-blur-md border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single element brand wordmark */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5 text-left group whitespace-nowrap shrink-0 focus-visible:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
            CF
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Christian Jaye
            </span>
            <span className="text-[11px] text-[#86868b] tracking-normal">
              AI & Hardware Specialist
            </span>
          </div>
        </button>

        {/* Zone 2: Clean single-line text nav links */}
        <nav className="hidden xl:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/[0.06] backdrop-blur-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white/15 text-white font-semibold shadow-sm shadow-black/50'
                    : 'text-[#86868b] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={PERSONAL_INFO.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#86868b] hover:text-white border border-white/10 hover:border-white/20 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-[#86868b]" />
          </a>
          <button
            onClick={() => handleLinkClick('contact')}
            className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Let's Talk</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          className="xl:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden apple-glass border-b border-white/10 px-4 pt-3 pb-6 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-white/10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-2 rounded-lg text-left text-xs font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-blue-600/20 text-blue-400 font-semibold border border-blue-500/30'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-3 flex gap-2">
            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-xl text-center text-xs font-semibold border border-white/15 text-white hover:bg-white/10 transition-colors"
            >
              Download CV
            </a>
            <button
              onClick={() => handleLinkClick('contact')}
              className="flex-1 py-2.5 rounded-xl text-center text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
