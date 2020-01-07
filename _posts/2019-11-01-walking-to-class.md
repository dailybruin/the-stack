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
    - /css/posts/course-schedule/dropdown.min.css
    - /css/posts/walking-to-class/app.css
scripts:
    - /js/lib/jquery-3.1.1.min.js
    - //d3js.org/d3.v3.min.js
    - //api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.js
    - //api.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js
    - //unpkg.com/leaflet@1.0.3/dist/leaflet.js
    - //cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.4.0/gpx.min.js
    - /js/posts/walking-to-class/map.js
---



<div id="dropdowns">
        <span>I'm walking from </span>
        <select class="ui search selection dropdown" id="start_location"></select>
        <span> to </span>
        <select class="ui search selection dropdown" id="end_location"></select>
</div>
<div id="vis">
    <div id="mapid"></div>
    <div id="stats">
        <h2>Route Statistics</h2>
        <table id="stats_table"> 
            <tr> 
                <th></th>
                <th id="route_A">Route A</th>
                <th id="route_B">Route B</th>
            </tr>
            <tr>
                <td class="header_cell">distance:</td>
                <td id="dist_A"></td>
                <td id="dist_B"></td>
            </tr>
            <tr> 
                <td class="header_cell">elevation gain:</td>
                <td id="gain_A"></td>
                <td id="gain_B"></td>
            </tr>
            <tr> 
                <td class="header_cell">elevation loss:</td>
                <td id="loss_A"></td>
                <td id="loss_B"></td>
            </tr>
            <tr> 
                <td class="header_cell">number of stairs:</td>
                <td id="stairs_A"></td>
                <td id="stairs_B"></td>
            </tr>
            <tr> 
                <td class="header_cell">time:</td>
                <td id="time_A"></td>
                <td id="time_B"></td>
            </tr>
        </table>
        <h4>How fast do you walk?</h4>
        <div class="btn-group" data-toggle="buttons">
            <input type="radio" id="slow" name="speed" value="24">
            <label class="btn" for="slow">Slow (~2.5mph)</label>
            <input type="radio" id="medium" name="speed" value="20" checked>
            <label class="btn" for="medium">Medium (~3mph)</label>
            <input type="radio" id="fast" name="speed" value="15">
            <label class="btn" for="fast">Fast (~4mph)</label>
        </div>
    </div>
</div>



