import React from 'react';
import { X, ShieldCheck, ExternalLink, Calendar, Award } from 'lucide-react';
import { CertificateItem, PERSONAL_INFO } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl apple-glass rounded-3xl border border-white/15 overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {certificate.badgeTag}
            </span>
            <span className="text-xs text-[#86868b]">{certificate.category} Accredited</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Certificate Modal"
            className="p-2 rounded-xl text-[#86868b] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>

          <div>
            <h3 id="cert-modal-title" className="text-2xl font-bold text-white tracking-tight">
              {certificate.title}
            </h3>
            <p className="text-xs text-blue-400 font-medium mt-1">
              Issued by {certificate.issuer} · {certificate.date}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#a1a1a6] leading-relaxed">
            {certificate.description}
          </p>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2 text-xs">
            <div className="flex justify-between text-[#86868b]">
              <span>Recipient:</span>
              <span className="text-white font-medium">{PERSONAL_INFO.name}</span>
            </div>
            <div className="flex justify-between text-[#86868b]">
              <span>Verification Authority:</span>
              <span className="text-white font-medium">{certificate.issuer}</span>
            </div>
            <div className="flex justify-between text-[#86868b]">
              <span>Credential Status:</span>
              <span className="text-emerald-400 font-medium">Active & Digitally Verified</span>
            </div>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between border-t border-white/10">
          <a
            href={PERSONAL_INFO.credlyPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Open Verified Credly PDF</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-semibold text-white transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
