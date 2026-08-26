import FotoProfileLight from "@/assets/foto-profile-light.webp";
import FotoProfileDark from "@/assets/foto-profile-dark.webp";
import { useIsDark } from "@/hooks/useTheme";

export const ProfileAvatar = () => {
  const isDark = useIsDark();
  return (
    <div className="h-24 w-24 md:h-28 md:w-28 lg:h-30 lg:w-30 overflow-hidden rounded-full border-4 border-background bg-card shadow-sm relative">
      <img
        src={isDark ? FotoProfileDark : FotoProfileLight}
        alt="Restu Averian Putra"
        className="h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
};
