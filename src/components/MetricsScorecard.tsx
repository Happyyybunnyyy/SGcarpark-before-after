import React from 'react';
import { BENCHMARK_METRICS } from '../data/diffData';
import { 
  BarChart3, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  Check, 
  AlertTriangle 
} from 'lucide-react';

export const MetricsScorecard: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      {/* Overview Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-3 border border-emerald-200">
            <Award className="w-3.5 h-3.5" />
            Quantitative & Heuristic UX Audit
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Benchmark Metrics & UX Heuristics Scorecard
          </h2>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            Measuring the empirical user impact of the architectural rewrite. Comparing accessibility compliance, cognitive friction, task completion speed, and Nielsen Norman Group heuristic violations.
          </p>
        </div>
      </div>

      {/* Quantitative Benchmark Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {BENCHMARK_METRICS.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                <span>Metric #{idx + 1}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono">
                  {item.delta}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base leading-snug">{item.metric}</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.note}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400 font-semibold block text-[11px]">Before (V1)</span>
                <span className="font-bold text-slate-700 mt-0.5 block">{item.beforeVal}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200">
                <span className="text-blue-600 font-semibold block text-[11px]">After (V2)</span>
                <span className="font-bold text-blue-900 mt-0.5 block">{item.afterVal}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nielsen Norman Group UX Heuristic Audit */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Nielsen Norman Group (NN/g) UX Heuristics Audit
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Analyzing how V2 eliminates classic usability violations that plagued the V1 baseline release.
          </p>
        </div>

        <div className="space-y-4">
          {/* Heuristic 1 */}
          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs">
                  #1
                </span>
                Visibility of System Status
              </h4>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                Resolved in V2
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
              <div className="text-slate-600">
                <strong className="text-red-700">V1 Flaw: </strong>
                Users looking at the 3-tiered tariff table had no visual cue of which rate applied right now.
              </div>
              <div className="text-slate-700">
                <strong className="text-emerald-700">V2 Solution: </strong>
                Added pulsing primary indicator dot directly beside the active tariff period row and dynamic live lot sync badges.
              </div>
            </div>
          </div>

          {/* Heuristic 3 */}
          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs">
                  #3
                </span>
                User Control & Freedom (Error Recovery)
              </h4>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                Resolved in V2
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
              <div className="text-slate-600">
                <strong className="text-red-700">V1 Flaw: </strong>
                Zero alternative routing when lots hit 0; modals lacked Escape key handling, trapping keyboard users.
              </div>
              <div className="text-slate-700">
                <strong className="text-emerald-700">V2 Solution: </strong>
                Smart button morphs to "Alternatives" querying open lots in the same zone; Escape listeners added to all 7 modals.
              </div>
            </div>
          </div>

          {/* Heuristic 4 */}
          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs">
                  #4
                </span>
                Consistency & Standards (WCAG 2.2 Target Size)
              </h4>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                Resolved in V2
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
              <div className="text-slate-600">
                <strong className="text-red-700">V1 Flaw: </strong>
                Buttons were 36px (h-9), in direct violation of WCAG 2.2 Level AA guidelines (44x44px min).
              </div>
              <div className="text-slate-700">
                <strong className="text-emerald-700">V2 Solution: </strong>
                All action targets standardized to 44px-50px (h-11 rounded-xl) with clear focus rings.
              </div>
            </div>
          </div>

          {/* Heuristic 6 */}
          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs">
                  #6
                </span>
                Recognition Rather Than Recall
              </h4>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                Resolved in V2
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
              <div className="text-slate-600">
                <strong className="text-red-700">V1 Flaw: </strong>
                Users had to remember prior rates and manually calculate 15-minute incremental intervals in their head.
              </div>
              <div className="text-slate-700">
                <strong className="text-emerald-700">V2 Solution: </strong>
                Total estimated parking fee is calculated and clearly labeled with mathematical breakdown on every card.
              </div>
            </div>
          </div>

          {/* Heuristic 7 */}
          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs">
                  #7
                </span>
                Flexibility & Efficiency of Use
              </h4>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                Resolved in V2
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
              <div className="text-slate-600">
                <strong className="text-red-700">V1 Flaw: </strong>
                3 clicks required just to toggle EV chargers or grace periods; sort required deep dropdowns.
              </div>
              <div className="text-slate-700">
                <strong className="text-emerald-700">V2 Solution: </strong>
                Exposed 1-tap horizontal quick filter chips on the subheader and 1-tap sort cycling on the telemetry banner.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
