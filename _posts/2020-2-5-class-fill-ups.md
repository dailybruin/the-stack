---
title: How Quickly Do Classes Fill Up??
teaser: Determine which classes you should enroll during your first or second pass, based on analysis of the recent winter quarter 2020 enrollment.
authors:
  - andrew_kan
  - keith_atienza
  - sydney_kovach
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
scripts:
  - /js/posts/class-fill-ups/graphs/src/ChartMD.jsx
  - /js/posts/class-fill-ups/graphs/src/insightsMD.jsx
  - https://unpkg.com/react@16/umd/react.development.js
  - https://unpkg.com/react-dom@16/umd/react-dom.development.js
  - https://unpkg.com/babel-standalone@6/babel.min.js
  - https://unpkg.com/react-vis/dist/dist.min.js
  - https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js
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

<div id="chartMD"></div>

### Insights

Roughly 44% of classes filled up completely – out of these classes, around half became full during the first pass. For instance, Scandinavian 50W: “Introduction to Scandinavian Literatures and Cultures” – a class known for its light academic workload – filled up within the first hour. Statistics 10: “Introduction to Statistical Reasoning,” a popular general education class, filled up after four days, prohibiting students with freshman standing from getting in.

<div id="insightsMD"></div>

Megana Saripella, a third-year neuroscience and pre-medical student, said enrollment issues snowball from one incoming freshman class to the next.

“People older than you are being forced to take these classes because they can’t take them as freshmen,” she said. “Then, when you come as freshmen, because so many other people are taking them, you can't get in anymore.”

Saripella said the number of classes required for pre-med students to begin studying for the MCAT takes almost exactly two years.

“If you take into account the fact that you're not going to get into every class, ... you might not be able to take that in two years,” she said. “And if you can't take that in two years, you have to push them to your third year, which forces a gap year on you that (you) necessarily would not have had to take.”

While enrollment difficulties may leave pre-med students with no choice but to take a gap year, choosing to take a year off between an undergraduate degree and medical school is becoming increasingly popular.

Sandy Valdivieso, an academic counselor at the UCLA International Institute for the International Development Studies and Global Studies programs, both of which are interdepartmental programs, said she stresses flexibility in first pass enrollment. Valdivieso suggests looking into a variety of classes and not fixating on getting into one specific class. To ease the anxiety of enrollment, Valdivieso says the Global Studies department approves new courses each quarter and regularly updates its website.

Valdivieso also said she cannot enroll students who want, and do not need, a specific course. Because the department makes an effort to not overwork its TAs, Valdivieso has to deny students who ask for permission to enroll numbers or for her help in enrolling when they solely want a class. Valdivieso said the hardest part of enrollment for her is saying no to students.

“I see their situation and I wish I can help, but I just can't. So, usually we work together (to find) options,” Valdivieso said.

However, if a student is at risk of not graduating on time, Valdivieso will create a plan to help the student fulfill that requirement. In her almost 15 years of experience, Valdivieso said she has not seen a student postpone graduation because of enrollment issues.

Valdivieso said academic counselors know that enrollment is not ideal.

“I completely understand how difficult it is, and we're there with you all,” she said. “And we see it, and it's painful for us too.”

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

<script type="text/babel" src="/js/posts/class-fill-ups/graphs/src/ChartMD.jsx"></script>
<script type="text/babel" src="/js/posts/class-fill-ups/graphs/src/insightsMD.jsx"></script>
