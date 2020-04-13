---
title: School’s Out, Zoom’s In.
teaser: See how US colleges have responded to COVID-19
authors:
  - keri_chen
  - kelly_chen
  - bernard_mendez
  - madeline_blasingame
  - radhika_ahuja
  - andrew_kan
key_takeaways:
  - All schools included have moved to remote learning for the remainder of the academic year.
  - While many schools across the country have moved to enforce mandatory P/NP or equivalent grading systems for the remainder of the school year, the majority of the UCs have not followed suit.
  - Schools tended to shift gears to remote learning within a week of the first university-affiliated infection; however, even schools without a university-affiliated infection moved online by mid-March.
featured_image:
  url:
og_image:
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
  - http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
  - https://cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.jquery.min.js
  - /js/posts/covid-collegecompare/timeline.js
---

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

# Lollipop

<!-- Dropdown for Lollipop -->
<select class="dropdown" onchange="display_bar_race(this.value);">
    <option value="rescheduled">Rescheduling of Classes</option>
    <option value="cancelled_classes">Cancellation of In-Person Classes</option>
    <option value="first_infection">First School Infection</option>
    <option value="grading_change">Change in Grading Basis</option>
    <option value="housing_change">Change in University Housing Options</option>
</select>

# Bar Chart Race (potentially remove?)

<div id="bar-race">
<div class="flourish-embed" data-src="story/260394" data-url="https://flo.uri.sh/story/260394/embed"><script src="https://public.flourish.studio/resources/embed.js"></script></div>
</div>

<!-- TODO: Need updated county level data for non-UC schools-->
<!-- TODO: Create a mobile version with truncated names? -->
