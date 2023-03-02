export const saveData = (data) => {
  const currentData = JSON.parse(localStorage.getItem("form")) || [];
  currentData.push(data);

  localStorage.setItem("form", JSON.stringify(currentData));
};

export const getData = () => {
  return JSON.parse(localStorage.getItem("form")) || [];
};
