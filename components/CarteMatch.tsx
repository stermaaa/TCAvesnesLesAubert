import { Champ } from "@/components/Champ";
import { PastilleStatut } from "@/components/PastilleStatut";
import { NomJoueur } from "@/components/NomJoueur";
import { AfficheurScore } from "@/components/AfficheurScore";
import type { Match } from "@/contenu/matches";
import { LIBELLE_TOUR } from "@/contenu/matches";

type CarteMatchProps = {
  match: Match;
};

export function CarteMatch({ match }: CarteMatchProps) {
  return (
    <Champ radius="lg" contentClassName="flex flex-col gap-3 p-4">
      <div className="flex items-center justify-between gap-2">
        <PastilleStatut statut={match.statut} />
        <span className="text-xs font-medium text-white-line/80">
          {LIBELLE_TOUR[match.tour]} — {match.court}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <NomJoueur
          nom={match.joueur1}
          teteDeSerie={match.teteDeSerie1}
          className="text-white-line"
        />
        <NomJoueur
          nom={match.joueur2}
          teteDeSerie={match.teteDeSerie2}
          className="text-white-line"
        />
      </div>

      {match.statut === "termine" && match.score ? (
        <AfficheurScore score={match.score} className="text-2xl text-white-line" />
      ) : (
        <p className="tabular-nums text-sm text-white-line/80">
          {match.date} — {match.heure}
        </p>
      )}
    </Champ>
  );
}
