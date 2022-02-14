---
title: "UCLA's Most Popular Dining Halls"
teaser: The COVID-19 pandemic left campus dining halls closed for dine-in on the Hill. Now that students have returned to campus, which dining halls have been the most popular amongst hungry Bruins?
authors:
  - nalin_chopra
  - nicole_chua
  - andre_hiwatig
  - disha_sikaria

key_takeaways:
  - Dinner is the most popular meal time for residential restaurants, whereas lunch is the most popular meal time for quick-service restaurants like The Study and Rendezvous. Traffic generally peaks between 6 p.m. and  7 p.m. for dining halls and between 11 a.m. and 12 p.m. for takeout places. 
  - Residential restaurants account for about 64% of the swipes used for UCLA Housing dining locations at the start of the school year 2021-2022. Quick-service restaurants accounted for the other 36%.
  - At the beginning of the 2021-22 school year, from week 0 to week 3, De Neve, the residential restaurant with the most swipes, recorded 119,835 swipes in 23 days. The quick-service restaurant with the most swipes was The Study at Hedrick which recorded 117,463 swipes during the same period. 
featured_image:
  url: 
  caption: 
og_image: 

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  - //ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
  - //d3js.org/d3.v6.min.js
  - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js
  - //cdn.rawgit.com/Keyang/node-csvtojson/d41f44aa/browser/csvtojson.min.js
  - /js/posts/dining-halls/piechart.js
  - /js/posts/dining-halls/busyness-barchart.js

stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/dining-halls/styles.css
---
### Introduction
UCLA has held the No. 1 spot for the “Best College Food in America” for four years. (CQ #1) With a range of options like artisanal sandwiches at The Study at Hedrick, to healthy, curated entrees at Bruin Plate, UCLA caters to different cultural foods and diets. 

Although some dining halls like Feast at Rieber and Cafe 1919 have not reopened for the 2021-22 school year, new eateries have opened for students to satisfy their taste buds. (CQ #2) 

Epicuria, after its renovation from the classic Covel, still features a Mediterranean-inspired concept and fresh pasta made from scratch. The Drey is a new takeout option for students, housed in the newly opened Olympic and Centennial residence halls with a range of refrigerated (freshly stocked) food ranging from sandwiches to sushi and bento boxes to sausage sandwiches. (CQ#3) Bruin Bowl is also a new takeout option offering build-your-own bowls from freshly grown ingredients. (CQ#4) 

The Stack analyzes the dining halls on campus using swipe data provided by UCLA Housing for  the first five weeks of fall quarter 2021. We look at a range of factors that affect wait times including time, day, and the choice of eatery. 

### Where Do Students Eat? 
With UCLA caters to a diverse range of tastes, many Bruins hold different opinions about the best dining hall on the Hill. 

“Universally, if I go into a dining hall, and I don't know what's going on, I'm always happy at Epic,” said Sara Beckmann (CQ #14), a faculty-in-residence at Saxon suites and assistant professor of Roman archeology in the Classics department at UCLA. (CQ #6)

In contrast, first-year biochemistry student, Bassel Lawand, said his (CQ #15) favorite dining hall is B-Plate because of their diverse range of ingredients. Lawand added that his favorite time to visit would be lunch time because of their flatbreads, which are a good source of carbohydrates. (CQ #7) 

We analyzed how many swipes were used at each dining hall and determined the proportion of swipes at each of them. All the percentages are visualized in the pie chart below.


<div class = 'pieCharts'>
<div class = 'pie_chart'><canvas id = 'SwipesPieChart'></canvas></div>
<div class = 'pie_chart'><canvas id = 'ScaledPieChart'></canvas></div>
</div>
<p class = 'caption'>Data for the pie charts was collected from September 24, 2021 to October 17, 2021.</p>

Although The Drey and Bruin Bowl brought new options to many Bruins, they recorded the least number of swipes. Additionally, Epicuria also falls behind other dining halls, despite its reopening in fall 2021 after renovations.

About 64% of all swipe data was recorded at the three main sit-down dining halls: Epicuria, De Neve, and B-Plate. De Neve accounted for more than a third of these dining hall swipes. 

The other 36% of swipes were attributed to the five takeout locations: Rendezvous, The Study, Bruin Café, Bruin Bowl, and The Drey. The Study is currently the only takeout location open for late-night dinner from 9 p.m. to 12 a.m.. Despite this, Rendezvous and The Study recorded almost the same number of swipes. Meanwhile, The Drey and Bruin Bowl were the least popular eateries, each making up 2% of all swipe data.

The scaled pie chart shows how many swipes were used at each location based on the number of hours they were open per week. Although Rendezvous recorded less meal swipes than The Study in this time period, Rendezvous had 582 more swipes per hour than The Study. 

The scaled pie chart also shows that Epicuria and De Neve recorded a relatively similar rate of meal swipes even though De Neve had 28733 more swipes during this period.

### Traffic Trends of Dining Options

Some students have experienced long waits at The Study, which has build-your-own style items. 
Second year political science and government student, Fabiola Favela said that she once waited an hour and a half for her sandwich to be made. (CQ #8) Regardless of these long waits at takeout locations, students continue to frequent the most popular eateries.

During fall quarter 2021, the Daily Bruin covered long lines at the dining halls and the staffing shortage.(https://dailybruin.com/2021/09/24/students-face-long-lines-wait-times-at-dining-halls-amid-staffing-shortage). 

Beckmann said she finds the lines frustrating from a student’s perspective. 

“It’s really unfortunate to see students hungry with nowhere to go,” she said. (CQ #11)

Beckman said that one factor that contributes to long lines may be the labor shortage. Staff who have worked for UCLA for a long time have not been rewarded, adding to the staffing shortage.
(CQ# 12)

“Because if [staffing] gets better, the lines get shorter, the students get happier,” Beckmann said. (CQ #12)

To avoid the lines, some students have taken to asking for wait time on Reddit. Additionally, UCLA Housing has recently incorporated activity levels into their menus. Activity levels are calculated by Waitz, which scans each facility’s Bluetooth and WiFi signals. 

The bar chart below compares the average number of swipes in half hour intervals for each dining hall each day. Note that students can use more than one swipe at a time at takeout restaurants,  so the charts for takeout options do not reflect head count. Use the drop-down menu to change the day of the week. Bruin Café, Bruin Bowl and The Drey are only open for the weekdays and do not have data for weekends.


<!-- <select id="Dining-Hall"></select> -->
<select id="Day"></select>
<div class = 'bar_chart'><canvas id = 'barChart'></canvas></div>
<p class = 'caption'>Data for each day and each dining hall was averaged over half hour periods. If the average was between 0 and 1 swipe the average was rounded up to 1. </p>

The busiest meal period for the three dining halls is dinner, with traffic that tends to taper off before and after it peaks from 6 p.m. to 7 p.m. Average traffic at peak half hour periods may reach over 300 swipes for the residential restaurants. De Neve, the dining hall with the most total swipes has an average of over 350 swipes during its busiest period, 7 p.m. to 7:30 p.m. on Sundays.  

For most takeout options, peak meal periods tend to be for lunch on weekdays. The traffic pattern is relatively uniform except for a lunch peak from 11a.m. to 12 p.m. that generally decreases over the meal period. 

Unlike the other options, day to day traffic patterns for The Study remain consistently high for lunch and dinner. The Study is only open for breakfast on weekdays and traffic experiences a significant increase around 8 a.m. and tends to peak by 9 a.m. 

### Other Food Options
In response to the high wait times across all dining halls, UCLA incorporated food trucks to attempt to reduce wait lines at other dining halls.  Food trucks are on location every day from 11 a.m. to 11 p.m.. (CQ# 9)We have been unable to acquire data about collected meal swipes for food trucks. Additionally, students are able to trade in their meal swipes for ASUCLA restaurant vouchers at their residential hall front desk.  (CQ #10) 



### About the Data
The dining hall swipe data from September 24, 2021 to October 17, 2021, was obtained from UCLA Housing. All meal transactions during this time period were recorded along with their times and locations.
