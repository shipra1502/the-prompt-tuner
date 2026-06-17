// Sub-component: Proof indicator that data security is auditable local-only
export function LocalPrivacyShield() {
  return (
    <div className="lg:col-span-5 bg-linear-to-tr from-purple-55 via-pink-50/30 to-blue-50/50 p-6 rounded-2xl border border-purple-100 shadow-lg relative flex flex-col justify-between">
      <div className="flex items-start gap-3.5">
        <div className="h-10 w-10 shrink-0 rounded-xl bg-white border border-purple-200 shadow-xs flex items-center justify-center text-lg">
          🛡️
        </div>
        <div className="space-y-1">
          <h3 className="text-md font-bold text-purple-700 uppercase tracking-widest">
            Local Privacy Guarantee
          </h3>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Your safety is built directly into the codebase. Because this
            application runs entirely client-side inside your local browser
            sandbox:
          </p>
        </div>
      </div>

      <div className="my-4 space-y-2 border-y border-purple-100 py-3 text-[10px] text-slate-500 leading-relaxed">
        <p className="flex items-start gap-1.5">
          <span className="text-purple-600 font-bold">✔</span>
          <span>
            <strong>No Telemetry or Servers:</strong> There is no back-end
            database, telemetry script, or cloud pipeline connected to capture
            keys.
          </span>
        </p>
        <p className="flex items-start gap-1.5">
          <span className="text-purple-600 font-bold">✔</span>
          <span>
            <strong>Direct Call Channel:</strong> The API requests are fired
            strictly and directly to OpenAI's official endpoint:{" "}
            <code>api.openai.com</code>.
          </span>
        </p>
        <p className="flex items-start gap-1.5">
          <span className="text-purple-600 font-bold">✔</span>
          <span>
            <strong>Auditable:</strong> Developers can open the browser's{" "}
            <strong>Network Tab</strong> at any time to verify that zero
            metadata leaks outward.
          </span>
        </p>
      </div>

      <div className="flex items-center justify-between text-[9px] font-mono text-purple-600/80">
        <span>STORAGE: LocalStorage</span>
        <span className="bg-white px-2 py-0.5 rounded-md border border-purple-200 shadow-2xs font-bold">
          SANDBOX SECURE
        </span>
      </div>
    </div>
  );
}
