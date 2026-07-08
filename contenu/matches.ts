/**
 * MATCHS DU TOURNOI
 * Un seul objet "match" par ligne. Les pages Programme / Résultats / Tableaux
 * affichent toutes les MÊMES données, juste filtrées différemment — tu n'as
 * qu'un seul endroit à mettre à jour.
 *
 * ÉDITE ICI : ne change que les valeurs entre guillemets (et les nombres).
 * Ne touche pas aux noms des propriétés (à gauche des ":").
 *
 * - statut : "a_venir" | "en_cours" | "termine"
 * - tour   : "1er_tour" | "quarts" | "demies" | "finale"
 * - date   : format AAAA-MM-JJ, ex "2026-07-12"
 * - heure  : ex "14h30"
 * - score  : uniquement si le match est "termine", ex "6-4, 7-5"
 */

export type StatutMatch = "a_venir" | "en_cours" | "termine";

export type Tour = "1er_tour" | "quarts" | "demies" | "finale";

export const ORDRE_TOURS: Tour[] = ["1er_tour", "quarts", "demies", "finale"];

export const LIBELLE_TOUR: Record<Tour, string> = {
  "1er_tour": "1er tour",
  quarts: "Quarts de finale",
  demies: "Demi-finales",
  finale: "Finale",
};

export type Match = {
  id: string;
  /** Nom du tableau, ex: "Simple Messieurs", "Simple Dames", "Double Mixte" */
  tableau: string;
  tour: Tour;
  court: string;
  date: string;
  heure: string;
  statut: StatutMatch;
  joueur1: string;
  joueur2: string;
  /** Tête de série (optionnel), ex: 1, 2, 3... */
  teteDeSerie1?: number;
  teteDeSerie2?: number;
  /** Score final, uniquement si statut === "termine" */
  score?: string;
};

export const matches: Match[] = [
  {
    id: "sm-1t-1",
    tableau: "Simple Messieurs",
    tour: "1er_tour",
    court: "Court n°1",
    date: "2026-07-11",
    heure: "9h00",
    statut: "termine",
    joueur1: "Lucas Dubois",
    joueur2: "Mathieu Leroy",
    teteDeSerie1: 1,
    score: "6-4, 7-5",
  },
  {
    id: "sm-1t-2",
    tableau: "Simple Messieurs",
    tour: "1er_tour",
    court: "Court n°2",
    date: "2026-07-11",
    heure: "9h00",
    statut: "termine",
    joueur1: "Antoine Petit",
    joueur2: "Julien Roussel",
    score: "3-6, 6-3, 6-2",
  },
  {
    id: "sm-qf-1",
    tableau: "Simple Messieurs",
    tour: "quarts",
    court: "Court n°1",
    date: "2026-07-13",
    heure: "14h30",
    statut: "en_cours",
    joueur1: "Lucas Dubois",
    joueur2: "Antoine Petit",
    teteDeSerie1: 1,
  },
  {
    id: "sm-qf-2",
    tableau: "Simple Messieurs",
    tour: "quarts",
    court: "Court n°2",
    date: "2026-07-13",
    heure: "16h00",
    statut: "a_venir",
    joueur1: "Nicolas Faure",
    joueur2: "Romain Girard",
    teteDeSerie2: 4,
  },
  {
    id: "sm-demi-1",
    tableau: "Simple Messieurs",
    tour: "demies",
    court: "Court n°1",
    date: "2026-07-16",
    heure: "15h00",
    statut: "a_venir",
    joueur1: "En attente",
    joueur2: "En attente",
  },
  {
    id: "sm-finale",
    tableau: "Simple Messieurs",
    tour: "finale",
    court: "Court n°1",
    date: "2026-07-19",
    heure: "16h00",
    statut: "a_venir",
    joueur1: "En attente",
    joueur2: "En attente",
  },
  {
    id: "sd-1t-1",
    tableau: "Simple Dames",
    tour: "1er_tour",
    court: "Court n°3",
    date: "2026-07-11",
    heure: "10h30",
    statut: "termine",
    joueur1: "Camille Bernard",
    joueur2: "Léa Fontaine",
    teteDeSerie1: 2,
    score: "6-2, 6-3",
  },
  {
    id: "sd-qf-1",
    tableau: "Simple Dames",
    tour: "quarts",
    court: "Court n°3",
    date: "2026-07-13",
    heure: "11h00",
    statut: "a_venir",
    joueur1: "Camille Bernard",
    joueur2: "Sarah Morel",
    teteDeSerie1: 2,
  },
];
