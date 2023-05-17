---
title: "Bruins go to the polls: USAC Election Trends"
teaser: The USAC election makes an impact on campus each year, but what trends exist in elections data?
authors:
  - lindsey_parungo
  - priya_kanneboyina
  - madeline_blasingame
  - leo_cardozo
key_takeaways:
  - 165 accusations of violations of USAC election policy have been filed over the last four years. Of these 165 accusations, 85 of them have been found valid.
  - Candidates are allowed to spend up to $450 on their campaigns, but average campaign spending over the last four years was only $118
  - Over the last eight years, five elections have met the 20% voter turnout threshold required to pass a referendum

featured_image:
  url: 
  caption: 
og_image: 
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

From increased flyering on Bruinwalk to lengthy Reddit drama, the Undergraduate Student Association elections make an impact on campus each year. The results of these elections have impacts on campus from changes in student fees to USAC run programs. The 2023 USAC election passed (CQ) a referendum that will provide students access to unlimited use of LA metro-cards for a quarterly student fee(CQ).

In addition to referenda, the election fills the 15 officer and commissioner positions of USAC. The 2023 election had 40 candidates (CQ). Every undergraduate student at UCLA is a member of USA and has the opportunity to vote in the USAC election(CQ).

The elections are governed by the USA Elections Board which issues sanctions for violations of campaign rules, records campaign finances as reported by the candidates and administers the elections.

The Stack obtained records on sanctions, campaign finances and turnout from the last four years from the USA Elections Board. Additionally the Stack collected information on candidate parties and election results. Data was analyzed to find trends in campaign finances, sanction impacts, party results and election turnout.

### Sanctions

Throughout the election process, candidates can be sanctioned for a number of reasons ranging from violating campaign laws to failing to file paperwork in time. When an alleged violation occurs, a citation is filed against a candidate and the USAC election committee decides whether the complaints are valid. Of the 165 times a candidate has been accused in a citation in the past four years, 85 of these violations have been deemed valid, 30 partially valid, and 50 have been determined as invalid complaints. The bar chart below details the number of citations per year, detailed by the Election Board’s decision.

<div>
  <canvas id = 'yearly-sanctions'> </canvas>
</div>

<div>
  <canvas id = 'winners-sanctions'> </canvas>
</div>

Candidates can be sanctioned for breaking rules, even if the rule break was unintentional. Lucas Levy, a first-year candidate for General Representative said that “it’s difficult knowing all the campaign regulations-I know the document that they have on the website is very long and it took us a while to read” (CQ 2:12-2:22).

After a citation is filed, and the USAC elections board determines whether it is a valid complaint, they decide on whether to sanction candidates. By far, the most common response to a citation is no punishment at all, either because the complaint was invalid or was not severe enough to warrant a consequence. Other common consequences include corrections (typically for failing to include disclaimers in social media posts), temporary suspensions of campaigning, and in the worst case scenario, disqualification.

<div>
  <canvas id = 'punishments-sanctions'> </canvas>
</div>

When it comes to student perceptions of sanctions and their impacts on voting decisions, Nicole Paredes, a second year Environmental Geology major said that “No one wants to be a part of the wrong side. I think a lot of people distrust the people who try to defend themselves after a sanction. It’s seen as like “‘Oh they did something really bad, I probably don’t even have to look into it’” (CQ).

However, we see that sanctions do not directly stop candidates from winning elections. In the 2020 election, 7 of the candidates that ended up winning were sanctioned, including five who received suspensions from campaigning due to sanctions. Roughly one-third of all candidates elected to USAC in the past three years has been accused of a violation, with Carl King Jr. winning after being accused 4 times throughout the 2022 election. It may also depend on the sanction, more widely publicized sanctions may have larger impacts.

### Finances

USAC candidates are allowed to spend up to $450 on their campaigns. Candidates can have up to 100% of their expenses reimbursed from the USAC Election Board budget. (CQ) During the 2023 campaign, three candidates exceeded this limit, Carl King Jr. (CQ), Kian Kohanteb(CQ) and Thyra Cobbs(CQ), according to their signed Campaign Expense Account Forms.

While candidates are allowed to spend up to $450, the average expenditure per campaign during the 2020, 2021, 2022 and 2023 spring elections was about $118. The chart below shows the average expenditures per candidate for each office over the last 4 years. Both Cano and Paredes said that, from a general student perspective, campaign finances aren’t heavily reflected in the campaigns, since most of the campaigning is done over Instagram (CQ). However, many candidates expense costs related to graphic design for social media advertising.

<div>
  <canvas id = 'officers-chart'></canvas>
</div>
<div>
  <canvas id = 'commissioners-chart'></canvas>
</div>

In 2021, the campaign expenditures were the lowest in the last 4 years. The total expenditures in 2021 totaled to $845.68 which is about 12% of the total spending in the 2023 campaigns, which had the highest spending in the last four years. Slates are also allowed to claim expenditures on behalf of all their candidates, but slate spending was not included in the above chart.

On average, independent candidates spent 50% more than candidates that were members of slates. However, in uncontested races, candidates that are part of slates are more likely to have campaign expenses.

### Slates

For the second year in a row, those running for USAC offices have chosen overwhelmingly to run as independents. In 2022 nearly 74% of candidates ran as independents with the remaining coming from SOAR. This year, the 2023 election, over 85% of candidates ran as independents with the remaining coming from United Bruin Movement. Overall in 2022, 80% of winning candidates were independents which increases to over 87% when only considering contested seats. This year, over 93% of winners were independent candidates.

Paredes said that for everyday student voters, slates can make it harder for individual candidates to stand out, since it is less likely that students will read about the individual candidates (CQ).

<div>
  <canvas id = 'mchart'></canvas>
</div>  

In 2020, there were candidates from 2 slates and in 2021, there were candidates from 3 different slates. The increase in independent candidates and independents winners may be due at least in part to the drop in the number of slates in 2022 and 2023 to only 1. In 2021, independents accounted for only 40% of winning candidates and in 2020, they accounted for only a third of winners. This trend has changed dramatically with this year only one single winner, or 6.67%, coming from a slate.

### Turnout

<div>
  <canvas id = 'turnout-bar'></canvas>
</div>

Turnout and election participation has been generally decreasing for the past 8 years. The years with the highest turnout over the last eight years were 2016 (40.3%) and 2020 (30.06%). Only five of the last eight elections met the 20% threshold required for a referendum to pass (CQ). Students cite lack of knowledge about USAC as well as lack of interest in specific candidates.

Cano said, “the issue lies in the fact that most of the things that USAC does usually isn't that noticeable to the outward students” (CQ).

This can result in students possibly feeling like they don’t need to be engaged in USAC elections, said Cano.

Another possibility is the candidates themselves. “I think sometimes it can be about the type of people running, people might see there's no point in voting if they don’t see a candidate they believe will implement significant change”, said Paredes (CQ).

Last year voter turnout was at its lowest in over a decade, at 15.19%. (CQ). This year voter turnout saw a relative increase from 2022, with 23.03% of students voting.

### Conclusion:

USAC can seem to be an abstract power with a lack of direct impact on campus. Cano said that the average student may miss most of the things USAC does. However, the results of the election can have a direct impact on students.

For example, the transit initiative passed this year will provide a service directly to students and change student fees. HOPEFULLY WE CAN GET SOME SORT OF QUOTE HERE ABOUT HOW STUDENTS NEED TO VOTE

### About the Data

USA elections board provided The Stack with citations for the past four years, Campaign Expense Report Forms for the past three years, a google sheet of expenditures from the spring 2020 election, a historical roster of USAC officers since 1919, and voter turnout for the previous eight years. In addition to this information, we collected information on slates from previous Daily Bruin coverage of USAC elections.
