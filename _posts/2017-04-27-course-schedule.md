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
    - /css/posts/course-schedule/dropdown.min.css
    - /css/posts/course-schedule/app.css
scripts:
    - /js/lib/jquery-3.1.1.min.js
    - /js/posts/department-similarity/libs/d3.min.js
    - /js/posts/department-similarity/libs/d3-tip.js
    - //api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.js
    - //unpkg.com/leaflet@1.0.3/dist/leaflet.js
    - /js/posts/course-schedule/numbered-markers.js
    - /js/posts/course-schedule/center-marker.js
    - /js/posts/course-schedule/department-maps.js
    - /js/posts/course-schedule/department-time.js
---



# Where are the classes located for my department?
Pick a department to see the distribution of that department's classes around campus. You can click
on each marker to see a more detailed breakdown of the percentages, including percentages that take into account class size.

The red and black circle indicates the weighed average location for that particular department.

**Note:** Percentages may not add to 100% as those less than 1% are excluded from the map.

<div id="course-location">
    <select class="ui search selection dropdown" id="pick-department-map"></select>
    <div id="mapid"></div>
</div>

# How north or south campus-y is my department?

Using the latitude values of the center of each department calculated from the previous section,
we can now rank each department on how north or south campus-y it really is. The values range from
-1 (most south campus) to +1 (most north campus), with Bruin Walk being the origin.

# When are the classes for my department held?
Pick a department to see the hourly distribution of that department's classes within the day.

<select class="ui search selection dropdown" id="pick-department-time"></select>
<br>

<img src="" id="department-time-graph">


