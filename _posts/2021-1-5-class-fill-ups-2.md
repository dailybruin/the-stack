---
title: How Quickly Do Classes Fill Up?
teaser: Determine which classes you should enroll during your first or second pass, based on analysis of Spring 2020, Fall 2020, and Winter 2021 Quarter Data
authors:
  - ananya_garg
  - charlotte_huang
  - mansa_krishna
  - lindsey_parungo
key_takeaways:
  - Enrollment is a stressful process. Even if students eventually get the classes that they need, many classes fill up before freshman and sophomores have a chance to enroll.
  - Just over 19% of classes were full after 1st pass. They ranged across departments, with the three fullest by percentage being Global Studies, English Composition, and Physiological Science.
  - Compared to in-person courses last winter quarter, online courses this quarter showed an up to 50% increased enrollment in Math and Computer Science classes, especially lower division courses.
featured_image:
  url: class-fill-ups-2/placeholder.png
og_image: class-fill-ups-2/placeholder.png
stylesheets:
  - https://unpkg.com/react-vis/dist/style.css
  - https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
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
  #- /js/posts/class-fill-ups/graphs/src/testComponent.jsx
---

Class enrollment is nothing short of chaos. All the spots in classes that students need or want to enroll in seem to already be filled up or are getting filled up at a rapid pace. Indeed, Dr. John Langdon, Continuing Lecturer in the History Department at UCLA, seems to have hit the nail on the head - “It comes time to enroll and it’s a real scramble to get the classes you want… Can I talk about a historical parallel? It’s called enrolling for the Pfizer vaccine”...“It’s a real treasure hunt! I said ‘I want to go to Northridge,’ and it’s all filled up. And then you go to the next site, it’s all filled up. Well, I ended up at Magic Mountain on Sunday afternoon. I got my first inoculation but there is no telling when I’ll get my second one”... “and there are no slots because the reservations are only for five days -- that’s what [students are] going through when they enroll in these classes!” ~ Dr. John Langdon, Continuing Lecturer, History Department, UCLA

There can be no doubt that class enrollment seems like a grand, tedious adventure. But before we can analyze class enrollment data, we must first try to understand the enrollment process!

### How does enrollment work?

Enrollment at UCLA is separated into three passes, priority, first and second pass. Students are assigned specific enrollment appointments based on priority status and number of credits. For first and second pass, which most students participate in, credit designations are broken up into four categories: 0-44.9, 45-89.9, 90-134.9, and 135+. The earliest appointments go to students in the category with the most credits. Within each category, students are assigned enrollment times at each half hour time slot randomly.

During first pass, students are limited to 10 units, or approximately 2 classes. During the second pass, they can enroll in classes up to their school’s unit cap. Most students enroll in high priority classes in the first pass, and save others for the second pass.

### About the Data

Three quarters’ enrollment data were collected, including Winter 2021, Fall 2020, and Spring 2020. The data were collected from the schedule of classes provided by UCLA’s Registrar’s Office during each corresponding enrollment period, excluding the priority period for a selected number of students. Data include class name, professor name, number of seats filled, number of seats left, and total number of seats. Below are some notes, probably limitations, for the data.  

Firstly, the data of lecture number has not been scraped, so the lecture number was assigned randomly if the same professor teaches multiple lectures for the same class. With that being said, the lecture number listed below might not be aligned with that listed on MyUCLA enrollment website. Moreover, the numbers may reflect differently from its current standings as data was not collected beyond the last scheduled day of enrollment and departments may change the number of seats or classes offered after the enrollment period. For those classes whose total number of seats are changed during the enrollment period, the maximum is chosen as the total_seats reflected below. Some classes may not show up from the list because they were not offered in that quarter or did not show up on the enrollment page at the beginning of the enrollment period. The graph serves primarily as a general guideline of how fast class enrollments were during this period.

To find out the rate at which undergraduate classes fill up, explore the graph below and choose the academic term that you want to look into. Please be aware that a small period of data was not collected for both Fall 2020 and Winter 2020 quarter, and those periods were imputed by previous day’s enrollment data.   

<!-- Chart container -->
<select id="selectMe" class = "selectgroup" disabled>
    <option value="chartMD_winter">2021 Winter</option>
    <option value="chartMD_fall">2020 FALL</option>
    <option value="chartMD_spring">2020 Spring</option>
</select>

<div id="chartMD_winter" class="group" ></div>
<div id="chartMD_fall" class="group" ></div>
<div id="chartMD_spring" class="group" ></div>

### Insights

At the end of the first pass, just over 19% of all classes covering a wide variety of departments were full. Some departments were more filled up than others after first pass, including those departments with classes that students tend to prioritize. While there are still plenty of classes available at the end of first pass, it can be frustrating for students to find the classes that they need already full. Dr. John Langdon, Continuing Lecturer in UCLA’s History Department, offered his opinion on the topic, “The basic issue here is: getting the right courses for a quality education has become a real scramble for our students because frankly, we keep admitting more and more students to UCLA, and it’s harder and harder, I think I’m understanding, to get the courses you need for whatever program you’re preparing.”

<div id="insightsMD"></div>

Though the enrollment process has not changed with the shift to online learning, there have been unexpected changes in the data in comparison to last year’s data, which could be attributed to online classes - i.e., there have been adjustments in students’ ability to take classes as they have been shifted online. The percentage of full classes at the end of enrollment was slightly lower this year at only 34% compared to last year’s 44%. Possible reasons for this decline could include the changing exam policies, inconvenient time zones for international students, and students taking advantage of the asynchronous nature of certain classes to enroll in classes with conflicting time slots. Another (possibly welcome) change were exam policies allowing for 24-hour and open note exams. These adjustments are especially popular in the Mathematics and Computer Science departments. It stands to reason that with the newly-introduced popular examination policies, people would be more likely to enroll in more of these classes. In fact, Jayde Meng, a sophomore student majoring in the Atmospheric and Oceanic Sciences claimed, “When I was signing up for Math 131A last quarter, it filled up before my enrollment even started.” While the data does not depict a clear causal relationship, this could be a factor contributing to the increased enrollment in these departments since last year. Below tables show Top 5 math and computer science classes that have the largest percentage increase in enrollment, respectively.

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

Enrollment is, no doubt, a stressful experience for most undergraduate students and their frustration is amplified when their desired classes are full, but this data does not capture every aspect of enrollment needed to create the whole picture. Students are allowed to add and drop classes until the end of Week Two. Varun Sivashankar, a junior student at UCLA majoring Mathematics claims, “In upper division classes, I felt that, in general, at least in Math, I always got into the classes that I wanted to, either because they were open anyway or you’re placed on the unofficial waitlist. You tend to get in, pretty much every time … If I didn’t get in during my enrollment passes, I would always get in by the first or second week.” While it is certainly stressful to join a class late, it affords students the opportunity to enroll in classes that may have filled up during the enrollment period.

And yet, the data above begs the question - can the enrollment process at UCLA be improved?
“Can I rephrase the question? Do you think the inoculation process for COVID could be improved? If so, how? That’s one hell of a question you’re asking me.” ~ Dr. John Langdon, Continuing Lecturer, History Department, UCLA

<link rel="stylesheet" href="https://unpkg.com/react-vis/dist/style.css">
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
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
<!-- <script type="text/babel" src="/js/posts/class-fill-ups-2/graphs/mathcstable.js"></script> -->
