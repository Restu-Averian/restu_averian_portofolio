import { memo } from "react";
import FotoProfile from "../../assets/foto-profile.jpg";
import FotoSampul from "../../assets/foto-sampul-2.png";
import Mascott from "@/assets/icons/Mascott";
import { Icon } from "@iconify/react";
import useIsMobile from "@/hooks/useIsMobile";
import { SOCIAL_LINKS } from "@/constants";

const Profile_ = () => {
  const isMobile = useIsMobile();
  return (
    <section className="w-full">
      {/* ── BANNER ── */}
      <div className="h-14 w-full overflow-hidden sm:h-14 md:h-32">
        <img
          src={FotoSampul}
          alt="Banner"
          className="h-full w-full object-cover object-[50%_56%]"
          loading="lazy"
        />
      </div>

      {/* ── PROFILE ROW ── */}
      <div className="relative px-4 sm:px-8 md:px-28">
        {/* Mobile: center layout */}
        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left">
          {/* Avatar */}
          <div
            className="
            -mt-12 shrink-0
            h-24 w-24
            sm:-mt-14 sm:h-24 sm:w-24
            md:-mt-16 md:h-48 md:w-48
            overflow-hidden rounded-full
            border-5 border-border
            bg-background
            shadow-md
            z-10
          "
          >
            <img
              src={FotoProfile}
              alt="Profile-Photo"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Nama + subtitle */}
          <div className="mt-3 md:mt-0 md:ml-4 md:pb-4">
            <h1 className="text-2xl font-semibold text-foreground sm:text-5xl">
              Resu Ave
            </h1>
            <p className="mt-1 text-sm text-muted-foreground sm:text-2xl">
              Building high performance frontend interfaces
            </p>
          </div>

          {/* Find me on — desktop: push ke kanan */}
          <div className="mt-4 flex flex-col items-center gap-2 md:ml-auto md:mt-0 md:items-start md:pb-4">
            <span className="text-lg sm:text-2xl font-normal text-foreground">
              Find me on:
            </span>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
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
                    border-3 border-porto-border
                    bg-background
                    text-foreground
                    transition-all
                    hover:scale-105
                    hover:border-porto-btn
                    hover:text-porto-btn
                    p-2
                  "
                >
                  <Icon icon={icon} className="h-5 w-5 md:h-7 md:w-7" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── STRIPE DIVIDER ── */}
      <div className="flex items-center gap-0 mt-4 md:mt-0">
        <div
          className="flex-1 rounded-l-full bg-repeating-pattern opacity-40 h-1.25"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--border) 0px, var(--border) 12px, transparent 12px, transparent 20px)",
          }}
        />
        <div className="mx-3 shrink-0">
          <Mascott size={isMobile ? "4.5em" : "6em"} />
        </div>
        <div
          className="flex-1 rounded-r-full bg-repeating-pattern opacity-40 h-1.25"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--border) 0px, var(--border) 12px, transparent 12px, transparent 20px)",
          }}
        />
      </div>
    </section>
  );
};

const Profile = memo(Profile_);
export default Profile;
