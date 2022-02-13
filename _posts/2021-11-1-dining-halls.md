---
title: "Dining Halls Article"
teaser: The COVID-19 pandemic left campus dining halls empty. Now that students have returned to campus, which dining halls have been the most popular amongst hungry Bruins?
authors:
  - nalin_chopra
  - nicole_chua
  - andre_hiwatig
  - disha_sikaria

key_takeaways:
  - 
  - Traffic generally peaks between 6 p.m. and  7 p.m. for dining halls and between 11 a.m. and 12 p.m. for takeout options.
  - At the beginning of the 2021-22 school year, De Neve, the dining hall with the most swipes,  recorded 119,835 swipes. The takeout restaurant with the most swipes was The Study at Hedrick which recorded 117,463 swipes.

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
UCLA has held the No. 1 spot for the “2021 Best College Food in America” rankings for four years. With a range of options like artisanal sandwiches at The Study at Hedrick, to healthy, curated entrees at Bruin-Plate, UCLA caters to different cultural foods and diets. 

Although some dining halls like Feast at Rieber and Cafe 1919 have not reopened for the 2021-22 school year, new eateries have opened for students to satisfy their taste buds. Epicuria, after its renovation from the classic Covel, still features a Mediterranean-inspired concept and fresh pasta made from scratch. The Drey is a new takeout option for students, housed in the newly opened Olympic and Centennial residence halls with a range of refrigerated (freshly stocked) food ranging from sandwiches to sushi and bento boxes to sausage sandwiches. Bruin Bowl is also a new takeout option offering build-your-own bowls from freshly grown ingredients. The menu rotates each week, allowing students to experiment with different combinations of vegetables and proteins. Some weekly themes include Mediterranean, Pan Asian, and Indian. 

The Stack analyzes the dining halls on campus using swipe data provided by UCLA Housing for  the first five weeks of fall quarter 2021. We look at a range of factors that affect wait times including time, day, and the choice of eatery. 

### Where Do Students Eat? 
Because UCLA caters to a diverse range of tastes, many Bruins hold different opinions about the best dining hall on the Hill.

First-year Marianne Gutierrrez said she loves Epicuria for its reliability. Gutierrez said that she could go to Epicuria without looking at the menu, knowing that she would enjoy something there. 

Sarah Beckmann, a faculty-in-residence said “universally, if I go into a dining hall, and I don't know what's going on, I'm always happy at Epic”.

In contrast, first-year Bassel Lawand’s favorite dining hall is B-Plate because of their diverse range of ingredients. Lawand said that his favorite time to visit would be lunch time because of their flatbreads, which are a good source of carbohydrates. 

“Just by the fact I go there for breakfast, lunch, and dinner most days of the week goes to show that it has the best selection of food if you wanna like not give yourself cardiac arrest,” said  Lawand.

We analyzed how many swipes were used at each dining hall and determined the proportion of swipes at each of them. All the percentages are visualized in the pie chart below.

<div class = 'pieCharts'>
<div class = 'pie_chart'><canvas id = 'SwipesPieChart'></canvas></div>
<div class = 'pie_chart'><canvas id = 'ScaledPieChart'></canvas></div>
</div>
<p class = 'caption'>Data for the pie charts was collected from September 24, 2021 to October 17, 2021</p>
Although The Drey and Bruin Bowl are new additions this year, they are not leading the takeout options in popularity. Additionally, Epicuria also falls behind other dining halls, despite its reopening in fall 2021 after renovations.

About 64% of all swipe data was recorded at the three main sit-down dining halls: Epicuria, De Neve, and B-Plate. De Neve accounted for more than a third of these dining hall swipes. 

The other 36% of swipes were attributed to the five takeout locations: Rendezvous, The Study, Bruin Café, Bruin Bowl, and The Drey. The Study is currently the only takeout location open for late-night dinner, 9 p.m. to 12 a.m.. Despite this, Rendezvous and The Study recorded almost the same number of swipes. Meanwhile, The Drey and Bruin Bowl were the least popular eateries, making up 2% of all swipe data.

### Traffic Trends of Dining Options
UCLA Housing has recently incorporated activity levels into their menus. Activity levels are calculated by Waitz, which scans each facility’s Bluetooth and WiFi signals. 

Some students have experienced long waits at The Study, which has build-your-own style items said second-year Fabiola Favela. Favela said that she “definitely did [wait] an hour and a half one time” for her sandwich to be made. Regardless of these long waits at takeout locations, students continue to frequent the most popular eateries.

Beckmann said she finds the lines frustrating from a student’s perspective, saying that it’s “really unfortunate to see students hungry with nowhere to go”. 

Beckman said that one factor that contributes to long lines may be the labor shortage. Staff who have worked for UCLA for a long time have not been rewarded, adding to the staffing shortage.

“Because if \[staffing\] gets better, the lines get shorter, the students get happier.” said Beckmann. 

The bar chart below compares the average number of swipes in half hour intervals for each dining hall each day. semi-hourly traffic trends modeledmodelled on swipe data for each dining option per day. Note that takeout options accept more than one swipe per person while dining halls only take one so the charts for takeout options do not reflect head count. Use the drop-down menus to change dining options and day of the week. Bruin Cafée, Bruin Bowl and The Drey are only open for the weekdays and do not have data for weekends.

<select id="Dining-Hall"></select>
<select id="Day"></select>
<div class = 'bar_chart'><canvas id = 'barChart'></canvas></div>

The busiest meal period for the three dining halls is dinner with traffic that tends to taper off before and after it peaks from 6 p.m. to 7 p.m. Average semi-hourly traffic at peak half hour periods may reach over 300 swipes for the main dining halls. De Neve, the dining hall with the most total swipes has over XXXX swipes during it’s busiest period XXX day at XXX time. between 250 swipes to over 300 swipes/people for B-Plate, 300 to over 350 for De Neve and 300 to over 350 (400 for Sunday) for Epicuria. 

FAs for most takeout options, like Rendezvous, The Drey, Bruin Bowl, and Bruin Cafée, peak meal periods tend to be for lunch on weekdays. The traffic pattern is relatively uniform except for a lunch peak from 11a.m. to 12 p.m. that generally decreases over the meal period. 

Unlike the other options, The day to day traffic patterns for The Study remain consistently high and uniform for lunch and dinner. For breakfast, traffic experiences a significant increase aroundfrom 8 a.m. onwards and tends to peak by 9 a.m.

### Other Food Options
In response to the high wait times across all dining halls, UCLA incorporated food trucks to attempt to reduce wait lines at other dining halls.  Food trucks are on location every day from 11 AM to 11PM. We have been unable to acquire data about collected meal swipes for food trucks. Additionally, students are able to trade in their meal swipes for ASUCLA restaurant vouchers at their residential hall front desk.  



### About the Data
The dining hall swipe data for Fall 2021 was obtained from UCLA Housing. 
