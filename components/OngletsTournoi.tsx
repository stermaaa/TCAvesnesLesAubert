"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { CarteMatch } from "@/components/CarteMatch";
import { NomJoueur } from "@/components/NomJoueur";
import { PastilleStatut } from "@/components/PastilleStatut";
import { AfficheurScore } from "@/components/AfficheurScore";
import type { Match, Tour } from "@/contenu/matches";

export type GroupeTour = { tour: Tour; libelle: string; matches: Match[] };
export type GroupeTableau = { nom: string; parTour: GroupeTour[] };

type OngletsTournoiProps = {
  aVenir: Match[];
  termines: Match[];
  parTableau: GroupeTableau[];
};

const ONGLETS = [
  { valeur: "programme", label: "Programme" },
  { valeur: "resultats", label: "Résultats" },
  { valeur: "tableaux", label: "Tableaux" },
] as const;

export function OngletsTournoi({
  aVenir,
  termines,
  parTableau,
}: OngletsTournoiProps) {
  return (
    <Tabs.Root defaultValue="programme">
      <Tabs.List className="flex gap-2 border-b border-ink/10">
        {ONGLETS.map((onglet) => (
          <Tabs.Trigger
            key={onglet.valeur}
            value={onglet.valeur}
            className="flex h-11 items-center border-b-2 border-transparent px-4 text-sm font-semibold text-ink/60 transition-colors duration-reaction ease-vif data-[state=active]:border-court-blue data-[state=active]:text-court-blue"
          >
            {onglet.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      <Tabs.Content value="programme" className="grid gap-4 py-8 sm:grid-cols-3">
        {aVenir.length ? (
          aVenir.map((match) => <CarteMatch key={match.id} match={match} />)
        ) : (
          <p className="text-ink/60">Aucun match à venir pour le moment.</p>
        )}
      </Tabs.Content>

      <Tabs.Content value="resultats" className="grid gap-4 py-8 sm:grid-cols-3">
        {termines.length ? (
          termines.map((match) => <CarteMatch key={match.id} match={match} />)
        ) : (
          <p className="text-ink/60">Aucun résultat pour le moment.</p>
        )}
      </Tabs.Content>

      <Tabs.Content value="tableaux" className="flex flex-col gap-8 py-8">
        {parTableau.map((tableau) => (
          <div key={tableau.nom} className="flex flex-col gap-4">
            <h3 className="font-heading text-xl font-bold text-ink">
              {tableau.nom}
            </h3>
            {tableau.parTour.map((groupe) => (
              <div key={groupe.tour} className="flex flex-col gap-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-court-orange">
                  {groupe.libelle}
                </p>
                <ul className="flex flex-col divide-y divide-ink/10">
                  {groupe.matches.map((match) => (
                    <li
                      key={match.id}
                      className="flex flex-wrap items-center justify-between gap-2 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <PastilleStatut statut={match.statut} />
                        <div className="flex flex-col">
                          <NomJoueur
                            nom={match.joueur1}
                            teteDeSerie={match.teteDeSerie1}
                            className="text-ink"
                          />
                          <NomJoueur
                            nom={match.joueur2}
                            teteDeSerie={match.teteDeSerie2}
                            className="text-ink"
                          />
                        </div>
                      </div>
                      {match.statut === "termine" && match.score ? (
                        <AfficheurScore
                          score={match.score}
                          className="text-lg text-ink"
                        />
                      ) : (
                        <span className="tabular-nums text-sm text-ink/60">
                          {match.court} — {match.heure}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </Tabs.Content>
    </Tabs.Root>
  );
}
