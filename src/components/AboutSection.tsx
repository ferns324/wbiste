import React, { useState } from 'react';
import {
  User,
  Wrench,
  Brain,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Download,
  Search,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, SkillItem } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [skillSearch, setSkillSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'technical' | 'non-technical'>('all');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch =
      !skillSearch ||
      skill.name.toLowerCase().includes(skillSearch.toLowerCase()) ||
      (skill.subcategory && skill.subcategory.toLowerCase().includes(skillSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const technicalSkills = filteredSkills.filter((s) => s.category === 'technical');
  const nonTechnicalSkills = filteredSkills.filter((s) => s.category === 'non-technical');

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="text-xs font-semibold tracking-widest text-[#2997ff] uppercase">
          Biography & Competencies
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">About Me</h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#86868b] leading-relaxed">
          A multidisciplinary engineer uniting low-level silicon diagnostics, microcontroller
          prototyping, and empathetic technical customer operations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Personal Narrative & Professional Profile */}
        <div className="lg:col-span-5 space-y-6">
          <div className="apple-glass p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/15 bg-white/5 shrink-0">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h3>
                <p className="text-xs text-[#2997ff] font-medium">{PERSONAL_INFO.currentRole}</p>
                <p className="text-xs text-[#86868b] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#86868b]" />
                  <span>Mandaue City, Cebu, Philippines</span>
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Narrative text */}
            <div className="space-y-4 text-xs sm:text-sm text-[#a1a1a6] leading-relaxed">
              <p>
                I am a motivated technical specialist and Computer Engineering scholar with a
                focused concentration in <strong className="text-white">Artificial Intelligence & Machine Learning</strong>.
                My work spans physical circuit assembly, motherboard troubleshooting, microcontroller
                firmware development, and modern full-stack web engineering.
              </p>
              <p>
                In my current professional capacity as a <strong className="text-white">CSR - English at one.com</strong>,
                I serve as the premier frontline technical contact for global webmasters, assisting with
                DNS records, PHP configuration diagnostics, SSL certificate deployments, and webspace
                uptime.
              </p>
            </div>

            {/* Contact info list */}
            <div className="space-y-2.5 pt-2 text-xs text-[#86868b] border-t border-white/10">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-gray-300">
                  LPU CSE (AI/ML) · Expected 2028 | UC Banilad BS CpE
                </span>
              </div>
            </div>

            {/* Resume Button */}
            <div className="pt-2">
              <a
                href={PERSONAL_INFO.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-colors"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Verified Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Categorized Expandable Skills */}
        <div className="lg:col-span-7 space-y-6">
          {/* Skill Filter & Search Toolbar */}
          <div className="apple-glass p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#86868b]" />
              <input
                type="text"
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                placeholder="Search skills (e.g. Python, Assembly, DNS)..."
                className="w-full pl-9 pr-3 py-1.5 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-[#86868b] focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'text-[#86868b] hover:text-white bg-white/5'
                }`}
              >
                All ({SKILLS_DATA.length})
              </button>
              <button
                onClick={() => setActiveCategory('technical')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === 'technical'
                    ? 'bg-blue-600 text-white'
                    : 'text-[#86868b] hover:text-white bg-white/5'
                }`}
              >
                Technical ({SKILLS_DATA.filter((s) => s.category === 'technical').length})
              </button>
              <button
                onClick={() => setActiveCategory('non-technical')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === 'non-technical'
                    ? 'bg-blue-600 text-white'
                    : 'text-[#86868b] hover:text-white bg-white/5'
                }`}
              >
                Non-Technical ({SKILLS_DATA.filter((s) => s.category === 'non-technical').length})
              </button>
            </div>
          </div>

          {/* Technical Skills Card */}
          {(activeCategory === 'all' || activeCategory === 'technical') && (
            <div className="apple-glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-blue-400" />
                  <h4 className="text-base font-bold text-white tracking-tight">Technical Skills</h4>
                </div>
                <span className="text-[11px] text-[#86868b]">Hardware · IoT · Software · AI</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {technicalSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-medium text-gray-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    {skill.level && (
                      <span className="text-[10px] text-[#86868b] tabular-nums font-mono">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Non-Technical Skills Card */}
          {(activeCategory === 'all' || activeCategory === 'non-technical') && (
            <div className="apple-glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <h4 className="text-base font-bold text-white tracking-tight">
                    Non-Technical & Operational Skills
                  </h4>
                </div>
                <span className="text-[11px] text-[#86868b]">Communication · Support · Leadership</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {nonTechnicalSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-medium text-gray-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    {skill.level && (
                      <span className="text-[10px] text-[#86868b] tabular-nums font-mono">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
