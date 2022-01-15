---
title: UCPD Budget & Arrest Data
teaser:
authors:
  - mattie_sanseverino
  - sydney_kovach
  - lindsey_parungo
  - priya_kanneboyina
  - samantha_low
  - vivian_luk
key_takeaways:
  - 
featured_image:
  url:
og_image:
stylesheets:
  - /css/posts/ucpd-budget-arrests/scrollama.css
  - /css/posts/ucpd-budget-arrests/app.css
scripts:
  - //cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js
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


<p> Over the past two years, a number of national events have shed light on the state of police departments all over the country. During May of 2020 all the way through August, there were a number of protests, both at UCLA and in California, calling for the reform and abolition of police departments across the nation. Protests that occurred on UCLA’s campus were centered around the UCPD (University of California Police Department) and their involvement in student affairs and Westwood as a whole. Protests also criticized the amount of money going towards UCPD and how it has been spent in recent years. </p>
 
<p> Previous analyses of police departments by UCLA include Million Dollar Hood’s reports on LAPD and incarceration in Los Angeles. The Stack published an article in 2018 regarding the demographics of stops and arrests by UCPD in Westwood, which can be found here. While both sources are incredibly insightful we wanted to expand on the depth of the data and analyses while honing in on UCPD and their impact on Westwood and UCLA specifically. </p>

<p> In this article we wanted to focus on not only on the arrests but the demographic via race, gender, and age. We also took an in-depth look at the type of arrests and the bail as well. Beyond arrests we also analyzed the distribution of the budget over the past decade, and the timeline of UCPD and it’s policies as a whole. The article aims to provide a holisitc and longitudinal overview of UCPD's history and practices at UCLA. </p>




<div>
<h1> Arrest Demographics </h1>

<p> Many critics of the UCPD often cited bias and discrimination as major issues within the police department, especially in terms of treatment of individuals and rates of arrests and stops for certain demographics. While data on treatment of individuals is not readily or easily available, we can look to the demographic of arrests to see if there are disproportionate rates of of arrest for certain demographics. </p>

<div class= raceclass>
  <canvas id="race_chart"></canvas> 
</div>

<p>
  When comparing the demographics of the arrest data to the demographics of Westwood as a whole, there are a number of findings worth noting. First, Black and American Indian groups had the most disprortionate rates of arrest. On the other hand, Hispanic and White groups had the least disproportionate arrest rates. 
</p>

<div class= genderclass>
  <canvas id="gender_chart"></canvas> 
</div>
<p>
  When observing arrest rates by gender, men make up a disproportionate amount of the arrests (80%) despite only being around half the population in westwoood. 
</p>

<div class=ageclass>
  <canvas id="age_chart"></canvas> 
</div>
<p>
  When looking at arrest rates by age, we find the least variation between the demographic of rates and the demographics of Westwood, in comparison to the previous two graphs. Arrest rates vs Westwood demographics are generally proportionate, with the 30-39 age range having the largest difference. THe age range of 10-19 was excluded from this analysis since a majority of the age range is not subject to arrests and reports. 

<div class = demographic_charges>
  <canvas id="demographic_charges"></canvas> 
  <p class = 'caption'> Insert Caption here</p>
</div>

<h1>About the Data</h1>

<p>The Westwood Demographic Data was collected by censusreporter.org from the ACS 2019 1-year census.</p>

<p>The UCPD Arrest Data was collected by the UCPD from the years 2012-2019.</p>

<p>The UCPD categorizes race through a set of code that can be found here. For the sake of compatibility with Westwood Demographic Data, the categories of “Other” and “Unknown” from UCPD data and the category “2+ Races”and “Other” from the Westwood Demographic Data have been combined into one category of “Other”.git </p>

<section class = 'scrollama'>
    <section id="stick">
      <article id = 'scrolly_area'>
        <div class="step first" id = "2010" data-step="1">
          <h1 class = "scrolly_title">What changes can be seen in UCPD data and policy in the last 10 years?</h1>
          <p>The most recent UCPD policies are from 2010. The most current UC policy on policing is from 2011. While there haven’t been any formal policy changes since 2010, UCPD says it is committed to modeling a community oriented approach. This includes being influenced by programs such as #8CantWait and CampaignZero. </p>
        </div>
        <figure>
          <div class = "BudgetStopChart" id = "BudgetStop">
            <canvas id="myChart"></canvas>
            <p class = 'caption'>UCPD’s budget was acquired through a CPRA.</p>
          </div>
        </figure>
        <div class="step later" data-step="2">
          <p>Even without clear changes in policy, there have been changes to the UCPD budget over the past 10 years. For example, there has been a steady increase in UCPD’s budget with a sharper increase beginning in 2017. </p>
        </div>
        <div class="step bars" data-step="3">
          <p>In addition to an increase in funding, there have also been changes to the distribution of funds. For instance the travel budget was only $4,200 in 2012, but reached a peak of $167,482 in 2018, a 4000% increase. However, salaries and benefits still make up a majority of UCPD’s budget every year.</p>
        </div>
        <div class="step later" data-step="4">
          <p>In order to more easily compare the budget to arrest and stop data, the budget line from here on will be displayed in $100,000 dollars. </p>
        </div>
        <div class="step later" data-step="5">
          <p>In addition to increased funding, there has been an increase in arrests. The largest increase in arrests was from 2018 to 2019. [INSERT IF UCPD PROVIDES INSIGHT HERE] </p>
        </div>
        <div class="step penult" data-step="6">
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

<div id="dropdown">
  <select onchange="update_bail_data(this.value);">
  <option value='ExcludingOutliars'>Excluding Outliars >= $150k</option>
  <option value='IncludingOutliars'>Including Outliars >= $150k</option>
  </select>
</div>
<div id='myDiv'></div>
