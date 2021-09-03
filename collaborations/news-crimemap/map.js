const crimeMap = L.map('map').setView([34.045, -118.445345], 13);

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 12,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1Ijoia2FubmVib3lpbmEiLCJhIjoiY2txanFsaHgxMDFiMjJ3bXpnc3BjOHBrZiJ9.a5Lne6oUV-yW1UdZf6nZ5g',
  }
).addTo(crimeMap);

crimesGeojson.features.map(feature => {
  const marker = new L.marker([
    feature.geometry.coordinates[1],
    feature.geometry.coordinates[0],
  ]);
  marker.bindPopup(
    `DATE: ${feature.properties.DATE}, TYPE: ${
      feature.properties.EVENT
    }, LOCATION: ${feature.properties.LOCATION}`
  );

  crimeMap.addLayer(marker);
});
