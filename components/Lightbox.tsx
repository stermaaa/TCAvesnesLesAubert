"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import type { Photo } from "@/contenu/photos";

type LightboxProps = {
  photos: Photo[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
};

export function Lightbox({ photos, index, onIndexChange }: LightboxProps) {
  const photo = index !== null ? photos[index] : null;

  const precedent = () => {
    if (index === null) return;
    onIndexChange((index - 1 + photos.length) % photos.length);
  };
  const suivant = () => {
    if (index === null) return;
    onIndexChange((index + 1) % photos.length);
  };

  return (
    <Dialog.Root
      open={photo !== null}
      onOpenChange={(ouvert) => !ouvert && onIndexChange(null)}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/90" />
        <Dialog.Content
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-4 outline-none"
          aria-describedby={undefined}
        >
          <Dialog.Title className="sr-only">
            {photo?.legende ?? "Photo"}
          </Dialog.Title>

          {photo ? (
            <>
              <div className="relative h-[70vh] w-full max-w-4xl">
                <Image
                  src={photo.fichier}
                  alt={photo.legende}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex max-w-4xl flex-col items-center gap-1 text-center text-white-line">
                <p className="text-base">{photo.legende}</p>
                {photo.credit ? (
                  <p className="text-sm opacity-70">{photo.credit}</p>
                ) : null}
              </div>
            </>
          ) : null}

          <button
            type="button"
            onClick={precedent}
            aria-label="Photo précédente"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white-line sm:left-6"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <polyline
                points="15 4 7 12 15 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={suivant}
            aria-label="Photo suivante"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white-line sm:right-6"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <polyline
                points="9 4 17 12 9 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>

          <Dialog.Close
            aria-label="Fermer"
            className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center text-white-line"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
              <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" />
            </svg>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
