---
title: When and where you should go workout?
teaser: Take an unprecendented look at gym traffic in Wooden and BFit.

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

Every time a student cards into a UCLA Recreation facility, the visit is timestamped and recorded.
Last school year, **1.5 million visits** were recorded like that.
They tell us a lot about how students use each facility and could inform **when and where you want to workout**.

An obvious use of that data – all entrance records from the 2015 to 2016 school year – is to **estimate how many people are in the gym at any given moment**.
Because the anonymized records include only the timestamp of each entrance, but not the headcount inside a facility or the exit timestamp, we need a model to *estimate* traffic.

That model would have to account for not only people who entered at a particular time (for which we use the data) but also *some proportion* of the people who entered *previously* and remained (here's where the model comes in). More details are explained later, but for now you should be confident that the estimates are solid.

## Live Traffic Estimate

Gym usage patterns are remarkably consistent. While UCLA Recreation doesn't provides real time information, we can fairly safely estimate – in real time – how busy a gym is based on past data.

Right now, it's likely that Wooden is <span id='wooden-traffic-text'></span>, and BFit is <span id='bfit-traffic-text'></span>.

> These live estimates are worded relative to other 1) times of day, and 2) days of week.
> What if campus is not in session or gym hours are changed? Well, your browser doesn't know that!


## Choosing between Wooden and BFit

Wooden has a much higher capacity than BFit, and **normally it houses between two and three times as many people as
BFit**. Occasionally though, BFit reaches almost the same level of traffic as Wooden. In that case, we might argue that Wooden is the better, less croweded place to workout. Conversely, when Wooden is *a lot* busier than BFit, BFit might be a better choice.

  <div class='ui centered medium header'>Wooden or BFit</div>
  <div class='ui centered one column grid'>
    <div class='twelve wide column heat-chart' id='comparison-heatmap'></div>
  </div>

As we can see, on weekday afternoons, Wooden is a lot busier than BFit as students stay near campus in between classes. Whereas BFit becomes quite crowded on evenings and late nights as well as weekends when Hill residents prefer the short walk to from dorms to BFit.

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

<div id='viz-selections'>
  <select id='pick-facility'>
    <option value='both'>Wooden + BFit</option>
    <option value='wooden'>Wooden</option>
    <option value='bfit'>BFit</option>
  </select>

  <select id='pick-scale'>
    <option value='relative'>% Relative to peak</option>
    <option value='absolute'>Number of people</option>
  </select>
</div>

<div id='line-chart'></div>

...


## Data and Model

A couple UCLA Recreation officials graciously provided the dataset to Daily Bruin. There were around 1.5 million  records in total, spanning from June 2015 to June 2016, and containing the *timestamp*, *type of user* (ie. undergrad, grad or staff), and *facility name* (ie. Wooden, BFit, KREC, or Sunset Rec) of each entrance.

Because BFit opened in October 2015, weeks into Fall 2015, data from that quarter were removed from the calculations.

To estimate traffic, **we need know how long each person stays**. Because the dataset doesn't have exit timestamps, we have to guess how long each workout lasted – we need to come up with a distribution and good enough parameters using *survey data*.

...

Essentially, each visitor:

1. Enters at actual time, *provided by the data*
2. Remains for X number of time intervals, *simulated from the model*
3. Exits

Now we simply count all the people who remain at a particular time point to get an estimated traffic.

Is the model reliable? Using different models actually produced a high variance in estimated traffic counts. One set of parameters might produce an estimate of 200 while another that assumes people spend more time might output 260 as the estimate. But **the relative difference between times are very consistent** so the trends shown in relative scales above don't vary much regardless of model specification. They're reliable enough for decision making because after all ...
