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
        <div className="h-32 w-full overflow-hidden sm:h-40 md:h-48 rounded-4xl">
          <img
            src={FotoSampul}
            alt="Banner"
            className="h-full w-full object-cover object-[50%_56%]"
            loading="lazy"
          />
        </div>

        <div className="relative mx-auto -mt-16 max-w-[93%] md:-mt-20 lg:-mt-20">
          <div className="relative flex flex-col items-center gap-8 rounded-4xl bg-porto-surface p-6 text-center md:p-8 md:text-left lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-10 border border-porto-border/50 shadow-sm">
            <div className="relative shrink-0">
              <Icon
                icon="solar:stars-minimalistic-bold"
                className="absolute -left-3 top-2 h-6 w-6 text-porto-gold"
                aria-hidden="true"
              />
              <Icon
                icon="solar:stars-minimalistic-bold"
                className="absolute -right-1 -top-1 h-5 w-5 text-porto-gold"
                aria-hidden="true"
              />
              <div className="relative z-10 mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-porto-accent bg-card sm:h-36 sm:w-36 lg:h-44 lg:w-44">
                <img
                  src={isDark ? FotoProfileDark : FotoProfileLight}
                  alt="Restu Averian Putra"
                  className="h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:mx-0 lg:text-5xl">
                Restu Averian Putra
              </h1>
              <div className="mt-2 flex items-center justify-center gap-2 lg:justify-start">
                <p className="text-lg font-medium text-porto-btn sm:text-xl">
                  {t("ProfileRole", "Frontend Engineer")}
                </p>
                <Icon
                  icon="solar:stars-minimalistic-bold"
                  className="h-5 w-5 text-porto-gold"
                  aria-hidden="true"
                />
              </div>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-foreground/85 lg:mx-0">
                {t(
                  "ProfileProfessionalSummary",
                  "I build scalable React applications, configurable internal tools, and performance-focused UI systems.",
                )}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-porto-border bg-transparent px-4 py-2 text-sm font-medium text-foreground">
                  <Icon
                    icon="solar:map-point-linear"
                    className="h-4 w-4 text-foreground"
                    aria-hidden="true"
                  />
                  {t("Location", "Tangerang, Indonesia")}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-porto-border bg-transparent px-4 py-2 text-sm font-medium text-foreground">
                  <Icon
                    icon="solar:case-round-linear"
                    className="h-4 w-4 text-foreground"
                    aria-hidden="true"
                  />
                  {t("ExperienceLabel", "3+ Years of Experience")}
                </span>
              </div>
            </div>

            <aside className="flex w-full shrink-0 flex-col gap-4 border-t border-porto-border pt-6 text-left lg:w-68 lg:border-l lg:border-t-0 lg:border-dashed lg:border-porto-border lg:pl-8 lg:pt-0">
              <div className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-transparent py-2.5 text-sm font-medium text-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-porto-success" />
                {t("AvailableForWork", "Available for new opportunities")}
              </div>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(
                  "OpenResumeInNewTab",
                  "Open Restu Averian Putra's resume in a new tab",
                )}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-porto-btn px-5 py-3 text-sm font-bold text-porto-btn-text transition-all hover:-translate-y-0.5 hover:bg-porto-btn-hover focus:outline-none focus:ring-2 focus:ring-porto-focus focus:ring-offset-2 focus:ring-offset-background"
              >
                <Icon icon="solar:export-linear" className="h-5 w-5" />
                {t("ViewResume", "View Resume")}
              </a>

              <div className="mt-1">
                <p className="text-xs font-medium text-foreground">
                  {t("FindMeOn", "Find me on:")}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {socials.map(({ label, icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl
                      border border-porto-border
                      bg-transparent
                      text-foreground
                      transition-all
                      hover:-translate-y-0.5
                      hover:border-porto-btn
                      hover:text-porto-btn
                      focus:outline-none focus:ring-2 focus:ring-porto-focus focus:ring-offset-2 focus:ring-offset-background
                    "
                    >
                      <Icon
                        icon={SOCIAL_ICON_OVERRIDES[label] ?? icon}
                        className="h-5 w-5"
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
