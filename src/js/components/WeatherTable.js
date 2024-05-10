import weatherDay from "./WeatherDay.js";

async function WeatherTable(cords) {
  const data = [
    {
      "date":  "2024-02-09T20:41:19.675Z",
      "weatherCode": 1,
      "maxTemperature": cords.lat,
      "minTemperature": 12.1,
      "estimatedEnergyProductionInKWh": 6.231321
    },
    {
      "date":  "2024-02-09T20:41:19.675Z",
      "weatherCode": 1,
      "maxTemperature": cords.lat,
      "minTemperature": 12.1,
      "estimatedEnergyProductionInKWh": 6.231321
    },
    {
      "date":  "2024-02-09T20:41:19.675Z",
      "weatherCode": 1,
      "maxTemperature": cords.lat,
      "minTemperature": 12.1,
      "estimatedEnergyProductionInKWh": 6.231321
    },
    {
      "date":  "2024-02-09T20:41:19.675Z",
      "weatherCode": 1,
      "maxTemperature": cords.lat,
      "minTemperature": 12.1,
      "estimatedEnergyProductionInKWh": 6.231321
    },
    {
      "date":  "2024-05-11T20:41:19.675Z",
      "weatherCode": 1,
      "maxTemperature": 19.2,
      "minTemperature": 12.1,
      "estimatedEnergyProductionInKWh": 6.231321
    },
    {
      "date":  "2024-05-12T20:41:19.675Z",
      "weatherCode": 1,
      "maxTemperature": 19.2,
      "minTemperature": 12.1,
      "estimatedEnergyProductionInKWh": 6.231321
    },
    {
      "date":  "2024-05-13T20:41:19.675Z",
      "weatherCode": 1,
      "maxTemperature": 19.2,
      "minTemperature": 12.1,
      "estimatedEnergyProductionInKWh": 6.231321
    },
  ];

  return `
    <div>
        <div class="m-10 items-center flex flex-col md:flex-row md:justify-center">
            ${data.map((d) => weatherDay(d)).join('')}
        </div>
    </div>
  `
}

export default WeatherTable;