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
    <section className="w-full px-4 md:px-10 mt-1">
      <div className="relative mx-auto w-full max-w-375">
        {/* ── BANNER ── */}
        <div className="h-28 w-full overflow-hidden rounded-[1.75rem] sm:h-36 md:h-44 lg:h-48">
          <img
            src={FotoSampul}
            alt="Banner"
            className="h-full w-full object-cover object-[50%_56%]"
            loading="lazy"
          />
        </div>

        {/* ── PROFILE ROW ── */}
        <div className="relative mx-auto -mt-10 max-w-[94%] md:-mt-12 lg:max-w-[84%]">
          <div className="bg-card/95 rounded-3xl p-4 shadow-sm border border-porto-border/80 backdrop-blur flex flex-col md:flex-row items-center md:items-center text-center md:text-left relative gap-4 md:p-5 lg:gap-8">
            {/* Left: Avatar */}
            <div className="relative shrink-0 -mt-10 md:mt-0">
              <div className="h-24 w-24 md:h-28 md:w-28 lg:h-30 lg:w-30 overflow-hidden rounded-full border-4 border-background bg-card shadow-sm relative">
                <img
                  src={isDark ? FotoProfileDark : FotoProfileLight}
                  alt="Restu Averian Putra"
                  className="h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>

            {/* Middle: Text Info */}
            <div className="flex-1 min-w-0 flex flex-col items-center md:items-start">
              <h1 className="text-2xl sm:text-3xl lg:text-[2.35rem] lg:leading-tight font-bold text-foreground">
                Restu Averian Putra
              </h1>
              <p className="mt-1 flex items-center gap-1.5 text-base lg:text-lg font-semibold text-porto-btn">
                {t("ProfileRole", "Frontend Engineer")}
                <Icon
                  icon="solar:stars-minimalistic-bold"
                  className="text-porto-accent h-4 w-4"
                />
              </p>

              <p className="mt-2 text-sm text-muted-foreground max-w-md leading-relaxed">
                {t(
                  "PortfolioTagline",
                  "I build scalable React applications, configurable internal tools, and performance-focused UI systems.",
                )}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-2">
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
            <div className="hidden md:block w-px self-stretch bg-porto-divider" />

            {/* Right: Actions */}
            <div className="shrink-0 flex w-full flex-col items-center gap-3 md:w-64 md:items-stretch">
              <div className="inline-flex items-center gap-2 rounded-lg border border-porto-border bg-transparent px-3 py-2 text-xs font-medium text-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
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
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-porto-btn text-porto-btn-text px-6 py-2.5 text-sm font-bold shadow-sm transition-colors hover:bg-porto-btn-hover"
              >
                <Icon icon="solar:export-linear" className="h-5 w-5" />
                {t("ViewResume", "View Resume")}
              </a>

              <div className="flex flex-col items-center gap-2 w-full md:items-start">
                <span className="text-xs font-medium text-foreground">
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
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-porto-border bg-transparent text-foreground transition-colors hover:border-porto-btn hover:text-porto-btn"
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
