import FallbackProjectThumbnail from "./assets/bg-err-img.webp";

export const LIST_SOCIAL_CONNECTIONS = [
  {
    text: "Restu-Averian",
    link: "https://github.com/Restu-Averian",
    rotate: -6,
    icon: "mdi:github",
  },
  {
    text: "restu-averian-putra",
    link: "https://www.linkedin.com/in/restu-averian-putra/",
    rotate: 6,
    icon: "mingcute:linkedin-fill",
  },
  {
    text: "restu_averian_putra",
    link: "https://www.npmjs.com/~restu_averian_putra",
    rotate: 0,
    icon: "ri:npmjs-fill",
  },
];

export const CREDITS = [
  {
    author: "Denis Sazhin",
    link: "https://thenounproject.com/creator/iconka/",
  },
  {
    author: "inmyheart",
    link: "https://thenounproject.com/creator/inmyheart/",
  },
  {
    author: "Teewara soontorn",
    link: "https://thenounproject.com/creator/Puckung/",
  },
  {
    author: "Kim Sun Young",
    link: "https://thenounproject.com/creator/hookeeak/",
  },
];

export const INSPIRED_BY = [
  {
    author: "Slides Go",
    link: "https://slidesgo.com/theme/cat-illustrator-portfolio-infographics",
  },
];

export const TECH_STACK_ITEM = [
  {
    title: "React",
    icon: "mdi:react",
    width: {
      xs: 72,
      default: 150,
    },
    position: {
      xs: {
        top: "calc(50% - 8em)",
        left: "calc(50% - 11em)",
      },
      default: {
        top: 0,
        left: "calc(50% - 25em)",
      },
    },
  },
  {
    title: "Ant Design",
    icon: "simple-icons:antdesign",
    width: {
      xs: 36,
      default: 80,
    },
    position: {
      xs: {
        top: "calc(50% - 6em)",
        right: "calc(50% - 10em)",
      },
      default: {
        top: "calc(50% - 11em)",
        right: "calc(50% - 23em)",
      },
    },
  },
  {
    title: "Javascript",
    icon: "ic:round-javascript",
    width: {
      xs: 32,
      default: 63,
    },
    position: {
      xs: {
        top: "50%",
        left: 0,
      },
      default: {
        top: "50%",
        left: "calc(50% - 28em)",
      },
    },
  },
];

export const FALLBACK_SRC_IMAGE = FallbackProjectThumbnail;
