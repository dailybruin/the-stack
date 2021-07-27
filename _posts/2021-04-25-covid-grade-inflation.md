---
title: How Have Grade Distributions Changed During Online Learning?
teaser: Covid-19 changed routines in regards to learning and teaching. How did those changes impact grade distributions?
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
  # - /js/posts/covid-grade-inflation/Main_Graph.js
  - /js/posts/covid-grade-inflation/MainChart.js
  - /js/posts/covid-grade-inflation/20-inflat-sum.js
  - /js/posts/covid-grade-inflation/fall-inflat-deflat.js

stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/covid-grade-inflation/app.css
---

<script src="https://code.highcharts.com/highcharts.js"></script>

<script src="https://code.highcharts.com/modules/export-data.js"></script>

<script src="https://code.highcharts.com/modules/accessibility.js"></script>

<script src="https://d3js.org/d3.v3.min.js"></script>

### Introduction
Over the past academic year, COVID -19 has caused changes to the way students and professors learn and teach. At UCLA, some of these changes included remote learning and changed policies on grading. This past year’s pandemic resulted in 6 quarters of learning that took place entirely online. From spring quarter of 2020, to summer sessions in 2021, UCLA has had remote learning policies in place for all classes, regardless of size. (CQ 1) Throughout these quarters, the Academic Senate has adjusted grading policies, including extending the deadline for changes in grading basis and allowing departments to count pass/no pass classes towards major and minor requirements (CQ 28).

“Online it was nice because you could pause the lectures, take notes, and have your slides next to you,” says Nate Price, a second-year microbiology, immunology and molecular genetics student(CQ 15), when talking about his online experience (CQ 8). While the lectures weren’t that different, finding the motivation to complete them could be challenging, said Price.

Mae Noland, a second-year art student (CQ 11) , notes some big differences in her studio classes, where reviewing each other’s works is a huge part of the learning process.  “I noticed that the quality of the classroom interactions and critiques have definitely not been on par with the in-person studios. The social aspect of being able to be there and talk to everybody and just — that’s definitely out of the equation now”. (CQ 12)

### Accommodations During the Pandemic

Remote learning has come with several challenges including, limited interpersonal connection, time zone differences, and new sources of stress or anxiety. 

Finding friends is more difficult due to the lack of personal connection during class, said Price. 

“I definitely don't put as much effort in when I'm overwhelmed. It just doesn't feel like a real class anymore. We’re all just in our little boxes on Zoom.” said Noland. (CQ 14) Accomodations from professors have helped with these challenges. “Professors are understanding of people not being able to complete work in this setting as efficiently as they would in a normal, in-person class setting.” (CQ 13) 

Professors adapted to these new learning environments in a variety of ways. Some used exam-monitoring tools like Respondus or Zoom, while others gave 24-hour or “take-home” exams. Some professors even passed on grading entirely and chose indiscriminate grading -- only grading based on participation and completion in mandatory assignments. Some professors were also more lenient in regards to assignment expectations and granting accommodations. 

“We gave more second chances, we gave a lot more third chances too. So, you know, you just have to be a little more lenient and less strict with some of the rules that you make,” (CQ17) said Dr. Kathlyn (Kara) Cooney, professor of Egyptian Art and Architecture and Chair of the Department of Near Eastern Languages and Cultures at UCLA (CQ16). “If somebody told us that they were having a hard time, we accepted that in every case as a reasonable excuse and didn't push for any documentation” says Dr. Cooney. (CQ 18)

With the return to in-person learning on the horizon. (CQ 2) The Stack examined how grade distributions changed during the pandemic,  how accommodations for pass/no pass affected the ratio of letter grades to pass/no pass and which courses had the greatest change in average grades. 

### Grade Distributions by Course
Between Fall 2019 and Fall 2020, there was a 29% increase in the number of As. The letter grade that showed the greatest increase from Fall 2019 to Fall 2020 was As with 35% in Fall 2019 and 45% in Fall 2020. This difference is even larger when the total number of A grades, A+, A, and A- grades are summed together. There is a 21% increase in the percentage of As from Fall 2019 to Fall 2020. However the difference between the number of passing grades, C- and up is relatively small. 97.77% of grades are passing in Fall 2019 and 98.65% are passing in Fall 2020. This is a .9% increase in the number of passing grades. Use the dropdown below to view the grade distributions of online and in-person learning for individual courses. 

# Grade Inflation by Class

<select id="dropdown-menu"></select>

<div class = "main_graph">
  <canvas id = "main-chart"></canvas>
  <p class = 'caption'>In person data is from Fall 2019. Online data is from Fall 2020. Classes with only one grade distribution were only offered during one of the quarters.</p> 
</div>

### The Most Inflated and Deflated Classes 

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
<p class = 'caption'>The letter grade data for each course was converted to the 4.0 GPA scale and the average was computed for each course. Grade change was calculated between one in-person and one remote quarter. </p> 

Over the course of the pandemic, there has been Of the 727 classes that were taught by the same professor in Summer 2019 and Summer 2020, 87.21% of classes experienced inflation, 2.61% remained unchanged, and 10.18% experienced deflation during the pandemic. Of the 922 classes taught by te same professor in Fall 2019 and Fall 2020, 69.74% had class averages increase, 9.98% remained unchanged, and 20.28% saw class averages fall during the pandemic.



However, increase in class average “We reward that investment, and that passion from the students. So students are really doing their best and working very hard, then that, that will be rewarded” says Dr.Cooney (CQ 29).




While many departments instated overall changes, and UCLA took many steps to enforce changes across the board, one of the biggest determinants in how classes were taught was the professor. Professors could choose between a wide variety of options for the format of a class -- live, asynchronous, flipped classroom, and more. They could also choose how they chose to administer exams, the amount of time they gave, the types of exams, and how much they monitored students during them.  



### Implications of Pandemic-Related Grade Change Grade Inflation 

Pandemic-related grade change, and as a result, changing student GPAs, has affected academic honors such as admission to honor societies and Latin Honors to varying degrees. 

“Last year we were inducting maybe 150 to 200, and this year we've seen a rise to about, I think it was like 500, inducted” (CQ 21) said Morgan Yun, president of Alpha Lambda Delta Phi Eta Sigma (ALDPES), an honor society at UCLA with a GPA minimum requirement of 3.5. However, an increase in students searching for a community may be responsible for part of the increase, not simply higher GPAs, said Yun. 

Other honor societies use proportions as cutoffs rather than numerical GPA cutoffs. Tau Beta Pi (TBP) is a national engineering honor society with a UCLA chapter that extends invitations to undergraduate engineering majors in the top one-eighth of junior class and top one-fifth of senior class (CQ 24). 

“The GPA cut offs that are used to determine your eligibility, definitely, we saw an increase, and we thought it was very interesting to say the least,” (CQ 25) says Katherine (Katie) Wu, co-vice president of TBP, when asked about any major changes for eligibility during the pandemic. 

The method for setting graduation Latin honors cut-offs has remained unchanged. The cutoffs are determined by the Registrar’s Office report of the previous year’s graduates’ cumulative GPAs from highest to lowest.  “Based on this information, the Registrar’s determined the top 5% with the highest GPA. This is the cut-off GPA for the summa cum laude honor,” writes a representative from the Academic Senate in correspondence with Stack journalists.  Magna cum laude honors and Cum laude honors are found similarly with the next 5% and 10%, respectively. “The Registrar’s Office used 2020 graduate data to determine the minimum thresholds for the 2021-2022 academic year” (CQ 27), says the representative. 

### Pass/No Pass vs Letter Grading


<figure class="highcharts-figure">
    <div id="container" style="height: 400px; width: 1000"></div>
    <p class='caption'>In person data is from Summer 2019 and Fall 2019. Online data is from Summer 2020 and Fall 2020.
    </p>
</figure>

<script src="/js/posts/covid-grade-inflation/pie_chart.js"></script>

In spring quarter 2020, UCLA extended the deadline to change the grading basis of a course from Friday of week 2 to Friday of week 9 and removed the fee for an approved grade change petition.changed its general Pass/No Pass policy to give students up until week 9 to decide if they would like to opt-out of letter grading (CQ 3).  (CQ 4) Many of UCLA’s departments also changed their grading policies with regards to Pass/No Pass and Letter Grading requirements. The UCLA Henry Samueli School of Engineering and Applied Science gave students the option to choose Pass/No Pass for one of their major-required classes (CQ 5). The math department, on the other hand, did not allow Pass/No Pass options for any major or minor-required classes (CQ 6). The art history department allowed students to take any amount of major-required courses for Pass/No Pass, as long as it did not conflict with limits set by the Academic Senate on Pass/No Pass courses (CQ 7). Throughout the pandemic, the Academic Senate changed it’s policy on the number of Pass/No Pass courses allowed, from two during Spring 2020 to one for students in good standing or two for students who did not utilize the option in the previous quarter from Fall 2020 forward (CQ 28). The number of students who chose to Pass/No Pass increased from 2243 in Summer 2019 to 3251 in Summer 2020, a 45% increase. Pass/No Pass increased from 5527 in Fall 2019 to 9529 in Fall 2020, a 72% increase.




### Conclusion 

With the announcement that 80% of classes will be in person in the fall, there is excitement about returning to campus. As of the latest on the Academic Senate’s webpage, the accommodations on Pass/No Pass will not be extended. Even with all the hype surrounding a return to Westwood, some students have expressed concerns about returning fully to normal. 

“I hope professors realize we're not going to be able to just go back to normal after doing it this way for so long. It’s not going to be like an instant thing, especially for the first years or people who only know online education, it's going to be a bit hard”. (CQ 10) 

///maybe add at conclusion or cut
However, even with new teaching techniques and adapting to the circumstances, remote learning has complicated how professors share their passion on a subject. “It's tough because when I'm in a classroom, I can see the students’ faces and I can see who's connecting,” (CQ 19) says Dr. Cooney, “That kind of outlet to passion is missing.” (CQ 20) Despite this drawback, there may be some positives with online learning, especially with Zoom’s chat function. “In some ways, I think that those of us who love to teach, and love to connect, have realized that this method of connecting allows for potentially a more democratic way of connecting” (CQ 27). 

### About the Data

The data for grade distributions was obtained from the UCLA Registrar Office. Data from six quarters was obtained: summer quarter 2019, fall quarter 2019, winter quarter 2020, spring quarter 2020, summer quarter 2020 and fall quarter 2020. The data includes subject area, catalog number, section number, grades and corresponding counts, total enrollment, instructor name and full course title. 

For courses with multiple lectures taught by a professor in the same quarter, the grade distributions were aggregated. 

To measure a course’s overall grade change, we calculated the “weighted GPA” by multiplying the percentage of each letter grade by their corresponding numeric GPA scale. The “weighted GPA” of the class in in-person quarter was then compared with that in the online learning quarter to determine if there’s an overall grade inflation. 











