const changeUnits = (toUnDisplay, toDisplay, toRemove, toSet) => {
  const classesToUnDisplay = document.querySelectorAll(toUnDisplay);
  classesToUnDisplay.forEach(element => {
    element.classList.add('d_none');
  });
  const classestoDisplay = document.querySelectorAll(toDisplay);
  classestoDisplay.forEach(element => {
    element.classList.remove('d_none');
  });

  document.querySelector(toRemove).removeAttribute('disabled');
  document.querySelector(toSet).setAttribute('disabled', 'true');
};

export default changeUnits;
