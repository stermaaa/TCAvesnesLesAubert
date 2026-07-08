import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Le favicon est une version miniature du composant Champ : orange -> blanc -> bleu. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#d9662b",
          padding: 4,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            backgroundColor: "#ffffff",
            padding: 2,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              backgroundColor: "#1e5aa8",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
