import { useTranslation } from "@/i18n";

export const MobileCarouselDots = ({
  scrollSnaps,
  selectedIndex,
  scrollTo,
}) => {
  const { t } = useTranslation();

  if (scrollSnaps.length <= 1) return null;

  return (
    <div className="mt-2 mb-1 flex items-center justify-center gap-2 lg:hidden">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`${t("GoToSlide", "Go to slide")} ${index + 1}`}
          className={`cursor-pointer h-1.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-porto-btn ${
            index === selectedIndex
              ? "w-4 bg-porto-accent"
              : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
          }`}
          onClick={() => scrollTo(index)}
        />
      ))}
    </div>
  );
};
