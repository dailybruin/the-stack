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

<select name="text" onchange="onRadialChange('selected_quarter', this.value)">
  <option value="all" selected>All</option>
  <option value="Fall">Fall</option>
  <option value="Winter">Winter</option>
  <option value="Spring">Spring</option>
</select>

<select name="text" onchange="onRadialChange('selected_div', this.value)">
  <option value="all" selected>All</option>
  <option value="Upper">Upper</option>
  <option value="Lower">Lower</option>
</select>

<select name="text" onchange="onRadialChange('selected_campus', this.value)">
  <option value="all" selected>All</option>
  <option value="North">North</option>
  <option value="South">South</option>
</select>

<select name="text" onchange="onRadialChange('selected_school', this.value)">
  <option value="all" selected>All</option>
  <option value="Anderson School of Management">Anderson School of 
  Management</option>
  <option value="David Geffen School of Medicine">David Geffen School of Medicine</option>
  <option value="Fielding School of Public Health">Fielding School of Public Health</option>
  <option value="Graduate Division">Graduate Division</option>
  <option value="Herb Alpert School of Music">Herb Alpert School of Music</option>
  <option value="Life Sciences">Life Sciences</option>
  <option value="Luskin School of Public Affairs">Luskin School of Public Affairs</option>
  <option value="School of Dentistry">School of Dentistry</option>
  <option value="School of Education and Information Studies">School of Education and Information Studies</option>
  <option value="School of Engineering and Applied Science">School of Engineering and Applied Science</option>
  <option value="School of Law">School of Law</option>
  <option value="School of Nursing">School of Nursing</option>
  <option value="School of Theater, Film and Television">School of Theater, Film and Television</option>
  <option value="School of the Arts and Architecture">School of the Arts and Architecture</option>
  <option value="The College of Letters and Science">The College of Letters and Science</option>
  </select>

<select name="text" onchange="onRadialChange('selected_filter', this.value)">
  <option value="avg_lecture_length_day">Average lecture length per day</option>
  <option value="avg_lecture_length_week">Average lecture length per week</option>
  <option value="avg_num_lectures_week">Average number of lectures per week</option>
  <option value="avg_lecture_size">Average lecture size</option>
</select>

<label><input id="sort" type="checkbox"> Sort values</label>

<div id="radial-chart"></div>




<select name="text" onchange="onScatterChange('selected_quarter', this.value)">
  <option value="all" selected>All</option>
  <option value="Fall">Fall</option>
  <option value="Winter">Winter</option>
  <option value="Spring">Spring</option>
</select>

<select name="text" onchange="onScatterChange('selected_div', this.value)">
  <option value="all" selected>All</option>
  <option value="Upper">Upper</option>
  <option value="Lower">Lower</option>
</select>

<select name="text" onchange="onScatterChange('selected_campus', this.value)">
  <option value="all" selected>All</option>
  <option value="North">North</option>
  <option value="South">South</option>
</select>

<select name="text" onchange="onScatterChange('selected_school', this.value)">
  <option value="all" selected>All</option>
  <option value="Anderson School of Management">Anderson School of 
  Management</option>
  <option value="David Geffen School of Medicine">David Geffen School of Medicine</option>
  <option value="Fielding School of Public Health">Fielding School of Public Health</option>
  <option value="Graduate Division">Graduate Division</option>
  <option value="Herb Alpert School of Music">Herb Alpert School of Music</option>
  <option value="Life Sciences">Life Sciences</option>
  <option value="Luskin School of Public Affairs">Luskin School of Public Affairs</option>
  <option value="School of Dentistry">School of Dentistry</option>
  <option value="School of Education and Information Studies">School of Education and Information Studies</option>
  <option value="School of Engineering and Applied Science">School of Engineering and Applied Science</option>
  <option value="School of Law">School of Law</option>
  <option value="School of Nursing">School of Nursing</option>
  <option value="School of Theater, Film and Television">School of Theater, Film and Television</option>
  <option value="School of the Arts and Architecture">School of the Arts and Architecture</option>
  <option value="The College of Letters and Science">The College of Letters and Science</option>
  </select>

<select name="text" onchange="onScatterChange('selected_filter1', this.value)">
  <option value="avg_lecture_size">Average lecture size</option>
  <option value="avg_lecture_length_day">Average lecture length per day</option>
  <option value="avg_lecture_length_week">Average lecture length per week</option>
  <option value="avg_num_lectures_week">Average number of lectures per week</option>
</select>

<select name="text" onchange="onScatterChange('selected_filter2', this.value)">
  <option value="avg_lecture_length_week">Average lecture length per week</option>
  <option value="avg_lecture_length_day">Average lecture length per day</option>
  <option value="avg_num_lectures_week">Average number of lectures per week</option>
  <option value="avg_lecture_size">Average lecture size</option>
</select>


<div id="scatterplot"></div>
