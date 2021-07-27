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
  # - /cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js 
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  #- //ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
  - //d3js.org/d3.v6.min.js
  - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  # - //code.jquery.com/jquery-1.11.2.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.js
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/form.min.js
  - //cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js
  - //cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js

  # - /js/posts/covid-grade-inflation/Main_Graph.js
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

Over the past academic year, COVID-19 has changed the way students and professors learn and teach. At UCLA, all quarters since spring 2020 have consisted of primarily online courses. The Academic Senate adjusted grading policies in response to the pandemic, including extending the deadline for changes in grading basis and allowing departments to count pass/no pass classes towards major and minor requirements (CQ 28). During winter 2020 and spring 2020, the Academic Senate also allowed professors to offer alternative assessments instead of planned finals. (CQ 28)

Despite policy adjustments, which allowed greater flexibility, many students had mixed feelings about remote learning.

“Online it was nice because you could pause the lectures, take notes, and have your slides next to you,” said Nate Price, a second-year microbiology, immunology and molecular genetics student(CQ 15) (CQ 8). While the lectures weren’t that different, finding the motivation to complete them could be challenging, said Price.

Mae Noland, a second-year art student (CQ 11) said, “I definitely don't put as much effort in when I'm overwhelmed. It just doesn't feel like a real class anymore. We’re all just in our little boxes on Zoom.”(CQ 14) Accomodations from professors have helped with these challenges. “Professors are understanding of people not being able to complete work in this setting as efficiently as they would in a normal, in-person class setting.” (CQ 13)

### Comparing Course Grade Distributions from In-person and Online Learning

The bar chart below compares the grade distributions of courses in fall 2019 and fall 2020. Use the dropdown to view the grade distributions of individual courses. If the course was taught by the same professor in fall 2019 and fall 2020, then grade distributions for both quarters will be shown.

<select id="dropdown-menu"></select>

<div class = "main_graph">
  <canvas id = "main-chart"></canvas>
  <p class = 'caption'>IIn-person grade data is from fall 2019. Online grade data is from fall 2020. Classes with only one grade distribution shown were only offered during one of the quarters.</p> 
</div>

In fall 2020, 29% more As were received in all courses compared to fall 2019. A was also the most common grade for both fall 2019 (35% of all letter grades) and fall 2020 (45% of all letter grades). For all A grades (A-, A and A+), there was a 21% increase from fall 2019 to fall 2020. However the change in the number of passing grades (C- and higher) was relatively small. 97.77% of grades were passing in fall 2019 compared to 98.65% in fall 2020.

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
        <div class="item social">Social</div>
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
    </div>   
    <div class= "summer GFG">
      <div id="legend">
        <div class="item physical">Physical Science</div>
        <div class="item life_science">Life Science</div>
        <div class="item social">Social</div>
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

<div class = "small-line-break"></div>

<p class = 'caption'>The letter grade data for each course was converted to the 4.0 GPA scale and the average was computed for each course. Grade change was calculated between one in-person and one remote quarter. </p>

Over the course of the pandemic, there has been significantly more increases in average class grades than decreases. Of the 727 classes taught by the same professor in summer 2019 and summer 2020, 87% had class averages increase, 3% experienced no change, and 10% saw class averages fall during the pandemic. Of the 922 classes taught by the same professor in fall 2019 and fall 2020, 70% had class averages increase, 10% experienced no change, and 20% saw class averages fall during the pandemic.

Of the 20 classes that experienced the greatest grade average increase between summer 2019, which was in-person, and summer 2020, which was online, 40% were lower division courses and 55% were upper division courses, and 5% were graduate level courses. In this same period, of the 20 classes that saw the greatest decrease in grade average, 25% were lower division courses, 60% were upper division courses, and 15% were graduate level courses.

Of the 20 classes that experienced the greatest grade average increase between fall 2019 and fall 2020, 40% were lower division courses and 60% were upper division courses. In this same period, of the 20 classes that saw the greatest decrease in grade average, 15% were lower division courses, 45% were upper division courses, and 40% were graduate level courses.

Some professors found that communicating with students was more important for student learning in the remote environment.

“If somebody told us that they were having a hard time, we accepted that in every case as a reasonable excuse and didn't push for any documentation.” (CQ18) said Dr. Kathlyn (Kara) Cooney, professor of Egyptian Art and Architecture and Chair of the Department of Near Eastern Languages and Cultures at UCLA (CQ16). “We gave more second chances, we gave a lot more third chances too. So, you know, you just have to be a little more lenient and less strict with some of the rules that you make.”(CQ 17)

### Effect of Grade Changes on Honors Eligibility

The increase in grade averages during the pandemic has affected eligibility for honor societies and Latin Honors.

Some honor societies with a minimum GPA requirement to join have seen an increase in inductees. Morgan Yun, president of honor society Alpha Lambda Delta Phi Eta Sigma said that the number of inductees more than doubled in the 2020-2021 school year and hypothesized that this could also be due to more students searching for a community on campus.
The UCLA chapter of Tau Beta Pi, a national engineering honor society, uses GPA percentiles instead to determine eligibility. According to co-vice president Katherine Wu, the GPA cutoffs have risen over the last year.

For Latin Honors, which also uses cutoffs, 22 out of 24 (91.67%) GPA requirements across UCLA’s 8 colleges increased from the 2020-2021 Academic year to the 2021-2022 Academic Year. (CQ30)

### Changes in Grading Basis (Pass/No Pass vs. Letter Grade)

In spring 2020, the Academic Senate extended the deadline to change the grading basis of a course from Friday of week 2 to Friday of week 9 and removed the fee for an approved grade change petition. The Academic Senate allowed students to Pass/No Pass multiple courses during Spring 2020 and Summer 2020 (CQ 28) and allowed UCLA departments to count pass/no pass courses towards major and minor requirements. While many departments implemented this policy, such as the psychology department, some departments like the math department did not allow pass/no pass options for any major or minor-required classes (CQ 6).

<section id="pie-charts">
  <div><canvas id="before-covid-pie-chart" width="400" height="300"></canvas></div>
  <div><canvas id="after-covid-pie-chart" width="400" height="300"></canvas></div>
</section>
<p class = 'caption'>Each pie chart shows the percentage breakdown of all grades received by students by grading basis selection (letter grade or pass/no pass).</p>

Over 90% of grades received by students were taken for a letter grade both during in-person and online learning. The number of pass/no pass grades increased 45% from summer 2019 to summer 2020 and increased 72% from fall 2019 to fall 2020.

### Moving Forward

With the announcement that 80% of classes will be in person in the fall,some students have expressed concerns about returning fully to normal. According to the Academic Senate’s webpage, the accommodations on pass/no pass will not be extended to fall 2021.

“I hope professors realize we're not going to be able to just go back to normal after doing it this way for so long,” said Price. “It’s not going to be like an instant thing, especially for the first years or people who only know online education, it's going to be a bit hard.” (CQ 10)

### About the Data

The grade distribution data for summer 2019, fall 2019, summer 2020 and fall 2020 was obtained from the UCLA Registrar’s Office. For courses with multiple lectures taught by the same professor in the same quarter, the grade distributions were aggregated.
