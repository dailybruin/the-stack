---
title: "On-Campus vs. off-Campus Living: Which Living Location Matches Your Preferences?"
teaser: Analysis of the differences between on-campus and off-campus living at UCLA. 
authors:
  - leo_cardozo
  - angela_kan
  - haryn_shin
key_takeaways:
  - The percentage of students living on campus has been steadily increasing since 2012.
  - 48% of all students, 56% of new transfers, and 98% of first years live on-campus at UCLA as of 2020.
  - Living in a university apartment double is, on average, cheaper than living in an off-campus apartment when factoring in food, transportation, and utilities.

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
  - /css/posts/campus-living-2022/app.css
  - //fonts.googleapis.com/css?family=Lato&display=swap
---

### Introduction:
In Marth, UCLA became the first UC to offer four years of guaranteed housing for the classes of 2026 and onward and two years of housing for transfer students starting Fall 2022 (CQ#1). This year, UCLA has opened multiple new apartments to accommodate more students (CQ#2). Students have a variety of housing options to choose from based on their living preferences, but choosing whether to live on-campus and off-campus can be difficult. Using official UCLA and government data to analyze different factors such as the overall demographics of on-campus and off-campus students and the various living costs associated with each type of housing, we lay out the differences between living on-campus and off-campus that students may want to consider when selecting their next home at UCLA.
### Match Quiz

Here is a short quiz for you to see whether you better match with living on-campus or off-campus.

<div id="wrapper">  
  <h1>On-Campus vs. Off-Campus Living: Which is for you?</h1>
  <p>Take this quiz to find out your best match!</p> 
  <form id = "quiz">
		<p class = "question">Q1. Do you like to cook?</p>
      <label>
        <input type="radio" name="q1" value="offcamp" required>
        Yes, I like cooking
      </label>
      <br />
      <label>
        <input type="radio" name="q1" value="oncamp" required>
        No, I don’t like cooking
      </label>
      <br />         
		<p class = "question">Q2. Do you have a car?</p>
      <label>
        <input type="radio" name="q2" value="offcamp" required>
        Yes, I have a car
      </label>
      <br />
      <label>
        <input type="radio" name="q2" value="oncamp" required>
        No, I don't have a car
      </label>
      <br />
    <p class = "question">Q3. What year are you?</p>
      <label>
        <input type="radio" name="q3" value="oncamp" required>
        1st year
      </label>
      <br />
      <label>
        <input  type="radio" name="q3" value="oncamp" required>
        2nd year
      </label>
      <br />
      <label>
        <input type="radio" name="q3" value="offcamp" required>
        3rd year
      </label>
      <br />
      <label>
        <input type="radio" name="q3" value="offcamp" required>
        4th+ year
      </label>
      <br />
		<p class = "question">Q4. Do you mind communal bathrooms?</p>
		  <label>
        <input type="radio" name="q4" value="oncamp" required>
			  No, I don't mind
		  </label>
      <br />
		  <label>
        <input type="radio" name="q4" value="offcamp" required>
			  Yes, I don't want communal bathrooms
		  </label>
      <br />
		<p class = "question">Q5. Do you like having separate spaces for school and personal life?</p>
		  <label>
        <input type="radio" name="q5" value="oncamp" required>
			  No, I don’t really mind
		  </label>
      <br />
		  <label>
        <input type="radio" name="q5" value="offcamp" required>
			  Yes, I want them separate
		  </label>
      <br />
		<p class = "question">Q6. Do you need a space to live during summer/winter breaks?</p>
		  <label>
        <input type="radio" name="q6" value="oncamp" required>
			  No
		  </label>
      <br />
		  <label>
        <input type="radio" name="q6" value="offcamp" required>
			  Yes
		  </label>
      <br />
		<p class = "question">Q7. How important of a factor is proximity from campus to you?</p>
		  <label>
        <input type="radio" name="q7" value="oncamp" required>
			  Very important, I want to be as close as possible
		  </label>
      <br />
		  <label>
        <input type="radio" name="q7" value="offcamp" required>
			  Not that important, I’d rather prioritize other things
		  </label>
      <br />
  </form>
  <div>
		<button class = "quiz_submit" type="button" id="submit" onclick="matchQuiz()">Click Me For Results!</button>
  </div>
  <div id="answer">Your result will show up here!</div> 
  <div>
		<canvas class = "no_results" id="matchChart" ></canvas>
  </div>
</div>

### Breakdown of Estimated Yearly Living Costs
<div>
  <canvas id="stacked-chart" width="190" height="120"></canvas>
</div>

#### Housing Costs
The chart above shows the overall breakdown of estimated individual living costs for each category – On-Campus, Off-Campus (University Apartments), and Off-Campus (Non-University Apartments). To uniformize price comparisons across categories, we looked at rates for a double, a room shared by two people. On average, estimated rent costs are the highest for on-campus dorms, followed by university apartments, then off-campus Westwood apartments. Note that these rates depend on the number of roommates one chooses to have, and vary more significantly based on this factor for off-campus Westwood apartments than for university-owned housing.  

#### Food Costs
Food costs differ significantly based on whether a student is living on or off-campus. UCLA currently does not provide meal plans for off-campus students (CQ#12), so only students living on campus are eligible for a meal plan. We used data about the average cost of groceries in Westwood in order to calculate the food costs for off-campus students. Food costs for on-campus students were derived from the meal plan costs at UCLA; we used the cost of a 14P plan, as it is the most common plan (CQ#13) and somewhat of an average of the different plans offered. On average, the cost of food for students living on-campus is significantly more expensive than the cost of food for students living off-campus, by a vast difference of almost two times.

Joseph Malham, a third-year physics student living in Gayley Heights (CQ #14), a university-owned apartment, noted this difference, commenting on how expensive meal plans are: 

“It’s nice to not have to pay for a meal plan. I probably spend like $200 a month [or so] on groceries,.” Malham said. (CQ#15) 

Malham, who also lived in the “Co-op,” the University Cooperative Housing Association, his freshman year, noted that he paid $650 a month for room and board there in exchange for working one weekly four-hour work shift doing chores (CQ#15), which serves as a much cheaper alternative to more traditional housing options, especially considering room and board at the Co-op includes food.

Food costs can also vary dramatically for students depending on how often they eat out and how many groceries they buy. 

Justin Seok, a fourth-year psychobiology student who lives in a non-university apartment (CQ#18), said, “Food is a big thing, it’s not something that is already calculated in like a meal plan and it can vary a lot depending on how often you go out and how often you get your food delivered.”(CQ#7). 


#### Transportation Costs
On average, transportation costs for off-campus students are shown to be more costly compared to those of on-campus students by about $445 (CQ#16) when one factors in the increased distance of off-campus housing from campus. Based on their location, students off-campus may decide to utilize public transit or bring their cars to get to their classes, which could lead to greater spending in transportation compared to on-campus students. 

“The walk to campus definitely got longer for me. I definitely have to plan getting to campus,” Seok said (CQ#8). 

Utilizing free transportation services such as BruinBus may be a way to reduce transportation costs, especially for off-campus students. 

#### Utilities Costs
Another cost consideration off-campus students living in non-university apartments may have to take into account is the cost of utilities. These costs typically include electricity, gas, internet, water, and trash bills. While the utilities costs for dorms and university apartments are included in overall room and board fees, non-university apartment students may need to pay the costs of some or all of their utilities separately. Though the costs may differ slightly depending on the specific apartment, on average, full utility costs are about $107 a month.  

#### Other Costs
While on-campus housing fees are all inclusive, there may be unexpected miscellaneous costs in addition to the utilities costs for off-campus apartments, such as furniture repairs and everyday supplies like kitchen utensils or toiletries. While on-campus dorms usually provide students with toilet paper and cleaning supplies, off-campus students may be expected to spend additional money on such items. While we did not factor this into our cost of living calculations as these costs can be highly variable, this is another important consideration for students choosing where to live.

Seok said that students in non-university apartments may have to additionally spend on furniture, which could be an upfront cost that students may have not necessarily calculated (CQ#9).

### Miscellaneous Factors 
There are other factors that can affect students’ choice of living besides costs. This includes students’ living styles and preferences, distance from campus, social life, and more. 

Apartments are typically more spacious and may provide an increased sense of “home” to students, as they are usually accompanied by a kitchen, common living area, and individual rooms, whereas dorms are single rooms that are supplied with only essential furniture like beds, dressers, and desks. 

“I like that there’s a lot more space for people. There’s some degree of privacy, there’s multiple rooms, and you’re not all in one room at the same time as each other,” Malham said. (CQ#17)

Some students may prefer living in apartments because of the personal feel. 

“It feels more of like a home than like a dorm,” (CQ#10) Seok said. 

Off-campus apartments may also offer a way for students to separate school and personal life.

“It’s really nice to be able to, in my opinion, go away from campus, have your own personal space, have your own kitchen, all that stuff,” Malham said. (CQ#17)

The convenience of meal plans, on the other hand, could be a reason why some students may prefer to live on-campus.

Seok further mentioned that it was easier to grab food when he lived in the dorms, as he could just walk down to one of the dining halls instead of spending time cooking (CQ#11). 

Additionally, the social scene that comes with living on the Hill can be a great way to meet new people.

“I like the social aspect of it, and seeing and talking to people every day and hanging out in the lounge is really fun and relaxing. It’s a good way to destress from all your schoolwork,” said Camryn Deisman, a first-year music education major. (CQ#20)

However, while the Hill might be more social, it also comes with more restrictions. 

Deisman continued, “With dorms, you’re still contained to like a set of rules—when you are in an apartment, it’s a little different.” (CQ #21). 

### Overall Demographics of student living on-campus and off-campus
Aside from these miscellaneous considerations, another important factor that might impact where students choose to live is what their peers are doing, and how many of them are doing it. The chart below shows the percentage of students living on campus each year from Fall 2006 to Fall 2020.  

<div class = "selectBox" >
  <select id = "studentType">
      <option value="40, 40, 40, 39, 36, 48, 35, 39, 43, 45, 47, 48, 48, 48, 48"
              label = "All Students" 
              selected>% of All Students On Campus</option>
      <option value="39, 39, 38, 34, 34, 34, 34, 39, 47, 51, 53, 51, 54, 56, 56"
              label = "Transfers"
              >% of New Transfers On Campus</option>
      <option value="94, 94, 94, 93, 94, 94, 94, 95, 96, 98, 97, 98, 98, 98, 98"
              label = "First-Years"
              >% of First-Years On Campus</option>
  </select>  
</div>
<div class = "chartBox" >
    <canvas id="campusData" width="400" height="400"></canvas> 
</div> 

The percentage of the student body living on campus has steadily risen since 2012, concurrent with the construction and completion of several university housing projects over the years (CQ #3). One possible explanation for the notable 2011 spike in the percentage of students living on campus could be UCLA’s expansion of the housing guarantee to more upperclassmen that year (CQ #4). 


The increased tendency of upperclassmen to live off campus can play a huge role in one’s decision to live off campus. Robi Chattergee, a fourth-year data theory student, cited the social scene as one of the key reasons he enjoys living in an off-campus apartment. (CQ #5): 

“As a fourth year, that’s kinda where most of the other fourth years are, so it’s kinda nice to be around people my age,” said Chattergee (CQ #6).

### Looking Forward 
With so many different options out there, the decision of where to live can be an overwhelming one. However overwhelming, the fact that students have many choices of where to live means that there are different options out there to cater to a wider range of preferences and budgets. As an institution now offering a full housing guarantee for all its undergraduates, something that many other Californian universities are struggling with (CQ#19), UCLA has given its students the privilege to choose what suits them best.

### About the Data
The overall demographics chart was created using data from UCLA’s Common Data Set and Undergraduate Profile. The estimated yearly living costs chart was created using the data found on the UCLA Tuition and Fees website by averaging the rates for a double for each type of dorm and university apartment type type, as well as using data regarding average 1-bedroom apartment rent rates in Westwood taken from the US Department of Housing and Urban Development. Data regarding the cost of food was taken from the US Department of Agriculture, with yearly estimates calculated based on a nutritionally adequate diet of food purchased at a grocery store for at-home preparation and adjusted for a nine-month academic year.





