---
title: Exploring UCLA’s Journey to Become an HSI
teaser: UCLA has set a goal to be an HSI by 2025. What does that mean for the university?  
authors: 
  - priya_kanneboyina
  - mansa_krishna
  - samantha_low
  - lindsey_parungo
key_takeaways:
  - Although the data does not show a significant increase in grant funding after a UC reaches HSI designation, there is the potential for millions in grant funding dedicated to student success.
  - While UCLA has one of the highest Hispanic Graduation rates in the UC system, the gap between white and Hispanic graduation rates is higher than at almost all the HSI designated UCs.
  - At the current pace, UCLA would not reach the requisite 25% Hispanic Undergraduate population until 2029, but with targeted outreach could achieve their goal of being an HSI by 2025. 

featured_image:
  url: 
og_image: 
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

Even though Los Angeles is 48.5% Hispanic, UCLA fails to reflect this and is only 21% Hispanic. However, recent efforts by UCLA to become a Hispanic Serving Institution(HSI) may change that. Having a greater Hispanic population would make it so that UCLA better reflects the demographics of the surrounding Los Angeles community. 

"UCLA is in the middle of Los Angeles. So it makes sense for it to reflect the actual demographics of LA, which it doesn't right now,” said Sam Mazariegos, a third-year human biology and society student.  

On Dec. 20, 2020, Chancellor Gene Block announced that UCLA planned to become an HSI by 2025. This designation would be given by the U.S. Department of Education if UCLA’s student population was at least 25% Hispanic students and would be accompanied by a range of new grants from the federal government that UCLA could qualify for. In his announcement, Block noted that these new grant qualifications could assist in strengthening education programs and benefitting Hispanic students at UCLA. 

Block’s Dec. 7, 2020 letter to the community said, “research has shown that HSI designation strengthens interracial relations among all students, improves academic performance and attendance of students of color, and increases their likelihood of graduation”. Currently, the graduation rate of Hispanic students at UCLA is 86.78% and the average for all students is 91.5%. 

“I always felt kind of out of place in the student body because I didn’t see a lot of Latinx students in my classes and in my own major,” said Yesenia Flores, a second-year Hispanic arts student.

In this article, The Stack looks into how much UCLA will have to increase admissions to become an HSI, how we stack up to other UCs with HSI designations and if graduation rates for Hispanic students improve with HSI standing. We also take a look at the grant allocations for HSIs and how much grant funding UCLA may receive from an HSI status.  

### The Story in Graduation Rates

With an HSI designation many are hoping that UCLA will not just admit students, but help them thrive. After hearing about UCLA’s goals to become a HSI by 2025, Mazariegos hoped the school might be able to have more cultural competency, accessibility and more resources to help Hispanic students succeed at UCLA. 

“It’s a good step forward but I just hope that they actually follow through with it and start giving resources to the Latinos on campus to get to graduation and to be successful,” said Mazariegos. 
Graduation rates are one marker of how well a school supports students beyond admissions. 

Looking at the graphs below, UCLA has on average the highest Hispanic graduation rate (86.08%) compared to the other UC schools from 2011 to 2019. UCLA’s yearly Hispanic graduation rates have not changed significantly since 2011 while some HSI’s such as UC Santa Barbara and UC Riverside have experienced increased hispanic graduation rates. However, variables such as selectivity of institutions and support for Hispanic students can be confounded when looking purely at graduation rate and change in graduation rate. Another metric that can be evaluated is the gap between white and Hispanic graduation rates. From 2011 to 2019, white graduation rates were on average 5.4% higher than hispanic graduation rates at UCLA-- a larger gap than at all current HSIs: UC Santa Cruz (5.21%), UC Irvine (4.72%), UC Merced (0.63%), UC Riverside (1.27%) with the exception of UC Santa Barbara (6.64%). 

Sylvia Hurtado, a professor in the Department of Education, said UCLA must have programming to address student completion.

One focus of UCLA should be “making sure every student that we(UCLA) admit completes,” said Hurtado.


<div class ="rate-line">
  <canvas id="grad-rate-line"></canvas>
  <div class= "caption">
Average is the average for all students.
</div>
</div>

<div class ="rate-change">
  <canvas id="grad-rate-change"></canvas>
</div>


<div class ="rate-gap">
  <canvas id="grad-rate-gap"></canvas>
</div>


### Changes in Grant Funding

One major aspect of HSI designation is being qualified for a large range of grants which are to be used “to expand educational opportunities for, and improve the attainment of, Hispanic students” according to Block’s Dec 7, 2020 message about UCLA’s HSI goal. 

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

“That’s a lot of money focused on programming to all support student success,” Hurtado said of UC Santa Cruz receiving more than $10 million in grants since becoming an HSI in 2012.

Mazariegos says she hopes more grant funding will lead to better and more accessible programs from the administration, noting that while resources are there, they're often hard to find. 

"Latino students have a good amount of resources to go to, but a lot of them are student led. So it doesn’t feel like the administration is really playing a big role in them or even funding them as much as they should," Mazariegos said. 

Because an HSI designation allows colleges and universities to apply for a variety of grants, there is great potential for funding. 

Alfred Herrera, Assistant Vice Provost for Academic Partnerships, said “We could get many, many, many millions of dollars once we reach that designation.” 

This money could be used for “faculty development, changing teaching and learning, … developing more active learning classrooms … pipeline kinds of programs where they could encourage students from high schools but also from community colleges,'' said Hurtado.    

### Projected Growth Rate of the Hispanic Student Population at UCLA

After analyzing the growth trends of Hispanic students at UCLA from 2000-2020, there appears to be a steady increase in the percentage of Hispanic students. In order to become an HSI , UCLA would need undergraduate enrollment that is at least 25% Hispanic. However, with the current rate of growth the undergraduate Hispanic student population would reach 25% of the undergraduate student population only in 2029 while the total Hispanic student population would reach 25% only after 2040,  well past the target year of 2025.  

The graphs below show UCLA’s historic growth in Hispanic students and a projection if the growth rate remains constant. The trendline is computed using a linear least squares regression model. The projection is a continuation of this model if the rate remains constant. The threshold line is at 25%, the required percentage of Hispanic students to qualify for HSI designation. The graph on the right looks solely at undergraduate data, while the graph on the left looks at total student population. The threshold only applies to undergraduate enrollment.


<div class = 'undergrad-predict'>
  <canvas id = 'HSIS_Projection_Undergrad'></canvas>
</div>

<div class = 'total-predict'>
  <canvas id = 'HSIS_Projection'></canvas> 
</div>

<div class='small-line-break'></div>

When asked if she thinks UCLA could reach their HSI goal by 2025, Flores said “A lot of students are really competent and capable in predominantly Latinx high schools. If they are actually going to connect with high schools that have populations that are predominantly Latinx then it’s possible,” Flores said.

Hurtado said that 2025 was a good goal for UCLA. In order to achieve the goal UCLA needs “more attention [on] freshman, freshman admission, and those students that are admitted… transfer student and making sure we’re (UCLA) on an upward trajectory in terms of their admission and completion” said Hurtado.

### Conclusion

Flores, who attended a predominantly Hispanic high school, said, “The only colleges I ever saw reaching out to my high school were community colleges. I think UCs are always scary, especially if you come from a high school where you’re like ‘Oh only 3 people got admitted last year’, it’s really discouraging. So I think that in that sense they (UCs) haven’t done a good job at presenting themselves as an option for those students.”   

Hurtado and Herrara both said that the HSI goal is student-focused.

 “All students do well at HSIs, it’s not just Latino students.” said Herrara. 

There is optimism and excitement in regards to increased diversity, but also uncertainty about UCLA's commitment to providing all the resources to truly assist the Hispanic student community.  

“What exactly are they going to implement to follow through with the goals that they have?" said Flores. 

"I hope that they don’t forget that we’re not just tokens for them and that they actually give us what we deserve," said Mazariegos.
 

### About the Data

The data for the grant money is from the [University of California Sponsors](https://www.universityofcalifornia.edu/infocenter/sponsors) website, and were downloaded directly from the webpage. All grant data is in UC fiscal years. All numbers were divided by the number of total students at each campus as found from the [fall enrollment data on the University of California website](https://www.universityofcalifornia.edu/infocenter/fall-enrollment-glance).