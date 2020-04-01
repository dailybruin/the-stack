
var baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVycnlsaW5ldyIsImEiOiJjajIwc2E1YXkwMmt6MzNuMXZnaWRjb2lhIn0.u0AHZNQd8_8hFmpaVvI1nQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
});

var dining_list = [];
var ae_list = [];
var shopping_list = [];
var lat;
var lon;
var latlon;
var popup;
var layer_lists = [dining_list, ae_list, shopping_list];
for (var j = 0; j < 3; j++) {
    var current_list = layer_lists[j];
    var len;
    if (j == 0)
        len = Object.keys(dining_json).length;
    else if (j == 1)
        len = Object.keys(ae_json).length;
    else
        len = Object.keys(shopping_json).length;
    for (var i = 0; i < len; i++) {
        if (j == 0) {
            var str1 = "";
            //console.log(dining_json);
            console.log(i);
            if (dining_json[i].open == true) {
                str1 = "Open\n";
            }
            else {
                str1 = "Closed\n";
            }
            //console.log(dining_json[i]['geo']['latitude']);
            lat = parseFloat(dining_json[i]['geo']['latitude']);
            lon = parseFloat(dining_json[i]['geo']['longitude']);
            latlon = L.latLng(lat,lon);
            //console.log(latlon);
            var name = dining_json[i].name;
            popup = name.concat("<br>", str1, dining_json[i].status);
        }
        else if (j == 1) {
            var str1 = "";
            //console.log(dining_json);
            console.log(i);
            if (ae_json[i].open == true) {
                str1 = "Open\n";
            }
            else {
                str1 = "Closed\n";
            }
            //console.log(dining_json[i]['geo']['latitude']);
            lat = parseFloat(ae_json[i]['geo']['latitude']);
            lon = parseFloat(ae_json[i]['geo']['longitude']);
            latlon = L.latLng(lat,lon);
            //console.log(latlon);
            var name = ae_json[i].name;
            popup = name.concat("<br>", str1, ae_json[i].status);
        }
        else {
            var str1 = "";
            //console.log(dining_json);
            console.log(i);
            if (shopping_json[i].open == true) {
                str1 = "Open\n";
            }
            else {
                str1 = "Closed\n";
            }
            //console.log(dining_json[i]['geo']['latitude']);
            lat = parseFloat(shopping_json[i]['geo']['latitude']);
            lon = parseFloat(shopping_json[i]['geo']['longitude']);
            latlon = L.latLng(lat,lon);
            //console.log(latlon);
            var name = shopping_json[i].name;
            popup = name.concat("<br>", str1, shopping_json[i].status);
        }
        current_list.push((L.marker(L.latLng(lat, lon))).bindPopup(popup));
    }
}
console.log(dining_list);
var dining_layer = L.layerGroup(dining_list);
var ae_layer = L.layerGroup(ae_list);
var shopping_layer = L.layerGroup(shopping_list);
var overlay_maps = {
    "Dining": dining_layer,
    "Shopping": shopping_layer,
    "Arts and Entertainment": ae_layer
}

var mymap = L.map('mapid', {
    center: [34.060716, -118.445345],
    zoom: 15,
    minZoom: 16,
    maxBounds : [[34.064519, -118.450942], [34.058672, -118.440260]],
    layers: [dining_layer]
});

mymap.addLayer(baseLayer);
L.control.layers(overlay_maps).addTo(mymap);
