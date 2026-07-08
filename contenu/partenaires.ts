/**
 * PARTENAIRES DU TOURNOI
 * Le logo doit être un fichier propre (pas pixelisé) dans /public/partenaires/.
 *
 * ÉDITE ICI : ne change que les valeurs entre guillemets.
 */

export type Partenaire = {
  id: string;
  nom: string;
  logo: string;
  siteWeb?: string;
};

export const partenaires: Partenaire[] = [
  {
    id: "partenaire-1",
    nom: "Boulangerie Dupont",
    logo: "/partenaires/exemple-01.png",
  },
  {
    id: "partenaire-2",
    nom: "Garage Martin",
    logo: "/partenaires/exemple-02.png",
  },
  {
    id: "partenaire-3",
    nom: "Mairie d'Avesnes-les-Aubert",
    logo: "/partenaires/exemple-03.png",
    siteWeb: "https://www.avesnes-les-aubert.fr",
  },
];
