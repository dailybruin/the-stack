---
title: How Grade Distributions Changed During Online Learning
teaser: The COVID-19 pandemic changed routines in regard to learning and teaching. How did those changes impact grade distributions?
authors:
  - lindsey_parungo
  - priya_kanneboyina
  - samantha_low
  - ziqing_luo

key_takeaways:
  - Professors gave 29% more A’s in fall 2020 than in fall 2019. 
  - The number of pass/no pass grades in fall 2020 increased 72% from fall 2019.
  - More than two-thirds of professors who taught the same class in fall 2019 and fall 2020 gave higher grades on average during fall 2020.


featured_image:
  url: online-grade-distributions/cover_image.jpg
  caption: Katie Frei/Daily Bruin
og_image: online-grade-distributions/cover_image.jpg

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js 
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js
  - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - //code.jquery.com/jquery-3.6.0.min.js
  - /js/posts/online-grade-distributions/MainChart.js
  - /js/posts/online-grade-distributions/20-inflat-sum.js
  - /js/posts/online-grade-distributions/fall-inflat-deflat.js
  - /js/posts/online-grade-distributions/pie_chart.js


stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/online-grade-distributions/app.css
---

### Introduction

Over the past academic year, the COVID-19 pandemic has changed the way students and professors learn and teach. At UCLA, all quarters since spring 2020 have consisted primarily of online courses.

The UCLA Academic Senate, which is made up of faculty and deans and sets various academic regulations, adjusted grading policies in response to the pandemic. The senate extended the deadline for students to change the grading basis for optionally graded courses and allowed departments to count pass/no pass classes toward major and minor requirements. During winter and spring 2020, the Academic Senate also allowed professors to offer alternative assessments instead of planned final exams.

Despite policy adjustments that allowed greater flexibility, many students still had mixed feelings about remote learning.

Nate Price, a third-year microbiology, immunology and molecular genetics student said aspects of online classes were nice, such as being able to pause lectures or have presentation slides open. While the lectures were not significantly different from in-person classes, finding the motivation to complete them could be challenging, Price said.

“I definitely don't put as much effort in when I'm overwhelmed,” said third-year art student Mae Noland. “It just doesn't feel like a real class anymore. We’re all just in our little boxes on Zoom.”

Accomodations from professors have helped with these challenges, some students said.

“Professors are understanding of people not being able to complete work in this setting as efficiently as they would in a normal, in-person class setting,” Noland said.

### Comparing Course Grade Distributions from In-Person and Online Learning

The bar chart below compares the grade distributions of courses in fall 2019 and fall 2020. Use the drop-down menu to view the grade distributions of individual courses. Courses are listed in alphabetical order. If the course was taught by the same professor in fall 2019 and fall 2020, then grade distributions for both quarters will be shown.

<select id="dropdown-menu"></select>

<div class = "main_graph">
  <canvas id = "main-chart"></canvas>
  <p class = 'caption'> In-person grade data is from fall 2019. Online grade data is from fall 2020. Classes with only one grade distribution shown were only offered for one of the quarters.</p> 
</div>

Class grade distributions showed 29% more A’s across all classes in 2020 compared to 2019. An A grade was also the most common grade for both fall 2019 (35% of all letter grades) and fall 2020 (45% of all letter grades). When combined, all A grades (A-, A and A+) increased 21% from fall 2019 to fall 2020. However, the change in the number of passing grades (C- and higher) was relatively small. In fall 2019, 97.8% of grades were passing compared to 98.7% in fall 2020.

### Classes With the Greatest Change in Grade Distribution

<div class = inflation_chart>
  <div id="inflation"> 
    <select class='top20-dropdown'>
      <option value="fall">Fall Difference 2019/2020 </option>
      <option value="summer">Summer Difference 2019/2020</option>
    </select>
    <div class= 'infdefchart'>
      <div class="fall GFG">
        <div id="legend">
          <div class="item physical">Physical Science</div>
          <div class="item life_science">Life Science</div>
          <div class="item social">Social Science</div>
          <div class="item humanities">Humanities</div>
          <div class="item engineering">Engineering</div>
          <div class="item other">Other</div>
        </div>
        <div class = "infChart">
          <canvas id="fallinflatChart"></canvas>
        </div>
        <div class = "defChart">
          <canvas id="falldeflatChart"></canvas>
        </div>
      </div>   
      <div class= "summer GFG">
        <div id="legend">
          <div class="item physical">Physical Science</div>
          <div class="item life_science">Life Science</div>
          <div class="item social">Social Science</div>
          <div class="item humanities">Humanities</div>
          <div class="item engineering">Engineering</div>
          <div class="item other">Other</div>
        </div>
        <div class = "infChart">
          <canvas id="inflationChart"></canvas>
        </div>
        <div class = "defChart">
          <canvas id="deflationChart"></canvas>
        </div>
      </div>
    </div>
  </div>
</div>

<p class = 'caption'> The letter grade data for each course was converted into the 4.0 GPA scale, and the average was computed for each course. Grade change was calculated using the difference between one in-person and one remote quarter.</p>

Over the last 1 1/2 years, there were significantly more courses that had an increase in class average during online learning than courses that had a decrease in class average.

Of the 727 classes taught by the same professors in summer 2019 and summer 2020, 87% had an increase in the average class grade, 3% had no change and 10% had the average class grade decline during the pandemic. Of the 922 classes taught by the same professors in fall 2019 and fall 2020, 70% had an increase in the average class grade, 10% had no change and 20% had the average class grade decline during the pandemic.

Classes that exhibited the greatest changes in grade distribution between online and in-person learning included lower division, upper division and graduate-level courses.

Of the 20 classes that experienced the greatest grade average increase between summer 2019, which was in person, and summer 2020, which was online, 40% were lower division courses, 55% were upper division courses and 5% were graduate-level courses. In this same period, of the 20 classes that experienced the greatest decrease in grade average, 25% were lower division courses, 60% were upper division courses and 15% were graduate-level courses.

Of the 20 classes that experienced the greatest grade average increase between fall 2019 and fall 2020, 40% were lower division courses and 60% were upper division courses. In this same period, of the 20 classes that experienced the greatest decrease in grade average, 15% were lower division courses, 45% were upper division courses and 40% were graduate-level courses.

Some professors found that communicating with students was more important for student learning in the remote environment.

“If somebody told us that they were having a hard time, we accepted that in every case as a reasonable excuse and didn't push for any documentation,” said Kara Cooney, Egyptian art and architecture professor and chair of the department of Near Eastern languages and cultures. “We gave more second chances. We gave a lot more third chances too.”

### Effect of Grade Changes on Honors Eligibility

The increase in grade averages during the pandemic has affected eligibility for honor societies and Latin honors.

Some honor societies with a minimum GPA requirement to join have seen an increase in inductees.

Morgan Yun, president of honor society Alpha Lambda Delta and Phi Eta Sigma, said the number of inductees more than doubled in the 2020-2021 school year and hypothesized that this could be because of more students searching for a community on campus.

The UCLA chapter of Tau Beta Pi, a national engineering honor society, uses GPA percentiles to determine eligibility. Katie Wu, the co-vice president, said the GPA cutoffs have risen over the last year.

For Latin honors, which also uses cutoffs, 21 out of 24 (88%) GPA requirements across UCLA’s eight colleges increased from the 2020-2021 academic year to the 2021-2022 academic year.

### Changes in Grading Basis (Pass/No Pass vs. Letter Grade)

In spring 2020, the Academic Senate extended the deadline to change the grading basis of a course from Friday of week six to Friday of week 10. For summer 2021, UCLA is allowing students to change the grading basis of a course without a fee or petition through the second to last week of a course. The Academic Senate allowed students to pass/no pass multiple courses during spring 2020 and summer 2020 and allowed UCLA departments to count pass/no pass courses toward major and minor requirements.

While many departments implemented this policy, such as the psychology department, some departments like the math department did not allow pass/no pass options for any major or minor-required classes.

<section id="pie-charts">
  <div><canvas id="before-covid-pie-chart" width="400" height="300"></canvas></div>
  <div><canvas id="after-covid-pie-chart" width="400" height="300"></canvas></div>
</section>
<p class = 'caption'>Each pie chart shows the percentage breakdown of all student grades by grading basis selection (letter grade or pass/no pass).</p>

More than 90% of grades received by students were taken for a letter grade both during in-person and online learning. For fall and summer quarters combined, the proportion of pass/no pass grades was 56% higher during online learning in 2020 compared to in-person learning in 2019.

### Moving Forward

After UCLA announced that about [80% of classes](https://dailybruin.com/2021/04/02/ucla-announces-preliminary-plans-for-fall-return-to-campus-in-person-instruction) will be in person in fall, some students have expressed concerns about returning to campus. According to the Academic Senate’s webpage, the accommodations for pass/no pass will not be extended to fall.

“I hope professors realize we're not going to be able to just go back to normal after doing it this way for so long,” Price said. “It’s not going to be like an instant thing, … especially for the first years or people who only know online education, it's going to be hard.”

### About the Data

The grade distribution data for summer 2019, fall 2019, summer 2020 and fall 2020 was obtained from the UCLA Registrar’s Office. For courses with multiple lectures taught by the same professor in the same quarter, the grade distributions were aggregated.
