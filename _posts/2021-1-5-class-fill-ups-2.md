---
title: How Quickly Do Classes Fill Up?
teaser: Determine which classes you should enroll during your first or second pass, based on analysis of the recent winter quarter 2020 enrollment.
authors:
  - ananya_garg
  - charlotte_huang
  - mansa_krishna
  - lindsey_parungo
key_takeaways:
  - Enrollment difficulties can force late graduation and/or gap years, and places administrative burden to certain departments.
  - Given data from more than 1,300 classes, around 42% of classes filled up their allocated seats.
  - Out of the 42% of classes that became full, around half were filled during the first pass - the initial enrollment period reserved for 10 units.
featured_image:
  url: class-fill-ups/placeholder.png
og_image: class-fill-ups/placeholder.png
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

Kaitlin Kearns, a second-year economics student, said that during the week of enrollment she is tense, stressed and anxious. Though UCLA randomly assigns enrollment passes to students within the same unit bracket, Kearns received one of the latest passes in her class bracket. This proved to be an issue when she attempted to register for Economics 101: “Microeconomics Theory,” a class required for her previous pre-major, business economics. The class offers around 400 spots each quarter, but by the date of Kearns’ first pass, the class was full. That enrollment difficulty forced Kearns to take her major prerequisites in a different order than encouraged by the department. Had Kearns stayed in the business economics pre-major, her hypothetical major application would have been pushed back for up to two quarters.

Kearns’ experience is not unique. Around 30,000 undergraduate students enroll in UCLA courses each quarter. Competing for a limited number of spots in each lecture, discussion section or lab, students may find that the enrollment period is one of the most stressful times for UCLA undergraduates. Failing to find a seat in the classes a major requires may jeopardize study abroad aspirations, on-time graduation and much more.

### How does enrollment work?

UCLA divides students based on credit hours and priority status into four main groups: 0-44.9, 45-89.9, 90-134.9, and 135+ units, with students enrolling in that order. Once students’ specific standings are determined, the Registrar’s office randomly assigns students in each group an enrollment time. During first pass enrollment, students may enroll in up to 10 units. The cycle resets for the second pass enrollment, where students can enroll in up to nine, 10 or 11 units, depending on the college or school they are in.

Typically, students enroll in two classes during their first pass for a higher chance of getting in, saving less urgent classes for the next enrollment period.

### About the Data

The data was collected from the schedule of classes provided by UCLA’s Registrar’s Office during Winter quarter 2020’s enrollment period, excluding the priority period for a select number of students. The numbers may reflect differently from its current standings; data was not collected beyond the last scheduled day of enrollment, and departments may change the number of seats or classes offered after the enrollment period.

Some classes may not show up from the list because they were not offered for the quarter or have some significant inconsistencies in the data. The graph serves primarily as a general guideline of how fast class enrollments were during this period.

To find out the rate at which undergraduate classes fill up, explore the graph below.


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

<div id="insightsMD"></div>


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
