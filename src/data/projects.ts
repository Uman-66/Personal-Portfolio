export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "ML" | "Full-stack";
  outcome: string;
  bullets: string[];
  tags: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "livora-ai",
    title: "Livora AI",
    subtitle: "Liver Health Screening Platform",
    category: "ML",
    outcome: "A modular backend for ultrasound triage and safety-gated clinical assistance.",
    bullets: [
      "Built a modular Flask/PostgreSQL backend integrating a MobileNetV2 CNN, achieving ~97% validation accuracy for ultrasound triage.",
      "Programmed deterministic clinical calculators (FIB-4, APRI) to eliminate LLM hallucinations, ensuring clinical-grade accuracy.",
      "Engineered a safety-gated chatbot integrating Fireworks AI and Groq LLMs that automatically routes emergency red-flag phrases.",
    ],
    tags: ["Flask", "PostgreSQL", "MobileNetV2", "Clinical AI"],
    links: [
      { label: "GitHub", href: "https://github.com/Uman-66/Livora-Ai" },
      { label: "Submission", href: "https://lablab.ai/ai-hackathons/amd-developer-hackathon-act-ii/error-handlers/livora-ai" },
    ],
  },
  {
    slug: "the-cleaning-negotiator",
    title: "The Cleaning Negotiator",
    subtitle: "Multi-Agent Autonomous System",
    category: "Full-stack",
    outcome: "A full-stack multi-agent platform with deterministic auditing for agent safety.",
    bullets: [
      "Architected a modular full-stack multi-agent platform (Next.js, FastAPI, Supabase) integrating GPT-4o Vision and ElevenLabs.",
      "Designed a deterministic auditing engine to analyze agent safety, detecting pricing inconsistencies and manipulation attempts.",
    ],
    tags: ["Next.js", "FastAPI", "Supabase", "Multi-agent"],
    links: [{ label: "GitHub", href: "https://github.com/Uman-66/Negotiaoter" }],
  },
  {
    slug: "leafsense-ai",
    title: "LeafSense AI",
    subtitle: "Reproducible Deep Learning Plant Agent",
    category: "ML",
    outcome: "A reproducible plant-disease deep learning pipeline using transfer learning.",
    bullets: [
      "Recreated the classic MobileNetV2 architecture from the original research paper utilizing transfer learning.",
      "Built a fully reproducible MLOps pipeline using Weights & Biases for experiment tracking, achieving 96.66% validation accuracy.",
    ],
    tags: ["MobileNetV2", "Transfer learning", "MLOps", "Weights & Biases"],
    links: [
      { label: "GitHub", href: "https://github.com/Uman-66/Plant-Disease-Detector" },
      { label: "Live demo", href: "https://plant-disease-detector-rumman.streamlit.app/" },
    ],
  },
];
