---
title: UCLA in the Record Books
teaser: One question that always comes up with sports records is whether we've reached that "plateau" of what's humanly possible. Looking at a small subset of statistical records in collegiate sports may give us some insight.

authors:
  - tyler wu
  - nancy zhang
  - mansa krishna

key_takeaways:
  - individual records do/do not correlate with post-season success in men's basketball
  - UCLA has had individual players dock record-level shooting, rebounding, and assists

featured_image:
  url: prof-reviews/web.stack.prof.reviews.KM.jpg
  caption: (Photo by Kanishka Mehra/Daily Bruin senior staff. Photo illustration by Anika Chakrabarti/Assistant Photo editor)
og_image: prof-reviews/web.stack.prof.reviews.KM.jpg

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  - //ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
  - //d3js.org/d3.v6.min.js
  - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - //cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/0.5.5/chartjs-plugin-annotation.min.js
  - //code.jquery.com/jquery-3.6.0.min.js
  

stylesheets:
---

<script type="module" src="/js/posts/sports-records/basketball.js"></script>

### Basketball

With the UCLA Men's basketball team's recent foray in March Madness, now might be as a good time as ever to revisit some of the historic records UCLA Basketball has set in the past.

<!-- scatter plot -->
<div>
  <div id="mbb-stats-menu" style="display: inline; float: left;"></div>
  <canvas id="men-bb-chart"></canvas>
</div>



In terms of individual records, UCLA men's basketball appears to do the best with certain categories of statistics. Four different players: Jelani McCoy (75.6% FG%), Lonzo Ball (73.15% 2PT%), Darren Collison (52.5% 3PT%), and Rod Foster (95% FT%), appear in the top 100 leaders for their respective shooting statistics. UCLA has also had a couple historic rebounders: Bill Walton in 1973 with 506 and Kevin Love with 415, and assistors (a very rarely used term): Larry Drew with 256 and Lonzo Ball with 274.

But do individual record-bearers correlate with success in March Madness tournament? Let's take a look:
<div>
  <img src='img\posts\sports-records\results.png' alt='ncaa-mens-results'>
  <!-- <canvas id="men-bb-chart2"></canvas> -->
</div>

Since the data is only from 1992 to 2021, it should be noted that the above plot is very much an incomplete picture. Notably, UCLA has had 10 championships from 1964-1975 that are not accounted for here. Keeping this in mind, there are still some interesting patterns to note.  
Right off the bat it seems like having a record-breaking player on your team is not necessary for March Madness success. Our championship in 1995 (defeating Arkansas, 89-78) was with zero record-setters, and our runner-up season in 2006 was similarly lacking in a record-setter.

UCLA's Women's basketball has also seen it's fair share of success. With the most notable player statistically being Denise Curry, leading UCLA in highest points in a single season (930) as well as rebounds (360).
<div>
  <div id="wbb-stats-menu" style="display: inline; float: left;"></div>
  <canvas id="women-bb-chart"></canvas>
</div>

### Swimming/Track & Field

### Volleyball

### About the data

The data was collected from Sports-Reference.com, NCAA, and __. Most of the data spans from the 1990s to 2021, and involves individual record statistics.

#### Methodology

Since we wanted to inspect UCLA's position in sports records, if no UCLA player was on the leaderboard, we included UCLA"s all-time (number 1) leader in that category.
