---
title: Modeling the Spread of COVID-19 in UCLA Classrooms
teaser: What would happen if UCLA students returned in the fall to take in-person classes? We explore the potential spread of COVID-19 among students on UCLA’s campus.
authors:
  - radhika_ahuja
  - charlotte_huang
  - sydney_kovach
  - laurel_woods
key_takeaways:
  - According to our model of the undergraduate student network, each UCLA student shares a class with 228 other students on average.
  - Our simulation shows that with an R<sub>0</sub> value of 5.7, 94% of UCLA undergraduates could be infected by the end of fall quarter.
featured_image:
  url: covid-model/cover_photo.png
og_image: covid-model/cover_photo.png
stylesheets:
  - /css/posts/covid-model/app.css
scripts:
  - //d3js.org/d3.v5.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js
  - //unpkg.com/d3-simple-slider
  - /js/posts/covid-model/spread.js
  - /js/posts/covid-model/model.js
  - /js/posts/covid-model/linechart.js
---

# Introduction

In the middle of a global pandemic, uncertainty has become the new normal. Many states across the country are now beginning to lift restrictions, but colleges must weigh the difficult decision of how to keep students and staff safe while still providing a quality education. While UCLA has already decided to [move summer sessions A and C online](https://dailybruin.com/2020/05/11/ucla-to-hold-summer-session-c-online-considering-selective-in-person-instruction/), the fate of fall quarter is still up in the air. Crowded lecture halls and dorm rooms make it nearly impossible for students to practice social distancing without a disruption to normal college life. As UCLA grapples with whether to welcome students back to campus in the fall, The Stack examines how quickly COVID-19 could spread through the undergraduate student body. Inspired by professor Kim Weeden's [model of course enrollment networks](https://twitter.com/weedenkim/status/1258894522127396866?s=21) at Cornell University, we created our own model of how connected UCLA students are based on the classes they enroll in.

# Methods and Assumptions

Our model looks solely at the spread of COVID-19 through classes and does not take into account interactions students may have through dorm rooms, dining halls, campus organizations or other social aspects of student life. We assume that any student who shares a class with an infected student is exposed to the virus and could become infected. Additionally, the model only takes undergraduate students into consideration. In particular, a realistic picture of the campus includes many more affected groups, like graduate students, faculty, administrative staff, on-campus and dining workers, many of whom are more likely to be in a higher risk category than undergraduate students. However, to keep the model simple and its implementation feasible given the available data, we only factor in undergraduate students. It should also be noted that, although the studies referenced in this article have not yet been peer-reviewed, this is common for coronavirus-related studies because of their newness.

The incubation period for COVID-19 is typically five to six days, though it can take anywhere between one to 14 days to develop symptoms after exposure, if symptoms do develop. LA County offers free COVID-19 testing to all residents, including three testing sites within five miles of UCLA, but same-day and next-day appointments are prioritized for front-line workers and symptomatic patients. We assume that UCLA students will get tested seven days after exposure on average.

Ideally, once someone tests positive, they will self-isolate either the same day or the next day; therefore, we assume that infected students that become symptomatic will be contagious and spread COVID-19 for about a week. However, asymptomatic spread is also significant; according to an [NPR interview with Robert Redfield](https://www.npr.org/sections/health-shots/2020/03/31/824155179/cdc-director-on-models-for-the-months-to-come-this-virus-is-going-to-be-with-us), director of the Centers for Disease Control and Prevention, up to 25% of people with COVID-19 may never show symptoms and are therefore less likely to seek testing and self-isolate. Moreover, [a study](https://www.medrxiv.org/content/10.1101/2020.04.13.20063529v1) stated that 40% to 80% of transmissions could occur from individuals who have not shown symptoms.

R<sub>0</sub>, pronounced “R-naught” and referred to as the “basic reproduction number,” measures how many others an infected individual will infect. An R<sub>0</sub> below one means that the virus will die out over time whereas an R<sub>0</sub> above one means there will be exponential growth, as has been seen in the United States. Social distancing and shelter-at-home orders reduce human contact, which then lowers R<sub>0</sub> in a particular region. For our model, we used 5.7, the median R<sub>0</sub> value [calculated](https://wwwnc.cdc.gov/eid/article/26/7/20-0282_article) by a study posted on the CDC website, as our default. It should be noted that these calculations were based on data from China’s CDC. We started with a single infected student at UCLA. Although research is still being done on immunity to COVID-19, we assumed that once a student has recovered, they will not be infected again.

# Modeling the Student Network

The graph below models a typical quarter at UCLA, with each node representing an undergraduate student. Using fall 2019 data provided by the Office of Academic Planning and Budget of how many students are in each major, each student was placed in one of 76 departments and randomly assigned to three courses that were either within their department or were GEs, using a [stochastic block model](#more-on-stochastic-block-models). Each student is then assumed to be connected to every other student they share a class with, and the virus can be transmitted between connected students.

Interdepartmental connectivity in this model arises primarily from degree/school-level requirements like general education, diversity and language. Some other cases like interdepartmental requirements and cross-listing for individual majors, minors, and double majors are not taken into account. In general, these factors are likely to make the model more interconnected and as such our version is a more conservative picture. Some other niche cases like students coming in with transfer credit or students who waive out of certain requirements using diagnostic tests are not considered, i.e., it is assumed that every student takes all their required courses at UCLA.

To explore the visualization, drag the time slider forward through the weeks of fall 2020 or press play to automate it. Each week, an infected student will infect an average of R<sub>0</sub> students. The value of R<sub>0</sub>, [set to 5.7](https://wwwnc.cdc.gov/eid/article/26/7/20-0282_article) by default, can also be adjusted with the slider above the graph to explore different rates of infection.

UCLA could decrease the R<sub>0</sub> if the university implements mandatory social distancing in classrooms, requires the wearing of masks or provides ample sanitizing products to all classrooms and lecture halls. Any combination of these measures would decrease the spread of the virus.

<h3>Student Network Graph</h3>
<div class="loader-wrapper">
  <div class="loader"></div>
</div>
<div id="viz">
  <div class="r0-slider-wrapper">
    <p class="slider-title r0-title">Drag the slider to change the value of R<sub>0</sub></p>
    <input class="r0slider" type="range" min="0.1" max="18" value="5.7" step="0.1">
    <p class="r0val">R<sub>0</sub> = 5.7</p>
  </div>
  <div class="graph-wrapper">
    <div class="graph"></div>
  </div>
  <div class="row">
    <div class="column stats">
        <p class="healthy"></p>
        <p class="infected"></p>
        <p class="recovered"></p>
    </div>
    <div class="column slider-wrapper">
      <div class="slider"></div>
      <p class="slider-title">week of fall quarter</p>
    </div>
    <div class="column button-div">
      <button class="play button" type="button">Play</button>
      <button class="restart button" type="button">Restart</button>
    </div>
  </div>
</div>

In our model network, students had an average of 228 connections. We ran the simulation 100 times from week 0 to finals week with an R<sub>0</sub> value of 5.7, and found that on average, 94% of students were infected by the end of fall quarter. The peak of new cases occurred at week 6 with over 11,000 new cases.

We also ran the simulation several times for different values of R<sub>0</sub>. The following chart shows the number of people infected on average through the 11 weeks, for varying values of R<sub>0</sub>:

<div id="linechart-wrapper">
  <canvas id="linechart"></canvas>
</div>

# Conclusion

The potential spread of the virus depicted above does not take into account interactions in shared spaces such as bruinwalk, libraries, dining halls, etc. or the fact that the same lecture hall is used, i.e., the same chairs are reused and such surfaces might be a source of infection. These models also do not show the potential spread through shared living spaces such as dorms and apartments. Consequently, COVID-19 could be much more infectious through the UCLA community than the models above show. In fear of outbreaks, [California State University campuses will remain closed](https://www2.calstate.edu/csu-system/news/Pages/CSU-Chancellor-Timothy-P-Whites-Statement-on-Fall-2020-University-Operational-Plans.aspx) for the Fall 2020 semester, and the 23 universities in this system will proceed with primarily virtual instruction. UCLA has yet to make a decision on whether the Fall 2020 quarter will be held virtually or whether there will be some in-person instruction.

As of May 11, there are over 1.3 million confirmed cases and over 80,000 deaths in the U.S. In LA County, there are over 32,00 confirmed cases and over 1,500 deaths. LA County is offering free coronavirus tests for all residents and working to test up to 10,000 people every day, with each site capable of running 100 to 500 tests per day. Up to one in four COVID-19 patients may remain asymptomatic and never quarantine. Asymptomatic carriers may therefore be more likely to spread the virus than those who show symptoms, get tested and quarantine themselves. It is crucial to practice social distancing, wash hands and wear a cloth mask to prevent the virus from spreading, according to the CDC.

UCLA is a large school with a very well-connected student network posing numerous challenges for reopening the university in Fall.

For more updates on coronavirus news relevant to UCLA, visit the [Daily Bruin’s coronavirus thread](https://features.dailybruin.com/2020/covid-19/). For more information about how students have been affected by the pandemic, visit the Daily Bruin’s “[Unfinished Stories](https://covidstories.dailybruin.com/)” project. To schedule a free COVID-19 test in LA County or learn more about testing, [click here](https://lacovidprod.service-now.com/rrs?id=rrs_apply). More information about the coronavirus and COVID-19 from [UCLA Health](https://www.uclahealth.org/coronavirus) can be found here.

# More on Stochastic Block Models

A stochastic block model considers a set of student communities, grouped by department, such as mathematics, art history or psychology. So for example, consider a three-department school: Sciences with 200 students, Business with 150 students and Humanities with 170 students. The student communities set is then [200, 150, 170].

Then a matrix A defines the probabilities to randomly select students from each community/department to other communities/departments. The ith row represents the probability of a student from the ith community taking courses with people in each of the 3 departments.

So A = [[0.7, 0.1, 0.2] → probability of a sciences students in each department
[0.1, 0.8, 0.1]→ probability of a business student in each department
[0.1, 0.2, 0.7]] → probability of a humanities student in each department]

This example has simulated probabilities, but the real probabilities in our model are based on the number of GE, diversity and language courses in each major. So if a College of Letters and Science student in the mathematics department takes 140 units of major courses and 40 units of GEs, then the probability of the student being enrolled in the mathematics department is 140/180, and, in the other GE-offering departments, is 40/180, which in turn are distributed by department. So if there are three GE courses offered in total, with two of them being offered in department A and one being offered in department B, department A will have probability ⅔ _ 40/180, and department B will have probability ⅓ _ 40/180.
