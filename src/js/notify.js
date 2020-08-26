const notification = document.querySelector('.notification');

const notify = errorMessage => {
  notification.classList.remove('d_none');
  notification.innerHTML = `<p>${errorMessage}</p>`;
};

export default notify;
