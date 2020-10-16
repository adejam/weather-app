import displayResults from './displayresults';
import notify from './notify';

async function getWeather(url) {
  try {
    const data = await fetch(url);
    const weather = await data.json();
    displayResults(weather);
  } catch (e) {
    notify('There might be an error in connection or location does not have a weather forcast');
  }
}

export default getWeather;
