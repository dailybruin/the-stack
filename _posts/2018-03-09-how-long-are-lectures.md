---
title: How Long Are Lectures?
teaser: Insert teaser here
featured_image:
    url: suspicious-activity/map.png
og_image: suspicious-activity/map.png
authors:
  - rishub_kumar
  - henna_dialani
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
Have you ever wondered which lectures seem to drag on more than others? Especially after a night out, where it's easy to just skip a lecture in an auditorium filled with 200 people? Or when you've definitely not completed your readings in a class of (insert small lecture number) and your professor can see your sheepish expression? At the Stack we analyzed Registrar data to look at lecture lengths and class sizes across the different departments of UCLA for the academic year 2017-2018. 

There was a lot of data to be gathered from UCLA's Registrar website. We wanted to look at lecture lengths and lecture sizes across different filters (so you could also play around with the data and see patterns within the data) - be it school, North or South campus, quarter, and upper or lower division classes. For the academic year 2017-2018, the average lecture length per day was 100.68 minutes. We compared this across the different undergraduate schools and saw that Art had the highest average at 216.86 minutes while Program in Computing had the lowest at 50.0. Art had the highest average number of lecture minutes per week at 383.24 minutes - that’s 6.4 hours for a single class’s lectures (excluding discussions!) in a week. 

Below is a bar chart showing the top 20 departments by lecture length ranged from Art to ___, while the bottom 20 departments (excluding the departments with 0 minutes), are showed in the graph on the right. 

Meanwhile, the average lecture size was ____. The department with highest average lecture size was _____ and the department with lowest average lecture size was _____. We looked at lecture size and lecture length in conjunction in the scatterplot below.

Unhappy with how courses are designed? From Beth Lazazzera, Vice Chair of Undergraduate Affairs, we found that each faculty member determines the length and and frequency of lectures when the course is first created and/or revised. Afterwards, the course (and its lecture lengths) must be approved by their department and the Faculty Executive Committee of their School or College. So you know who to look to the next time you have to sit through a long seminar for a required core class that no one wants to take. 



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
