---
title: UCLA Waste Bin Breakdown
teaser: Learn how often students recycle and compost, and test your trash-sorting skills
authors:
  - andrew_kan
key_takeaways:
  - In non-dining buildings, around 30% of trash by weight is placed in the landfill bin, 30% in the recycling bin, and 40% in the compost bin.
  - In dining halls, roughly 80% of food waste is edible.
featured_image:
  url: waste-audits/placeholder.png
og_image: waste-audits/placeholder.png
stylesheets:
  - /css/posts/waste-audits/app.css
scripts:
  - //https://d3js.org/d3.v5.min.js
  - /js/posts/waste-audits/audits.js
---
<style>
    select {
      display: block;
    }

    #landfillGraph .bar {
      fill: tan;
      opacity: 0.8;
    }

    #recyclingGraph .bar {
      fill: lightblue;
      opacity: 0.8;
    }

    #compostGraph .bar {
      fill: lightgreen;
      opacity: 0.8;
    }

    .axis path,
    .axis line {
      fill: none;
      stroke: #000;
      shape-rendering: crispEdges;
    }

    .graph-container {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
    }
  </style>
<p>
  Walking around campus, one can easily spot the trio of landfill, recycling, and compost bins. Recycling and composting is more eco-friendly than throwing everything into the landfill, but how often do students actually do so? The Daily Bruin investigates how students sort their trash into these bins around campus.
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
    <div id="landfillLegend"></div>
    <div id="recyclingGraph"></div>
    <div id="recyclingLegend"></div>
    <div id="compostGraph"></div>
    <div id="compostLegend"></div>
  </div>
  <p style="font-size: 15px">
    Things to do:
    <ul style="font-size: 14px">
      <li>tried to make transitions work for like 2 hours but never did correctly :( </li>
      <li>get copy illustrations, message nicole</li>
      <li>make backend for interactive work, talk with neil</li>
      <li>integrate numerical weights somewhere</li>
    </ul>
  </p>
