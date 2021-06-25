---
title: COVID Grade Inflation
teaser: Text
git
authors:
  - 

key_takeaways:
  - Take aways here

featured_image:
  url: 
og_image: 

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js 
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js
  # - /cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js 
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  - //ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
  - //d3js.org/d3.v6.min.js
  - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - //code.jquery.com/jquery-1.11.2.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/form.min.js
  # - /js/posts/covid-grade-inflation/Main_Graph.js
  - /js/posts/covid-grade-inflation/MainChart.js
  - /js/posts/covid-grade-inflation/20-inflat-sum.js

stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/covid-grade-inflation/app.css
---

Test text

<script src="https://code.highcharts.com/highcharts.js"></script>

<script src="https://code.highcharts.com/modules/export-data.js"></script>

<script src="https://code.highcharts.com/modules/accessibility.js"></script>

<script src="https://d3js.org/d3.v3.min.js"></script>

<select id="dropdown-menu"></select>

<div class = "main_graph">
  <canvas id = "main-chart"></canvas>
</div>
<!-- <div class="graph-container">
    <div id="precovidGraph"></div>
    <div id="postcovidGraph"></div>
  </div> -->

test test

<div class = "main graph">
  <canvas id = "main-chart"></canvas>
</div>

<figure class="highcharts-figure">
    <div id="container"></div>
    <p class="highcharts-description">
    </p>
</figure>

<script src="/js/posts/covid-grade-inflation/pie_chart.js"></script>

  <div class="dropdown-menu"></div>
<div class="my_dataviz">
    <div id="my_dataviz"></div>
  </div>

<!-- Load d3.js
<script src="https://d3js.org/d3.v6.js"></script>

<!-- Add 2 buttons -->

<!-- <button onclick="update('var1')">Variable 1</button>
<button onclick="update('var2')">Variable 2</button>
          
<!-- Create a div where the graph will take place -->

<!-- <div id="my_dataviz"></div> -->

<!-- <div class="dropdown-menu"></div>
<div class="graph-container">
    <div id="precovidGraph"></div>
    <div id="postcovidGraph"></div>
  </div>  -->

  <div class="dropdown-menu"></div>
<div class="graph-container">
    <div id="precovidGraph"></div>
    <div id="postcovidGraph"></div>
  </div>

# Top 20 Most Inflated and Deflated Classes

<!-- Chart container -->
<div id="inflation">
  
  <!-- Drop-down -->
<select id="chart-selector" name="chart-selector">
    <option value="">Please Select An Option</option>
    <option value ="20-inflat-sum">summer difference 2019/2020</option>
    <option value ="fall diffference 2019/2020">1</option>
    
    
  </select>
  


    
</div>

<div class = "top20-inflation">
  <canvas id="20-inflat-sum"></canvas>
</div>
