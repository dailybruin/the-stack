---
title: Presidential Campaign Donations
teaser:
authors:
  - asdf
key_takeaways:
  - asdf
featured_image:
  url: meal-plan-swipe-deduction/graph.svg
og_image: meal-plan-swipe-deduction/graph.png
stylesheets:
  - /css/posts/presidential-campaign-donations/app.css
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.css
scripts:
  - //d3js.org/d3.v3.min.js
  - //labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js
  - //code.jquery.com/jquery-1.11.2.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.js
  - //cdnjs.cloudflare.com/ajax/libs/d3-tip/0.6.7/d3-tip.js
  - /js/posts/presidential-campaign-donations/bar-charts.js
  - /js/posts/presidential-campaign-donations/donut-chart.js


---
*Story by Shreya Maskara. Graphics by Nick Liu, Alex Guziak, Amber Won, Jennifer Xu, Li-Wei Chi, & Chang Liu.*
<div id="donut-chart"></div>

<div class="ui inline dropdown" id="d1">
  <div class="text">
    Candidate
  </div>
  <i class="dropdown icon"></i>
  <div class="menu">
    <div class="item">
      Bernie Sanders  
    </div>
    <div class="item">
      Donald Trump
    </div>
    <div class="item">
      Hillary Clinton
    </div>
    <div class="item">
      Larry Lessig
    </div>
    <div class="item">
      Martin O'Malley
    </div>
    <div class="item">
      Ben Carson
    </div>
    <div class="item">
      Ted Cruz
    </div>
    <div class="item">
      John Kasich
    </div>
    <div class="item">
      Carly Fiorina
    </div>
    <div class="item">
      Marco Rubio
    </div>
    <div class="item">
      Rand Paul
    </div>
  </div>
</div>
<div class="ui inline dropdown" id="d2">
  <div class="text">
    Filter
  </div>
  <i class="dropdown icon"></i>
  <div class="menu">
    <div class="item">
      Amount
    </div>
    <div class="item">
      Donators
    </div>
  </div>
</div>

<div id="vertical-bar"></div>
<div id="horizontal-bar"></div>


