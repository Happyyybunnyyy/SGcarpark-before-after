import React, { useState } from 'react';
import { KEY_IMPROVEMENTS } from '../data/diffData';
import { KeyImprovement } from '../types';
import { 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  FileCode, 
  BadgeCheck, 
  ChevronRight,
  Code,
  Layers,
  ArrowRight
} from 'lucide-react';

export const PillarsDeepDive: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(KEY_IMPROVEMENTS[0].id);

  const activePillar: KeyImprovement =
    KEY_IMPROVEMENTS.find((p) => p.id === selectedPillarId) || KEY_IMPROVEMENTS[0];

  return (
    <div className="space-y-6 pb-12">
      {/* Title & Introduction */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5" />
            7 Architectural & CX Pillars
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            The 7 Key Engineering & UX Improvements
          </h2>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            A comprehensive breakdown of every major system improvement between the initial release (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">sg-carpark-v1</code>) and the improved edition (<code className="text-xs bg-blue-50 px-1.5 py-0.5 rounded text-blue-700">sg-carpark-v1-9fm9</code>). Select any pillar below to inspect its problem statement, solution, and code diff.
          </p>
        </div>

        {/* Pillars selector tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 mt-6">
          {KEY_IMPROVEMENTS.map((pillar, idx) => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold opacity-80 mb-1">
                    <span>Pillar {idx + 1}</span>
                    <span className={`px-1.5 py-0.2 rounded text-[10px] ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {pillar.category}
                    </span>
                  </div>
                  <h3 className={`font-bold text-sm line-clamp-2 leading-snug ${
                    isSelected ? 'text-white' : 'text-slate-900'
                  }`}>
                    {pillar.title}
                  </h3>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-current/10">
                  <span className="font-mono font-extrabold">{pillar.impactScore}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Pillar Detailed Inspection Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-8">
        {/* Header summary of selected pillar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                {activePillar.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800">
                Impact: {activePillar.impactScore}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{activePillar.title}</h3>
            <p className="text-sm text-slate-500 mt-1">{activePillar.tagline}</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap text-xs font-semibold text-slate-600">
            <span className="text-slate-400">Affected Files:</span>
            {activePillar.affectedFiles.map((file) => (
              <span key={file} className="px-2 py-1 bg-slate-100 rounded-lg font-mono text-[11px] text-slate-700 border border-slate-200">
                {file}
              </span>
            ))}
          </div>
        </div>

        {/* Before vs After Narrative Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before Panel */}
          <div className="rounded-2xl border border-red-200 bg-red-50/30 p-5 space-y-4">
            <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
              <XCircle className="w-4 h-4" />
              <span>Before (V1 Baseline)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activePillar.beforeSummary}
            </p>

            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Pain Points & Blindspots
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {activePillar.painPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* After Panel */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/30 p-5 space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>After (V2 Improved Edition)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activePillar.afterSummary}
            </p>

            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Implemented Engineering Solutions
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {activePillar.solutions.map((sol, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Code Diff Inspection Box */}
        <div className="rounded-2xl border border-slate-200 bg-slate-900 text-slate-200 p-5 space-y-4 overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2 font-mono">
              <Code className="w-4 h-4 text-blue-400" />
              <span>{activePillar.codeDiffSnippet.filePath}</span>
            </div>
            <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
              Git Commit Diff Highlight
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs font-mono">
            {/* Before Code */}
            <div className="bg-slate-950 rounded-xl p-4 border border-red-900/30 space-y-2">
              <div className="text-[11px] text-red-400 font-bold flex items-center gap-1.5 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                V1 Original Implementation
              </div>
              <pre className="overflow-x-auto text-red-200/90 whitespace-pre-wrap leading-relaxed">
                {activePillar.codeDiffSnippet.beforeCode}
              </pre>
            </div>

            {/* After Code */}
            <div className="bg-slate-950 rounded-xl p-4 border border-emerald-900/30 space-y-2">
              <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1.5 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                V2 Improved Implementation
              </div>
              <pre className="overflow-x-auto text-emerald-200/90 whitespace-pre-wrap leading-relaxed">
                {activePillar.codeDiffSnippet.afterCode}
              </pre>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
            <strong className="text-slate-300">Engineering Rationale: </strong>
            {activePillar.codeDiffSnippet.explanation}
          </div>
        </div>
      </div>
    </div>
  );
};
