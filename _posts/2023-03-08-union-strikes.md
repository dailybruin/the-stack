---
title: ''

teaser: 

authors:
    - ananya_garg
    - tung_lin
    - mari_yamamoto
  
key_takeaways:
  - 


featured_image:
  url: 
  caption: 
og_image: 

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js
  - /js/posts/union-strikes/postdocwage.js
  - /js/posts/union-strikes/strike_length.js
  
---

### Introduction

On December 23, 2022, University of California academic workers ended a historic six-week strike–the biggest work stoppage at a U.S. institution of higher education. Led by the United Auto Workers (UAW) labour union, around 48,000 academic workers, including TAs, researchers, tutors, and graduate student instructors, went on strike for better pay and benefits on November 14, forming picket lines and staging protests. On December 16, a tentative agreement was reached to increase minimum pay from $23,250 to $36,500 for nine months of part-time work for UCLA academic workers, as well as enhanced child care reimbursements and healthcare for dependents. 

The Stack analyzed labor strike and wage data from the past decade to get an overview of labor strikes across California, the industries involved, and the length of strikes. We also take a closer look at UCLA’s academic worker wage data and how it has changed over time.


### Labor Strikes Across California 

Our data shows a total of 159 labor strikes across California in the last decade, with an average of 18 strikes per year, and an average duration approximately 17 days per strike.

<div class="map">
   <iframe title="Map of Union Strikes Across California, 2012-2022" aria-label="Map" id="datawrapper-chart-f9Ve0" src="https://datawrapper.dwcdn.net/f9Ve0/1/" scrolling="no" frameborder="0" style="border: none;" width="600" height="756" data-external="1"></iframe>
</div>


We first aimed to get a picture of the occurrence of labor strikes across California in the last 10 years - specifically looking at the unions involved, industries, the number of idled workers, and the duration of strikes. Above is a map of labor strikes across California between 2012 and 2022 using data of work stoppages from the Federal Mediation and Conciliation Service (FMCS). 

The data shows that Oakland had the highest number of strikes in the last 10 years as well as the highest number of total idled workers. Los Angeles followed with the second highest number of strikes, however, it had only the 6th highest number of total idled workers, suggesting that perhaps strikes in LA may be frequent but smaller. 

We also wanted to see which industries had higher numbers of strikes and workers idled. The Healthcare and Social Assistance industry had the largest number of strikes in California in the last 10 years as per the dataset at 92 strikes as well as the largest number of total idled workers. The Transportation and Warehousing industry followed with 17 strikes. However, despite the high coverage of the recent UC higher education strike, within the last 10 years, the Educational Services industry had the second least number of strikes across California. 

<div class="bar graph">
    <iframe title="Number of Strikes by Industry between 2012-2022" aria-label="Column Chart" id="datawrapper-chart-lbxk9" src="https://datawrapper.dwcdn.net/lbxk9/2/" scrolling="no" frameborder="0" style="border: none;" width="800" height="600" data-external="1"></iframe>
</div>

The average strike length is 12.2 days across the country and 8.8 in California within the past decade. The 2022 UC Academic Worker strike lasted 39 days – about 320% more than the national average and 443% more than California’s average. 

While this strike is the longest in the system of the University of California, the length of the strike was not unexpected. According to Taylor Aquino, a fifth year sociology PhD student, the 2021 strike at Columbia University set an expectation of how the strike could unfold for UC academic workers.

Starting in March 2021, Graduate Workers of Columbia University began its strike, idling a total of 177,000 days of work across about 3,000 workers, according to the Bureau of Labor Statistics. In comparison, the 2022 UC worker strike idled 1,272,000 days across about 48,000 workers. Despite these unprecedented numbers, some union members would have wanted the strike to last even longer. 

“I think that if we had been on strike for longer, then we possibly could have gotten more, maybe not more in terms of like wage bumps, but more movement on the other initiatives and other changes that many people in the union wanted to see happen,” Aquino said. 

Strike lengths vary until both parties agree on a resolution. Unions with larger emergency funds – used to support their workers during the strike – may be able to bargain longer. 

<div class="line-chart">
    <canvas id="sector_bar"></canvas>
</div>

Last year, the 2022 UAW strike contributed 71% of strike days in California’s public sector. On average, private sector workers strike longer than those in the public sector. In 2022, the average number of strike days surpassed that of the past decade in the public sector. 

With every strike, there is a sudden decrease in labor activity. Striking in the healthcare industry has life and death stakes, in which Section 8(g) of the National Labor Relations Act prohibits striking in a healthcare setting without a 10 day notice. In a university, the research, teaching, and grading can halt.

“A lot of people, including me, thought it was very foolish to stop the strike before we withheld the final grades because that seemed to be the biggest leverage that we had,” Aquino said. “Not turning in final grades and trying to get instructors to, in solidarity, not submit final grades and really pinch the university.” 

### Wage Trends at UCLA

<div class="bar-chart-2">
  <canvas id="Wage_Chart"></canvas>
</div>

The graph above represents the wage amount averages for postdoctoral scholars at UCLA over a period of 9 years, from 2013 up to 2021. The bars on the left in dark blue represent the minimum postdoc wages set by the UAW 5810 branch, the union for postdocs and academic researchers. 

In 2013, the lowest postdoc wage minimum (for scholars with an experience level between 0 and 11 months) was set as $39,264. The average salary for UCLA postdoc workers above this minimum for this year was $47,778.46, a 21.7% increase above the minimum. Looking at the data from 2021, we can see that the minimum wage increased by 38.9% to $54,540 and an average actual salary of $62,772.13; a percentage increase of only 15.1%. In comparing salaries between 2013 to 2021, we find an increase of 15.7% when adjusted for inflation. 


### About the data 

The Stack collected data from the past ten years, 2012-2022. This data was obtained from the Bureau of Labor Statistics and contained a record of the date, location, organization, strike start and stop date, days idled, and number of workers of strikes with 1000 or more workers across the nation. Notes and limitations of the data are listed below.
