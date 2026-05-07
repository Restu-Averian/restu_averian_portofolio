import { memo } from "react";
import FotoProfile from "../../assets/foto-profile.jpg";
import FotoSampul from "../../assets/foto-sampul-2.png";
import { Home } from "lucide-react";
import Mascott from "@/assets/icons/Mascott";
import { Icon } from "@iconify/react";

const SOCIAL_LINKS = [
  { label: "Instagram", icon: "mdi:instagram", href: "#" },
  { label: "LinkedIn", icon: "line-md:linkedin", href: "#" },
  { label: "GitHub", icon: "mdi:instagram", href: "#" },
  { label: "npm", icon: "mdi:instagram", href: "#" },
  { label: "WhatsApp", icon: "mdi:instagram", href: "#" },
];
const Profile_ = () => {
  return (
    <section className="w-full bg-background">
      {/* ── BANNER ── */}
      <div className="relative h-36 w-full overflow-hidden">
        <img
          src={FotoSampul}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[50%_56%]"
        />
      </div>

      {/* ── PROFILE ROW ──
          Avatar overlap: translateY(-50%) dari bottom banner
          Padding kiri sama kayak konten utama (px-10)
      ── */}
      <div className="relative flex items-end justify-between px-32 pb-0">
        {/* Kiri: Avatar + Nama */}
        <div className="flex items-end gap-5">
          {/* Avatar — overlap naik 50% dari tingginya sendiri = -64px */}
          <div className="relative shrink-0 -mt-16">
            <div
              className="h-48 w-48 overflow-hidden rounded-full bg-card"
              style={{
                border: "5px solid var(--border)",
              }}
            >
              <img
                src={FotoProfile}
                alt="Resu-Ave-Profile-Pic"
                className="h-full w-full object-cover object-top "
              />
            </div>
          </div>

          {/* Nama + subtitle — pb-4 biar ada jarak bawah sebelum divider */}
          <div className="pb-5">
            <h1 className="text-4xl font-semibold text-foreground">Resu Ave</h1>
            <p className="mt-0.5 text-xl text-muted-foreground">
              Building high performance frontend interfaces
            </p>
          </div>
        </div>

        {/* Kanan: Find me on */}
        <div className="flex flex-col gap-2.5 pb-5">
          <p className="text-2xl">Find me on:</p>
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex p-3 items-center justify-center rounded-full border-2 border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Icon icon={icon} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── STRIPE DIVIDER ── */}
      <div className="flex items-center gap-0 px-0">
        {/*
          Stripe kiri kanan: repeating dashes warna border
          Icon tengah: custom lu ganti nanti (sekarang pakai emoji)
        */}
        <div
          className="h-1.25 flex-1"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--border) 0px, var(--border) 12px, transparent 12px, transparent 20px)",
          }}
        />

        <Mascott />

        <div
          className="h-1.25 flex-1"
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
