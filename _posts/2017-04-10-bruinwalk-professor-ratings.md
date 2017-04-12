---
title: The 25 best and worst UCLA classes according to students
teaser: Bruinwalk data shows the classes you should take – and avoid – to get the best return on your college investment
authors:
  - harrison_liddiard
key_takeaways:
  - UCLA classes cost up to $1,230 per class for a resident undergrad.
  - Students like a professor who can teach well more than they like an easy class.
  - Students never hate easy classes, but they find many hard classes worthwhile too.
featured_image:
    url: 
og_image: 
stylesheets:
  - /css/posts/bruinwalk-professor-rating/app.css
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/superagent/3.5.2/superagent.min.js
  - https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.6/vue.min.js
  - https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.2.0/papaparse.min.js
  - https://www.gstatic.com/charts/loader.js
  - /js/posts/bruinwalk-professor-ratings/app.js
---

You wouldn't buy a 3.5-star phone case on Amazon that costs $12, so why "buy" a 2.5-rated class at UCLA that costs $1,200?

With a resident UCLA undergraduate paying up to **$1,230** per class in tuition and fees alone<sup><a href="#cite-1">[1]</a></sup> and spending around **100 hours** per class,<sup><a href="#cite-2">[2]</a></sup> a course choice can be an expensive investment of money and time. Our analysis of [Bruinwalk](http://bruinwalk.com) ratings, sourced from thousands of students, can help you make it a good one.

It's important to remember that there's more to a professor than their Bruinwalk rating, just like there's more to a student than their GPA. That said, students deserve to know what they're paying for, and ratings and reviews are a good start.

## The data

The data used this post is from **41,515 ratings** in a recent Bruinwalk database snapshot. 

For analysis of *average* ratings, I considered only professor/course combinations with **15 or more** ratings. These comprise the **577 most-reviewed courses** on Bruinwalk with a combined total of 14,534 ratings.

The raw data used is available at the end of the post.

<div id="app">

  <h2>Overall rating</h2>

  <p>Looking for an all-around great class? Look no further than the top 25 overall…</p>
  <h3 id="visualization">The top 25 classes by overall rating</h3>
  <ratings-list :ratings="bestOverall" rating-type="overall_rating" 
                id="best-overall"></ratings-list>

  <p>…on the other hand, steer clear of these classes to avoid potentially bad professors, frustration and/or heavy workloads.</p>
  <h3>The bottom 25 classes by overall rating</h3>
  <ratings-list :ratings="worstOverall" rating-type="overall_rating" 
                id="worst-overall"></ratings-list>

  <p>Students tend to be somewhat generous on overall rating, skewing the distribution toward the higher end. The most common overall rating given is a <strong>4</strong>, which accounts for <strong>33.8%</strong> of all ratings.</p>

  <h3>Distribution of overall ratings</h3>
  <figure class="ratings-chart" id="overall-ratings-count"></figure>

  <h3>Distribution of average overall course ratings</h3>
  <figure class="ratings-chart fullwidth" id="overall"></figure>
  <p>📱 <em>Heads up! If you’re on a mobile device, consider exploring these graphs on a desktop computer. It will let you hover over individual courses for information.</em></p>

  <h2>Easiness rating</h2>

  <p>Have a tough quarter and need an easy class to survive? Pick up one of the following…</p>

  <h3>The 25 easiest classes</h3>
  <ratings-list :ratings="easiest" rating-type="easiness_rating"
                id="easiest"></ratings-list>

  <p>…and don’t take one of these unless you're prepared to not have a life for the quarter (or you don’t have a choice 😬).</p>

  <h3>The 25 hardest classes</h3>
  <ratings-list :ratings="hardest" rating-type="easiness_rating" 
                id="hardest"></ratings-list>

  <p>Students more often rate a course as difficult than as easy. 11 courses have a 1.00 average, the “most difficult” possible rating, while only six courses have a rating above 4.00. The most common easiness rating given is a <strong>2</strong>, which accounts for <strong>39.2%</strong> of all ratings.</p>
  
  <h3>Distribution of easiness ratings</h3>
  <figure class="ratings-chart" id="easiness-ratings-count"></figure>

  <h3>Distribution of average course easiness ratings</h3>
  <figure class="ratings-chart fullwidth" id="easiness"></figure>

  <h2>Rating correlations</h2>

  <p>This won’t come as a surprise: <strong>students tend to like easier classes</strong>. As an average, students <em>never</em> rate easy courses (easiness rating above 3.50) as poor overall (overall rating below 2.50).</p>
  
  <p>That said, students give high overall ratings to a substantial number of courses with <strong>tough professors</strong>. Difficult-but-good classes are in the upper left corner of the following scatter plot.</p>

  <h3>Students never hate easy classes, but they think hard classes can be valuable too.</h3>
  <figure class="ratings-chart fullwidth" id="easiness-vs-overall"></figure>

  <p><em>Note: This graph has some clustering along horizontal and vertical lines. This is caused by the fractional division in the calculation of averages.</em></p>

  <p>More than an easy class, students seem to want a good teacher. Students consistently rate courses with <strong>easy-to-understand professors</strong> highly. The clarity of a professor is the most predictive Bruinwalk criterion for a student’s overall course satisfaction. It has an r<sup>2</sup> value of 0.797.</p>
  
  <p>Professor clarity only narrowly beats out <strong>professor helpfulness</strong> in determining a student’s overall course rating (r<sup>2</sup> = 0.703), but it signifcantly beats out both course easiness (r<sup>2</sup> = 0.185) and course workload (r<sup>2</sup> = 0.182).</p>

  <h3>There’s a strong correlation between a clear professor and a high overall course rating.</h3>
  <figure class="ratings-chart fullwidth" id="clarity-vs-overall"></figure>

</div>

## In conclusion

I can personally vouch for several of the highly rated professors in this post including Miles Chen (Stats 10), Teofilo Ruiz (History 1B), Carey Nachenberg (CS 32), Alexandr Sherstov (CS 181), Keith Fink (Comm Studies M51B), and Jay Phelan (LS 15). These professors have added huge value to my college academic experience.

I won't mention by name any of the professors I've taken from the bottom 25 lists, but let's just say some of the low ratings are not an exaggeration. Teaching is a difficult job, and unfortunately, not every professor here is cut out for it.

A good professor can make the difference between understanding and remembering significant concepts for years to come and getting next to nothing out of your investment of time and money. With such a high cost per class, it's worth it to go out of your way for good classes – and good professors – whenever possible.

## Get the data

The data used in this post is available on [The Stack's GitHub repo in CSV format](#todo). It's ready to import into Excel or Numbers for quick browsing, or you can parse it using a CSV library in your programming language of choice. 

Find anything interesting we missed? Tweet us [@_thestack](https://twitter.com/_thestack).

<div class="footnotes">
  <p>
    <a id="cite-1" href="#cite-1">[1]:</a> Assumes an average of 3.5 courses taken per quarter. Does not factor in non-tuition fees. While many students pay less due to scholarships, financial aid, etc., many non-residents pay even more. <a href="http://www.ucla.edu/admission/affordability">http://www.ucla.edu/admission/affordability</a>
  </p>
  <p>
    <a id="cite-2" href="#cite-2">[2]:</a> Assumes 5 hours per week for lecture and discussion plus 5 hours per week for work outside class.
  </p>
</div>