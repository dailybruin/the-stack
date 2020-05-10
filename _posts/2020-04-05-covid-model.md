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
  <div class="r0-slider-wrapper viz1">
    <p class="slider-title r0-title">Drag the slider to change the value of R<sub>0</sub></p>
    <input class="r0slider viz1" type="range" min="3.8" max="8.9" value="5.7" step="0.1">
    <p class="r0val viz1">R<sub>0</sub> = 5.7</p>
  </div>
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
      <button class="viz1 play button" type="button">Play</button>
      <button class="viz1 restart button" type="button">Restart</button>
    </div>
  </div>
</div>

<h3>VIZ 2 - EDGE CASE</h3>
<div class="loader-wrapper viz2">
  <div class="loader"></div>
</div>
<div id="viz2">
  <div class="r0-slider-wrapper viz2">
    <p class="slider-title r0-title">Drag the slider to change the value of R<sub>0</sub></p>
    <input class="r0slider viz2" type="range" min="3.8" max="8.9" value="5.7" step="0.1">
    <p class="r0val viz2">R<sub>0</sub> = 5.7</p>
  </div>
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
      <button class="viz2 play button" type="button">Play</button>
      <button class="viz2 restart button" type="button">Restart</button>
    </div>
  </div>
</div>
