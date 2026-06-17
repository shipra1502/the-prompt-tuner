// Sub-component: Structural checklists reflecting alignment rules
import { type AnalysisResult } from "../constants/presets";
interface ChecklistProps {
  analysis: AnalysisResult | null;
}

export function Checklists({ analysis }: ChecklistProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg space-y-4">
      <h4 className="font-extrabold text-slate-800 text-md tracking-wide">
        Pillars of an Engineered Prompt
      </h4>
      <ul className="space-y-3.5">
        <li className="flex items-start gap-3">
          <div
            className={`h-5 w-5 rounded-md flex items-center justify-center text-xs border ${analysis ? "bg-amber-500/10 border-amber-300 text-amber-600" : "border-slate-200 text-slate-400"}`}
          >
            ✓
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">
              Expert Persona (Role)
            </p>
            <p className="text-[11px] text-slate-500">
              Tells the AI exactly who it needs to simulate to write expertly.
            </p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div
            className={`h-5 w-5 rounded-md flex items-center justify-center text-xs border ${analysis ? "bg-blue-500/10 border-blue-300 text-blue-600" : "border-slate-200 text-slate-400"}`}
          >
            ✓
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">
              Deep Contextual Information
            </p>
            <p className="text-[11px] text-slate-500">
              Provides UAE local details, core target niches, and goal
              parameters.
            </p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div
            className={`h-5 w-5 rounded-md flex items-center justify-center text-xs border ${analysis ? "bg-purple-500/10 border-purple-300 text-purple-600" : "border-slate-200 text-slate-400"}`}
          >
            ✓
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">
              Guiding Constraints
            </p>
            <p className="text-[11px] text-slate-500">
              Forbids robotic buzzwords, limits length, and sets tone
              boundaries.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
