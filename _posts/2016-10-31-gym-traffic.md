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
    - /css/posts/gym-traffic/semantic.min.css
scripts:
    - //code.jquery.com/jquery-3.1.1.min.js
    - //d3js.org/d3.v4.min.js
    - //cdnjs.cloudflare.com/ajax/libs/d3-legend/2.13.0/d3-legend.min.js
    - /js/posts/gym-traffic/d3-tip.js
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

Right now, it's likely that
<span class='wooden facility-name'>Wooden</span> is <span id='wooden-traffic-text'></span>, and
<span class='bfit facility-name'>BFit</span> is <span id='bfit-traffic-text'></span>.

> These live estimates are based on 1) time of day, and 2) day of week.
> Take a look at the legends below to better understand the scale.
> What if campus is not in session or gym hours are changed? Well, your browser doesn't know that!


## Choosing between Wooden and BFit

Wooden's much higher capacity means **it normally houses between two and three times as many people as
BFit**. Occasionally though, BFit reaches almost the same level of traffic as Wooden. In that case, we might argue that Wooden is the better, less croweded place to workout. Conversely, when Wooden is *a lot* busier than BFit, BFit might be a better choice.

  <div class='ui centered medium header'>Wooden or BFit</div>
  <div class='ui centered one column grid'>
    <div class='twelve wide column heat-chart' id='comparison-heatmap'>
    </div>
  </div>

As we can see, on weekday afternoons, Wooden is a lot busier than BFit as students stay near campus in between classes. Whereas BFit becomes quite crowded on evenings and late nights as well as weekends when Hill residents prefer the short walk to from dorms to BFit.

## A quick glance

<div class='ui centered medium header'>Wooden</div>
<div class='ui centered one column grid'>
  <div class='twelve wide column heat-chart' id='wooden-heatmap'>
  </div>
</div>

<div class='ui centered medium header'>BFit</div>
<div class='ui centered one column grid'>
  <div class='twelve wide column heat-chart' id='bfit-heatmap'>
  </div>
</div>


## Go in-depth  

<div id='viz-selections'>
  <select id='pick-scale'>
    <option value='relative'>% Relative to peak</option>
    <option value='absolute'>Number of people</option>
  </select>
  <select id='pick-week'></select>
  <select id='pick-day'></select>
</div>

<div class='ui centered one column grid'>
  <div class='twelve wide column line-chart' id='line-chart'></div>
</div>

...


## Data and Model

A couple UCLA Recreation officials graciously provided the dataset to Daily Bruin. There were around 1.5 million  records in total, spanning from June 2015 to June 2016, and containing the *timestamp*, *type of user* (ie. undergrad, grad or staff), and *facility name* (ie. Wooden, BFit, KREC, or Sunset Rec) of each entrance.

Because BFit opened in October 2015, weeks into Fall 2015, data from that quarter were removed from the calculations.

To estimate traffic, **we need know how long each person stays**, but because the dataset doesn't have exit timestamps, we have to guess how long each workout lasted – we need to come up with a distribution and good enough parameters using *survey data*.

65 UCLA students responded to an online survey asking them how long they stayed at the gym last time they went. We chose the Weibull distribution due to its suitability for modeling timed events, and estimated parameters by fitting to the survey data.

<figure>
  <img src="/img/posts/gym-traffic/survey-histogram.png" height='260px' width='300px' />
  <figcaption>Survey data on how much time students spent at gym</figcaption>
</figure>

<figure>
  <img src="/img/posts/gym-traffic/model-histogram.png" height='260px' width='300px' />
  <figcaption>A model based on survey data</figcaption>
</figure>

Once we have a model, we assume each visitor in the records does the following:

1. Enters at actual time, *provided by the data*
2. Remains for X number of time intervals, *simulated from the model distribution*
3. Exits

Now we simply count all the people who remain at a particular time point to get estimated traffic.

Is the model reliable? Using different models actually produced a high variance in estimated traffic counts. One set of parameters might produce an estimate of 200 while another that assumes people spend more time might output 260 as the estimate. But **the relative difference between times are very consistent** so the trends shown in relative scales above don't vary much regardless of model specification. They're robust enough for decision making because after all ...
