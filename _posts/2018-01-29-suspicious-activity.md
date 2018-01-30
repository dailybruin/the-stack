---
title: Suspicious Activity
teaser: Comparing who university police stop for suspicious activity with who they arrest, and looking at how the demographics of those stopped and arrested compare with Westwood's demographics.
featured_image:
    url: suspicious-activity/map.png
og_image: suspicious-activity/map.png
authors:
  - madeleine_pauker
  - rupan_bharanidaran
  - benson_han
  - chang_liu
stylesheets:
  # - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.css
  - //unpkg.com/leaflet@1.0.3/dist/leaflet.css
  - //api.mapbox.com/mapbox.js/v3.0.1/mapbox.css
  - /css/posts/suspicious-activity/app.css
  - /css/posts/presidential-campaign-donations/tooltip.css
scripts:
  - //d3js.org/d3.v4.min.js
  - //d3js.org/d3-transition.v1.min.js
  - //api.mapbox.com/mapbox.js/v3.0.1/mapbox.js
  - //maps.googleapis.com/maps/api/js?key=AIzaSyBddbV3QvkJbOe-s1dbPXrxWV1Sy4z8nR0"
  - //api.mapbox.com/mapbox.js/plugins/turf/v2.0.2/turf.min.js
  - //ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js
  - /js/posts/suspicious-activity/Leaflet.MakiMarkers.js
  - /js/posts/suspicious-activity/app.js
---

The University of California Police Department patrols the UCLA campus and the
areas of Los Angeles surrounding it. UCPD emails a daily log of reported crimes,
arrests and field contacts between officers and civilians to subscribers of the
UCPD Daily Log, dailypolicelog@lists.ucla.edu. The Daily Bruin analyzed these
daily logs from July 1, 2015, to June 31, 2016 and looked at the demographics of
two categories: arrests and field contacts classified as “suspicious activity”.

UCPD Lt. Kevin Kilgore explained that if a community member sees someone doing
something they believe is suspicious, such as loitering around a bicycle rack,
they may report the person to UCPD. Officers will then search for the person and
try to determine whether they are engaging in criminal activity. If not taken
into custody, they will record the interaction as a “suspicious activity” field
contact. If officers have reasonable suspicion the person is in the process of
committing a crime, they will arrest them. Officers also stop civilians if they
themselves suspect someone is engaging in criminal activity.

We aimed to determine how gender, race and age compare for suspicious activity
field contacts and arrests. Blacks and Latinos have historically been
subject to racial profiling by police while driving and walking. A 2016 Stanford
[study](https://news.stanford.edu/2016/06/28/stanford-researchers-develop-new-statistical-test-shows-racial-profiling-police-traffic-stops/)
found that North Carolina police stopped black and Latino motorists at higher
rates than white or Asian motorists, but searches of their vehicles were less
likely to reveal illegal drugs or weapons. In 2013,
[a judge ruled](http://www.nytimes.com/2013/08/13/opinion/racial-discrimination-in-stop-and-frisk.html)
that the New York Police Department’s stop-and-frisk program, in which officers
temporarily detained and questioned civilians for weapons and other contraband,
violated the constitutional rights of minority New Yorkers.

UCPD officers receive regular cultural diversity training meant to counter
implicit bias through a class certified by the California Commission on Peace
Officer Standards and Training, Kilgore said. In the class, which is called
“Police Legitimacy and Implicit Bias,” officers address what their biases are,
how they form them and how to counter them, he said. Officers are trained to
view each encounter with a civilian as an individual event. For example, Kilgore
said, if an officer is dispatched and told to look for a secretary or a nurse,
they should not assume the individual’s gender.

We wanted to see if certain groups might be stopped for suspicious activity at
higher rates than others. Whites and Asians make up about 63 percent and 23
percent of Westwood residents, respectively, and Latinos and blacks
comprise 7 percent and 2 percent of the population, according to the
[LA Times](http://maps.latimes.com/neighborhoods/neighborhood/westwood/#ethnicity).
Countywide, whites and Asians account for 26.5 percent and 15 percent of the
population, while Latinos and blacks make up 48.5 percent and 9
percent of Los Angeles County.

However, blacks made up nearly 29 percent of UCPD suspicious activity
stops from July 2015 to June 2016, while Latinos made up 10.5 percent. Whites
accounted for 46.5 percent of stops, and demographics classified as Asian made
up 6 percent of stops. Blacks and Latinos are clearly overrepresented
in who community members or officers deem suspicious, while whites and Asians
are underrepresented.

The data also shows that UCPD officers made more arrests of blacks
and Latinos than they filed suspicious activity reports for the same
demographics. Thirty-one percent and 23 percent of total arrests in the
year-long time period were of blacks and Latinos, respectively.
Whites were arrested at a lower rate than they were stopped for suspicious
activity, making up 34 percent of arrests, while Asians were arrested about as
frequently as they were stopped for suspicious activity, at 6 percent.

Below is a map of arrests and suspicious activity field contacts from July 2015
to June 2016 and graphs comparing gender, race and age across both categories.
The demographic categories come from UCPD classifications.

<select id="gender_select" class="map_select">
  <option value="all">All</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
<select id="race_select" class="map_select">
  <option value="all">All</option>
  <option value="I">American Indian</option>
  <!-- <option value="Z">Asian Indian</option> -->
  <option value="B">Black</option>
  <!-- <option value="D">Cambodian</option> -->
  <option value="C">Chinese</option>
  <!-- <option value="F">Filipino</option> -->
  <!-- <option value="G">Guamanian</option> -->
  <!-- <option value="U">Hawaiian</option> -->
  <option value="H">Hispanic / Latin / Mexican</option>
  <!-- <option value="J">Japanese</option> -->
  <!-- <option value="K">Korean</option> -->
  <!-- <option value="L">Laotian</option> -->
  <option value="O">Other</option>
  <option value="A">Other Asian</option>
  <option value="P">Pacific Islander</option>
  <!-- <option value="S">Samoan</option> -->
  <!-- <option value="X">Unknown</option> -->
  <option value="V">Vietnamese</option>
  <option value="W">White</option>
</select>
<select id="age_select" class="map_select">
  <option value="4">All</option>
  <option value="0">Under 20</option>
  <option value="1">21-40</option>
  <option value="2">41-65</option>
  <option value="3">65+</option>
</select>
<input class="map_select" type="checkbox" name="type" value="arrest" checked> Arrests
<input class="map_select" type="checkbox" name="type" value="suspicious" checked> Suspicious Activity

<div id="map" style="height: 400px;"></div>
<h1 class="graph-title">Suspicious Activity</h1>
<select id="suspicious-bar-select">
  <option value="gender">Gender</option>
  <option value="race">Race</option>
  <option value="age">Age</option>
</select>
<svg width="640" height="300" id="suspicious-bar-chart"></svg>
<h1 class="graph-title">Arrests</h1>
<select id="arrest-bar-select">
  <option value="gender">Gender</option>
  <option value="race">Race</option>
  <option value="age">Age</option>
</select>
<svg width="640" height="300" id="arrest-bar-chart"></svg>
