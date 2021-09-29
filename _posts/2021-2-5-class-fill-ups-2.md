---
title: When to Enroll in Each Class
teaser: Determine which classes you should enroll in during your first or second pass, based on analysis of Spring 2020, Fall 2020, and Winter 2021 Quarter Enrollment Data
authors:
  - ananya_garg
  - charlotte_huang
  - mansa_krishna
  - lindsey_parungo
key_takeaways:
  - Enrollment can be a stressful process. Even if some students eventually get the classes they need, many classes fill up before first and second-year students have had a chance to enroll.
  - Just over 19% of classes were full after the first pass of winter quarter 2021 enrollment. They ranged across subject areas, with the three fullest by percentage being global studies, English composition, and physiological science.
  - Compared to in-person courses last winter quarter, online courses for winter quarter 2021 showed up to 40% increased enrollment in mathematics and computer science classes, especially for lower-division courses.
featured_image:
  url: class-fill-ups-2/placeholder.png
  og_image: class-fill-ups-2/placeholder.png
stylesheets:
  - https://unpkg.com/react-vis/dist/style.css
  - /css/posts/class-fill-ups-2/app.css
scripts:
  - /js/posts/class-fill-ups-2/graphs/src/ChartMD.jsx
  - /js/posts/class-fill-ups-2/graphs/src/ChartMD2.jsx
  - /js/posts/class-fill-ups-2/graphs/src/ChartMD3.jsx
  - /js/posts/class-fill-ups-2/graphs/src/DropDownChart.js
  - /js/posts/class-fill-ups-2/graphs/src/insightsMD.jsx
  - https://unpkg.com/react@16/umd/react.development.js
  - https://unpkg.com/react-dom@16/umd/react-dom.development.js
  - https://unpkg.com/babel-standalone@6/babel.min.js
  - https://unpkg.com/react-vis/dist/dist.min.js
  - https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js
---

Class enrollment can be chaotic and stressful. Many students experience frustration when classes they need or want are already full or are filling up at a rapid pace.

John Langdon, continuing lecturer in the History department, compared enrollment to getting the COVID-19 vaccine; searching for open classes is as difficult as finding available vaccination appointments. “That’s what (students are) going through when they enroll in these classes,” Langdon said. “It’s a real treasure hunt.”

## How does enrollment work?

Enrollment at UCLA is separated into three passes: priority, first and second pass. Students are assigned specific enrollment appointments based on their priority enrollment status and the number of credits they have earned. The priority pass, the earliest enrollment pass, is reserved for students in groups such as Regent Scholars, qualified veterans, NCAA athletes, homeless youth, foster youth served by the Guardian Scholars Program, and students served by the Center for Accessible Education. For the first and second passes, enrollment times are set by credit designations, which are broken up into five categories: 0-44.9, 45-89.9, 90-134.9, 135-159.9 and 160+ credits. Categories with a greater number of required credits are given higher priority and thus earlier enrollment slots. Within each category, students are randomly assigned enrollment times at each half-hour interval.

Enrollment is capped at 10 units, or approximately two classes, for the first pass. During the second pass, students can enroll in classes up to their school’s unit cap. Most students tend to enroll in high-priority classes during their first pass and save other courses of interest for their second pass.

## About the Data

Data from three quarters of enrollment was collected: spring quarter 2020, fall quarter 2020 and winter quarter 2021. The data was collected from the schedule of classes provided by UCLA’s Registrar’s Office during each corresponding enrollment period, excluding the priority period. The data includes class name, professor name, number of seats filled, number of seats left and total number of seats. Below are notes and limitations of the data.

Lecture numbers were not collected, so a lecture number was assigned randomly if a professor taught multiple lectures for the same class. With that being said, the lecture number listed below might not align with the one listed on the MyUCLA enrollment website.

The numbers may not accurately reflect the current standings of classes, as data was not collected beyond the last scheduled day of enrollment, and departments may change the number of seats or classes offered after the enrollment period. For classes whose total number of seats changed during the enrollment period, the maximum number of seats is used as the total number of seats reflected in the graph.

Some classes may not show up in the drop-down menu because they were not offered in a specific quarter or did not show up on the enrollment page at the beginning of the enrollment period. The graph serves primarily as a general guideline for how quickly classes filled up during this period. Please also be aware that data was not collected for short periods in both fall quarter 2020 and spring quarter 2020 – those periods were marked as “not collected” and imputed by the previous day’s enrollment data.

To find out the rate at which undergraduate classes fill up, explore the interactive graph below and select the academic term that you wish to look into. For the sake of visualization, only up to three classes can be selected at a time in the graph below.

<!-- Chart container -->

<select id="selectMe" class = "selectgroup" disabled>
    <option value="chartMD_winter">2021 Winter</option>
    <option value="chartMD_fall">2020 Fall</option>
    <option value="chartMD_spring">2020 Spring</option>
</select>

<div id="chartMD_winter" class="group" ></div>
<div id="chartMD_fall" class="group" ></div>
<div id="chartMD_spring" class="group" ></div>

## Insights

At the end of the first pass, just over 19% of all winter quarter 2021 classes, covering a wide variety of subject areas, were full. The subject area with the most classes full after first pass was English composition, which had 49 classes full. That is about 80% of all the classes offered in English composition, making it the second-fullest subject area by percentage, behind global studies. Other subject areas, such as art history, which was only 26% full at the end of first pass, had many open classes at the beginning of the second pass. While there were still plenty of classes available at the end of the first pass, it can be frustrating for students to find the classes they need are already full when it is their enrollment time.

Langdon said he used to have more second-year students in his class, indicating that these students now have a harder time enrolling in classes.

“Getting the right courses for a quality education has become a real scramble,” Langdon said.

<div id="insightsMD"></div>

Although the enrollment process has not changed with the shift to online learning, there have been unexpected changes in the data in comparison to last year’s data, which could be partially attributed to adjustments made to accomodate online classes. The percentage of full classes at the end of winter enrollment was slightly lower this year at only 34% compared to last year’s 44%. Possible reasons for this decline could include inconvenient time zones for international students, a change in the number of courses offered, or students choosing to take gap years. Despite the overall trend, some departments have seen large increases in enrollment, possibly because of changing exam policies, increases in the number of students enrolled, and students taking advantage of the asynchronous nature of certain classes by enrolling in classes with conflicting time slots. The most popular classes in the subject areas of mathematics and computer science have seen enrollment increases of more than 40%.

The impact of increased enrollment can make it more difficult for students to enroll in the classes they need, Langdon said.

<div class="float-container">
  <div class="float-child">

    <table>
      <tr>
        <th>Mathematics Classes</th>
        <th>Percent Increase in Enrollment</th>
      </tr>
      <tr>
        <td>MATH 3B</td>
        <td>49.29%</td>
      </tr>
      <tr>
        <td>MATH 31A</td>
        <td>44.05%</td>
      </tr>
      <tr>
        <td>MATH 115AH</td>
        <td>42.50%</td>
      </tr>
      <tr>
        <td>MATH 31AL</td>
        <td>36.43%</td>
      </tr>
      <tr>
        <td>MATH 131BH</td>
        <td>32.50%</td>
      </tr>
    </table>

  </div>

  <div class="float-child">
    <table>
      <tr>
        <th>Computer Science Classes</th>
        <th>Percent Increase in Enrollment</th>
      </tr>
      <tr>
        <td>COM SCI 31</td>
        <td>40.50%</td>
      </tr>
      <tr>
        <td>COM SCI 32</td>
        <td>27.65%</td>
      </tr>
      <tr>
        <td>COM SCI 118</td>
        <td>20.00%</td>
      </tr>
      <tr>
        <td>COM SCI 180</td>
        <td>11.12%</td>
      </tr>
      <tr>
        <td>COM SCI M146</td>
        <td>4.38%</td>
      </tr>
    </table>
  </div>
</div>

Enrollment is a stressful experience for most undergraduate students because their frustrations are amplified not only when their desired classes are full, but also when their assigned enrollment appointments are toward the end of their category’s possible appointments.

Jayde Meng, a second-year atmospheric and oceanic sciences student, said the worst part about enrollment is getting the assigned time. “It’s kind of hard to gauge whether you have a good first pass time or or a bad first pass time, but there have been times it’s felt super unfair,” Meng said.

Yet this data does not capture every aspect of enrollment needed to create the whole picture. Students are allowed to add and drop classes until the end of week two. They can get into classes that are full by using permission-to-enroll numbers or by waiting for another student to drop the class.

Varun Sivashankar, a third-year mathematics student, said that he has always been able to enroll in classes by the end of week two, even if they were full during enrollment.

While it may be stressful to join a class late, it affords students the opportunity to enroll in classes that may have filled up during the enrollment period.
Still, the data above begs the question – can the enrollment process at UCLA be improved?
“I think the enrollment process should be standardized and regularized by statisticians and people who understand how to do it,” Langdon said. “It has to be done in a much more equitable fashion.”

<script src="https://unpkg.com/react-vis/dist/dist.min.js"></script>

<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>

<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

<script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<script type="text/babel" src="/js/posts/class-fill-ups-2/graphs/src/ChartMD.jsx"></script>

<script type="text/babel" src="/js/posts/class-fill-ups-2/graphs/src/ChartMD2.jsx"></script>

<script type="text/babel" src="/js/posts/class-fill-ups-2/graphs/src/ChartMD3.jsx"></script>

<script type="text/babel" src="/js/posts/class-fill-ups-2/graphs/src/DropDownChart.js"></script>

<script type="text/babel" src="/js/posts/class-fill-ups-2/graphs/src/insightsMD.jsx"></script>
