---
title: Coronavirus Hospitals
teaser:
authors:
  - laurel_woods
  - sydney_kovach
  - andrew_kan
  - radhika_ahuja
key_takeaways:
featured_image:
  url:
og_image:

stylesheets:
  - //unpkg.com/leaflet@1.6.0/dist/leaflet.css
  - /css/posts/covid-hospitals/app.css
  - https://fonts.googleapis.com/css2?family=Open+Sans&display=swap
  - https://cdnjs.cloudflare.com/ajax/libs/rangeslider.js/2.3.3/rangeslider.min.css
scripts:
  # files for map
  - /js/lib/jquery-3.1.1.min.js
  - //unpkg.com/leaflet@1.6.0/dist/leaflet.js
  - //d3js.org/d3.v3.min.js
  - //cdnjs.cloudflare.com/ajax/libs/leaflet-ajax/2.1.0/leaflet.ajax.js
  - /js/posts/covid-hospitals/map-helpers.js
  - /js/posts/covid-hospitals/map.js

  # files for chart
  - https://cdn.jsdelivr.net/npm/chart.js@2.8.0
  - https://cdnjs.cloudflare.com/ajax/libs/rangeslider.js/2.3.3/rangeslider.min.js
  - /js/posts/covid-hospitals/line-chart.js
---

# Introduction

<div id="map"></div>

<script type="text/pyscript" src="python/corona-hospitals/map-scraping.py"></script>

<div>
  <div class="wrapper">
    <div id="canvas-wrapper">
      <canvas id="line-chart"></canvas>
    </div>
    <div id="toggle-wrapper">
      <div class="toggle-option">Hospital</div>
      <div>
      <label class="switch">
        <input type="checkbox" onclick="update_line_chart(null, this.checked);">
        <span class='toggle'></span>
      </label>
      </div>
      <div class="toggle-option">ICU</div>
    </div>
  </div>

  <div id="slider-wrapper">
    <div>
      <input type="range" min="1" max="100" value="50" class="slider" oninput="display_slider_value(this.value, null); update_line_chart(this.value);">
    </div>
    <div id="slider-num">
      <span><span id="percentage-num">50%</span> of UCLA Infected</span>
    </div>
  </div>
</div>
