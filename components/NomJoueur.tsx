type NomJoueurProps = {
  nom: string;
  teteDeSerie?: number;
  className?: string;
};

export function NomJoueur({ nom, teteDeSerie, className }: NomJoueurProps) {
  return (
    <span className={`font-sans font-medium ${className ?? ""}`}>
      {nom}
      {teteDeSerie ? (
        <span className="tabular-nums ml-2 text-xs font-normal opacity-70">
          (TS{teteDeSerie})
        </span>
      ) : null}
    </span>
  );
}
