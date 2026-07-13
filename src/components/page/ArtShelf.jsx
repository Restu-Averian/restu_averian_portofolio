import { Icon } from "@iconify/react";
import { memo, useRef, useState } from "react";
import { THUMB, THUMB2 } from "@/constants";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const ArtShelf_ = () => {
  const artScrollRef = useRef(null);
  const [expandedImg, setExpandedImg] = useState(null);

  const scroll = (ref, dir) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="rounded-3xl p-6 relative">
      <div className="flex flex-col items-start md:flex-row md:items-center gap-1 md:gap-3 mb-4">
        <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
          <Icon
            icon="solar:stars-minimalistic-bold"
            className="text-yellow-400 h-5 w-5"
          />
          Art Shelf
        </h2>
        <span className="text-xs text-muted-foreground">
          Little visual things I love making and collecting.
        </span>
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll(artScrollRef, "left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-popover/90 backdrop-blur-sm border border-porto-border shadow-sm text-foreground hover:border-porto-btn hover:text-porto-btn transition-all active:scale-95 cursor-pointer"
      >
        <Icon icon="lucide:chevron-left" />
      </button>
      <button
        onClick={() => scroll(artScrollRef, "right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-popover/90 backdrop-blur-sm border border-porto-border shadow-sm text-foreground hover:border-porto-btn hover:text-porto-btn transition-all active:scale-95 cursor-pointer"
      >
        <Icon icon="lucide:chevron-right" />
      </button>

      <div
        ref={artScrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-2"
      >
        {/* Using dummy images for Art Shelf since assets are not provided */}
        {[THUMB, THUMB2, THUMB, THUMB2].map((img, i) => (
          <div
            key={i}
            onClick={() => setExpandedImg(img)}
            className="shrink-0 w-64 h-40 snap-center rounded-2xl overflow-hidden border border-porto-border cursor-pointer"
          >
            <img
              src={img}
              alt={`Art ${i}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Expanded Image Modal */}
      <Dialog
        open={!!expandedImg}
        onOpenChange={(open) => !open && setExpandedImg(null)}
      >
        <DialogContent
          className="p-2 sm:p-2 bg-transparent border-none shadow-none w-fit sm:max-w-fit xl:max-w-fit sm:h-fit xl:h-fit"
          showCloseButton={false}
        >
          {expandedImg && (
            <img
              src={expandedImg}
              alt="Expanded Art"
              className="max-w-[90vw] max-h-[90vh] rounded-xl object-contain shadow-2xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const ArtShelf = memo(ArtShelf_);
export default ArtShelf;
