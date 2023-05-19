---
title: "Bruins go to the polls: USAC Election Trends"
teaser: The USAC election makes an impact on campus each year, but what trends exist in elections data?
authors:
  - lindsey_parungo
  - priya_kanneboyina
  - madeline_blasingame
  - leo_cardozo
key_takeaways:
  - 165 accusations of USAC election policy violations have been filed over the last four years. Of these 165 accusations, 85 of them have been found valid.
  - Candidates are allowed to spend up to $450 on their campaigns, yet the average campaign spending over the last four years was only $118.
  - Over the last eight years, five elections have met the 20% voter turnout threshold required to pass a referendum.

featured_image:
  url: usac-election-trends/cover_art.png
  caption: (Alicia Caldera/Daily Bruin)
og_image: usac-election-trends/cover_art.png
scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js
  - /js/posts/usac-election-trends/expenses-bar.js
  - /js/posts/usac-election-trends/sanctions-by-year.js
  - /js/posts/usac-election-trends/punishments-pie.js
  - /js/posts/usac-election-trends/sanctions-winners.js
  - /js/posts/usac-election-trends/turnout-bar.js
  - /js/posts/usac-election-trends/party_chart.js

stylesheets:
  -
---

### Intro:

From increased flyering on Bruinwalk to lengthy Reddit drama, the Undergraduate Student Association elections have an effect on campus each year. Every undergraduate student at UCLA is a member of USA and has the opportunity to vote in the USAC election(CQ). The results of these elections have impacts on campus from changes in student fees to USAC-run programs. In addition to referendums, the election fills the 15 officer positions of USAC. The 2023 election had 40 candidates (CQ). Elected candidates ultimately influence the undergraduate experience of students at UCLA(CQ), said Seher Alvi, the Vice Chair of the USA Elections Board(CQ).

"It (USAC) impacts every aspect of UCLA students' lives. But it definitely does depend on the people in office"(CQ) said Alvi.

 The elections are governed by the USA Elections Board which issues sanctions for violations of campaign rules, records campaign finances as reported by the candidates and administers the elections.

The Stack obtained records on sanctions, campaign finances and turnout from the last four years from the USA Elections Board. Additionally, the Stack collected information on candidate parties and election results. Data was analyzed to find trends in campaign finances, sanction impacts, party results and election turnout.

### Sanctions

Throughout the election process, candidates can be sanctioned for a number of reasons ranging from violating campaign laws to failing to file paperwork in time. When an alleged violation occurs, a citation is filed against a candidate and the USA Elections Board decides whether the complaints are valid. Alvi said that once candidates are finalized, they are all required to attend a candidate orientation meeting, where each director within the elections board covers deadlines, campaign expectations and policies. Campaign managers for each candidate are also highly encouraged to attend this session (CQ). 

Of the 165 times a candidate has been accused in a citation in the past four years, 85 of these violations have been deemed valid, 30 partially valid, and 50 have been determined as invalid complaints. The bar chart below details the number of citations per year, detailed by the Election Board’s decision.

<div style='height: 300px'>
  <canvas id = 'yearly-sanctions'> </canvas>
</div>

<div style='height: 300px'>
  <canvas id = 'winners-sanctions'> </canvas>
</div>

Candidates can be sanctioned for violating the election code of conduct, even if the infraction was unintentional. Lucas Levy, a first-year candidate for General Representative said that “it’s difficult knowing all the campaign regulations—I know the document that they have on the website is very long and it took us a while to read” (CQ 2:12-2:22).

After a citation is filed, and the USA Elections Board determines whether it is a valid complaint, they decide on whether to sanction candidates. For most violations, the USAC Elections Board does not place any sanctions on candidates either because the complaint was invalid or was not severe enough to warrant a consequence (CQ). Other common consequences include corrections (typically for failing to include disclaimers in social media posts), temporary suspensions of campaigning, and in the worst-case scenario, disqualification. 

<div>
  <canvas id = 'punishments-sanctions'> </canvas>
</div>

When it comes to student perceptions of sanctions and their impacts on voting decisions, Nicole Paredes, a second-year Environmental Geology major said that “No one wants to be a part of the wrong side. I think a lot of people distrust the people who try to defend themselves after a sanction. It’s seen as like ‘‘Oh they did something really bad, I probably don’t even have to look into it.’’ (CQ). 

However, we see that sanctions do not necessarily stop candidates from winning elections. In the 2020 election, 7 of the candidates that ended up winning were sanctioned, including five who received suspensions from campaigning due to sanctions. Roughly one-third of all candidates elected to USAC in the past three years have been accused of a violation, with Carl King Jr. winning after being accused 4 times throughout the 2022 election. It may also depend on the sanction—more widely publicized sanctions may have larger impacts.

### Finances

USAC candidates are allowed to spend up to $450 on their campaigns. Candidates can have up to 100% of their expenses reimbursed from the USAC Election Board budget. (CQ) During the 2023 campaign, three candidates, Carl King Jr. (CQ), Kian Kohanteb(CQ) and Thyra Cobbs(CQ), exceeded this limit, according to their signed Campaign Expense Account Forms. 

While candidates are allowed to spend up to $450, the average expenditure per campaign during the 2020, 2021, 2022 and 2023 spring elections was about $118. The chart below shows the average expenditures per candidate for each office over the last 4 years. Both Dylan Cano, a fourth year global health major, and Paredes said that, from a general student perspective, campaign finances aren’t heavily reflected in the campaigns, since most of the campaigning is done over Instagram (CQ). However, many candidates reported expense costs related to graphic design for social media advertising.

<!-- Render 'officers-chart' with conditional formatting based on screen size -->

<div class='line-chart' style='height: 100%; max-height: 500px;'>
  <canvas id = 'officers-chart'></canvas>
</div>

<div class = 'line-chart'>
  <canvas id = 'commissioners-chart'></canvas>
</div>

In 2021, the campaign expenditures were the lowest in the last 4 years. The total expenditures in 2021 totaled to $845.68 which is about 12% of the total spending in the 2023 campaigns, which had the highest spending in the last four years. Slates are also allowed to claim expenditures on behalf of all their candidates, but slate spending was not included in the above chart. 

On average, independent candidates spent 50% more than candidates that were members of slates. However, in uncontested races, candidates that are part of slates are more likely to have campaign expenses.

### Slates

<div style='height: 300px'>
  <canvas id = 'mchart'></canvas>
</div>  

In 2020, there were candidates from two slates and in 2021, there were candidates from three different slates. Conversely in 2022 and 2023, there was only one slate, which may explain the increase in independent candidates. In 2021, independents accounted for only 40% of winning candidates; in 2020, they accounted for only a third of winners. Since then, this trend has changed dramatically with a mere 6.67% of winners coming from a slate in this year’s elections. 

Paredes said that for everyday student voters, slates can make it harder for individual candidates to stand out since it is less likely that students will read about the individual candidates (CQ). 

For the second year in a row, those running for USAC offices have chosen overwhelmingly to run as independents. In 2022, nearly 74% of candidates ran as independents with the remaining coming from SOAR. In this year’s election, over 85% of candidates ran as independents with the remaining coming from United Bruin Movement. Overall in 2022, 80% of winning candidates were independents. When only considering contested seats, over 87% of winning candidates were independents in 2022. This year, over 93% of winners were independent candidates. 

Alvi said that recent political drama in previous campaigns and a general disillusionment among UCLA students in slates may explain the increase in independent candidates. "I think there's been a general disillusionment among UCLA students in slates, and some people do like the idea rather than voting for one pre-selected group of students. They get to form their own opinions, and individually choose the person that they believe would be best for a specific role” Alvi added (CQ).

### Turnout

<div style='height: 300px'>
  <canvas id = 'turnout-bar'></canvas>
</div>

Over the past 8 years, voter turnout has generally decreased. The years with the highest turnout over the last eight years were 2016 (40.3%) and 2020 (30.06%). Only five of the last eight elections met the 20% threshold required for a referendum to pass (CQ). Students cite a lack of knowledge about USAC as well as a lack of interest in specific candidates.

“The issue lies in the fact that most of the things that USAC does usually aren't that noticeable to the outward students” (CQ) Cano said. Cano added that this lack of visibility can result in students possibly feeling like they don’t need to be engaged in USAC elections.

Another potential factor is voters’ indifference toward candidates: “I think sometimes it can be about the type of people running. People might see there's no point in voting if they don’t see a candidate they believe will implement significant change”, said Paredes (CQ).

Alvi said that among the various factors that impact voter turnout, COVID-19 was a main factor that reduced voter turnout in recent years. “I would say COVID-19 is definitely the main factor. The fact that a lot of students were away from campus, only able to witness things through their screens really created a huge sense of disconnect between the average student and the imagined UCLA community" Alvi said(CQ).

Last year, voter turnout was at its lowest in over a decade, at 15.19%. (CQ). This year, voter turnout saw a relative increase from last year with 23.03% of students voting.

### Conclusion:

USAC can seem to be an abstract power with a lack of direct impact on campus. Cano said that the average student may miss most of the things USAC does. However, the results of the election can have a direct impact on students.

"It's about having a democratic process, and making sure that as many people's voices are being heard as possible,” said Alvi.(CQ)

Through this democratic process, the electees are representative of the student body at UCLA. Beyond that, they are representative of students’ desires for campus, Alvi said. (CQ)

 “You're selecting people who are really representative, not only of the student body as people, but of the wishes and ideas that they have that they want to see come to life on campus and at UCLA at large" Alvi said (CQ).

### About the Data

USA elections board provided The Stack with citations for the past four years, Campaign Expense Report Forms for the past three years, a google sheet of expenditures from the spring 2020 election, a historical roster of USAC officers since 1919, and voter turnout for the previous eight years. In addition to this information, we collected information on slates from previous Daily Bruin coverage of USAC elections.