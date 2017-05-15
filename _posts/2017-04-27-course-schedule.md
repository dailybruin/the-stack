---
title: Analyzing the distribution of classes by department, location, and time.
teaser: Explore the relationships between 100 academic subjects as we use natural language processing algorithms to "read" course descriptions.  
authors:
    - jerry_li
    - tyson_ni
featured_image:
    url: department-similarity/pair-similarity.png
og_image: department-similarity/pair-similarity.png
stylesheets:
    - //api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.css
    - //unpkg.com/leaflet@1.0.3/dist/leaflet.css
    - /css/posts/course-schedule/app.css
scripts:
    - /js/lib/jquery-3.1.1.min.js
    - /js/posts/department-similarity/libs/d3.min.js
    - /js/posts/department-similarity/libs/d3-tip.js
    - //api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.js
    - //unpkg.com/leaflet@1.0.3/dist/leaflet.js
    - /js/posts/course-schedule/numbered-markers.js
    - /js/posts/course-schedule/department-maps.js
---

<div class='ui grid centered'>
  <div class='row'>
    <select class="ui search selection dropdown" id="pick-department"></select>
  </div>
</div>
 
<div id="mapid"></div>

