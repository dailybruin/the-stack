---
title: "Dishing it Out - A Closer Look at UCLA Dining’s Meal Plan Offerings"
teaser: Which UCLA meal plan should you choose?
authors:
  - l_yang
  - hannah_um
  - joey_ling
  - ayushi_kadakia
key_takeaways:
  - The most expensive meal plan by cost per meal for 2022-2023 was 11P, at $14.32 per swipe.
  - Nearly 6000 students opted for 14P in 2023-2024, making it the most popular meal plan.
  - Based on leftover meals from 2022-2023, students with the 19P and 11P meal plans wasted over $500 on average due to uneaten meals.

featured_image:
  url: meal-plans/bplate.JPG
  caption: (Zimo Li/Daily Bruin)
og_image:
scripts:
  - https://d3js.org/d3.v7.min.js
  - //cdn.jsdelivr.net/npm/chart.js
  - //cdn.plot.ly/plotly-2.31.1.min.js
  - /js/posts/meal-plans/mealplan-packedcircle.js
  - /js/posts/meal-plans/costpermeal.js
  - /js/posts/meal-plans/mealplan-enrollment.js
  - /js/posts/meal-plans/mealplan_upgraded_sunburst.js
  - /js/posts/meal-plans/mealplan-wasted-bar.js

stylesheets:
  - /css/posts/meal-plans/app.css
---

### Introduction

On top of selecting courses and housing each year, a key decision for on-campus UCLA undergraduates is selecting a meal plan most suitable to their needs. A meal plan for the academic year as of 2023 will cost around $5,000 to upwards of $6,000. Students must balance the cost of a meal plan with the amount of food they get as well as how many meal swipes go unused by the end of the quarter.

### A Breakdown of UCLA’s Meal Plan System

The flexibility of the meal plan program allows students to choose from a variety of options. UCLA Dining offers three tiers of meal plans: 19, 14, or 11 meals per week. Each tier has two versions: Premier, a more flexible plan with carry-over privileges until the end of the quarter, or Regular, a more cost-effective plan without carry-over privileges. (CQ1) Students with the Premier plan can use their unused swipes at any time during the quarter, whereas students with the Regular plan can only use their swipes once per meal period (breakfast, lunch, or dinner), and leftover swipes cannot be used the next week. As of Fall 2023, students can also use their swipes on campus instead of spending their own money. 80% of all swipes are used on the Hill, while 20% are used at on-campus restaurants. (CQ10, pg 1)

<p class = 'title'>Weekly average distribution of meal swipes from Fall 2023</p>
<div id="circle-chart" class="cust_chart"></div>
<p class = 'byline'>Graphic reporting by Joey Ling, Stack Contributor</p>

As there are many aspects to consider when choosing a meal plan, such as the amount of time spent off campus, eating and snacking habits, and how well individual schedules line up with meal periods, it is often difficult for students to predict how much food they will need throughout the quarter and to balance that with the cost of each meal plan.

### Reality of the Meal Plan

Cost is a significant factor influencing students’ meal plan selections, but it can be difficult to determine the relative price of each meal plan at first glance.

The graph below shows both the cost per meal and adjusted cost per meal based on data from the 2022-2023 academic year. The cost per meal is calculated by dividing the price of the meal plan by the total quantity of meals offered, and the adjusted cost per meal is calculated from dividing the price of the meal plan by the average meals consumed from each plan in 2022-2023. Assistant Director of Media Relations for UCLA Housing, Katherine Alvarado, wrote in a written statement, “Meal plan prices are set by UCLA Housing, which considers operational costs for the department, such as food cost, utilities, and staff salaries.” (CQ10)

<div class="cust_chart">
    <canvas id='costGraph'></canvas>
</div>
<p class = 'byline'>Graphic reporting by Ayushi Kadakia, Stack Contributor</p>

Premier plans are more costly compared to their Regular counterparts. Additionally, larger meal plans have a lower cost per meal. Given that the price per meal increases with a smaller meal plan and that meal plans are included in the housing contract, it may be more cost effective for students who eat very little to move off-campus sooner, especially considering that the cost of food for students on the Hill is nearly twice as expensive as it is for students living off-campus (CQ13).

### Meal Plan Enrollment

<div class="cust_chart">
    <canvas id='ENROLLMENT'></canvas>
</div>
<p class = 'byline'>Graphic reporting by Hannah Um, Stack Contributor</p>

For the 2023-24 school year, 14P was by far the most popular meal plan with nearly 6,000 students enrolled. In contrast, 11R was the least popular meal plan with only 371 students enrolled. Generally, there is higher enrollment in the Premier plans than in the Regular plans, suggesting that students prefer to have more flexible meal schedules. Additionally, Alvarado writes that the 11P is a recent addition to meal plan options, being offered since 2020 due to student demand.(CQ10)

### Leftover and Donated Swipes

(CQ12) Vidusha Adira, a first-year cognitive science and statistics and data science student, initially selected a 14P plan because she didn’t expect to eat breakfast very often and enjoyed how the meals carry over with the Premier plan. Last quarter, Adira ended up having more meals leftover than predicted after visiting home a few times, but is concerned about potentially running out of swipes in the future if she visits home less frequently. Adira is not the only student with leftover swipes. (CQ 2) Ellie Park, a second year Psychobiology student, initially chose 19P as her meal plan entering her freshman year. As a huge breakfast person, she expected to eat three meals a day. However, “by the end of the quarter, I had like 60 swipes left over because I was not waking up for breakfast. Sometimes, I would go home too,” Park said. Park switched to 14P after her first quarter. “I definitely prefer that because it's not as excessive because I felt stressed to use up my swipes,” Park said.

<p class = 'title'>Number of Swipes that were Consumed, Left Over, and Donated from Fall 2022 to Spring 2023</p>
<div class="cust_chart">
    <div id='sunburst_meal_plans'></div>
</div>
<p class = 'caption'>The inner ring represents the number of swipes for each meal plan. The outermost ring represents the number of swipes that were consumed, left over, or donated for each meal plan.</p>
<p class = 'byline'>Graphic reporting by Joey Ling, Stack Contributor</p>

Many other students, similarly to Adira and Park, have had numerous leftover swipes. The visualization above shows a breakdown of how many swipes are consumed, left over, or donated from Fall 2022 to Spring 2023. The total number of swipes for each meal plan was calculated by multiplying the number of enrolled people by the number of weeks, then multiplying that value by the number of swipes per week according to the meal plan. The number of consumed swipes was calculated by subtracting the number of leftover swipes, which was provided by UCLA Housing, from the total number of enrolled swipes. The number of donated swipes was estimated using the proportion of leftover swipes for each meal plan relative to all leftover swipes.

This contrast between students’ expectation versus reality of their swipe usage leads to options for using up unused swipes before the quarter ends. (CQ 9) Alternatively, students can donate their leftover swipes to Swipe Out for Hunger. Swipe Out Hunger is a leading non-profit campus organization founded in 2010 by UCLA Alum Rachel Sumekh and her friends that aims to end college student hunger by enabling students to donate their extra meals to peers facing food insecurity on campus. Swipe Out Hunger stations can be spotted around the UCLA dining halls towards the end of academic quarters. However, while there tends to be just a small number of leftover swipes for every meal plan at 6.30%, students still rarely donate those swipes towards these organizations. Other students may also discard their unused swipes by the end of the quarter.

An alternative way to use leftover swipes is to purchase large packages of food in bulk or to stock up on snacks from different cafes. Park prefers to purchase prepackaged food for her family and swipe in friends toward the end of the quarter. “I know they aren’t a super great deal… but I usually do that and just swipe a bunch of stuff in The Study,” Park said. (CQ12) Meanwhile, Adira mainly preferred to use extra swipes to purchase coffee on campus, but would also purchase prepackaged foods from cafes, such as pints of ice cream from Cafe 1919.

<p class = 'title'>How much money is wasted from uneaten meals?</p>
<div class="cust_chart">
    <canvas id='MONEY-WASTED'></canvas>
</div>
<p class = 'caption'>The average dollars wasted per person was calculated by dividing average meals leftover by cost per meal for each meal plan (2022-2023)</p>
<p class = 'byline'>Graphic reporting by L Yang, Stack Contributor</p>

The visualization above shows how much money goes wasted per meal plan holder due to unused meal swipes from 2022-2023 data, calculated by the average leftover meals per person multiplied by the cost per meal for each plan. While many students with the 19P meal plan expect to swipe in guests or to have multiple meals a day, a new class schedule and lifestyle after moving into the dorms can drastically change their eating habits, leading to more swipes going unused.

For some students, like Park, they would prefer to have their swipes carry over from one quarter to the next. Students with such requests can provide feedback with their community representative on a weekly basis or use a dine and dish form, Alvarado writes. (CQ10) Yet, Park is satisfied and still thinks the cost of her meal plan justifies its offerings. “The food here is pretty good. And I would say it's pretty worth it for the price,” Park said.

### Comparing UCLA Meal Plans with Other UC Meal Plans

Among the various options for implementing meal plans, UCLA Housing determined that meal swipes are the best system. “By having a meal swipe system versus dollars, students do not have to decide how much and what to eat based on their finances. Students with the lowest swipe meal plan can still access the all-you-care-to-eat restaurants, and do not have to decide to eat lower priced food,” Alvarado writes.(CQ10) This is just one of many methods to implement meal plans. Some UCs, such as UC San Diego and UC Berkeley, use dining dollars, while others, such as UC Davis, provide unlimited dining access for a fixed number of days per week.

_insert UC comparison graphic_

These universities also all offer meal plans for students living off campus. In contrast, UCLA has only recently piloted an off-campus meal plan program due to a stabilization in dining staffing levels that allows Housing to accommodate additional students within the dining halls, Alvarado writes.(CQ10)

### Conclusion

UCLA’s available meal plan options necessitate students to find a balance between cost and consumption that fits their personal needs. As student expectations sometimes do not align with their actual eating patterns, it leads to wasted resources for both students and UCLA, reflecting the drastic lifestyle change for people moving away from home. However, with time, students are often able to adjust their meal plan according to their new eating habits.

### About the Data:

Data used in this article were provided by UCLA Housing and publicly available data from UC Davis Student Dining and Housing Services, UC Berkeley Dining, and UC San Diego Housing Dining Hospitality.
