---
title: How do professors grade at UCLA?
teaser: teaser

authors:
    - tyson_ni
key_takeaways:
    - ...
    - ...
    - ...
featured_image:
    url:
og_image:
scripts:
    - //ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
    - //underscorejs.org/underscore-min.js
    - //cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js
    - /js/posts/professor-grades/d3-jetpack.js
    - /js/posts/professor-grades/dotchart.js
stylesheets:
    - //fonts.googleapis.com/css?family=Roboto:400,300,500
    - /css/posts/professor-grades/app.css
---

Professors grade differently. But how can we compare professors when they
teach different classes and are in different departments?

* What questions should we ask?
* How can we compare professors in the most useful way?
* What's the ideal comparison we want? Can we get it?
* Introduce the metric: on average how difficult is the professor's class compared to all other classes at UCLA

### Context

Give brief overview, different macro perspectives

### Rank professors based on how difficult a typical class they teach is

Horizontal bar chart or table that shows the average difficulty of most and least difficult
professors

* Show top and bottom
* Show All only
* Show each professor's most common class

Note that this chart tends to simply reflect how departments give out grades.
For instance, most Math professors are ranked as most diffcult than Vietnamese professors
simply because the Math department has much tougher grades than the Vietnamese department.

We want to keep probing, and ideally analyze each professor's grading by taking into account how their department
tends to grade ...

### Rank professors based on how difficult a typical class they teach is, relative to their departments

* Show Overall 20 top, 10 middle, and 20 bottom
* Filter by top departments
* Show each professor's most common class


### Are there different kinds of professors?

Among professors who teach many classes ...

* Professors who are always more difficult than other professors

If you have this professor in any class, you're almost guaranteed to encounter a tougher grading scheme

* Professors who are always less difficult than other professors

If you have this professor in any class, you're almost guaranteed to encounter an easier grading scheme

### Rank professors based on how difficult a particular class they teach is, compared to other professors who teach the same class


<div id="pick-dpmt-container">
  <select id="pick-dpmt">
  </select>
</div>

<div id="dotchart">
</div>

### Which professors are harder or easier in all of their classes?

<figure>
  <img src="/img/posts/professor-grades/prof-types.png" width="500px" />
  <figcaption>caption here caption here</figcaption>
</figure>

Test graphics below ...

<div id="viz-test">
</div>
