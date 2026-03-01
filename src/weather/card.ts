import type { WeatherData } from './weather-data.model';

export class WeatherCard {
  constructor(city: string, date: string, weatherData: WeatherData) {
    const minTemp = weatherData.minTemp;
    const maxTemp = weatherData.maxTemp;
    const cardsContainer = document.getElementById('weather-container')!;

    cardsContainer.insertAdjacentHTML(
      'afterbegin',
      `<div class="weather-card">
            <div class="weather-card-inner">
              <h4>${city} - ${date}</h4>
              <p>${minTemp} °C</p>
              <p>${maxTemp} °C</p>
            </div>
          </div>`,
    );
  }
}
