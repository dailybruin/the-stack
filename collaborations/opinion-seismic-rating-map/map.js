var mymap = L.map("mapid").setView([34.051687, -118.452989], 14);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiY2F0aGVyaW5laGh1IiwiYSI6ImNrbnY2MXlucTBlanAyb3BpMHpwaXA2MmMifQ.wLjhsdl39EF7EbXTa9DZOg",
  }
).addTo(mymap);

var oms = new OverlappingMarkerSpiderfier(mymap);
let popup = new L.Popup({ offset: new L.Point(0.25, -24) });
oms.addListener("click", function (marker) {
  popup.setContent(marker.desc);
  popup.setLatLng(marker.getLatLng());
  mymap.openPopup(popup);
});
oms.addListener("spiderfy", function (markers) {
  mymap.closePopup();
});

const getIconByColor = (color) => {
  return new L.Icon({
    iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
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

geojsonFeature.features.map((feature) => {
  var marker = new L.marker([
    feature.geometry.coordinates[1],
    feature.geometry.coordinates[0],
  ]);

  marker.desc =
    "<b style='font-size:14px;'>" +
    feature.properties.Name +
    "</b> <br>" +
    "<div style='font-size:14px; margin-top: 0px; margin-bottom: 0px; '>" +
    "Construction Year: " +
    feature.properties.ConstructionYear +
    "<br>" +
    "Retrofit Year: " +
    feature.properties.RetrofitYear +
    "<br>" +
    "Seismic Rating: " +
    feature.properties.SeismicRating +
    "</div>";

  switch (feature.properties.SeismicRating) {
    case "III":
      marker.setIcon(getIconByColor("green"));
      group4.push(marker);
      break;
    case "IV":
      marker.setIcon(getIconByColor("yellow"));
      group3.push(marker);
      break;
    case "V":
      marker.setIcon(getIconByColor("orange"));
      group2.push(marker);
      break;
    case "VI":
      marker.setIcon(getIconByColor("red"));
      group1.push(marker);
      break;
    default:
      iconColor = "black";
  }

  mymap.addLayer(marker);
  oms.addMarker(marker);
});

var overlays = {
  "<p style='color: red; margin-top: 0px; margin-bottom: 0px; font-weight: bold;'> Seismic Rating: III</p>":
    L.layerGroup(group1).addTo(mymap),
  '<p style="color: orange; margin-top: 0px; margin-bottom: 0px; font-weight: bold;"> Seismic Rating: IV</p>':
    L.layerGroup(group2).addTo(mymap),
  '<p style="color: yelow; margin-top: 0px; margin-bottom: 0px; font-weight: bold;"> Seismic Rating: V</p>':
    L.layerGroup(group3).addTo(mymap),
  '<p style="color: green; margin-top: 0px; margin-bottom: 0px; font-weight: bold;"> Seismic Rating: VI</p>':
    L.layerGroup(group4).addTo(mymap),
};

L.control.layers(null, overlays, { collapsed: false }).addTo(mymap);
