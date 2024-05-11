import weatherDetails from "../mapper/WeatherDetails.js";

function WeatherDay(dailyWeather) {
  // Return a new node from template
  const date = moment(dailyWeather.date);
  const details = weatherDetails(dailyWeather.weatherCode);

  return `
    <div class="w-40 md:mr-5 mb-10 transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6">
      <div class="text-md font-bold flex flex-col text-gray-900">
        <span class="uppercase">${date.format('dddd')}</span> 
        <span class="font-normal text-gray-700 text-sm">${date.format('D MMM')}</span>
      </div>
      <div class="w-32 h-32 flex items-center justify-center">
        <img src="${details.img}" alt="${details.desc}"/>
      </div>
      <p class="text-gray-700 mb-2">${details.desc}</p>
      <div class="text-xl font-bold text-gray-900 mb-6 whitespace-nowrap">
        ${dailyWeather.minTemperature}º <span class="font-normal text-gray-700 mx-1">/</span> ${dailyWeather.maxTemperature}º
      </div>
      <div class="whitespace-nowrap">
          <span class="text-sm">Energy:</span>
          <span class="text-sm font-bold">${Math.round(dailyWeather.estimateEnergyProductionInKWh * 100) / 100} kW/h</span>
    </div>
    </div>
  `
}

export default WeatherDay;

