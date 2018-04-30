---
title: USAC Campaign Finances
teaser: yaaaaaa
featured_image:
    url: suspicious-activity/map.png
og_image: suspicious-activity/map.png
authors:
  - nathan_smith
  - simran_vatsa
scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js
  - /datasets/usac-campaign-finances/data.js
  - /js/posts/usac-campaign-finances/app.js
---

lorem ipsum amit dolor

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
  <input id="show-all-candidates" type="checkbox" checked>
  <label for="show-all-candidates">Show all candidates</label>
</div>

<canvas id="chart"></canvas>

