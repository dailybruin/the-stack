---
title: Walking to Class
teaser: How far are different lecture halls?
authors:
    - laurel_woods
    - bernard_mendez
key_takeaways:
    - Students who live in Hedrick on average climb 118 more per what? stairs than those<students who live in Deneve and burn 28.3% more calories per mile.
    - Walking up the hill on Charles E. Young drive is approximately 25% harder than walking up the Bruin walk hill.
    - Walking at a slower speed burns more calories per mile than walking at a moderate speed according to an equation developed by the United States Army.
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
    - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js
    - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
    - /js/posts/walking-to-class/map.js
    - /js/posts/walking-to-class/bernard.js
    - /js/posts/walking-to-class/bubble-chart.js
---

<p>Walking to class may be one of the most important things UCLA students will do during their career in Westwood, but it can be confusing, especially for first-year students. Bruinwalk may seem like the only path, but as your world view expands, you may realize there are other ways to get to class.</p>

<p>This project helps you explore new routes from the dorms to campus and provides various statistics about each route. So, whether you are hoping not to get lost, want the quickest possible route to class, or simply want to take the path of least resistance after a long day of school, this project will help you customize your walking experience.</p>

<h1>About the Data</h1>
<p>We collected the data from <a href='https://openrouteservice.org'>openrouteservice</a>, which allowed us to draw routes and extract raw gpx files. We extracted the latitude, longitude and elevation of data points along the route to calculate the total distance and elevation change along path. To calculate calories, we used an equation developed by the United States Army that estimates energy expenditure based on gradient and walking speed.</p>

<p>You can choose from popular dorm locations, such as Hedrick and Sproul as the starting points, and popular areas on and around campus, such as Powell, the Court of Sciences and the Westwood Target as the ending points. Due to the limitations of the routing service, we offer the two fastest and easiest paths for each route. In total, there are 48 routes.</p>


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
<button value='0' class='selected'>Distance (mi)</button>
<button value='1'>Distance (m)</button>
<button value='2'>Time</button>
</div>
</div>

<div id='chart0'>
<canvas id="comparechart" style='height: 80vh;'></canvas>
</div>
</div>
</div>


<h2>What about accessible routes?</h2>

<p>Although the hills of Westwood are an iconic feature of the UCLA campus, they present a challenge to students with disabilities.</p>

<p>Lily Shaw, a fourth-year political science student and USAC Facilities Commissioner, said students with difficulties have a hard time navigating campus because of added barriers and unclear pathways. </p>

<p>“It’s often discouraging for students who have disabilities and know that they're going to struggle to get to class and might be late,” said Shaw. “There's that fear that makes them not want to go to class and then they fall behind academically and further accentuate barriers to academics for students with disabilities.”</p>

<p>Shaw said the UCLA Transportation department provides a single shuttle van for injured and disabled students, but added the van is criticized for frequently lacking space, canceling routes and forgetting to pick up students. She also said there are plans for a second van, but said she hasn’t seen any promising results.</p>

<p>Shyam Venkatasubramanian, a second-year electrical engineering student, said he tore his meniscus at B-fit during during fall quarter, which made it difficult for him to walk. He said that while he was injured, he had to leave his dorm 40 minutes earlier than he did before the injury in order to get to class.</p>

<p>“I can't afford being late to a midterm or a final because I have an injury,” he said. “If my exam had happened to be North Campus, I probably wouldn't have made it regardless of how early I left.”</p>


<h2>How does walking speed and incline affect calories burned?</h2>

<p>In order to calculate calories, we used an equation developed by the United States Army that estimates energy expenditure for healthy, military age adults at a given incline. We modifdied the equation to show the caloric output during walking at a gradient as a function of speed, body mass, and gradient. </p>

<p>The equation shows that gradient, the elevation increase divided by the total distance traveled, has an effect on caloric intake. Notably, the equation shows that walking up the hill via Bruinwalk, which has an average gradient of 8.2%,  is approximately 25% more difficult than walking back via Charles E. Young, which has an average gradient of 5.5%.</p>

<p>So, depending on your route, walking through Bruinwalk might be both harder and longer.</p>

<p>The equation also shows that walking at a slower speed burns more calories per mile than walking at a moderate speed, likely because walking slowly takes longer and spends more time burning calories. So, if you are trying to uphold certain New Years Resolutions, go ahead and take your time. </p>

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

<div id='bubblewrap0'>
<div id='bubblewrap1'>
<canvas id="bubble-chart" style='height: 70vh'></canvas>
</div>
</div>

<div>
<p>The individual routes from residence halls to lecture halls show a general pattern in the relationship between the total elevation change and the total distance. The role a specific residence hall has is in shifting the general pattern in total distance and/or total elevation change. For example, routes starting from De Neve tend to have the shortest total distances and the least total elevation change. Routes from Sproul tend to have greater total distance and elevation change than routes from De Neve, whereas routes from Rieber tend to be comparable in distance to routes from De Neve but have higher total elevation changes. Routes from Hedrick were generally the longest and had the greatest elevation change.</p>
</div>
