---
title: Walking to Class
teaser: How far are different lecture halls?
authors:
    - interns
featured_image:
    url:
og_image:
stylesheets:
    - //api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.css
    - //unpkg.com/leaflet@1.0.3/dist/leaflet.css
    - /css/posts/walking-to-class/app.css
scripts:
    - /js/lib/jquery-3.1.1.min.js
    - //d3js.org/d3.v5.min.js
    - //api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.js
    - //api.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js
    - //unpkg.com/leaflet@1.0.3/dist/leaflet.js
    - //cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.4.0/gpx.min.js
    - /js/posts/walking-to-class/map.js
---



<div id="dropdowns">
        <select class="ui search selection dropdown" id="start_location"></select>
        <select class="ui search selection dropdown" id="end_location"></select>
    </div>
<div id="vis">
    <div id="mapid"></div>
    <div id="stats">
        <h4>Route A</h4>
        <p>Distance</p>
        <h4>Route B</h4>
        <p>Distance</p>
    </div>
</div>



