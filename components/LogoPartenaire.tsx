import Image from "next/image";
import type { Partenaire } from "@/contenu/partenaires";

type LogoPartenaireProps = {
  partenaire: Partenaire;
};

export function LogoPartenaire({ partenaire }: LogoPartenaireProps) {
  const image = (
    <div className="relative h-24 w-full grayscale transition-all duration-reaction ease-vif hover:grayscale-0">
      <Image
        src={partenaire.logo}
        alt={partenaire.nom}
        fill
        sizes="(min-width: 768px) 200px, 45vw"
        className="object-contain"
      />
    </div>
  );

  if (partenaire.siteWeb) {
    return (
      <a
        href={partenaire.siteWeb}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={partenaire.nom}
      >
        {image}
      </a>
    );
  }

  return image;
}
