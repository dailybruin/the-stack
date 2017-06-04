var mymap = L.map('mapid', {scrollWheelZoom: false}).setView([34.0711224,-118.4418554], 17);

mymap.once('focus', function() { mymap.scrollWheelZoom.enable(); });

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVycnlsaW5ldyIsImEiOiJjajIwc2E1YXkwMmt6MzNuMXZnaWRjb2lhIn0.u0AHZNQd8_8hFmpaVvI1nQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

var markerGroup = L.layerGroup().addTo(mymap);

d3.json('/datasets/course-schedule/department-map-data.json', function(data){
    var subjects = Object.keys(data), defaultDepartment = 'Anthropology';

    d3.select('#pick-department-map')
        .on('change', function(e) {pickDepartment(data);})
    .selectAll('option')
        .data(subjects)
        .enter()
        .append('option')
        .property('selected', function(d) {return d == defaultDepartment;})
    .text(function(d) {return d;})
    .attr('value', function(d, i) {return i;});

    pickDepartment(data);
});

function pickDepartment(data){
    var dept = $('#pick-department-map option:selected').text();
    var current = data[dept];

    mymap.removeLayer(markerGroup);
    markerGroup = L.layerGroup().addTo(mymap);

    mymap.setView(new L.LatLng(current[0]['lat'][0], current[0]['long'][0]), 17);

    for(var i = 1; i < current.length; i++){
        var popup = "<b>" + current[i]['building'][0] + '</b><br>';
        popup += "Number of classes: " + current[i]['class_cnt'] + " (" + current[i]['class_pct'] + ")<br>";
        popup += "Number of students: "  + current[i]['student_cnt'] + " (" + current[i]['student_pct'] + ")";

        marker = L.marker([current[i]['lat'][0], current[i]['long'][0]], {
            icon:	new L.NumberedDivIcon({number: current[i]['building_code'][0] + "<br><b>" + current[i]['class_pct'][0] + "</b>"})
        }).addTo(markerGroup).bindPopup(popup);
    }

    // center
    var marker = L.marker([current[0]['lat'][0], current[0]['long'][0]], {
        icon: centerIcon,
        opacity: 0.7,
        zIndexOffset: 1000
    }).addTo(markerGroup);
}





