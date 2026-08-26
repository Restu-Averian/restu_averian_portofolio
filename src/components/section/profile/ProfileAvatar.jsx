import { useIsDark } from "@/hooks/useTheme";

export const ProfileAvatar = () => {
  const isDark = useIsDark();
  return (
    <div className="h-24 w-24 md:h-28 md:w-28 lg:h-30 lg:w-30 overflow-hidden rounded-full border-4 border-background bg-card shadow-sm relative flex items-center justify-center">
      <img
        src={isDark ? "/logo-dark.webp" : "/logo.webp"}
        alt="Restu Averian Putra logo"
        className="h-full w-full object-contain p-3"
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
};
