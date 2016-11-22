---
title: When and where you should go workout?
teaser: Take an unprecedented look at gym traffic in Wooden and BFit.

authors:
    - tyson_ni
key_takeaways:
    - Data provided by UCLA Recreation show clear and consistent usage patterns across Wooden and BFit
    - Use our graphics to decide when and where to workout
featured_image:
    url: gym-traffic/comparison-chart.png
    og_image: gym-traffic/comparison-chart.png
stylesheets:
    - /css/posts/gym-traffic/app.css
    - /css/posts/gym-traffic/grid.min.css
    - /css/posts/gym-traffic/header.min.css
    - /css/posts/gym-traffic/divider.min.css
    - /css/posts/gym-traffic/image.min.css
scripts:
    - //code.jquery.com/jquery-3.1.1.min.js
    - //d3js.org/d3.v4.min.js
    - //cdnjs.cloudflare.com/ajax/libs/d3-legend/2.13.0/d3-legend.min.js
    - /js/posts/gym-traffic/d3-tip.js
    - /js/posts/gym-traffic/line-chart.js
    - /js/posts/gym-traffic/heat-chart.js
---

Every time a student cards into a UCLA Recreation facility, the visit is time-stamped and recorded.
Last school year, **1.5 million visits** were recorded like that.
These records tell us a lot about how students use each facility and could suggest **when and where you should workout**.

An obvious use of that data – all entrance records from the 2015-2016 school year – is to **estimate how many people are in the gym at any given moment**.
Because the anonymized records include only the time stamp of each entrance, but not the headcount inside a gym or the exit time stamp, we need a model to *estimate* traffic.

That model would have to account for not only people who entered at a particular time (for which we use the data) but also *some proportion* of the people who entered *previously* and remained (here's where the model comes in). More details are explained later in the post.

## Choosing between Wooden and BFit

Wooden's larger space means that **it normally houses between two and three times as many people as
BFit**. From time to time, BFit does reach about the same level of traffic as Wooden. In those cases, we might argue that Wooden is the better, less crowded place to workout. Conversely, when Wooden is *a lot* busier than BFit (say more than 3 times), BFit might be a better choice.

  <div class='ui centered medium header'>Wooden or BFit</div>
  <div class='ui centered grid'>
    <div class='twelve wide column'>
      <div class='heat-chart' id='comparison-heatmap'></div>
    </div>
  </div>

On weekday afternoons, Wooden is unusually busier than BFit as students stay near campus in between classes. BFit becomes more crowded on evenings and late nights as well as weekends when Hill residents prefer the short walk from dorms.

## A quick glance

The heat charts below show how busy each facility is at different hours of day and days of week. Because Wooden and BFit differ in size, we compare each facility's traffic at each time period with the *peak traffic* at that facility. Peak traffic is defined as the average number of people at 5:30 PM on a weekday in the first 3 weeks of a quarter when more people go to gyms.

<div class='ui centered medium header'>Wooden</div>
<div class='ui centered grid'>
  <div class='twelve wide column'>
    <div class='heat-chart' id='wooden-heatmap'></div>
  </div>
</div>


<div class='ui centered medium header'>BFit</div>
<div class='ui centered grid'>
  <div class='twelve wide column'>
    <div class='heat-chart' id='bfit-heatmap'></div>
  </div>
</div>

<br>

## Live Traffic Estimate

Gym usage patterns are remarkably consistent. While UCLA Recreation doesn't provides real time information, we can fairly safely estimate – in real time – how busy a gym is based on past data.

Right now, it's likely that
<span class='wooden facility-name'>Wooden</span> is <span id='wooden-traffic-text'></span>, and
<span class='bfit facility-name'>BFit</span> is <span id='bfit-traffic-text'></span>.

> These live estimates are based on 1) time of day, and 2) day of week.

<br>

## Go in-depth  

The line chart below allows you to explore and compare gym traffic at a more detailed level.

<br>

<div class='ui grid' id='viz-selections'>
  <label>Scale</label>
  <select id='pick-scale'>
    <option value='relative'>% Relative to peak</option>
    <option value='absolute'>Number of people</option>
  </select>

  <label>Week</label>
  <select id='pick-week'></select>

  <label>Day of Week</label>
  <select id='pick-day'></select>
</div>

<div class='ui divider'></div>

<div class='ui centered grid'>
  <div class='twelve wide column'>
    <div class='line-chart' id='line-chart'></div>
  </div>
</div>

<br>

A few interesting insights:

* Traffic dips in between noon and around 1:30 PM on weekdays.
* Traffic rapidly climbs from 2 PM onward until it reaches the peak at around 5:30 PM on weekdays.
* BFit is busier than Wooden on weekends, especially on evenings. Weekend traffic at Wooden doesn't appear to vary that much throughout the day.
* Less people go workout towards the end of a quarter.


## Data and Model

UCLA Recreation officials graciously provided the dataset. There were around 1.5 million records in total, spanning from June 2015 to June 2016, and each contains the *time stamp*, *type of user* (ie. undergrad, grad or staff), and *facility name* (ie. Wooden, BFit, KREC, or Sunset Rec) of an entrance.

Since the dataset doesn't have exit time stamps, we have to guess **how long each workout lasted** – we need to find a distribution and good enough parameters using *survey data*. Sixty-five UCLA students responded to an online survey asking them how long they spent at the gym the last time they went. The *Weibull distribution* was chosen because of its suitability for modeling timed events, and parameters were then inferred from the survey data.

<img class='ui spaced medium image' src="/img/posts/gym-traffic/survey-histogram.png" />
<img class='ui spaced medium image' src="/img/posts/gym-traffic/model-histogram.png" />

Once we have a distribution model, we assume each visitor in the records did the following:

1. Entered at actual time, *provided by UCLA Recreation's raw data*
2. Remained for X number of time intervals, *simulated from the model*
3. Exited

Now we simply sum all the people who remained at each time point and do the necessary math to get the estimated average traffic for different times at each facility.

How reliable is the model? Estimates of the exact headcount varied considerably depending on model selection. But the **relative difference** between the different times of day, days of week, or weeks of quarter are very consistent so the trends shown in relative scales are reliable regardless of which model we pick.
