import { Icon } from "@iconify/react";
import { useTranslation } from "@/i18n";

export default function ProjectCardTagFeatured({ isFeatured }) {
  const { t } = useTranslation();

  if (!isFeatured) return null;

  return (
    <span className="absolute left-2 top-2 z-10 inline-flex items-center gap-1 rounded-md bg-porto-btn px-2 py-1 text-[10px] font-bold text-porto-btn-text shadow-sm">
      <Icon icon="solar:star-bold" className="h-3 w-3" />
      {t("FeaturedProjectLabel", "Featured")}
    </span>
  );
}
