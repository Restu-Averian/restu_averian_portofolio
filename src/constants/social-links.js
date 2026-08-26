import { translate } from "@/i18n";

export const buildWhatsAppUrl = (language) => {
  const message = translate(language, "WhatsAppPrefilledMessage");
  return `https://api.whatsapp.com/send?phone=6282391365098&text=${encodeURIComponent(message)}`;
};

export const getSocialLinks = (language) => [
  {
    label: "Instagram",
    icon: "mdi:instagram",
    href: "https://www.instagram.com/restu.averian.putra/",
  },
  {
    label: "LinkedIn",
    icon: "circum:linkedin",
    href: "https://www.linkedin.com/in/restu-averian-putra/",
  },
  {
    label: "GitHub",
    icon: "mdi:github",
    href: "https://github.com/Restu-Averian/",
  },
  {
    label: "npm",
    icon: "gg:npm",
    href: "https://www.npmjs.com/~restu_averian_putra",
  },
  {
    label: "WhatsApp",
    icon: "mdi:whatsapp",
    href: buildWhatsAppUrl(language),
  },
];
