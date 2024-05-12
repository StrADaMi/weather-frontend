import weatherDay from "./WeatherDay.js";

async function WeatherTable(cords) {
const response = await fetch(`${API_URL}api/v1/weather/daily?latitude=${cords.lat}&longitude=${cords.lng}`);
const data = await response.json();
  return `
    <div>
        <div class="m-10 items-center flex flex-col md:flex-row md:justify-center">
            ${data.dailyWeather.map((d) => weatherDay(d)).join('')}
        </div>
    </div>
  `
}

export default WeatherTable;