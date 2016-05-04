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
  - /css/posts/presidential-campaign-donations/style.css
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.css
scripts:
  - //d3js.org/d3.v3.min.js
  - //labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js
  - //code.jquery.com/jquery-1.11.2.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.js
  - //cdnjs.cloudflare.com/ajax/libs/d3-tip/0.6.7/d3-tip.js
  - /js/posts/presidential-campaign-donations/vertical-bar.js
  - /js/posts/presidential-campaign-donations/animated-horizontal-bar.js
# - /js/posts/presidential-campaign-donations/script.js
  

---
*Story by Shreya Maskara. Graphics by Nick Liu, Alex Guziak, Amber Won, Jennifer Xu, Li-Wei Chi, & Chang Liu.*

<div id="vertical-bar"></div>
<div class="ui inline dropdown" id="d1">
  <div class="text">
    1
  </div>
  <i class="dropdown icon"></i>
  <div class="menu">
    <div class="item">
      1
    </div>
    <div class="item">
      2
    </div>
    <div class="item">
      3
    </div>
    <div class="item">
      4
    </div>
    <div class="item">
      5
    </div>
    <div class="item">
      6
    </div>
    <div class="item">
      7
    </div>
    <div class="item">
      8
    </div>
    <div class="item">
      9
    </div>
    <div class="item">
      10
    </div>
    <div class="item">
      11
    </div>
    <div class="item">
      12
    </div>
    <div class="item">
      13
    </div>
    <div class="item">
      14
    </div>
    <div class="item">
      15
    </div>
  </div>
</div>
<div class="ui inline dropdown" id="d2">
  <div class="text">
    Donators
  </div>
  <i class="dropdown icon"></i>
  <div class="menu">
    <div class="item">
      Donators
    </div>
    <div class="item">
      Amount
    </div>
  </div>
</div>

<!-- <div>
  <div id="donutChart"></div>
  <div id="barChart"></div>
</div> -->

<div id="animated-horizontal-bar"></div>
<div class="ui inline dropdown" id="d3">
  <div class="text">
    Candidate
  </div>
  <i class="dropdown icon"></i>
  <div class="menu">
    <div class="item">
      Hillary Clinton
    </div>
    <div class="item">
      Bernie Sanders  
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
      Jeb Bush
    </div>
    <div class="item">
      Rick Perry
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
    <div class="item">
      Donald Trump
    </div>
    <div class="item">
      Lindsey Graham
    </div>
  </div>
</div>
