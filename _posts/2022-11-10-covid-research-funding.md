---
title: Times of Uncertainty - Evaluating the Impact of COVID-19 on UCLA’s Research Activity

teaser: How did the COVID-19 pandemic impact research funding at UCLA? Which departments and types of research were affected the most?

authors:
  - ben_greer
  - jake_kovinsky
  - mari_yamamoto
  - robin_lee

key_takeaways:
  - The annual growth rate for government contracts and grants awarded to UCLA doubled between 2019 and 2022, compared to the annual growth rate in the 12 years prior (2006 - 2018). 
  - STEM and medical science departments—such as the Semel Institute and the David Geffen School of Medicine—received increases in funding with the onset of COVID-19.
    - Medical/health sciences funding increased by $462,204,784 from 2018 to 2022
    - STEM funding increased by $47,101,701 from 2018 to 2022
  - Public sources remained the majority of the public and private revenue during COVID-19 

featured_image:
  url: covid-research-funding/featured_image.png
og_image: covid-research-funcing/featured_image.png

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js
  - /js/posts/covid-research-funding/priv-vs-pub.js
  - /js/posts/covid-research-funding/C&G_By_Year.js
  - /js/posts/covid-research-funding/awarddropdown.js

stylesheets:
  - /css/posts/covid-research-funding/apps.css
---

<br>
<div><blockquote>“Research is part of the fabric of UCLA – it’s integrated into the undergraduate curriculum.<br>Students come to UCLA because they want to be part of a research institution.”</blockquote>
<em>Dr. Tama Hasson, Assistant Dean for Undergraduate Research and<br>Director of Undergraduate Research Center – Sciences</em></div><br>

### Introduction

UCLA has long been a top institution for scientific research, with funding from both public and private benefactors garnering a steady source of revenue for the university. This consistent funding has allowed the institution to support a variety of grants and  research projects. Following the onset of COVID-19, the stream of funding towards the university surged, specifically in the STEM fields—where departments such as the Semel Institute and the David Geffen School of Medicine received the majority of the increase in awarded dollars.

The Stack analyzed data from YEAR to YEAR in order to understand how funding changed during the COVID-19 pandemic and understand which departments were affected the most. 

### Where The Funding Comes From 

<div class="bar1-chart">
  <canvas id = "privvspubbar" width="80%" height="500%"></canvas>
</div>
<p class = 'caption'>Distribution of funding over a 5 year period broken down by 4 sources: State educational appropriations, Government grants & contracts, Private fifts, and Private industry grants & contracts.</p>

Public funding has remained to be the University’s overwhelming primary source of revenue by a factor of 2 times the amount of private funding contributions. However, the amount of dollars the institution received from private sources increased by $150 million from 2017 to 2022. 

From 2017 to 2019, public revenue increased by $66 million, compared to an increase of $120 million from 2019 to 2021. The majority of this funding, according to our distribution, came from public sources – indicating a growth in federal support throughout the COVID-19 pandemic (CQ 1). 

Although there was not a difference in the distribution of revenue between public and private sources during the pandemic, UCLA saw an increase in total revenue from the last few years. Taking a closer look at the longitudinal distribution of government contracts and grants, we analyzed  the overall impact of COVID-19 on federal funding.

### Distribution of Funding Over Time

Currently, according to the National Science Foundation’s (NSF) rankings, UCLA is ranked seventh in the nation for total research and development expenditures behind other notable private and public universities—including UCSD and John Hopkins

<div class="bar2-chart">
  <canvas id="CG_Chart" width="80%" height="500%"></canvas>
</div>
<p class='caption'>Longitudinal distribution of UCLA contracts and grants award dollars over a 16 year period. Award counts included in distribution as well. Contract and grant counts not available for 2006 and 2007.</p> 

Prior to the onset of the COVID-19 pandemic, the dollar amounts for contracts and grants received by the university showed a rate of change of 4.33% annual growth from 2006 to 2018. Contrasting this, the rate of change for contracts and grants between the years 2019 and 2022 was 8.86% annually, suggesting a substantial increase in the annual growth rate of funding between the onset of the pandemic and the few years following. 

Marcia Smith, the Associate Vice Chancellor for Research, said the recent surge in UCLA’s public funding is a direct result of the university’s high research productivity, specialized facilities, and expertise in particular fields of study—namely, the institution’s ongoing research and the institution’s clinical trials into HIV treatment. 

In 2020, a grant of $400 million from the AIDS Clinical Trials Group (ACTG), the largest HIV research network composed of universities and nonprofits, was awarded to UCLA. A portion of this grant was also directed towards identifying effective treatments for early onset of COVID-19 in patients.

“That [ACTG] is a big component of the increase [in funding], but there’s an increase without it,” Smith said.

Daniel Newbower, the Principal Administrative Analyst for Research at UCLA, when asked if ACTG was the only contribution to this spike, said that there was definitely a general trend up explained by ACTG, but it doesn’t explain it all. 

Despite an overall positive trajectory, Smith expects there to be a drop in annual growth rate in overall public funding once the grant shifts to the next recipient within the ACTG network in 2027.

In addition to an increase in federal support from the ACTG grant, the burden imposed on researchers during the height of the COVID-19 pandemic limited their ability to work in their labs and engage with their colleagues; Smith said that this time away may have allowed researchers in many departments to spend more time working on grant applications.

This hypothesis could be supported by a direct increase of funding for 25 of the 32 departments on campus from 2018 - 2022.


### Breakdown of Funding by Department 

<div id="text" style="text-align: center">
  <b style="font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif; font-size: 12px; color: rgba(0,0,0,0.65);">Award dollars by year</b>
</div>

<div id="dropdown" style="text-align:center;">
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
      <canvas id="awardspie" width="80%" height="500%"></canvas>
</div>
<p class = 'caption'>This chart represents the breakdown of awarded dollars for research by department, grouped into six overarching categories: Medical/Health Sciences, STEM, Humanities, College of Letters & Science, Higher Education, and a miscellaneous General category.</p>

From our analysis, we observed a substantial increase in funding for Medical/Health Sciences and STEM-related departments, relative to departments in other fields of study. These departments include—but are not limited to—the David Geffen School of Medicine, Basic Biomedical Sciences and the Fielding School of Public Health. In 2019, these departments accounted for 56.9% of the total research award dollars for that year. We can see a notable increase in this percentage, presumably due to the demand for COVID-related research in the height of the pandemic—with medical and health sciences accounting for 60.2%, 61.8%, and 64.5% in 2020, 2021, and 2022 respectively. 

Some notable departments accounting for a significant portion of the increase in funding include: 
  - The David Geffen School of Medicine, which accounted for 75% of the increase in funding from 2018 to 2022. 
  - The Infectious Disease Department made up 1.9% of the total funding received by the Geffen School of Medicine in 2018. That number jumped to 20% in 2022.
  - The UCLA Medical Center, which received an increase of $1,584,554 in awards between 2018 and 2021 — an increase upwards of 164%. 

### Looking Forward

Regardless of future expected earnings for research development, the University’s impact on advancing knowledge in higher education will continue to directly serve UCLA students as a source of opportunity. 

In an email statement, Assistant Dean for Undergraduate Research and Director of The Undergraduate Research Center for Sciences Dr. Tama Hasson explains that “research is part of the fabric of UCLA – it’s integrated into the undergraduate curriculum. Students come to UCLA because they want to be part of a research institution” (CQ 6).

Regarding the benefit of research to students and the communities UCLA serves, especially during times of uncertainty, Vice Chancellor for Research and Creative Activities Roger Wakimito points to his department’s Public Impact Awards, which honor faculty members’ research that scale beyond campus.

“These awards not only recognize outstanding research but they must demonstrate that it directly benefited the public,” said Wakimoto in an email statement.

Despite tumultuous times during the pandemic, the increase in overall funding highlights the importance and agency of government institutions in aiding a public research university committed to solving our most pressing issues of today. 

### About the Data 

Data collected about the University's revenue was directly pulled from UCLA's annual financial reports from FY17 - FY21. Data regarding the distribution of C&G Awarded Dollars overtime and by department was kindly gathered from the Office of Research Administration.