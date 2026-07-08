import { ImageResponse } from "next/og";
import { infosSite } from "@/contenu/site";

export const alt = infosSite.nomTournoi;
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
          justifyContent: "flex-end",
          backgroundColor: "#d9662b",
          padding: "48px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
            backgroundColor: "#1e5aa8",
            border: "6px solid #ffffff",
            padding: "64px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            {infosSite.ville}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              marginTop: 16,
              lineHeight: 1.1,
            }}
          >
            {infosSite.nomTournoi}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              fontWeight: 700,
              color: "#ffffff",
              marginTop: 24,
            }}
          >
            {infosSite.datesLisibles}
          </div>
        </div>
      </div>
    ),
    size
  );
}
