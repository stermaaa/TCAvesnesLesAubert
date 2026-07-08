import type { Metadata } from "next";
import { EnTeteSection } from "@/components/EnTeteSection";
import { GalerieInteractive } from "@/components/GalerieInteractive";
import { photos } from "@/contenu/photos";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Photos du tournoi du Tennis Club Avesnes Les Aubert, jour par jour.",
};

export default function GaleriePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-16 sm:px-8">
      <EnTeteSection
        niveau="h1"
        eyebrow="Galerie"
        titre="Les temps forts en images"
      />
      <GalerieInteractive photos={photos} />
    </div>
  );
}
