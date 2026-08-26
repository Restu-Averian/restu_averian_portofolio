import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MobileCarousel } from "@/components/ui/mobile-carousel";

export const ProjectDetailImages = ({ images = [], title }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  return (
    <section className="rounded-[1.45rem] border border-porto-border/80 bg-porto-surface/45 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="overflow-hidden rounded-[1.25rem] bg-background/70 p-1.5">
        <img
          src={activeImage}
          alt={`${title || "Project"} preview`}
          className="aspect-[1.35/0.86] w-full rounded-2xl object-cover object-center"
        />
      </div>

      <MobileCarousel
        viewportClassName="mt-3 overflow-x-auto porto-scrollbar pb-2"
        trackClassName="flex gap-2.5"
        showArrows
      >
        {images?.map((image, index) => {
          const active = activeImage === image;

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveImage(image)}
              className={cn(
                "w-[calc((100%-1.25rem)/3)] shrink-0 overflow-hidden rounded-xl border bg-background/50 p-1 transition",
                active
                  ? "border-porto-btn shadow-[0_0_0_1px_rgba(210,166,108,0.35)]"
                  : "border-porto-border/60 opacity-65",
              )}
            >
              <img
                src={image}
                alt={`${title || "Project"} preview ${index + 1}`}
                className="aspect-[1.25/0.82] w-full rounded-lg object-cover"
              />
            </button>
          );
        })}
      </MobileCarousel>
    </section>
  );
};
