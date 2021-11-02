---
title: UCPD Budget & Arrest Data
teaser:
authors:
  -
key_takeaways:
  -
featured_image:
  url:
og_image:
stylesheets:
  -
scripts:
  - //d3js.org/d3.v5.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  - /js/posts/ucpd-budget-arrests/stacked-barchart.js
  - //cdn.anychart.com/releases/8.0.1/js/anychart-core.min.js
  - //cdn.anychart.com/releases/8.0.1/js/anychart-pie.min.js
  - /js/posts/ucpd-budget-arrests/bail-barchart.js
  - /js/posts/ucpd-budget-arrests/demographics-barchart.js
---

<div id="barchart-wrapper">
  <canvas id="barchart-uclapd"></canvas>
</div>

<div height = "800">
  <canvas id="race_chart"></canvas> 
</div>
<div height = "800">
  <canvas id="gender_chart"></canvas> 
</div>
<div class="bail-barchart">
  <canvas id='bail-chart-ucpd'> </canvas>
</div>
