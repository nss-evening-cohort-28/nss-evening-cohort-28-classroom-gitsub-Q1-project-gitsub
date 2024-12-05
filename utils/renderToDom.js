export const renderToDom = (divId, contentToRender) => {
  const selectDiv = document.querySelector(divId);
  selectDiv.innerHTML = contentToRender;
};
