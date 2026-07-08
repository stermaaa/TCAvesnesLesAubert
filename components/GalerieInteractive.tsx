"use client";

import { useState } from "react";
import { PhotoItem } from "@/components/PhotoItem";
import { Lightbox } from "@/components/Lightbox";
import type { Photo } from "@/contenu/photos";

type GalerieInteractiveProps = {
  photos: Photo[];
};

export function GalerieInteractive({ photos }: GalerieInteractiveProps) {
  const [indexOuvert, setIndexOuvert] = useState<number | null>(null);
  const jours = [...new Set(photos.map((photo) => photo.jour))];

  return (
    <div className="flex flex-col gap-16">
      {jours.map((jour) => {
        const photosDuJour = photos.filter((photo) => photo.jour === jour);
        return (
          <div key={jour} className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl font-bold text-ink">{jour}</h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {photosDuJour.map((photo) => (
                <PhotoItem
                  key={photo.id}
                  photo={photo}
                  onClick={() =>
                    setIndexOuvert(photos.findIndex((p) => p.id === photo.id))
                  }
                />
              ))}
            </div>
          </div>
        );
      })}

      <Lightbox
        photos={photos}
        index={indexOuvert}
        onIndexChange={setIndexOuvert}
      />
    </div>
  );
}
