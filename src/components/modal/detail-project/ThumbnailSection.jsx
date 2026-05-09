import { memo, useState } from "react";

const ThumbnailSection_ = ({ images = [] }) => {
  const safeImages = images?.length
    ? images
    : [FALLBACK_IMG, FALLBACK_IMG, FALLBACK_IMG];

  const [activeImage, setActiveImage] = useState(safeImages[0]);

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="rounded-4xl border-[3px] border-porto-btn/50 bg-[#ead8c8] p-8">
        <div className="overflow-hidden rounded-[1.75rem] shadow-sm">
          <img
            src={activeImage}
            alt="Project thumbnail"
            className="aspect-[1.1/0.92] w-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {safeImages?.slice(0, 3).map((img, idx) => {
          const active = activeImage === img;

          return (
            <button
              key={`${img}-${idx}`}
              type="button"
              onClick={() => setActiveImage(img)}
              className={[
                "overflow-hidden rounded-3xl border-[3px] bg-[#ead8c8] p-4 text-left transition-all duration-200 cursor-pointer",
                active
                  ? "border-porto-btn/70 shadow-[0_8px_24px_rgba(190,145,156,0.15)]"
                  : "border-porto-btn/40 hover:border-porto-btn/70",
              ].join(" ")}
            >
              <img
                src={img}
                alt={`Project thumbnail ${idx + 1}`}
                className="aspect-[1.1/0.92] w-full rounded-2xl object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

const ThumbnailSection = memo(ThumbnailSection_);
export default ThumbnailSection;
