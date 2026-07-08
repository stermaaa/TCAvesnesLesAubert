import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { infosSite } from "@/contenu/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(infosSite.urlSite),
  title: {
    default: `${infosSite.nomTournoi} — ${infosSite.ville}`,
    template: `%s — ${infosSite.nomClub}`,
  },
  description: `${infosSite.nomTournoi}, du ${infosSite.datesLisibles} à ${infosSite.ville} (Nord). Programme, résultats, tableaux et infos pratiques.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Navigation />
        {/* pt-16 compense le header "fixed" (h-16) pour qu'il ne recouvre jamais le
            contenu. Seul le Hero de l'accueil annule ce padding (-mt-16) pour
            passer derrière le header transparent. */}
        <main className="flex flex-1 flex-col pt-16">{children}</main>
      </body>
    </html>
  );
}
