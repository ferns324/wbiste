import React from 'react';
import { FileText, Download, ExternalLink, Cpu, BookOpen, Ban } from 'lucide-react';
import { RESEARCH_PAPERS, ResearchPaper } from '../data/portfolioData';

interface ResearchSectionProps {
  onSelectPaper: (paper: ResearchPaper) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onSelectPaper }) => {
  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="text-xs font-semibold tracking-widest text-[#2997ff] uppercase">
          Scientific Investigations
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Research & Publications
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#86868b] leading-relaxed">
          Applied engineering research addressing hardware sustainability, automated electro-mechanical
          erasure, and distributed edge AI telemetry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {RESEARCH_PAPERS.map((paper) => (
          <div
            key={paper.id}
            className="apple-glass rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between apple-glass-hover group"
          >
            <div>
              {/* Image banner */}
              <div className="h-48 overflow-hidden relative bg-black/60">
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-black/70 backdrop-blur-md text-blue-400 border border-white/10 font-mono">
                  {paper.year}
                </span>
                <span className="absolute bottom-3 left-3.5 text-[11px] text-[#86868b] font-medium">
                  {paper.role}
                </span>
              </div>

              {/* Text Body */}
              <div className="p-7 space-y-3.5">
                <h3
                  onClick={() => onSelectPaper(paper)}
                  className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer tracking-tight leading-snug"
                >
                  {paper.title}
                </h3>

                <p className="text-xs text-[#86868b] line-clamp-3 leading-relaxed">
                  {paper.description}
                </p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {paper.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-medium text-gray-300 border border-white/[0.06]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions footer */}
            <div className="p-7 pt-0 mt-3 border-t border-white/[0.06] pt-4 flex items-center justify-between text-xs">
              <button
                onClick={() => onSelectPaper(paper)}
                className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1.5 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Abstract</span>
              </button>

              {paper.hasLink ? (
                <button
                  onClick={() => onSelectPaper(paper)}
                  className="px-3.5 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-medium flex items-center gap-1.5 border border-white/10 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-400" />
                  <span>Full Paper</span>
                </button>
              ) : (
                <button
                  disabled
                  title="Full manuscript undergoing peer-review archive"
                  className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] text-[#86868b] cursor-not-allowed border border-white/[0.04] flex items-center gap-1.5"
                >
                  <Ban className="w-3.5 h-3.5" />
                  <span>Paper Pending</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
