import { type Preset, PRESETS } from "../constants/presets";

interface PresetSelectorProps {
  basicPrompt: string;
  onPresetSelect: (p: Preset) => void;
}

// Named exports allow robust auto-imports and isolation testing
export function PresetSelector({
  basicPrompt,
  onPresetSelect,
}: PresetSelectorProps) {
  return (
    <section className="mb-8 animate-fade-in">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-md font-extrabold text-slate-500 mr-2 font-mono uppercase tracking-wider">
            UAE Industry Presets:
          </span>

          <button
            onClick={() => onPresetSelect(PRESETS[0])}
            className={`px-3 py-1.5 rounded-lg text-md font-bold border transition-all cursor-pointer ${
              basicPrompt === PRESETS[0].basic
                ? "bg-amber-500/10 border-amber-300 text-amber-700 shadow-sm"
                : "bg-slate-50 border-slate-200 hover:border-amber-200 text-slate-600"
            }`}
          >
            🏢 {PRESETS[0].title}
          </button>

          <button
            onClick={() => onPresetSelect(PRESETS[1])}
            className={`px-3 py-1.5 rounded-lg text-md font-bold border transition-all cursor-pointer ${
              basicPrompt === PRESETS[1].basic
                ? "bg-purple-500/10 border-purple-300 text-purple-700 shadow-sm"
                : "bg-slate-50 border-slate-200 hover:border-purple-200 text-slate-600"
            }`}
          >
            💼 {PRESETS[1].title}
          </button>

          <button
            onClick={() => onPresetSelect(PRESETS[2])}
            className={`px-3 py-1.5 rounded-lg text-md font-bold border transition-all cursor-pointer ${
              basicPrompt === PRESETS[2].basic
                ? "bg-rose-500/10 border-rose-300 text-rose-700 shadow-sm"
                : "bg-slate-50 border-slate-200 hover:border-rose-200 text-slate-600"
            }`}
          >
            ☕ {PRESETS[2].title}
          </button>
        </div>
      </div>
    </section>
  );
}
