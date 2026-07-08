type EnTeteSectionProps = {
  eyebrow?: string;
  titre: string;
  description?: string;
  className?: string;
};

/** Petit motif bleu-blanc-orange : la "loi de la ligne blanche" en miniature, sous chaque titre de section. */
function MotifLigne() {
  return (
    <div className="flex h-1 w-16">
      <span className="w-7 bg-court-blue" />
      <span className="w-1 bg-white-line" />
      <span className="w-7 bg-court-orange" />
    </div>
  );
}

export function EnTeteSection({
  eyebrow,
  titre,
  description,
  className,
}: EnTeteSectionProps) {
  return (
    <div className={`flex flex-col gap-3 ${className ?? ""}`}>
      {eyebrow ? (
        <p className="font-sans text-sm font-semibold uppercase tracking-wide text-court-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-bold text-ink">{titre}</h2>
      <MotifLigne />
      {description ? (
        <p className="max-w-2xl text-base text-ink/80">{description}</p>
      ) : null}
    </div>
  );
}
