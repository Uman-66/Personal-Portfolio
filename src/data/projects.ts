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
    title: "The Negotiator",
    subtitle: "Multi-Agent Autonomous Voice System",
    category: "Full-stack",
    outcome: "Autonomous voice agents that call, compare, and negotiate service quotes.",
    bullets: [
      "Architected a modular full-stack multi-agent platform using Next.js, FastAPI, and Supabase, integrating GPT-4o Vision and ElevenLabs conversational agents.",
      "Designed a deterministic red-flag auditing engine to detect pricing inconsistencies, uncapped hourly rates, and non-itemized quotes.",
    ],
    tags: ["Next.js", "FastAPI", "Supabase", "Voice AI"],
    links: [
      { label: "GitHub", href: "https://github.com/Uman-66/Negotiaoter" },
      { label: "Certificate", href: "https://drive.google.com/file/d/1vALEbXf_j3PuVhmLPX2IAS3d5nDzcj0i/view?usp=sharing" },
    ],
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
  {
    slug: "robust-multimodal-learning",
    title: "Robust Multimodal Learning",
    subtitle: "Neurological Disease Prediction Under Missing Modalities",
    category: "ML",
    outcome: "A multimodal deep learning framework for cognitive impairment classification using 3D MRI and clinical markers.",
    bullets: [
      "Implemented a multimodal framework combining 3D structural brain MRI volumes with tabular clinical and demographic markers.",
      "Studied missing-modality robustness, target-proxy leakage, demographic confounds, and clinical AI validity.",
      "Used late fusion with modality masking to keep the model functional when an imaging scan or clinical survey is unavailable.",
    ],
    tags: ["PyTorch", "3D CNN", "MRI", "Multimodal learning"],
    links: [
      { label: "GitHub", href: "https://github.com/Uman-66/Robust-Multimodal-Learning-for-Neurological-Disease-Prediction-Under-Missing-Modalities" },
      { label: "Medium", href: "https://medium.com/@rummanaslam01/towards-clinical-trustworthiness-diagnosing-confounds-and-data-leakage-in-multimodal-mri-models-f1375b996928" },
    ],
  },
  {
    slug: "graphbrain-abide",
    title: "GraphBRAIN-ABIDE",
    subtitle: "Graph Neural Networks for Autism Spectrum Disorder Detection",
    category: "ML",
    outcome: "An end-to-end computational neuroscience framework using resting-state fMRI and graph-based learning.",
    bullets: [
      "Built a leak-free benchmark comparing graph neural networks with harmonized classical machine learning models.",
      "Evaluated models under strict 19-fold Leave-One-Site-Out cross-validation across multi-site neuroimaging cohorts.",
      "Combined functional connectivity, spectral, topological, and clinical features for cross-site generalization analysis.",
    ],
    tags: ["PyTorch", "PyTorch Geometric", "rs-fMRI", "Graph neural networks"],
    links: [{ label: "GitHub", href: "https://github.com/Uman-66/GraphBRAIN-ABIDE" }],
  },
  {
    slug: "ibm-bob-modernizer",
    title: "IBM Bob 2.0 Modernizer",
    subtitle: "Automated Enterprise Legacy & Security Modernizer",
    category: "Full-stack",
    outcome: "A multi-agent platform that audits legacy code, proposes secure refactors, and verifies patches before shipping.",
    bullets: [
      "Built a polyglot modernization workflow covering Python, JavaScript, TypeScript, and Java codebases.",
      "Combined AST taint analysis, semantic CVE retrieval, structural safety gates, and multi-agent consensus.",
      "Added zero-trust authentication, observability, a self-healing execution sandbox, and a React dashboard.",
    ],
    tags: ["React", "FastAPI", "AST analysis", "Security automation"],
  },
  {
    slug: "warrantyvault",
    title: "WarrantyVault",
    subtitle: "AI Warranty Extraction Assistant",
    category: "Full-stack",
    outcome: "A web application that extracts warranty information from uploaded receipts and presents structured product records.",
    bullets: [
      "Built a receipt upload workflow supporting JPG, PNG, and PDF files with validation and previews.",
      "Integrated a Supabase Edge Function to extract product, store, purchase-date, and warranty-duration information.",
      "Added confidence-aware warranty cards and calendar event export for extracted warranty records.",
    ],
    tags: ["React", "Supabase", "OCR", "Framer Motion"],
  },
];
