---
title: UCLA Trash Breakdown
teaser: See how students sort trash and test your trash-sorting skills with a game
authors:
  - andrew_kan
key_takeaways:
  - In non-dining buildings, around 30% of trash by weight is placed in the landfill bin, 30% in the recycling bin, and 40% in the compost bin.
  - In the dining halls, 70-90% of food waste is still edible.
  - The breakdown of trash UCLA students generate is similar to average American.
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
  Walking around campus, one can spot the iconic trio of landfill, recycling, and compost bins nearly everywhere. Recycling and composting are more eco-friendly than throwing everything into landfill, but do students actually use these bins? The Daily Bruin investigates how students sort their trash into these bins around campus.
</p>

<p id="interactive-introduction">
  Think you already throw your trash in the correct bins? Think you don't but could if you tried? Think you're better than the average UCLA student at sorting trash? Try testing your trash-sorting skills with the interactive game below. Simply drag the waste items into the correct waste bin and compare your score with others!
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

#### Dining Halls

  <p>	At both Covel and DeNeve, 70% of food waste is edible. Feast is even more wasteful; 90% of its waste still edible. This may seem like a lot, but the average American isn't much better. According to a 2017 Natural Resources Defense Council report https://www.nrdc.org/sites/default/files/food-waste-city-level-report.pdf, the average American’s food waste is 68% edible. That doesn't excuse UCLA students from wasting so much food though. We have full control over how much food we take and eat and are constantly reminded of the Zero Food Waste by 2020 initiative when we return our plates. We have already normalized not taking trays, now it's time to normalize not wasting food.</p>

#### The Hill

  <p>Adding a recycling and compost bin has definitely helped redirect waste on the hill, with 78% of waste going into recycling or compost in Hedrick lounges and 64% of the waste going into compost in Hedrick bathrooms. The student rooms, however, are still 100% landfill, because there is no designated recycling or landfill bin in the room. As shown by the lounge data, perhaps adding compost and recycling bins into student rooms may help further reduce landfill waste. Similar to the dining halls, student recycling and compost percentages are similar to the rest of America. According to a 2018 EPA report, 52.5% of trash is sent to landfill, 25.8% is recycled, and 8.9% is composted, with the other 12.8% combusted.
  </p>

#### On-campus

  <p>Powell Library sends less than 14% of its trash to landfill, much less than the Hill. This may be because the average student has less landfill trash, such as cardboard, to throw away on campus than on the Hill. Nevertheless, it shows that students are correctly sorting their trash in Powell Library. The different types of recyled materials indicate that students also know which types of trash can be recycled.
  </p>

#### Conclusion

  <p>UCLA students are as good as handling their trash as the average American. This isn't necessarily bad though. Americans now recycle and compost more than twice as much than in the 1990s (from less than 15% to 34.7%). However, we can always do better. Though the amount and types of trash differ per person, students can be more aware and make a conscious effort to sort their trash and generate less food waste, especially at dining halls. Let's strive for a greener UCLA.
  </p>

  <p style="font-size: 15px">
    Things to do:
    <ul style="font-size: 14px">
      <li>make backend for interactive work, talk with neil</li>
      <li>make stuff prettier and write some more analysis</li>
    </ul>
  </p>
