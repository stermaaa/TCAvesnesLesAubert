/**
 * INFOS GÉNÉRALES DU SITE
 * Utilisées un peu partout : titre du site, dates du tournoi, métadonnées SEO.
 *
 * ÉDITE ICI : ne change que les valeurs entre guillemets.
 */

export type InfosSite = {
  nomClub: string;
  nomTournoi: string;
  ville: string;
  codePostal: string;
  /** Date de début du tournoi, format AAAA-MM-JJ (ex: "2026-07-11") */
  dateDebut: string;
  /** Date de fin du tournoi, format AAAA-MM-JJ (ex: "2026-07-19") */
  dateFin: string;
  /** Dates affichées sur le site en toutes lettres (ex: "11 – 19 juillet 2026") */
  datesLisibles: string;
  /** URL complète du site une fois déployé (ex: "https://tournoi-avesnes.vercel.app") */
  urlSite: string;
};

export const infosSite: InfosSite = {
  nomClub: "Tennis Club Avesnes Les Aubert",
  nomTournoi: "Tournoi du Tennis Club Avesnes Les Aubert",
  ville: "Avesnes-les-Aubert",
  codePostal: "59214",
  dateDebut: "2026-07-11",
  dateFin: "2026-07-19",
  datesLisibles: "11 – 19 juillet 2026",
  urlSite: "https://tc-avesnes-les-aubert.vercel.app",
};
