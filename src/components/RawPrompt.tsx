// Sub-component: Primary input console with transmutation launcher triggers
interface RawPromptProps {
  basicPrompt: string;
  setBasicPrompt: (val: string) => void;
  isEnhancing: boolean;
  apiKey: string;
  onEnhance: () => void;
}

export function RawPrompt({
  basicPrompt,
  setBasicPrompt,
  isEnhancing,
  apiKey,
  onEnhance,
}: RawPromptProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
            1
          </span>
          <h3 className="font-extrabold text-slate-800">The User Prompt</h3>
        </div>
        <button
          onClick={() => setBasicPrompt("")}
          className="text-xs text-slate-400 hover:text-slate-600 transition-colors font-semibold hover:cursor-pointer"
        >
          Clear
        </button>
      </div>

      <div className="space-y-1">
        <label className="text-[12px] text-slate-400 font-bold uppercase tracking-wider">
          What do you want the AI to write?
        </label>
        <textarea
          className="w-full h-36 p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition-all resize-none text-sm leading-relaxed"
          placeholder="Type anything basic here... (e.g. write a cold email asking for a job)"
          value={basicPrompt}
          onChange={(e) => setBasicPrompt(e.target.value)}
        />
      </div>

      <button
        onClick={onEnhance}
        disabled={isEnhancing || !basicPrompt.trim() || !apiKey}
        className="w-full py-3.5 px-4 bg-linear-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:to-rose-400 text-white font-extrabold rounded-xl shadow-lg shadow-purple-500/10 hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:pointer-events-none hover:cursor-pointer"
      >
        {isEnhancing ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
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
            <span>Transmuting Prompt...</span>
          </>
        ) : (
          <>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span>
              {!apiKey ? "Enter API Key to Run" : "Enhance My Prompt"}
            </span>
          </>
        )}
      </button>
    </div>
  );
}
