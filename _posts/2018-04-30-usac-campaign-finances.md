---
title: A look inside USAC candidate campaign finances
teaser: Compare how each candidate spent their campaign money in this year’s election.
featured_image:
  url: usac-campaign-finances/visualization.png
og_image: usac-campaign-finances/visualization.png
authors:
  - nathan_smith
scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js
  - /datasets/usac-campaign-finances/data.js
  - /js/posts/usac-campaign-finances/app.js
---

Eighteen candidates spent a total of \$6,954.25 on their campaigns in this year’s undergraduate student government election.

Candidates running in the Undergraduate Students Association Council election were required to submit the first round of their campaign expense forms to the election board by midnight April 20. Under the election code [approved by the council in March](https://dailybruin.com/2018/03/14/usac-aims-to-decrease-campaign-spending-in-spring-elections/), all candidates had a campaign spending limit of $600, and the election board plans to use 10 percent of its budget, or $3,750, to partially reimburse candidates for their campaign expenses.

As of the Friday deadline, however, only 18 candidates reported campaign-related expenditures.

Common purchases this year included flyers, T-shirts, websites, stickers and signboards. Some candidates also chose to purchase branded items including credit card holders, mood cups and bottle openers. Andrew Sokoler, a general representative candidate running with the Candidates Operating Clearly slate, reported spending \$33 at Council Thrift Shops on “campaign clothing” for himself, which The Stack assumes refers to the clothing he wore to his photo for The Bruin’s [slate profile on Candidates Operating Clearly](https://dailybruin.com/2018/04/24/usac-candidate-creates-one-person-slate-to-bring-transparency-to-campus/).

Most candidates who raised funds chose to self-fund the entirety of their expenditures. Seventeen out of the 39 candidates listed themselves as their only source of funding; of those, 11 funded themselves to the maximum $600 limit, even if they did not spend the full amount by the April 20 deadline. Jessica Kim, a Bruins United transfer student representative candidate, raised her $600 through a donation from her father. Lior Behdadnia, a Financial Supports Commision candidate running with Bruins United, was the only candidate to receive a donation from a corporate entity in the form of a \$250 donation from mobile application Barpay in exchange for Barpay logo placement on Bruins United T-shirts. Barpay has donated to Bruins United in the past – the slate was notably [sanctioned during last year’s elections for failing to disclose a donation from Barpay](https://dailybruin.com/2017/05/03/bruins-united-fails-to-disclose-sponsorship-receives-24-hour-ban/).

Only two candidates – independent candidate Jamie Kennerk running for external vice president and Julia Ho-Gonzalez, an independent candidate running for Facilities commissioner – reported contributions from multiple individual contributors.

Bruins United was the only slate to use campaign money to promote the slate. No candidate from Leaders Influencing Tomorrow or For the People reported raising any money. Sokoler reported raising \$300 but did not note any of his expenditures as slate expenditures.

The second and final deadline for candidates to turn in their expense accounts was midnight Sunday. The Stack will update this post when information from those accounts becomes available.

<div>
  <select name="position" id="positions">
    <option selected>All</option>
    <option>President</option>
    <option>Internal Vice President</option>
    <option>External Vice President</option>
    <option>General Representative</option>
    <option>Academic Affairs Commissioner</option>
    <option>Campus Events Commissioner</option>
    <option>Community Service Commissioner</option>
    <option>Cultural Affairs Commissioner</option>
    <option>Facilities Commissioner</option>
    <option>Financial Supports Commissioner</option>
    <option>Student Wellness Commissioner</option>
    <option>Transfer Student Representative</option>
  </select>
  <select name="slate" id="slates">
    <option selected>All</option>
    <option>Bruins United</option>
    <option>For the People</option>
    <option>Leaders Influencing Tomorrow</option>
    <option>Candidates Operating Clearly</option>
  </select>
  <input id="show-all-candidates" type="checkbox">
  <label for="show-all-candidates">Show all candidates</label>
</div>

<canvas id="chart"></canvas>
