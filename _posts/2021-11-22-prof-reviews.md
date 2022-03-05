---
title: Gendered language in Bruinwalk reviews
teaser: How do professor reviews differ based on gender? The Stack looks at the language used in professor reviews on Bruinwalk and examines how review sentiment changed during both online learning.
authors:
  - ananya_garg
  - tyler_wu
  - jessica_li

key_takeaways:
  - Overall, male and female professors had similar numerical ratings and percentages of positive reviews.
  - The percent of positive reviews during the COVID-19 pandemic was slightly higher than those before the pandemic.
  - Common sentiments differed between male and female professor reviews. Reviews for male professors commonly included words related to their teaching, such as “hard”, “smart”, and “understand”, while common words in reviews for female professors were “easy,” “sweet”, and “interesting”.

featured_image:
  url:
  caption:
og_image:

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  - //ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
  - //d3js.org/d3.v7.min.js
  # - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  # - //d3js.org/d3.v7.min.js
  - //cdnjs.cloudflare.com/ajax/libs/d3-cloud/1.2.5/d3.layout.cloud.js
  - /js/posts/prof-reviews/scatter.js
  - /js/posts/prof-reviews/bar_chart.js

  # - //rawgit.com/jasondavies/d3-cloud/master/build/d3.layout.cloud.js

stylesheets:
  - /css/posts/prof-reviews/style.css
---

<script type="module" src="/js/posts/prof-reviews/dropdownMenu.js"></script>
<script type="module" src="/js/posts/prof-reviews/word_cloud.js"></script>
<script type="module" src="/js/posts/prof-reviews/word_freq.js"></script>
<script type="module" src="/js/posts/prof-reviews/rating_vis2.js"></script>
<script type="module" src="/js/posts/prof-reviews/scatter.js"></script>
<!-- <script type="module" src="/js/posts/prof-reviews/bar_chart.js"></script> -->
<script type="module" src="/js/posts/prof-reviews/percent_pos.js"></script>

Whether it be through word-of-mouth, Bruinwalk, or official course evaluations, professor reviews help some students decide which classes to take.

At UCLA, official course evaluations by students also factor into a faculty review process that impacts employment, said Ashley Sanders, the Vice Chair of the Digital Humanities program, who teaches multiple courses per quarter.

The large influence that student course evaluations have on faculty review processes prompts a question about the role of bias in the evaluations themselves.

A 2019 study by researchers at Cambridge University, part of a growing body of research, found that professor reviews are largely biased against women and faculty of color, who consistently receive lower scores and more negative sentiments in course evaluations than their white male counterparts.

“Especially in the United States, we have this patriarchal system that places men at the top and women at the bottom, and I think that's partly why society can be pretty hard on women,” said Antonio Rodriguez, a fourth-year gender studies student.

Sanders said that women professors whose personalities align with stereotypically male characteristics, such as gruffness, may have their ratings suffer as a result.

“I think there's a higher expectation of a sense of care and well-being in the classrooms of women instructors,” Sanders said.

Below, the Stack explores the text and numerical ratings of Bruinwalk reviews in order to evaluate differences in professor reviews based on gender. We also compared reviews pre-pandemic and during the COVID-19 pandemic to account for changes in learning and classes in general. We did not, however, control for differences in departments or subject areas that professors taught under.

We predicted professor genders based on the frequency of pronouns identified in reviews and chose to focus on male and female genders only, as non-binary professors could not be as easily determined. Approximately 70% of professors were identified as male and 29% identified as female, while 1% of pronouns for professors were deemed inconclusive.

Inaccurate gender predictions could have resulted from students misgendering professors in reviews or analyzing gender pronouns referring to course teaching assistants instead of professors themselves.

### Ratings for male and female professors

<!-- bar chart -->
<div id="stats-menu3"></div>
<div id="rating-svg-div"></div>

The rating system on Bruinwalk allows students to rate professors from 0 to 5 on various elements of their class. Although the average overall ratings of classes were generally the same between female and male professors before and after the COVID-19 pandemic, when comparing ratings between the genders, female professors tend to be rated slightly higher than male professors in all categories except workload.

Some students have found that ratings on Bruinwalk do not match their experience in the classroom. Professors with bad ratings on Bruinwalk can turn out to have excellent classes, Rodriguez said.

### The most common words

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

The percent differences in many words used between male and female professor reviews were fairly small. As expected, the most common words for both genders tended to be classroom related, (“profesor”, “homework”, etc). Adding some criteria for which words appear could be more informative.

### A closer look at adjectives used in male and female professor reviews

<!-- lollipop chart -->
<div id="lollipop-div">
  <div id="stats-menu1a" style="display: inline; float: left;">
    <label for="num-words-input1" 
      style="display: inline-block; text-align: right;">
      Show top
    </label>
    <input type="number" min="10" max="50" step="5" value="20" style="width:4em;" id="num-words-input1">
  </div>
  <div id="stats-menu1" style="display: inline; float: left;"></div>
  <div id="lollipop-svg-div"></div>
</div>

If we filter for only for adjectives and removing classroom-related words, a more revealing distinction between common descriptors in male and female professors reviews presents itself. Many words used to describe male professors tend to be related to content or teaching ability: “hard", “understand”, and “smart”. On the other hand, female professors receive more reviews with the words “sweet”, “feedback", and “helpful”.

“Female faculty will often find themselves marked lower than male counterparts on questions related to presence of support and creating a positive classroom environment, simply because they're being held to an implicit higher standard,” said Phil Chodrow, a Visiting Assistant Adjunct Professor in the Department of Mathematics.

These adjectives can be placed in the context of other commonly used words used in reviews for female versus male professors.The chart below plots the relative frequency of words used in reviews for female professors versus reviews for male professors.

### Other words most commonly used for female versus male professors

<div class="chart-container">
  <canvas id='scatter'></canvas>
</div>

Gendered words, such as “guy”, “man”, “female” and “lady” have the greatest difference in relative frequency.

The line on the chart indicates where a word used equally for reviews of males and females would lie. The heavy concentration of points along this line indicates that most words are used with equal frequencies for male and female professors.

Words that lie above this line such as “interesting”, “loved”, and “easy” appeared more frequently in reviews for female professors, while words that lie below the line such as “jokes”, “hard”, and “best” appeared more frequently in reviews for male professors.

“It's important to recognize that this is not just about words used but about different axes of evaluation,” Chodrow said. Women are expected to be more caring and kind and thus words like warm may show up more often.

STEM related words such as “physics”, “chem”, and “math” appear significantly more frequently for males than females, while words such as “art” and “english” appear more commonly for females. The differences may result from the higher percentage of male professors in STEM and female professors in the humanities, which were not disaggregated by department in our comparison.

### Effect of the pandemic

The Stack used sentiment analysis to categorize reviews as “positive” or “negative” groups, depending on the language used in each review.

For both male and female professors, about 80% of the reviews given for quarters prior to Spring 2020 were positive. This number went up to about 85% for reviews given during the COVID-19 pandemic.

### Percentage of positive reviews

<div class="chart-container">
  <canvas id='myChart'></canvas>
</div>

While student evaluations can offer a reflection of how different methods of teaching work for individual students, they can also simply be a measure of if a student was happy or a class was easy, Chodrow said.

In order to avoid the negative effect on hiring that can come from reviews, Chowdrow said that portfolios including how a professor has grown or adapted in response to reviews would be a more fair hiring practice.

Beyond the negative career impacts, negative reviews can have personal impacts on the professors. Both Chodrow and Sanders said that some professors choose not to read reviews due to the unkind and unfair content in some reviews.

“A real person is reading this (review) and is impacted by what you say,” Sanders said.

### About the data

The data was collected from Bruinwalk, an online platform that students can use to browse and write instructor reviews. All reviews with numerical rating information were factored into the corresponding charts and analysis, while all reviews with textual opinions were considered in our sentiment analysis. The reviews date back to the fall 2000 quarter, although the majority of reviews clustered around the past three years.

Official course evaluations from UCLA could not be obtained due to privacy reasons.

#### Methodology

Sentiment analysis was performed through softwares in R and Python, specifically the Python package nltk and pandas for filtering data

We used the frequency of male and female pronouns in all the reviews for a professor to predict the professor’s gender. Professors with no pronouns in their reviews or an equal number of male and female pronouns were labeled indeterminate in our dataset.
