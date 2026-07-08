/**
 * PHOTOS DE LA GALERIE
 * Chaque photo pointe vers un fichier dans /public/galerie/...
 * Les photos sont groupées par "jour" (le texte doit être IDENTIQUE
 * pour toutes les photos d'un même jour, pour qu'elles soient rangées ensemble).
 *
 * ÉDITE ICI : ne change que les valeurs entre guillemets.
 *
 * - fichier : chemin vers l'image dans /public, ex "/galerie/samedi/photo-01.jpg"
 * - taille  : "normale" | "grande" (grande = prend plus de place dans la grille)
 */

export type Photo = {
  id: string;
  fichier: string;
  jour: string;
  legende: string;
  credit?: string;
  taille?: "normale" | "grande";
};

export const photos: Photo[] = [
  {
    id: "photo-1",
    fichier: "/galerie/exemple-01.png",
    jour: "Samedi 11 juillet",
    legende: "Premiers échanges sur le court n°1",
    credit: "Photo : club",
    taille: "grande",
  },
  {
    id: "photo-2",
    fichier: "/galerie/exemple-02.png",
    jour: "Samedi 11 juillet",
    legende: "Ambiance à la buvette",
    credit: "Photo : club",
  },
  {
    id: "photo-3",
    fichier: "/galerie/exemple-03.png",
    jour: "Dimanche 12 juillet",
    legende: "Quart de finale disputé",
    credit: "Photo : club",
  },
];
