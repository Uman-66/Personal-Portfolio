export type ResearchStudy = {
  slug: string;
  title: string;
  status: "Completed" | "In progress";
  summary: string;
  bullets: string[];
  tags: string[];
  result: string;
  limitations: string;
};

export const research: ResearchStudy[] = [
  {
    slug: "breast-cancer-detection",
    title: "Breast Cancer Detection & Histopathological Image Analysis",
    status: "In progress",
    summary: "An ensemble deep learning study for malignancy detection from histopathological images.",
    result: "The study focuses on model generalization, diagnostic accuracy, and robustness.",
    bullets: [
      "Engineered an ensemble of deep learning models, integrating CNNs and Vision Transformers to enhance malignancy detection.",
      "Applied advanced feature extraction and hybrid feature fusion to improve model generalization, diagnostic accuracy, and robustness.",
    ],
    tags: ["CNNs", "Vision Transformers", "Histopathology", "Feature fusion"],
    limitations: "Further results are not stated in the CV.",
  },
  {
    slug: "trustclinai",
    title: "TrustClinAI: Evaluating the Trustworthiness of Clinical AI",
    status: "In progress",
    summary: "Independent research auditing clinical machine learning beyond accuracy alone.",
    result: "The study evaluates discrimination, calibration, robustness, and explanation alignment.",
    bullets: [
      "Systematically audited Logistic Regression, Random Forest, and XGBoost models on clinical tabular datasets to establish safety guardrails.",
      "Evaluated AUROC, calibration curves, and performance degradation under missing and perturbed data modalities.",
      "Applied SHAP (SHapley Additive exPlanations) to validate whether model decision weights align with human clinical reasoning.",
    ],
    tags: ["Clinical AI", "Calibration", "Robustness", "SHAP"],
    limitations: "The CV does not state a final metric or publication status.",
  },
];
