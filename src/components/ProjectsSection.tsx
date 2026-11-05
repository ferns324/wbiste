import React, { useState } from 'react';
import {
  Search,
  ExternalLink,
  Github,
  Play,
  EyeOff,
  Layers,
  Sparkles,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { PROJECTS_DATA, ProjectItem, ProjectType } from '../data/portfolioData';
import { filterProjects } from '../utils/portfolioLogic';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenPreview: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenPreview,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredProjects = filterProjects(
    PROJECTS_DATA,
    searchQuery,
    typeFilter,
    statusFilter
  );

  const typeOptions: { label: string; value: string }[] = [
    { label: 'All Types', value: 'all' },
    { label: 'Hardware/IoT', value: 'hardware' },
    { label: 'Web', value: 'web' },
    { label: 'Application', value: 'application' },
    { label: 'Bot & Telemetry', value: 'bot' },
    { label: 'API', value: 'api' },
    { label: 'Game/Sim', value: 'game' },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="text-xs font-semibold tracking-widest text-[#2997ff] uppercase">
          Engineering Showcase
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Featured Projects</h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#86868b] leading-relaxed">
          From hardware prototypes with recycled LCD optics to high-concurrency diagnostic APIs and
          microcontroller bots.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="apple-glass p-4 rounded-3xl border border-white/10 mb-10 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#86868b]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, technology, or keywords..."
              className="w-full pl-10 pr-4 py-2.5 bg-black/50 border border-white/10 rounded-2xl text-xs sm:text-sm text-white placeholder-[#86868b] focus:outline-none focus:border-blue-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-[#86868b] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Status selector */}
          <div className="flex items-center gap-1.5 self-start md:self-auto">
            <span className="text-xs text-[#86868b] mr-1 hidden sm:inline">Status:</span>
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                statusFilter === 'all'
                  ? 'bg-white/15 text-white font-semibold'
                  : 'text-[#86868b] hover:text-white bg-white/5'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setStatusFilter('completed')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors flex items-center gap-1 ${
                statusFilter === 'completed'
                  ? 'bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30'
                  : 'text-[#86868b] hover:text-white bg-white/5'
              }`}
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Completed</span>
            </button>
            <button
              onClick={() => setStatusFilter('in-progress')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors flex items-center gap-1 ${
                statusFilter === 'in-progress'
                  ? 'bg-amber-500/20 text-amber-400 font-semibold border border-amber-500/30'
                  : 'text-[#86868b] hover:text-white bg-white/5'
              }`}
            >
              <Clock className="w-3 h-3 text-amber-400" />
              <span>In Progress</span>
            </button>
          </div>
        </div>

        {/* Project Type Filter Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
          {typeOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setTypeFilter(opt.value)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                typeFilter === opt.value
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'text-[#86868b] hover:text-white bg-white/5'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="apple-glass p-12 rounded-3xl text-center space-y-3 border border-white/10">
          <p className="text-gray-400 text-sm">
            No projects matched "{searchQuery}" with the selected filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setTypeFilter('all');
              setStatusFilter('all');
            }}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="apple-glass rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between apple-glass-hover group"
            >
              <div>
                {/* Project Image Container */}
                <div className="relative h-48 overflow-hidden bg-black/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

                  {/* Status Badge */}
                  <span
                    className={`absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full text-[10px] font-semibold backdrop-blur-md border ${
                      project.status === 'completed'
                        ? 'bg-emerald-950/70 text-emerald-300 border-emerald-500/30'
                        : 'bg-amber-950/70 text-amber-300 border-amber-500/30'
                    }`}
                  >
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>

                  {/* Type Tag */}
                  <span className="absolute bottom-3 left-3.5 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-blue-400 border border-white/10">
                    {project.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-base font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer tracking-tight"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#86868b] line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Programming Languages / Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-medium text-gray-300 border border-white/[0.06]"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 mt-3 flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-gray-400 hover:text-white font-medium flex items-center gap-1 transition-colors"
                >
                  <span>Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.hasPreview ? (
                    <button
                      onClick={() => onOpenPreview(project)}
                      className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-md shadow-blue-600/30 flex items-center gap-1.5"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Preview</span>
                    </button>
                  ) : (
                    <button
                      disabled
                      title="Interactive web preview unavailable for this low-level hardware or local desktop tool"
                      className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] text-[#86868b] cursor-not-allowed border border-white/[0.06] flex items-center gap-1.5"
                    >
                      <EyeOff className="w-3 h-3" />
                      <span>No Preview</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
