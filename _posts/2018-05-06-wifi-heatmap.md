---
title:  wifi heatmap
teaser: teasetease
featured_image:
    url: usac-campaign-finances/visualization.png
og_image: usac-campaign-finances/visualization.png
authors:
  - nathan_smith
stylesheets:
  - /css/posts/wifi-heatmap/app.css
scripts:
  - //d3js.org/d3.v5.min.js
  - //cdnjs.cloudflare.com/ajax/libs/d3-tip/0.9.0/d3-tip.min.js
  - /js/posts/wifi-heatmap/app.js
  - /js/posts/wifi-heatmap/wificomp_barchart.js
---

Wifi.

To be added/worked on:
- Top/bottom 10 (20?) wifi locations
- Map out strongest/weakest points on campus?
- Look into Mapbox?
- Scripts for pre-dividing data (so calculations aren't done every time)
- GeoJSONs for campus areas

<div class="rough-wifi-heatmap-wrapper">
  <div class="wifi-heatmap-text-wrapper">
    <p class="wifi-heatmap-str">HOVER TO SEE VALUE</p>
    <p class="wifi-heatmap-lat">HOVER TO SEE VALUE</p>
    <p class="wifi-heatmap-lon">HOVER TO SEE VALUE</p>
  </div>
</div>

<div id="avg-network-str-bar-chart" />
