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

  <script src="/js/posts/primaries/keywords.js"></script>

  <!-- SECTION: Keywords Chart -->
  <script>
  function search_terms(keyword) {
    output = "";
    output = output.concat("<strong>", keyword.toString(), "</strong> <br>");
    //TODO: concatanate to search terms to output (and add <br> tag after)
    // Eg: func (_keyword_) = college, tuition, student, etc.
    for (var i in keyword_list[keyword])
      output = output.concat(keyword_list[keyword][i], ", ");
    document.getElementById("search-terms").innerHTML = output;
  }  
  </script>

  <script>
    // function reset() {
    //   document.getElementById('keyword-button').style.color = "#000000";
    //   document.getElementById('keyword-button').style.backgroundColor = "#FFFFFF"; 
    // }

    // function update_btn_color(_this) {
    //   _this.style.color = "#FFFFFF";
    //   _this.style.backgroundColor = "#000000";
    // }
  </script>

  <!-- TODO**: Fix styling to even out spacing -->
  <div id="keyword-wrapper">
    <div id="btn-group">
      <div class="btn-group-1">
      <div>
      <button id="keyword-button" onclick="keyword_func('college'); search_terms('college'); reset(); update_btn_color(this);">College</button> 
      </div>
      <div>
      <button id="keyword-button" onclick="keyword_func('immigration'); search_terms('immigration'); reset(); update_btn_color(this);">Immigration</button> 
      </div>
      <div>
      <button id="keyword-button" onclick="keyword_func('mental-health'); search_terms('mental-health'); reset(); update_btn_color(this);">Mental Health</button> 
      </div>
      <div>
      <button id="keyword-button" onclick="keyword_func('discrimination-and-equality'); search_terms('discrimination-and-equality'); reset(); update_btn_color(this);">Discrimination & Equality</button> 
      </div>
      <div>
      <button id="keyword-button" onclick="keyword_func('discrimination-and-equality'); search_terms('employment'); reset(); update_btn_color(this);">Employment</button> <!-- TODO: Add employment, pass to keyword_func -->
      </div>
      </div>
      <div class="btn-group-2">
      <div>
      <button id="keyword-button" onclick="keyword_func('healthcare'); search_terms('healthcare'); reset(); update_btn_color(this);">Healthcare</button>
      </div>
      <div>
      <button id="keyword-button" onclick="keyword_func('environment'); search_terms('environment'); reset(); update_btn_color(this);">Environment</button>
      </div>
      <div>
      <button id="keyword-button" onclick="keyword_func('women-health'); search_terms('women-health'); reset(); update_btn_color(this);">Women's Health</button>
      </div>
      <div>
      <button id="keyword-button" onclick="keyword_func('marijuana'); search_terms('marijuana'); reset(); update_btn_color(this);">Marijuana</button>
      </div>
      <div>
      <button id="keyword-button" onclick="keyword_func('gun-issues'); search_terms('gun-rights'); reset(); update_btn_color(this);">Gun Rights</button>
      </div>
      </div>
    </div>
    <div>
      <canvas id="keyword-chart"></canvas>
    </div>
    <div class="info-box" id="term-info-box">
      <!-- Default college - changes on click -->
      <div class="inner-div">
      <p id="search-terms">
      <strong>College</strong> <br>
          terms <br>
          terms <br>
          terms <br>
      </p>
      </div>
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
  <div class="info-box" id="trait-info-box"> <!-- TODO**: Fix styling so no overflow from chart -->
    <div class="inner-div">
    <p id="trait_meaning">
    <strong>Openness</strong>
    : Openness, or Open to Experience, is the extent to which a person is open to experiencing a variety of activities. 
    </p>
    </div>
  </div>
</div>

<!-- Modify bubble_chart (y constant), to bubble_chart_2 (r constant) to view-->
  <script src="/js/posts/primaries/bubble_chart.js"></script>
  <script src="/js/posts/primaries/trait_details.js"></script>

  <script>
  function trait_meaning_func(trait) {
    output = "";
    output = output.concat("<strong>", trait.toString(), "</strong>", ": ", trait_meanings[trait]);
    document.getElementById("trait_meaning").innerHTML = output;
  }
  </script>

  <script>
    let x = window.matchMedia("(max-width: 480px)");
  </script>

  <!-- TODO**: Remove some traits? or break down into main traits and sub-traits-->
  <!-- TODO**: Change scale for media queries -->
  <div id="dropdown">
  <select onchange="bubble_func(this.value, x); trait_meaning_func(this.value);">
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

   <script>
    function make_responsive(x) {
      if (x.matches) {
        Chart.defaults.global.responsive = false;
        Chart.defaults.global.maintainAspectRatio = false;

        keywordChart.data.labels = ["Klobuchar", "Sanders", "Trump", "Warren", "Biden", "Buttigieg"];
        keywordChart.canvas.parentNode.style.width = "340px";

        bubble_chart.options.scales.xAxes = [{ 
          type: 'category',
          labels: ['A.K.', 'B.S.', 'D.T.', 'E.W.', 'J.B.', 'P.B.'],
            scaleLabel: {
            display: false,
            labelString: "Candidates"
            },
          display: true,
        }];

        let radius = 10;
        bubble_chart.canvas.parentNode.style.width = "340px";
        bubble_chart.data.datasets = [
          {
            label: [""],
            data: [{
              x: 0,
              y: 0,
              r: 0
            }]
          },
          {
            label: "Amy Klobuchar",
            backgroundColor: color_code('amy-klobuchar', 0.8),
            data: [{
              x: 'A.K.',
              y: (amy_klobuchar_traits['Openness'] * default_scale).toFixed(2),			  
                    //r: (amy_klobuchar_traits['Openness'] * default_scale).toFixed(2),
                    r: radius,
            }]
            }, {
            label: "Bernie Sanders",
            backgroundColor: color_code('bernie-sanders', 0.8),
            data: [{
              x: 'B.S.',
              y: (bernie_sanders_traits['Openness'] * default_scale).toFixed(2),			  	  
                    //r: (bernie_sanders_traits['Openness'] * default_scale).toFixed(2),
                    r: radius,
            }]
            },
            {
            label: "Donald Trump",
            backgroundColor: color_code('donald-trump', 0.8),
            data: [{
              x: 'D.T.',
              y: (donald_trump_traits['Openness'] * default_scale).toFixed(2),
                    //r: (donald_trump_traits['Openness'] * default_scale).toFixed(2),
                    r: radius,
            }]
            },
            {
            label: "Elizabeth Warren",
            backgroundColor: color_code('elizabeth-warren', 0.8),
            data: [{
              x: 'E.W.',
              y: (elizabeth_warren_traits['Openness'] * default_scale).toFixed(2),			  
                    //r: (elizabeth_warren_traits['Openness'] * default_scale).toFixed(2),
                    r: radius,
            }]
            }, 
          {
            label: "Joe Biden",
            backgroundColor: color_code('joe-biden', 0.8),
            data: [{
            x: 'J.B.',
            y: (joe_biden_traits['Openness'] * default_scale).toFixed(2),			  
                  //r: (joe_biden_traits['Openness'] * default_scale).toFixed(2),
                  r: radius,
            }]
          },  
          {
            label: "Pete Buttigieg",
            backgroundColor: color_code('pete-buttigieg', 0.8),
            data: [{
            x: 'P.B.',
            y: (pete_buttigieg_traits['Openness'] * default_scale).toFixed(2),		  
                  //r: (pete_buttigieg_traits['Openness'] * default_scale).toFixed(2),
                  r: radius,
            }]
          },  {
            label: [""],
            data: [{
              x: 7,
              y: 6,
              r: 0
            }]
          },];

        bubble_chart.update();
      }
    }

    make_responsive(x);
    x.addListener(make_responsive);  
  </script>
<!-- END OF SECTION -->

### Meaning of Scores (quoted from IBM)
 
  Any score above the mean of 0.5 indicates a greater than average tendency for a characteristic. A score at or above 0.75 indicates readily discernible aspects of the characteristic; such scores are considered high.
  The opposite statements are true of scores below 0.50 and 0.25, which are considered low.
