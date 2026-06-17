// Sub-component: Optimized output report dashboard
import { type AnalysisResult } from "../constants/presets";
interface UpdatedPromptProps {
  analysis: AnalysisResult;
  optimizedPrompt: string;
  copiedType: string | null;
  onCopy: (text: string, type: string) => void;
}

export function UpdatedPrompt({
  analysis,
  optimizedPrompt,
  copiedType,
  onCopy,
}: UpdatedPromptProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-linear-to-r from-purple-50 to-indigo-50/50 p-6 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="h-6 w-6 rounded-lg bg-white border border-purple-200 flex items-center justify-center text-xs font-bold text-purple-600">
            2
          </span>
          <h3 className="font-extrabold text-slate-800">The Alchemy Report</h3>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="block text-[9px] uppercase font-bold text-slate-400 tracking-wider">
              Prompt Quality Score
            </span>
            <div className="flex items-center gap-1.5 justify-end">
              <span className="text-xs text-slate-400 line-through">
                40/100
              </span>
              <span className="text-sm font-black text-purple-600">
                ➔ {analysis.score}/100
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Breakdown Badges */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-100">
        <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 space-y-1">
          <span className="text-[9px] uppercase tracking-wider font-extrabold text-amber-700">
            👤 Persona Added
          </span>
          <p className="text-xs font-bold text-amber-950 leading-snug">
            {analysis.roleAdded}
          </p>
        </div>
        <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-200 space-y-1">
          <span className="text-[9px] uppercase tracking-wider font-extrabold text-blue-700">
            📌 Context Built
          </span>
          <p className="text-xs font-bold text-blue-950 leading-snug">
            {analysis.contextAdded}
          </p>
        </div>
        <div className="p-3 bg-purple-50/80 rounded-xl border border-purple-200 space-y-1">
          <span className="text-[9px] uppercase tracking-wider font-extrabold text-purple-700">
            🛡️ Bounds Defined
          </span>
          <p className="text-xs font-bold text-purple-950 leading-snug">
            {analysis.constraintsAdded}
          </p>
        </div>
      </div>

      {/* Educational Tips */}
      <div className="p-4 bg-teal-50 px-6 border-b border-slate-100 flex items-start gap-2.5 text-teal-950">
        <span className="text-lg">💡</span>
        <div>
          <span className="text-[9px] uppercase font-bold text-teal-700 tracking-wide block">
            Alchemist's Tip:
          </span>
          <p className="text-slate-700 text-xs italic font-medium">
            {analysis.educationalTip}
          </p>
        </div>
      </div>

      {/* Template Copy Console */}
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">
            Constructed Master Prompt
          </span>
          <button
            onClick={() => onCopy(optimizedPrompt, "optimized")}
            className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 transition-colors flex items-center gap-1.5"
          >
            {copiedType === "optimized" ? (
              <>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span>Copied!</span>
              </>
            ) : (
              <span>Copy Master Prompt</span>
            )}
          </button>
        </div>
        <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 leading-relaxed whitespace-pre-wrap max-h-72 overflow-y-auto shadow-inner">
          {optimizedPrompt}
        </div>
      </div>
    </div>
  );
}
