import { useEffect, useState } from "react";
import {
  type AnalysisResult,
  type ChatMessage,
  type OpenAIPayload,
  type Preset,
  PRESETS,
} from "./constants/presets";
import { Header } from "./components/Header";
import { HelpGuide } from "./components/HelpGuide";
import { CredentialsPanel } from "./components/CredentialsPanel";
import { LocalPrivacyShield } from "./components/LocalPrivacyShield";
import { PresetSelector } from "./components/PresetSelector";
import { RawPrompt } from "./components/RawPrompt";
import { Checklists } from "./components/Checklists";
import { UpdatedPrompt } from "./components/UpdatedPrompt";
import { ShowDown } from "./components/ShowDown";

// Main Core Orchestrator Page Container
export default function App() {
  const [basicPrompt, setBasicPrompt] = useState<string>(PRESETS[0].basic);
  const [inputKey, setInputKey] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>("");
  const [showKey, setShowKey] = useState<boolean>(false);
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const [isEnhancing, setIsEnhancing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Results State
  const [optimizedPrompt, setOptimizedPrompt] = useState<string>("");
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  // Showdown Execution State
  const [isExecutingShowdown, setIsExecutingShowdown] =
    useState<boolean>(false);
  const [basicOutput, setBasicOutput] = useState<string>("");
  const [optimizedOutput, setOptimizedOutput] = useState<string>("");
  const [showdownRun, setShowdownRun] = useState<boolean>(false);

  // Copy Feedback UI Helper
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Sync saved localStorage API keys on start
  useEffect(() => {
    const savedKey = localStorage.getItem("prompt_alchemist_openai_key");
    if (savedKey) {
      setApiKey(savedKey);
      setInputKey(savedKey);
    }
  }, []);

  const handleSaveKey = () => {
    const trimmed = inputKey.trim();
    if (!trimmed.startsWith("sk-")) {
      setError(
        "Invalid API key format. OpenAI keys typically begin with 'sk-'.",
      );
      return;
    }
    setApiKey(trimmed);
    localStorage.setItem("prompt_alchemist_openai_key", trimmed);
    setError(null);
  };

  const handleClearKey = () => {
    setApiKey("");
    setInputKey("");
    localStorage.removeItem("prompt_alchemist_openai_key");
    setError(null);
  };

  const handleCopy = (text: string, type: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
    document.body.removeChild(textArea);
  };

  // Handles network fetch pipelines directed to OpenAI
  const fetchOpenAI = async (
    messages: ChatMessage[],
    responseFormat: { type: "json_object" } | null = null,
  ): Promise<string> => {
    if (!apiKey) {
      throw new Error(
        "API Key missing. Please input your OpenAI key and click 'Save Key' above.",
      );
    }

    const payload: OpenAIPayload = {
      model: "gpt-4o-mini",
      messages: messages,
      temperature: 0.7,
    };

    if (responseFormat) {
      payload.response_format = responseFormat;
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage =
        errorData.error?.message || `HTTP error ${response.status}`;
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  };

  const handleEnhance = async (promptToEnhance: string = basicPrompt) => {
    if (!promptToEnhance.trim()) return;
    setIsEnhancing(true);
    setError(null);
    setShowdownRun(false);
    setBasicOutput("");
    setOptimizedOutput("");

    const systemPrompt = `You are an elite Prompt Engineer. Your task is to analyze a weak, basic prompt written by a non-technical user and upgrade it into a professional, highly-engineered "Master Prompt" that incorporates best engineering standards.

Your response must be a strict JSON object. Do not include any markdown format tags like \`\`\`json. The output must be valid parsable JSON with these exact keys:
{
  "optimizedPrompt": "The complete, beautifully structured, highly engineered prompt. It should use formatting like [ROLE], [CONTEXT], [CONSTRAINTS], and [OUTPUT FORMAT] inside to show structured thinking. Include local context (e.g., Dubai nuances, specific target audiences) if applicable.",
  "score": 45, // A number from 10 to 100 representing the strength of the original user prompt
  "roleAdded": "The persona/role you gave the AI to make it expert",
  "contextAdded": "What background details you added to provide business value",
  "constraintsAdded": "What negative bounds or styling rules you specified to prevent robotic AI answers",
  "educationalTip": "A friendly, simple 1-sentence tip teaching the user why this addition makes the AI perform so much better."
}`;

    const messages: ChatMessage[] = [
      { role: "system", content: systemPrompt },
      {
        role: "user",
        content: `Optimize this basic prompt: "${promptToEnhance}"`,
      },
    ];

    try {
      const rawResponse = await fetchOpenAI(messages, { type: "json_object" });
      const parsedData: AnalysisResult = JSON.parse(rawResponse);
      setOptimizedPrompt(parsedData.optimizedPrompt);
      setAnalysis(parsedData);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Unable to optimize prompt. Please check your credentials and connection.";
      setError(errorMessage);
      console.error(err);
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleExecuteShowdown = async () => {
    if (!basicPrompt || !optimizedPrompt) return;
    setIsExecutingShowdown(true);
    setShowdownRun(true);
    setError(null);

    try {
      // Execute Basic Prompt
      const bOutput = await fetchOpenAI([
        { role: "user", content: basicPrompt },
      ]);
      setBasicOutput(bOutput);

      // Execute Optimized Prompt
      const oOutput = await fetchOpenAI([
        { role: "user", content: optimizedPrompt },
      ]);
      setOptimizedOutput(oOutput);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Showdown execution failed.";
      setError(`Showdown execution failed: ${errorMessage}`);
      console.error(err);
    } finally {
      setIsExecutingShowdown(false);
    }
  };

  const loadPreset = (preset: Preset) => {
    setBasicPrompt(preset.basic);
    setOptimizedPrompt("");
    setAnalysis(null);
    setShowdownRun(false);
    setBasicOutput("");
    setOptimizedOutput("");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-purple-100 selection:text-purple-900 transition-colors duration-300">
      {/* Header Container */}
      <Header apiKey={apiKey} showHelp={showHelp} setShowHelp={setShowHelp} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Onboarding Help Overlay Guide */}
        {showHelp && <HelpGuide onClose={() => setShowHelp(false)} />}

        {/* Credentials and Privacy Cards Row */}
        <section className="mb-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <CredentialsPanel
            inputKey={inputKey}
            setInputKey={setInputKey}
            apiKey={apiKey}
            showKey={showKey}
            setShowKey={setShowKey}
            onSave={handleSaveKey}
            onClear={handleClearKey}
          />
          <LocalPrivacyShield />
        </section>

        {/* Dubai Location Preset Card Selector */}
        <PresetSelector basicPrompt={basicPrompt} onPresetSelect={loadPreset} />

        {/* Workbench Primary Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Input controls */}
          <div className="lg:col-span-5 space-y-6">
            <RawPrompt
              basicPrompt={basicPrompt}
              setBasicPrompt={setBasicPrompt}
              isEnhancing={isEnhancing}
              apiKey={apiKey}
              onEnhance={() => handleEnhance()}
            />
            <Checklists analysis={analysis} />
          </div>

          {/* Column 2: Dashboard Results Terminal */}
          <div className="lg:col-span-7 space-y-6">
            {error && (
              <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-sm font-semibold">
                ⚠️ Error: {error}
              </div>
            )}

            {!analysis && !isEnhancing && (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-lg flex flex-col items-center justify-center space-y-4">
                <div className="h-16 w-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 mb-2">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-700 text-lg">
                    No Alchemy Performed Yet
                  </h3>
                  <p className="text-slate-400 text-xs max-w-sm mx-auto mt-1.5">
                    Enter your basic prompt, save your OpenAI API key, and click
                    "Enhance My Prompt" to transfigure your inputs.
                  </p>
                </div>
              </div>
            )}

            {isEnhancing && (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-lg flex flex-col items-center justify-center space-y-4 animate-pulse">
                <div className="h-12 w-12 rounded-full border-2 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                <p className="text-slate-500 text-sm font-medium">
                  Re-engineering instructions and compiling structure via
                  GPT-4o-mini...
                </p>
              </div>
            )}

            {analysis && !isEnhancing && (
              <div className="space-y-6">
                <UpdatedPrompt
                  analysis={analysis}
                  optimizedPrompt={optimizedPrompt}
                  copiedType={copiedType}
                  onCopy={handleCopy}
                />

                <ShowDown
                  showdownRun={showdownRun}
                  isExecutingShowdown={isExecutingShowdown}
                  basicOutput={basicOutput}
                  optimizedOutput={optimizedOutput}
                  onRunShowdown={handleExecuteShowdown}
                />
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white mt-16 py-8 text-center shadow-inner">
        <p className="text-xs text-slate-400 font-semibold">
          Crafted as a senior-level portfolio presentation project for Dubai
          Engineering and Product Teams.
        </p>
      </footer>
    </div>
  );
}
