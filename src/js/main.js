import App from './app.js';
import Map from './components/Map.js';

const app = async () => {
  document.getElementById('app').innerHTML = await App();
};

// Load app
await app();
//initialize Map after DOM is prepared
new Map();
