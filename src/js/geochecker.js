import setPosition from './setposition';
import showError from './showerror';
import notify from './notify';

const geoChecker = () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
  } else {
    notify('Geolocation not supported in device');
  }
};

export default geoChecker;
