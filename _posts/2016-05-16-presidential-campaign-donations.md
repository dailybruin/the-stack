---
title: How do campaign contributions at the UC differ by campus and job?
teaser: The answer may or may not surprise you. 
authors:
  - ryan_leou
  - chang_liu
key_takeaways:
  - UC donors gave overwhelmingly more to Democratic candidates than Republican. 
  - Professors and health workers gave the most money in total contributions.
  - UCLA, UC Berkeley, and UC San Francisco gave the most money total out of all UC campuses.
featured_image:
  url: presidential-campaign-donations/graph.svg
og_image: presidential-campaign-donations/graph.png
stylesheets:
  - /css/posts/presidential-campaign-donations/app.css
  - /css/posts/presidential-campaign-donations/semantic.min.css
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.css
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/form.min.css
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/checkbox.min.css
scripts:
  - //d3js.org/d3.v3.min.js
  - //code.jquery.com/jquery-1.11.2.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.js
  - /js/posts/presidential-campaign-donations/bar-charts.js
  - /js/posts/presidential-campaign-donations/donut-chart.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/form.min.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/checkbox.min.js

---

Contributions from the University of California show different presidential preferences for different campuses and communities.

Because the Daily Bruin does not have the resources to conduct comprehensive polling of thousands of UC students, faculty and employees, we turned to the next best data available: campaign contributions.

> The first graph displays total campaign contributions for all candidates. The outer circle represents the Democratic Party in blue and the Republican Party in red. Candidates for the parties are shown in the inner circle in varying shades of red or blue, according to their party. Hovering over the candidate segments will show total contributions, broken down by job category.

#### Presidential Campaign Contributions at the UC

<div id="donut-chart"></div>

> The second graph breaks down contributions by job type. Hover over the x-axis to see how we organized job titles for each category. Toggle between different candidates in the dropdown menu. Use the checkbox selection to switch between amount donated and number of contributions. Each job type is further broken down by campus, represented by the different colors on the side. 

<div id="nav-container" style="width: 720px; background-color: white; height: 72px; padding: 5px 10px;">
  <div id="nav" style="height: 62px; width: 720px;">
    <div class="ui inline dropdown" style="margin-bottom: 10px;" id="d1">
      <div class="text">
        <img class="ui avatar image rep" src="/img/posts/presidential-campaign-donations/rep.png"> Ben Carson
      </div>
      <i class="dropdown icon"></i>
      <div class="menu">
        <div class="item">
          <img class="ui avatar image rep" src="/img/posts/presidential-campaign-donations/rep.png"> Ben Carson
        </div>
        <div class="item">
          <img class="ui avatar image dem" src="/img/posts/presidential-campaign-donations/dem.png"> Hillary Clinton
        </div>
        <div class="item">
          <img class="ui avatar image rep" src="/img/posts/presidential-campaign-donations/rep.png"> Ted Cruz
        </div>
        <div class="item">
          <img class="ui avatar image rep" src="/img/posts/presidential-campaign-donations/rep.png"> Carly Fiorina
        </div>
        <div class="item">
          <img class="ui avatar image rep" src="/img/posts/presidential-campaign-donations/rep.png"> John Kasich
        </div>
        <div class="item">
          <img class="ui avatar image dem" src="/img/posts/presidential-campaign-donations/dem.png"> Larry Lessig
        </div>
        <div class="item">
          <img class="ui avatar image dem" src="/img/posts/presidential-campaign-donations/dem.png"> Martin O'Malley
        </div>
        <div class="item">
          <img class="ui avatar image rep" src="/img/posts/presidential-campaign-donations/rep.png"> Rand Paul
        </div>
        <div class="item">
          <img class="ui avatar image rep" src="/img/posts/presidential-campaign-donations/rep.png"> Marco Rubio
        </div>
        <div class="item">
          <img class="ui avatar image dem" src="/img/posts/presidential-campaign-donations/dem.png"> Bernie Sanders  
        </div>
        <div class="item">
          <img class="ui avatar image rep" src="/img/posts/presidential-campaign-donations/rep.png"> Donald Trump
        </div>
      </div>
    </div>
    <div class="ui form" style="    
      display:inline-block;
      margin-left: 30px;
      height: 62px;
      line-height: 62px;
      white-space: nowrap;">
      <div class="inline fields">
        <label for="filter">Filter:</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="filter" id="d2" checked="" tabindex="0" class="hidden">
            <label>Amount</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="filter" tabindex="0" class="hidden">
            <label>Contributions</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<p style="margin-top: 20px;">This candidate received a total of $<b><span id="amount"></span></b> from UCs alone, which amounts to <b><span id="percentage"></span></b>% of the total donations they received in California.</p>




#### Job Distribution of Donators
<div id="vertical-bar"></div>
> The third graph shows the percentage each campus makes up out of the total amount of contributions from UC employees for each candidate.

#### Contributions by Campus
<div id="horizontal-bar"></div>

#### Key observations:
- UC donors overwhelmingly supported Democratic candidates. More than 90 percent of contributions went to Sen. Bernie Sanders, I-Vt., and former Secretary of State Hillary Clinton. UC Santa Barbara faculty and staff made no donations to Republican candidates.
- Despite Sanders’ advantage over Clinton among young voters, she received about $1,000 more than Sanders did from undergraduate students. However, Sanders received about 150 more individual contributions than Clinton.
- Clinton received at least 70 contributions of $2,700 – the maximum amount individual donors can give during the primary season. Sen Marco Rubio, R-Fl., former Maryland governor Martin O’Malley and Sen. Ted Cruz, R-Tx., received one maximum contribution each.
- The top three contributing campuses were UCLA, UC Berkeley and UC San Francisco. The largest campus contributors for each campus generally followed the same trend, except for UC Merced, which was the largest donor for Donald Trump and Larry Lessig. UC San Diego was Carly Fiorina and Rubio's largest donor.
- Despite being the presumptive Republican nominee, Donald Trump received the least amount of money out of all the Republican candidates.
- Sanders and Clinton's largest source of donations were professors and health workers, with about half of their contributions coming from both sources. Cruz, Fiorina and Rubio, the Republican candidates with the largest amount of donations, also had health workers as their largest source of contributions.

#### Disclaimers:
- This post only includes data from within the state of California. UC employees employed outside the state are not included.
- The Bruin searched for people associated with the UC by employer, therefore unemployed donors associated with the UC are not included.
- The Federal Election Commission does not report donors who have contributed less than $200.
- Due to inconsistencies in the way people describe their employers, some donors and contributions are not included.
- Candidates who did not receive any donations from UC affiliated employees or students are not included.
-Data is current through April.

*Story by Ryan Leou. Graphics by Nick Liu, Alex Guziak, Amber Won, Jennifer Xu, Li-Wei Chi, Jeffrey Chan, Vivian Zhang & Chang Liu.*


