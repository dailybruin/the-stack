---
title: "UCLA's Most Popular Dining Halls"
teaser: The COVID-19 pandemic left campus dining halls closed for dine in on the Hill. Now that students have returned to campus, which dining halls have been the most popular among hungry Bruins?
authors:
  - nalin_chopra
  - nicole_chua
  - andre_hiwatig
  - disha_sikaria

key_takeaways:
  - Dinner is the most popular meal time for residential restaurants, whereas lunch is the most popular meal time for quick-service restaurants like The Study at Hedrick and Rendezvous. Traffic generally peaks between 6 p.m. and  7 p.m. for dining halls and between 11 a.m. and 12 p.m. for takeout locations.
  - Residential restaurants account for about 53% of the swipes used for UCLA Housing dining locations at the start of the 2021-22 school year. Quick-service restaurants accounted for the other 47%.
  - At the beginning of the 2021-22 school year, from week zero to week three, De Neve Residential Restaurant, the dining hall with the most swipes, recorded almost 118,000 swipes in 28 days. This accounted for 20% of all swipes during this period. The quick-service restaurant with the most swipes was The Study, which recorded over 116,000 swipes during the same period.
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

UCLA holds the No. 1 spot for the “2021 Best College Food in America” an annual ranking done by Niche. It has held this honor four times since 2015. With a range of options like artisanal sandwiches at The Study, to healthy, curated entrees at Bruin Plate, UCLA caters to different tastes and diets. However, some students have [criticized UCLA for its lack of halal options](https://dailybruin.com/2022/01/10/muslim-student-association-pushes-for-adequate-halal-dining-options-on-campus).

Although Café 1919 has remained closed and Feast at Rieber has only been open for pop-up kitchens during the 2021-22 school year, new eateries have opened to satisfy students’ taste buds.

Epicuria, after its renovation from the classic Covel dining hall, still features a Mediterranean-inspired concept and fresh pasta made from scratch. The Drey, housed in the newly opened Olympic and Centennial residence halls, is a new takeout option for students with refrigerated and freshly-stocked food options ranging from sandwiches to sushi to bento boxes. Bruin Bowl, another new takeout option, is located in De Neve and offers build-your-own bowls from freshly grown ingredients.

The Stack analyzed the dining halls on campus using swipe data provided by UCLA Housing for the first five weeks of fall quarter 2021. It looked at a range of factors that affect wait times including time, day and the choice of eatery.

### Where Do Students Eat?

With UCLA catering to the diverse flavors on the Hill, many Bruins hold different opinions about the best dining hall on the Hill.

Sara Beckmann, a faculty-in-residence at Saxon Suites and assistant professor of Roman archeology in the classics department at UCLA, said she goes to different dining halls depending on how she feels, but Epicuria is her favorite because there is always something there she will like.

In contrast, first-year biochemistry student Bassel Lawand said his favorite dining hall is B Plate because of their healthier options and variety of ingredients. Lawand added that his favorite time to visit would be lunch time because of the flatbreads available, which are a source of carbohydrates.

The following chart visualizes the number and proportion of swipes used at each dining hall.

<div class = 'pieCharts'>
<div class = 'pie_chart swipes'><canvas id = 'SwipesPieChart'></canvas></div>
<!-- <div class = 'pie_chart scaled'><canvas id = 'ScaledPieChart'></canvas></div> -->
</div>
<p class = 'caption'>Data for the pie charts was collected from Sep. 20, 2021 to Oct. 17, 2021.</p>

Although The Drey and Bruin Bowl brought new options to many Bruins, they recorded the least number of swipes. Additionally, Epicuria’s meal swipes also fall behind other dining halls despite its renovations.

About 53% of all swipes were recorded at the three main sit-down dining halls: Epicuria, De Neve, and B Plate. De Neve accounted for 20% of these dining hall swipes.

The other 47% of swipes were split between the five takeout locations: Rendezvous, The Study, Bruin Café, Bruin Bowl, and The Drey. The Study is currently the only takeout location open for late-night dinner from 9 p.m. to 12 a.m. Despite this, Rendezvous and The Study recorded almost the same number of swipes. Meanwhile, The Drey and Bruin Bowl were the least popular eateries, each making up only 2% of all swipe transactions.

### Traffic Trends of Dining Options

Some students have experienced long waits at The Study, which has build-your-own style items.
Second-year political science student Fabiola Favela said she once waited an hour and a half for her sandwich to be made. Regardless of these long waits at takeout locations, students continue to frequent the most popular eateries.

Beckmann said while she can cook in a kitchen to avoid the lines, most students do not have that choice.

“It’s really unfortunate to see students hungry with nowhere to go,” Beckmann said.

During fall quarter 2021, students had to wait in long lines in front of dining halls due to a [staffing shortage](https://dailybruin.com/2021/09/24/students-face-long-lines-wait-times-at-dining-halls-amid-staffing-shortage) of workers on the hill.

Beckmann said that a factor that contributes to the staffing shortage is UCLA failing to properly reward staff.

“If (staffing) gets better, the lines get shorter (and) the students get happier,” said Beckmann.

To avoid the lines, some students have taken to Reddit to ask for wait times. Additionally, UCLA Housing has recently started posting activity levels of dining halls on their menus. Activity levels are calculated by Waitz, an app showing how busy a location is based on each facility’s Bluetooth and WiFi signals.

The bar chart below compares the average number of swipes used at each dining location over 30-minute intervals. Because students can use more than one swipe at a time at takeout restaurants, the charts do not reflect head counts. Use the drop-down menu to change the day of the week. Bruin Café, Bruin Bowl and The Drey are only open for the weekdays and do not have data for weekends.

<!-- <select id="Dining-Hall"></select> -->

<select id="Day"></select>

<div class = 'bar_chart'><canvas id = 'barChart'></canvas></div>
<p class = 'caption'>Data for the line charts was collected from Sep. 20, 2021 to Oct. 17, 2021. Data for each day and each dining hall was averaged over 30-minute periods. If the average was between 0 and 1 swipe, the average was rounded up to 1.</p>

Dinner is the busiest period for the three dining halls, with traffic peaking between 6 p.m. and 7 p.m. Average traffic at the peak half-hour periods may reach over 300 swipes for the residential restaurants. De Neve, the dining hall with the most total swipes, has an average of over 350 swipes during its busiest period of 7 p.m. to 7:30 p.m. on Sundays.

For most takeout options, peak meal periods tend to be for lunch on weekdays. Traffic stays consistent throughout most of the day, except for a peak between 11 a.m. and 12 p.m.

Unlike the takeout options, day-to-day traffic patterns for The Study remain consistently high for lunch and dinner. The Study is only open for breakfast on weekdays and traffic significantly increases at around 8 a.m. and tends to peak by 9 a.m.

### Other Food Options

In response to the high wait times across all dining halls, UCLA brought food trucks that accept swipes to the Hill to attempt to reduce wait lines at other dining locations. Food trucks are on location every day from 11 a.m. to 11 p.m. but close between lunch and dinner from 3 p.m. to 5 p.m. Additionally, students are able to trade in their meal swipes for Associated Students UCLA restaurant vouchers at their residential hall front desk. The Daily Bruin was unable to acquire data about either meal swipes exchanged for food trucks or ASUCLA restaurant vouchers.

### About the Data

The Stack obtained meal plan swipe data from UCLA Housing for the period of Sep. 20, 2021 to Oct. 17, 2021. The data contained a record of each meal transaction, including the dining location, meal plan type and time stamp.
