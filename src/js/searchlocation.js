import getWeather from './getweather';
import api from './api';

const searchLocation = e => {
  e.preventDefault();
  const location = e.target.querySelector('.search_box').value;
  const urlLink = `${api.baseUrl}weather?q=${location}&units=metric&APPID=${api.key}`;
  getWeather(urlLink);
  e.target.reset();
};

export default searchLocation;
