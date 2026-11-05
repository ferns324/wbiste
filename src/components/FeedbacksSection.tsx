import React, { useState } from 'react';
import {
  Star,
  Plus,
  Quote,
  Sparkles,
  TrendingUp,
  Award,
  Clock,
  HeartHandshake,
  CheckCircle,
} from 'lucide-react';
import { FEEDBACKS_DATA, METRICS, FeedbackItem } from '../data/portfolioData';

interface FeedbacksSectionProps {
  onOpenAddFeedbackModal: () => void;
  feedbacksList: FeedbackItem[];
}

export const FeedbacksSection: React.FC<FeedbacksSectionProps> = ({
  onOpenAddFeedbackModal,
  feedbacksList,
}) => {
  return (
    <section id="feedbacks" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="text-xs font-semibold tracking-widest text-[#2997ff] uppercase">
          Client & Peer Endorsements
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Feedbacks & Trust Metrics
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#86868b] leading-relaxed">
          Real feedback from global web hosting clients at one.com, engineering faculty professors,
          and collaborative developers.
        </p>

        {/* Action Button: Manually Add Feedback */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={onOpenAddFeedbackModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40"
          >
            <Plus className="w-4 h-4" />
            <span>Add Feedback / Testimonial</span>
          </button>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="apple-glass p-6 rounded-3xl border border-white/10 text-center space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-400 mx-auto flex items-center justify-center">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 tabular-nums">
            {METRICS.clientSatisfaction}
          </div>
          <div className="text-[11px] uppercase tracking-wider text-[#86868b] font-medium">
            Overall Client Satisfaction
          </div>
        </div>

        <div className="apple-glass p-6 rounded-3xl border border-white/10 text-center space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-400 mx-auto flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-indigo-400 tabular-nums">
            {METRICS.onTimeDelivery}
          </div>
          <div className="text-[11px] uppercase tracking-wider text-[#86868b] font-medium">
            On-Time Delivery
          </div>
        </div>

        <div className="apple-glass p-6 rounded-3xl border border-white/10 text-center space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 mx-auto flex items-center justify-center">
            <Star className="w-5 h-5 fill-current" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-purple-400 tabular-nums">
            {METRICS.averageRating}
          </div>
          <div className="text-[11px] uppercase tracking-wider text-[#86868b] font-medium">
            Average Star Rating
          </div>
        </div>

        <div className="apple-glass p-6 rounded-3xl border border-white/10 text-center space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tabular-nums">
            {METRICS.happyClientsCount}
          </div>
          <div className="text-[11px] uppercase tracking-wider text-[#86868b] font-medium">
            Count of Happy Clients
          </div>
        </div>
      </div>

      {/* Feedbacks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacksList.map((fb) => (
          <div
            key={fb.id}
            className="apple-glass p-7 rounded-3xl border border-white/10 flex flex-col justify-between apple-glass-hover space-y-5"
          >
            <div className="space-y-4">
              {/* Top rating and language tag */}
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400 gap-0.5">
                  {Array.from({ length: fb.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20">
                  {fb.languageTag}
                </span>
              </div>

              {/* Review Quote */}
              <p className="text-xs sm:text-sm text-[#a1a1a6] italic leading-relaxed">
                "{fb.testimonial}"
              </p>
            </div>

            {/* Bottom User Info & Productivity Boost */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-white/5 shrink-0">
                  <img
                    src={fb.avatar}
                    alt={fb.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-tight">{fb.name}</h4>
                  <p className="text-[10px] text-[#86868b] leading-tight max-w-[160px] line-clamp-1">
                    {fb.jobTitle}
                  </p>
                </div>
              </div>

              {/* Productivity Boost Badge */}
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                  <span>{fb.productivityBoost}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
