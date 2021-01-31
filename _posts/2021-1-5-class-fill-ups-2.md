---
title: Class Enrollment Chaos - A Historical Parallel for the Pfizer Vaccine Scramble
teaser: Determine which classes you should enroll during your first or second pass, based on analysis of Spring 2020, Fall 2020, and Winter 2021 Quarter Enrollment Data
authors:
  - ananya_garg
  - charlotte_huang
  - mansa_krishna
  - lindsey_parungo
key_takeaways:
  - Enrollment is a stressful process. Even if students eventually get the classes that they need, many classes fill up before first and second year students have a chance to enroll.
  - Just over 19% of classes were full after the first pass of Winter 2021 enrollment. They ranged across departments, with the three fullest by percentage being Global Studies, English Composition, and Physiological Science.
  - Compared to in-person courses last winter quarter, online courses this Winter 2021 quarter showed an up to 50% increased enrollment in Mathematics and Computer Science classes, especially lower division courses.
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

Class enrollment is nothing short of chaos. All the spots in classes that students need or want to enroll in seem to already be filled up or filling  up at a rapid pace. Dr. John Langdon, Continuing Lecturer in the History Department at UCLA said, “It comes time to enroll and it’s a real scramble to get the classes you want … Can I talk about a historical parallel? It’s called enrolling for the Pfizer vaccine … It’s a real treasure hunt! I said ‘I want to go to Northridge,’ and it’s all filled up. And then you go to the next site, it’s all filled up. Well, I ended up at Magic Mountain on Sunday afternoon. I got my first inoculation but there is no telling when I’ll get my second one ... and there are no slots because the reservations are only for five days -- that’s what [students are] going through when they enroll in these classes!”

## How does enrollment work?

Enrollment at UCLA is separated into three passes: priority, first and second pass. Students are assigned specific enrollment appointments based on their priority enrollment status and the number of credits they have earned. Priority passes, the earliest enrollment, are reserved for students in groups such as Regent Scholars, qualified veterans, NCAA athletes, homeless youth, foster youth served by the Guardian Scholars Program, and students served by the Center for Accessible Education. For the first and second passes, enrollment times are set by credit designations which are broken up into four categories: 0-44.9, 45-89.9, 90-134.9, 135-159.9 and 160+ credits. The categories with a greater number of required earned credits are given higher priority, and thus earlier enrollment slots. Within each category, students are randomly assigned enrollment times at each half hour interval.

Enrollment is capped at 10 units (or approximately 2 classes) for the first pass, but during the second pass, students can enroll in classes up to their school’s unit cap. Most students tend to enroll in high priority classes during their first pass, and save other courses of interest for their second pass.

## About the Data

Three quarters’ enrollment data were collected: Spring 2020, Fall 2020, Winter 2021. The data was collected from the schedule of classes provided by UCLA’s Registrar’s Office during each corresponding enrollment period, excluding the priority period for a selected number of students. The data includes class name, professor name, number of seats filled, number of seats left, and total number of seats. Below are notes and limitations of the data.   

Lecture numbers were not scraped, so a lecture number was assigned randomly if a professor taught multiple lectures for the same class. With that being said, the lecture number listed below might not be aligned with that listed on MyUCLA enrollment website.

The numbers may not accurately reflect their current standings as data was not collected beyond the last scheduled day of enrollment and departments may change the number of seats or classes offered after the enrollment period. For  classes whose total number of seats are changed during the enrollment period, the maximum is chosen as the total_seats reflected below.

Some classes may not show up in the dropdown because they were not offered in that quarter or did not show up on the enrollment page at the beginning of the enrollment period. The graph serves primarily as a general guideline for how fast classes filled out during this period.

To find out the rate at which undergraduate classes fill up, explore the interactive graph below and select the academic term that you wish to look into. Please be aware that data was not collected for short periods in both the Fall 2020 and Winter 2020 quarters - those periods were marked as not collected and imputed by the previous day’s enrollment data.

For the sake of visualization, only up to 3 classes can be selected at one time in the graph below.

<!-- Chart container -->
<select id="selectMe" class = "selectgroup" disabled>
    <option value="chartMD_winter">2021 Winter</option>
    <option value="chartMD_fall">2020 FALL</option>
    <option value="chartMD_spring">2020 Spring</option>
</select>

<div id="chartMD_winter" class="group" ></div>
<div id="chartMD_fall" class="group" ></div>
<div id="chartMD_spring" class="group" ></div>

## Insights

At the end of the first pass, just over 19% of all Winter 2021 classes, covering a wide variety of departments, were full. The most full department was the English Composition department which had about 80% of all classes filled by the second pass. Other departments such as the Art History department, which was only  26% full at the end of first pass, stay open into second. When comparing departments by the number of classes full, rather than by percentage, English Composition with INSERT NUMBER HERE remains near the top, coming in second to Global Studies with INSERT NUMBER HERE. While there are still plenty of classes available at the end of the first pass, it can be frustrating for students to find the classes they need already full. Langdon said, “The basic issue here is: getting the right courses for a quality education has become a real scramble for our students because frankly, we keep admitting more and more students to UCLA, and it’s harder and harder, I think I’m understanding, to get the courses you need for whatever program you’re preparing.”

<div id="insightsMD"></div>

Though the enrollment process has not changed with the shift to online learning, there have been unexpected changes in the data in comparison to last year’s data, which could be partially attributed to adjustments for online classes. The percentage of full classes at the end of winter enrollment was slightly lower this year at only 34% compared to last year’s 44%. Possible reasons for this decline could include inconvenient time zones for international students, a change in the number of courses offered, or students choosing to take gap years. Despite the overall trend, some departments have seen large increases in enrollment, possibly due to changing exam policies, and students taking advantage of the asynchronous nature of certain classes to enroll in classes with conflicting time slots. One exam policy change is allowing for 24-hour and open-note exams. These adjustments are especially popular in the Mathematics and Computer Science departments. While the data does not depict a clear causal relationship, it could be a factor contributing to the increased enrollment in these departments since last year. The most popular classes in these departments have seen enrollment increases of more than 40%. The impacts of this increased enrollment can make it more difficult for students to enroll in the classes they need. Jayde Meng, a second year Atmospheric and Oceanic Sciences major said, “When I was signing up for Math 131A last quarter, it filled up before my enrollment even started.”

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

Enrollment is, no doubt, a stressful experience for most undergraduate students, not only because their frustrations are amplified when their desired classes are full, but also if their assigned enrollment appointments are towards the end of their categories appointments. Jayde Meng said, “The worst part about enrollment, like the thing I dislike the most, would be getting the enrollment time. It’s kind of hard to gauge whether you have a good first pass time or or a bad first pass time, but there have been times it’s felt super unfair. Last quarter I was 5 units below heading into junior standing and I was given the time slot right before the freshman started enrolling.”

Yet, this data does not capture every aspect of enrollment needed to create the whole picture. Students are allowed to add and drop classes until the end of Week Two. Varun Sivashankar, a third year Mathematics major said, “In upper division classes, I felt that, in general, at least in Math, I always got into the classes that I wanted to, either because they were open anyway or you’re placed on the unofficial waitlist. You tend to get in, pretty much every time … If I didn’t get in during my enrollment passes, I would always get in by the first or second week.” While it is certainly stressful to join a class late, it affords students the opportunity to enroll in classes that may have filled up during the enrollment period.

Still, the data above begs the question - can the enrollment process at UCLA be improved?
Langdon responded saying, “Can I rephrase the question? Do you think the inoculation process for COVID could be improved? If so, how? That’s one hell of a question you’re asking me.”

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
