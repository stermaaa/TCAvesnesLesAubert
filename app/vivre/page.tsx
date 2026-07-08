import type { Metadata } from "next";
import { EnTeteSection } from "@/components/EnTeteSection";
import { Champ } from "@/components/Champ";
import { animations, buvette, enfants } from "@/contenu/vivre";

export const metadata: Metadata = {
  title: "Vivre le tournoi",
  description:
    "Animations, soirées, buvette et espace enfants au tournoi du Tennis Club Avesnes Les Aubert.",
};

export default function VivrePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-16 sm:px-8">
      <EnTeteSection
        niveau="h1"
        eyebrow="Vivre le tournoi"
        titre="Animations, soirées et ambiance"
        description="Le tournoi, ce n'est pas que des matchs : buvette, soirées et activités pour les enfants rythment la quinzaine."
      />

      <div className="grid gap-6 sm:grid-cols-3">
        {animations.map((animation) => (
          <Champ key={animation.id} radius="lg" contentClassName="flex flex-col gap-2 p-6">
            <p className="text-sm font-semibold text-white-line/80">
              {animation.jour}
              {animation.heure ? ` — ${animation.heure}` : ""}
            </p>
            <p className="font-heading text-xl font-bold text-white-line">
              {animation.titre}
            </p>
            <p className="text-sm text-white-line/90">{animation.description}</p>
          </Champ>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-xl font-bold text-ink">Buvette</h3>
          <p className="text-ink/80">{buvette.description}</p>
          <p className="tabular-nums text-sm font-semibold text-court-orange">
            {buvette.horaires}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-xl font-bold text-ink">
            {enfants.titre}
          </h3>
          <p className="text-ink/80">{enfants.description}</p>
        </div>
      </div>
    </div>
  );
}
