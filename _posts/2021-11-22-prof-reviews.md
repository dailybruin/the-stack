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
  - //d3js.org/d3.v7.min.js
  - //cdnjs.cloudflare.com/ajax/libs/d3-cloud/1.2.5/d3.layout.cloud.js
  # - //rawgit.com/jasondavies/d3-cloud/master/build/d3.layout.cloud.js

stylesheets:
  - /css/posts/prof-reviews/style.css

---

### Comparing Individual Words Between Male and Female Professor Reviews
<!-- <script type="module" src="/js/posts/prof-reviews/require.js"></script> -->
<script type="module" src="/js/posts/prof-reviews/dropdownMenu.js"></script>
<script type="module" src="/js/posts/prof-reviews/word_freq.js"></script>
<script type="module" src="/js/posts/prof-reviews/word_cloud.js"></script>

<div id="stats-menu1" style="display: inline; float: left;">
</div>
<div id="stats-menu1a" style="display: inline; float: left; padding-left: 2em">
  <label for="num-words-input1" 
    style="display: inline-block; text-align: right">
    Number of words
  </label>
  <input type="number" min="15" max="40" step="5" value="20" id="num-words-input1">
</div> 

<div id="stat-svg-div">
</div>

<div id="stats-menu2" style="display: inline; float: left;">
</div>
<div id="stats-menu2a" style="display: inline; float: left;">
  <label for="num-words-input2" 
    style="display: inline-block; text-align: right; padding-left: 2em">
    Number of words
  </label>
  <input type="number" min="10" max="100" step="10" value="30" id="num-words-input2">
</div> 

<div id="num-words2">
</div>

<div id="cloud-svg-div">
</div>