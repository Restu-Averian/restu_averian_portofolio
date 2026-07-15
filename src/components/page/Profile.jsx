import { memo } from "react";
import FotoSampul from "../../assets/foto-sampul-2.png";
import FotoProfileLight from "../../assets/foto-profile-light.png";
import FotoProfileDark from "../../assets/foto-profile-dark.png";
import { Icon } from "@iconify/react";
import { useIsDark } from "@/hooks/useTheme";
import { SOCIAL_LINKS } from "@/constants";
import { useTranslation } from "@/i18n";

const RESUME_URL = "/resume/Restu-Averian-Putra-Resume.pdf";
const CONTACT_LINK =
  SOCIAL_LINKS.find(({ label }) => label === "WhatsApp")?.href ||
  "mailto:hello@restuaverian.dev";
const FEATURED_SOCIALS = ["GitHub", "LinkedIn", "npm", "WhatsApp"];
const SOCIAL_ICON_OVERRIDES = {
  LinkedIn: "mdi:linkedin",
};

const Profile_ = () => {
  const isDark = useIsDark();
  const { t } = useTranslation();
  const socials = FEATURED_SOCIALS.map((label) =>
    SOCIAL_LINKS.find((link) => link.label === label),
  ).filter(Boolean);

  return (
    <section className="w-full px-4 md:px-10 mt-2">
      <div className="relative w-full">
        <div className="h-32 w-full overflow-hidden sm:h-40 md:h-56 rounded-4xl">
          <img
            src={FotoSampul}
            alt="Banner"
            className="h-full w-full object-cover object-[50%_56%]"
            loading="lazy"
          />
        </div>

        <div className="relative mx-auto -mt-16 max-w-[93%] md:-mt-20 lg:-mt-24">
          <div className="relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[2rem] border border-porto-border bg-background/95 p-6 text-center backdrop-blur md:p-8 md:text-left lg:grid-cols-[18rem_minmax(0,1fr)_21rem] lg:gap-10 lg:px-12 lg:py-12 dark:bg-background/95">
            <Icon
              icon="solar:stars-minimalistic-bold"
              className="absolute left-6 top-7 h-6 w-6 text-porto-gold md:left-10 md:top-12"
              aria-hidden="true"
            />

            <div className="relative z-10 mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-full border-[5px] border-porto-btn/70 bg-card shadow-[0_0_0_10px_rgba(217,172,69,0.12)] sm:h-48 sm:w-48 lg:h-64 lg:w-64">
              <img
                src={isDark ? FotoProfileDark : FotoProfileLight}
                alt="Restu Averian Putra"
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <div className="min-w-0 lg:border-r lg:border-porto-border lg:pr-10">
              <h1 className="mx-auto flex max-w-3xl items-center justify-center gap-2 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:mx-0 lg:justify-start lg:text-6xl">
                Restu Averian Putra
                <Icon
                  icon="solar:stars-minimalistic-bold"
                  className="hidden h-7 w-7 shrink-0 text-porto-gold sm:block"
                  aria-hidden="true"
                />
              </h1>
              <p className="mt-3 text-xl font-medium text-porto-btn sm:text-2xl">
                {t("ProfileRole", "Frontend Engineer")}
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-foreground/85 sm:text-lg lg:mx-0">
                {t(
                  "ProfileProfessionalSummary",
                  "I build scalable React applications, configurable internal tools, and performance-focused UI systems.",
                )}
              </p>
              <div className="mt-6 inline-flex max-w-full flex-wrap items-center justify-center gap-3 rounded-full border border-porto-border bg-card/70 px-4 py-3 text-sm font-medium text-foreground shadow-sm lg:justify-start">
                <span className="inline-flex items-center gap-2">
                  <Icon
                    icon="solar:map-point-linear"
                    className="h-5 w-5 text-foreground"
                    aria-hidden="true"
                  />
                  {t("Location", "Tangerang, Indonesia")}
                </span>
                <span className="hidden h-6 w-px bg-porto-border sm:block" />
                <span className="inline-flex items-center gap-2">
                  <Icon
                    icon="solar:case-round-linear"
                    className="h-5 w-5 text-foreground"
                    aria-hidden="true"
                  />
                  {t("ExperienceLabel", "3+ Years of Experience")}
                </span>
              </div>

              <div className="mt-7 flex justify-center lg:justify-start">
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
                    rounded-xl
                    bg-porto-btn text-porto-btn-text
                    px-7 py-4 text-base font-bold
                    transition-all
                    hover:-translate-y-0.5 hover:bg-porto-btn-hover hover:text-porto-btn-text
                    focus:outline-none focus:ring-2 focus:ring-porto-focus focus:ring-offset-2 focus:ring-offset-background
                    shadow-[0_10px_24px_rgba(232,160,143,0.24)]
                  "
                >
                  <Icon icon="mdi:open-in-new" className="h-5 w-5" />
                  {t("ViewResume", "View Resume")}
                </a>
              </div>
            </div>

            <aside className="flex flex-col gap-6 border-t border-porto-border pt-7 text-left lg:border-t-0 lg:pt-0">
              <div className="inline-flex items-center justify-center gap-3 rounded-full border border-porto-border bg-card/60 px-5 py-3 text-sm font-medium text-foreground sm:text-base">
                <span className="h-3 w-3 rounded-full bg-porto-success shadow-[0_0_16px_rgba(169,196,127,0.55)]" />
                {t("AvailableForWork", "Available for new opportunities")}
              </div>

              <a
                href={CONTACT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-porto-btn bg-transparent px-6 py-4 text-base font-bold text-porto-btn transition-all hover:-translate-y-0.5 hover:bg-porto-btn hover:text-porto-btn-text focus:outline-none focus:ring-2 focus:ring-porto-focus focus:ring-offset-2 focus:ring-offset-background"
              >
                <Icon icon="solar:letter-linear" className="h-6 w-6" />
                {t("LetsWorkTogether", "Let's Work Together")}
              </a>

              <div className="h-px bg-porto-divider" />

              <div>
                <p className="text-base font-medium text-foreground">
                  {t("FindMeOn", "Find me on:")}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  {socials.map(({ label, icon, href }) => (
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
                      bg-card/50
                      text-foreground
                      transition-all
                      hover:-translate-y-0.5
                      hover:border-porto-btn
                      hover:bg-porto-accent/40
                      hover:text-porto-btn
                      focus:outline-none focus:ring-2 focus:ring-porto-focus focus:ring-offset-2 focus:ring-offset-background
                      h-12 w-12
                      shadow-sm
                    "
                    >
                      <Icon
                        icon={SOCIAL_ICON_OVERRIDES[label] ?? icon}
                        className="h-6 w-6"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

const Profile = memo(Profile_);
export default Profile;
