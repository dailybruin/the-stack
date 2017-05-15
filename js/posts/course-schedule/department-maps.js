var mymap = L.map('mapid').setView([34.0711224,-118.4418554], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVycnlsaW5ldyIsImEiOiJjajIwc2E1YXkwMmt6MzNuMXZnaWRjb2lhIn0.u0AHZNQd8_8hFmpaVvI1nQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

var courses;
var markers = [];

d3.json('/datasets/course-schedule/department-map-data.json', function(data){
    courses = data;

    var current = data[0]['Computer Science'];

    for(var i = 0; i < current.length; i++){
        var marker = L.marker([current[i]['lat'][0], current[i]['long'][0]], {
            icon:	new L.NumberedDivIcon({number: current[i]['n_class'][0]})
        }).addTo(mymap).bindPopup(current[i]['building'][0]).openPopup();
        markers.push(marker);
        console.log(current[i]);
    }
    console.log(data[0]['Computer Science'])
});

const defaultDepartment = 'Anthropology';