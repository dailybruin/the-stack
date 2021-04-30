---
title: Student Demographics HSIs article
teaser: 
authors: 
  - priya_kanneboyina
  - mansa_krishna
  - samantha_low
  - lindsey_parungo
key_takeaways:
  - Grant Money Test
featured_image:
  url: 
og_image: 
stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
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
---
### Introduction

Sam Mazariegos, a third year Human Biology and Society major says "UCLA is in the middle of LA. So it makes sense for it to reflect the actual demographics of LA”. 

“I always felt like kind of out of place in the student body because I didn’t see a lot of Latinx students in my classes and in my own major.” says Yesenia Flores, a second-year hispanic student studying Art. 


On Dec 20th 2020, Chancellor Gene Block announced that UCLA has planned to become a Hispanic Serving Institution by 2025. This designation would be given if UCLA’s student population was at least 25% Latinx students and would be accompanied by a range of new grants that UCLA could qualify for. In his announcement, the Chancellor noted that these new grant qualifications could assist in strengthening education programs and benefitting Latinx students at UCLA and that “research has shown that HSI designation strengthens interracial relations among all students, improves academic performance and attendance of students of color, and increases their likelihood of graduation”. 

In this article, The Stack will be looking into how much UCLA will have to increase admissions to become an HSI, how we stack up to other UCs with HSI designations, and if graduation rates for Latinx students improve with HSI standing. It’ll also take a look at the grant allocations for HSIs and how much grant funding UCLA may get from their new status.   


### The Story in Graduation Rates

With this new designation many are hoping that UCLA will not just admit students, but help them thrive. After hearing about UCLA’s goals to become a Hispanic Serving Insitution by 2025, Mazariegos hopes the school might be able to have more cultural competency, accesibility, and more resources to help Latinx students succeed at UCLA. She says, “It’s a good step forward but I just hope that they actually follow through with it and start giving resources to the Latinos on campus to get to graduation and to be successful”. Graduation rates are one marker of how well a school supports students beyond admissions. Looking at other HSIs, we see *insert*

<div id="chartContainer1">
  <canvas id="grad-rate-line"></canvas>
</div>

<div id="chartContainer2">
  <canvas id="grad-rate-change"></canvas>
</div>

<div id="chartContainer3">
  <canvas id="grad-rate-gap"></canvas>
</div>


### Changes in Grant Funding

One major aspect of HSI designation is being qualified for a large range of grants which are to be used to help Latinx communities and resources at the institution.  The graphs below show the amount of grant money that each campus in the UC system received per student each year. There does not appear to be a large immediate correlation between reaching HSI designation and receiving a large increase in funding. Most grants reliant on HSI designation are from federal agencies. Even when only federal grants are considered there is not a significant increase in annual funding after the HSI designation is reached.   

<div>
        <canvas id="DOEChart"></canvas>
</div>

<div>
<canvas id = "TotalChart"></canvas>
</div>

<script src = "C:/Users/Lindsey/Desktop/Daily-Bruin/the-stack/js/posts/student-demographic-hsis/TotalViz.js"></script>
<script src = "C:/Users/Lindsey/Desktop/Daily-Bruin/the-stack/js/posts/student-demographic-hsis/DOEviz.js"></script>

Looking at the graphs above, it first seems as though being an HSI does not have a significant impact on the amount of federal grants that each university receives. However, Sylvia Hurtado, a professor in the Department of Education, said grants awarded to schools with HSI designation can have a significant impact. In addition, Hurtado said that many HSI awards are dedicated to programs designed for student success. Schools apply for these grants for initiatives to address areas of need to ensure that students are successful. 

Mazariegos says she hopes more grant funding will lead to better and more accessible programs from the administration, noting that while resources are there, they're often hard to find and right now, "Latino students have a good amount of resources to go to, but a lot of them are student led. So it doesn’t feel like administration is really playing a big role in them or even funding them as much as they should". 

Because HSI designation allows colleges and universities to apply for a variety of grants, there is great potential for funding. Alfred Herrera, Assistant Vice Provost for Academic Partnerships, said “we could get many, many, many millions of dollars once we reach that designation.”



### Conclusion 

Flores, who attended predominantly Latinx high school said, “The only colleges I ever saw reaching out to my high school were community colleges. I think UCs are always scary, especially if you come from high school where you’re like ‘Oh only 3 people got admitted last year’, it’s like, it’s really discouraging. So I think that in that sense they haven’t done a good job at presenting themselves as an option for those students.” She said“A lot of students are really competent and capable in predominantly Latinx high schools. If they are actually going to connect with high schools that have populations that are predominantly Latinx then it’s possible”.  

Hurtado and Herrara said that the HSI goal is student focused. Herrara said that schools that are HSIs show greater student success  for all students even amongst students who are not Hispanic. 

Hurtado said that it is everybody’s responsibility to enact changes to reach this goal because student success is everybody’s responsibility. 

Students are optimistic and excited for the increase in diversity, but are uncertain about the University's commitment to providing all the resources to truly assist the Latinx student community. They hope the status of HSI  serves as more than just a title. "I hope that they don’t forget that we’re not just tokens for them and that they actually give us what we deserve" says Sam. “What exactly are they going to implement to follow through with the goals that they have?" Flores asks. 

### About the Data
	The data for the grant money is from the University of California Office of the President’s site. Numbers for total grant allocation and federal grant allocation were downloaded directly from the webpage. All grant data is from UC fiscal years. All numbers were divided by the number of total students at each campus. 
