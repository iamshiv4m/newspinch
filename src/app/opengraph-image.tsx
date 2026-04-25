import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "News Pinch — AI-Powered News Network";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #1a237e 0%, #0d1642 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#ffc107",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 900,
              color: "#0d1642",
            }}
          >
            NP
          </div>
          <span style={{ fontSize: "28px", fontWeight: 700 }}>
            News Pinch
          </span>
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "800px",
          }}
        >
          Objectivity for citizens,{" "}
          <span style={{ color: "#ffc107" }}>powered by </span>
          <span style={{ color: "#d32f2f" }}>AI</span>
          <span style={{ color: "#ffc107" }}>.</span>
        </div>

        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.6)",
            maxWidth: "600px",
            lineHeight: 1.5,
          }}
        >
          An AI-powered, creator-led news network — credible, fast, and
          trusted by millions across India.
        </div>

        <div
          style={{
            position: "absolute",
            right: "80px",
            bottom: "80px",
            display: "flex",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "48px", fontWeight: 800, color: "#ffc107" }}>332M+</div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "2px" }}>Views</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "48px", fontWeight: 800, color: "#ffc107" }}>1.2M+</div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "2px" }}>Community</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
