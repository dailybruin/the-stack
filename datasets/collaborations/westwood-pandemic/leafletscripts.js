var greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var blackIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVycnlsaW5ldyIsImEiOiJjajIwc2E1YXkwMmt6MzNuMXZnaWRjb2lhIn0.u0AHZNQd8_8hFmpaVvI1nQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    minZoom: 5,
});

var layer_lists = [dining_json, shopping_json, ae_json, healthbeauty_json, services_json];
var business_layers = [];

for (let j = 0; j < layer_lists.length; j++) {
    var business_list = [];
    for (let i = 0; i < layer_lists[j].length; i++) {
        var str1 = "";
        if (layer_lists[j][i].open == true) {
            str1 = "<br> <em>Open</em> <br>";
        }  
        else {
            str1 = "<br><em>Closed</em><br>";
        }
        var lat = parseFloat(layer_lists[j][i]['geo']['latitude']);
        var lon = parseFloat(layer_lists[j][i]['geo']['longitude']);
        var latlon = L.latLng(lat,lon);
    
        var name = "<b style='font-size:14px'>" + layer_lists[j][i].name + "</b>";
        var popup = name.concat("\n", str1, layer_lists[j][i].status);
        if (layer_lists[j][i].open == true)
            business_list.push((L.marker(L.latLng(lat, lon), {icon: greenIcon})).bindPopup(popup));
        else
            business_list.push((L.marker(L.latLng(lat, lon), {icon: blackIcon})).bindPopup(popup));
    }
    business_layers.push(L.layerGroup(business_list));
}

// default layer
var mymap = L.map('mapid', {
    center: [34.060716, -118.445345],
    zoom: 15,
    minZoom: 16,
   // maxBounds : [[34.064519, -118.450942], [34.058672, -118.440260]],
    layers: business_layers[0] // default dining
});

var overlay_maps = {
    "Dining": business_layers[0],
    "Shopping": business_layers[1],
    "Arts and Entertainment": business_layers[2]
};

mymap.addLayer(baseLayer);
L.control.layers(overlay_maps).addTo(mymap);
