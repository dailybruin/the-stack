var mymap = L.map('mapid').setView([34.060716, -118.445345], 15);

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1Ijoia2FuZHJld3oiLCJhIjoiY2tkdzR5cHh1MWxybDJ0bnV3NGJranE5dyJ9.8_eKzn7R-rcIWyjOFYq5Zg',
  }
).addTo(mymap);

L.geoJSON(geojsonFeature).addTo(mymap);

// places deleted bc wack addresses:
// MYNHD inc
// lesenfants inc
// fresher corn grill
// stealth software technologies
// medqia llc
// southern ca tennis association
