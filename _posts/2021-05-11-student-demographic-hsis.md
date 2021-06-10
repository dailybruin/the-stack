---
title: Exploring UCLA’s journey to becoming a Hispanic-Serving Institution
teaser: UCLA has set a goal to be an HSI by 2025. What does that mean for the university?
authors:
  - priya_kanneboyina
  - mansa_krishna
  - samantha_low
  - lindsey_parungo
key_takeaways:
  - Although the data does not show a significant increase in grant funding after a University of California school reaches HSI designation, the pool of grant money dedicated to supporting HSIs gives great potential for millions of dollars in future grant funding from federal agencies.
  - While UCLA has one of the highest Latino graduation rates in the UC system, the gap between white and Latino graduation rates is higher than at almost all the HSI-designated UC schools.
  - At the current pace, UCLA would not reach the requisite 25% Latino undergraduate population until 2029, but with targeted outreach, UCLA could potentially achieve its goal of being an HSI by 2025.

featured_image:
  url: student-demographics-hsis/cover_image.png
og_image: student-demographics-hsis/cover_image.png
stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/student-demographics-hsis/app.css
scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  - //ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
  - //d3js.org/d3.v6.min.js
  - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js
  - //cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/0.5.5/chartjs-plugin-annotation.min.js
  - /js/posts/student-demographic-hsis/graduation-rates.js
  - /js/posts/student-demographic-hsis/graduation-rates-change.js
  - /js/posts/student-demographic-hsis/graduation-rates-gap.js
  - https://unpkg.com/react@16/umd/react.development.js
  - https://unpkg.com/react-dom@16/umd/react-dom.development.js
  - https://unpkg.com/babel-standalone@6/babel.min.js
  - https://unpkg.com/react-vis/dist/dist.min.js
  - https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js
  - /js/posts/student-demographic-hsis/graduation-rates.js
  - /js/posts/student-demographic-hsis/DOEviz.js
  - /js/posts/student-demographic-hsis/TotalViz.js
  - /js/posts/student-demographic-hsis/grad-rate-gaps.js
  - /js/posts/student-demographic-hsis/hsis-predict-undergrad.js
  - /js/posts/student-demographic-hsis/hsis-predict.js
---

### Introduction

Even though Los Angeles’ population is 48.5% Hispanic or Latino, UCLA fails to reflect this and is 18% Hispanic/Latino. However, recent efforts by UCLA to become a Hispanic-Serving Institution may change that. Having a greater Latino population would make it so that UCLA better reflects the demographics of the surrounding Los Angeles community.

"UCLA is in the middle of Los Angeles, so it makes sense for it to reflect the actual demographics of LA, which it doesn't right now,” said Sam Mazariegos, a third-year human biology and society student.

On Dec. 20, Chancellor Gene Block announced that UCLA planned to become an HSI by 2025. This designation would be given by the U.S. Department of Education if UCLA’s student population comprised at least 25% Latino students and would be accompanied by a range of new grants from the federal government that UCLA could qualify for. In his announcement, Block noted that these new grant qualifications could assist in strengthening education programs and benefiting Latino students at UCLA.

Block’s letter to the community on Dec. 7 said, “research has shown that HSI designation strengthens interracial relations among all students, improves academic performance and attendance of students of color, and increases their likelihood of graduation.” Currently, the graduation rate of Latino students at UCLA is 86.78% and the average for all students is 91.5%.

“I always felt kind of out of place in the student body because I didn’t see a lot of Latinx students in my classes and in my own major,” said Yesenia Flores, a second-year art student who is Mexican American.

In this article, The Stack looks into UCLA’s goal to become an HSI, how UCLA stacks up against other UC schools with HSI designations and if graduation rates for Latino students improve with an HSI designation. We also take a look at the grant allocations for HSIs and how much grant funding UCLA may receive from an HSI status.

### The Story in Graduation Rates

With an HSI designation, many are hoping that UCLA will not just admit students but also help them thrive. After hearing about UCLA’s goals to become an HSI by 2025, Mazariegos hoped the school might be able to have more cultural competency, accessibility and more resources to help Latino students succeed at UCLA.

“It’s a good step forward, but I just hope that they actually follow through with it and start giving resources to the Latinos on campus to get to graduation and to be successful,” said Mazariegos.

Graduation rates are one marker of how well a school supports students beyond admissions.

Looking at the graphs below, UCLA has on average the highest Latino graduation rate (86.08%) compared to the other UC schools from 2011 to 2019. UCLA’s yearly Latino graduation rates have not changed significantly since 2011 while some HSI’s such as UC Santa Barbara and UC Riverside have experienced increased Latino graduation rates. However, variables such as the selectivity of institutions and their support for Latino students can be confounded when looking purely at graduation rates and changes in graduation rates. Another metric that can be evaluated is the gap between white and Latino graduation rates. From 2011 to 2019, white graduation rates were on average 5.4% higher than Latino graduation rates at UCLA – a larger gap than at all current UC HSIs, including UC Santa Cruz (5.21%), UC Irvine (4.72%), UC Merced (0.63%) and UC Riverside (1.27%), with the exception of UC Santa Barbara (6.64%).

Sylvia Hurtado, a professor of education, said UCLA must have programming to address student completion so that every student admitted graduates.

<div class ="rate-line">
  <canvas id="grad-rate-line"></canvas>
  <div class= "caption">
The dotted lines show the average graduation rate for Latino students for each school from 2011-2019.
</div>
</div>

<div class ="rate-change">
  <canvas id="grad-rate-change"></canvas>
</div>

<div class ="rate-gap">
  <canvas id="grad-rate-gap"></canvas>
</div>

### Changes in Grant Funding

One major aspect of an HSI designation is being qualified for a large range of grants that are to be used “to expand educational opportunities for, and improve the attainment of, Hispanic students,” according to Block’s Dec. 7 message about UCLA’s HSI goal.

The graphs below show the amount of grant money that each campus in the UC system received per student each year. Most grants reliant on HSI designation come from federal sources. There does not appear to be a large immediate correlation between reaching HSI designation and receiving a large increase in funding even when only federal grants are considered.

<div class = "DOEViz">
        <canvas id="DOEChart"></canvas>
</div>

<div class = "TotalViz">
<canvas id = "TotalChart"></canvas>
</div>

<script src = "C:/Users/Lindsey/Desktop/Daily-Bruin/the-stack/js/posts/student-demographic-hsis/TotalViz.js"></script>

<script src = "C:/Users/Lindsey/Desktop/Daily-Bruin/the-stack/js/posts/student-demographic-hsis/DOEviz.js"></script>

Looking at the graphs above, it first seems as though being an HSI does not have a significant impact on the amount of federal grants that each university receives. However, Hurtado said grants awarded to schools with HSI designation can have a significant impact.

“That’s a lot of money focused on programming to all support student success,” Hurtado said regarding UC Santa Cruz’s receiving more than \$10 million in grants since becoming an HSI in 2012.

Mazariegos says she hopes more grant funding will lead to better and more accessible programs from the administration, noting that while resources are there, they're often hard to find.

"Latino students have a good amount of resources to go to, but a lot of them are student led. So it doesn’t feel like the administration is really playing a big role in them or even funding them as much as they should," Mazariegos said.

Because an HSI designation allows colleges and universities to apply for a variety of grants, there is a greater potential for funding.

“We could get many, many, many millions of dollars once we reach that designation,” said Alfred Herrera, assistant vice provost for academic partnerships at UCLA.

In his announcement, Block said UCLA will use grant money to strengthen educational programs and support Latino communities.

Hurtado said this money could be used for faculty development, developing active learning classrooms and pipeline programs to encourage students from high schools and community colleges.

### Projected Growth Rate of the Hispanic Student Population at UCLA

After analyzing the growth trends of the Latino student population at UCLA from 2000-2020, there appears to be a steady increase in the percentage of Latino students. In order to become an HSI, UCLA would need undergraduate enrollment that is at least 25% Latino students. However, with the current rate of growth of 0.41% increase per year, the undergraduate Latino student population would reach 25% of the undergraduate student population in 2029 while the total Latino student population would reach 25% after 2040, well past the target year of 2025.

The graphs below show UCLA’s historic growth in its Latino student population and a projection if the growth rate remains constant. The trendline is computed using a linear least squares regression model. The projection is a continuation of this model if the rate remains constant. The threshold line is at 25%, which is the required percentage of Latino students to qualify for the HSI designation. The graph on the left looks solely at undergraduate data while the graph on the right looks at total student population. The threshold only applies to undergraduate enrollment.

“A lot of students are really competent and capable in predominantly Latinx high schools,” said Flores when asked if she thinks UCLA could reach their HSI goal by 2025. “If they are actually going to connect with high schools that have populations that are predominantly Latinx then it’s possible.”

Hurtado said that 2025 was a good goal for UCLA. Hurtado added that in order to achieve the goal, UCLA needs more focus on freshman and transfer admissions and making sure that UCLA is improving in terms of admission and completion.

<div class = 'undergrad-predict'>
  <canvas id = 'HSIS_Projection_Undergrad'></canvas>
</div>

<div class = 'total-predict'>
  <canvas id = 'HSIS_Projection'></canvas> 
</div>

<div class='small-line-break'></div>

### Conclusion

“The only colleges I ever saw reaching out to my high school were community colleges,” said Flores, who attended a predominantly Latinx high school. “I think UCs are always scary, especially if you come from a high school where you’re like, ‘Oh, only three people got admitted last year.’ It’s really discouraging. So I think that in that sense, (UC schools) haven’t done a good job at presenting themselves as an option for those students.”

Hurtado and Herrera both said that the HSI goal is student-focused.

“All students do well at HSIs – it’s not just Latino students,” said Herrera.

There is optimism and excitement in regards to increased diversity but also uncertainty about UCLA's commitment to providing all the resources to truly assist the Latino student community.

“I hope that they don’t forget that we’re not just tokens for them and that they actually give us what we deserve,” Mazariegos said.

### About the Data

The data for the grant money is from the [University of California Sponsors](https://www.universityofcalifornia.edu/infocenter/sponsors) website, and were downloaded directly from the webpage. All grant data is in UC fiscal years. All numbers were divided by the number of total students at each campus as found from the [fall enrollment data on the University of California website](https://www.universityofcalifornia.edu/infocenter/fall-enrollment-glance). All data for graduation rates is from the [National Center for Education Statistics’s Integrated Postsecondary Education](https://nces.ed.gov/ipeds/SummaryTables/report/812?templateId=8120&year=2019&expand_by=0&number_or_percent=0&tt=aggregate&instType=1) Data System.
