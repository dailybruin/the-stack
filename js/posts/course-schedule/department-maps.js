var mymap = L.map('mapid').setView([34.0711224,-118.4418554], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVycnlsaW5ldyIsImEiOiJjajIwc2E1YXkwMmt6MzNuMXZnaWRjb2lhIn0.u0AHZNQd8_8hFmpaVvI1nQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

var courses;
var markerGroup = L.layerGroup().addTo(mymap);

d3.json('/datasets/course-schedule/department-map-data_2.json', function(data){
    courses = data;

    var current = data['Computer Science'];

    var marker = L.marker([current[0]['lat'][0], current[0]['long'][0]], {
        icon:	new L.NumberedDivIcon()
    }).addTo(markerGroup).bindPopup(current[0]['building'][0]);


    for(var i = 1; i < current.length; i++){
        marker = L.marker([current[i]['lat'][0], current[i]['long'][0]], {
            icon:	new L.NumberedDivIcon({number: current[i]['class_pct'][0]})
        }).addTo(markerGroup).bindPopup(current[i]['building'][0]);
    }

    const subjects = Object.keys(data), defaultDepartment = 'Computer Science';
    console.log(subjects);

    d3.select('#pick-department')
        .on('change', e => pickDepartment(data))

    .selectAll('option')
        .data(subjects)
        .enter()
        .append('option')
        .property('selected', d => d == defaultDepartment)
    .text(d => d)
    .attr('value', (d, i) => i);
});

function pickDepartment(data){
    var dept = $('#pick-department option:selected').text();
    var current = data[dept];

    mymap.removeLayer(markerGroup);
    markerGroup = L.layerGroup().addTo(mymap);

    var marker = L.marker([current[0]['lat'][0], current[0]['long'][0]], {
        icon:	new L.NumberedDivIcon()
    }).addTo(markerGroup).bindPopup(current[0]['building'][0]);

    for(var i = 1; i < current.length; i++){
        marker = L.marker([current[i]['lat'][0], current[i]['long'][0]], {
            icon:	new L.NumberedDivIcon({number: current[i]['class_pct'][0]})
        }).addTo(markerGroup).bindPopup(current[i]['building'][0]);
    }
}





