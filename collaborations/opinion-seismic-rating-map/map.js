var mymap = L.map("mapid").setView([34.051687, -118.452989], 14);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 11, 
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

const getIconByName = (name) => {
  return new L.Icon({
    iconUrl: name,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

let groupcustom = []; 
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
    feature.properties.ConstructionYear
    + ((feature.properties.RetrofitYear) ? ("<br>" +"Retrofit Year: " + feature.properties.RetrofitYear) : "") + 
    "<br>" + 
    "Seismic Rating: " +
    ((feature.properties.RatingText) ? (feature.properties.RatingText) : (feature.properties.SeismicRating)) +
    "</div>";

  if (feature.properties.Custom){
      switch (feature.properties.Name){
        case "De Neve Commons":
        case "De Neve C": 
        case "De Neve D": 
        case "De Neve E (Evergreen Residential Building)": 
        case "De Neve F (Firgrove Residential Building)": 
          marker.setIcon(getIconByName("pins/custom-denevecommons.svg")); 
          groupcustom.push(marker); 
          break; 
        case "Psychology Tower/Franz Hall": 
        case "Psychology Building/Franz Hall – 1961 Addition": 
          marker.setIcon(getIconByName("pins/custom-franzhall.svg")); 
          groupcustom.push(marker); 
          break; 
        case "La Kretz Botany Building": 
          marker.setIcon(getIconByName("pins/custom-lakretz.svg")); 
          break; 
        case "Murphy Hall": 
          marker.setIcon(getIconByName("pins/custom-murphyhall.svg")); 
          break; 
        case "Powell Library": 
          marker.setIcon(getIconByName("pins/custom-powell.svg")); 
          break; 
        case "Public Affairs": 
          marker.setIcon(getIconByName("pins/custom-publicaffairs.svg")); 
          break; 
        case "UCLA School of Dentistry": 
          marker.setIcon(getIconByName("pins/custom-schoolofdentistry.svg")); 
          break; 
        case "Semel Institute":
          marker.setIcon(getIconByName("pins/custom-semel.svg")); 
          break; 
        case "Young Research Library": 
          marker.setIcon(getIconByName("pins/custom-yrl.svg")); 
          break; 
        default: 
          marker.setIcon(getIconByName("pins/red-pin.svg")); 
      }
  }
  else{
    switch (feature.properties.SeismicRating) {
      case "I": 
      case "II": 
      case "III":
      case "IV": 
        marker.setIcon(getIconByName("pins/green-pin.svg"));
        group4.push(marker);
        break;
      case "V":
        marker.setIcon(getIconByName("pins/yellow-pin.svg"));
        group3.push(marker);
        break;
      case "VI":
        marker.setIcon(getIconByName("pins/orange-pin.svg"));
        group2.push(marker);
        break;
      case "VII":
        marker.setIcon(getIconByName("pins/red-pin.svg"));
        group1.push(marker);
        break;
      default:
        iconColor = "black";
    }
  }

  mymap.addLayer(marker);
  oms.addMarker(marker);
});

var overlays = {
  '<p style="color: green; margin-top: 0px; margin-bottom: 0px; font-weight: bold; display: inline-block"> Seismic Rating: I - IV</p> <br> <p>(Seismic Safety Policy Compliant)</p>':
    L.layerGroup(group4).addTo(mymap),
  '<p style="color: black; margin-top: 0px; margin-bottom: 0px; font-weight: bold; display: inline-block"> Seismic Rating: V</p> <br> <p>Will Require Further Evaluation and, if Confirmed, Must Be Addressed)</p>':
    L.layerGroup(group3).addTo(mymap),
    '<p style="color: orange; margin-top: 0px; margin-bottom: 0px; font-weight: bold; display: inline-block"> Seismic Rating: VI</p> <br> <p>(Priority for Improvement)</p>':
    L.layerGroup(group2).addTo(mymap), 
  "<p style='color: red; margin-top: 0px; margin-bottom: 0px; font-weight: bold; display: inline-block'> Seismic Rating: VII</p><br><p>(Unoccupied and Access-Restricted)</p>":
    L.layerGroup(group1).addTo(mymap)
};

L.control.layers(null, overlays, { collapsed: false }).addTo(mymap);
