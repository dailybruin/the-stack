---
title: UCPD Budget & Arrest Data
teaser:
authors:
  -
key_takeaways:
  -
featured_image:
  url:
og_image:
stylesheets:
  - /js/posts/ucpd-budget-arrests/scrolly_test.css
scripts:
  #- //cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js
  - //d3js.org/d3.v5.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  - //cdn.jsdelivr.net/npm/chart.js@2.8.0
  - //cdn.plot.ly/plotly-2.4.2.min.js
  - /js/posts/ucpd-budget-arrests/stacked-barchart.js
  - //cdn.anychart.com/releases/8.0.1/js/anychart-core.min.js
  - //cdn.anychart.com/releases/8.0.1/js/anychart-pie.min.js
  - /js/posts/ucpd-budget-arrests/bail-barchart.js
  - /js/posts/ucpd-budget-arrests/demographics-barchart.js
  - //unpkg.com/intersection-observer
  - //unpkg.com/scrollama
  - /js/posts/ucpd-budget-arrests/scrolly.js
  - //unpkg.com/intersection-observer@0.5.1/intersection-observer.js
  - //code.jquery.com/jquery-3.6.0.min.js
  - /js/posts/ucpd-budget-arrests/scrolly_charts.js
  - /js/posts/ucpd-budget-arrests/demographic_charges.js
  - /js/posts/ucpd-budget-arrests/bail-violin.js
---

<div id="barchart-wrapper">
  <canvas id="barchart-uclapd"></canvas>
</div>

<div height = "800">
  <canvas id="race_chart"></canvas> 
</div>
<div height = "800">
  <canvas id="gender_chart"></canvas> 
</div>
<div height = "800">
  <canvas id="age_chart"></canvas> 
</div>

<div height = "800">
  <canvas id="demographic_charges"></canvas> 
</div>
<h1>About the Data</h1>
<p>The Westwood Demographic Data was collected by censusreporter.org from the ACS 2019 1-year census.</p>

<p>The UCPD Arrest Data was collected by the UCPD from the years 2012-2019.</p>

<p>The UCPD categorizes race through a set of code that can be found here. For the sake of compatibility with Westwood Demographic Data, the categories of “Other” and “Unknown” from UCPD data and the category “2+ Races”and “Other” from the Westwood Demographic Data have been combined into one category of “Other”.</p>

<section class = 'scrollama'>
    <section id="stick">
      <article id = 'scrolly_area'>
        <div class="step first" id = "2010" data-step="1">
          <h1 class = "scrolly_title">What changes can be seen in UCPD data and policy in the last 10 years?</h1>
          <p>The most recent UCPD policies are from 2010. The most current UC policy on policing is from 2011. While there haven’t been any formal policy changes since 2010, UCPD says it is committed to modeling a community oriented approach. This includes being influenced by programs such as #8CantWait and CampaignZero. </p>
        </div>
        <!-- <div class = "step later" id ="2012">Our data begins in 2012.</div> -->
        <figure>
          <div class = "BudgetStopChart" id = "BudgetStop">
            <canvas id="myChart"></canvas>
          </div>
        </figure>
        <div class="step later" data-step="2">
          <p>Even without clear changes in policy, there have been changes to the UCPD budget over the past 10 years. For example, there has been a steady increase in UCPD’s budget with a sharper increase beginning in 2017. </p>
        </div>
        <div class="step later" data-step="3">
          <p>In addition to an increase in funding, there have also been changes to the distribution of funds. For instance the travel budget was only $4,200 in 2012, but reached a peak of $167,482 in 2018, a 4000% increase. However, salaries and benefits still make up a majority of UCPD’s budget every year.</p>
        </div>
        <div class="step later" data-step="4">
          <p>In order to more easily compare the budget to arrest and stop data, the budget line from here on will be displayed in $100,000 dollars. </p>
        </div>
        <div class="step later" data-step="5">
          <p>In addition to increased funding, there has been an increase in arrests. The largest increase in arrests was from 2018 to 2019. [INSERT IF UCPD PROVIDES INSIGHT HERE] </p>
        </div>
        <!-- <div class="step later chart" data-step="6">
          <iframe title="Arrests by Category" aria-label="Bar Chart" id="datawrapper-chart-XGN30" src="https://datawrapper.dwcdn.net/XGN30/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="645 !important"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
          </script>
        </div> -->
        <div class="step later" data-step="6">
          <p>As a contrast, stops have been on a downward trend since 2014. [INSERT HERE IF UCPD PROVIDES INSIGHT]</p>
        </div>
        <div class="step last" data-step="7">
          <p>MAYBE SOME CLOSING THOUGHT HERE?</p>
        </div>
        </article>
    </section>
</section>

<div class="bail-barchart">
  <canvas id='bail-chart-ucpd'> </canvas>
</div>

<p>More text blah blah blah</p>

<div id='myDiv'></div>
