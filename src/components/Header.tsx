// Sub-component: Header Navigation & Network Connection status indicator
interface HeaderProps {
  apiKey: string;
  showHelp: boolean;
  setShowHelp: (show: boolean) => void;
}

export function Header({ apiKey, showHelp, setShowHelp }: HeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-linear-to-tr from-purple-500 via-pink-500 to-rose-400 rounded-xl flex items-center justify-center shadow-md shadow-purple-500/10">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight bg-linear-to-r from-purple-600 via-pink-600 to-rose-500 bg-clip-text text-transparent">
              THE PROMPT TUNER
            </h1>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              AI Prompts Optimizer | Powered by OpenAI API
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowHelp(!showHelp)}
            className="text-xs font-bold text-slate-600 hover:text-purple-600 hover:underline transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>❓ Help & API Guide</span>
          </button>
          <div className="flex items-center gap-2 text-xs bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200">
            <span
              className={`h-2.5 w-2.5 rounded-full ${apiKey ? "bg-emerald-500 animate-ping" : "bg-rose-500 animate-pulse"}`}
            ></span>
            <span className="text-slate-600 font-semibold">
              {apiKey ? "Key Connected" : "No Key Entered"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
