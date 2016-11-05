---
title: When and where you should go workout?
teaser: An unprecendented look at gym traffic at Wooden and BFit

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
    - /css/posts/gym-traffic/semantic.min.css
scripts:
    - //code.jquery.com/jquery-3.1.1.min.js
    - //d3js.org/d3.v4.min.js
    - /js/posts/gym-traffic/line-chart.js
    - /js/posts/gym-traffic/heat-chart.js

---

Every time a student cards into one of UCLA Recreation's facilities, a record is generated.
Just last school year, there were [1.5] million records like that.
They not only tell us a lot about how students use each facility, but also inform *where and when you should workout*.

The most obvious use of the data – which includes all entrance records from the 2015 to 2016 school year – is to **estimate how many people are inside the gym at a given moment**.
Because the anonymized records include only the timestamp of when a student entered the gym, but not the total headcount inside, we need a model to *estimate* traffic. That model would have to account for the fact that people who are in the gym at a given moment includes not only those who entered just now (for which we have actual data) but also *some proportion* of the people who entered *previously* and remained (here's where the model comes in). More details are explained later in the post, but for now, you can be rest assured that these estimates are solid.

## Live Traffic Estimate

If we know the time of day and day of week, gym usage patterns are remarkably consistent.
While UCLA Recreation no longer provides real time traffic, we can still fairly safely estimate, in real time,
how busy a gym is based on historical data.

Right now, it's likely that Wooden is <span id='wooden-traffic-text'></span>, and
BFit is <span id='bfit-traffic-text'></span>
.

> These live estimates are worded relative to other 1) times of day, and 2) days of week.
> What if campus is not in session or gym hours are changed? Well your browser doesn't know that!


## Choosing between Wooden and BFit

Wooden has a much higher capacity than BFit, and **normally it has between two and four times as many people has
BFit**. But occasionally, BFit reaches almost the same level of traffic as Wooden. In that case, we might argue that Wooden is the better, less crowdy place to workout. Conversely, at times when Wooden is *a lot* busier than BFit, BFit might be a better choice.

  <div class='ui centered medium header'>Wooden vs. BFit</div>
  <div class='ui centered one column grid'>
    <div class='twelve wide column heat-chart' id='comparison-heatmap'></div>
  </div>



## A quick glance

<div class='ui centered medium header'>Wooden</div>
<div class='ui centered one column grid'>
  <div class='twelve wide column heat-chart' id='wooden-heatmap'></div>
</div>

<div class='ui centered medium header'>BFit</div>
<div class='ui centered one column grid'>
  <div class='twelve wide column heat-chart' id='bfit-heatmap'></div>
</div>


## Dive deeper  
...

<div id='viz-selections'>
  <select id='pick-facility'>
    <option value='wooden'>Wooden</option>
    <option value='bfit'>BFit</option>
    <option value='both'>Wooden + BFit</option>
  </select>

  <select id='pick-scale'>
    <option value='relative'>% Relative to peak</option>
    <option value='absolute'>Number of people</option>
  </select>
</div>

<div id='line-chart'></div>


## Data and Methodology
...
