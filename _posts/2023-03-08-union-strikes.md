---
title: ''

teaser: 

authors:
    - ananya_garg
    - tung_lin
    - mari_yamamoto
  
key_takeaways:
  - The Healthcare and Social Assistance industry had the largest number of strikes across California in the last decade
  - The UC Academic Worker strike length was 320% higher than the national average strike length, and 443% higher than California’s average strike length
  - Between 2013 and 2021, there was a 15.7% increase in post-doc salaries when adjusted for inflation.



featured_image:
  url: 
  caption: 
og_image: 

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js
  - /js/posts/union-strikes/industry_strikes_chart.js
  - /js/posts/union-strikes/strike_length.js
  - /js/posts/union-strikes/postdocwage.js
stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/union-strikes/app.css
  
---

### Introduction

On December 23, 2022, University of California academic workers ended a historic six-week strike–the biggest work stoppage at a U.S. institution of higher education. Led by the United Auto Workers (UAW) labor union, around 48,000 academic workers went on strike on November 14. TAs, researchers, tutors, and graduate student instructors, and supporters formed picket lines and staged protests, demanding better pay and benefits. On December 16, a tentative agreement was reached to increase the TA’s/Associate Instructor’s minimum 9-month salary to $36,500 by October 2024. Additionally, childcare, paid leave, and other benefits were increased under the new contract.

The Stack analyzed labor strike and wage data from the past decade to get an overview of labor strikes across California, the industries involved, and the length of strikes. We also took a closer look at UCLA’s academic worker wage data and how it has changed over time.


### Labor Strikes Across California 

Our data shows a total of 159 labor strikes across California in the last decade, with an average of 18 strikes per year and an average duration of approximately 17 days per strike.

<div class="map">
   <iframe title="Map of Union Strikes Across California, 2012-2022" aria-label="Map" id="datawrapper-chart-f9Ve0" src="https://datawrapper.dwcdn.net/f9Ve0/1/" scrolling="no" frameborder="0" style="border: none;" width="600" height="756" data-external="1"></iframe>
</div>

Above is a map of labor strikes across California between 2012 and 2022 using data of work stoppages from the Federal Mediation and Conciliation Service (FMCS). It displays the occurrence of labor strikes across California in the last 10 years - specifically looking at the unions involved, industries, the number of idled workers and the duration of strikes. 

The data shows that Oakland had the highest number of strikes in the last 10 years as well as the highest number of total idled workers. Los Angeles followed with the second highest number of strikes, however, it had only the 6th highest number of total idled workers, suggesting that strikes in LA may be frequent but smaller. 

We also wanted to see which industries had higher numbers of strikes and workers idled. 

<div class="bar-chart">
    <canvas id="Industry_Strikes_Chart"></canvas>
</div>

The Healthcare and Social Assistance industry had the largest number of strikes in California in the last 10 years at 92 strikes as well as the largest number of total idled workers.

 According to Caroline Luce, a researcher and lecturer at the UCLA Institute for Research on Labor and Employment, workers in the healthcare and education sector in particular can use strikes as leverage since they work so closely with their ‘customers’ and hence have greater power withdrawing their labor than, say, a worker in the manufacturing industry.

The Transportation and Warehousing industry followed with 17 strikes. Despite the high coverage of the recent UC higher education strike the Educational Services industry had the second least number of strikes across California within the last 10 years.

### A Comparison of the UAW Strike Length with Historical Strikes

The average strike length is 12.2 days across the country and 8.8 in California within the past decade. The 2022 UC Academic Worker strike lasted 39 days – about 320% more than the national average and 443% more than California’s average. 

“A lot of people, including me, thought it was very foolish to stop the strike before we withheld the final grades because that seemed to be the biggest leverage that we had,” Aquino said. “Not turning in final grades and trying to get instructors to, in solidarity, not submit final grades and really pinch the university.”

While this strike is the longest in the system of the University of California, the length of the strike was not unexpected. According to Taylor Aquino, a fifth year sociology PhD student, the 2021 strike at Columbia University, which lasted 59 days, set an expectation of how the strike could unfold for UC academic workers.

Starting in March 2021, Graduate Workers of Columbia University began its strike, idling a total of 177,000 days of work across about 3,000 workers, according to the Bureau of Labor Statistics. In comparison, the 2022 UC worker strike idled 1,272,000 days across about 48,000 workers. Despite these 4.9 times longer than the country average, some union members would have wanted the strike to last even longer. 

“I think that if we had been on strike for longer, then we possibly could have gotten more, maybe not more in terms of like wage bumps, but more movement on the other initiatives and other changes that many people in the union wanted to see happen,” Aquino said.

Strike lengths vary until both parties agree on a resolution. Unions with larger emergency funds – used to support their workers during the strike – may be able to bargain longer. 

<div class='line-chart'>
    <canvas id="Strike_Length_Line"></canvas>
</div>

Last year, the UAW strike lasted 39 days–71% of the total days for strikes in California’s public sector. On average, private sector workers strike longer than those in the public sector. In 2022, the average number of strike days surpassed that of the past decade in the public sector.  

### Wage Trends at UCLA

<div class="bar-chart">
  <canvas id="Wage_Chart"></canvas>
</div>

The graph above represents the wage amount averages for postdoctoral scholars at UCLA over a period of 9 years, from 2013 up to 2021. The bars on the left in dark blue represent the minimum postdoc wages set by the UAW 5810 branch, the union for postdocs and academic researchers. 

 In 2013, the lowest postdoc wage minimum (for scholars with an experience level between 0 and 11 months) was set as $39,264. The average salary for UCLA postdoc workers above this minimum for this year was $47,778.46, a 21.7% increase above the minimum. Looking at the data from 2021, we can see that the minimum wage increased by 38.9% to $54,540 and an average actual salary of $62,772.13; a percentage increase of only 15.1%. In comparing salaries between 2013 to 2021, we find an increase of 15.7% when adjusted for inflation. 

“The starting full-time annual salary for a UC lecturer puts us as low income or very low income because the cost of living is so high in the state of California,” says Luce. Hence, while there has been an increase in salaries over the last decade, rent burden was a central focus of the UAW campaign. 

In the end, the ratification vote for the UCLA contract was 60 to 40. Luce said “(The strike was) considered a successful outcome to what was an incredible effort and mobilization of one of the biggest strikes we've ever seen in the UC and in higher education.”


### About the data 

The Stack collected labor strike data from the past ten years, 2012-2022. This data was obtained from the Bureau of Labor Statistics and contained a record of the date, location, organization, strike start and stop date, days idled, and number of workers of strikes with 1000 or more workers across the nation. Notes and limitations of the data are listed below.

The data provides information on strikes that have occurred, however, Luce discussed how many contracts are ratified after strikes are called, and hence the actual strike never occurs–this deflates the number of strikes that are seen in our data.

