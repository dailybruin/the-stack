mapboxgl.accessToken =
  'pk.eyJ1Ijoia2FuZHJld3oiLCJhIjoiY2tkdzR5cHh1MWxybDJ0bnV3NGJranE5dyJ9.8_eKzn7R-rcIWyjOFYq5Zg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [12.550343, 55.665957],
  zoom: 8,
});
var marker = new mapboxgl.Marker().setLngLat([12.550343, 55.665957]).addTo(map);
