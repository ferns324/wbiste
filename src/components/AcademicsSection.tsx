import React from 'react';
import {
  GraduationCap,
  Calendar,
  Award,
  CheckCircle,
  Mail,
  UserCheck,
  ShieldCheck,
  Building,
} from 'lucide-react';
import {
  ACADEMICS_DATA,
  ACADEMIC_REFERENCE,
  CERTIFICATES_DATA,
  PERSONAL_INFO,
} from '../data/portfolioData';

export const AcademicsSection: React.FC = () => {
  return (
    <section id="academics" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="text-xs font-semibold tracking-widest text-[#2997ff] uppercase">
          Curriculum & Accreditations
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Academic History
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#86868b] leading-relaxed">
          Comprehensive academic progression spanning BTech CSE with AI/ML Specialization at LPU,
          Computer Engineering foundations, and senior high STEM distinctions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Academic Progression Cards (10th, 12th, BTech) */}
        <div className="lg:col-span-8 space-y-6">
          {ACADEMICS_DATA.map((record, index) => (
            <div
              key={record.id}
              className="apple-glass p-8 rounded-3xl border border-white/10 relative overflow-hidden space-y-4"
            >
              {/* Subtle accent corner glow */}
              <div
                className={`absolute top-0 right-0 w-36 h-36 rounded-bl-full pointer-events-none opacity-20 ${
                  index === 0
                    ? 'bg-blue-500'
                    : index === 1
                    ? 'bg-indigo-500'
                    : index === 2
                    ? 'bg-purple-500'
                    : 'bg-emerald-500'
                }`}
              />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {record.level}
                </span>
                <span className="text-xs text-[#86868b] font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{record.year}</span>
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {record.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#86868b] mt-1">
                  <span className="text-blue-400 font-medium flex items-center gap-1">
                    <Building className="w-3.5 h-3.5" />
                    {record.institution}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400 font-medium">{record.scoreOrGpa}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-gray-300">{record.status}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#a1a1a6] leading-relaxed">
                {record.description}
              </p>

              {/* Highlights */}
              <div className="pt-2">
                <div className="text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Key Curriculum Highlights:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {record.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="text-xs text-[#86868b] flex items-start gap-2 bg-white/[0.02] p-2 rounded-xl border border-white/[0.04]"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Reference & Online Accreditations */}
        <div className="lg:col-span-4 space-y-6">
          {/* Faculty Endorsement Card */}
          <div className="apple-glass p-7 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.08]">
              <UserCheck className="w-5 h-5 text-blue-400" />
              <h4 className="text-base font-bold text-white tracking-tight">
                Academic Reference
              </h4>
            </div>

            <div className="space-y-2">
              <h5 className="font-bold text-sm text-white">{ACADEMIC_REFERENCE.name}</h5>
              <p className="text-xs text-blue-400 font-medium">{ACADEMIC_REFERENCE.title}</p>
              <p className="text-xs text-[#86868b]">{ACADEMIC_REFERENCE.institution}</p>
              <div className="pt-1">
                <a
                  href={`mailto:${ACADEMIC_REFERENCE.email}`}
                  className="text-xs text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>{ACADEMIC_REFERENCE.email}</span>
                </a>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-xs text-[#86868b] italic leading-relaxed">
              "{ACADEMIC_REFERENCE.endorsement}"
            </div>
          </div>

          {/* Online Accreditations List */}
          <div className="apple-glass p-7 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.08]">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              <h4 className="text-base font-bold text-white tracking-tight">
                Online Accreditations
              </h4>
            </div>

            <p className="text-xs text-[#86868b]">
              Concurrently completed professional certifications during academic coursework:
            </p>

            <div className="space-y-2.5">
              {CERTIFICATES_DATA.slice(0, 5).map((c) => (
                <div
                  key={c.id}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-semibold text-white">{c.title}</div>
                    <div className="text-[10px] text-[#86868b]">{c.issuer}</div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-500/10">
                    Verified
                  </span>
                </div>
              ))}
            </div>

            <a
              href={PERSONAL_INFO.credlyPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-blue-400 transition-colors"
            >
              View All 12+ Badges on Credly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
