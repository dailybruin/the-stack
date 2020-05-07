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

<h3>VIZ 1 - GENERAL CASE</h3>
<div class="loader-wrapper viz1">
  <div class="loader"></div>
</div>
<div id="viz1">
  <div class="graph-wrapper">
    <div class="graph viz1"></div>
  </div>

  <div class="row">
    <div class="column stats">
        <p class="viz1 healthy"></p>
        <p class="viz1 infected"></p>
        <p class="viz1 recovered"></p>
    </div>
    <div class="column slider-wrapper">
      <div class="viz1 slider"></div>
      <p class="slider-title">week of fall quarter</p>
    </div>
    <div class="column button-div">
      <button class="viz1 playButton" type="button">Play</button>
      <button class="viz1 restartButton" type="button">Restart</button>
    </div>
    <div class="viz1 r0slider"></div>
    <p class="slider-title">value of R<sub>0</sub></p>
  </div>
</div>


<h3>VIZ 2 - EDGE CASE</h3>
<div class="loader-wrapper viz2">
  <div class="loader"></div>
</div>
<div id="viz2">
  <div class="graph-wrapper">
    <div class="graph viz2"></div>
  </div>

  <div class="row">
    <div class="column stats">
        <p class="viz2 healthy"></p>
        <p class="viz2 infected"></p>
        <p class="viz2 recovered"></p>
    </div>
    <div class="column slider-wrapper">
      <div class="viz2 slider"></div>
      <p class="slider-title">week of fall quarter</p>
    </div>
    <div class="column button-div">
      <button class="viz2 playButton" type="button">Play</button>
      <button class="viz2 restartButton" type="button">Restart</button>
    </div>
    <div class="viz2 r0slider"></div>
    <p class="slider-title">value of R<sub>0</sub></p>
  </div>
</div>