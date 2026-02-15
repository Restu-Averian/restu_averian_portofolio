export const getRandNum = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const onScrollTarget = (element) => {
  if (element) {
    try {
      const navbarHeight = 80;
      const elementRect = element?.getBoundingClientRect();
      const scrollTarget = window.pageYOffset + elementRect.top - navbarHeight;

      window.scrollTo({
        top: scrollTarget,
        behavior: "smooth",
      });
    } catch {
      element?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }
};
