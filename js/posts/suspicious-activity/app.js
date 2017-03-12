var map = L.map('map').setView([34.0689, -118.442], 12);

L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 20
}).addTo(map);

d3.csv('/datasets/suspicious-activity/data.csv', function(err, data) {
  var geocoder = new google.maps.Geocoder();
  for (i = 0; i < data.length; i++) {
    console.log(data[i].Location);
    geocoder.geocode({address: data[i].Location}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log(i)
        console.log(results[0])
        L.marker([results[0].geometry.location.lat(), results[0].geometry.location.lng()]).addTo(map);
      }
      if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
      }
      else {
        alert("The Geocode was not successful for the following reason: " + status);
      }
    });
  }
});
