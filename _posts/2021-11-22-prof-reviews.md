---
title: Professor Reviews
teaser: 
authors:
  - 

key_takeaways:
  - 

featured_image:
  url: 
  caption: 
og_image:

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  - //ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
  - //d3js.org/d3.v7.min.js
  # - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  # - //d3js.org/d3.v7.min.js
  - //cdnjs.cloudflare.com/ajax/libs/d3-cloud/1.2.5/d3.layout.cloud.js
  - /js/posts/prof-reviews/scatter.js
  - /js/posts/prof-reviews/bar_chart.js

  # - //rawgit.com/jasondavies/d3-cloud/master/build/d3.layout.cloud.js

stylesheets:
  - /css/posts/prof-reviews/style.css

---


<!-- <script type="module" src="/js/posts/prof-reviews/require.js"></script> -->
<script type="module" src="/js/posts/prof-reviews/dropdownMenu.js"></script>
<script type="module" src="/js/posts/prof-reviews/word_cloud.js"></script>
<script type="module" src="/js/posts/prof-reviews/word_freq.js"></script>
<script type="module" src="/js/posts/prof-reviews/rating_vis2.js"></script>
<script type="module" src="/js/posts/prof-reviews/scatter.js"></script>
<!-- <script type="module" src="/js/posts/prof-reviews/bar_chart.js"></script> -->
<script type="module" src="/js/posts/prof-reviews/percent_pos.js"></script>


### Comparing Ratings For Male and Female Professors
<!-- bar chart -->
<div id="stats-menu3"></div>
<div id="rating-svg-div">
</div>

### Comparing Words Between Male and Female Professor Reviews
<!-- word cloud -->
<div id="stats-menu2a" style="display: inline; float: left;">
  <label for="num-words-input2" 
    style="display: inline-block; text-align: right;">
    Show top
  </label>
  <input type="number" min="10" max="100" step="10" value="30" style="width:5em;" id="num-words-input2">
</div> 
<div id="stats-menu2" style="display: inline; float: left;">
</div>
<div id="cloud-svg-div">
</div>

### Comparing Adjectives Between Male and Female Professor Reviews
<!-- lollipop chart -->
<div id="stats-menu1a" style="display: inline; float: left;">
  <label for="num-words-input1" 
    style="display: inline-block; text-align: right;">
    Show top
  </label>
  <input type="number" min="10" max="50" step="5" value="20" style="width:4em;" id="num-words-input1">
</div> 
<div id="stats-menu1" style="display: inline; float: left;">
</div>
<div id="lollipop-svg-div">
</div>



### Other Words Most Commonly Used for Female versus Male Professors
<div class="chart-container">
  <canvas id='scatter'></canvas>
</div>

### Percentage of Positive Reviews
<div class="chart-container">
  <canvas id='myChart'></canvas>
</div>
