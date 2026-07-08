"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MenuMobile } from "@/components/MenuMobile";

const LIENS = [
  { href: "/", label: "Accueil" },
  { href: "/le-tournoi", label: "Le tournoi" },
  { href: "/vivre", label: "Vivre" },
  { href: "/galerie", label: "Galerie" },
  { href: "/infos", label: "Infos" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/a-propos", label: "À propos" },
] as const;

/**
 * Header sticky. Transparent en haut de l'accueil (avant de scroller), fond
 * solide partout ailleurs (autres pages, ou dès qu'on a scrollé sur l'accueil).
 */
export function Navigation() {
  const pathname = usePathname();
  const estAccueil = pathname === "/";

  const [aScrolle, setAScrolle] = useState(false);
  const [menuOuvert, setMenuOuvert] = useState(false);
  const boutonMenuRef = useRef<HTMLButtonElement>(null);

  // Ferme le menu au changement de page (technique recommandée par React :
  // ajuster l'état pendant le rendu plutôt que dans un effet, pour éviter un rendu en cascade).
  const [pathnamePrecedent, setPathnamePrecedent] = useState(pathname);
  if (pathname !== pathnamePrecedent) {
    setPathnamePrecedent(pathname);
    setMenuOuvert(false);
  }

  useEffect(() => {
    if (!estAccueil) return;
    const onScroll = () => setAScrolle(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [estAccueil]);

  useEffect(() => {
    document.body.style.overflow = menuOuvert ? "hidden" : "";
  }, [menuOuvert]);

  const fondSolide = !estAccueil || aScrolle;

  const fermerMenu = () => {
    setMenuOuvert(false);
    boutonMenuRef.current?.focus();
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-reaction ease-vif ${
          fondSolide ? "bg-paper text-ink" : "bg-transparent text-white-line"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="font-heading text-lg font-bold">
            TC Avesnes Les Aubert
          </Link>

          <nav className="hidden gap-6 md:flex">
            {LIENS.map((lien) => (
              <Link
                key={lien.href}
                href={lien.href}
                className="flex min-h-11 items-center text-sm font-medium"
              >
                {lien.label}
              </Link>
            ))}
          </nav>

          <button
            ref={boutonMenuRef}
            type="button"
            onClick={() => setMenuOuvert(true)}
            aria-expanded={menuOuvert}
            aria-controls="menu-mobile"
            className="flex h-11 w-11 items-center justify-center md:hidden"
          >
            <span className="sr-only">Ouvrir le menu</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" />
              <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" />
              <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </header>

      {menuOuvert && <MenuMobile liens={LIENS} onFermer={fermerMenu} />}
    </>
  );
}
