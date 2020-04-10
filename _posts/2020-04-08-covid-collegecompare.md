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
scripts:
  - /js/posts/covid-collegecompare/bar-race.js
  - https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
  # Below scripts are for the timeline
  - https://www.amcharts.com/lib/4/core.js
  - https://www.amcharts.com/lib/4/charts.js
  - https://www.amcharts.com/lib/4/plugins/timeline.js
  - https://www.amcharts.com/lib/4/plugins/bullets.js
  - https://www.amcharts.com/lib/4/themes/animated.js
  - /js/posts/covid-collegecompare/timeline.js
---

# Timeline

<!-- Dropdown for Timeline -->
<select class="dropdown" onchange="display_bar_race(this.value);">
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
    <!-- Default: Rescheduling of Classes-->
    <div class="flourish-embed flourish-bar-chart-race" data-src="visualisation/1862264" data-url="https://flo.uri.sh/visualisation/1862264/embed" data-width="80%"><script src="https://public.flourish.studio/resources/embed.js"></script></div>
</div>

<!-- TODO: Potentially better names for dropdown options -->
<select class="dropdown" onchange="display_bar_race(this.value);">
    <option value="rescheduled">Rescheduling of Classes</option>
    <option value="cancelled_classes">Cancellation of In-Person Classes</option>
    <option value="first_infection">First School Infection</option>
    <option value="grading_change">Change in Grading Basis</option>
    <option value="housing_change">Change in University Housing Options</option>
</select>
<!-- TODO: Need updated county level data for non-UC schools-->
<!-- TODO: Create a mobile version with truncated names? -->
