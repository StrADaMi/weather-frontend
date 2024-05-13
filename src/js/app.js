async function App() {
  return `
    <div>
      <div id="map" style="height: 400px"></div>
        <div id="weather-table">
        <div>
        <div class="m-10 items-center flex flex-col md:flex-row md:justify-center">
            ${(new Array(7).fill()).map(() => `
              <div class="w-40 md:mr-5 mb-10 transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6">
                  <div class="text-md font-bold flex flex-col text-gray-900">
                    <div role="status" class="max-w-sm p-4 animate-pulse md:p-2 dark:border-gray-00">
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-12 mb-2.5"></div>
                    </div>
                    <span class="font-normal text-gray-700 text-sm"><span class="animate-pulse">-</span></span>
                  </div>
                  <div class="w-32 h-32 flex items-center justify-center">
                    <div role="status" class="max-w-sm p-4  animate-pulse md:p-6">
                      <img src="https://openweathermap.org/img/wn/01n@2x.png" alt="Loading...">
                    </div>
                  </div>
                  <p class="text-gray-700 mb-2">
                  <div class="max-w-sm animate-pulse">
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-8 mb-4"></div>
                    <span class="sr-only">Loading...</span>
                  </div>
                  </p>
                  <div class="text-xl font-bold text-gray-900 mb-4 whitespace-nowrap ">
                    <span class="animate-pulse">-</span>
                    <span class="font-normal text-gray-700 mx-1">/</span> <span class="animate-pulse">-</span>ยบ
                  </div>
                  <div class="whitespace-nowrap">
                      <span class="text-sm">Energy:</span>
                      <span class="text-sm font-bold"><span class="animate-pulse">-</span> kW/h</span>
                </div>
              </div>
            `).join('')}
            </div>
        </div>
     </div>
    </div>
  `
}

export default App;