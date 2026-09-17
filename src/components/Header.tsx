import React from 'react';
import { ViewMode } from '../types';
import { 
  ArrowLeftRight, 
  Sparkles, 
  Code2, 
  BarChart3, 
  Layers, 
  ExternalLink,
  Laptop
} from 'lucide-react';

interface HeaderProps {
  activeView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeView, onViewChange }) => {
  const tabs: { id: ViewMode; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Executive Summary', icon: <Layers className="w-4 h-4" /> },
    { id: 'interactive', label: 'Interactive Split Demo', icon: <ArrowLeftRight className="w-4 h-4" /> },
    { id: 'pillars', label: '7 Key Improvements', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'diff', label: 'Git Code Diff', icon: <Code2 className="w-4 h-4" /> },
    { id: 'scorecard', label: 'Metrics & UX Scorecard', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'live-embed', label: 'Live App Embeds', icon: <Laptop className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              SG
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                  Singapore Carpark Rates Comparison
                </h1>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                  V1 vs V2 Teardown
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Detailed Before vs After architectural & CX/UX analysis
              </p>
            </div>
          </div>

          {/* Quick links to live apps */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <a
              href="https://sg-carpark-v1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
              title="Open original V1 before app in new tab"
            >
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              <span>Before (V1)</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href="https://sg-carpark-v1-9fm9.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors"
              title="Open improved V2 after app in new tab"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span>After (V2 Improved)</span>
              <ExternalLink className="w-3 h-3 text-blue-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto no-scrollbar border-t border-slate-100">
        <nav className="flex space-x-1 sm:space-x-2 py-2" aria-label="Comparison views">
          {tabs.map((tab) => {
            const isActive = activeView === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => onViewChange(tab.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
