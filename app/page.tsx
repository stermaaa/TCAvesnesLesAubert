export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
      {/* Page de vérification temporaire pour les tokens + polices.
          Sera remplacée par le vrai hero "anatomie du court" à l'étape suivante. */}
      <h1 className="font-heading text-4xl font-bold text-court-blue">
        Tennis Club Avesnes Les Aubert
      </h1>

      <p className="tabular-nums text-6xl font-heading font-bold text-court-orange">
        6-4 / 7-5
      </p>

      <div className="flex gap-4">
        <div className="h-24 w-24 rounded-none bg-court-blue" />
        <div className="h-24 w-24 rounded-sm bg-court-orange" />
        <div className="h-24 w-24 rounded-lg bg-ink" />
      </div>

      <p className="max-w-md text-center text-base text-ink">
        Vérification : titrage en Space Grotesk (bleu), score en chiffres
        tabulaires, texte courant en Inter, trois rayons (0 / 4px / 8px).
      </p>
    </main>
  );
}
