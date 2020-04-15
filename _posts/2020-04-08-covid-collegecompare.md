---
title: School’s Out, Zoom’s In.
teaser: University life across the United States has been largely upended because of COVID-19. Find out how the measures schools have taken to stop the spread correlate with local confirmed cases, state actions and more.
authors:
  - keri_chen
  - kelly_chen
  - bernard_mendez
  - madeline_blasingame
  - radhika_ahuja
  - andrew_kan
key_takeaways:
  - All universities included in this article have moved to remote learning for the remainder of the school year.
  - While many schools across the country have moved to enforce mandatory pass/no pass or equivalent grading systems for the remainder of the school year, the majority of University of California schools so far have not followed suit.
  - Universities tended to shift toward remote learning within a week after their first university-affiliated infection. Schools without a university-affiliated infection moved online by mid-March.

featured_image:
    url: collegecompare/collage-cover.png
og_image: collegecompare/collage-cover.png
stylesheets:
  - /css/posts/covid-collegecompare/app.css
  - https://cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.css
scripts:
  # Below scripts are for the timeline
  - https://www.amcharts.com/lib/4/core.js
  - https://www.amcharts.com/lib/4/charts.js
  - https://www.amcharts.com/lib/4/plugins/timeline.js
  - https://www.amcharts.com/lib/4/plugins/bullets.js
  - https://www.amcharts.com/lib/4/themes/animated.js
  - https://www.amcharts.com/lib/4/plugins/overlapBuster.js
  - https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
  - https://cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.jquery.min.js
  - /js/posts/covid-collegecompare/timeline.js
  - https://d3js.org/d3.v4.min.js
  - //unpkg.com/d3-array@1
  - //unpkg.com/d3-path@1
  - //unpkg.com/d3-shape@1
  - /js/posts/covid-collegecompare/lollipop.js
---
Within the past month, the spread of the novel coronavirus in the U.S. has forced college campuses around the country to shut down regular operations. As many schools implemented guidelines such as social distancing as (recommended by the Centers for Disease Control and Prevention)[https://www.whitehouse.gov/wp-content/uploads/2020/03/03.16.20_coronavirus-guidance_8.5x11_315PM.pdf], they were also forced to make decisions regarding student housing and in-person classes. This article compares how different schools have responded to the virus, in accordance with state guidelines and increasing numbers of confirmed cases within or near their campuses.

Use the drop-down menus to filter the college action timeline by college and event, and mouse over a college’s line to track its major event history.

<!-- Dropdown for Timeline -->

<select multiple id="timeline_dropdown_school" class="dropdown" data-placeholder="Choose a school..." onchange="changeTimeline();">
    <option value="UCLA">UCLA</option>
    <option value="Columbia">Columbia</option>
    <option value="Harvard">Harvard</option>
    <option value="UC Berkeley">UC Berkeley</option>
    <option value="UC Davis">UC Davis</option>
    <option value="UC Irvine">UC Irvine</option>
    <option value="UC Merced">UC Merced</option>
    <option value="UC Riverside">UC Riverside</option>
    <option value="UC San Diego">UC San Diego</option>
    <option value="UC Santa Barbara">UC Santa Barbara</option>
    <option value="UC Santa Cruz">UC Santa Cruz</option>
    <option value="USC">USC</option>
    <option value="Stanford">Stanford</option>
    <option value="UChicago">The University of Chicago</option>
    <option value="University of Florida">University of Florida</option>
    <option value="University of Washington">University of Washington</option>
    <option value="UT Austin">University of Texas, Austin</option>
</select>

<select multiple id="timeline_dropdown_event" class="dropdown" data-placeholder="Choose an event..." onchange="changeTimeline();">
    <option value="rescheduled">Rescheduling of Classes</option>
    <option value="cancelled_classes">Cancellation of In-Person Classes</option>
    <option value="first_infection">First School Infection</option>
    <option value="grading_change">Change in Grading Basis</option>
    <option value="housing_change">Change in University Housing Options</option>
</select>

<div id="timeline"></div>

As schools like Harvard, Columbia and Stanford make [headlines](https://news.harvard.edu/gazette/story/2020/03/harvard-college-adopts-temporary-grading-policy-for-spring-term/) for enforcing a pass/no pass or equivalent grading scale for the remainder of the spring term, schools within the UC system have either relaxed their pass/no pass restrictions or not announced any change in grading policies at all. Schools that have decided to enforce pass/no pass grading systems argue that with the unprecedented and rapid shift to online learning, enforced pass/no pass grading helps to maintain equitability in education. Not every student has reliable internet access off-campus, many may be picking up increased responsibilities at home amid [soaring layoffs](https://time.com/5814350/jobless-layoffs-us-coronavirus/) and students living in different time zones are attempting to attend classes at odd hours of the day and night. These factors, among others, may limit many students’ ability to perform well academically during the COVID-19 pandemic. 

# Lollipop

<!-- Dropdown for Lollipop -->
<div align="center">
  <label for="graphs">Select a Graph:</label>
    <select id="graphs" onchange='javascript: lollipop_graph(this.options[this.selectedIndex].value)' >
    <option value="cancelled_classes">Cancellation of In-Person Classes</option>
    <option value="rescheduled">Rescheduling of Classes</option>
    <option value="first_infection">First School Infection</option>
    <option value="grading_change">Change in Grading Basis</option>
    <option value="housing_change">Change in University Housing Options</option>
   </select>
  <p>&nbsp; </p>
</div>
<div id="lollipop" align='center' >
  <script>
      function initial_selected (s, i)
      {
        // alert("initial calling");
         s.options[i-1].selected = true;
         lollipop_graph(s.options[i-1].value);
         return;
      }
      initial_selected(document.getElementById("graphs"),1);
  </script>  
</div>

The lollipop chart above shows the changes made by each college in relation to the amount of confirmed cases of coronavirus in the county. Use the drop-down menu to select specific schools.

Located in Seattle, one of the first sites of community spread of COVID-19 in the U.S., the University of Washington was the first school included in our analysis to move to remote education with an official announcement released on [March 6] (https://www.washington.edu/coronavirus/2020/03/06/beginning-march-9-classes-and-finals-will-not-be-held-in-person-message-to-faculty-and-staff/). All schools included in our analysis moved to remote learning by March 19. The majority of schools experienced their first confirmed university-affiliated case of COVID-19 by mid-March as the virus continued to spread.

# Bar Chart Race (potentially remove?)

<div id="bar-race">
<div class="flourish-embed" data-src="story/260394" data-url="https://flo.uri.sh/story/260394/embed"><script src="https://public.flourish.studio/resources/embed.js"></script></div>
</div>

The bar chart race above shows the progression of cases in the surrounding county for each school through the past month. The actions taken by a given school appear as annotations on the day they occurred. 

The exponential growth of cases is noticeable as the number of cases grow at a much faster rate starting toward the middle of March. More densely populated counties (such as Los Angeles County) also show a much higher growth in cases, but the first actions for those schools occurred on similar dates as less densely populated counties. This may be because of the fact that though the first case in each school is more dependent on the number of cases in the neighborhood, administrative decisions made by colleges are influenced by the actions of other institutions. Therefore, many of the actions taken by UC schools occurred within a narrow timeframe, despite the disparity in the virus threat severity in each individual county.

Social distancing guidelines have also upended university commencements planned for the end of the school year. Though UCLA’s announcement that all spring graduation ceremonies would take place online was met with a wave of [backlash](https://www.latimes.com/california/story/2020-03-18/ucla-to-cancel-traditional-graduation-ceremonies-and-celebrate-online), it was the second UC school to do so, following [UC Irvine](https://www.latimes.com/socal/daily-pilot/news/story/2020-03-15/uc-irvine-cancels-traditional-public-commencement-graduation-ceremonies). Additionally, UCLA announced on April 1 that summer session A would be offered remotely, extending the campus closure through [Aug. 28](https://dailybruin.com/2020/04/01/ucla-moves-summer-session-a-online-extending-remote-instruction-through-aug-28/). Delayed commencements, remote learning and unexpected moves have affected college students around the nation, not just those at UCLA. As students across the U.S. settle into a new, online learning routine, the uncertainty surrounding the effects of the COVID-19 pandemic on education has yet to dissipate.
