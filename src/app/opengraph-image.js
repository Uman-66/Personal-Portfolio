import { ImageResponse } from "next/og";

export const alt =
  "Muhammad Rumman Aslam — ML Engineer & Researcher building trustworthy multimodal systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 76px",
          background: "linear-gradient(135deg, #071024 0%, #0b1620 45%, #123049 100%)",
          color: "#eef3f6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#7fc9e8",
          }}
        >
          <div style={{ width: 40, height: 1, background: "#7fc9e8" }} />
          ML Engineer & Researcher
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            <span>Muhammad</span>
            <span>Rumman Aslam</span>
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 30,
              lineHeight: 1.4,
              color: "#aebdc8",
              maxWidth: 860,
            }}
          >
            Trustworthy multimodal systems for healthcare — clinical AI auditing,
            robustness under missing data, reproducible ML engineering.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#aebdc8",
            borderTop: "1px solid rgba(196,224,240,0.24)",
            paddingTop: 26,
          }}
        >
          <span>Faisalabad, Pakistan</span>
          <span style={{ color: "#7fc9e8" }}>Clinical AI · Multimodal · Robustness</span>
        </div>
      </div>
    ),
    size
  );
}
