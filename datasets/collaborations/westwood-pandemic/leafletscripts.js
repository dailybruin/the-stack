
var baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVycnlsaW5ldyIsImEiOiJjajIwc2E1YXkwMmt6MzNuMXZnaWRjb2lhIn0.u0AHZNQd8_8hFmpaVvI1nQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
});

var dining_list = [];
for (var i = 0; i < 90; i++) {
    var str1 = "";
    if (dining[i].open == true) {
        str1 = "Open\n";
    }
    else {
        str1 = "Closed\n";
    }
    var popup = str1.concat(dining[i].status);
    dining_list.push(L.marker([dining[i].latitude, dining[i].longitude])).bindPopup(popup);
}
var dining_layer = L.layerGroup(dining_list);

var mymap = L.map('mapid', {
    center: [34.060716, -118.445345],
    zoom: 12,
    minZoom: 15,
    maxBounds : [[34.063644, -118.449161], [34.055600, -118.437968]],
    layers: [dining_layer]
});

mymap.addLayer(baseLayer);
