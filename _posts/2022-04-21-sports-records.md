---
title: UCLA in the Record Books
teaser: 
authors:
  - tyler wu
  - nancy zhang
  - mansa krishna

key_takeaways:
  - sports sports sports

featured_image:
  url: prof-reviews/web.stack.prof.reviews.KM.jpg
  caption: (Photo by Kanishka Mehra/Daily Bruin senior staff. Photo illustration by Anika Chakrabarti/Assistant Photo editor)
og_image: prof-reviews/web.stack.prof.reviews.KM.jpg

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  - //ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
  - //d3js.org/d3.v6.min.js
  - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - //cdnjs.cloudflare.com/ajax/libs/d3-cloud/1.2.5/d3.layout.cloud.js
  - /js/posts/prof-reviews/scatter.js
  - /js/posts/prof-reviews/bar_chart.js

stylesheets:
  - /css/posts/prof-reviews/style.css
---

<script src="https://cdn.jsdelivr.net/npm/chart.js@3.0.0/dist/chart.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.0.0/chartjs-plugin-datalabels.min.js" integrity="sha512-R/QOHLpV1Ggq22vfDAWYOaMd5RopHrJNMxi8/lJu8Oihwi4Ho4BRFeiMiCefn9rasajKjnx9/fTQ/xkWnkDACg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script type="module" src="/js/posts/prof-reviews/dropdownMenu.js"></script>
<script type="module" src="/js/posts/prof-reviews/word_cloud.js"></script>
<script type="module" src="/js/posts/prof-reviews/word_freq.js"></script>
<script type="module" src="/js/posts/prof-reviews/rating_vis2.js"></script>
<script type="module" src="/js/posts/prof-reviews/scatter.js"></script>
<!-- <script type="module" src="/js/posts/prof-reviews/bar_chart.js"></script> -->
<script type="module" src="/js/posts/prof-reviews/percent_pos.js"></script>

### Numerical reviews for male and female professors

<!-- bar chart -->

The rating system on Bruinwalk allows students to rate professors from 0 to 5 on various elements of their class. The average overall ratings of classes were generally the same for both female and male professors before and after the COVID-19 pandemic. When comparing ratings between the genders, female professors tended to be rated slightly higher than male professors in all categories except workload.

<div id="stats-menu3"></div>
<div id="rating-svg-div"></div>

Some students have found that ratings on Bruinwalk do not match their experience in the classroom. Professors with bad ratings on Bruinwalk can turn out to have excellent classes, Rodriguez said.

### Written reviews

The word cloud below displays the most common words found in both male and female professor reviews, with the size of the word corresponding to how often it appears in reviews. (Note that the words are mapped to a scale such that smaller words are enlarged for visibility.)

<!-- word cloud -->
<div class="word-cloud-div">
  <!-- <div id="stats-menu2a" style="display: inline; float: left;">
    <label for="num-words-input2" 
      style="display: inline-block; text-align: right;">
      Show top
    </label>
    <input type="number" min="10" max="100" step="10" value="30" style="width:5em;" id="num-words-input2">
  </div>
  <div id="stats-menu2" style="display: inline; float: left;"></div><br> -->
  <div id="WC-div" class="WC-div"></div>
</div>

The percent differences in words used between male and female professor reviews were fairly small. The most common words for both genders tended to be classroom related – “professor,” “homework,” etc.

Below, we removed classroom-related words and filtered only for adjectives to examine how descriptive words were used differently in male and female professor reviews.

### A closer look at adjectives used in male and female professor reviews

<!-- lollipop chart -->
<div id="lollipop-div">
  <div id="stats-menu1a" style="display: inline; float: left;">
    <label for="num-words-input1" 
      style="display: inline-block; text-align: right;">
      Show top
    </label>
    <input type="number" min="10" max="40" step="5" value="20" style="width:4em;" id="num-words-input1">
  </div>
  <div id="stats-menu1" style="display: inline; float: left;"></div>
  <div id="lollipop-svg-div"></div>
</div>

The top adjectives for both genders relate to course difficulty: “easy,” “hard,” “fair,” etc. Looking past this subset, the personality-related words used to describe professors tend to diverge by gender. If we order by words with the <input type="button" class="btn-link" id="interactive-text-1" value="largest difference">, male professors receive more reviews with words like “funny,” “generous” and “smart.” On the other hand, female professors receive more reviews with the words “sweet,” “helpful” and “social.”

“Female faculty will find themselves marked lower than male (faculty) on the same question, especially questions related to (the) presence of support and creating a positive classroom environment, simply because they're being held to … a toxically-gendered different standard,” said Phil Chodrow, a visiting assistant adjunct professor in the Department of Mathematics.

These adjectives can be placed in the context of other commonly used words used in reviews for female versus male professors. The chart below plots the relative frequency of words used in reviews for female professors versus reviews for male professors.

### Other words most commonly used for female versus male professors

<!-- <form>
<label> Select Data </label>
<select>
<option id = "full" value = "full"> All words
</option>
<option id = "subset" value = "subset"> Words with less than 0.4% frequency
</option>
</select>
</form>
 -->
<form>  
Show:
<select id = "myList">  
<option id = "full" value = "full"> All words </option>  
<option id = "subset" value = "subset"> Words with less than 0.4% frequency </option>  
</select>  
</form>

<div class="chart-container">
  <canvas id='scatter'></canvas>
</div>

Gendered words, such as “guy,” “man,” “female” and “lady” have the greatest difference in relative frequency.

The line on the chart indicates where a word used equally for reviews of males and females would lie. The heavy concentration of points along this line indicates that most words are used with equal frequencies for male and female professors.

Words that lie above this line, such as “interesting,” “loved” and “easy,” appeared more frequently in reviews for female professors, while words that lie below the line, such as “jokes,” “hard” and “best,” appeared more frequently in reviews for male professors.

“It's important to recognize that this is not just about words used, but it’s actually about different axes of evaluation,” Chodrow said. Women are expected to be more caring and thus words like “warm” may show up more often in reviews for female professors than for male professors..

STEM-related words such as “physics,” “chem,” and “math” appear significantly more frequently for males than females, while words such as “art” and “English” appear more commonly for females. The differences may result from the higher percentage of male professors in STEM and female professors in the humanities, which were not disaggregated by department in our comparison.

### Effect of the pandemic

The Stack used sentiment analysis to categorize reviews as “positive” or “negative,” depending on the language used in each review.

For both male and female professors, about 80% of the reviews given for quarters prior to Spring 2020 were positive. This number went up to about 85% for reviews given during the COVID-19 pandemic.

<div class="chart-container">
  <canvas id='myChart'></canvas>
</div>
While student evaluations can offer a reflection of how different methods of teaching work for individual students, they can also simply be a measure of if a student was happy or a class was easy, Chodrow said.

In order to avoid the negative effect on hiring that can come from reviews, Chowdrow said portfolios including how a professor has grown or adapted in response to reviews would be a more fair hiring practice.

Beyond the negative career impacts, negative reviews can have personal impacts on the professors. Both Chodrow and Sanders said some professors choose not to read reviews due to the unkind and unfair content in some reviews.

“A real person is reading this (review) and will be impacted by what you say,” Sanders said.

### About the data

The data was collected from Bruinwalk, an online platform that students can use to browse and write instructor reviews. All reviews with numerical rating information were factored into the corresponding charts and analysis, while all reviews with textual opinions were considered in our sentiment analysis. The reviews date back to the fall 2000 quarter, although the majority of reviews clustered around the past three years.

Official course evaluations from UCLA could not be obtained due to privacy reasons.

#### Methodology

Sentiment analysis was performed using the Python package [nltk](https://www.nltk.org/). All frequencies of the words were normalized by the total the number of words used for the specified gender.

We used the frequency of male and female pronouns in all the reviews for a professor to predict the professor’s gender. Professors with no pronouns in their reviews or an equal number of male and female pronouns were labeled indeterminate in our dataset.
