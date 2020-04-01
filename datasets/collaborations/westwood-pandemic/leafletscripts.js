var baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVycnlsaW5ldyIsImEiOiJjajIwc2E1YXkwMmt6MzNuMXZnaWRjb2lhIn0.u0AHZNQd8_8hFmpaVvI1nQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
});

var business_lists = [];

var dining_list = [];
var ae_list = [];
var shopping_list = [];
var lat;
var lon;
var latlon;
var popup;
var layer_lists = [dining_list, ae_list, shopping_list];
var layer_jsons = [dining_json, ae_json, shopping_json];

for (var j = 0; j < layer_lists.length; j++) {
    var current_list = layer_lists[j];
    var current_json = layer_jsons[j];
    for (var i = 0; i < layer_jsons.length; i++) {
        var str1 = ""
        if (current_json[i].open == true) {
            str1 = "Open";
        }
        else {
            str1 = "Closed";
        }
        lat = parseFloat(current_json[i]['geo']['latitude']);
        lon = parseFloat(current_json[i]['geo']['longitude']);
        latlon = L.latLng(lat,lon);
        //console.log(latlon);
        var name = current_json[i].name;
        popup = name.concat("<br>", str1, current_json[i].status);
    }
    business_lists[j].push((L.marker(L.latLng(lat, lon))).bindPopup(popup));
}

var dining_layer = L.layerGroup(dining_list);
var ae_layer = L.layerGroup(ae_list);
var shopping_layer = L.layerGroup(shopping_list);
var overlay_maps = {
    "Dining": business_lists[0],
    "Shopping": business_lists[1],
    "Arts and Entertainment": business_lists[2]
}

var mymap = L.map('mapid', {
    center: [34.060716, -118.445345],
    zoom: 15,
    minZoom: 16,
    maxBounds : [[34.064519, -118.450942], [34.058672, -118.440260]],
    layers: business_lists[0]
});

mymap.addLayer(baseLayer);
L.control.layers(overlay_maps).addTo(mymap);
