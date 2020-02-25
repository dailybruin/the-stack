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
    - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js
    - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
    - /js/posts/primaries/traits/amy-klobuchar_traits.js
    - /js/posts/primaries/traits/bernie-sanders_traits.js
    - /js/posts/primaries/traits/donald-trump_traits.js
    - /js/posts/primaries/traits/elizabeth-warren_traits.js
    - /js/posts/primaries/traits/joe-biden_traits.js
    - /js/posts/primaries/traits/pete-buttigieg_traits.js
    - /js/posts/primaries/keywords.js
    - /js/posts/primaries/color_codes.js
    - /js/posts/primaries/trait_details.js
    - /js/posts/primaries/helper.js
    - /js/posts/primaries/keyword_chart.js
    - /js/posts/primaries/bubble_chart.js
    - https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
    - /js/posts/primaries/startup.js
---

  <!-- SECTION: Keywords Chart -->
  <div id="keyword-wrapper">
    <div id="btn-group">
      <div class="btn-group-1">
        <input type="button" name="college" value="College" class="active keyword-button">
        <input type="button" class="keyword-button" name="immigration" value="Immigration">
        <input type="button" class="keyword-button" name="mental-health" value="Mental Health">
        <input type="button" class="keyword-button" name="discrimination-and-equality" value="Discrimination and Equality">
        <input type="button" class="keyword-button" name="college" value="Employment"> <!-- TODO: change name to employment-->
      </div>
      <div class="btn-group-2">
        <input type="button" name="healthcare" value="Healthcare" class="keyword-button">
        <input type="button" name="environment" value="Environment" class="keyword-button">
        <input type="button" name="women-health" value="Women's Health" class="keyword-button">
        <input type="button" name="marijuana" value="Marijuana" class="keyword-button">
        <input type="button" name="gun-rights" value="Gun Rights" class="keyword-button">
      </div>
    </div>
    <div>
      <canvas id="keyword-chart"></canvas>
    </div>
    <div class="info-box" id="term-info-box">
      <div class="inner-div">
        <p id="search-terms"></p>
      </div>
    </div>
  </div>
<!-- END OF SECTION -->

<!-- SECTION: Personality Chart-->
<div id="bubble-wrapper">
  <div>
    <canvas id="bubble-chart"></canvas>
  </div>
  <div class="info-box" id="trait-info-box"> 
    <div class="inner-div">
    <p id="trait_meaning"></p>
    </div>
  </div>
  </div>
  <div id="dropdown">
  <select onchange="update_bubble_chart(this.value, x); display_trait_meaning(this.value);">
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
