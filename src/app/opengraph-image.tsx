import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.formalName}: Electrical Engineer, Ghana`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0B1626",
          backgroundImage:
            "linear-gradient(#18293e 1px, transparent 1px), linear-gradient(90deg, #18293e 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#E8EEF2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: "#19C3B1", letterSpacing: 3 }}>
          <div style={{ width: 40, height: 4, background: "#19C3B1" }} />
          ELECTRICAL &amp; ELECTRONICS ENGINEER · GHANA
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, display: "flex", flexDirection: "column" }}>
            <span>Engineering reliable power.</span>
            <span style={{ color: "#19C3B1" }}>Developing future leaders.</span>
          </div>
          <div style={{ fontSize: 32, color: "#9DB0C0" }}>{site.formalName}</div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              style={{ width: 22, height: 44, borderRadius: 4, background: i < 9 ? "#F5B544" : "#24384F" }}
            />
          ))}
        </div>
      </div>
    ),
    size,
  );
}
