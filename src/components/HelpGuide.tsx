// Sub-component: Step-by-Step API Key onboarding and pricing tutorial
interface HelpGuideProps {
  onClose: () => void;
}

export function HelpGuide({ onClose }: HelpGuideProps) {
  return (
    <section className="mb-8 p-6 bg-white border border-purple-200 rounded-2xl shadow-xl animate-fade-in relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-semibold transition-colors"
      >
        ✕ Close
      </button>
      <h3 className="text-sm font-bold text-purple-700 uppercase tracking-widest mb-3">
        How to Get an OpenAI API Key
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
          <span className="text-lg block mb-1">🔑 Step 1</span>
          <p>
            Go to{" "}
            <a
              href="https://platform.openai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-bold hover:underline"
            >
              platform.openai.com
            </a>
            , create or sign in to your developer profile, and click on{" "}
            <strong>API Keys</strong> in the left sidebar menu.
          </p>
        </div>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
          <span className="text-lg block mb-1">💳 Step 2</span>
          <p>
            Navigate to <strong>Billing</strong> under settings, click{" "}
            <strong>Add Credit</strong>, and top up with at least $5. High
            performance queries cost less than $0.001 each using{" "}
            <code>gpt-4o-mini</code>!
          </p>
        </div>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
          <span className="text-lg block mb-1">🛡️ Step 3</span>
          <p>
            Click <strong>Create new secret key</strong>, name it (e.g.
            "Alchemist"), copy it, and paste it into the credentials input
            below. Your key is kept secure inside your browser.
          </p>
        </div>
      </div>
    </section>
  );
}
