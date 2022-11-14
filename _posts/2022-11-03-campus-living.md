---
title: "On-Campus vs. off-Campus Living: Which Living Location Matches Your Preferences?"


teaser: Analysis of the differences between on-campus and off-campus living at UCLA. 
authors:
  - leo_cardozo
  - angela_kan
  - haryn_shin

key_takeaways:
  - 
  - 
  - 

featured_image:
  url: 
  caption: 
og_image: 

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js
  - /js/posts/campus-living-2022/match-quiz-new.js
  - /js/posts/campus-living-2022/on_campus_off_campus.js
  - /js/posts/campus-living-2022/stacked-chart.js


stylesheets:
  - /css/posts/campus-living-2022/match-quiz.css
  - /css/posts/campus-living-2022/stacked-chart.css
  - //fonts.googleapis.com/css?family=Lato&display=swap
  # - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js
---

## Introduction

## Overall Demographics of On-campus and Off-campus students

## Breakdown of Estimated Yearly Living Costs
 <!-- <title>On campus vs. Off campus</title>
 <script src="stacked-chart.js" defer></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script> -->

## Match Quiz

<!-- <div class = "quiz-contatiner">
  <iframe width="100%" height="500" src="../../../../js/posts/campus-living-2022/match-quiz.html" frameboarder="0" allowfullscreen></iframe>
</div> -->
  <!-- <iframe width="100%" height="500" src="../../../../the-stack/match-quiz.html" frameboarder="0" allowfullscreen></iframe>
</div> -->

<!-- <script src = "match-quiz-new.js" defer></script> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script> -->
<!-- <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"> -->
<!-- <link rel="stylesheet" href ="/css/posts/campus-living-2022/match-quiz.css"> -->

<div id="wrapper">  
    <h1>On-Campus vs. Off-Campus Living: Which is for you?</h1>
    <p>Take this quiz to find out your best match!</p> 
<form id = "quiz">
		<h2>Q1. Do you prefer dining hall food or cooking your own meal?</h2>
		<label><input type="radio" name="q1" value="oncamp" required>
			Dining hall food
		<span class="checkmark"></span>
		</label><br />
		<label><input type="radio" name="q1" value="offcamp" required>
			Cooking
		</label><br />         
		<h2>Q2. Do you have a car?</h2>
		<label><input type="radio" name="q2" value="offcamp" required>
			Yes, I have a car
		</label><br />
		<label></label><input type="radio" name="q2" value="oncamp" required>
			No, I don't have a car
		</label><br />
        <h2>Q3. What year are you?</h2>
		<label><input type="radio" name="q3" value="oncamp" required>
			1st year
		</label><br />
		<label><input  type="radio" name="q3" value="oncamp" required>
			2nd year
		</label><br />
		<label><input type="radio" name="q3" value="offcamp" required>
			3rd year
		</label><br />
		<label><input type="radio" name="q3" value="offcamp" required>
			4th+ year
		</label><br />
		<h2>Q4. Do you mind communal bathrooms?</h2>
		<label><input type="radio" name="q4" value="oncamp" required>
			No, I don't mind
		</label><br />
		<label><input type="radio" name="q4" value="offcamp" required>
			Yes, I don't want communal bathrooms
		</label><br />
        <h2>Q5. Do you mind walking up the hill?</h2>
		<label><input type="radio" name="q5" value="oncamp" required>
			No, I don't mind walking up the hill
		</label><br />
		<label><input type="radio" name="q5" value="offcamp" required>
			Yes, I would hate to walk up the hill
		</label><br />
		<h2>Q6. How many people are you comfortable living with?</h2>
		<label><input type="radio" name="q6" value="oncamp" required>
			Less than 3 people
		</label><br />
		<label><input type="radio" name="q6" value="offcamp" required>
			More than 3 people
		</label><br />
		<h2>Q7. How important is socializing in your college experience?</h2>
		<label><input type="radio" name="q7" value="oncamp" required>
			It is very important
		</label><br />
		<label><input type="radio" name="q7" value="offcamp" required>
			It is not that important
		</label><br />
		<h2>Q8. Where do you typically prefer to study at?</h2>
		<label><input type="radio" name="q8" value="oncamp" required>
			At lounges and shared spaces
		</label><br />
		<label><input type="radio" name="q8" value="offcamp" required>
			In my room
		</label><br />
		<h2>Q9. How important is safety regarding your living situation?</h2>
		<label><input type="radio" name="q9" value="oncamp" required>
			Definitely important
		</label><br />
		<label><input type="radio" name="q9" value="oncamp" required>
			Somewhat important
		</label><br />
		<label><input type="radio" name="q9" value="offcamp" required>
			Somewhat not important
		</label><br />
		<label><input type="radio" name="q9" value="offcamp" required>
			Definitely not important
		</label><br />
		<div>
		<button type="button" id="submit" onclick="matchQuiz()">Click Me For Results!</button>
	    </form>
		<div id="answer">Your result will show up here!</div> 
		<div>
		<canvas id="matchChart" width="200" height="200"></canvas>
		</div>

## Conclusion



