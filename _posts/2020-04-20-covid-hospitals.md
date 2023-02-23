---
title: Visualizing Los Angeles hospitals, and simulating COVID-19 on an unprotected UCLA

teaser: Explore the number of COVID-19 cases and hospital capacities in each neighborhood within Los Angeles County. What would have happened if UCLA students were on campus and became infected? We investigate the consequences.

authors:
  - radhika_ahuja
  - andrew_kan
  - sydney_kovach
  - laurel_woods

key_takeaways:
  - If 39% of UCLA students became infected over a six-month period, they alone would take up every general acute bed at Ronald Reagan UCLA Medical Center.
  - There are eight hospitals with a total of 1,894 general acute beds and 338 ICU beds within a five-mile radius of UCLA.

featured_image:
  url: covid-hospitals/cover_photo.png
og_image: covid-hospitals/cover_photo.png

stylesheets:
  - //unpkg.com/leaflet@1.6.0/dist/leaflet.css
  - /css/posts/covid-hospitals/app.css
  - https://fonts.googleapis.com/css2?family=Open+Sans&display=swap
  - https://cdnjs.cloudflare.com/ajax/libs/rangeslider.js/2.3.3/rangeslider.min.css
scripts:
  # files for map
  - /js/lib/jquery-3.1.1.min.js
  - //unpkg.com/leaflet@1.6.0/dist/leaflet.js
  - //d3js.org/d3.v3.min.js
  - //cdnjs.cloudflare.com/ajax/libs/leaflet-ajax/2.1.0/leaflet.ajax.js
  - /js/posts/covid-hospitals/map-helpers.js
  - /js/posts/covid-hospitals/map.js

  # files for chart
  - https://cdn.jsdelivr.net/npm/chart.js@2.8.0
  - https://cdnjs.cloudflare.com/ajax/libs/rangeslider.js/2.3.3/rangeslider.min.js
  - /js/posts/covid-hospitals/line-chart.js
---

Hospitals across the country are scrambling to secure enough resources to deal with the coronavirus pandemic. The number of beds, ICU beds in particular, a hospital has is one limiting factor on how many COVID-19 patients can be treated. As of April 17, LA County had only 304 ICU beds available and 514 ICU beds already occupied by COVID-19 patients. According to LA County Department of Health Services director Christina Ghaly, all hospitals in LA County, including Ronald Reagan UCLA Medical Center, are working to increase their capacity by 40% to meet Gov. Gavin Newsom’s directives. To meet this goal, hospitals in LA County have freed many existing beds by increasing the discharge of select inpatients and canceling elective surgeries. Although the number of beds in each hospital is increasing, LA County DHS officials emphasize the importance of social distancing to keep the overall number of COVID-19 cases to a minimum and to prevent the health care system from becoming even more strained. Already, over 175 UCLA health workers have tested positive for the virus.

UCLA students often live in close quarters, whether it be in dorms, apartments or Greek housing. Because the virus spreads through human interaction, the risk of it infecting many students and overconsuming UCLA health resources is immense. In an attempt to prevent a possible rampant spread, UCLA has decided to move instruction online, causing about 80% of dorm residents to move home.

The map of LA County below displays the number of general acute care and ICU beds that exist in Los Angeles County hospitals, as well as the current number of COVID-19 cases in each neighborhood. Hover over each region for the number of cases and case rate per 100,000 people, and hover over each hospital icon to see the number of beds. The controls in the bottom left will toggle the map shading between total number of cases and cases per capita.

<div id="map-container">
  <div id="map"></div>
  <p id="updatedate"></p>
</div>

<br/>

The number of COVID-19 cases is updated daily with the official counts from the LA County Department of Public Health. The hospital bed counts reflect the number of beds licensed with the California Department of Public Health and do not reflect any additional surge capacity that hospitals may add.

<script type="text/pyscript" src="python/corona-hospitals/map-scraping.py"></script>

Drag the slider to see how many beds UCLA students would have taken up at Ronald Reagan UCLA Medical Center over a six-, 12- and 18-month period.

<div>
  <div class="chart-wrapper">
    <div id="canvas-wrapper">
      <canvas id="line-chart"></canvas>
    </div>
    <div id="toggle-wrapper">
      <div class="toggle-option">Hospital</div>
      <div>
      <label class="switch">
        <input type="checkbox" onclick="update_line_chart(null, this.checked); update_legend(this.checked);">
        <span class='toggle'></span>
      </label>
      </div>
      <div class="toggle-option">ICU</div>
    </div>
  </div>

  <div id="slider-wrapper">
    <div>
      <input type="range" min="1" max="100" value="50" class="slider" oninput="display_slider_value(this.value, null); update_line_chart(this.value);">
    </div>
    <div id="slider-num">
      <span><span id="percentage-num">50%</span> of UCLA Infected</span>
    </div>
  </div>

  <div id="custom-legend">
    <div class="legend-marker" id="m-total"></div><span class="legend-label" id="total"></span> <br>
    <div class="legend-marker" id="m-ugrad"></div><span class="legend-label" id="ugrad"></span> <br>
    <div class="legend-marker" id="m-grad"></div><span class="legend-label" id="grad"></span> <br>
    <div class="legend-marker" id="m-tot"></div><span class="legend-label" id="tot"></span> <br>
  </div>
</div>

Using a model created by the Harvard Global Health Institute, ProPublica published a <a href="https://projects.propublica.org/graphics/covid-hospitals">piece</a> on the number of hospital beds coronavirus patients would take up depending on the percentage of population infected and duration of outbreak. We used that model to simulate what would have happened if all UCLA students had stayed in their dorms and apartments. We found that if 39% of UCLA students became infected over a six-month period, they would take up every general acute bed and 35 ICU beds at Ronald Reagan UCLA Medical Center. In the worst-case scenario, if every UCLA student was infected in six months, they would need 606 general acute and 106 ICU beds. Even in a near best-case scenario, if only 20% of students were infected over an 18-month period, they would still occupy 17% of Ronald Reagan’s general acute beds.

# Conclusion

If every student remained on campus and a majority of them became infected by the coronavirus, they would quickly overwhelm Ronald Reagan UCLA Medical Center and other nearby hospitals, not accounting for UCLA staff, faculty, Westwood residents and non-COVID-19 patients. It is crucial to practice social distancing, wash hands and wear a cloth mask to prevent the virus from straining LA County health resources even further, according to the Centers for Disease Control and Prevention.

For more updates on coronavirus news relevant to UCLA, visit the <a href="https://features.dailybruin.com/2020/covid-19/">Daily Bruin’s coronavirus thread</a>. For more information about how students have been affected by the pandemic, visit the Daily Bruin’s <a href="https://covidstories.dailybruin.com/">“Unfinished Stories”</a> project. More information about the coronavirus and COVID-19 from UCLA Health can be found <a href="https://www.uclahealth.org/coronavirus">here</a>.
