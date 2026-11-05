import React from 'react';
import { X, BookOpen, Download, FileText, CheckCircle2 } from 'lucide-react';
import { ResearchPaper } from '../data/portfolioData';

interface ResearchModalProps {
  paper: ResearchPaper | null;
  onClose: () => void;
  onDownload: () => void;
}

export const ResearchModal: React.FC<ResearchModalProps> = ({ paper, onClose, onDownload }) => {
  if (!paper) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="paper-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl apple-glass rounded-3xl border border-white/15 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="p-6 pb-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Academic Paper · {paper.year}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Research Modal"
            className="p-2 rounded-xl text-[#86868b] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="space-y-2">
            <h2 id="paper-modal-title" className="text-2xl font-bold text-white tracking-tight leading-snug">
              {paper.title}
            </h2>
            <p className="text-xs text-blue-400 font-medium">
              Authorship: {paper.role}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Comprehensive Abstract
            </h4>
            <p className="text-xs sm:text-sm text-[#a1a1a6] leading-relaxed">
              {paper.abstract}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Prototyping & Experimental Methodology
            </h4>
            <p className="text-xs sm:text-sm text-[#a1a1a6] leading-relaxed">
              {paper.methodology}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Index Keywords
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {paper.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-[11px] text-gray-300 border border-white/[0.06]"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/10 bg-black/40 flex items-center justify-between">
          <button
            onClick={onDownload}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-md shadow-blue-600/30"
          >
            <Download className="w-4 h-4" />
            <span>Download Paper Abstract (PDF)</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-semibold text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
