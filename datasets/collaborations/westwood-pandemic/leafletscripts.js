
var baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVycnlsaW5ldyIsImEiOiJjajIwc2E1YXkwMmt6MzNuMXZnaWRjb2lhIn0.u0AHZNQd8_8hFmpaVvI1nQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
});

var dining_list = [];
for (var i = 0; i < 87; i++) {
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
    var lat = parseFloat(dining_json[i]['geo']['latitude']);
    var lon = parseFloat(dining_json[i]['geo']['longitude']);
    var latlon = L.latLng(lat,lon);
    //console.log(latlon);
    var name = dining_json[i].name;
    var popup = name.concat("\n", str1, dining_json[i].status);
    dining_list.push((L.marker(L.latLng(lat, lon))).bindPopup(popup));
}
var dining_layer = L.layerGroup(dining_list);

var mymap = L.map('mapid', {
    center: [34.060716, -118.445345],
    zoom: 15,
    minZoom: 16,
    maxBounds : [[34.064519, -118.450942], [34.058672, -118.440260]],
    layers: [dining_layer]
});

mymap.addLayer(baseLayer);
L.control.layers(dining_layer).addTo(mymap);
