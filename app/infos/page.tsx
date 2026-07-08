import type { Metadata } from "next";
import { EnTeteSection } from "@/components/EnTeteSection";
import { infosPratiques, horaires, tarifs } from "@/contenu/infos";

export const metadata: Metadata = {
  title: "Infos pratiques",
  description:
    "Accès, parking, horaires, tarifs et contact pour le tournoi du Tennis Club Avesnes Les Aubert.",
};

export default function InfosPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-16 sm:px-8">
      <EnTeteSection
        niveau="h1"
        eyebrow="Infos pratiques"
        titre="Accès, horaires et tarifs"
      />

      <div className="grid gap-12 sm:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-xl font-bold text-ink">Accès</h3>
            <p className="text-ink/80">
              {infosPratiques.adresse}, {infosPratiques.codePostal}{" "}
              {infosPratiques.ville}
            </p>
            <p className="text-ink/80">{infosPratiques.parking}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-xl font-bold text-ink">
              Accès PMR
            </h3>
            <p className="text-ink/80">{infosPratiques.pmr}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-xl font-bold text-ink">Contact</h3>
            <p className="text-ink/80">
              <a href={`mailto:${infosPratiques.contact.email}`} className="underline">
                {infosPratiques.contact.email}
              </a>
            </p>
            <p className="tabular-nums text-ink/80">
              {infosPratiques.contact.telephone}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-xl font-bold text-ink">Horaires</h3>
            <ul className="flex flex-col gap-1">
              {horaires.map((horaire) => (
                <li key={horaire.jour} className="tabular-nums text-ink/80">
                  <span className="font-semibold text-ink">{horaire.jour}</span> :{" "}
                  {horaire.plage}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-xl font-bold text-ink">Tarifs</h3>
            <ul className="flex flex-col gap-1">
              {tarifs.map((tarif) => (
                <li key={tarif.label} className="flex justify-between gap-4 text-ink/80">
                  <span>{tarif.label}</span>
                  <span className="tabular-nums font-semibold text-ink">
                    {tarif.prix}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
