---
title: UCPD Arrests and Budget
teaser: Amidst a national reckoning with policing, The Stack dives into an analysis of UCPD’s arrests, stops, and budget.

authors:
  - priya_kanneboyina
  - sydney_kovach
  - samantha_low
  - vivian_luk
  - lindsey_parungo
  - mattie_sanseverino

key_takeaways:
  - In comparison to Westwood demographic data, Black, American Indian and male individuals are disproportionately overrepresented in the UCPD arrest data.
  - Although the number of stops have shown a downward trend since 2014, the number of arrests have been consistently increasing with a higher rate of increase beginning in 2018.
  - UCPD’s budget was steadily increasing from 2012-2017, then began increasing at a faster rate in 2017. In particular, the Travel category increased by about 4000% between 2012 and 2019.

featured_image:
  url:
og_image:

stylesheets:
  - /css/posts/ucpd-budget-arrests/scrollama.css
  - /css/posts/ucpd-budget-arrests/app.css
scripts:
  - //cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js 
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

### Introduction

<p> Over the past two years, a number of national events have shed light on the state of police departments all over the country. During May of 2020 all the way through August, there were a number of protests, both at UCLA and in California, calling for the reform and abolition of police departments across the nation. Protests that occurred on UCLA’s campus were centered around UCPD and their involvement in student affairs and Westwood as a whole. Protestors cited bias and discrimination within UCPD and drew attention to the amount of money going towards UCPD and how it has been spent in recent years. </p>
 
<p> Upon request, The Stack obtained records of UCPD’s arrests, stops, and budget for 2012 through 2019. We analyzed the demographic makeup of the arrests by race, gender, and age, as well as the type of arrests and the associated bail. Beyond arrests, we also analyzed the distribution of the budget and researched UCPD policies over the last decade. </p>

<p> Previous analyses of police departments by UCLA include Million Dollar Hood’s reports on LAPD and incarceration in Los Angeles. The Stack also published an article in 2018 about the demographics of stops and arrests by UCPD in Westwood, which can be found here. </p>

### Arrest Demographics

<p> Many critics of UCPD cite evidence of bias and discrimination as major issues within the police department, especially in terms of treatment of individuals and rates of arrests and stops for certain demographics. While data on treatment of individuals is not readily or easily available, the demographic of arrests show disproportionate rates of arrest for certain demographics. </p>

<div class= raceclass>
  <canvas id="race_chart"></canvas> 
</div>

The Black and American Indian groups were the most disproportionately overrepresented in the arrest data. The Hispanic and White groups had the least disproportionate arrest rates. The Asian group was the most disproportionately underrepresented in the arrest data.

According to UCPD Administrative Bureau Captain Scott Scheffler, (CQ 7) since race is not listed on driver’s licenses, the information regarding race in police data is most often based on the perception of the arresting officers.

<div class= genderclass>
  <canvas id="gender_chart"></canvas> 
</div>
<p>
  When observing arrest rates by gender, men make up a disproportionate amount of the arrests (80%) despite only being around half the population in westwoood. 
</p>

<div class=ageclass>
  <canvas id="age_chart"></canvas> 
</div>
  When looking at arrest rates by age, we find the least variation between the demographic of rates and the demographics of Westwood, in comparison to the previous two graphs. Arrest rates vs Westwood demographics are generally proportionate, with the 30-39 age range having the largest difference. THe age range of 10-19 was excluded from this analysis since a majority of the age range is not subject to arrests and reports.

<div class = demographic_charges>
  <canvas id="demographic_charges"></canvas> 
  <p class = 'caption'> Insert Caption here</p>
</div>

### What changes can be seen in UCPD data and policy in the last 10 years?

<section class = 'scrollama'>
    <section id="stick">
      <article id = 'scrolly_area'>
        <div class="step first" id = "2010" data-step="1">
          <p>The Universitywide Police Policies And Administrative Procedures, the University of California Office of the President’s guide to policing, went into effect in January of 2011 (CQ 6). As of 2021, UCOP was working on finalizing new policies that would provide guidelines for the use of body cameras. (CQ 8)   In addition to formal policy, UCPD at UCLA says it is committed to modeling a community oriented approach. This includes being influenced by programs such as #8CantWait and CampaignZero (CQ 4). The most recent UCPD policies are from 2010. The most current UC policy on policing is from 2011. While there haven’t been any formal policy changes since 2010, UCPD says it is committed to modeling a community oriented approach. This includes being influenced by programs such as #8CantWait and CampaignZero. </p>
        </div>
        <figure>
          <div class = "BudgetStopChart" id = "BudgetStop">
            <canvas id="myChart"></canvas>
            <p class = 'caption'>UCPD’s annual budget from 2012 to 2019 was acquired through a CPRA. Values are given for fiscal years. The 2019-2020 data was the proposed budget, which at the time, had not yet been approved.</p>
          </div>
        </figure>
        <div class="step later" data-step="2">
          <p>There has been a consistent increase in UCPD’s budget, and beginning in 2017, there was an increase in the rate at which UCPD’s budget grew. Compensation, which includes salaries and benefits, accounts for roughly 80% of the annual budget. According to Scheffler, “economic impacts to salaries have had a large impact in the budget increases over the past few years.” </p>
        </div>
        <div class="step bars" data-step="3">
          <p>The “General Services” category includes general expenses such as vehicle costs, marketing, refuse, insurance, training, custodial, UCLA Facilities, non-University professional services, and other miscellaneous costs, Scheffler said. <br> Scheffler added that the “Materials” portion of the budget includes supplies such as gasoline, office supplies, online subscriptions, uniforms and badges. Firearms and other weapons supplies are also included in this category. <br> The UCPD spent around $40,000 on firearms and ammunition and $7,000 on body armor in the 2019-2020 fiscal year, Scheffler said. He added that the department also spent $255,000 on new tasers in the same fiscal year. 
</p>
        </div>
        <div class="step later" data-step="4">
          <p>In addition to an increase in funding, there have also been changes to the distribution of funds. For instance the travel budget was only $4,200 in 2012, but reached a peak of $167,482 in 2018, a 4000% increase. <br> In regard to the sharp growth of the travel budget, Scheffler explained, “The increase from [2012-2013] to [2014-2015] is due to a variety of training classes and mutual aid assignments in which UCLA PD officers travelled to assist other UC campuses. For example, in [2014-2015], UCLA PD provided extensive assistance to UCSB PD after the 2014 Isla Vista killings.” <br> Scheffler added that other than compensation and basic operating expenses, the UCPD has discretion to spend remaining funds as it sees fit.</p>
        </div>
        <div class="step later" data-step="5">
          <p>Stop and arrest data was collected via a CPRA submitted to UCPD for the same period as the budget data, 2012-2019. Over this time period, arrests have been increasing fairly consistently with a shallow dip from 2017 to 2018. However this dip was quickly overcome by the largest increase in arrests which occurred from 2018 to 2019.  </p>
        </div>
        <div class="step penult" data-step="6">
          <p>In contrast, stops have been on a downward trend since 2014. <br> Scheffler said that UCPD did not implement any formal or informal policy changes that led to the decrease in stops in 2014 and the increase in arrests in 2018. Scheffler added that many factors determine whether a stop results in an arrest, including whether there is a warrant, the reason for the stop, crime trends, staffing levels, among other things outside of UCPD’s control.
</p>
        </div>
        </article>
    </section>
</section>

<div id="dropdown">
  <select onchange="update_bail_data(this.value);">
  <option value='ExcludingOutliars'>Excluding Outliers >= $150k</option>
  <option value='IncludingOutliars'>Including Outliers >= $150k</option>
  </select>
</div>
<div id='bailViolin'></div>
