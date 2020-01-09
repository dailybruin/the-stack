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
    - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js
    - /js/posts/walking-to-class/map.js
    - /js/posts/walking-to-class/bernard.js
    - /js/posts/walking-to-class/bubble-chart.js
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



<h2>Find which route is shortest</h2>
<div class='chartcont'>
<div id='start'>
<button value='0' class='selected'>sproul</button>
<button value='10'>rieber</button>
<button value='20'>deneve</button>
<button value='30'>hedrick</button>
</div>
<div id='compare'>
<button value='10' class='selected'>Distance</button>
<button value='20'>Time</button>
</div>
<div id='chart0'>
<canvas id="chart" style='height: 80vh;'></canvas>
</div>
</div>


<h2>What about accessible routes?</h2>

<p>

</p>


<h2>How does walking speed and incline affect calories burned?</h2>

<div id='whole'>

<div id='description'>
<p>In order to calculate calories, we used an equation developed by the United States Army that estimates energy expenditure for healthy, military age adults at a given incline. We modifdied the equation to show the caloric output during walking at a gradient as a function of speed, body mass, and gradient. </p>

<p>The equation has some interesting implications. According to the equation, walking at a slower speed burns more calories per mile than walking at a moderate speed, likely because a slow walker spends more time walking and thus spends more time burning calories. So, if you are trying to uphold certain New Years Resolutions, go ahead and take your time. </p>

<p>The hill on Charles E. Young drive has an average gradient of 5.5%, whereas the Bruinwalk hill has an average gradient of 8.2%. According to the equation, this means that walking up the Bruinwalk hill is approximately 25% harder than walking up Charles E. Young drive hill. </p>

<p>So, depending on your route, walking through Bruinwalk might be both harder and longer.</p>

</div>

<div id='sliderholder'>

<h4>See how speed and incline affect calories burned</h4>

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

<div id='interactive'>



<div class='chartholder'>
<h4>Effect of speed on calories (cals per minute)</h4>
<div class='chartcont0'>
<canvas id='speedchart'></canvas>
</div>
</div>


</div>





<canvas id="bubble-chart" width="800" height="800"></canvas>

<p>The individual routes from residence halls to lecture halls show a general pattern in the relationship between the total elevation change and the total distance. The role a specific residence hall has is in shifting the general pattern in total distance and/or total elevation change. For example, routes starting from De Neve tend to have the shortest total distances and the least total elevation change. Routes from Sproul tend to have greater total distance and elevation change than routes from De Neve, whereas routes from Rieber tend to be comparable in distance to routes from De Neve but have higher total elevation changes. Routes from Hedrick were generally the longest and had the greatest elevation change.</p>
