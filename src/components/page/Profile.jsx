import { memo } from "react";
import FotoSampul from "../../assets/foto-sampul-2.png";
import FotoProfileLight from "../../assets/foto-profile-light.png";
import FotoProfileDark from "../../assets/foto-profile-dark.png";
import { Icon } from "@iconify/react";
import { useIsDark } from "@/hooks/useTheme";
import { SOCIAL_LINKS } from "@/constants";
import { useTranslation } from "@/i18n";

const RESUME_URL = "/resume/Restu-Averian-Putra-Resume.pdf";

const Profile_ = () => {
  const isDark = useIsDark();
  const { t } = useTranslation();
  return (
    <section className="w-full px-4 md:px-10 mt-2">
      <div className="relative w-full">
        {/* ── BANNER ── */}
        <div className="h-32 w-full overflow-hidden sm:h-40 md:h-56 rounded-4xl">
          <img
            src={FotoSampul}
            alt="Banner"
            className="h-full w-full object-cover object-[50%_56%]"
            loading="lazy"
          />
        </div>

        {/* ── PROFILE ROW ── */}
        <div className="relative mx-auto -mt-12 md:-mt-16 max-w-[95%] lg:max-w-[90%]">
          <div className="relative grid grid-cols-1 items-center justify-items-center gap-4 rounded-4xl border border-porto-border bg-background p-6 pb-7 text-center shadow-sm md:grid-cols-[auto_minmax(0,1fr)] md:justify-items-start md:gap-x-8 md:gap-y-5 md:px-9 md:py-8 md:text-left lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-x-10 lg:px-12 lg:py-8">
            {/* Sparkle Decorations */}
            <Icon
              icon="solar:stars-minimalistic-bold"
              className="absolute top-4 left-4 text-porto-gold/60 h-5 w-5"
            />

            {/* Avatar */}
            <div
              className="
              -mt-12 shrink-0
              h-24 w-24
              sm:-mt-16 sm:h-28 sm:w-28
              md:-mt-14 md:h-36 md:w-36
              lg:h-40 lg:w-40
              overflow-hidden rounded-full
              border-[6px] border-card
              bg-background
              shadow-sm
              z-10
              relative
            "
            >
              <img
                src={isDark ? FotoProfileDark : FotoProfileLight}
                alt="Restu Averian Putra"
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            {/* Nama + subtitle */}
            <div className="mt-2 min-w-0 md:mt-0 md:w-full">
              <h1 className="text-2xl font-semibold text-foreground sm:text-4xl flex items-center justify-center md:justify-start gap-2">
                Restu Averian Putra
                <Icon
                  icon="solar:stars-minimalistic-bold"
                  className="text-porto-gold h-5 w-5 md:h-7 md:w-7"
                />
              </h1>
              <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground sm:text-base md:mx-0">
                {t(
                  "ProfileProfessionalSummary",
                  "Frontend Engineer building scalable React applications, configurable internal tools, and performance-critical UI systems.",
                )}
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Icon icon="solar:map-point-linear" className="h-4 w-4" />
                  {t("Location", "Tangerang, Indonesia")}
                </span>
                <span className="inline-flex rounded-full bg-muted px-2.5 py-1 font-medium text-foreground">
                  {t("ExperienceLabel", "3+ Years of Experience")}
                </span>
              </div>

              <div className="mt-4 flex justify-center md:justify-start">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(
                    "OpenResumeInNewTab",
                    "Open Restu Averian Putra's resume in a new tab",
                  )}
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-full
                    bg-porto-btn text-porto-btn-text
                    px-5 py-2 text-sm font-medium
                    transition-all
                    hover:scale-105 hover:bg-porto-btn-hover hover:text-porto-btn-text
                    focus:outline-none focus:ring-2 focus:ring-porto-focus focus:ring-offset-2 focus:ring-offset-background
                    shadow-sm
                  "
                >
                  <Icon icon="mdi:open-in-new" className="h-4 w-4" />
                  {t("ViewResume", "View Resume")}
                </a>
              </div>
            </div>

            {/* Find me on */}
            <div className="mt-2 flex flex-col items-center gap-2 md:col-start-2 md:mt-0 md:items-start md:justify-self-start lg:col-start-auto lg:self-center lg:justify-self-end">
              <span className="text-sm font-medium text-foreground">
                {t("FindMeOn", "Find me on:")}
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                {SOCIAL_LINKS.map(({ label, icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center justify-center
                      rounded-full
                      border border-porto-border
                      bg-background
                      text-foreground
                      transition-all
                      hover:scale-105
                      hover:border-porto-btn
                      hover:bg-porto-accent/40
                      hover:text-porto-btn
                      focus:outline-none focus:ring-2 focus:ring-porto-focus focus:ring-offset-2 focus:ring-offset-background
                      p-2.5
                      shadow-sm
                    "
                  >
                    <Icon icon={icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Profile = memo(Profile_);
export default Profile;
