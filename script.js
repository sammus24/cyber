// Initialize the map
const map = L.map('map').setView([20, 0], 2); // Center on the world

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers for France and Brazil
L.marker([48.8566, 2.3522]) // France
  .addTo(map)
  .bindPopup('This is France! Click to answer a question.')
  .openPopup();

L.marker([-14.235, -51.9253]) // Brazil
  .addTo(map)
  .bindPopup('This is Brazil! Click to answer a question.');
