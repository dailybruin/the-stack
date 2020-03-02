---
title: Understanding the 2020 Democratic Primary Candidates Through Their Tweets
teaser: The Democratic presidential primary field is crowded with several candidates whose ideological differences may feel slightly nuanced. Interact with the charts below to determine which candidate you align with most based on the topics they tweet about the most and their personality traits.
authors:
    - radhika_ahuja
    - sydney_kovach
    - mattie_sanseverino
    - kelly_chen
key_takeaways:
    - According to our analysis of their tweets, Donald Trump and Amy Klobuchar are considered the most extroverted candidates in the field.
    - Elizabeth Warren and Bernie Sanders mentioned “college” and “healthcare” in their tweets significantly more than other candidates.
    - Elizabeth Warren and Donald Trump are perceived to have the lowest emotional range through their tweets.
featured_image:
    url: cover-photo.png
og_image: cover-photo.png
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
In order to uncover the emphasis that candidates put on important topics via Twitter, our team collected all the tweets available on each of the candidates who qualified for debates as of Feb. 13. Tweets were collected from the day they created their account up until Feb. 13. We then compiled a range of issues concerning college students, all of which are represented as buttons to the left of the chart. To find out how often candidates mention these topics, click on the buttons and observe the chart below.

It is important to note that we did not check if the candidates spoke negatively or positively about these topics, only how many times they brought them up. Additionally, all tweets were converted to lowercase before searching the keywords. 
<br>
  <!-- SECTION: Keywords Chart -->
  <div id="keyword-wrapper">
    <div id="btn-group">
      <div class="btn-group-1">
        <input type="button" name="college" value="College" class="active keyword-button">
        <input type="button" class="keyword-button" name="immigration" value="Immigration">
        <input type="button" class="keyword-button" name="mental-health" value="Mental Health">
        <input type="button" class="keyword-button" name="discrimination-and-equality" value="Discrimination and Equality">
        <input type="button" class="keyword-button" name="employment" value="Employment"> 
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
As seen in the graph, Bernie Sanders is significantly more outspoken on the topic of healthcare than the other candidates, and Elizabeth Warren is most outspoken on the topic of women’s health. Similarly, Warren and Sanders choose to speak about college more often than their counterparts. 

Warren holds a strong lead in how often she mentions women’s health, as well as discrimination and equality. Klobuchar is the candidate who speaks about these issues the second most. These topics are especially pertinent to women, so it is not surprising that all of the males in the field trail Warren and Klobuchar.

All candidates do not speak about mental health nearly as much as other topics. Trump has yet to tweet about mental health. Klobuchar is the most outspoken about it, tweeting on the subject nineteen times.

While ideology and issues may be some voters' main concern, others prioritize electability, which cannot be measured before the election. The electorate has differing views on what determines "electability." Delve into each of the candidates' personalities in the graph below.
<br>
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
  <option value='Agreeableness'>Agreeableness</option>
  <option value='Emotional range'>Emotional Range</option>
  <option value='Emotionality'>Emotionality</option>
  <option value='Intellect'>Intellect</option>
  <option value='Authority-challenging'>Authority-Challenging</option>
  <option value='Achievement striving'>Achievement-Striving</option>
  <option value='Cautiousness'>Cautiousness</option>
  <option value='Self-discipline'>Self-Discipline</option>
  <option value='Assertiveness'>Assertiveness</option>
  <option value='Cheerfulness'>Cheerfulness</option>
  <option value='Outgoing'>Outgoing</option>
  <option value='Cooperation'>Cooperation</option>
  <option value='Modesty'>Modesty</option>
  <option value='Uncompromising'>Uncompromising</option>
  <option value='Sympathy'>Sympathy</option>
  <option value='Trust'>Trust</option>
  <option value='Fiery'>Fiery</option>
  <option value='Prone to worry'>Prone to worry</option>
  <option value='Self-consciousness'>Self-consciousness</option>
  <option value='Susceptible to stress'>Susceptible to stress</option>
  </select>
  </div>
<!-- END OF SECTION -->

### Meaning of Scores (quoted from IBM)
 
  Any score above the mean of 0.5 indicates a greater than average tendency for a characteristic. A score at or above 0.75 indicates readily discernible aspects of the characteristic; such scores are considered high. The opposite statements are true of scores below 0.50 and 0.25, which are considered low. The opposite statements are true of scores below 0.50 and 0.25, which are considered low.
  
  All of the above characteristics and sub-traits are determined using [IBM Watson's Personality Insights program](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-about#about), which analyzed all tweets by candidates since they created their Twitter accounts. Because Biden, Buttigeg, Klobuchar and Warren were the only candidates who qualified for the debate on Feb. 19 as of early February, these are the only democratic candidates that we assessed. In addition, Donald Trump will likely be the Republican nominee, so we included him in our insights. 
  
  Amy Klobuchar's overarching personality analysis stands out, as she has significantly higher "agreeableness" and "extraversion" levels than her democratic counterparts. Donald Trump's "extroversion" is considered to be comparable to Klobuchar's, being the highest in the field. Klobuchar, who is known as one of the most moderate candidates, not surprisingly has the highest “agreeableness” score of all candidates.
  
  Another notable observation is that Donald Trump has the lowest cheerfulness score, with Elizabeth Warren not far behind. Additionally, all candidates remain around the same range for categories such as sympathy and intellect.
