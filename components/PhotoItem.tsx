"use client";

import Image from "next/image";
import type { Photo } from "@/contenu/photos";

type PhotoItemProps = {
  photo: Photo;
  onClick: () => void;
};

export function PhotoItem({ photo, onClick }: PhotoItemProps) {
  const grande = photo.taille === "grande";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Agrandir : ${photo.legende}`}
      className={`group relative block w-full overflow-hidden ${
        grande ? "aspect-[4/3] sm:col-span-2" : "aspect-square"
      }`}
    >
      <Image
        src={photo.fichier}
        alt={photo.legende}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover transition-transform duration-apparition ease-pose group-hover:scale-105"
      />
    </button>
  );
}
