import React from 'react';
import { X, Calendar, Clock, User, BookOpen } from 'lucide-react';
import { BlogPost } from '../data/portfolioData';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl apple-glass rounded-3xl border border-white/15 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="p-6 pb-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {post.category}
            </span>
            <span className="text-xs text-[#86868b] flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Blog Reader"
            className="p-2 rounded-xl text-[#86868b] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Reader Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
          <div className="space-y-3">
            <h2 id="blog-modal-title" className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {post.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-[#86868b] pt-1">
              <span className="flex items-center gap-1.5 text-gray-300">
                <User className="w-3.5 h-3.5 text-blue-400" />
                <span>{post.author}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </span>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          {/* Formatted Article Content */}
          <div className="prose prose-invert max-w-none text-xs sm:text-sm text-[#c4c4c8] leading-relaxed space-y-4 whitespace-pre-line">
            {post.content}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-black/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-semibold text-white transition-colors"
          >
            Finished Reading
          </button>
        </div>
      </div>
    </div>
  );
};
