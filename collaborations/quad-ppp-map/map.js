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

geojsonFeature.features.map(feature => {
  let JobsRetained = feature.properties.JobsRetained;
  if (JobsRetained === '') {
    JobsRetained = 'Unknown';
  }

  let marker = new L.marker([
    feature.geometry.coordinates[1],
    feature.geometry.coordinates[0],
  ]);
  marker.desc =
    "<b style='font-size:14px;'>" +
    feature.properties.BusinessName +
    '</b> <br>' +
    "<p style='font-size:14px; margin-top: 0px; margin-bottom: 0px; '>" +
    'Loan Range: ' +
    feature.properties.LoanRange +
    '</p>' +
    "<p style='font-size:14px; margin-top: 0px;'>" +
    'Jobs Retained: ' +
    JobsRetained +
    '</p>';
  switch (feature.properties.LoanRange) {
    case '$150,000-350,000':
      marker.setIcon(getIconByColor('red'));
      group1.push(marker);
      break;
    case '$350,000-1 million':
      marker.setIcon(getIconByColor('orange'));
      group2.push(marker);
      break;
    case '$1-2 million':
      marker.setIcon(getIconByColor('yellow'));
      group3.push(marker);
      break;
    case '$2-5 million':
      marker.setIcon(getIconByColor('green'));
      group4.push(marker);
      break;
    case '$5-10 million':
      marker.setIcon(getIconByColor('blue'));
      group5.push(marker);
      break;
    default:
      iconColor = 'black';
  }

  mymap.addLayer(marker);
  oms.addMarker(marker);
});

var overlays = {
  '<p style="color: red; margin-top: 0px; margin-bottom: 0px;">$150,000-350,000 loan</p>': L.layerGroup(
    group1
  ).addTo(mymap),
  '<p style="color: darkorange; margin-top: 0px; margin-bottom: 0px;">$350,000-1 million loan</p>': L.layerGroup(
    group2
  ).addTo(mymap),
  '<p style="color: olive; margin-top: 0px; margin-bottom: 0px;">$1-2 million loan</p>': L.layerGroup(
    group3
  ).addTo(mymap),
  '<p style="color: green; margin-top: 0px; margin-bottom: 0px;">$2-5 million loan</p>': L.layerGroup(
    group4
  ).addTo(mymap),
  '<p style="color: dodgerblue; margin-top: 0px; margin-bottom: 0px;">$5-10 million loan</p>': L.layerGroup(
    group5
  ).addTo(mymap),
};

L.control.layers(null, overlays, { collapsed: false }).addTo(mymap);

// site used to convert from csv to geojson
// https://www.convertcsv.com/csv-to-geojson.htm

// places deleted bc wack addresses:
// lesenfants inc
// fresher corn grill
// stealth software technologies
// corday productions

// places added bc addresses still within s. sepulveda blvd and santa monica blvd
// elite sales and services llc 10669 Wellworth Ave.
// paulseth & associates physical therapy
// shout! factory, llc
// mojix, inc.
// dattner dispoto and associates
// mpca administration llc
// lola visual effects, llc

// places edited bc of diff addresses online
// MYNHD inc 11000 Wilshire Blvd, Suite 1426
// medqia llc: address should be 10850 Wilshire Blvd, Suite 1170
// southern ca tennis association 420 Charles E Young Drive West
// pacrep holdings llc 10880 Wilshire Blvd, Ste 2222
// drinks holdings, inc. 11175 Santa Monica Blvd Ste 173 (taken out)

// other place edits
// singer lewak llc is singerlewak llc
