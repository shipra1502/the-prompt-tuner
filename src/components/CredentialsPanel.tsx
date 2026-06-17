// Sub-component: Form managing credential tokens alongside sandboxing privacy disclosures
interface CredentialsPanelProps {
  inputKey: string;
  setInputKey: (val: string) => void;
  apiKey: string;
  showKey: boolean;
  setShowKey: (show: boolean) => void;
  onSave: () => void;
  onClear: () => void;
}

export function CredentialsPanel({
  inputKey,
  setInputKey,
  apiKey,
  showKey,
  setShowKey,
  onSave,
  onClear,
}: CredentialsPanelProps) {
  return (
    <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-lg relative overflow-hidden flex flex-col justify-between">
      <div className="absolute right-0 top-0 h-48 w-48 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none"></div>
      <div>
        <h2 className="text-md font-bold text-purple-600 uppercase tracking-widest mb-1.5">
          Connect Your Personal API Credentials
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          Enter your private OpenAI API Key to power the live transmutation and
          showdown mechanics. Your key is saved locally in your own browser
          cache.
        </p>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <input
            type={showKey ? "text" : "password"}
            placeholder="sk-..."
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            className="w-full px-3 py-2.5 pr-10 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition-all"
          />
          <button
            onClick={() => setShowKey(!showKey)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
          >
            {showKey ? "Hide" : "Show"}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onSave}
            disabled={!inputKey.trim()}
            className="px-5 py-2.5 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold rounded-xl shadow-md shadow-purple-500/10 hover:shadow-lg transition-all cursor-pointer disabled:opacity-40"
          >
            Save Key
          </button>
          {apiKey && (
            <button
              onClick={onClear}
              className="px-4 py-2.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 text-xs font-bold rounded-xl transition-all hover:cursor-pointer"
            >
              Remove Key
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
