import { infosSite } from "@/contenu/site";

/**
 * Hero "anatomie du court" : marge orange -> champ bleu, avec UNE diagonale
 * rare (coin haut-gauche) pour l'énergie. La diagonale est en SVG car un
 * simple CSS clip-path ne permet pas de tracer une ligne blanche nette sur un
 * bord penché (contrairement aux lignes droites du composant Champ).
 * Le contour du polygone (stroke) applique la "loi de la ligne blanche" sur
 * les 4 côtés, pas seulement la diagonale.
 */
export function Hero() {
  return (
    // -mt-16 annule le pt-16 du <main> pour passer derrière le header fixed
    // (transparent tant qu'on n'a pas scrollé) : voir app/layout.tsx.
    <section className="relative -mt-16 flex min-h-dvh flex-col bg-court-orange p-4 sm:p-8">
      <div className="relative flex-1 overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <polygon
            points="0,15 100,0 100,100 0,100"
            fill="var(--color-court-blue)"
            stroke="var(--color-white-line)"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="absolute inset-0 z-10 flex flex-col justify-end gap-2 p-6 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-white-line/80">
            {infosSite.ville}
          </p>
          <h1 className="font-heading text-4xl font-bold text-white-line sm:text-6xl">
            {infosSite.nomTournoi}
          </h1>
          <p className="tabular-nums font-heading text-2xl text-white-line sm:text-3xl">
            {infosSite.datesLisibles}
          </p>
        </div>
      </div>
    </section>
  );
}
