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
  - Nearly 6,000 students opted for 14P in 2023-2024, making it the most popular meal plan.
  - Nearly 6,000 students opted for 14P in 2023-2024, making it the most popular meal plan. Based on leftover meals from 2022-2023, students with the premier meal plans wasted over $400 on average due to uneaten meals.

featured_image:
  url: meal-plans/bplate-bright.JPG
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
  - /js/posts/meal-plans/img-slider.js

stylesheets:
  - /css/posts/meal-plans/app.css
---

### Introduction

On top of selecting courses and housing each year, a key decision for on-campus UCLA undergraduates is selecting a meal plan most suitable to their needs. A meal plan for the 2023-2024 academic year costs between $5,000 to upward of $6,000. Students must balance the cost of a meal plan with the amount of food they get as well as how many meal swipes may go unused by the end of the quarter. 

<p class = 'title'>UCLA meal plans cost (2024-2025)</p>
    
<table>
  <tr>
    <td>11R</td>
    <td>11P</td>
    <td>14R</td>
    <td>14P</td>
    <td>19R</td>
    <td>19P</td>

  </tr>
  <tr>
    <td>$5,301.00</td>
    <td>$5,709.12</td>
    <td>$5,761.56</td>
    <td>$6,270.00</td>
    <td>$5,932.56</td>
    <td>$6,614.28</td>
  </tr>
</table>

### A Breakdown of UCLA’s Meal Plan System

The flexibility of the meal plan program allows students to choose from a variety of options. UCLA Dining offers three tiers of meal plans: 19, 14 or 11 meals per week. Each tier has two versions: Premier, a more flexible plan with carry-over privileges until the end of the quarter, or Regular, a more cost-effective plan without carry-over privileges. Students with the Premier plan can use their unused swipes at any time during the quarter, whereas students with the Regular plan can only use their swipes once per meal period (breakfast, lunch or dinner), and any unused swipes cannot be used in following weeks. As of fall quarter, students can also use their swipes on campus instead of spending their own money on weekdays between 11 a.m. and 3:59 p.m. In fall 2023, 80% of all swipes were used on the Hill, while 20% were used at on-campus restaurants. 

<p class = 'title'>Weekly average distribution of meal swipes from Fall 2023</p>
<div id="circle-chart" class="cust_chart"></div>
<p class = 'byline'>Graphic reporting by Joey Ling, Stack Contributor</p>

As there are many aspects to consider when choosing a meal plan, such as the amount of time spent off campus, eating and snacking habits, and how well individual schedules line up with meal periods, it is often difficult for students to predict how much food they will need throughout the quarter and balance that with the cost of each meal plan.

### Reality of the Meal Plan

Cost is a significant factor influencing students’ meal plan selections, but it can be difficult to determine the relative price of each meal plan at first glance.

The graph below shows both the cost per meal and adjusted cost per meal based on data from the 2022-2023 academic year. The cost per meal is calculated by dividing the price of the meal plan by the total quantity of meals offered, and the adjusted cost per meal is calculated by dividing the price of the meal plan by the average meals consumed from each plan in 2022-2023. In a written statement, UCLA Housing said, “Meal plan prices are set by UCLA Housing, which considers operational costs for the department, such as food cost, utilities, and staff salaries.”

<div class="cust_chart">
    <canvas id='costGraph'></canvas>
</div>
<p class = 'byline'>Graphic reporting by Ayushi Kadakia, Stack Contributor</p>

Premier plans are more costly compared to their Regular counterparts. Additionally, larger meal plans have a lower cost per meal. Given that the price per meal increases with a smaller meal plan and that meal plans are included in the housing contract, it may be more cost effective for students who buy fewer meals to move off-campus sooner, especially considering that the cost of food for students on the Hill is nearly twice as expensive as it is for students living off-campus.

### Meal Plan Enrollment

<div class="cust_chart">
    <canvas id='ENROLLMENT'></canvas>
</div>
<p class = 'byline'>Graphic reporting by Hannah Um, Stack Contributor</p>

For the 2023-2024 school year, 14P was by far the most popular meal plan, with nearly 6,000 students enrolled. In contrast, 11R was the least popular meal plan, with only 371 students enrolled. Generally, there is higher enrollment in the Premier plans than in the Regular plans, suggesting that students prefer to have more flexible meal schedules. Additionally, UCLA Housing  said the 11P plan is a recent addition to meal plan options, being offered since 2020 due to student demand.

### Leftover and Donated Swipes

Laura Zhou, a second-year statistics and data science student, initially selected a 19P plan when she first entered UCLA as a first-year. Later, however, she switched to 14P after discovering that she had many swipes left over. She added that UCLA Housing’s new rule this year only allowing students to use meal swipes at ASUCLA locations between 11 a.m. and 3:59 p.m. makes it difficult to use swipes while on campus. Zhou, however, was not the only student with leftover swipes. Kavin Balamurali, a second-year Mathematics/economics student, initially chose 19R as his meal plan entering his freshman year, though he switched to 19P after his first quarter for the flexibility of multiple swipes in the same meal period.

“After fall quarter, I got into the UCLA Cricket Team. Most people on the cricket team offer to swipe [others] in for lunches and dinners after team training, and that's why I switched from 19R to 19P,” Balamurali said.

This transition, however, resulted in him having leftover swipes at the end of the quarter. 


<p class = 'title'>Number of Swipes that were Consumed, Left Over, and Donated from Fall 2022 to Spring 2023</p>
<div class="cust_chart">
    <div id='sunburst_meal_plans'></div>
</div>
<p class = 'caption'>The inner ring represents the number of swipes for each meal plan. The outermost ring represents the number of swipes that were consumed, left over, or donated for each meal plan.</p>
<p class = 'byline'>Graphic reporting by Joey Ling, Stack Contributor</p>

Many other students like Zhou and Balamurali have had numerous leftover swipes. The visualization above shows a breakdown of how many swipes are consumed, left over or donated from fall 2022 to spring 2023. The total number of swipes for each meal plan was calculated by multiplying the number of enrolled people by the number of weeks, then multiplying that value by the number of swipes per week according to the meal plan. The number of consumed swipes was calculated by subtracting the number of leftover swipes, which was provided by UCLA Housing, from the total number of enrolled swipes. The number of donated swipes was estimated using the proportion of leftover swipes for each meal plan relative to all leftover swipes.

This contrast between students’ expectation versus reality of their swipe usage leads to options for using up unused swipes before the quarter ends. Students can donate their leftover swipes to Swipe Out Hunger. Swipe Out Hunger is a leading non-profit campus organization founded in 2010 by UCLA alumnus Rachel Sumekh that aims to end college student hunger by encouraging students to donate their extra meals to peers facing food insecurity on campus. Swipe Out Hunger stations can be spotted around the UCLA dining halls toward the end of academic quarters. However, while there tends to be just a small number of leftover swipes for every meal plan at 6.30%, students still rarely donate those swipes. If they do not donate their unused swipes, they are discarded at the end of the quarter. 

An alternative way to use up extra swipes is to purchase large packages of food in bulk that are offered at the end of each quarter or to stock up on snacks from different cafes. 

Zhou said she preferred to use her accumulated excess swipes to purchase items. Last quarter, she cashed out swipes for a $500 Panda Express gift card. This quarter, she hopes to trade swipes for vouchers to use at the UCLA Store. 

<p class = 'title'>How much money is wasted from uneaten meals?</p>
<div class="cust_chart">
    <canvas id='MONEY-WASTED'></canvas>
</div>
<p class = 'caption'>The average dollars wasted per person was calculated by multiplying the average meals leftover per meal plan by the cost per meal (2022-2023)</p>
<p class = 'byline'>Graphic reporting by L Yang, Stack Contributor</p>

The visualization above shows how much money goes wasted per meal plan holder due to unused meal swipes from 2022-2023 data, calculated by the average leftover meals per person multiplied by the cost per meal for each plan. While many students with the 19P meal plan expect to swipe in guests or to have multiple meals a day, a new class schedule and lifestyle after moving into the dorms can drastically change their eating habits, leading to more swipes going unused. 

Some students would prefer to have their swipes carry over from one quarter to the next. Other students, like Balamurali, would like an option to cash in remaining swipes at the end of the quarter. Students with such requests can provide feedback with their community representative on a weekly basis or use a dine and dish form, UCLA Housing said in the written statement. Yet Balamurali said he is satisfied and still thinks the cost of his meal plan justifies its offerings.  

### Comparing UCLA Meal Plans with Other UC Meal Plans

Among the various options for implementing meal plans, UCLA Housing determined that meal swipes are the best system. 

“By having a meal swipe system versus dollars, students do not have to decide how much and what to eat based on their finances. Students with the lowest swipe meal plan can still access the all-you-care-to-eat restaurants, and do not have to decide to eat lower priced food,” the statement said.

This is just one of many methods to implement meal plans. Some UCs, such as UC San Diego and UC Berkeley, use dining dollars, while others, such as UC Davis, provide unlimited dining access for a fixed number of days per week.

<div class="slider">
    <div class="slides">
        <div class="slide"><img src="/img/posts/meal-plans/graphics/gfx.datadininghalls-01.png" alt="Title: Comparing meal plans across UCs. Subtitle: As part of an analysis to find the optimal meal plan for UCLA students, The Stack summarized key differences in meal plans between UCLA, UC Berkeley, UC Davis and UCSD. Graphic reporting by Joey Ling, Hannah Um, L Yang, Stack contributors. Graphic by Asley Heeseon Choi, Graphics contributor."></div>
        <div class="slide"><img src="/img/posts/meal-plans/graphics/gfx.datadininghalls-02.png" alt="Image 2"></div>
        <div class="slide"><img src="/img/posts/meal-plans/graphics/gfx.datadininghalls-03.png" alt="Image 3"></div>
        <div class="slide"><img src="/img/posts/meal-plans/graphics/gfx.datadininghalls-04.png" alt="Image 4"></div>
        <div class="slide"><img src="/img/posts/meal-plans/graphics/gfx.datadininghalls-05.png" alt="Image 5"></div>
        <!-- Add more images as needed -->
    </div>
    <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
    <button class="next" onclick="changeSlide(1)">&#10095;</button>
</div>

UCSD, UC Berkeley and UC Davis also all offer meal plans for students living off campus. In contrast, UCLA has only recently piloted an off-campus meal plan program due to a stabilization in dining staffing levels that allows UCLA Housing to accommodate additional students within the dining halls, UCLA Housing said.

### Conclusion

UCLA’s available meal plan options necessitate students to find a balance between cost and consumption that fits their personal needs. As student expectations sometimes do not align with their actual eating patterns, it leads to wasted resources for both students and UCLA, reflecting the lifestyle change for people moving away from home. However, with time, students are often able to adjust their meal plan according to their new eating habits.

### About the Data:

Data used in this article were provided by UCLA Housing and publicly available data from UC Davis Student Dining and Housing Services, UC Berkeley Dining, and UC San Diego Housing Dining Hospitality.