import React from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { BLOGS_DATA, BlogPost } from '../data/portfolioData';

interface BlogsSectionProps {
  onSelectBlog: (post: BlogPost) => void;
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({ onSelectBlog }) => {
  return (
    <section id="blogs" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="text-xs font-semibold tracking-widest text-[#2997ff] uppercase">
          Insights & Technical Perspectives
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Technical Articles
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#86868b] leading-relaxed">
          Deep-dives into server diagnostics, low-level hardware constraints, and practical TinyML
          deployments on microcontrollers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOGS_DATA.map((post) => (
          <div
            key={post.id}
            onClick={() => onSelectBlog(post)}
            className="apple-glass p-7 rounded-3xl border border-white/10 flex flex-col justify-between apple-glass-hover cursor-pointer group text-left"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20">
                  {post.category}
                </span>
                <span className="text-[#86868b] flex items-center gap-1 font-mono text-[11px]">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-[#86868b] line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
              <span className="text-[#86868b] text-[11px] flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{post.date}</span>
              </span>
              <span className="text-blue-400 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                <span>Read Article</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
