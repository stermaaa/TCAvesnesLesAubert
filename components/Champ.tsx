type Rayon = "none" | "lg";

const CLASSE_RAYON: Record<Rayon, string> = {
  none: "rounded-none",
  lg: "rounded-lg",
};

type ChampProps = {
  /** "none" (angles vifs, plein largeur) ou "lg" (8px, cartes). Par défaut "none". */
  radius?: Rayon;
  /** Épaisseur du dégagement orange (classe Tailwind de padding). Par défaut "p-3". */
  marginClassName?: string;
  /** Classes sur le cadre orange extérieur (taille, marge externe...). */
  className?: string;
  /** Classes sur la surface bleue intérieure (padding du contenu, alignement...). */
  contentClassName?: string;
  children: React.ReactNode;
};

/**
 * Le cadre "anatomie du court" : orange (dégagement) -> ligne blanche -> bleu (surface de jeu).
 * Le même `radius` est appliqué aux 3 couches pour que les angles restent alignés
 * (sinon des coins bleus vifs dépasseraient d'un cadre orange arrondi).
 */
export function Champ({
  radius = "none",
  marginClassName = "p-3",
  className,
  contentClassName,
  children,
}: ChampProps) {
  const rayon = CLASSE_RAYON[radius];

  return (
    <div
      className={`bg-court-orange ${marginClassName} ${rayon} ${className ?? ""}`}
    >
      <div className={`bg-white-line p-1 ${rayon}`}>
        <div className={`bg-court-blue ${rayon} ${contentClassName ?? ""}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
