import githubIcon from "./assets/home/icon-github.webp";

export const DUMMY_PROJECTS_SELECTED_WORKS = [
  {
    id: 1,
    title: "Some title in Project 1",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, nesciunt non, ipsam quia assumenda porro rerum
                    doloribus temporibus autem dolorem aspernatur, aliquam laborum
                    quos impedit. Autem quaerat porro quo accusamus?`,
    thumbnail:
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    level: 1,
  },
  {
    id: 2,
    title: "Some title in Project 2",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, nesciunt non, ipsam quia assumenda porro rerum
                    doloribus temporibus autem dolorem aspernatur, aliquam laborum
                    quos impedit. Autem quaerat porro quo accusamus?`,
    thumbnail:
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    level: 2,
  },
  {
    id: 3,
    title: "Some title in Project 3",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, nesciunt non, ipsam quia assumenda porro rerum
                    doloribus temporibus autem dolorem aspernatur, aliquam laborum
                    quos impedit. Autem quaerat porro quo accusamus?`,
    thumbnail:
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    level: 3,
  },
];

export const DUMMY_PROJECTS_ALL_PROJECTS = Array?.from({
  length: 15,
})?.map((_, idx) => {
  return {
    id: idx,
    title: `Some title in Project 3-${idx + 1}`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, nesciunt non, ipsam quia assumenda porro rerum
                    doloribus temporibus autem dolorem aspernatur, aliquam laborum
                    quos impedit. Autem quaerat porro quo accusamus?`,
    thumbnail:
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    level: 3,
  };
});

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
];

export const INSPIRED_BY = [
  {
    author: "Slides Go",
    link: "https://slidesgo.com/theme/cat-illustrator-portfolio-infographics",
  },
];
