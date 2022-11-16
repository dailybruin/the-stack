---
title: Impacts of COVID-19 on Public and Private Research Funding 
teaser: How did the COVID-19 pandemic impact research funding at UCLA? Which departments and types of research were affected the most?
authors:
  - 

key_takeaways:
  - 
featured_image:
  url: dining-halls/featured_image.png
  caption: (Ashley Ko/Daily Bruin Staff)
og_image: dining-halls/feature_image.png

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  - //ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
  - //d3js.org/d3.v6.min.js
  - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js
  - //cdn.rawgit.com/Keyang/node-csvtojson/d41f44aa/browser/csvtojson.min.js
  - /js/posts/dining-halls/piechart.js
  - /js/posts/dining-halls/busyness-barchart.js

stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/dining-halls/styles.css
---

### Introduction

text

### Where Do Students Eat?

text

chart:
<div class = 'pieCharts'>
<div class = 'pie_chart swipes'><canvas id = 'SwipesPieChart'></canvas></div>
<!-- <div class = 'pie_chart scaled'><canvas id = 'ScaledPieChart'></canvas></div> -->
</div>
<p class = 'caption'>Data for the pie charts was collected from Sep. 20, 2021 to Oct. 17, 2021.</p>

text

### Traffic Trends of Dining Options

text


<select id="Day"></select>

<div class = 'bar_chart'><canvas id = 'barChart'></canvas></div>
<p class = 'caption'>Data for the line charts was collected from Sep. 20, 2021 to Oct. 17, 2021. Data for each day and each dining hall was averaged over 30-minute periods. If the average was between 0 and 1 swipe, the average was rounded up to 1.</p>

text

### Other Food Options

text

### About the Data

text
