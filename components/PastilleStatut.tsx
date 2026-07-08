import type { StatutMatch } from "@/contenu/matches";

const LIBELLE: Record<StatutMatch, string> = {
  a_venir: "À venir",
  en_cours: "En cours",
  termine: "Terminé",
};

const STYLE: Record<StatutMatch, string> = {
  a_venir: "bg-white-line text-ink",
  en_cours: "bg-court-orange text-white-line",
  termine: "bg-ink text-white-line",
};

type PastilleStatutProps = {
  statut: StatutMatch;
};

export function PastilleStatut({ statut }: PastilleStatutProps) {
  return (
    <span
      className={`inline-flex h-6 items-center rounded-sm px-2 text-xs font-semibold uppercase tracking-wide ${STYLE[statut]}`}
    >
      {LIBELLE[statut]}
    </span>
  );
}
