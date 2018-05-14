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
- Top/bottom 10 (20?) wifi locations (just a table)
- Map out strongest/weakest points on campus? (possibly also a table)
- Look into Mapbox?
- Scripts for pre-dividing data (so calculations aren't done every time)
  - Although the load time isn't too bad right now; will discuss if necessary at all
    - RY: agree, codes messy as is an would be a chore to shift everything around
  - Would probably be done in JS for nice object handling and d3.geoContains()?
    -RY: need to look into g3.geoContains 10000000%
- GeoJSONs for campus areas (in progress; Hill and most campus buildings are done)
  - talk about separation points for other buildings i.e. Geology/Young, MS/Boelter, PAB/Knudsen, SproulHall/Carnesale, HedrickHall/Study
  - http://geojson.io/#id=github:zhaoalex/ucla-geojsons/blob/master/generated.geojson&map=16/34.0709/-118.4465
    - RY: You're a god, I assume I can help?
- Envisioning a toggle for buildings (a building view) in the heatmap; this way you can see both specific data points for every spot in the building AND overall building averages
  - Definitely have something like a highlighted border around buildings for a building view and a tooltip
    - RY: explain in person or something, not sure exactly exactly what you mean
  - Could even zoom into buildings and zoom out for detailed view?
    - RY: Zooming possible
  - Buildings are also big with lots of varying wifi signals; what do we do about that (if anything)?
    - RY: Tend towards doing nothing, just state we are doing averages of buildings and ymmv with positions in the acutal buildings
- Gaussian blur could be fun, but look into feasibility and appearance
  - RY: theres a comment with the blur inplace, looks like trash tbh :(
- Switch to SECURE_RES or WIFI_RES on the heatmap and you can see points that very much aren't on the Hill; not a good sign, hopefully our data isn't too bad haha
  - RY: haha... ha :(

<div class="rough-wifi-heatmap-wrapper">
  <div class="wifi-heatmap-text-wrapper">
    <p class="wifi-heatmap-str">HOVER TO SEE VALUE</p>
    <p class="wifi-heatmap-lat">HOVER TO SEE VALUE</p>
    <p class="wifi-heatmap-lon">HOVER TO SEE VALUE</p>
  </div>
</div>

<div id="avg-network-str-bar-chart" />
