---
title: 'Times of uncertainty:  Evaluating the impact of COVID-19 on UCLA’s research activity'

teaser: How did the COVID-19 pandemic impact research funding at UCLA? Which departments and types of research were affected the most?

authors:
  - ben_greer
  - jake_kovinsky
  - mari_yamamoto
  - robin_lee

key_takeaways:
  - The annual growth rate for government contracts and grants awarded to UCLA doubled between 2019 and 2022, compared to the annual growth rate in the 12 years prior (2006 - 2018).
  - STEM and medical science departments – such as the Semel Institute of Neuroscience and the David Geffen School of Medicine – received increases in funding with the onset of COVID-19. Funding for medical/health sciences increased by $462,204,784 from 2018 to 2022, while other STEM funding increased by $47,101,701 from 2018 to 2022
  - Public sources continued to be a larger source of funding than private sources during the COVID-19 pandemic.


featured_image:
  url: covid-research-funding/featured_image.jpeg
  caption: (Daily Bruin file photo)
og_image: covid-research-funcing/featured_image.jpeg

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js
  - /js/posts/covid-research-funding/priv-vs-pub.js
  - /js/posts/covid-research-funding/C&G_By_Year.js
  - /js/posts/covid-research-funding/awarddropdown.js

stylesheets:
  - /css/posts/covid-research-funding/apps.css
---

### Introduction

UCLA’s mission includes a dedication to research and the advancement of knowledge. In order to produce this research, the university relies on donations and grants from both public and private sources. Following the onset of COVID-19, the university’s stream of funding surged specifically in the STEM fields, where departments such as the Semel Institute of Neuroscience and the David Geffen School of Medicine received the majority of this increase in awarded dollars.

The Stack analyzed data from the past two decades in order to understand how funding changed during the COVID-19 pandemic and investigate which departments were affected the most.

### Where UCLA’s funding comes from

<div class="bar1-chart">
  <canvas id = "privvspubbar" width="80%" height="500%"></canvas>
</div>
<p class = 'caption'>Distribution of funding over five-year period broken down by four sources: state educational appropriations, government grants and contracts, private gifts, and private industry grants and contracts</p>

Between 2017 and 2021, public funding served as the university’s primary source of revenue, with this source of capital almost double the amount of money UCLA received from private funding.

Focusing specifically on public funding, we can see publicly generated revenue increased by nearly $120 million from 2019 to 2021 compared to an increase of $66 million from 2017 to 2019 – indicating a growth in federal support during the COVID-19 pandemic. A majority of this support materialized through government grants and contracts. In contrast, the amount of dollars the institution received from private sources increased by $150 million from 2017 to 2022.

Because the university experienced an overall increase in all branches of revenue within the last few years – primarily from government and private industry grants, the ratio between public and private sources at UCLA remained consistent with the years prior, even throughout the pandemic. In other words, because there was an overall increase in both types of funding, the relative proportion between private and public funding remained roughly the same.

### Distribution of contracts and grants over time

According to the National Science Foundation, UCLA is currently ranked seventh in the nation for total research and development expenditures. With such a high prestige in the advancement of knowledge, contracts and grants from both private and public sources are at the forefront of UCLA’s revenue, as exemplified earlier.

<div class="bar2-chart">
  <canvas id="CG_Chart" width="80%" height="500%"></canvas>
</div>
<p class='caption'>This chart shows a longitudinal distribution of UCLA contracts and grants award dollars over a 16-year period. Award counts are included in distribution as well.</p>

Prior to the COVID-19 pandemic from 2006 to 2018, the university’s dollar amount of contracts and grants grew on average by 4.33% per year. However, between 2019 and 2022, the amount of money UCLA received from contracts and grants grew by 8.86% per year – displaying an increase in the annual growth rate of funding in the years during and after the pandemic.

Marcia Smith, the associate vice chancellor for research administration, said the recent surge in UCLA’s public funding is a direct result of the university’s high research productivity, specialized facilities and expertise in particular fields of study – namely, the institution’s ongoing research and clinical trials in HIV treatment.

As such, the AIDS Clinical Trials Group, an HIV research network composed of universities and nonprofits, awarded UCLA a grant upward of $400 million in 2020. A portion of this grant was subsequently directed toward identifying effective treatments for the early onset of COVID-19 in patients.

When asked if the ACTG was the primary contributor behind this spike between 2019 and 2022, Dan Newbower, a principal administrative analyst for research at UCLA, said that while the ACTG played a part in the general upward trend in research funding, it does not explain everything. Smith said UCLA experienced an increase in overall funding even without the ACTG grant.

“That (ACTG) is a big component of the increase (in funding), but there’s an increase without it,” Smith said.

Corroborating both statements, there was in fact an increase in funding among 25 of the 32 departments on campus between 2018 and 2022, directly contributing to the aforementioned upward trend. Smith said that although the pandemic limited many researchers’ ability to work in their labs and engage with colleagues, it could have also allowed researchers in many departments to spend more time working on grant applications.

### Breakdown of contracts and grants by department

<div id="text">
  <!-- <b style="font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif; font-size: 12px; color: rgba(0,0,0,0.65); padding:20px;">Award dollars by year</b> -->
</div>
<div id="container" style="text-align:center;">
        <div class="selectBox">
            <select id="year">
                <option value="3820830, 648950405, 244387034, 46502493, 170732336, 7358593">2018</option>
                <option value="3904681, 724254983, 287252672, 55173669, 190970123, 10224387">2019</option>
                <option value="23760958, 859479041,294435172,38179978, 201660075,9471598">2020</option>
                <option value="90899399, 993403193, 268782892, 57513401,189863676, 6740140">2021</option>
                <option value="40666616, 1111155189, 291488735, 76986327, 191921262, 10349936">2022</option>
                <option value="163052484, 4337242811, 1386346505, 274355868, 945147472, 44144654" selected>2018-2022</option>
            </select>
        </div>
</div>
  
<div class="pie-chart">
      <canvas id="awardspie" width="80%" height="100%"></canvas>
</div>
<p class = 'caption'>This chart represents the breakdown of awarded dollars for research by department, grouped into six overarching categories: medical/health sciences, STEM, humanities, college of letters and science, higher education and a miscellaneous general category.</p>

Focusing closer on each department, an analysis of the above graphic shows a larger increase in funding for medical/health sciences and STEM-related departments relative to the departments in other fields of study. Some of these departments include the David Geffen School of Medicine and the Fielding School of Public Health. In 2019, these facilities accounted for 56.9% of the total amount of money awarded to UCLA’s research programs for that year. There was a notable increase in this percentage with medical and health sciences accounting for 60.2%, 61.8% and 64.5% in 2020, 2021 and 2022. respectively. This is possibly due to the demand for COVID-related research in the height of the pandemic.

Some notable departments accounting for a significant portion of the increase in funding include:

* The School of Medicine, which accounted for 75% of the increase in funding from 2018 to 2022.
* The infectious disease department, which made up 1.9% of the total funding received by the School of Medicine in 2018 before jumping to 20% in 2022.
* The Ronald Reagan UCLA Medical Center, which received an increase of $1,584,554 in awards between 2018 and 2021 – an increase upward of 164%.

### What does this mean for students at UCLA?

Regardless of the institution’s future earnings for research development, UCLA’s impact on the advancement of knowledge in higher education will continue to provide the university’s students a source of opportunity.

The assistant dean for undergraduate research and director of the Undergraduate Research Center for Sciences, Tama Hasson, highlighted research as an integral part of the university.

“Research is part of the fabric of UCLA—it is integrated into the undergraduate curriculum. In fact, students come to UCLA because they want to be part of a research institution,” Hasson explained in an emailed statement.

Regarding the benefit of research to students and the communities UCLA serves, Roger Wakimoto, the vice chancellor for research and creative activities, pointed to his department’s Public Impact Research Awards, which honor faculty members’ research that scale beyond campus.

“These awards not only recognize outstanding research but they must demonstrate that it directly benefited the public,” Wakimoto said in an emailed statement.

### About the data

Data collected about UCLA's revenue was found in UCLA's annual financial reports from FY17 - FY21. Data regarding the distribution of contract and grant awarded dollars overtime and by department was provided by the Office of Research Administration.
