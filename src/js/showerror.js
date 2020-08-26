import notify from './notify';

const showError = error => {
  notify(error.message);
};

export default showError;
