import type { Metadata } from "next";
import { EnTeteSection } from "@/components/EnTeteSection";
import { OngletsTournoi, type GroupeTableau } from "@/components/OngletsTournoi";
import { matches, ORDRE_TOURS, LIBELLE_TOUR } from "@/contenu/matches";

export const metadata: Metadata = {
  title: "Le tournoi",
  description:
    "Programme, résultats et tableaux du tournoi du Tennis Club Avesnes Les Aubert.",
};

export default function LeTournoiPage() {
  const aVenir = matches.filter(
    (match) => match.statut === "a_venir" || match.statut === "en_cours"
  );
  const termines = matches.filter((match) => match.statut === "termine");

  const nomsTableaux = [...new Set(matches.map((match) => match.tableau))];
  const parTableau: GroupeTableau[] = nomsTableaux.map((nom) => ({
    nom,
    parTour: ORDRE_TOURS.map((tour) => ({
      tour,
      libelle: LIBELLE_TOUR[tour],
      matches: matches.filter(
        (match) => match.tableau === nom && match.tour === tour
      ),
    })).filter((groupe) => groupe.matches.length > 0),
  }));

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-16 sm:px-8">
      <EnTeteSection
        niveau="h1"
        eyebrow="Le tournoi"
        titre="Programme, résultats et tableaux"
      />
      <OngletsTournoi
        aVenir={aVenir}
        termines={termines}
        parTableau={parTableau}
      />
    </div>
  );
}
