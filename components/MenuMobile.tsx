"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type Lien = { href: string; label: string };

type MenuMobileProps = {
  liens: readonly Lien[];
  onFermer: () => void;
};

/** Panneau plein écran pour la navigation mobile. Fermé par Échap, le bouton fermer, ou un clic sur un lien. */
export function MenuMobile({ liens, onFermer }: MenuMobileProps) {
  const boutonFermerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    boutonFermerRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFermer();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onFermer]);

  return (
    <div
      id="menu-mobile"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
      className="fixed inset-0 z-50 flex flex-col bg-court-blue"
    >
      <div className="flex h-16 items-center justify-end px-4">
        <button
          ref={boutonFermerRef}
          type="button"
          onClick={onFermer}
          className="flex h-11 w-11 items-center justify-center text-white-line"
        >
          <span className="sr-only">Fermer le menu</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <line
              x1="4"
              y1="4"
              x2="20"
              y2="20"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="20"
              y1="4"
              x2="4"
              y2="20"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>

      <nav className="flex flex-1 flex-col items-center justify-center gap-2">
        {liens.map((lien) => (
          <Link
            key={lien.href}
            href={lien.href}
            onClick={onFermer}
            className="font-heading flex min-h-11 items-center px-4 text-2xl font-bold text-white-line"
          >
            {lien.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
