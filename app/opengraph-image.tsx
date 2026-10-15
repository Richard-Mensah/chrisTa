import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";

export const alt = `${SITE.formalName}: Electrical Engineer, Ghana`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori renders inline styles only, so this file uses `style` by necessity.
export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public", "images", "logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #050d20 0%, #0f2556 100%)",
          color: "#e8eef7",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", background: "#ffffff", borderRadius: 20, padding: 10 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- Satori needs a plain img */}
            <img src={logoSrc} width={136} height={85} alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 34, fontWeight: 700 }}>{SITE.formalName}</span>
            <span style={{ fontSize: 24, color: "#3fd8d4", fontStyle: "italic" }}>{SITE.tagline}</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
          <span>Engineering reliable power.</span>
          <span style={{ color: "#3fd8d4" }}>Developing future leaders.</span>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 24, color: "#a3b3cf", letterSpacing: 2 }}>
          POWER SYSTEMS · SOLAR PV · PROJECT DELIVERY · MENTORSHIP
        </div>
      </div>
    ),
    size,
  );
}
