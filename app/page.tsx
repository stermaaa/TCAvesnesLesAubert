import Image from "next/image";
import { Hero } from "@/components/Hero";
import { EnTeteSection } from "@/components/EnTeteSection";
import { CarteMatch } from "@/components/CarteMatch";
import { Bouton } from "@/components/Bouton";
import { LogoPartenaire } from "@/components/LogoPartenaire";
import { matches } from "@/contenu/matches";
import { photos } from "@/contenu/photos";
import { partenaires } from "@/contenu/partenaires";
import { animations } from "@/contenu/vivre";
import { infosPratiques, horaires } from "@/contenu/infos";

export default function Home() {
  const prochainsMatches = matches
    .filter((match) => match.statut !== "termine")
    .slice(0, 3);
  const photosApercu = photos.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-16 sm:px-8">
        <EnTeteSection eyebrow="Programme" titre="Prochains matchs" />
        <div className="grid gap-4 sm:grid-cols-3">
          {prochainsMatches.map((match) => (
            <CarteMatch key={match.id} match={match} />
          ))}
        </div>
        <Bouton href="/le-tournoi" variante="secondaire" className="self-start">
          Voir tout le programme
        </Bouton>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-16 sm:px-8">
        <EnTeteSection eyebrow="Galerie" titre="Les temps forts en images" />
        <div className="grid grid-cols-3 gap-2">
          {photosApercu.map((photo) => (
            <div key={photo.id} className="relative aspect-square overflow-hidden">
              <Image
                src={photo.fichier}
                alt={photo.legende}
                fill
                sizes="33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <Bouton href="/galerie" variante="secondaire" className="self-start">
          Voir toute la galerie
        </Bouton>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-16 sm:px-8">
        <EnTeteSection eyebrow="Vivre le tournoi" titre="Animations et soirées" />
        <div className="grid gap-6 sm:grid-cols-3">
          {animations.map((animation) => (
            <div key={animation.id} className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-court-orange">
                {animation.jour}
                {animation.heure ? ` — ${animation.heure}` : ""}
              </p>
              <p className="font-heading text-lg font-bold text-ink">
                {animation.titre}
              </p>
              <p className="text-sm text-ink/80">{animation.description}</p>
            </div>
          ))}
        </div>
        <Bouton href="/vivre" variante="secondaire" className="self-start">
          Tout savoir sur l&rsquo;ambiance du tournoi
        </Bouton>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-16 sm:px-8">
        <EnTeteSection eyebrow="Infos pratiques" titre="Accès et horaires" />
        <div className="grid gap-6 sm:grid-cols-2">
          <p className="text-ink">
            {infosPratiques.adresse}, {infosPratiques.codePostal}{" "}
            {infosPratiques.ville}
          </p>
          <ul className="flex flex-col gap-1">
            {horaires.map((horaire) => (
              <li key={horaire.jour} className="tabular-nums text-ink">
                <span className="font-semibold">{horaire.jour}</span> :{" "}
                {horaire.plage}
              </li>
            ))}
          </ul>
        </div>
        <Bouton href="/infos" variante="secondaire" className="self-start">
          Toutes les infos pratiques
        </Bouton>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-16 sm:px-8">
        <EnTeteSection eyebrow="Merci à eux" titre="Nos partenaires" />
        <div className="grid grid-cols-3 gap-8 sm:grid-cols-4">
          {partenaires.map((partenaire) => (
            <LogoPartenaire key={partenaire.id} partenaire={partenaire} />
          ))}
        </div>
      </section>
    </>
  );
}
