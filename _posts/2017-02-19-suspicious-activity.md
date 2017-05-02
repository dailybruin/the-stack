---
title: Suspicious Activity
stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.css
  - //unpkg.com/leaflet@1.0.3/dist/leaflet.css
  - //api.mapbox.com/mapbox.js/v3.0.1/mapbox.css
scripts:
  - //d3js.org/d3.v4.min.js
  - //d3js.org/d3-transition.v1.min.js
  - //api.mapbox.com/mapbox.js/v3.0.1/mapbox.js
  - //maps.googleapis.com/maps/api/js?key=AIzaSyBddbV3QvkJbOe-s1dbPXrxWV1Sy4z8nR0"
  - //api.mapbox.com/mapbox.js/plugins/turf/v2.0.2/turf.min.js
  - //ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js
  - /js/posts/suspicious-activity/app.js
---
<select id="gender_select">
  <option value="all">All</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
<select id="race_select">
  <option value="all">All</option>
  <option value="I">Indian</option>
  <option value="W">White</option>
  <option value="B">Black</option>
  <option value="H">H</option>
  <option value="C">Chinese</option>
  <option value="O">O</option>
  <option value="A">A</option>
</select>
<select id="age_select">
  <option value="4">All</option>
  <option value="0">Under 20</option>
  <option value="1">21-40</option>
  <option value="2">41-65</option>
  <option value="3">65+</option>
</select>

<div id="map" style="height: 400px;"></div>

<select id="bar-select">
  <option value="gender">Gender</option>
  <option value="race">Race</option>
  <option value="age">Age</option>
</select>
<svg width="640" height="640" id="bar-chart"></svg>
