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
  {
    text: "+6282391365098",
    link: "https://api.whatsapp.com/send?phone=6282391365098&text=Hi!%F0%9F%91%8B%20Aku%20lihat%20portofolio%20kamu%20dan%20tertarik%20ngobrol%20soal%20project%20frontend%20web.%20Kalau%20kamu%20oke%2C%20kita%20bisa%20call%20bentar%20(%C2%B115%E2%80%9320%20menit)%20minggu%20ini.%20Biar%20aku%20bisa%20siapin%20gambaran%20solusi%20%26%20estimasi%2C%20boleh%20isi%20singkat%3A%201)%20Tujuan%20project%202)%20Fitur%20utama%203)%20Deadline%2Ftarget%20rilis",
    rotate: -5,
    icon: "mingcute:whatsapp-fill",
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
  {
    author: "Xinh Studio",
    link: "https://thenounproject.com/creator/xinhstudio/",
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

export const LIST_PROJECTS = [
  {
    id: 1,
    title: "Pustaka Pribadi",
    img: "https://res.cloudinary.com/dcvolkyfb/image/upload/v1655373065/Project-Screenshot/Vue/pustaka-pribadi-vue_jsx7zc.png",
    techStacks: [
      {
        label: "Javascript",
        icon: "ri:javascript-fill",
      },
    ],
  },
  {
    id: 2,
    title: "Winnowing Tools",
    img: "https://res.cloudinary.com/dcvolkyfb/image/upload/v1702825574/Project-Screenshot/React/fxxg1k0xydljdeq9xsza.png",
    techStacks: [
      {
        label: "React",
        icon: "mdi:react",
      },
      {
        label: "Ant Design",
        icon: "ant-design:ant-design-outlined",
      },
    ],
  },
];
