---
title: Prof Donations
teaser:  How do UCLA professors' political donations stack up against USC and UC Berkeley?

authors:
  -
key_takeaways:
  - Aggregating across UCLA, USC, and UC Berkeley, over 50% of professors’ donations went to just 5 political organizations.
  - The donation amounts of UCLA professors during the months leading up to a national election nearly doubled from 2016 to 2020.
  - UCLA professors’ donations tend to spike in the months ahead of a national election.


featured_image:
  url:
og_image:
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

<canvas id='bubble-chart'></canvas>

<p style="font-size:smaller;color:gray;text-align:center">The area of each circle is proportional to the dollar amount of political donations by UCLA professors in that year.</p>

“Professors, partly because of their almost universally high levels of education, are likely to be [politically] engaged,” says Martin Gilens, Chair of the Department of Public Policy and Professor of Public Policy, Political Science, and Social Welfare at UCLA.

Using political campaign donations as a metric of political engagement, we compared the donations of professors from UCLA, USC, and UC Berkeley from January 2016 to December 2020 using data from the Federal Election Commission. We tracked the cumulative donation amounts of professors at all three universities over time, and looked at the top political campaigns that professors from each of the universities supported.

### UCLA Professors’ Donations over Time

<canvas id='timeline-chart'></canvas>

The above graph shows the cumulative donation amounts from UCLA professors towards political campaigns from January 1, 2016 to December 31, 2020. This encompasses the months leading up to the 2016 general election through the months following the 2020 general election, including the 2018 midterm elections.

Donations tended to spike right before national elections, both general and midterm. Donation amounts also increased for every national election relative to the prior national election.

“Pretty much every election has been more expensive than what came before it,” says Gilens. However, voter turnout for midterm elections has historically been much lower than that of general elections. The 2018 midterm cycle donation spike is an interesting anomaly, with 2018’s peak donation amount to the election surpassing 2016’s peak donation amount.

Donald Trump’s victory in the 2016 presidential election may have affected the higher donation amounts for both the 2018 and 2020 general elections. “Trump was a very unconventional candidate. And he ran a very unconventional campaign,” says Gilens.

The 2016 general election results might have spurred more UCLA professors to donate to political organizations. Some UCLA professors may have also donated more money than usual to political organizations.

### Breaking Down the Campaigns

<div>
  <div class="ucla-chart"> <canvas id='ucla-top-5'> </canvas> </div>
  <div class="ucb-chart"> <canvas id='ucb-top-5'> </canvas> </div>
  <div class="usc-chart"> <canvas id='usc-top-5'> </canvas> </div>
</div>

Across all three universities, just five campaigns raked in more than half of all donations made by professors to political organizations: ActBlue, Biden for President, Biden Victory Fund, Democratic Congressional Campaign Committee, and Democratic National Committee.

## <graphic of committee explanations>

Additionally, President Joe Biden’s presidential campaign in 2020 was among the top three campaigns supported by professors from all three universities, as measured by donations to Biden for President and Biden Victory Fund.

It’s not surprising that there was a lot of money flowing in the Democratic direction during national elections, says Gilens. The closeness of the 2020 national election may have also contributed to the spike in donations in the months leading up to the election.

“If people had perceived it as being… a nail biter presidential election, more of the money might have flowed in that direction, rather than to congressional elections”, says Gilens.

One political organization, ActBlue, made up around a quarter of all professors’ donations. Gilens says that donating to ActBlue may have allowed professors to contribute to campaigns in other states in the interests of promoting the party’s control in the House and the Senate.

### Comparing UCLA Professors’ Donations to USC, UC Berkeley

“Faculty in higher education… tend to [lean Democratic] in general,” says Gilens. However, Gilens notes that “there's… more liberal leaning disciplines and more conservative leaning disciplines…”, adding that “once you're… working in those fields, you tend to adopt the sort of worldviews and understandings that that field… encourages and focuses on.”
