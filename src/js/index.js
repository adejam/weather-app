import geoChecker from './geochecker';
import searchLocation from './searchlocation';
import unitChanger from './unitchanger';

geoChecker();

const searchForm = document.querySelector('.search_form');
searchForm.addEventListener('submit', searchLocation);

const main = document.querySelector('#main');
main.addEventListener('click', unitChanger);
