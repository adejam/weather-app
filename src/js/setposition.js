import api from './api';
import getWeather from './getweather';

const setPosition = position => {
  const { latitude } = position.coords;
  const { longitude } = position.coords;
  const urlLink = `${api.baseUrl}weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${api.key}`;
  getWeather(urlLink);
};

export default setPosition;
