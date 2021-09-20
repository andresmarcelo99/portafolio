export const scrollTo = (section: string) => {
  const elementToView = document.getElementById(section);
  if (elementToView) {
    elementToView.scrollIntoView({ behavior: 'smooth' });
  }
};
