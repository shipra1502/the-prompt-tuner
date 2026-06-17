// Strict Type Definitions for compiler validation
interface Preset {
  id: string;
  title: string;
  basic: string;
  category: string;
}

interface AnalysisResult {
  optimizedPrompt: string;
  score: number;
  roleAdded: string;
  contextAdded: string;
  constraintsAdded: string;
  educationalTip: string;
}

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface OpenAIPayload {
  model: string;
  messages: ChatMessage[];
  temperature: number;
  response_format?: { type: "json_object" };
}

// Built-in presets to showcase immediate utility (tailored for Dubai interview context with distinct vibrant colors)
const PRESETS: Preset[] = [
  {
    id: "real-estate",
    title: "Dubai Marina Property Listing",
    basic:
      "write an ad for a 2 bedroom apartment in Dubai Marina with marina views and pool.",
    category: "Real Estate",
  },
  {
    id: "interview",
    title: "Senior Developer Job Follow-up",
    basic:
      "write an email to follow up on my interview for senior developer role.",
    category: "Tech Careers",
  },
  {
    id: "marketing",
    title: "Local Coffee Shop Instagram Hook",
    basic:
      "make a post for a coffee shop in Jumeirah selling specialty cold brew.",
    category: "Marketing",
  },
];

export type { Preset, AnalysisResult, ChatMessage, OpenAIPayload };
export { PRESETS };
