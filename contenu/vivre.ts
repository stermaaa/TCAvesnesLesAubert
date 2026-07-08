/**
 * PAGE "VIVRE LE TOURNOI" — animations, soirées, buvette, enfants.
 *
 * ÉDITE ICI : ne change que les valeurs entre guillemets.
 */

export type Animation = {
  id: string;
  titre: string;
  description: string;
  jour: string;
  heure?: string;
};

export const animations: Animation[] = [
  {
    id: "soiree-ouverture",
    titre: "Soirée d'ouverture",
    description: "Repas convivial et concert pour lancer le tournoi.",
    jour: "Samedi 11 juillet",
    heure: "19h30",
  },
  {
    id: "tournoi-enfants",
    titre: "Mini-tournoi enfants",
    description: "Initiation et petit tournoi pour les 6-12 ans, tout le matériel est fourni.",
    jour: "Mercredi 15 juillet",
    heure: "14h00",
  },
  {
    id: "soiree-finale",
    titre: "Soirée de clôture",
    description: "Remise des prix suivie d'un repas pour tous les participants.",
    jour: "Dimanche 19 juillet",
    heure: "18h00",
  },
];

export const buvette = {
  description:
    "Buvette et petite restauration tenue par les bénévoles du club, ouverte tous les jours du tournoi.",
  horaires: "9h - 22h",
};

export const enfants = {
  titre: "Espace enfants",
  description:
    "Un espace de jeux surveillé est prévu à côté du club-house pendant les matchs.",
};
