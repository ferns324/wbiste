/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ProjectItem,
  CertificateItem,
  ResearchPaper,
  BlogPost,
  FeedbackItem,
  FEEDBACKS_DATA,
  PERSONAL_INFO,
} from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HomeHero } from './components/HomeHero';
import { AboutSection } from './components/AboutSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AcademicsSection } from './components/AcademicsSection';
import { ResearchSection } from './components/ResearchSection';
import { FeedbacksSection } from './components/FeedbacksSection';
import { BlogsSection } from './components/BlogsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CertificateModal } from './components/CertificateModal';
import { ResearchModal } from './components/ResearchModal';
import { BlogModal } from './components/BlogModal';
import { AddFeedbackModal } from './components/AddFeedbackModal';
import { CheckCircle2, Info, AlertTriangle } from 'lucide-react';

interface ToastState {
  id: number;
  message: string;
  type: 'success' | 'info';
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [toasts, setToasts] = useState<ToastState[]>([]);

  // Modals state
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [projectModalTab, setProjectModalTab] = useState<'details' | 'preview'>('details');
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  // Dynamic feedback list state with local storage persistence
  const [feedbacksList, setFeedbacksList] = useState<FeedbackItem[]>(() => {
    try {
      const saved = localStorage.getItem('portfolio_user_feedbacks');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // Fallback
    }
    return FEEDBACKS_DATA;
  });

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleAddFeedback = (newFeedback: FeedbackItem) => {
    const updated = [newFeedback, ...feedbacksList];
    setFeedbacksList(updated);
    try {
      localStorage.setItem('portfolio_user_feedbacks', JSON.stringify(updated));
    } catch (e) {}
    showToast(`Testimonial from ${newFeedback.name} published successfully!`, 'success');
  };

  const handleDownloadPaper = () => {
    showToast('Research abstract paper downloaded.', 'success');
  };

  // Keyboard shortcut listener to close any active modal on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setSelectedCertificate(null);
        setSelectedPaper(null);
        setSelectedBlog(null);
        setIsFeedbackModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Section observer to update active section in navbar
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'achievements',
      'projects',
      'academics',
      'research',
      'feedbacks',
      'blogs',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] selection:bg-blue-600 selection:text-white">
      {/* Toast Notifications Box */}
      <div className="fixed bottom-6 right-6 z-50 space-y-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="apple-glass px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/15 pointer-events-auto animate-in slide-in-from-bottom-3 duration-200"
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <Info className="w-4 h-4 text-blue-400 shrink-0" />
            )}
            <span className="text-xs font-medium text-white">{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Top Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Layout */}
      <main>
        {/* 1. Home Section */}
        <HomeHero onNavigate={handleNavigate} />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Achievements Section */}
        <AchievementsSection
          onSelectCertificate={(cert) => setSelectedCertificate(cert)}
        />

        {/* 4. Projects Section */}
        <ProjectsSection
          onSelectProject={(project) => {
            setSelectedProject(project);
            setProjectModalTab('details');
          }}
          onOpenPreview={(project) => {
            setSelectedProject(project);
            setProjectModalTab('preview');
          }}
        />

        {/* 5. Academics Section */}
        <AcademicsSection />

        {/* 6. Research Section */}
        <ResearchSection
          onSelectPaper={(paper) => setSelectedPaper(paper)}
        />

        {/* 7. Feedbacks Section */}
        <FeedbacksSection
          onOpenAddFeedbackModal={() => setIsFeedbackModalOpen(true)}
          feedbacksList={feedbacksList}
        />

        {/* 8. Blogs Section */}
        <BlogsSection
          onSelectBlog={(blog) => setSelectedBlog(blog)}
        />

        {/* 9. Contact Section */}
        <ContactSection onNotify={showToast} />
      </main>

      {/* Consistent Standard Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        initialTab={projectModalTab}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <ResearchModal
        paper={selectedPaper}
        onClose={() => setSelectedPaper(null)}
        onDownload={handleDownloadPaper}
      />

      <BlogModal
        post={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />

      <AddFeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
        onAddFeedback={handleAddFeedback}
      />
    </div>
  );
}
