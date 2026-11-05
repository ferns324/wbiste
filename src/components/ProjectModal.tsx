import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Github,
  Play,
  CheckCircle2,
  Clock,
  Layers,
  Monitor,
  Code2,
  Terminal,
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  initialTab?: 'details' | 'preview';
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  initialTab = 'details',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'preview'>(initialTab);
  const [interactiveLogicGateA, setInteractiveLogicGateA] = useState(true);
  const [interactiveLogicGateB, setInteractiveLogicGateB] = useState(false);
  const [simulatedShuntVoltage, setSimulatedShuntVoltage] = useState(13.6);
  const [simulatedCurrent, setSimulatedCurrent] = useState(4.2);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl apple-glass rounded-3xl border border-white/15 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Top Header Bar */}
        <div className="p-6 pb-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {project.type}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#86868b]">
              {project.status === 'completed' ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Completed</span>
                </span>
              ) : (
                <span className="text-amber-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>In Progress</span>
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher */}
            {project.hasPreview && (
              <div className="flex items-center bg-black/50 p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === 'details'
                      ? 'bg-white/15 text-white'
                      : 'text-[#86868b] hover:text-white'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
                    activeTab === 'preview'
                      ? 'bg-blue-600 text-white'
                      : 'text-[#86868b] hover:text-white'
                  }`}
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Interactive Demo</span>
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              aria-label="Close Project Modal"
              className="p-2 rounded-xl text-[#86868b] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>

          {activeTab === 'preview' && project.hasPreview ? (
            /* Interactive Simulation View */
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-[#09090b] border border-white/10 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs text-blue-400 font-mono">
                    <Monitor className="w-4 h-4" />
                    <span>Live Interactive Simulation Environment</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Active Sandbox
                  </span>
                </div>

                {project.type === 'game' ? (
                  /* Logic Gate Interactive Simulation */
                  <div className="space-y-4 py-2">
                    <p className="text-xs text-[#86868b]">
                      Toggle the binary input pins below to test real-time digital logic AND / XOR gate
                      computations:
                    </p>
                    <div className="flex flex-wrap items-center gap-6 p-4 rounded-xl bg-black/60 border border-white/5">
                      <button
                        onClick={() => setInteractiveLogicGateA(!interactiveLogicGateA)}
                        className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                          interactiveLogicGateA
                            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                            : 'bg-white/5 text-gray-400 border border-white/10'
                        }`}
                      >
                        Input Pin A: {interactiveLogicGateA ? 'HIGH (1)' : 'LOW (0)'}
                      </button>

                      <button
                        onClick={() => setInteractiveLogicGateB(!interactiveLogicGateB)}
                        className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                          interactiveLogicGateB
                            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                            : 'bg-white/5 text-gray-400 border border-white/10'
                        }`}
                      >
                        Input Pin B: {interactiveLogicGateB ? 'HIGH (1)' : 'LOW (0)'}
                      </button>

                      <div className="text-xs font-mono space-y-1 pl-4 border-l border-white/10">
                        <div className="text-gray-300">
                          AND Output:{' '}
                          <span
                            className={
                              interactiveLogicGateA && interactiveLogicGateB
                                ? 'text-emerald-400 font-bold'
                                : 'text-gray-500'
                            }
                          >
                            {interactiveLogicGateA && interactiveLogicGateB ? '1 (TRUE)' : '0 (FALSE)'}
                          </span>
                        </div>
                        <div className="text-gray-300">
                          XOR Output:{' '}
                          <span
                            className={
                              interactiveLogicGateA !== interactiveLogicGateB
                                ? 'text-cyan-400 font-bold'
                                : 'text-gray-500'
                            }
                          >
                            {interactiveLogicGateA !== interactiveLogicGateB ? '1 (TRUE)' : '0 (FALSE)'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : project.type === 'bot' ? (
                  /* Solar Telemetry Live Widget */
                  <div className="space-y-4 py-2">
                    <p className="text-xs text-[#86868b]">
                      Real-time ESP32 shunt sensor telemetry readings over MQTT:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                      <div className="p-3 rounded-xl bg-black/60 border border-white/5">
                        <div className="text-[10px] text-[#86868b]">PV Shunt Voltage</div>
                        <div className="text-base text-cyan-400 font-bold">
                          {simulatedShuntVoltage.toFixed(1)} V
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-black/60 border border-white/5">
                        <div className="text-[10px] text-[#86868b]">Current Draw</div>
                        <div className="text-base text-emerald-400 font-bold">
                          {simulatedCurrent.toFixed(1)} A
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-black/60 border border-white/5">
                        <div className="text-[10px] text-[#86868b]">Harvest Power</div>
                        <div className="text-base text-amber-400 font-bold">
                          {(simulatedShuntVoltage * simulatedCurrent).toFixed(0)} W
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-black/60 border border-white/5">
                        <div className="text-[10px] text-[#86868b]">Cell State</div>
                        <div className="text-base text-blue-400 font-bold">OPTIMAL (98%)</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSimulatedShuntVoltage(14.2);
                          setSimulatedCurrent(5.1);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-gray-300"
                      >
                        Simulate Peak Noon Sun
                      </button>
                      <button
                        onClick={() => {
                          setSimulatedShuntVoltage(12.8);
                          setSimulatedCurrent(1.8);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-gray-300"
                      >
                        Simulate Dusk / Cloud Cover
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Standard Live Application Preview */
                  <div className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden border border-white/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-[#86868b] leading-relaxed">
                      This system features a live production dashboard deployed on institutional
                      intranet with barcode checkouts and private cloud archives.
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Detailed Overview View */
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 h-64 relative bg-black/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Technical Architecture
                </h4>
                <p className="text-xs sm:text-sm text-[#a1a1a6] leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Technologies & Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.languages.map((l) => (
                    <span
                      key={l}
                      className="px-3 py-1 rounded-xl bg-white/[0.04] text-xs font-medium text-gray-200 border border-white/10"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/10 bg-black/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href={project.repoUrl || 'https://github.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-white flex items-center gap-1.5 border border-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-semibold text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
