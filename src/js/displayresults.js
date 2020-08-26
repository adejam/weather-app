import dateBuilder from './datebuilder';
import converter from './converter';

const displayResults = weather => {
  const tempVal = Math.round(weather.main.temp);
  const minVal = Math.round(weather.main.temp_min);
  const maxVal = Math.round(weather.main.temp_max);
  const speed = Math.round(Math.round(weather.wind.speed));
  const city = `${weather.name}, ${weather.sys.country}`;
  const date = new Date();
  const currentDate = dateBuilder(date);
  const weatherType = weather.weather[0].main;
  const { icon } = weather.weather[0];
  const humidity = Math.round(weather.main.humidity);
  const notification = document.querySelector('#notification');

  notification.classList.add('d_none');

  const tempValFar = converter(tempVal).farenheit;
  const minValFar = converter(minVal).farenheit;
  const maxValFar = converter(maxVal).farenheit;
  const speedMph = converter(speed).mph;
  const main = document.querySelector('#main');
  main.innerHTML = `
          <section class="first_section">
            <div class="d_flex justify_content_around wrap">
              <div class="flex_1 basis_200 mt_10 d_flex justify_content_center">
                <div class="ta_center">
                  <h2 class="city">${city}</h2>
                  <p class="date_p">${currentDate}</p>
                  <p class="weather_type">${weatherType} cloudy</p>
                </div>
              </div>
              <div class="flex_1 basis_200 mt_10 d_flex justify_content_center">
                <div class="d_flex">
                  <div class="icon_cont d_flex align_items_center">
                  <img src="https://openweathermap.org/img/wn/${icon}@2x.png" width="64" height="64" />
                  </div>
                  <div class="temp">
                   <span class="celcius">${tempVal}°C</span>
                   <span class="farenheit d_none">${tempValFar}°F</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="d_flex justify_content_around wrap">
              <div class="mt_10 flex_1 basis_200 d_flex justify_content_center ta_center">
                <div>
                  <div class="humidity"><span>Humidity: </span>${humidity} <span>%</span></div>
                  <div class="wind">
                    <span>Wind: </span><span class="celcius">${speed} km/h</span>
                    <span class="farenheit d_none">${speedMph} mph</span>
                  </div>
                  <div class="min_max_temp">
                    <span>Min/Max Temp: </span><span class="celcius">${minVal}°C/${maxVal}°C</span>
                    <span class="farenheit d_none">${minValFar}°F/${maxValFar}°F</span>
                  </div>
                </div>
              </div>
              <div class="d_flex align_items_center justify_content_center flex_1 basis_200 mt_10">
               <button type="button" class="btn btn_success changer mr_10 toMetric" id="toMetric" disabled="true">Metric</button>
               <button type="button" class="btn btn_info changer toImperial" id="toImperial">Imperial</button>
              </div>
            </div>
          </section>
          `;
};

export default displayResults;
