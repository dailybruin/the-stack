---
title: How Have Grade Distributions Changed During Online Learning?
teaser: COVID-19 changed routines in regards to learning and teaching. How did those changes impact grade distributions?
authors:
  - lindsey_parungo
  - priya_kanneboyina
  - samantha_low
  - ziqing_luo

key_takeaways:
  - 29% more As were received in fall 2019 compared to fall 2020. 
  - The number of pass/no pass grades in fall 2020 increased 72% from fall 2019.
  - For classes taught by the same professor in fall 2019 and fall 2020, 70% had an increase in average grade during fall 2020.


featured_image:
  url: 
og_image: 

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js 
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  - //d3js.org/d3.v6.min.
  - //cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js
  - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/form.min.js
  - /js/posts/covid-grade-inflation/MainChart.js
  - /js/posts/covid-grade-inflation/20-inflat-sum.js
  - /js/posts/covid-grade-inflation/fall-inflat-deflat.js
  - /js/posts/covid-grade-inflation/pie_chart.js


stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/covid-grade-inflation/app.css
---

<script src="https://code.highcharts.com/highcharts.js"></script>

<script src="https://code.highcharts.com/modules/export-data.js"></script>

<script src="https://code.highcharts.com/modules/accessibility.js"></script>

<script src="https://d3js.org/d3.v3.min.js"></script>

### Introduction

Over the past academic year, COVID-19 has changed the way students and professors learn and teach. At UCLA, all quarters since spring 2020 have consisted of primarily online courses.

The UCLA Academic Senate, which is made up of faculty and deans and sets various academic regulations, adjusted grading policies in response to the pandemic to extend the deadline for students to change the grading basis for a class and allow departments to count pass/no pass classes towards major and minor requirements (CQ 1). During winter 2020 and spring 2020, the Academic Senate also allowed professors to offer alternative assessments instead of planned finals. (CQ 1)

Despite policy adjustments that allowed greater flexibility, many students still had mixed feelings about remote learning.

Nate Price (CQ2), a third-year microbiology, immunology and molecular genetics student said aspects of online classes were nice, like being able to pause lectures or have slides open (CQ 3). While the lectures were not significantly different from in-person classes, finding the motivation to complete them could be challenging (CQ4), Price said.

“I definitely don't put as much effort in when I'm overwhelmed.” third-year art student Mae Noeland (CQ5) said. “It just doesn't feel like a real class anymore. We’re all just in our little boxes on Zoom.”(CQ6)

Accomodations from professors have helped with these challenges, students said.

“Professors are understanding of people not being able to complete work in this setting as efficiently as they would in a normal, in-person class setting.” Noeland said. (CQ 7)

### Comparing Course Grade Distributions from In-person and Online Learning

The bar chart below compares the grade distributions of courses in fall 2019 and fall 2020. Use the dropdown to view the grade distributions of individual courses. Courses are listed in alphabetical order. If the course was taught by the same professor in fall 2019 and fall 2020, then grade distributions for both quarters will be shown.

<select id="dropdown-menu"></select>

<div class = "main_graph">
  <canvas id = "main-chart"></canvas>
  <p class = 'caption'>In-person grade data is from fall 2019. Online grade data is from fall 2020. Classes with only one grade distribution shown were only offered during one of the quarters.</p> 
</div>

Class grade distributions showed 29% more As across all classes in 2020 as compared to 2019. A was also the most common grade for both fall 2019 (35% of all letter grades) and fall 2020 (45% of all letter grades). When combined, all A grades (A-, A and A+), increased 21% from fall 2019 to fall 2020. However the change in the number of passing grades (C- and higher) was relatively small. 97.77% of grades were passing in fall 2019 compared to 98.65% in fall 2020.

### Classes With the Greatest Change in Grade Distribution

<div id="inflation"> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

<select class>
  <option value="fall">fall difference 2019/2020 </option>
  <option value="summer">summer difference 2019/2020</option>
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
        <canvas  id="fallinflatChart"></canvas>
      </div>
      <div class = "defChart">
        <canvas id="falldeflatChart"></canvas>
      </div>
      <p class = 'caption'>The letter grade data for each course was converted to the 4.0 GPA scale and the average was computed for each course. Grade change was calculated between one in-person and one remote quarter. </p>
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
      <p class = 'caption'>The letter grade data for each course was converted to the 4.0 GPA scale and the average was computed for each course. Grade change was calculated between one in-person and one remote quarter. </p>
    </div>
    
</div>

</div>

Over the past year and a half, there were significantly more courses that had an increase in class average during online learning than courses that had a decrease in class average.

Of the 727 classes taught by the same professor in summer 2019 and summer 2020, 87% had an increase in the average class grade, 3% had no change, and 10% saw the average class grade fall during the pandemic. Of the 922 classes taught by the same professor in fall 2019 and fall 2020, 70% had an increase in the average class grade, 10% experienced no change, and 20% saw the average class grade fall during the pandemic.

Classes that exhibited the greatest changes in grade distribution between online and in-person learning include lower division courses, upper division courses, and graduate level courses.

Of the 20 classes that experienced the greatest grade average increase between summer 2019, which was in-person, and summer 2020, which was online, 40% were lower division courses, 55% were upper division courses, and 5% were graduate level courses. In this same period, of the 20 classes that saw the greatest decrease in grade average, 25% were lower division courses, 60% were upper division courses, and 15% were graduate level courses.

Of the 20 classes that experienced the greatest grade average increase between fall 2019 and fall 2020, 40% were lower division courses and 60% were upper division courses. In this same period, of the 20 classes that saw the greatest decrease in grade average, 15% were lower division courses, 45% were upper division courses, and 40% were graduate level courses.

Some professors found that communicating with students was more important for student learning in the remote environment.

“If somebody told us that they were having a hard time, we accepted that in every case as a reasonable excuse and didn't push for any documentation.” (CQ8) said Dr. Kathlyn (Kara) Cooney, Egyptian Art and Architecture professor and Chair of the Department of Near Eastern Languages and Cultures at UCLA (CQ9). “We gave more second chances, we gave a lot more third chances too.”(CQ 10)

### Effect of Grade Changes on Honors Eligibility

The increase in grade averages during the pandemic has affected eligibility for honor societies and Latin Honors.

Some honor societies with a minimum GPA requirement to join have seen an increase in inductees.

Morgan Yun (CQ11), president of honor society Alpha Lambda Delta and Phi Eta Sigma (CQ12), said that the number of inductees more than doubled in the 2020-2021 school year and hypothesized that this could be due to more students searching for a community on campus.

The UCLA chapter of Tau Beta Pi, a national engineering honor society, uses GPA percentiles instead to determine eligibility. Co-vice president Katie Wu (CQ13) said the GPA cutoffs have risen over the last year (CQ14).

For Latin Honors, which also uses cutoffs, 21 out of 24 (88%) GPA requirements across UCLA’s 8 colleges increased from the 2020-2021 academic year to the 2021-2022 academic year. (CQ15)

### Changes in Grading Basis (Pass/No Pass vs. Letter Grade)

In spring 2020, the Academic Senate extended the deadline to change the grading basis of a course from Friday of week 6 to Friday of week 10. For fall 2021 through summer 2021, UCLA allowed students to change the grading basis of a course without fee or petition through the second to last week of a course (CQ1). The Academic Senate allowed students to Pass/No Pass multiple courses during Spring 2020 and Summer 2020 (CQ 1) and allowed UCLA departments to count pass/no pass courses towards major and minor requirements.

While many departments implemented this policy, such as the psychology department (CQ16), some departments like the math department did not allow pass/no pass options for any major or minor-required classes (CQ 17).

<section id="pie-charts">
  <div><canvas id="before-covid-pie-chart" width="400" height="300"></canvas></div>
  <div><canvas id="after-covid-pie-chart" width="400" height="300"></canvas></div>
</section>
<p class = 'caption'>Each pie chart shows the percentage breakdown of all grades received by students by grading basis selection (letter grade or pass/no pass).</p>

Over 90% of grades received by students were taken for a letter grade both during in-person and online learning. For fall and summer quarters combined, the proportion of pass/no pass grades was 56% higher during online learning in 2020 compared to in-person learning in 2019.

### Moving Forward

After UCLA announced that around [80% of classes will be in person](https://dailybruin.com/2021/04/02/ucla-announces-preliminary-plans-for-fall-return-to-campus-in-person-instruction) in the fall, some students have expressed concerns about returning fully to normal. According to the Academic Senate’s webpage, the accommodations on pass/no pass will not be extended to fall 2021 (CQ1).

“I hope professors realize we're not going to be able to just go back to normal after doing it this way for so long,” Price said. “It’s not going to be like an instant thing, especially for the first years or people who only know online education, it's going to be hard.” (CQ 18)

### About the Data

The grade distribution data for summer 2019, fall 2019, summer 2020 and fall 2020 was obtained from the UCLA Registrar’s Office. For courses with multiple lectures taught by the same professor in the same quarter, the grade distributions were aggregated.
