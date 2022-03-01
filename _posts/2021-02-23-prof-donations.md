---
title: "Put Your Money Where Your Politics Are: Professors’ Political Donations"
teaser: How do UCLA professors' political donations stack up against USC and UC Berkeley?

authors:
  - maria_becerra
  - derrick_chau
  - keri_chen
  - brittney_le
  - vivian_luk
  - laurel_woods

key_takeaways:
  - Aggregating data across UCLA, USC and UC Berkeley, more than 50% of professors’ donations went to just five political organizations.
  - In 2020, UCLA professors donated nearly three times as much to political campaigns as they did in 2016.
  - UCLA professors’ donations tend to spike in the months ahead of a national election.

featured_image:
  url: prof-donations/cover_photo.png
og_image: prof-donations/cover_photo.png

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  - //ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
  - //d3js.org/d3.v6.min.js
  - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - /js/posts/prof-donations-2021/bubble-chart.js
  - /js/posts/prof-donations-2021/ucla-top-5.js
  - /js/posts/prof-donations-2021/ucb-top-5.js
  - /js/posts/prof-donations-2021/usc-top-5.js
  - /js/posts/prof-donations-2021/monthly-donations-line-chart.js

stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/prof-donations/app.css
---

“Professors, partly because of their almost universally high levels of education, are likely to be (politically) engaged,” said Martin Gilens, chair of the department of public policy and professor of public policy, political science and social welfare at UCLA.

Analyzing political engagement through the metric of political campaign donations, we tracked the donations from UCLA professors over the past two presidential election cycles, using publicly available data from the Federal Election Commission. Though the FEC does not require employment or occupation information from donors, campaigns and candidates are required to report the employment and occupation information of donors who contribute more than \$200 in a single calendar year to the FEC. Many campaigns and candidates choose to collect and report such information from all donors to the FEC.

We also compared the donations of professors from UCLA, USC and UC Berkeley from Jan. 1, 2019 to Dec. 31, 2020 and looked at the top political campaigns that professors from each of the universities supported. For all three universities, our data includes only contributors who self-reported their profession as “professor” and their state as California. For UCLA, our data consists of donors who self-reported their employer as “UCLA” or “University of California, Los Angeles.” For USC, our data includes donors who self-reported their employer as “USC” or “University of Southern California.” For UC Berkeley, our data includes donors who self-reported their employer as “UCB,” “UC Berkeley” or “University of California, Berkeley.” We would like to note that UC Berkeley had roughly half the number of entries of both UCLA and USC.

<div class="small-line-break"></div>

### UCLA Professors’ Donations over Time

<div class="chart-container">
  <canvas id='timeline-chart'></canvas>
</div>

<p class="chart-descrip">The above graph shows the monthly cumulative donation amounts from UCLA professors towards political campaigns from Jan. 1, 2016 to Dec. 31, 2020. This encompasses the months leading up to the 2016 general elections through the months following the 2020 general elections, including the 2018 midterm elections.</p>

<div class="bubble-container">
  <canvas id='bubble-chart'></canvas>
  <p class="chart-descrip">The area of each circle is proportional to the amount of political donations by UCLA professors in that year.</p>
</div>

<div class="small-line-break"></div>

Donations tended to spike right before national elections, both general and midterm. Donation amounts also increased for every national election relative to the prior national election.

“Pretty much every election has been more expensive than what came before it,” Gilens said. However, voter turnout for midterm elections has historically been much lower than that of general elections. The 2018 midterm cycle donation spike is an interesting anomaly, with 2018’s peak donation amount surpassing 2016’s peak donation amount.

Former President Donald Trump’s victory in the 2016 presidential election may have affected the higher donation amounts for both the 2018 midterm and 2020 general elections.

Interestingly, donations to House of Representatives campaigns in particular jumped from $35,805.40 in the 2016 national elections to $184,492.34 during the 2018 midterm elections, an increase of more than 500%. For comparison, donations to Senate campaigns in particular only increased from $69,852.72 in 2016 to $70,877.44 in 2018.

<div class="small-line-break"></div>

### Breaking Down the Campaigns
<div class = "chart-container">
  <div class="ucla-chart"> <canvas id='ucla-top-5'> </canvas> </div>
  <div class="ucb-chart"> <canvas id='ucb-top-5'> </canvas> </div>
  <div class="usc-chart"> <canvas id='usc-top-5'> </canvas> </div>
</div>
<img class="graphic" src="/img/posts/prof-donations/campaign-explanations.png">

Across all three universities, just five campaigns raked in more than half of all donations made by professors to political organizations: ActBlue, Biden for President, Biden Victory Fund, Democratic Congressional Campaign Committee and Democratic National Committee.

Additionally, President Joe Biden’s presidential campaign in 2020 was among the top three campaigns supported by professors from all three universities, as measured by donations to Biden for President and Biden Victory Fund.

It’s not surprising that there was a lot of money flowing in the Democratic direction during national elections, Gilens said. The closeness of the 2020 presidential race may have also contributed to the spike in donations in the months leading up to the election.

“If people had perceived it as being ... a nail-biter presidential election, more of the money might have flowed in that direction, rather than to congressional elections,” Gilens said.

One political organization, ActBlue, made up around a quarter of all professors’ donations. Donating to ActBlue may have allowed professors to contribute to campaigns in other states in the interests of promoting the Democratic Party’s control in the House and the Senate, serving as “one giant funnel ... that facilitates donations to individual campaigns,” Gilens said.

“Faculty in higher education ... tend to (lean Democratic) in general,” Gilens said. “There's ... more liberal-leaning disciplines and more conservative-leaning disciplines. Once you're ... working in those fields, you tend to adopt the sort of worldviews and understandings that that field ... encourages and focuses on.”

In social science departments like political science and public policy, professors’ political beliefs relate to their work more broadly than professors in departments such as chemistry, which lack explicit political content, Gilens said.

Ultimately, though donations are only one metric of political engagement, professors’ political donations across UCLA, USC and UC Berkeley reveal a generally Democratic trend.
