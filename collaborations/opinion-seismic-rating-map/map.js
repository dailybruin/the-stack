const isMobile = window.matchMedia('(max-width: 480px)').matches;

var mymap = L.map('mapid').setView([34.051687, -118.444], 13);
L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 11,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoiY2F0aGVyaW5laGh1IiwiYSI6ImNrbnY2MXlucTBlanAyb3BpMHpwaXA2MmMifQ.wLjhsdl39EF7EbXTa9DZOg',
  }
).addTo(mymap);

var oms = new OverlappingMarkerSpiderfier(mymap);
let popup = new L.Popup({ offset: new L.Point(0.25, -24) });
oms.addListener('click', function(marker) {
  popup.setContent(marker.desc);
  popup.setLatLng(marker.getLatLng());
  mymap.openPopup(popup);
});
oms.addListener('spiderfy', function(markers) {
  mymap.closePopup();
});

const getIconByName = (name, custom) => {
  return new L.Icon({
    iconUrl: name,
    iconSize: [40, 40],
    iconAnchor: [20, 41],
    popupAnchor: [1, -34],
  });
};

let groupcustom = [];
let group1 = [];
let group2 = [];
let group3 = [];
let group4 = [];

geojsonFeature.features.map(feature => {
  var marker = new L.marker([
    feature.geometry.coordinates[1],
    feature.geometry.coordinates[0],
  ]);

  marker.desc =
    "<b style='font-size:12px;'>" +
    feature.properties.Name +
    '</b> <br> <br>' +
    "<div style='font-size:12px; margin-top: 0px; margin-bottom: 0px; '>" +
    '<b>Construction Year:</b> <br>' +
    feature.properties.ConstructionYear +
    '<br>' +
    (feature.properties.RetrofitYear
      ? '<br>' +
        '<b>Retrofit Year:</b> <br>' +
        feature.properties.RetrofitYear +
        '<br>'
      : '') +
    '<br>' +
    '<b>Seismic Rating:</b> <br>' +
    (feature.properties.RatingText
      ? feature.properties.RatingText
      : feature.properties.SeismicRating) +
    '</div>';

  if (feature.properties.Custom) {
    switch (feature.properties.Name) {
      case 'De Neve Commons':
      case 'De Neve C':
      case 'De Neve D':
      case 'De Neve E':
      case 'De Neve F':
        marker.setIcon(getIconByName('pins/custom-denevecommons.svg', true));
        group1.push(marker);
        break;
      case 'Psychology Tower/Franz Hall':
      case 'Psychology Building/Franz Hall – 1961 Addition':
        marker.setIcon(getIconByName('pins/franz-hall.svg', true));
        group1.push(marker);
        group2.push(marker);
        break;
      case 'La Kretz Botany Building':
        marker.setIcon(getIconByName('pins/custom-lakretz.svg', true));
        group2.push(marker);
        break;
      case 'Murphy Hall':
        marker.setIcon(getIconByName('pins/custom-murphyhall.svg', true));
        group2.push(marker);
        break;
      case 'Powell Library':
        marker.setIcon(getIconByName('pins/custom-powell.svg', true));
        group2.push(marker);
        break;
      case 'Public Affairs':
        marker.setIcon(getIconByName('pins/custom-publicaffairs.svg', true));
        group2.push(marker);
        break;
      case 'UCLA School of Dentistry':
        marker.setIcon(
          getIconByName('pins/custom-schoolofdentistry.svg', true)
        );
        group1.push(marker);
        break;
      case 'Semel Institute':
        marker.setIcon(getIconByName('pins/custom-semel.svg', true));
        group2.push(marker);
        break;
      case 'Young Research Library':
        marker.setIcon(getIconByName('pins/custom-yrl.svg', true));
        group2.push(marker);
        break;
      case 'UCLA Nimoy Theater':
        marker.setIcon(getIconByName('pins/custom-nimoy.svg', true));
        group3.push(marker);
        break;
      default:
        console.log(feature.properties.Name);
    }
  } else {
    switch (feature.properties.SeismicRating) {
      case 'I':
      case 'II':
      case 'III':
      case 'IV':
        marker.setIcon(getIconByName('pins/green-pin.svg', false));
        group1.push(marker);
        break;
      case 'V':
        marker.setIcon(getIconByName('pins/yellow-pin.svg', false));
        group2.push(marker);
        break;
      case 'VI':
        marker.setIcon(getIconByName('pins/orange-pin.svg', false));
        group3.push(marker);
        break;
      case 'VII':
        marker.setIcon(getIconByName('pins/red-pin.svg', false));
        group4.push(marker);
        break;
      default:
        iconColor = 'black';
    }
  }

  mymap.addLayer(marker);
  oms.addMarker(marker);
});

const overlays = {
  '<p style="color: #80b652; margin-top: 0px; margin-bottom: 0px; font-weight: bold; display: inline-block"> Seismic Rating: I - IV</p> <br> <p style="margin-top: 2px; margin-bottom: 8px;">meets seismic safety requirements</p>': L.layerGroup(
    group1
  ).addTo(mymap),
  '<p style="color: #dbc21a; margin-top: 0px; margin-bottom: 0px; font-weight: bold; display: inline-block"> Seismic Rating: V</p> <br> <p style="margin-top: 2px; margin-bottom: 8px;">necessitates further assessment</p>': L.layerGroup(
    group2
  ).addTo(mymap),
  '<p style="color: #ff8b17; margin-top: 0px; margin-bottom: 0px; font-weight: bold; display: inline-block"> Seismic Rating: VI</p> <br> <p style="margin-top: 2px; margin-bottom: 8px;">may require immediate upgrades</p>': L.layerGroup(
    group3
  ).addTo(mymap),
  '<p style="color: #ed1c24; margin-top: 0px; margin-bottom: 0px; font-weight: bold; display: inline-block"> Seismic Rating: VII</p><br><p style="margin-top: 2px; margin-bottom: 8px;">cannot be occupied, public use restricted</p>': L.layerGroup(
    group4
  ).addTo(mymap),
};

L.control.layers(null, overlays, { collapsed: isMobile }).addTo(mymap);
