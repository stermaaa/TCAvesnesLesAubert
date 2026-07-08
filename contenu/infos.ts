/**
 * PAGE "INFOS PRATIQUES" — accès, parking, horaires, tarifs, PMR, contact.
 *
 * ÉDITE ICI : ne change que les valeurs entre guillemets.
 */

export type Horaire = {
  jour: string;
  plage: string;
};

export type Tarif = {
  label: string;
  prix: string;
};

export const infosPratiques = {
  adresse: "Rue des Sports",
  ville: "Avesnes-les-Aubert",
  codePostal: "59214",
  parking: "Parking gratuit sur place, accès par la rue des Sports.",
  pmr: "Accès de plain-pied pour les personnes à mobilité réduite, sanitaires adaptés.",
  contact: {
    email: "contact@tc-avesnes-les-aubert.fr",
    telephone: "03 27 00 00 00",
  },
};

export const horaires: Horaire[] = [
  { jour: "Semaine", plage: "9h - 22h" },
  { jour: "Week-end", plage: "9h - 20h" },
];

export const tarifs: Tarif[] = [
  { label: "Entrée journée", prix: "3 €" },
  { label: "Pass tournoi (toute la durée)", prix: "10 €" },
  { label: "Gratuit", prix: "Moins de 12 ans" },
];
