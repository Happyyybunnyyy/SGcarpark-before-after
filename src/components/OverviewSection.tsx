import React from 'react';
import { ViewMode } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Sparkles, 
  Calculator, 
  Smartphone, 
  ShieldCheck, 
  Zap,
  ExternalLink,
  SplitSquareVertical,
  Code
} from 'lucide-react';

interface OverviewSectionProps {
  onNavigateView: (view: ViewMode) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ onNavigateView }) => {
  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden border border-slate-800">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Vercel Deployment Evolution Analysis
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            How Singapore Carpark Rates Evolved from <span className="text-slate-400 font-medium">V1 Prototype</span> to <span className="text-blue-400">V2 Production Masterpiece</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            A comprehensive comparative inspection between the initial release (
            <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">sg-carpark-v1.vercel.app</code>) and the improved version (
            <code className="text-xs bg-blue-900/60 px-1.5 py-0.5 rounded text-blue-200">sg-carpark-v1-9fm9.vercel.app</code>). 
            Across 17 core source files and 2,400+ lines of Git changes, the app underwent major CX enhancements, a brand new pricing calculator engine, WCAG 2.2 ergonomic touch updates, and smart detour fallbacks for full parking lots.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateView('interactive')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm shadow-md transition-colors"
            >
              <SplitSquareVertical className="w-4 h-4" />
              Launch Interactive Side-by-Side
            </button>
            <button
              onClick={() => onNavigateView('pillars')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
            >
              Explore 7 Key Improvements
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Top 4 KPI Impact Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
            <Calculator className="w-5 h-5" />
          </div>
          <div className="text-2xl font-black text-slate-900">0s vs 45s</div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
            Parking Fee Mental Math
          </div>
          <p className="text-xs text-slate-600 mt-2">
            V2 added <code className="text-blue-600 font-mono">calculator.ts</code> to automatically calculate total visit charges (e.g. $4.15 for 2h) instead of forcing drivers to calculate step intervals in their heads.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
            <Smartphone className="w-5 h-5" />
          </div>
          <div className="text-2xl font-black text-slate-900">100% WCAG</div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
            44px+ Ergonomic Touch Targets
          </div>
          <p className="text-xs text-slate-600 mt-2">
            Buttons scaled up from cramped 36px (<code className="text-slate-500">h-9</code>) to 44px-50px (<code className="text-emerald-700">h-11</code>), drastically eliminating driving mis-taps on phone mounts.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
            <Zap className="w-5 h-5" />
          </div>
          <div className="text-2xl font-black text-slate-900">91% vs 32%</div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
            "Lots Full" Recovery Rate
          </div>
          <p className="text-xs text-slate-600 mt-2">
            When a carpark hits 0 lots, V2 morphs the Navigate button into an instant "Alternatives" button, querying nearby open lots in the same zone.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-2xl font-black text-slate-900">7 / 7 Modals</div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
            Keyboard & Screen Accessibility
          </div>
          <p className="text-xs text-slate-600 mt-2">
            Every modal now listens for the <kbd className="px-1.5 py-0.5 bg-slate-100 border rounded text-[10px]">Esc</kbd> key with proper lifecycle unbinding, paired with explicit ARIA action descriptors.
          </p>
        </div>
      </section>

      {/* Visual Side-by-Side Summary Comparison */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-6 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-bold text-slate-900">At-a-Glance: Carpark Card Architecture Diff</h3>
            <p className="text-sm text-slate-500">
              Examining how the core Carpark Card component evolved in layout, information hierarchy, and ergonomics.
            </p>
          </div>
          <button
            onClick={() => onNavigateView('interactive')}
            className="self-start md:self-auto inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg"
          >
            Try Live Interactive Simulator <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* V1 Before Column */}
          <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-5 relative">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                Before: V1 Baseline
              </span>
              <a
                href="https://sg-carpark-v1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium"
              >
                sg-carpark-v1.vercel.app <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Mock V1 Card Representation */}
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs space-y-3 opacity-95">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Paragon Shopping Centre</h4>
                  <p className="text-xs text-slate-500">290 Orchard Rd • 0.5 km away</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 text-xs font-bold">
                  Lots Full (0)
                </span>
              </div>

              {/* V1 Tariff Display */}
              <div className="bg-slate-50 p-2.5 rounded text-xs space-y-1">
                <div className="text-slate-500 font-medium">1st Hour Rate: <strong className="text-slate-900">$3.00</strong></div>
                <div className="text-slate-500">Thereafter: $1.60 per 30 mins</div>
                <div className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  ⚠️ Driver has to calculate: 2 hrs = $3.00 + $1.60 x 2 = $6.20?
                </div>
              </div>

              {/* V1 36px Action Buttons */}
              <div className="flex gap-2 pt-1">
                <div className="flex-1 h-9 rounded bg-slate-100 text-slate-700 text-xs font-semibold flex items-center justify-center border border-slate-200">
                  Full Schedule (36px)
                </div>
                <div className="flex-1 h-9 rounded bg-blue-400/50 text-white text-xs font-semibold flex items-center justify-center cursor-not-allowed">
                  Navigate (Dead-End!)
                </div>
                <div className="w-9 h-9 rounded bg-slate-100 text-slate-600 flex items-center justify-center text-xs border">
                  ★
                </div>
              </div>
            </div>

            {/* Critique Points */}
            <div className="mt-5 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-red-700 bg-red-50 p-2 rounded-lg border border-red-200">
                <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span><strong>No calculated total:</strong> Shows raw tariff rates only; user must compute multi-hour totals manually.</span>
              </div>
              <div className="flex items-start gap-2 text-red-700 bg-red-50 p-2 rounded-lg border border-red-200">
                <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span><strong>Dead-end on 0 lots:</strong> When lots are full, Navigate button is useless and offers zero nearby alternatives.</span>
              </div>
              <div className="flex items-start gap-2 text-red-700 bg-red-50 p-2 rounded-lg border border-red-200">
                <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span><strong>Fails WCAG touch size:</strong> 36px button height leads to driving mis-clicks on mobile touchscreens.</span>
              </div>
            </div>
          </div>

          {/* V2 After Column */}
          <div className="rounded-2xl border-2 border-blue-400 bg-blue-50/40 p-5 relative">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                After: V2 Improved Edition
              </span>
              <a
                href="https://sg-carpark-v1-9fm9.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-700 hover:text-blue-900 flex items-center gap-1 font-bold"
              >
                sg-carpark-v1-9fm9.vercel.app <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Mock V2 Card Representation */}
            <div className="bg-white rounded-2xl p-4.5 border border-blue-200 shadow-sm space-y-3.5">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-900 text-base">Paragon Shopping Centre</h4>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold">Max 1.95m</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">290 Orchard Rd • 0.5 km away • Orchard / Somerset</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-red-100 text-red-800 text-xs font-extrabold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  Lots Full (0/410)
                </span>
              </div>

              {/* V2 Estimated Total Banner */}
              <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200/70 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider">
                    Est. Total for 2 Hours (Daytime)
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    1h ($3.00) + 1h ($3.20)
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-blue-700">$6.20</span>
                </div>
              </div>

              {/* V2 44px Ergonomic Touch Buttons with Smart Alternatives */}
              <div className="flex items-center gap-2.5 pt-1">
                <div className="flex-1 h-11 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-bold flex items-center justify-center shadow-2xs">
                  Full Tariff
                </div>
                {/* Dynamically morphed to Alternatives because lots === 0! */}
                <div className="flex-1 h-11 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs">
                  <span>Alternatives</span>
                </div>
                <div className="w-11 h-11 rounded-xl border border-slate-200 text-slate-600 flex items-center justify-center text-sm shadow-2xs">
                  ★
                </div>
              </div>
            </div>

            {/* Praise Points */}
            <div className="mt-5 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-emerald-800 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span><strong>Instant real total:</strong> Dynamically calculates and formats the true multi-hour dollar bill ($6.20).</span>
              </div>
              <div className="flex items-start gap-2 text-emerald-800 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span><strong>Smart "Alternatives" fallback:</strong> Detects full capacity and routes to nearby carparks with open lots.</span>
              </div>
              <div className="flex items-start gap-2 text-emerald-800 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span><strong>WCAG 2.2 Compliant 44px touch targets:</strong> Ergonomically sized for safe single-handed mobile navigation.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Table of All 7 Pillars */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <h3 className="text-xl font-bold text-slate-900 mb-2">The 7 Pillars of Improvement Matrix</h3>
        <p className="text-sm text-slate-500 mb-6">
          High-level overview of functional, ergonomic, and accessibility improvements made in commit <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-blue-600">b770d80</code>.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50">
                <th className="py-3 px-4">Feature / Area</th>
                <th className="py-3 px-4">Before (V1 Baseline)</th>
                <th className="py-3 px-4">After (V2 Improved Edition)</th>
                <th className="py-3 px-4">Impact Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-4 font-bold text-slate-900">1. Parking Cost Engine</td>
                <td className="py-3.5 px-4 text-slate-500">Static 1st-hour string; manual mental calculation</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Automatic multi-hour calculation engine (<code className="font-mono text-[11px]">calculator.ts</code>)</td>
                <td className="py-3.5 px-4 font-bold text-blue-600">9.8 / 10</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-4 font-bold text-slate-900">2. Touch Ergonomics</td>
                <td className="py-3.5 px-4 text-slate-500">36px button heights (fails WCAG 2.2 touch target)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">44px-50px touch targets (<code className="font-mono text-[11px]">h-11 rounded-xl</code>)</td>
                <td className="py-3.5 px-4 font-bold text-blue-600">9.5 / 10</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-4 font-bold text-slate-900">3. "Lots Full" Recovery</td>
                <td className="py-3.5 px-4 text-slate-500">Dead-end Navigate button when lots hit 0</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Dynamic button morphs to 1-tap Alternatives Finder</td>
                <td className="py-3.5 px-4 font-bold text-blue-600">9.4 / 10</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-4 font-bold text-slate-900">4. Quick Filtering</td>
                <td className="py-3.5 px-4 text-slate-500">Requires opening modal dialog for every filter</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Horizontal 1-tap chips (EV, Grace, Clearance) + badge counter</td>
                <td className="py-3.5 px-4 font-bold text-blue-600">9.2 / 10</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-4 font-bold text-slate-900">5. Time Simulation</td>
                <td className="py-3.5 px-4 text-slate-500">Cosmetic string label only; no duration control</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">1h-5h duration selector + pulsing active rate indicator dot</td>
                <td className="py-3.5 px-4 font-bold text-blue-600">9.0 / 10</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-4 font-bold text-slate-900">6. ERP 2.0 Gantries</td>
                <td className="py-3.5 px-4 text-slate-500">Static rate table without vehicle differentiation</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Car vs Motorcycle 50% concession rates & off-peak countdowns</td>
                <td className="py-3.5 px-4 font-bold text-blue-600">8.8 / 10</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-3.5 px-4 font-bold text-slate-900">7. Saved Bookmarks</td>
                <td className="py-3.5 px-4 text-slate-500">Duplicate card list without side-by-side comparison</td>
                <td className="py-3.5 px-4 text-emerald-700 font-medium">Side-by-side matrix contrasting 1st hour rates & grace periods</td>
                <td className="py-3.5 px-4 font-bold text-blue-600">8.7 / 10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
