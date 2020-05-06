---
title: Modelling UCLA's Risk and Impact on COVID-19 in Los Angeles
teaser: words words words
authors:
key_takeaways:
  - something
  - something else
featured_image:
  url:
og_image:
stylesheets:
  - /css/posts/covid-model/app.css
scripts:
  - //d3js.org/d3.v5.min.js
  - //unpkg.com/d3-simple-slider
  - /js/posts/covid-model/spread.js
  - /js/posts/covid-model/model.js
---

<div id="graph-wrapper">
  <div id="graph"></div>
  <!-- <div id="legend"></div> -->
</div>

<div class="row">
  <div class="column" id="stats">
      <p id="healthy"></p>
      <p id="infected"></p>
      <p id="recovered"></p>
  </div>
  <div class="column slider-wrapper">
    <div id="slider"></div>
    <p id="slider-title">week of fall quarter</p>
  </div>
  <div class="column button-div">
    <button type="button" onclick="restart()">Restart</button>
  </div>
</div>

