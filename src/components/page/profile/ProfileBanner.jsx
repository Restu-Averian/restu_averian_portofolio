import FotoSampul from "@/assets/foto-sampul.png";
import FotoSampulDark from "@/assets/foto-sampul-dark.png";
import { useIsDark } from "@/hooks/useTheme";

export const ProfileBanner = () => {
  const isDark = useIsDark();
  return (
    <div className="relative h-28 w-full overflow-hidden sm:h-36 md:h-44 lg:h-62">
      <img
        src={FotoSampul}
        alt="Banner"
        className={`absolute inset-0 h-full w-full object-cover object-[50%_35%] transition-opacity duration-500 ease-in-out ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
        loading="lazy"
      />
      <img
        src={FotoSampulDark}
        alt="Banner Dark"
        className={`absolute inset-0 h-full w-full object-cover object-[50%_62%] transition-opacity duration-500 ease-in-out ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
      />
    </div>
  );
};
