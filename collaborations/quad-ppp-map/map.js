mapboxgl.accessToken =
  'pk.eyJ1Ijoia2FuZHJld3oiLCJhIjoiY2tkdzR5cHh1MWxybDJ0bnV3NGJranE5dyJ9.8_eKzn7R-rcIWyjOFYq5Zg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [12.550343, 55.665957],
  zoom: 8,
});

var marker = new mapboxgl.Marker().setLngLat([12.550343, 55.665957]).addTo(map);

var markerLayer = mapbox.markers.layer();
var interaction = mapbox.markers.interaction(markerLayer);
interaction.formatter(function(feature) {
  console.log(feature);
  var o = '<strong>' + feature.properties.title + '</strong>';
  return o;
});
$.get('./westwood_ppp_small_cleaned.csv', function(data) {
  var crimes = $.csv.toObjects(data);
  $.each(crimes, function(i, crime) {
    var newfeature = {
      geometry: { coordinates: [crime.lon, crime.lat] },
      properties: {
        title: crime.title,
      },
    };
    markerLayer.add_feature(newfeature);
    map.addLayer(markerLayer);
  });
});
