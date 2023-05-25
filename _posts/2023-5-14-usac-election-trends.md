---
title: "Bruins go to the polls: USAC election trends"
teaser: USAC elections impact campus each year, but what trends exist in elections data?
authors:
  - lindsey_parungo
  - priya_kanneboyina
  - madeline_blasingame
  - leo_cardozo
key_takeaways:
  - 165 accusations of Undergraduate Students Association Council election policy violations have been filed over the last four years. Of these 165 accusations, 85 of them have been found valid.
  - According to the election code found on the 2023 elections board [website](https://www.uclaelectionsboard.org/docs-forms), candidates are allowed to spend up to $500 on their campaigns, yet the average campaign spending over the last four years was $118.
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

From increased flyering on Bruinwalk to lengthy Reddit drama, the USAC elections have an effect on campus each year. Every undergraduate student at UCLA is a member of the Undergraduate Students Association and has the opportunity to vote in the USAC election. The results of these elections have impacts on campus, from changes in student fees to USAC-run programs. In addition to referendums, the election fills the 15 officer positions of USAC. The 2023 election had 40 candidates. Elected candidates ultimately influence the undergraduate experience of students at UCLA, said Seher Alvi, the vice chair of the USA Elections Board.

"It impacts every aspect of UCLA students' lives. But it definitely does depend on the people in office," Alvi said.

The elections are governed by the USA Elections Board, which issues sanctions for violations of campaign rules, records campaign finances as reported by the candidates, and administers the elections.

The Stack obtained records on sanctions, campaign finances and turnout from the last four USAC elections from the elections board. Additionally, The Stack collected information on candidate parties and election results. Data was analyzed to find trends in campaign finances, sanction impacts, party results and election turnout.

### Sanctions

Throughout the election process, candidates can be sanctioned for a number of reasons, ranging from violating campaign laws to failing to file paperwork in time. When an alleged violation occurs, a citation is filed against a candidate and the elections board decides whether the complaints are valid. Alvi said once candidates are finalized, they are all required to attend a candidate orientation meeting, where each director within the elections board covers deadlines, campaign expectations and policies. The elections board highly encourages campaign managers for each candidate to also attend this session. 

Of the 165 times a candidate has been accused in a citation in the past four years, 85 of these violations have been deemed valid, 30 partially valid and 50 have been determined as invalid complaints. The bar chart below details the number of citations per year, detailed by the elections board’s decision.

<div style='height: 300px'>
  <canvas id = 'yearly-sanctions'> </canvas>
</div>

<div style='height: 300px'>
  <canvas id = 'winners-sanctions'> </canvas>
</div>

Candidates can be sanctioned for violating the election code of conduct, even if the infraction was unintentional. 

Lucas Levy, a first-year political science student who ran for general representative this year, said, “It’s difficult knowing all the campaign regulations. I know the document that they have on the website is very long, and it took us a while to read.”

After a citation is filed and the elections board determines whether it is a valid complaint, it decides whether to sanction candidates. For most violations, the elections board does not place any sanctions on candidates either because the complaint was invalid or was not severe enough to warrant a consequence, Alvi said. Other common consequences include corrections – typically for failing to include disclaimers in social media posts – as well as temporary suspensions of campaigning and even disqualification in worst-case scenarios. A citation may result in more than one sanction.

<div style='height: 300px'>
  <canvas id = 'punishments-sanctions'> </canvas>
</div>

When it comes to student perceptions of sanctions and their impacts on voting decisions, Nicole Paredes, a second-year engineering geology student, said that candidates who have been sanctioned may lose the trust of voters.

“No one wants to be a part of the wrong side. I think a lot of people distrust the people who try to defend themselves after a sanction. It’s seen as, ‘Oh they did something really bad. I probably don’t even have to look into it,’” Paredes said. 

However, sanctions do not necessarily stop candidates from winning elections. In the 2020 election, seven of the candidates that ended up winning had been sanctioned, including five who received suspensions from campaigning due to sanctions. Roughly 1/3 of all candidates elected to USAC in the past four years have been accused of a violation, with Carl King Jr. winning after being accused four times throughout the 2022 election. 

### Finances

According to the election code found on the 2023 election webpage, USAC candidates were allowed to spend up to $500 on their campaigns during the 2023 election. Candidates can have up to 100% of their expenses reimbursed by the elections board. However, this reimbursement is capped at 10% of the total elections board budget. Funding is split equally amongst candidates that reported spending.

While candidates are allowed to spend up to $500, the average expenditure per campaign during the 2020, 2021, 2022 and 2023 elections was about $118. The chart below shows the average expenditures per candidate for each office over the last four years. Dylan Cano, a fourth-year global studies student said that, to him, campaign finances aren’t obvious to most students, since most of the campaigning is done over Instagram. However, many candidates reported expense costs related to graphic design for social media advertising.

<!-- Render 'officers-chart' with conditional formatting based on screen size -->

<div class='line-chart' style='height: 100%; max-height: 500px;'>
  <canvas id = 'officers-chart'></canvas>
</div>

<div class = 'line-chart'>
  <canvas id = 'commissioners-chart'></canvas>
</div>

In 2021, campaign expenditures were the lowest among the last four elections. The expenditures in 2021 totaled $845.68 – about 12% of the total spending in the 2023 campaigns, which had the highest spending in the four years. Slate spending, which is limited based on the number of candidates in the slate, was not included in the above chart.

On average, independent candidates spent 50% more than candidates that were members of slates. However, in uncontested races, candidates that are part of slates are more likely to have campaign expenses. 

### Slates

<div style='height: 300px'>
  <canvas id = 'mchart'></canvas>
</div>  

In 2020, there were candidates from two slates, and in 2021, there were candidates from three different slates. Conversely in 2022 and 2023, there was only one slate, which may explain the increase in independent candidates. In 2021, independents accounted for 40% of winning candidates, and in 2020, they accounted for a third of winners. 

Paredes said that she finds it harder for individual candidates within a slate to stand out on the ballot, since she is less likely to read about each one.

For the second year in a row, those running for USAC offices chose overwhelmingly to run as independents. In 2022, nearly 74% of candidates ran as independents, with the remaining coming from the Students Organizing Active Resistance slate. In this year’s election, more than 85% of candidates ran as independents, with the remaining coming from United Bruin Movement. Overall in 2022, 80% of winning candidates were independents. When only considering contested seats, more than 87% of winning candidates were independents in 2022. This year, more than 93% of winners were independent candidates, with only a mere 6.67% of winners coming from a slate. 

Alvi said tensions in previous campaigns and a sense of disappointment from people in slates may explain the increase in independent candidates. 

"I think there's been a general disillusionment among UCLA students in slates,” Alvi said. “Some people do like the idea rather than voting for one preselected group of students. They get to form their own opinions and individually choose the person that they believe would be best for a specific role.”

### Turnout

<div style='height: 300px'>
  <canvas id = 'turnout-bar'></canvas>
</div>

Over the past eight years, voter turnout has generally decreased. The elections with the highest turnout over the last eight years were 2016 with 40.3% and 2020 with 30.06%. Only five of the last eight elections met the 20% threshold required for a referendum to pass. Students cited a lack of knowledge about USAC as well as a lack of interest in specific candidates.

“The issue lies in the fact that most of the things that USAC does usually aren't that noticeable to the outward students,” Cano said. 

Cano added that, in his opinion, this lack of visibility can result in students possibly feeling like they don’t need to be engaged in USAC elections.

Another potential factor is voters’ indifference toward candidates. 

“I think sometimes it can be about the type of people running,” Paredes said. “People might see there's no point in voting if they don’t see a candidate they believe will implement significant change.

Alvi said that among the various factors that impact voter turnout, COVID-19 was a significant cause of reduced voter turnout in recent years. 

“I would say COVID-19 is definitely the main factor,” Alvi said. “The fact that a lot of students were away from campus, only able to witness things through their screens really created a huge sense of disconnect between the average student and the imagined UCLA community."

Last year, voter turnout reached its lowest in more than a decade, at 15.19%. This year, voter turnout saw a relative increase, with 23.03% of students voting.

### Conclusion:

Cano said the average student may miss most of the things USAC does. However, the results of the election can have a direct impact on students.

"It's about having a democratic process and making sure that as many people's voices are being heard as possible,” Alvi said.

Through this democratic process, the electees are representative of the student body at UCLA, but beyond that, they are representative of students’ desires for campus, Alvi said.

“You're selecting people who are really representative, not only of the student body as people but of the wishes and ideas that they have that they want to see come to life on campus and at UCLA at large," Alvi said.

### About the Data

The USA Elections Board provided The Stack with citations for the past four years; campaign expense report forms for the past three years; a Google sheet of expenditures from the spring 2020 election; a historical roster of USAC officers since 1919; and voter turnout for the previous eight years. In addition to this information, information on slates was collected from previous Daily Bruin coverage of USAC elections.
