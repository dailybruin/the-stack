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
  - At the beginning of the 2021-22 school year, from week 0 to week 3, De Neve, the residential restaurant with the most swipes, recorded almost 120,000 swipes in 23 days. This accounted for 20% of all swipes during this period. The quick-service restaurant with the most swipes was The Study at Hedrick which recorded over 117,000 swipes during the same period. 
featured_image:
  url: dining-halls/featured_image.png
  caption: (Ashley Ko/Daily Bruin Staff)
og_image: dining-halls/feature_image.png

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
 UCLA holds the No. 1 spot for the “2021 Best College Food in America” an annual ranking done by Niche. It has held this honor four times since 2015. (CQ #1) With a range of options like artisanal sandwiches at The Study at Hedrick, to healthy, curated entrees at Bruin Plate, UCLA caters to different tastes and diets. However, some [students](https://dailybruin.com/2022/01/10/muslim-student-association-pushes-for-adequate-halal-dining-options-on-campus) have criticized UCLA for its lack of Halal options.  


Although some dining halls like Feast at Rieber and Cafe 1919 have remained closed for the 2021-22 school year, new eateries have opened to satisfy students’ taste buds. (CQ #5) 

Epicuria, after its renovation from the classic Covel, still features a Mediterranean-inspired concept and fresh pasta made from scratch(CQ#2). The Drey is a new takeout option for students, housed in the newly opened Olympic and Centennial residence halls with a range of refrigerated freshly stocked food ranging from sandwiches to, sushi and bento boxes to sausage sandwiches. (CQ#3) Bruin Bowl, another new takeout option, is located in De Neve and offers build-your-own bowls from freshly grown ingredients. (CQ#4) 

The Stack analyzed the dining halls on campus using swipe data provided by UCLA Housing for  the first five weeks of fall quarter 2021. It looks at a range of factors that affect wait times including time, day, and the choice of eatery. 

### Where Do Students Eat? 
With UCLA catering to the diverse flavors on the Hill, many Bruins hold different opinions about the best dining hall on the Hill. 

Sara Beckmann, a faculty-in-residence at Saxon suites and Assistant Professor of Roman archeology in the classics department at UCLA (CQ #13) said she goes to different dining halls depending on how she feels, but that Epicuria is her favorite because there is always something there she will like. (CQ #6)

In contrast, first-year biochemistry student, Bassel Lawand, said his (CQ #15) favorite dining hall is B-Plate because of their healthier options and variety of ingredients. Lawand added that his favorite time to visit would be lunch time because of their flatbreads, which are a source of carbohydrates. (CQ #7) 

The following chart visualizes the number and proportion of swipes used at each dining hall. 


<div class = 'pieCharts'>
<div class = 'pie_chart swipes'><canvas id = 'SwipesPieChart'></canvas></div>
<div class = 'pie_chart scaled'><canvas id = 'ScaledPieChart'></canvas></div>
</div>
<p class = 'caption'>Data for the pie charts was collected from September 24, 2021 to October 17, 2021. To find swipes per hour, we divided by the number of hours each hall was listed as open on the dining webpage.</p>

Although The Drey and Bruin Bowl brought new options to many Bruins, they recorded the least number of swipes. Additionally, Epicuria’s meal swipes also fall behind other dining halls, despite its renovations.

About 64% of all swipe data was recorded at the three main sit-down dining halls: Epicuria, De Neve, and B-Plate. De Neve accounted for more than a third of these dining hall swipes. 

The other 36% of swipes are divided by the five takeout locations: Rendezvous, The Study, Bruin Café, Bruin Bowl, and The Drey. The Study is currently the only takeout location open for late-night dinner from 9 p.m. to 12 a.m.. Despite this, Rendezvous and The Study recorded almost the same number of swipes. Meanwhile, The Drey and Bruin Bowl were the least popular eateries, each making up 2% of all swipe data.

The scaled pie chart shows how many swipes were used at each location based on the number of hours they were open per week. Although Rendezvous recorded less meal swipes than The Study in this time period, Rendezvous had 582 more swipes per hour than The Study. 

The scaled pie chart also shows that Epicuria and De Neve recorded a relatively similar rate of meal swipes even though De Neve had 28,733 more swipes during this period.

### Traffic Trends of Dining Options

Some students have experienced long waits at The Study, which has build-your-own style items. 
Second year political science and government student, Fabiola Favela(CQ #16) said that she once waited an hour and a half for her sandwich to be made. (CQ #8) Regardless of these long waits at takeout locations, students continue to frequent the most popular eateries.

Beckmann said that while she avoids the lines because she has a kitchen to cook in, most students do not have that choice. 

“It’s really unfortunate to see students hungry with nowhere to go,” Beckmann said. (CQ #11) 

During fall quarter 2021, students had to wait in long lines in front of dining halls due to a [staffing shortage](https://dailybruin.com/2021/09/24/students-face-long-lines-wait-times-at-dining-halls-amid-staffing-shortage) of workers on the hill. 

Beckmann said that a factor that contributes to the staffing shortage is UCLA failing to properly reward staff.

“If [staffing] gets better, the lines get shorter, the students get happier,” said Beckmann. (CQ #12)

To avoid the lines, some students have taken to Reddit to ask for wait times. Additionally, UCLA Housing has recently started posting activity levels of dining halls on their menus. Activity levels are calculated by Waitz, an app to show how busy a given location is based on each facility’s Bluetooth and WiFi signals (CQ #17). 

The bar chart below compares the average number of swipes at each dining hall by half hour intervals. Because students can use more than one swipe at a time at takeout restaurants, the charts do not reflect head counts. Use the drop-down menu to change the day of the week. Bruin Café, Bruin Bowl and The Drey are only open for the weekdays and do not have data for weekends.


<!-- <select id="Dining-Hall"></select> -->

<select id="Day"></select>

<div class = 'bar_chart'><canvas id = 'barChart'></canvas></div>
<p class = 'caption'>Data for each day and each dining hall was averaged over half hour periods. If the average was between 0 and 1 swipe the average was rounded up to 1. </p>

Dinner is the busiest period for the three dining halls, with traffic peaking between 6 p.m. and 7 p.m. Average traffic at the peak half hour periods may reach over 300 swipes for the residential restaurants. De Neve, the dining hall with the most total swipes has an average of over 350 swipes during its busiest period, 7 p.m. to 7:30 p.m. on Sundays.  

For most takeout options, peak meal periods tend to be for lunch on weekdays. Traffic stays consistent throughout most of the day, except for a peak between 11 a.m. and 12 p.m.

Unlike the take-out options, day to day traffic patterns for The Study remain consistently high for lunch and dinner. The Study is only open for breakfast on weekdays and traffic significantly increases at around 8 a.m. and tends to peak by 9 a.m. 

### Other Food Options
In response to the high wait times across all dining halls, UCLA incorporated food trucks to attempt to reduce wait lines at other dining halls.  Food trucks are on location every day from 11 a.m. to 11 p.m., but close between lunch and dinner, from 3 p.m. to 5 p.m. (CQ# 9) Additionally, students are able to trade in their meal swipes for ASUCLA restaurant vouchers at their residential hall front desk. The Daily Bruin was unable to acquire data about collected meal swipes at food trucks nor ASUCLA restaurant vouchers. (CQ #10) 



### About the Data
UCLA Housing shared dining hall swipe data from September 24, 2021 to October 17, 2021, for the analysis. Housing recorded all meal transactions during this time along with their times and locations.
