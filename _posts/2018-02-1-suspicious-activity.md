---
title: Suspicious Activity
authors:
  - benson_han
  - chang_liu
  - madeleine_pauker
  - rupan_bharanidaran
stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.css
  - //unpkg.com/leaflet@1.0.3/dist/leaflet.css
  - //api.mapbox.com/mapbox.js/v3.0.1/mapbox.css
  - /css/posts/suspicious-activity/app.css
  - /css/posts/presidential-campaign-donations/tooltip.css
scripts:
  - //d3js.org/d3.v4.min.js
  - //d3js.org/d3-transition.v1.min.js
  - //api.mapbox.com/mapbox.js/v3.0.1/mapbox.js
  - //maps.googleapis.com/maps/api/js?key=AIzaSyBddbV3QvkJbOe-s1dbPXrxWV1Sy4z8nR0"
  - //api.mapbox.com/mapbox.js/plugins/turf/v2.0.2/turf.min.js
  - //ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js
  - /js/posts/suspicious-activity/Leaflet.MakiMarkers.js
  - /js/posts/suspicious-activity/app.js
---

<select id="gender_select" class="map_select">
  <option value="all">All</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
<select id="race_select" class="map_select">
  <option value="all">All</option>
  <option value="I">American Indian</option>
  <!-- <option value="Z">Asian Indian</option> -->
  <option value="B">Black</option>
  <!-- <option value="D">Cambodian</option> -->
  <option value="C">Chinese</option>
  <!-- <option value="F">Filipino</option> -->
  <!-- <option value="G">Guamanian</option> -->
  <!-- <option value="U">Hawaiian</option> -->
  <option value="H">Hispanic / Latin / Mexican</option>
  <!-- <option value="J">Japanese</option> -->
  <!-- <option value="K">Korean</option> -->
  <!-- <option value="L">Laotian</option> -->
  <option value="O">Other</option>
  <option value="A">Other Asian</option>
  <option value="P">Pacific Islander</option>
  <!-- <option value="S">Samoan</option> -->
  <!-- <option value="X">Unknown</option> -->
  <option value="V">Vietnamese</option>
  <option value="W">White</option>
</select>
<select id="age_select" class="map_select">
  <option value="4">All</option>
  <option value="0">Under 20</option>
  <option value="1">21-40</option>
  <option value="2">41-65</option>
  <option value="3">65+</option>
</select>
<input class="map_select" type="checkbox" name="type" value="arrest" checked> Arrests
<input class="map_select" type="checkbox" name="type" value="suspicious" checked> Suspicious Activity

<div id="map" style="height: 400px;"></div>
<h1>Suspicious Activity</h1>
<select id="suspicious-bar-select">
  <option value="gender">Gender</option>
  <option value="race">Race</option>
  <option value="age">Age</option>
</select>
<svg width="640" height="300" id="suspicious-bar-chart"></svg>
<h1>Arrests</h1>
<select id="arrest-bar-select">
  <option value="gender">Gender</option>
  <option value="race">Race</option>
  <option value="age">Age</option>
</select>
<svg width="640" height="300" id="arrest-bar-chart"></svg>
