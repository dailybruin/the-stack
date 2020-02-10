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
  <!-- TODO: Figure out a better way -->
  <script src="/js/posts/primaries/amy-klobuchar_traits.js"></script>
  <script src="/js/posts/primaries/bernie-sanders_traits.js"></script>
  <script src="/js/posts/primaries/donald-trump_traits.js"></script>
  <script src="/js/posts/primaries/elizabeth-warren_traits.js"></script>
  <script src="/js/posts/primaries/joe-biden_traits.js"></script>
  <script src="/js/posts/primaries/pete-buttigieg_traits.js"></script>
  <script src="/js/posts/primaries/helper.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>

  <div style="padding-bottom: 100px">
  <canvas id="radar-chart"></canvas>
  <script src="/js/posts/primaries/radar_chart.js"></script>

  <button id="radar-button" onclick="radar_func('Amy Klobuchar', 'amy-klobuchar')">Amy Klobuchar</button>
  <button id="radar-button" onclick="radar_func('Bernie Sanders', 'bernie-sanders')">Bernie Sanders</button>
  <button id="radar-button" onclick="radar_func('Donald Trump', 'donald-trump')">Donald Trump</button>
  <button id="radar-button" onclick="radar_func('Elizabeth Warren', 'elizabeth-warren')">Elizabeth Warren</button>
  <button id="radar-button" onclick="radar_func('Joe Biden', 'joe-biden')">Joe Biden</button>
  <button id="radar-button" onclick="radar_func('Pete Buttigieg', 'pete-buttigieg')">Pete Buttigieg</button>
  <button id="radar-button" onclick="show_all()">All</button>
  </div>

  <div>
    <canvas id="bubble-chart"></canvas>
  </div>
  <script src="/js/posts/primaries/bubble_chart.js"></script>

  <!-- TODO: Remove some traits? or break down into main traits and sub-traits-->
  <!-- TODO: Change scale for media queries -->
  <select onchange="bubble_func(this.value, 40);">
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
