import { memo } from "react";
import FotoSampul from "../../assets/foto-sampul-2.png";
import FotoProfileLight from "../../assets/foto-profile-light.png";
import FotoProfileDark from "../../assets/foto-profile-dark.png";
import { Icon } from "@iconify/react";
import { useIsDark } from "@/hooks/useTheme";
import { SOCIAL_LINKS } from "@/constants";
import { useTranslation } from "@/i18n";

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
          <div className="bg-background rounded-4xl p-6 md:p-8 shadow-sm border border-porto-border flex flex-col md:flex-row items-center md:items-center text-center md:text-left relative gap-6 lg:gap-10">
            {/* Left: Avatar */}
            <div className="relative shrink-0 -mt-12 md:mt-0">
              <Icon
                icon="solar:stars-minimalistic-bold"
                className="absolute -top-2 -left-2 text-porto-gold h-5 w-5"
              />
              <Icon
                icon="solar:stars-minimalistic-bold"
                className="absolute top-4 -right-4 text-porto-gold h-4 w-4"
              />
              <div className="h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 overflow-hidden rounded-full border-4 border-background bg-card shadow-sm relative">
                <img
                  src={isDark ? FotoProfileDark : FotoProfileLight}
                  alt="Restu Averian Putra"
                  className="h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <button
                className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full border border-porto-border bg-background text-muted-foreground shadow-sm hover:text-foreground transition-colors"
                aria-label="Edit Profile"
              >
                <Icon icon="solar:pen-linear" className="h-4 w-4" />
              </button>
            </div>

            {/* Middle: Text Info */}
            <div className="flex-1 min-w-0 flex flex-col items-center md:items-start">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                Restu Averian Putra
              </h1>
              <p className="mt-1.5 flex items-center gap-1.5 text-base lg:text-lg font-semibold text-porto-btn">
                {t("ProfileRole", "Frontend Engineer")}
                <Icon
                  icon="solar:stars-minimalistic-bold"
                  className="text-porto-gold h-5 w-5"
                />
              </p>

              <p className="mt-3 text-sm lg:text-base text-muted-foreground max-w-md leading-relaxed">
                {t(
                  "PortfolioTagline",
                  "I build scalable React applications, configurable internal tools, and performance-focused UI systems.",
                )}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-porto-border bg-transparent px-3 py-1.5 text-xs font-medium text-foreground">
                  <Icon icon="solar:map-point-linear" className="h-4 w-4" />
                  {t("Location", "Tangerang, Indonesia")}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-porto-border bg-transparent px-3 py-1.5 text-xs font-medium text-foreground">
                  <Icon icon="solar:case-round-linear" className="h-4 w-4" />
                  {t("ExperienceLabel", "3+ Years of Experience")}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch border-l border-dashed border-porto-btn/40" />

            {/* Right: Actions */}
            <div className="shrink-0 flex flex-col items-center md:items-start gap-4">
              <div className="inline-flex items-center gap-2 rounded-lg border border-porto-border bg-transparent px-3 py-2 text-xs font-medium text-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                {t("AvailableForWork", "Available for new opportunities")}
              </div>

              <a
                href="/resume/Restu-Averian-Putra-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(
                  "OpenResumeInNewTab",
                  "Open Restu Averian Putra's resume in a new tab",
                )}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-porto-btn text-porto-btn-text px-6 py-2.5 text-sm font-bold shadow-sm transition-transform hover:scale-105 hover:opacity-90"
              >
                <Icon icon="solar:export-linear" className="h-5 w-5" />
                {t("ViewResume", "View Resume")}
              </a>

              <div className="mt-2 flex flex-col items-center md:items-start gap-2 w-full">
                <span className="text-xs font-medium text-foreground">
                  {t("FindMeOn", "Find me on:")}
                </span>
                <div className="flex items-center gap-2">
                  {SOCIAL_LINKS.map(({ label, icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-porto-border bg-transparent text-foreground transition-colors hover:border-porto-btn hover:text-porto-btn"
                    >
                      <Icon icon={icon} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
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
