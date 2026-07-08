import { Champ } from "@/components/Champ";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-12 p-8">
      {/* Page de vérification temporaire pour les tokens + polices + composant Champ.
          Sera remplacée par le vrai hero "anatomie du court" à l'étape suivante. */}
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-heading text-4xl font-bold text-court-blue">
          Tennis Club Avesnes Les Aubert
        </h1>
        <p className="tabular-nums text-6xl font-heading font-bold text-court-orange">
          6-4 / 7-5
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <Champ radius="none" className="w-72" contentClassName="p-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white-line">
            Champ — angles vifs
          </p>
          <p className="mt-2 text-white-line">
            Utilisé pour le hero et les blocs pleine largeur.
          </p>
        </Champ>

        <Champ radius="lg" className="w-72" contentClassName="p-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white-line">
            Champ — carte (8px)
          </p>
          <p className="mt-2 text-white-line">
            Utilisé pour CarteMatch et les autres cartes.
          </p>
        </Champ>
      </div>
    </main>
  );
}
