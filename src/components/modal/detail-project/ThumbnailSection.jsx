import { memo, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const ThumbnailSection_ = ({ images = [] }) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setActiveImage(images?.[0]);
  }, [JSON.stringify(images)]);

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="rounded-4xl border-[3px] border-porto-border bg-muted p-3 sm:p-2">
        <div className="relative overflow-hidden rounded-[1.75rem] shadow-sm">
          <img
            src={activeImage}
            alt="Project thumbnail"
            className="w-full object-cover object-center
                xl:aspect-[1.1/0.92] h-auto
                md:aspect-[0.8/0.3]
                lg:aspect-3/1 
                "
          />
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="absolute top-4 right-4 z-10 flex cursor-pointer items-center gap-2 rounded-full border border-porto-border bg-popover/95 px-4 py-2 text-sm font-semibold text-porto-text shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all hover:border-porto-btn hover:bg-porto-accent/40 focus:outline-none focus:ring-2 focus:ring-porto-focus"
          >
            <Icon icon="lucide:maximize" className="h-4 w-4" />
            Expand +
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {images?.slice(0, 3).map((img, idx) => {
          const active = activeImage === img;

          return (
            <button
              key={`${img}-${idx}`}
              type="button"
              onClick={() => setActiveImage(img)}
              className={[
                "overflow-hidden rounded-3xl border-[3px] bg-muted p-1 text-left transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-porto-focus ",
                active
                  ? "border-porto-btn shadow-sm opacity-100"
                  : "border-transparent opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:border-porto-border",
              ].join(" ")}
            >
              <img
                src={img}
                alt={`Project thumbnail ${idx + 1}`}
                className="xl:aspect-[1.1/0.92] h-auto
                md:aspect-2/1
                lg:aspect-3/1  w-full rounded-2xl object-cover"
              />
            </button>
          );
        })}
      </div>

      <Dialog open={isExpanded} onOpenChange={setIsExpanded}>
        <DialogContent
          showCloseButton={false}
          overlayClassName="backdrop-blur-2xl"
          className="h-fit! w-fit! max-h-[95vh]!  max-w-[95vw]! border-none! bg-transparent! p-0! shadow-none! ring-0! rounded-none!"
          onClick={() => setIsExpanded(false)}
        >
          <DialogTitle className="sr-only">Expanded Image</DialogTitle>
          <img
            src={activeImage}
            alt="Expanded thumbnail"
            className="max-h-[95vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

const ThumbnailSection = memo(ThumbnailSection_);
export default ThumbnailSection;
