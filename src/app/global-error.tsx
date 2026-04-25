"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#f5f5f0" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <div style={{ maxWidth: "28rem", textAlign: "center" }}>
            <div
              style={{
                width: "5rem",
                height: "5rem",
                borderRadius: "50%",
                background: "rgba(211,47,47,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
                fontSize: "2rem",
              }}
            >
              ⚠️
            </div>

            <h1 style={{ fontSize: "1.875rem", fontWeight: 700, color: "#1a1a1a", margin: "0 0 0.75rem" }}>
              Critical Error
            </h1>
            <p style={{ color: "#888", lineHeight: 1.6, margin: "0 0 2rem" }}>
              Something went seriously wrong. Please try refreshing the page. If the problem persists, contact us at{" "}
              <a href="mailto:business@newspinch.in" style={{ color: "#1a237e" }}>
                business@newspinch.in
              </a>
            </p>

            <button
              onClick={reset}
              style={{
                background: "#1a237e",
                color: "white",
                border: "none",
                borderRadius: "0.5rem",
                padding: "0.75rem 2rem",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
