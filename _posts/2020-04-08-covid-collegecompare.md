---
title: College Compare
teaser:
authors:
key_takeaways:
featured_image:
    url:
og_image:
stylesheets:
scripts:
    - /js/posts/covid-collegecompare/bar-race.js
    - https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
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