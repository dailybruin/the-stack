---
title: Shifts in Public and Private Research Funding - Evaluating the Impact of COVID-19 on UCLA’s Research Activity
teaser: How did the COVID-19 pandemic impact research funding at UCLA? Which departments and types of research were affected the most?
authors:
  - Benjamin Greer
  - Jake Kovinsky
  - Mari Yamamoto
  - Robin Lee

key_takeaways:
  - Annual growth rate for government contracts and grants awarded to UCLA doubled between 2019 and 2022, compared to the annual growth rate in the 12 years prior (2006 - 2018). 
  - STEM and medical science departments—such as the Semel Institute and the David Geffen School of Medicine—received substantial increases in funding with the onset of COVID-19.
  - No dramatic shifts in public vs private revenue streams during COVID-19

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js
  - /js/posts/covid-research-funding/priv-vs-pub.js
  - /js/posts/covid-research-funding/C&G_By_Year.js
  - /js/posts/covid-research-funding/awarddropdown.js
---

### Introduction

UCLA has long boasted an impressive history of scientific prowess, with funding from both public and private benefactors garnering a steady source of revenue for the university. This has allowed the institution to regularly financially contribute to a variety of grants and projects. Following the onset of COVID-19 at the turn of the decade, the stream of funding towards the university saw a significant surge, specifically in the STEM fields—where departments such as the Semel Institute and the David Geffen School of Medicine received the bulk of the increase in awarded dollars.

This raises the question: how exactly did the COVID-19 pandemic impact research funding at UCLA, and which departments were affected the most?

### Where The Funding Comes From 

<div class="bar1-chart"><canvas id = "privvspubbar" width="80%" height="500%"></canvas></div>


Public funding has remained to be the University’s overwhelming primary source of revenue. However, the amount of dollars the institution received from private sources increased by $150 million from 2017 to 2022. 

From 2018 to 2020, public revenue gradually increased by $130 million, with the majority of funding coming from government grants and contracts – indicating a growth in federal support throughout the COVID-19 pandemic. 

Following the end of the pandemic in 2021, we observed that the number of state educational appropriations increased through the height of the pandemic, but ultimately decreased to around the same amount observed in 2018.

Although there was not a drastic difference between public and private sources of revenue during the pandemic, UCLA saw an increase in total revenue from the last few years. Let’s zoom in and take a closer look at the longitudinal distribution of government contracts and grants to analyze the overall impact of COVID-19 on federal funding.


### Distribution of Funding Over Time

Currently, according to the National Science Foundation’s (NSF) rankings on research and development expenditures, UCLA sits at number 7 in the nation behind other notable private and public universities—including UCSD and John Hopkins.

<div class="bar2-chart"><canvas id="CG_Chart" width="80%" height="500%"></canvas></div>

Prior to the onset of the COVID-19 pandemic, the dollar amounts for contracts and grants received by the university showed a slow rate change. Contrasting this, there was a substantial increase in the annual growth rate of funding between the onset of the pandemic and the few years following. 

  - 4.33% yearly growth rate from 2006 to 2018
  - 8.86% yearly growth rate from 2019 - 2022 

In an interview with the Associate Vice Chancellor for Research, Marcia Smith, the recent surge in UCLA’s public funding is a direct result of the university’s high research productivity, specialized facilities, and expertise in particular fields of study—namely, the institution’s ongoing research and the institution’s clinical trials into HIV treatment. 

In 2020, a grant of $400 million from the AIDS Clinical Trials Group (ACTG), the largest HIV research network composed of universities and nonprofits, was awarded to UCLA. A portion of this grant was also directed towards identifying effective treatments for early onset of COVID-19 in patients.

Despite an overall positive trajectory, Smith expects there to be a drop in annual growth rate in overall public funding once the grant shifts to the next recipient within the ACTG network in 2027.

“That [ACTG] is a big component of the increase [in funding], but there’s an increase without it,” said Smith in an interview with The Stack back in October. 

Daniel Newbower, the Principle Administrative Analyst for Research, when asked if ACTG was the only contribution to this spike, said that "...there was definitely a general trend..." and that "...it [ACTG] explained a lot of that large jump... ...but it doesn't explain it all."

The burden imposed on researchers during the height of the COVID-19 pandemic limited their ability to work in their labs and engage with their colleagues. Smith speculates that the time away from active research allowed researchers in many departments to spend more time working on grant applications.

“I mean, maybe they can do [more] data analysis…, management plans and stuff that are overdue…but I’m sure that they just [had] more time to write,” said Smith. 

This hypothesis could be supported by a direct increase of funding for 25 of the 32 departments on campus from 2018 to 2022.


### Breakdown of Funding by Department 

<div class="pie-chart">
        <canvas id="awardspie" width="80%" height="500%"></canvas>
</div>

<div id="container">
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
<p class = 'caption'>This chart represents the breakdown of awarded dollars for research by department, grouped into six overarching categories: Medical/Health Sciences, STEM, Humanities, College of Letters & Science, Higher Education, and a miscellaneous General category.</p>

From our analysis, we observed a substantial increase in funding for Medical/Health Sciences and STEM-related departments, relative to departments in other fields of study. These departments include—but are not limited to—the David Geffen School of Medicine, Basic Biomedical Sciences, and the Fielding School of Public Health. In 2019, these departments accounted for 56.9% of the total research award dollars for that year. We can see a notable increase in this percentage, presumably due to the demand for Covid-related research in the height of the pandemic—with medical and health sciences accounting for 60.2%, 61.8%, and 64.5% in 2020, 2021, and 2022 respectively. 

Some notable departments accounting for a significant portion of the increase in funding include: 
  - The David Geffen School of Medicine, which accounted for 75% of the increase in funding from 2018 to 2022. 
  - The Infectious Disease, which in 2018, made up 1.9% of the total funding received by the Geffen School of Medicine. That number jumped to 20% in 2022. (CQ 5)
  - The UCLA Medical Center, which received an increase of $1,584,554 in awards between 2018 and 2021—an increase upwards of 164%. 

### Looking Forward

As stated before, we expect the growth rate of the quantity of grants and contracts at UCLA to fall back to the rate it was prior to the pandemic, as a result of a variety of factors. These include a decrease in time allotted to researchers for writing grants and a lower demand for grants and contracts. 

Additionally, we are unsure what the trajectory of funding will look for each department following the pandemic. However, we hypothesize that the success of Medical and Health Sciences throughout the pandemic will lead to a similar increase in funding for these departments in the coming years. 

Our analysis of the increase in funding has highlighted the success and agency of both the federal government and UCLA to combat COVID-19 and contribute to the ongoing research surrounding pandemic preparedness. 

### About the Data 

