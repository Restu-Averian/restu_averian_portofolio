import { useState, useEffect } from "react";
import { Box } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n";

export const ProjectDetailImages = ({ images = [], title }) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const { t } = useTranslation();

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  return (
    <aside className="flex min-h-0 w-full min-w-0 flex-col rounded-[1.45rem] border border-porto-border/60 bg-porto-surface/50 p-6">
      <div className="mb-4 flex items-center gap-2 text-[15px] font-medium text-porto-text">
        <Box className="h-4.5 w-4.5 text-porto-btn" />
        {t("ProductPreview", "Product Preview")}
      </div>

      <div className="grid min-h-0 flex-1 content-start gap-5">
        <div className="aspect-[1.35/0.86] w-114.75 max-w-full overflow-hidden rounded-[1.35rem] bg-background/90 p-4 shadow-[0_18px_44px_rgba(0,0,0,0.18)]">
          <img
            src={activeImage}
            alt={t("ProjectPreviewAlt", "{{title}} preview", {
              title: title || t("Project", "Project"),
            })}
            className="h-full w-full rounded-xl object-cover object-center"
          />
        </div>

        <div className="flex shrink-0 gap-4 overflow-x-auto porto-scrollbar pb-2">
          {images?.map((image, index) => {
            const active = activeImage === image;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveImage(image)}
                className={cn(
                  "w-[calc((100%-2rem)/3)] shrink-0 aspect-[1.28/1] overflow-hidden rounded-xl border bg-background/80 p-1 transition cursor-pointer",
                  active
                    ? "border-porto-btn shadow-[0_0_0_2px_rgba(210,166,108,0.2)]"
                    : "border-porto-border/60 opacity-65 hover:opacity-100",
                )}
              >
                <img
                  src={image}
                  alt={t(
                    "ProjectPreviewAltNumber",
                    "{{title}} preview {{number}}",
                    {
                      title: title || t("Project", "Project"),
                      number: index + 1,
                    },
                  )}
                  className="h-full w-full rounded-lg object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
