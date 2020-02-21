---
title: US Primaries
teaser: US Primaries!!
authors:
    - radhika_ahuja
    - sydney_kovach
    - mattie_sanseverino
    - kelly_chen
key_takeaways:
    - US is a mess right now
featured_image:
    url: walking-to-class/featured_image.png
og_image: walking-to-class/featured_image.png
stylesheets:
    - https://fonts.googleapis.com/css?family=Lato&display=swap
    - https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.css
    - '/css/posts/primaries/app.css'
    - https://fonts.googleapis.com/css?family=Roboto&display=swap
scripts:
    - https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js

---

  <!-- Include statements here to ensure order -->
  <!-- TODO**: Figure out a better way -->
  <script src="/js/posts/primaries/amy-klobuchar_traits.js"></script>
  <script src="/js/posts/primaries/bernie-sanders_traits.js"></script>
  <script src="/js/posts/primaries/donald-trump_traits.js"></script>
  <script src="/js/posts/primaries/elizabeth-warren_traits.js"></script>
  <script src="/js/posts/primaries/joe-biden_traits.js"></script>
  <script src="/js/posts/primaries/michael-bloomberg_traits.js"></script>
  <script src="/js/posts/primaries/pete-buttigieg_traits.js"></script>
  <script src="/js/posts/primaries/helper.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>

  <!-- NOTES on Keywords Charts -->
  <!-- The buttons represent a group of keywords (Eg: college represents student, tuition, debt, etc. -->
  <!-- For each candidate, on hover, we can see how many times they mentioned the certain keyword in their tweets -->
  <!-- Useful analysis could be mentioning topics that have been spoken the most and least about in total (add up numbers), or if a certain candidate is significantly more outspoken about a certain topic -->

  <!-- SECTION: Keywords Chart -->
  <script>
  function search_terms(keyword) {
    output = "";
    output = output.concat("<strong>", keyword.toString(), "</strong> <br>");
    //TODO: concatanate to search terms to output (and add <br> tag after)
    // Eg: func (_keyword_) = college, tuition, student, etc.
    output = output.concat("{search_terms}");
    document.getElementById("search-terms").innerHTML = output;
  }  
  </script>

  <!-- TODO**: Fix styling to even out spacing -->
  <div id="keyword-wrapper">
    <div>
      <button id="keyword-button" onclick="keyword_func('college'); search_terms('college');">College</button> <br>
      <button id="keyword-button" onclick="keyword_func('immigration'); search_terms('immigration');">Immigration</button> <br>
      <button id="keyword-button" onclick="keyword_func('mental-health'); search_terms('mental-health');">Mental Health</button> <br>
      <button id="keyword-button" onclick="keyword_func('discrimination-and-equality'); search_terms('discrimination-and-equality');">Discrimination & Equality</button> <br>
      <button id="keyword-button" onclick="keyword_func('healthcare'); search_terms('healthcare');">Healthcare</button> <br>
      <button id="keyword-button" onclick="keyword_func('environment'); search_terms('environment');">Environment</button> <br>
      <button id="keyword-button" onclick="keyword_func('women'); search_terms('women');">Women</button> <br>
      <button id="keyword-button" onclick="keyword_func('weed'); search_terms('weed');">Weed</button> <br>
      <button id="keyword-button" onclick="keyword_func('gun-rights'); search_terms('gun-rights');">Gun Rights</button>
    </div>
    <div>
      <canvas id="keyword-chart"></canvas>
    </div>
    <div class="info-box">
      <!-- Default college - changes on click -->
      <p id="search-terms">
      <strong>College</strong> <br>
          terms <br>
          terms <br>
          terms <br>
      </p>
    </div>
  </div>

  <script src="/js/posts/primaries/keyword_chart.js"></script>

<!-- END OF SECTION -->

<!-- NOTES on Personality Chart -->
<!-- For each personality trait, each candidate's bubble size (i.e., the radius), shows a percentage for how much they possess a trait -->
<!-- "Any score above the mean of 0.5 indicates a greater than average tendency for a characteristic. A score at or above 0.75 indicates readily discernible aspects of the characteristic; such scores are considered high. The opposite statements are true of scores below 0.50 and 0.25, which are considered low.", but I adjusted the numbers (* 100), to make them a percentage. So we can modify the statement here too -->

<!-- SECTION: Personality Chart-->
<div id="bubble-wrapper">
  <div>
    <canvas id="bubble-chart"></canvas>
  </div>
    <!-- Default Openness, changes on-click -->
  <div class="info-box"> <!-- TODO**: Fix styling so no overflow from chart -->
    <p id="trait_meaning">
    <strong>Openness</strong>
    : Openness, or Open to Experience, is the extent to which a person is open to experiencing a variety of activities. 
    </p>
  </div>
</div>

<!-- Modify bubble_chart (y constant), to bubble_chart_2 (r constant) to view-->
  <script src="/js/posts/primaries/bubble_chart.js"></script>
  <script src="/js/posts/primaries/trait_details.js"></script>

  <div>
  <script>
  function trait_meaning_func(trait) {
    output = "";
    output = output.concat("<strong>", trait.toString(), "</strong>", ": ", trait_meanings[trait]);
    document.getElementById("trait_meaning").innerHTML = output;
  }
  </script>

  <!-- TODO**: Remove some traits? or break down into main traits and sub-traits-->
  <!-- TODO**: Change scale for media queries -->
  <select onchange="bubble_func(this.value, 40); trait_meaning_func(this.value);">
  <option value='Openness'>Openness</option>
  <option value='Conscientiousness'>Conscientiousness</option>
  <option value='Agreeableness'>Agreeableness</option>
  <option value='Extraversion'>Introversion/Extraversion</option>
  <option value='Emotional range'>Emotional Range</option>
  <option value='Adventurousness'>Adventurousness</option>
  <option value='Artistic interests'>Artistic Interests</option>
  <option value='Emotionality'>Emotionality</option>
  <option value='Imagination'>Imagination</option>
  <option value='Intellect'>Intellect</option>
  <option value='Authority-challenging'>Authority-Challenging</option>
  <option value='Achievement striving'>Achievement-Striving</option>
  <option value='Cautiousness'>Cautiousness</option>
  <option value='Dutifulness'>Dutifulness</option>
  <option value='Orderliness'>Orderliness</option>
  <option value='Self-discipline'>Self-Discipline</option>
  <option value='Self-efficacy'>Self Efficacy</option>
  <option value='Activity level'>Activity Level</option>
  <option value='Assertiveness'>Assertiveness</option>
  <option value='Cheerfulness'>Cheerfulness</option>
  <option value='Excitement-seeking'>Excitement-seeking</option>
  <option value='Outgoing'>Outgoing</option>
  <option value='Gregariousness'>Gregariousness</option>
  <option value='Altruism'>Altruism</option>
  <option value='Cooperation'>Cooperation</option>
  <option value='Modesty'>Modesty</option>
  <option value='Uncompromising'>Uncompromising</option>
  <option value='Sympathy'>Sympathy</option>
  <option value='Trust'>Trust</option>
  <option value='Fiery'>Fiery</option>
  <option value='Prone to worry'>Prone to worry</option>
  <option value='Melancholy'>Melancholy</option>
  <option value='Immoderation'>Immoderation</option>
  <option value='Self-consciousness'>Self-consciousness</option>
  <option value='Susceptible to stress'>Susceptible to stress</option>
  </select>
  </div>
<!-- END OF SECTION -->


### Meaning of Scores (quoted from IBM)
 
  Any score above the mean of 0.5 indicates a greater than average tendency for a characteristic. A score at or above 0.75 indicates readily discernible aspects of the characteristic; such scores are considered high.
  The opposite statements are true of scores below 0.50 and 0.25, which are considered low.
