---
title: When and where you should go workout?
teaser: An unprecendent look at facility traffic at Wooden and BFit

authors:
    - tyson_ni
key_takeaways:
    - Data provided by UCLA Recreation show clear and consistent usage patterns across Wooden and BFit
    - Use the graphics below to decide when and where to workout 
featured_image:
    url: gym-traffic/comparison-chart.png
    og_image: gym-traffic/comparison-chart.png
stylesheets:
    - /css/posts/gym-traffic/app.css
    - /css/posts/gym-traffic/semantic.min.css
scripts:
    - //code.jquery.com/jquery-3.1.1.min.js
    - //d3js.org/d3.v4.min.js
    - /js/posts/gym-traffic/line-chart.js
    - /js/posts/gym-traffic/heat-chart.js

---

1.5 million entrance records at UCLA Recreation facilities can tell us a lot about
when students like going to the gym and inform when and where you should go work out ...

## Explain data ...
The most immediate use of new data from 2015-2016 school year provided by ucla rec officials to Daily Bruin
is to estimate traffic. While the anonymized entrace records provide data on when and where students enter a facility,
a couple assumptions were needed to estimate traffic ... More details are explained in the methodology section ...
For now, you can be confident that the estimates are accurate ...


## Live traffic estimate ...

Right now, Wooden is <span id='wooden-traffic-text'></span>, and
BFit is <span id='bfit-traffic-text'></span>
.


## Choosing between Wooden and BFit
...


  <div class='ui centered medium header'>Wooden vs. BFit</div>
  <div class='ui centered one column grid'>
    <div class='twelve wide column heat-chart' id='comparison-heatmap'></div>
  </div>



## Wooden
...

<div class='ui centered medium header'>Wooden</div>
<div class='ui centered one column grid'>
  <div class='twelve wide column heat-chart' id='wooden-heatmap'></div>
</div>


## BFit
<div class='ui centered medium header'>BFit</div>
<div class='ui centered one column grid'>
  <div class='twelve wide column heat-chart' id='bfit-heatmap'></div>
</div>


## Go deeper into traffic trends  
...

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


## Methodology
...
