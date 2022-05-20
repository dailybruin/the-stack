---
title: 
teaser: 
authors:
  - 
  - 
  - 
  - 

key_takeaways:
  - 
  - 
  - 

featured_image:
  url: 
  caption: 
og_image: 

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js
  # - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - //cdn.plot.ly/plotly-2.9.0.min.js
  - //code.jquery.com/jquery-3.6.0.min.js

  # - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  # - //ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
  # - //d3js.org/d3.v6.min.js
  # - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - ../../../../js/posts/uc-admissions/yearly-freshman.js
  - /js/posts/uc-admissions/linechart.js
  - /js/posts/uc-admissions/bubble_map.js


stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - 
---

<head>
        <script src="https://cdn.plot.ly/plotly-2.11.1.min.js"></script>
        <script src="plotly-2.11.1.min.js"></script>
</head>

line chart

<div><canvas id = 'CAMPUS_Line_Chart'></canvas></div>


The bubble map below visualizes the population density of all UC campuses, measured as the number of students enrolled in Fall 2021 divided by the total area in acres in the respective campus. Notably, UCLA has the highest campus enrollment at 46,116 students for Fall 2021 and the smallest campus size at 419 acres. This makes the campus four times greater than the next greatest in terms of campus density. On the other hand, UC Davis has the smallest campus density with a substantial campus enrollment of 40,050 students covered up for by its gigantic campus of 5300 acres. This makes UC Davis more than 10 times larger than the UCLA campus, with each acre of area at the former having seven people on average. 

<div id="bubble_map"></div>
