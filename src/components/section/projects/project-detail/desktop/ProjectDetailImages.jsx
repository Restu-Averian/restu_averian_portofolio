import { useState, useEffect } from "react";
import { Box } from "lucide-react";
import { cn } from "@/lib/utils";

export const ProjectDetailImages = ({ images = [], title }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  return (
    <aside className="flex min-h-0 flex-col rounded-[1.45rem] border border-porto-border/60 bg-porto-surface/50 p-6">
      <div className="mb-4 flex items-center gap-2 text-[15px] font-medium text-porto-text">
        <Box className="h-4.5 w-4.5 text-porto-btn" />
        Product Preview
      </div>

      <div className="flex flex-1 flex-col gap-6">
        <div className="overflow-hidden rounded-[1.35rem] bg-background/90 p-4 shadow-[0_18px_44px_rgba(0,0,0,0.18)]">
          <img
            src={activeImage}
            alt={`${title || "Project"} preview`}
            className="aspect-[1.32/1] w-full rounded-xl object-cover object-center"
          />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {images.slice(0, 3).map((image, index) => {
            const active = activeImage === image;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveImage(image)}
                className={cn(
                  "overflow-hidden rounded-xl border bg-background/80 p-1 transition cursor-pointer",
                  active
                    ? "border-porto-btn shadow-[0_0_0_2px_rgba(210,166,108,0.2)]"
                    : "border-porto-border/60 opacity-65 hover:opacity-100",
                )}
              >
                <img
                  src={image}
                  alt={`${title || "Project"} preview ${index + 1}`}
                  className="aspect-[1.12/0.85] w-full rounded-lg object-cover"
                />
              </button>
            );
          })}

          <div className="flex aspect-[1.12/0.85] items-center justify-center rounded-xl border border-dashed border-porto-btn/50 bg-background/35 text-center text-sm text-porto-muted">
            <span>
              +<br />
              more
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
