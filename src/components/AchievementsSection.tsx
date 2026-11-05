import React, { useState } from 'react';
import { ShieldCheck, Award, ExternalLink, Trophy, Calendar, CheckCircle } from 'lucide-react';
import {
  CERTIFICATES_DATA,
  HACKATHONS_DATA,
  CertificateItem,
  PERSONAL_INFO,
} from '../data/portfolioData';

interface AchievementsSectionProps {
  onSelectCertificate: (cert: CertificateItem) => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  onSelectCertificate,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'Cisco', 'Fortinet', 'IBM'];

  const filteredCerts = CERTIFICATES_DATA.filter((cert) => {
    if (activeCategory === 'all') return true;
    return cert.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="text-xs font-semibold tracking-widest text-[#2997ff] uppercase">
          Verified Credentials & Hackathons
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Achievements</h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#86868b] leading-relaxed">
          Accredited credentials across Network Architecture, Next-Gen Firewalls, Operating Systems,
          and Cybersecurity from industry leaders.
        </p>

        {/* Credly Profile Quick Link */}
        <div className="pt-2 flex justify-center">
          <a
            href={PERSONAL_INFO.credlyPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-xs font-semibold text-blue-400 border border-blue-500/20 transition-colors"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>View Credly Verification PDF</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-10">
        <div className="apple-glass p-1 rounded-2xl border border-white/10 flex flex-wrap gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-[#86868b] hover:text-white hover:bg-white/5'
              }`}
            >
              {cat === 'all' ? 'All Certificates' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            onClick={() => onSelectCertificate(cert)}
            className="apple-glass p-6 rounded-3xl border border-white/10 apple-glass-hover cursor-pointer flex flex-col justify-between group text-left"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20">
                  {cert.badgeTag}
                </span>
                <span className="text-[11px] text-[#86868b]">{cert.issuer}</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#86868b] line-clamp-3 mt-1.5 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
              <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Badge</span>
              </span>
              <span className="text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1 text-xs">
                <span>View Details</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Hackathons & Competitions */}
      <div className="mt-20 space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Hackathons & Engineering Competitions
            </h3>
            <p className="text-xs text-[#86868b]">
              Real-world competitive prototyping, edge IoT builds, and teamwork awards
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HACKATHONS_DATA.map((hack) => (
            <div
              key={hack.id}
              className="apple-glass p-7 rounded-3xl border border-white/10 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                    {hack.award}
                  </span>
                  <span className="text-[#86868b] font-mono">{hack.year}</span>
                </div>

                <h4 className="text-lg font-bold text-white tracking-tight">{hack.title}</h4>
                <p className="text-xs text-blue-400 font-medium">{hack.event}</p>
                <p className="text-xs text-[#86868b] leading-relaxed">{hack.description}</p>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                {hack.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] text-[#86868b] border border-white/[0.05]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
