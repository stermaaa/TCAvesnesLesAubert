type AfficheurScoreProps = {
  score: string;
  className?: string;
};

/** Grands chiffres tabulaires — la signature typographique du site. */
export function AfficheurScore({ score, className }: AfficheurScoreProps) {
  return (
    <p className={`font-heading tabular-nums font-bold ${className ?? ""}`}>
      {score}
    </p>
  );
}
