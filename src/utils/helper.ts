export const capitalize = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const displayModalMsg = (msg: string) => {
  const modalElem = document.querySelector("#modal") as HTMLDivElement;
  modalElem.textContent = `${msg}`;
  modalElem.style.display = "block";
  setTimeout(() => (modalElem.style.display = "none"), 1200);
};
