import React, { useState } from 'react';
import { X, Star, Sparkles, Plus, AlertCircle } from 'lucide-react';
import { FeedbackItem } from '../data/portfolioData';

interface AddFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddFeedback: (feedback: FeedbackItem) => void;
}

export const AddFeedbackModal: React.FC<AddFeedbackModalProps> = ({
  isOpen,
  onClose,
  onAddFeedback,
}) => {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [languageTag, setLanguageTag] = useState('');
  const [productivityBoost, setProductivityBoost] = useState('+80% Efficiency');
  const [testimonial, setTestimonial] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !jobTitle.trim() || !testimonial.trim() || !languageTag.trim()) {
      setError('Please fill in all required feedback fields.');
      return;
    }

    const defaultAvatars = [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    ];

    const newFeedback: FeedbackItem = {
      id: `fb-user-${Date.now()}`,
      name: name.trim(),
      avatar: avatarUrl.trim() || defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)],
      rating,
      jobTitle: jobTitle.trim(),
      languageTag: languageTag.trim(),
      productivityBoost: productivityBoost.trim().startsWith('+')
        ? productivityBoost.trim()
        : `+${productivityBoost.trim()}`,
      testimonial: testimonial.trim(),
      date: 'Just now',
    };

    onAddFeedback(newFeedback);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl apple-glass rounded-3xl border border-white/15 overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 id="feedback-modal-title" className="text-lg font-bold text-white tracking-tight">
              Add Manual Testimonial / Feedback
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Feedback Modal"
            className="p-2 rounded-xl text-[#86868b] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">
                Client / Reviewer Name <span className="text-blue-400">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError('');
                }}
                placeholder="e.g. Marcus Vance"
                className="w-full px-3.5 py-2.5 bg-black/50 border border-white/10 rounded-xl text-xs text-white placeholder-[#86868b] focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">
                Job Title (small font) <span className="text-blue-400">*</span>
              </label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => {
                  setJobTitle(e.target.value);
                  setError('');
                }}
                placeholder="e.g. Lead System Architect"
                className="w-full px-3.5 py-2.5 bg-black/50 border border-white/10 rounded-xl text-xs text-white placeholder-[#86868b] focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">
                Programming Language Tag <span className="text-blue-400">*</span>
              </label>
              <input
                type="text"
                value={languageTag}
                onChange={(e) => {
                  setLanguageTag(e.target.value);
                  setError('');
                }}
                placeholder="e.g. C++, Python, PHP, ESP32"
                className="w-full px-3.5 py-2.5 bg-black/50 border border-white/10 rounded-xl text-xs text-white placeholder-[#86868b] focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">
                Productivity Boost Metric <span className="text-blue-400">*</span>
              </label>
              <input
                type="text"
                value={productivityBoost}
                onChange={(e) => setProductivityBoost(e.target.value)}
                placeholder="e.g. +85% Speed"
                className="w-full px-3.5 py-2.5 bg-black/50 border border-white/10 rounded-xl text-xs text-white placeholder-[#86868b] focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300">
              Star Rating: {rating} of 5 Stars
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="p-1 text-amber-400 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= rating ? 'fill-current text-amber-400' : 'text-gray-600'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300">Avatar Image URL (Optional)</label>
            <input
              type="text"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              placeholder="https://... (or leave blank for auto-generated avatar)"
              className="w-full px-3.5 py-2.5 bg-black/50 border border-white/10 rounded-xl text-xs text-white placeholder-[#86868b] focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300">
              Testimonial / Feedback Text <span className="text-blue-400">*</span>
            </label>
            <textarea
              rows={3}
              value={testimonial}
              onChange={(e) => {
                setTestimonial(e.target.value);
                setError('');
              }}
              placeholder="Describe Christian's engineering contribution, speed, communication, or code quality..."
              className="w-full px-3.5 py-2.5 bg-black/50 border border-white/10 rounded-xl text-xs text-white placeholder-[#86868b] focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-xs font-semibold text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors shadow-lg shadow-blue-600/30 flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Publish Feedback</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
