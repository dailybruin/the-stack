---
title: The 25 best and worst UCLA classes, according to students
teaser: Bruinwalk data reveals the classes students most recommend, and the ones they most criticize
authors:
  - harrison_liddiard
key_takeaways:
  - Resident students pay up to $1,230 for each UCLA undergraduate course.
  - Students seem to prefer classes with highly-rated professors than those rated as easy, according to data from Bruinwalk.com.
  - Students rarely award a low overall rating to an easy course, but they also rate many difficult courses favorably.
featured_image:
    url: bruinwalk-class-ratings/featured_image.svg
og_image: bruinwalk-class-ratings/featured_image.png
stylesheets:
  - /css/posts/bruinwalk-class-ratings/app.css
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/superagent/3.5.2/superagent.min.js
  - https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.6/vue.min.js
  - https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.2.0/papaparse.min.js
  - https://www.gstatic.com/charts/loader.js
  - /js/posts/bruinwalk-class-ratings/app.js
---

A UCLA education is a huge investment – each resident undergraduate student pays up to **$1,230** per class in tuition and fees,<sup><a href="#cite-1">[1]</a></sup> and invests about **100 hours** per class.<sup><a href="#cite-2">[2]</a></sup> 

Our analysis of Bruinwalk ratings, sourced from thousands of students, can help you make that investment worthwhile. There’s more to a professor than their Bruinwalk rating, just like there’s more to a student than their GPA, but students can use ratings and reviews to select courses that are worth their time and money.

## The data

The data visualized below is sourced from **41,515 ratings** on [bruinwalk.com]((http://bruinwalk.com)) as of February 2017. Students rate each course and professor pairing on five criteria: overall rating, class easiness, workload, professor helpfulness and professor clarity.

Only course and professor pairings with **15 or more** ratings were included when analyzing their *average* ratings. These comprise the **577 most-reviewed courses** on Bruinwalk, with a combined total of 14,534 ratings.

<div id="app">

  <h2>Overall rating</h2>

  <p>Looking for an all-around great class? Look no further than the top 25 overall.</p>
  <h3 id="visualization">The top 25 classes by overall rating</h3>
  <ratings-list :ratings="bestOverall" rating-type="overall_rating" 
                id="best-overall"></ratings-list>

  <p>Steer clear of these classes to avoid poorly rated professors and potential frustration.</p>
  <h3>The bottom 25 classes by overall rating</h3>
  <ratings-list :ratings="worstOverall" rating-type="overall_rating" 
                id="worst-overall"></ratings-list>

  <p>The most common overall rating students award is a <strong>4</strong>, which accounts for <strong>33.8 percent</strong> of all ratings. This skews the distribution toward the higher end, away from the expected average of 2.5. </p>

  <h3>Breakdown of overall ratings</h3>
  <figure class="ratings-chart" id="overall-ratings-count"></figure>

  <h3>Distribution of overall course ratings</h3>
  <figure class="ratings-chart" id="overall"></figure>
  <p>📱 <em>Heads up! If you’re on a mobile device, consider viewing these graphs on a desktop computer to hover over individual courses for more information.</em></p>

  <h2>Easiness rating</h2>

  <p>Need an easy class to balance out a tough quarter? Enroll in one of the following.</p>

  <h3>The 25 easiest classes</h3>
  <ratings-list :ratings="easiest" rating-type="easiness_rating"
                id="easiest"></ratings-list>

  <p>Don’t take one of these classes unless you’re prepared to put in a lot of work.</p>
  <h3>The 25 hardest classes</h3>
  <ratings-list :ratings="hardest" rating-type="easiness_rating" 
                id="hardest"></ratings-list>

  <p>Students have rated more courses as difficult than easy. Of the courses with 15 or more ratings, eleven have a 1.00 average, the most difficult rating. Only six of these courses have ratings above 4.00.</p>
  
  <p>The most common rating students award is a <strong>2</strong>, which accounts for <strong>39.2 percent</strong> of all easiness ratings.</p>
  
  <h3>Breakdown of easiness ratings</h3>
  <figure class="ratings-chart" id="easiness-ratings-count"></figure>

  <h3>Distribution of course easiness ratings</h3>
  <figure class="ratings-chart" id="easiness"></figure>

  <h2>Correlating rating criteria</h2>

  <p>This won’t come as a surprise: <strong>Students tend to rate easier classes more favorably overall</strong>. No courses rated easy (easiness rating above 3.50) were rated poorly overall (overall rating below 2.50).</p>
  
  <p>But students have also given high overall ratings to a substantial number of difficult courses. Difficult courses with high overall ratings occupy the upper left corner of the following scatter plot.</p>

  <h3>Students rarely award a low overall rating to an easy course, but they also rate many difficult courses favorably.</h3>
  <figure class="ratings-chart fullwidth" id="easiness-vs-overall"></figure>

  <p>Students seem to prefer clear professors over easy courses. Courses with higher professor clarity ratings, or those with <strong>professors who are easier to understand</strong>, are more highly rated overall than courses with low clarity ratings. The clarity rating is the best predictor for students’ overall course satisfaction – its line of best fit has an R<sup>2</sup> value of 0.797.</p>
  
  <p>Professor clarity only narrowly beats out <strong>professor helpfulness</strong> in predicting a student’s overall course rating (R<sup>2</sup> = 0.703), but it signifcantly beats out both class easiness (R<sup>2</sup> = 0.185) and workload (R<sup>2</sup> = 0.182) ratings.</p>

  <h3>A professor’s clarity rating is the best predictor of a class’s overall rating.</h3>
  <figure class="ratings-chart fullwidth" id="clarity-vs-overall"></figure>

</div>

## In conclusion

Choosing the right courses and professors can make your investment in a UCLA education much more worthwhile. Each class comes with a high price, so it’s important to go out of your way to find good classes – and good professors – whenever possible.

## Get the data

The data used in this post is available on [The Stack’s GitHub repo in CSV format](https://github.com/daily-bruin/the-stack/blob/master/datasets/bruinwalk-class-ratings/ratings.csv). It’s ready to import into Excel or Numbers for quick browsing, or you can parse it using a CSV library in your programming language of choice. 

Find anything interesting we missed? Tweet us [@_thestack](https://twitter.com/_thestack).

<div class="footnotes">
  <p>
    <a id="cite-1" href="#cite-1">[1]:</a> Assumes an average of 3.5 courses taken per quarter. Does not factor in nontuition fees. While many students pay less due to scholarships, financial aid, etc., many nonresidents pay even more. <a href="http://www.ucla.edu/admission/affordability">http://www.ucla.edu/admission/affordability</a>
  </p>
  <p>
    <a id="cite-2" href="#cite-2">[2]:</a> Assumes 5 hours per week in class, plus 5 hours per week for work done outside class.
  </p>
</div>
