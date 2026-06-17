🧪 The Prompt Tuner

An ultra-modern, fully decoupled React & TypeScript developer workbench powered by the OpenAI API (gpt-4o-mini) that analyzes, scores, and transforms basic ("sloppy") user inputs into masterfully structured, professional-grade AI prompts. It features a side-by-side live execution comparator, interactive prompt pillar checklists, and a local-only, privacy-first credential design.

Designed with a high-contrast, colorful light-mode aesthetic, this project is built specifically to showcase production-ready frontend architecture, strict TypeScript compiler compliance, modular component decoupling, and clean AI state management for tech interview evaluation.

🚀 Key Architectural Features

1. Modular & Scalable Component Architecture

The application is strictly decoupled into highly focused, single-responsibility functional sub-components orchestrated by a central state machine in App.tsx. All props are protected by strict, explicit type definitions, completely avoiding implicit any fallbacks.

Benefits Shown: Greatly improved testability, clear separation of concerns, and clean developer collaboration.

2. Modern CSS Compiler Engine (Tailwind CSS v4)

Styled entirely using Tailwind CSS v4, utilizing its CSS-first compilation architecture and native Vite plugin (@tailwindcss/vite).

Benefits Shown: Eliminates legacy PostCSS and Tailwind configuration files. Demonstrates early adoption of modern build-tool optimization, leading to faster hot module reloading and microscopic bundle sizes.

3. API Key Trust & Safety Shield

An visual, local-only credential panel that secures private keys inside the user's browser localStorage sandbox environment. It includes a dedicated Privacy Shield with step-by-step developer-tool instructions for non-technical users to verify that their keys never leave their browser.

Benefits Shown: Security-first product design, compliance awareness, and mitigation of the risk of accidental API key exposure on public Git repositories.

4. Interactive Checklist & Real-Time Prompt Grading

Instantly analyzes raw prompts against professional standards, providing a visual breakdown, an educational prompt engineering tip, and an interactive 100-point quality score.

Benefits Shown: Interactive UI state flow, real-time dynamic rendering based on upstream asynchronous payloads, and clean UX feedback loops.

5. Parallel "Showdown" Live Sandbox

Runs both the basic ("sloppy") and engineered ("Tuner") prompts simultaneously inside the OpenAI API so users can witness the immediate quality leap in generated outputs in a side-by-side terminal interface.

Benefits Shown: Concurrency safety, handling multiple parallel asynchronous network requests cleanly, and defensive state management under load.

🛠️ Tech Stack & Tooling

React 18 & Vite - Rapid, hot-reloading compilation and modern SPA architecture.

TypeScript - Strict compiler configurations, typecasted document helpers, and explicit interface validation.

Tailwind CSS v4 - CSS-first import directives, modern color palettes, and fluid grid layouts.

OpenAI Chat Completions API - Direct client-side integration utilizing the cost-efficient gpt-4o-mini engine.

📂 Repository File Structure

This project follows strict separation-of-concerns principles. Configuration is isolated from static templates, types are globally centralized, and UI components are strictly modularized.

src/
├── components/
│ ├── Header.tsx # Navigation, key indicators, & active API status
│ ├── HelpGuide.tsx # Collapsible step-by-step OpenAI API onboarding guide
│ ├── CredentialsPanel.tsx # Secure key input UI with explicit localStorage commit actions
│ ├── LocalPrivacyShield.tsx # Security visual badge with verification instructions
│ ├── PresetSelector.tsx # Dubai business template triggers (Real Estate, Careers, Marketing)
│ ├── RawPrompt.tsx # Controlled textarea for basic user input with trigger action
│ ├── Checklist.tsx # Checklist showing active prompt engineering pillars (Role, Context, Bounds)
│ ├── OptimizedPrompt.tsx # Structured breakdown showing grades, personas, and copy mechanics
│ └── Showdown.tsx # Parallel comparative execution terminal comparing AI outputs
├── constants/
│ └── presets.ts # Globally shared Type interfaces & static Dubai templates
├── App.tsx # Root orchestrating state-machine & API routing engine
├── index.css # Tailwind v4 CSS-first entry directive
└── main.tsx # Standard React DOM mounting entry point

⚡ Performance & Optimization Showcase

To prove senior-level competencies during technical screenings, the codebase implements several production-grade optimization strategies:

1. Grouped Module Exports

To optimize compile-time performance and prevent type-pollution, all TypeScript interfaces and static constants in src/constants/presets.ts are declared as internal module definitions and exported collectively using a Grouped Export Block with modern export type declarations. This allows the compiler to perform clean tree-shaking and strip types out during production build optimization.

2. Sandbox-Resilient Copy Mechanics

Modern asynchronous navigator.clipboard APIs are frequently blocked inside iframes (such as sandboxed code viewers or recruiter review portals). The copy system utilizes a robust Progressive Enhancement Fallback:

It attempts to run the secure modern navigator.clipboard API first.

If blocked or running in an insecure context, it falls back to a typecast (document as any).execCommand('copy') wrapper that keeps the compiler clean and works universally.

Includes layout-preservation stylings on the temporary copying node to prevent layout shifting.

3. Asynchronous Error Resilience

All fetch routines are wrapped in robust, typecasted try-catch layers (err instanceof Error) that prevent runtime application crashes if the user inputs an invalid API key, reaches rate limits, or encounters network drops.

⚙️ Local Development Setup

To run this project locally, execute the following commands:

1. Clone and Navigate

git clone https://github.com/YOUR_GITHUB_USERNAME/prompt-tuner.git
cd prompt-tuner

2. Install Dependencies

npm install

3. Run Development Server

npm run dev

Open http://localhost:5173 in your browser to inspect the application locally.

🛡️ Trust & Local-Only API Security

This application prioritizes client-side security. When entering a personal OpenAI API Key:

Local-Only Sandboxing: The key is kept entirely in your browser's private localStorage environment (prompt_tuner_openai_key). It is never uploaded, tracked, or sent to any server other than the official OpenAI endpoint.

Direct Connection: API requests are routed straight to https://api.openai.com via native browser fetch.

Audit Readiness: Open your browser's Developer Tools (Network Tab) to verify that 100% of outgoing requests are routed directly and exclusively to OpenAI.
