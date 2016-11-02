---
title: When should you go to gym?
teaser: teaser ...

authors:
    - tyson_ni
key_takeaways:
    - ...
    - ...
    - ...
featured_image:
    url: gym-traffic/wooden-heat-chart.png
    og_image: gym-traffic/wooden-heat-chart.png
scripts:
    - //code.jquery.com/jquery-3.1.1.min.js
    - //d3js.org/d3.v4.min.js
    - /js/posts/gym-traffic/line-chart.js
    - /js/posts/gym-traffic/heat-chart.js
stylesheets:
    - /css/posts/gym-traffic/app.css
    - /css/posts/gym-traffic/semantic.min.css
---

Historical patterns suggest
Wooden is <span id='wooden-traffic-text'></span>, and
BFit is <span id='bfit-traffic-text'></span>
right now.

<div id="viz-container">

  <div id='viz-selections'>

    <select id='pick-facility'>
      <option value='wooden'>Wooden</option>
      <option value='bfit'>BFit</option>
      <option value='both'>Wooden + BFit</option>
    </select>

    <select id='pick-scale'>
      <option value='relative'>% Relative to peak</option>
      <option value='absolute'>Number of people</option>
    </select>

  </div>

  <div id='line-chart'></div>

  <div id='heat-chart'>

    <div class='ui centered medium header'>Wooden</div>
    <div class='ui centered one column grid'>
      <div class='twelve wide column' id='wooden-heatmap'></div>
    </div>

    <div class='ui centered medium header'>BFit</div>
    <div class='ui centered one column grid'>
      <div class='twelve wide column' id='bfit-heatmap'></div>
    </div>

    <div class='ui centered medium header'>Wooden vs BFit</div>
    <div class='ui centered one column grid'>
      <div class='twelve wide column' id='comparison-heatmap'></div>
    </div>

  </div>

</div>



## About the data
...
