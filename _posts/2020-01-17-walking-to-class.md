---
title: Walking to class
teaser: Running late to class? Trying to avoid endless stairs after a tough workout? Find out which walking routes from the hill to lecture halls and libraries on campus are the fastest, burn the most calories or have the least amount of stairs.
authors:
  - laurel_woods
  - bernard_mendez
  - charlotte_huang
  - justin_chai
key_takeaways:
  - A student walking from Hedrick Hall to Powell Library (and back) once a day for class will walk more than 80 miles in a quarter. For an average-speed walker, that’s around 26 hours of walking.
  - Walking up the hill on Charles E. Young Drive North burns approximately 20% more calories per step than walking up the Bruin Walk hill, according to an equation developed in part by the United States Army Research Institute of Environmental Medicine.
  - Walking around UCLA’s campus at slower speed tends to burn more calories per mile than walking at a moderate speed.
featured_image:
  url: walking-to-class/featured_image.png
og_image: walking-to-class/featured_image.png
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
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - /js/posts/walking-to-class/bubble-chart.js
  - /js/posts/walking-to-class/map.js
  - /js/posts/walking-to-class/bernard.js
---

<p>Walking to and from class is a shared grievance that all UCLA students living on the Hill face.</p>

<p>This project helps you explore new routes from the dorms to campus and provides various statistics about each route. So, whether you are hoping not to get lost, want the quickest possible route to class or simply want to take the path of least resistance after a long day of school, this project will help you customize your walking experience.</p>

<h1>About the Data</h1>
<p>We collected the data from <a href='https://openrouteservice.org'>openrouteservice</a>, which allowed us to draw routes and extract raw GPX files. We extracted the latitude, longitude and elevation of data points along the route to calculate the total distance and elevation change along each path. To calculate calories, we used an equation developed in part by the United States Army Research Institute of Environmental Medicine that estimates energy expenditure based on gradient and walking speed.</p>

<p>You can choose from popular dorm locations, such as Hedrick Hall and Sproul Hall as the starting points, and popular areas on and around campus, such as Powell Library, the Court of Sciences and the Westwood Target as the ending points. Because of the limitations of the routing service, we offer the two fastest and easiest paths for each route. In total, there are 48 routes.</p>

<div id='choices'>

<div id="dropdowns">
        <h1>I'm walking from </h1>
        <select class="ui search selection dropdown" id="start_location"></select>
        <span> to </span>
        <select class="ui search selection dropdown" id="end_location"></select>
</div>

<div>
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

<div id='topholder'>
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
      <div class="chart_container">
        <canvas id="chartA"></canvas>  
      </div>
</div>
</div>

<div>
<h2>Compare the Walking Routes</h2>
<div class='chartcont'>
<div id='comparebuttons'>
<div id='start'>
<span><b>From:</b></span>
<button value='0' class='selected'>sproul</button>
<button value='10'>rieber</button>
<button value='20'>deneve</button>
<button value='30'>hedrick</button>
</div>
<div id='compare'>
<button value='0' class='selected'>Calories</button>
<button value='1'>Distance (mi)</button>
<button value='2'>Distance (m)</button>
<button value='3'>Time (min)</button>
</div>
</div>

<div id='chart0'>
<canvas id="comparechart" style='height: 80vh;'></canvas>
</div>
</div>
</div>

<h2>What about accessible routes?</h2>

<p>Although the hills of Westwood are iconic features of the UCLA campus, they present a challenge to students who have disabilities.</p>

<p>Lily Shaw, a fourth-year political science student and USAC Facilities commissioner, said students with disabilities have a hard time navigating campus because of added barriers and unclear pathways.</p>

<p>“It’s often discouraging for students who have disabilities and know that they're going to struggle to get to class and might be late,” Shaw said. “There's that fear that makes them not want to go to class and then they fall behind academically and further accentuate barriers to academics for students with disabilities.”</p>

<p>Shaw said UCLA Center for Accessible Education provides a single shuttle van for injured and students who have disabilities, but added that the van is criticized for frequently lacking space, canceling routes and forgetting to pick up students. She also said there are plans for a second van, but said she hasn’t seen any promising results.</p>

<p>Shyam Venkatasubramanian, a second-year electrical engineering student, said he tore his meniscus at Bruin Fitness Center during during fall quarter, which made it difficult for him to walk. He said while he was injured, he had to leave his dorm 40 minutes earlier than he did before his injury in order to get to class.</p>

<p>“I can't afford being late to a midterm or a final because I have an injury,” he said. “If my exam had happened to be North Campus, I probably wouldn't have made it regardless of how early I left.”</p>

<h2>How does walking speed and incline affect calories burned?</h2>

<p>In order to calculate calories, we used an equation developed in part by the United States Army Research Institute of Environmental Medicine that estimates energy expenditure for healthy, military-age adults at an incline. We modified the equation to show the caloric output while walking at a gradient as a function of speed, body mass and gradient. </p>

<p>The equation shows that gradient, meaning the elevation increase divided by the total distance traveled, has an effect on caloric intake. Notably, the equation shows that walking up the hill via Bruin Walk, which has an average gradient of 8.2%, burns approximately 20% more calories per step than walking up Charles E. Young Drive North, which has an average gradient of 5.5%.</p>

<p>So, depending on your route, walking through Bruin Walk might be both harder and longer.</p>

<p>The equation also shows that walking at a slower speed around UCLA’s campus tends burns more calories per mile than walking at a moderate speed, likely because walking slowly takes longer, resulting in more time spent burning calories. So, if you are trying to uphold certain New Year’s resolutions, go ahead and take your time.</p>

<h3>Calorie Burning Calculator</h3>

<div id='interactive'>

<div class='chartholder'>
<div class='chartcont0'>
<canvas id='speedchart' style='height: 100vh'></canvas>
</div>
</div>

<div id='sliderholder'>
<div id='top'>
<div id='sliders'>
<b>Speed</b>
<div id='speedvalue'></div>
<input class='slider' id='speedslider' type="range" min=".90" max="1.80" value="1.35" step='0.05'>
<b>Incline (gradient)</b>
<div id='inclinevalue'></div>
<input class='slider' id='inclineslider' type="range" min="-10" max="10" value="0" step='.5'>
</div>
<div id='wait'>
<div><b>Your Weight in lbs (optional)</b></div>
<input id='weight' type='number' min='0' max='500' value='150'>
</div>
</div>
<div id='cals'>
<h4>Calories burned per minute:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id='calories'></span><br>per hour: <span id='calories2'></span></h4>
</div>
</div>

</div>

<br>
<h3>Walking Route Intensity</h3>

<p>Some students prefer a gradual incline while walking across campus while others would rather make the climb all at once with a few flights of stairs. The bubble chart below displays each walking route we collected data on and plots it according to total distance on the x-axis and total elevation gain on the y-axis. The size of each point corresponds to the number of stairs along the route.</p>

<div id='bubblewrap0'>
<div id='bubblewrap1'>
<canvas id="bubble-chart" style='height: 70vh'></canvas>
</div>
</div>

<div>
<p>.</p>
</div>
