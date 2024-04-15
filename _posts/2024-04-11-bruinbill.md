---
title: Breaking Down the BruinBill
teaser: How has UC cost of attendance and financial aid changed over the years? What exactly are UCLA undergraduates paying for in their BruinBill?
authors:
  - bethany_kim
  - caroline_sha
  - hannah_um
key_takeaways:
  - All UC campuses have similar increasing trends for their nominal costs of attendance.
  - The average inflation-adjusted cost of attendance for UCLA students has remained relatively stable at $23,973 since 2002.
  - The average amount of financial aid received by UCLA students has increased at a rate $567 per year CQ#1 over the past two decades.
  - Tuition and UC Student Health Insurance Plan are the largest components of the BruinBill.

featured_image:
  url: tuition-ucla/cost-of-attendance.png
  caption:
og_image:
scripts:
  - //cdn.jsdelivr.net/npm/chart.js
  # - //cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js
  - /js/posts/tuition-ucla/stacked.js
  - /js/posts/tuition-ucla/difference.js
  - /js/posts/tuition-ucla/net-cost-line-chart.js
  - //cdn.anychart.com/releases/8.12.0/js/anychart-core.min.js
  - //cdn.anychart.com/releases/8.12.0/js/anychart-treemap.min.js
  - /js/posts/tuition-ucla/tree-map.js
  - /js/posts/tuition-ucla/fin_aid_line_chart.js

stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/tuition-ucla/app.css
---

### Introduction

Pursuing a college education is a venture that costs both significant time and money. As of late, the high price of attending a four-year university has garnered attention, with issues such as student loan forgiveness and rising costs of attendance becoming major talking points among politicians.

Every two years, the UC Office of the President estimates the cost of attendance (COA), which encompasses tuition and housing along with expenses such as transportation, textbook, and health insurance costs, using responses from the biennial Cost of Attendance Survey sent to a sample of undergraduate students across the UC campuses. CQ #6 To help pay for these costs, students can receive financial aid from multiple sources, including the UC system, the state of California, and the federal government. CQ#7 The Stack explores the cost of attendance at UCLA over time and how this trend compares to other UC campuses, as well as investigating changes in financial aid received by UCLA students.

### Cost of Attendance Across UCs

<div class="cust_chart">
    <canvas id="fin-aid-stacked-bar"></canvas>
</div>
<!-- <p class = 'caption'>The bars depict the total amount of financial aid received per capita. The bars are broken down by the type of financial aid with the blue sections representing gift aid and the yellow sections representing loans. The line depicts the unadjusted net cost of attendance.</p> -->
<p class = 'byline'>Graphic reporting by Bethany Kim, Stack Intern</p>

The line on the chart above depicts the inflation-adjusted cost of attendance across all of the UC campuses. The cost of attendance has increased by almost $10,000 between 2002 and 2022. With the exception of 2012, 2014, and 2020, the COA has always increased from the previous year. CQ#5 Notably, the COA increased by almost $2,000 between 2020 and 2021, which marked a noticeable change compared to the fact that it took the previous 10 years for the COA to increase by \$2,000. CQ#5

The bars on the visualization above depict the average financial aid received by students in the UC system.

- Cal Grants are awarded based on a student’s verified high school or community college GPA, the type of California colleges you list on your FAFSA or CA Dream Act Application (i.e. UC, California State University, community college), and whether the student is a recent high school graduate. CQ#2
- Federal Pell Grants are awarded to undergraduate students who display exceptional financial need and have not earned a bachelor's, graduate, or professional degree. CQ#3
- The CA Middle Class Scholarship is awarded to California residents who are not in default on a student loan, maintain satisfactory academic progress, and have income and asset levels below a threshold. CQ#4 The Middle Class Scholarship was not created until 2014.

At first glance, it seems like financial aid increases when tuition increases and decreases when tuition decreases. To see the clear relationship between financial aid and tuition, we can take a look at the difference between the two. By taking the difference between the point on the cost of attendance line and the total height of the financial aid bars, we can calculate the out-of-pocket costs that the average UC student pays.

<div class="cust_chart">
    <canvas id='difference-line'></canvas>
</div>
<!-- <p class = 'caption'>The points were calculated by taking the difference between Cost of Attendance and Financial Aid, which results in the cost that students have to cover themselves.</p> -->
<p class = 'byline'>Graphic reporting by Bethany Kim, Stack Intern</p>

As shown in the line chart above, the out-of-pocket costs for the average UC student decreased from 2007 to 2014 before increasing until 2021. Additionally, there was a sharp decrease between 2021 and 2022, which can be attributed to a large increase in other scholarships and CA Middle Class Scholarships. (CQ We calculated this ourselves
with the financial aid data)

Over the years, there has been an increased focus on making UCLA affordable, said Marvin Smith, the executive director of UCLA Financial Aid & Scholarships.

“I would say that you see more of an increase in financial aid programs,” Smith said. “I think there's a recognition by the regents of the state of California, the University of California system, the state of California, that college access is critical and that funding is critical for students to be successful.” CQ#8

Hailey Mendelsohn, a third-year molecular, cell, and developmental biology student, said that she has looked at many different scholarships and resources to help pay for college. CQ#11 (search “FAFSA” third instance)

“It would be nice if higher education was more accessible for everyone, but there are a lot of opportunities out there to find,” said Hailey Mendelsohn, a third-year molecular, cell, and developmental biology student. CQ#11

### Comparing Cost of Attendance at UCLA with Costs of Attendance at Other UCs

<div class="cust_chart">
    <canvas id='net-cost-for-all-ucs-line-chart' style='width: 100%; height: 500px;'></canvas>
</div>
<!-- <p class = 'caption'>A comparison of the net cost for attendance across all UCs when the cost is not adjusted for inflation and when the cost is adjusted for inflation.</p> -->
<p class = 'byline'>Graphic reporting by Bethany Kim, Stack Intern</p>

<div class="cust_chart">
    <canvas id='net-cost-by-campus-line-chart' style='width: 100%; height: 500px;'></canvas>
</div>
<!-- <p class = 'caption'>The inflation-adjusted net cost of attendance for each of the UC campuses from 2002 to 2022.</p> -->
<p class = 'byline'>Graphic reporting by Bethany Kim, Stack Intern</p>

Since 2002, the overall trend for COA shares similarities across all UC schools. Adjusting for inflation reveals that tuition costs have remained relatively stable, staying within a range of $21,000 and $25,000 for the past 20 years. After increasing from 2002 to 2010, inflation-adjusted COA continued to fall over the next decade. In fact, after adjusting for inflation, the COA in 2022 was only about \$200 greater than the cost of tuition in 2002.

Comparing the COA at UCLA to other UC schools reveals that UCLA has had lower COAs than UC Santa Barbara and UC Santa Cruz for all years spanning from 2002 to 2022 and has consistently had lower COA than UC Berkeley since 2014.

### UCLA BruinBill Breakdown

As students pay their tuition, the BruinBill receipt lists all of the various fees and categories, along with respective pricings. It is a transparent process to understand how the total payment amount is calculated. However, students must go the extra mile to look into each component and understand its purpose and relevance.

Anthony Chen, a second-year data theory student, said he is familiar with the components based on what is on the receipt, and assumes documentation is available online to learn more about where the money actually goes. CQ#13 While he is correct, it proves to be difficult to find specifics about the fees and charges besides that they are related to housing, transportation, and registration. CQ#14 Thus, the best way to better understand what exactly the money is going towards is by looking at an actual bruinbill receipt posted to a student’s account.

<p class = 'caption'>Click on one of the four categories to see the fees that fall under it. Click on the grey bar to go back to the four categories.</p>
<div class="cust_chart">
    <div id='tree-map'></div>
</div>
<p class = 'byline'>Graphic reporting by Bethany Kim, Stack Intern</p>

The treemap above is based on a winter 2024 BruinBill for a sample in-state student, which should be reflective of the general costs for other in-state students. The base chart contains the major categories and clicking on a category will display the fees associated with that category.

Although not included in the above charts, housing is one of the largest expenses for most students. For students living in the dorms at UCLA, the cost is between $13,566 to stay in a three-person room in a classic residence hall with the cheapest meal plan available and $23,498 to stay in a single room in a plaza residence hall with the most expensive meal plan available. For students living in the undergraduate university apartments managed by UCLA, the cost for one academic year is between $6,883 to stay in a 1 bedroom/4 person unit and $18,561 to stay in a studio unit with one occupant. CQ#9 As for students living in apartments in Westwood, the average rent for one academic year in 2022 was $26,995 for a one-bedroom apartment, $36,000 for a two-bedroom apartment, and \$58,050 for a three-bedroom apartment. CQ#10

The \$9,918 Nonresident Supplemental Tuition that out-of-state students must pay is not pictured in the tree map.

### Financial Aid at UCLA

<div class="cust_chart">
    <canvas id='fin_aid_line_chart'></canvas>
</div>
<!-- <p class = 'caption'>The inflation-adjusted amount of financial aid recieved by UCLA students from 2002 to 2022.</p> -->
<p class = 'byline'>Graphic Reporting by Caroline Sha, Stack Intern</p>

While the amount of loans received by UCLA students has decreased since 2002, the total gift aid received by UCLA students has seen an increasing trend for the past 20 years. The amounts of UC and state aid, given by UC grants and Cal Grant respectively, have increased by nearly \$50 million each. The total amount students received from UC grants increased the most, more than doubling since 2002. Over the same period, the amount of federal aid administered through the Pell Grant has remained relatively constant.

The amount of financial aid awarded each year is dependent on a variety of factors, such as federal, state, and institutional regulations, said Smith. CQ 8 2:51-3:30 After students fill out the Free Application for Federal Student Aid (FAFSA), UCLA uses a formula-based procedure to determine whether a student is eligible for need-based financial aid. CQ 8 4:03-5:29

“We're really … trying to focus on scholarship opportunities and the funding that we can provide to students so they might be able to attend UCLA debt free,” Smith said. CQ 8 22:23-22:49

For some, the process for receiving financial aid can be confusing, especially given the number of entities that are involved with receiving financial information, calculating how much aid a student should receive, and disbursing the aid.

“For my process of getting financial aid, I had to go to a lot of different people in order to get the information that I needed for the forms. It was like a wild goose chase trying to get all of the information I needed. So if there was a way to do that, like a more centralized way to do that, that would be nice,” said Mendelsohn. CQ#12

Ricardo Vazquez, director of media relations, said that the university has outreach programs focused on providing financial aid information to underserved students, such as collaborations with community colleges that help transfer students access this information. CQ 8 20:19-20:57

### Conclusion:

When adjusted for inflation, the net cost of attendance of UCLA has remained about the same in the past two decades; the amount of financial aid received has increased over the same period. Despite this trend, students had concerns about whether the cost of attendance would increase.

“I think, generally in the future, tuition is probably going to get more expensive just due to inflation,” Chen said. “And hopefully, the California government can do some things to keep it at a rate where everyone can afford to go to college.” CQ 13 2:05-2:25

### About the Data:

All visualizations were created using a dataset from the [net cost of attendance](https://www.universityofcalifornia.edu/about-us/information-center/net-cost) published by the University of California. Only data for undergraduates was examined.
