---
title: 
teaser: 

authors: 
  - nalin_chopra
  - jessica_li

key_takeaways:

featured_image:
  url: 
  caption: 
og_image: 

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  - //ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
  - //d3js.org/d3.v6.min.js
  - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js
  - //cdn.rawgit.com/Keyang/node-csvtojson/d41f44aa/browser/csvtojson.min.js
  - /js/posts/satellite-article/precipitation_chart.js
  - /js/posts/satellite-article/fire_map.js
  - /js/posts/satellite-article/nouislider.js
  - //cdnjs.cloudflare.com/ajax/libs/leaflet-ajax/2.1.0/leaflet.ajax.js

stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/satellite-article/style.css
  - /css/posts/satellite-article/nouislider.css
  - //unpkg.com/leaflet@1.8.0/dist/leaflet.css
  - //code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css

---
<script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
crossorigin="">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-ajax/2.1.0/leaflet.ajax.js"></script> 
<script type="module" src="/js/posts/satellite-article/nouislider.js"></script>

### Introduction

### About the Data


<div id="map">
    <div id="overlay"></div>
    <div id="slider"></div>
</div>

