---
title: How Long Are Lectures?
teaser: Insert teaser here
featured_image:
    url: suspicious-activity/map.png
og_image: suspicious-activity/map.png
authors:
  - rishub_kumar
stylesheets:
  # - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.css
  - //unpkg.com/leaflet@1.0.3/dist/leaflet.css
  - //api.mapbox.com/mapbox.js/v3.0.1/mapbox.css
  - /css/posts/how-long-are-lectures/app.css
  - /css/posts/presidential-campaign-donations/tooltip.css
scripts:
  - //d3js.org/d3.v3.min.js # need v3 instead of v4 for radial bar chart
  # - //d3js.org/d3-transition.v1.min.js
  - //api.mapbox.com/mapbox.js/v3.0.1/mapbox.js
  - //maps.googleapis.com/maps/api/js?key=AIzaSyBddbV3QvkJbOe-s1dbPXrxWV1Sy4z8nR0"
  - //api.mapbox.com/mapbox.js/plugins/turf/v2.0.2/turf.min.js
  - //ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js
  - /js/posts/suspicious-activity/Leaflet.MakiMarkers.js
  - /js/posts/how-long-are-lectures/app.js
---

<select name="text" onchange="onQuarterChange(this.value)">
  <option value="all" selected>All</option>
  <option value="Fall">Fall</option>
  <option value="Winter">Winter</option>
  <option value="Spring">Spring</option>
</select>

<select name="text" onchange="onDivChange(this.value)">
  <option value="all" selected>All</option>
  <option value="Upper">Upper</option>
  <option value="Lower">Lower</option>
</select>

<select name="text" onchange="onCampusChange(this.value)">
  <option value="all" selected>All</option>
  <option value="North">North</option>
  <option value="South">South</option>
</select>

<select name="text" onchange="onFilterChange(this.value)">
  <option value="avg_lecture_length_day">Average lecture length per day</option>
  <option value="avg_lecture_length_week">Average lecture length per week</option>
  <option value="avg_num_lectures_week">Average number of lectures per week</option>
  <option value="avg_lecture_size">Average lecture size</option>
</select>

<label><input id="sort" type="checkbox"> Sort values</label>

<div id="radial-chart"></div>
<div id="scatterplot"></div>
