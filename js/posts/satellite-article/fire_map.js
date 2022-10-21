var map = L.map('map').setView([34.052, -118.244], 9);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1Ijoiamplc3NpY2FsaSIsImEiOiJjbDJpbzV0dXUwN3h1M3Bxc2cyemc1aXR0In0.nRzisMJGpLoV55v1LvQp7A'
        }).addTo(map);

var fireIcon = L.icon ({
        iconUrl: '/img/posts/satellite-article/fire.svg',
        iconSize: [20,50],
        iconAnchor: [10,25],
        popupAnchor: [0,0]
});

var markerLayer = L.layerGroup().addTo(map);

var overlay = document.getElementById('overlay');

$( document ).ready(function() {
    var slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [2013],
        step: 1,
        connect: true,
        range: {
            'min': 2013,
            'max': 2022
        },
        pips: {
            mode: 'steps',
            stepped: true,
            density: 4
        },
        tooltips: true,
        format: {
            from: function(value) {
                    return parseInt(value);
                },
            to: function(value) {
                    return parseInt(value);
                }
        },
    });

    slider.noUiSlider.on('update', function (year) {
        // append https://cors-anywhere.herokuapp.com/ to api_url to turn on proxy for CORS
        let api_url = 'https://www.fire.ca.gov/umbraco/api/IncidentApi/GeoJsonList?year=' + year;

        markerLayer.clearLayers();

        let totalAcresBurned = 0;

        const fireGeoJson = fetch(api_url).then(fireGeoJson => fireGeoJson.json()).then(fireGeoJson => {
        fireGeoJson.features.forEach(getLatLng);
        overlay.innerHTML = "Total Number of Fires: " + fireGeoJson.features.length + "<br>" + "Total Acres Burned: " + totalAcresBurned;
        function getLatLng(fire) {
            var latlng = L.latLng( { lat: fire.properties.Latitude, lng: fire.properties.Longitude });
            var marker = L.marker(latlng, {
                icon: fireIcon}).addTo(markerLayer);
            L.circle((latlng), {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: Math.log(fire.properties.AcresBurned)*1000
            }).addTo(markerLayer);
            marker.bindPopup("Date Fire Started: " + fire.properties.StartedDateOnly + "<br>" + 
            "Date Fire Extinguished: " + fire.properties.ExtinguishedDateOnly + "<br>" + "Acres Burned: " + fire.properties.AcresBurned);
            marker.on('click',function(e){
                map.setView(e.latlng,10);
            });
            totalAcresBurned += fire.properties.AcresBurned;
        }; 

        }
    )
    })
});

var popup = L.popup()
    .setLatLng([34.054, -118.244])
    .setContent("Click around the map to see fires.")
    .openOn(map);