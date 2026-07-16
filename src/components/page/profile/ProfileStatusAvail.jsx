import { useTranslation } from "@/i18n";

export const ProfileStatusAvail = () => {
  const { t } = useTranslation();
  return (
    <div className="inline-flex items-center gap-1.5 bg-transparent px-2 py-0.5 text-[11px] sm:text-xs font-medium text-foreground">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      {t("AvailableForWork", "Available for new opportunities")}
    </div>
  );
};
