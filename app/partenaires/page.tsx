import type { Metadata } from "next";
import { EnTeteSection } from "@/components/EnTeteSection";
import { LogoPartenaire } from "@/components/LogoPartenaire";
import { partenaires } from "@/contenu/partenaires";

export const metadata: Metadata = {
  title: "Partenaires",
  description:
    "Les partenaires qui soutiennent le tournoi du Tennis Club Avesnes Les Aubert.",
};

export default function PartenairesPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-16 sm:px-8">
      <EnTeteSection
        eyebrow="Merci à eux"
        titre="Nos partenaires"
        description="Le tournoi n'existerait pas sans le soutien de nos partenaires locaux."
      />
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {partenaires.map((partenaire) => (
          <LogoPartenaire key={partenaire.id} partenaire={partenaire} />
        ))}
      </div>
    </div>
  );
}
