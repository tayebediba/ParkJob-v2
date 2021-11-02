export const dateToPersian = (gregorianDate) =>
  new Date(gregorianDate).toLocaleDateString("fa-IR");

export const scrollHandler = (x, y) => window.scrollTo(x, y);
