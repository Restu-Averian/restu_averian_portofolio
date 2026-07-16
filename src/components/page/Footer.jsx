import { memo } from "react";
import MascottSticker from "@/assets/work-experiences/mascott-sticker.webp";
import { Icon } from "@iconify/react";
import { useTranslation } from "@/i18n";

const Footer_ = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full px-4 pb-6 md:px-10 lg:shrink-0 lg:pb-3">
      <div className="bg-card rounded-full px-4 md:px-6 py-3 lg:py-2.5 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 relative">
        {/* Left Side: Avatar + Text */}
        <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto text-center md:text-left">
          <div className="w-10 h-10 bg-popover rounded-full flex items-center justify-center shrink-0 border-2 border-card shadow-sm overflow-hidden">
            <img
              src={MascottSticker}
              alt="Mascot"
              className="w-[120%] h-[120%] object-contain mt-1"
              loading="lazy"
            />
          </div>
          <p className="text-xs md:text-sm font-medium text-foreground flex items-center justify-center gap-1">
            {t("ThanksForStoppingBy", "Thanks for stopping by! Let's build beautiful, cozy things together.")}
            <Icon
              icon="solar:stars-minimalistic-bold"
              className="text-yellow-500 h-4 w-4"
            />
          </p>
        </div>

        {/* Center: Email */}
        <a
          href="mailto:restuaverianputra123@gmail.com"
          className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-foreground hover:text-porto-btn transition-colors md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          <Icon icon="solar:letter-linear" className="h-4 w-4" />
          restuaverianputra123@gmail.com
        </a>

        {/* Right Side: Copyright */}
        <div className="text-xs md:text-sm font-medium text-foreground w-full md:w-auto text-center md:text-right">
          {t("Copyright", "© {{year}} Restu Averian Putra. All rights reserved.", { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
};

const Footer = memo(Footer_);
export default Footer;
