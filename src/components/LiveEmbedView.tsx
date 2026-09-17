import React, { useState } from 'react';
import { ExternalLink, Smartphone, Tablet, Monitor, RefreshCw, AlertCircle } from 'lucide-react';

export const LiveEmbedView: React.FC = () => {
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [refreshKey, setRefreshKey] = useState(0);

  const v1Url = 'https://sg-carpark-v1.vercel.app/';
  const v2Url = 'https://sg-carpark-v1-9fm9.vercel.app/';

  const getContainerWidth = () => {
    switch (deviceMode) {
      case 'mobile':
        return 'w-[390px] h-[780px]';
      case 'tablet':
        return 'w-[768px] h-[820px]';
      case 'desktop':
        return 'w-full h-[800px]';
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header & Controls */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Live Web App Embeds & Device Simulator
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Inspect the live deployed Vercel instances directly side-by-side across responsive viewports.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Viewport switchers */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  deviceMode === 'mobile'
                    ? 'bg-white text-blue-600 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile (390px)</span>
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  deviceMode === 'tablet'
                    ? 'bg-white text-blue-600 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span>Tablet (768px)</span>
              </button>
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  deviceMode === 'desktop'
                    ? 'bg-white text-blue-600 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Full Width</span>
              </button>
            </div>

            {/* Refresh */}
            <button
              onClick={() => setRefreshKey((k) => k + 1)}
              className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-2xs"
              title="Refresh iframes"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Note on Vercel deployment status */}
        <div className="mt-4 p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Deployment Note: </strong>
            Both Vercel URLs are live public endpoints. If your browser blocks embedded iframes due to Content Security Policies (CSP) or strict third-party cookie controls, click the direct external link buttons on each card to test them in a dedicated browser window.
          </div>
        </div>
      </div>

      {/* Side-by-side iframes */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start justify-items-center">
        {/* V1 Baseline Frame */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-xl flex items-center justify-between px-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
              <span className="font-bold text-sm text-slate-800">Before: V1 Baseline</span>
            </div>
            <a
              href={v1Url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
            >
              <span>Open V1 in Tab</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          <div
            className={`transition-all duration-200 rounded-3xl overflow-hidden border-4 border-slate-300 shadow-xl bg-slate-100 flex flex-col ${getContainerWidth()}`}
          >
            {/* Phone notch / frame header */}
            <div className="bg-slate-200 px-4 py-2 flex items-center justify-between text-[11px] text-slate-600 border-b border-slate-300 shrink-0">
              <span className="truncate max-w-[200px]">{v1Url}</span>
              <span className="text-[10px] font-mono font-bold uppercase">Before</span>
            </div>
            <iframe
              key={`v1-${refreshKey}`}
              src={v1Url}
              title="sg-carpark-v1.vercel.app (Before)"
              className="w-full flex-1 border-0 bg-white"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>

        {/* V2 Improved Frame */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-xl flex items-center justify-between px-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="font-bold text-sm text-blue-950">After: V2 Improved Edition</span>
            </div>
            <a
              href={v2Url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors"
            >
              <span>Open V2 in Tab</span>
              <ExternalLink className="w-3 h-3 text-blue-500" />
            </a>
          </div>

          <div
            className={`transition-all duration-200 rounded-3xl overflow-hidden border-4 border-blue-400 shadow-xl bg-slate-100 flex flex-col ${getContainerWidth()}`}
          >
            {/* Phone notch / frame header */}
            <div className="bg-blue-600 px-4 py-2 flex items-center justify-between text-[11px] text-white border-b border-blue-700 shrink-0">
              <span className="truncate max-w-[200px]">{v2Url}</span>
              <span className="text-[10px] font-mono font-bold uppercase">After (Improved)</span>
            </div>
            <iframe
              key={`v2-${refreshKey}`}
              src={v2Url}
              title="sg-carpark-v1-9fm9.vercel.app (After)"
              className="w-full flex-1 border-0 bg-white"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
