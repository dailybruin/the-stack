---
title: UCLA Waste Bin Breakdown
teaser: See how students sort trash and test your trash-sorting skills with a game
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
  <br/>
  <div id="dropdown-menu"></div>
  <div class="graph-container">
    <div id="landfillGraph"></div>
    <div id="recyclingGraph"></div>
    <div id="compostGraph"></div>
  </div>

#### Dining Halls

  <p>The vast amount of waste is still edible or liquid, with non-edible only 30% by weight for DeNeve and Covel and less than 10% for </p>

#### The Hill

  <p>Adding a recycling and compost bin has definitely helped redirect waste on the hill, with 78% of waste going into recycling or compost in Hedrick lounges and 64% of the waste going into compost in Hedrick bathrooms. The student rooms, however, are still 100% landfill, because there is no designated recycling or landfill bin in the room. As shown by the lounge data, perhaps adding compost and recycling bins into student rooms may help further reduce landfill waste. Similar to the dining halls, student recycling and compost percentages are similar to the rest of America. According to a 2018 EPA report, 52.5% of trash is sent to landfill, 25.8% is recycled, and 8.9% is composted, with the other 12.8% combusted.
  </p>

#### On-campus

  <p>Powell Library has significantly more trash being composted and significantly less trash being sent to landfill than on the hill. This may be because the average student eats more often in Powell Library than in their room and because students have less landfill trash to throw away on campus.
  </p>

#### Conclusion

  <p>UCLA students are not much better with their trash than the average American. Though the amount and types of trash differ per person, more awareness and conscious effort by students could reduce the amount of trash we send to landfill every year, especially in the dining halls.
  </p>

  <p style="font-size: 15px">
    Things to do:
    <ul style="font-size: 14px">
      <li>make backend for interactive work, talk with neil</li>
      <li>make stuff prettier and write some more analysis</li>
    </ul>
  </p>
