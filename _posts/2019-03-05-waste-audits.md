---
title: UCLA Waste Bin Breakdown
teaser: Learn how much students recycle and compost, and test your trash-sorting skills
authors:
  - andrew_kan
key_takeaways:
  - In non-dining buildings, around 30% of trash by weight is placed in the landfill bin, 30% in the recycling bin, and 40% in the compost bin.
  - In dining halls, roughly 80% of food waste is edible.
featured_image:
  url: waste-audits/placeholder.png
og_image: waste-audits/placeholder.png
stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.css
  - /css/posts/waste-audits/app.css
scripts:
  - //code.jquery.com/jquery-1.11.2.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/form.min.js
  - /js/posts/waste-audits/audits.js
---

<script src="http://d3js.org/d3.v3.min.js"></script>

<p>
  Walking around campus, one can spot the iconic trio of landfill, recycling, and compost bins nearly everywhere. These three bins are more eco-friendly than just a general trash bin, but do students actually put their trash into the recycling and compost bins? The Daily Bruin investigates how students sort their trash into these bins around campus.
</p>

<p>
  Ever wondered what bin you should put your just-finished burger into? Try testing your trash-sorting skills with the interactive game below. Simply drag the waste items into the correct waste bin and compare your score with others!
</p>

<div>
</div>
<div id="interactive"><h1>Interactive goes here</h1></div>

 <div id="title">
    <p style="font: 36px Garamond; text-align: center">UCLA Waste Bin Breakdown (% by weight)</p>
  </div>

  <div id="dropdown-menu"></div>
  <div class="graph-container">
    <div id="landfillGraph"></div>
    <div id="recyclingGraph"></div>
    <div id="compostGraph"></div>
  </div>
  <p style="font-size: 15px">
    Things to do:
    <ul style="font-size: 14px">
      <li>make backend for interactive work, talk with neil</li>
      <li>make stuff prettier and write some more analyasis</li>
    </ul>
  </p>
