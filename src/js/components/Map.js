import weatherTable from "./WeatherTable.js";

class Map {
  constructor() {
    this.map = L.map('map').setView([50.04744326657029, 19.945035546510816], 13);
    this.layerGroup = L.layerGroup().addTo(this.map);
    this.appendCopyright();
    this.appendSearchBox();
    this.appendOnClick();
    this.setCurrentLocation();
    this.onLayerAdd();
  }

  appendCopyright() {
    // set Cracow cords and zoom 13
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  appendSearchBox() {
    const searchControl = L.esri.Geocoding.geosearch({
      position: "bottomleft",
      expanded: true,
      placeholder: "Enter an address or place e.g. 1 Kraków",
      useMapBounds: false,
      collapseAfterResult: false,
      providers: [
        L.esri.Geocoding.arcgisOnlineProvider({
          apikey: 'AAPK11820e3c6ff045fd86e9816bdc5e92053Gr9ZsfXq-fHoYzoDAmzpvy4_TDMjqipDP77Dgp1vdnZ5ELGKlu5-0Ft3zNuDp1q',
          nearby: {
            lat: -33.8688,
            lng: 151.2093
          }
        })
      ]
    }).addTo(this.map);

    searchControl.on("results", (data) => {
      this.layerGroup.clearLayers();
      this.layerGroup.addLayer(L.marker(data.results[0].latlng));
    });
  }

  appendOnClick() {
    this.map.on('click', (e) => {
      this.layerGroup.clearLayers();
      this.layerGroup.addLayer(L.marker(e.latlng));
    });
  }

  setCurrentLocation() {
    this.map.locate({setView: true});
    this.map.on('locationfound', (e) => {
      this.layerGroup.clearLayers();
      this.layerGroup.addLayer(L.marker(e.latlng));
    });

  }
  onLayerAdd() {
    this.map.on('layeradd', async (e) => {
      document.querySelector('#weather-table').innerHTML = await weatherTable(e.layer._latlng);
    });
  }
}

export default Map;

