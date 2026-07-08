import type { Metadata } from "next";
import { EnTeteSection } from "@/components/EnTeteSection";
import { aPropos } from "@/contenu/apropos";
import { infosSite } from "@/contenu/site";

export const metadata: Metadata = {
  title: "À propos",
  description: `Histoire du ${infosSite.nomClub}, à ${infosSite.ville} (Nord).`,
};

export default function AProposPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-16 sm:px-8">
      <EnTeteSection
        eyebrow={`Depuis ${aPropos.anneeCreation}`}
        titre={infosSite.nomClub}
      />
      <div className="flex flex-col gap-4">
        {aPropos.histoire.map((paragraphe) => (
          <p key={paragraphe} className="text-base text-ink/80">
            {paragraphe}
          </p>
        ))}
      </div>
    </div>
  );
}
