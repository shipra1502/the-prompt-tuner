// Sub-component: Sandbox execution playground conducting live checks
interface ShowDownProps {
  showdownRun: boolean;
  isExecutingShowdown: boolean;
  basicOutput: string;
  optimizedOutput: string;
  onRunShowdown: () => void;
}

export function ShowDown({
  showdownRun,
  isExecutingShowdown,
  basicOutput,
  optimizedOutput,
  onRunShowdown,
}: ShowDownProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="h-6 w-6 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
            3
          </span>
          <div>
            <h3 className="font-extrabold text-slate-800 text-sm">
              Compare Results (The Showdown)
            </h3>
            <p className="text-[11px] text-slate-500">
              Run both prompts side-by-side using live GPT models to see the
              leap in output quality.
            </p>
          </div>
        </div>
        <button
          onClick={onRunShowdown}
          disabled={isExecutingShowdown}
          className="px-5 py-2.5 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl text-xs font-extrabold shadow-md shadow-indigo-500/10 transition-all flex items-center gap-2"
        >
          {isExecutingShowdown ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Executing Showdown...</span>
            </>
          ) : (
            <>
              <span>⚡</span>
              <span>Run Showdown Experiment</span>
            </>
          )}
        </button>
      </div>

      {showdownRun && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          {/* Basic Output Box */}
          <div className="p-5 bg-rose-50/50 border border-rose-100 rounded-xl space-y-2.5">
            <span className="text-[9px] uppercase font-black text-rose-600 tracking-wider block bg-rose-50 px-2 py-0.5 rounded-sm border border-rose-100 w-max">
              Sloppy Output
            </span>
            <div className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap max-h-56 overflow-y-auto pr-1">
              {isExecutingShowdown ? "Executing query..." : basicOutput}
            </div>
          </div>

          {/* Optimized Output Box */}
          <div className="p-5 bg-purple-50/50 border border-purple-100 rounded-xl space-y-2.5 shadow-inner">
            <span className="text-[9px] uppercase font-black text-purple-600 tracking-wider block bg-purple-50 px-2 py-0.5 rounded-sm border border-purple-100 w-max">
              Alchemist's Optimized Output
            </span>
            <div className="text-xs text-slate-800 font-semibold leading-relaxed whitespace-pre-wrap max-h-56 overflow-y-auto pr-1">
              {isExecutingShowdown ? "Optimizing query..." : optimizedOutput}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
