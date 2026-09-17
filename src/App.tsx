import React, { useState } from 'react';
import { ViewMode } from './types';
import { Header } from './components/Header';
import { OverviewSection } from './components/OverviewSection';
import { InteractiveCompareView } from './components/InteractiveCompareView';
import { PillarsDeepDive } from './components/PillarsDeepDive';
import { CodeDiffViewer } from './components/CodeDiffViewer';
import { MetricsScorecard } from './components/MetricsScorecard';
import { LiveEmbedView } from './components/LiveEmbedView';
import { ExternalLink, Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<ViewMode>('overview');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Global Navigation Header */}
      <Header activeView={activeView} onViewChange={setActiveView} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-6 sm:pt-8">
        {activeView === 'overview' && (
          <OverviewSection onNavigateView={(view) => setActiveView(view)} />
        )}

        {activeView === 'interactive' && <InteractiveCompareView />}

        {activeView === 'pillars' && <PillarsDeepDive />}

        {activeView === 'diff' && <CodeDiffViewer />}

        {activeView === 'scorecard' && <MetricsScorecard />}

        {activeView === 'live-embed' && <LiveEmbedView />}
      </main>

      {/* Global Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <span className="font-semibold text-slate-700">
              Singapore Carpark Rates (sgCarMart) Before & After Evaluation
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap text-xs">
            <a
              href="https://sg-carpark-v1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 flex items-center gap-1 transition-colors"
            >
              <span>Before URL</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://sg-carpark-v1-9fm9.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 font-medium text-blue-600 flex items-center gap-1 transition-colors"
            >
              <span>After (Improved) URL</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://github.com/Happyyybunnyyy/SG-Carpark-V1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 flex items-center gap-1 transition-colors"
            >
              <span>GitHub Commit Diff</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
