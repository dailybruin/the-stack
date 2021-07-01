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
      'pk.eyJ1Ijoia2FubmVib3lpbmEiLCJhIjoiY2txanFsaHgxMDFiMjJ3bXpnc3BjOHBrZiJ9.a5Lne6oUV-yW1UdZf6nZ5g',
  }
).addTo(mymap);

var oms = new OverlappingMarkerSpiderfier(mymap, { keepSpiderfied: true });
let popup = new L.Popup({ offset: new L.Point(0.5, -24) });
oms.addListener('click', function(marker) {
  popup.setContent(marker.desc);
  popup.setLatLng(marker.getLatLng());
  mymap.openPopup(popup);
});
oms.addListener('spiderfy', function(markers) {
  mymap.closePopup();
});

const getIconByColor = color => {
  return new L.Icon({
    iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

let group1 = [];
let group2 = [];
let group3 = [];
let group4 = [];
let group5 = [];
let group6 = [];

geojsonFeature.features.map(feature => {
                    
  let marker = new L.marker([
    feature.geometry.coordinates[1],
    feature.geometry.coordinates[0],
  ]);
  marker.desc =
    "<b style='font-size:14px;'>" +
    feature.properties.Ownership +
    '</b> <br>' +
    "<p style='font-size:14px; margin-top: 0px; margin-bottom: 0px; '>" +
    'Value: ' +
    feature.properties.Value +
    '</p>';
  switch (feature.properties.Value_Range) {
    case '< $1 million':
      marker.setIcon(getIconByColor('red'));
      group1.push(marker);
      break;
    case '$1 - 5 million':
      marker.setIcon(getIconByColor('orange'));
      group2.push(marker);
      break;
    case '$5 - 10 million':
      marker.setIcon(getIconByColor('yellow'));
      group3.push(marker);
      break;
    case '$10 - 30 million':
      marker.setIcon(getIconByColor('green'));
      group4.push(marker);
      break;
    case '$30 - 100 million':
      marker.setIcon(getIconByColor('blue'));
      group5.push(marker);
      break;
    case '> $100 million':
      marker.setIcon(getIconByColor('purple'));
      group6.push(marker);
      break;
    default:
      iconColor = 'black';
  }

  mymap.addLayer(marker);
  oms.addMarker(marker);
});

var overlays = {
  '<p style="color: red; margin-top: 0px; margin-bottom: 0px;"><1 million loan</p>': L.layerGroup(
    group1
  ).addTo(mymap),
  '<p style="color: darkorange; margin-top: 0px; margin-bottom: 0px;">$1 - 5 million loan</p>': L.layerGroup(
    group2
  ).addTo(mymap),
  '<p style="color: olive; margin-top: 0px; margin-bottom: 0px;">$5 - 10 million</p>': L.layerGroup(
    group3
  ).addTo(mymap),
  '<p style="color: green; margin-top: 0px; margin-bottom: 0px;">$10 - 30 million</p>': L.layerGroup(
    group4
  ).addTo(mymap),
  '<p style="color: dodgerblue; margin-top: 0px; margin-bottom: 0px;">$30 - 100 million</p>': L.layerGroup(
    group5
  ).addTo(mymap),
  '<p style="color: purple; margin-top: 0px; margin-bottom: 0px;">>$100 million</p>': L.layerGroup(
    group6
  ).addTo(mymap),
};

L.control.layers(null, overlays, { collapsed: false }).addTo(mymap);