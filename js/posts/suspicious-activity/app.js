var map = L.map('map').setView([34.0689, -118.442], 14);

L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

d3.csv('/datasets/suspicious-activity/data.csv', function(err, data) {
  console.log(data);
})
