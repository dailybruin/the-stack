---
title: UCLA Students' Major Changes from Admissions to Graduation
teaser: A look at how UCLA Students change their majors from their time of admissions to eventual degree, data aggregated from 2013-2018.
authors:
  - jeanette_lin
  - keith_atienza
key_takeaways:
  - Roughly 30% of UCLA students change their major from admissions to graduation, with the highest changes seen among Business Economics, Sociology, Psychobiology, Political Science, and Psychology students. 
  - Around 20% of admitted Life Sciences and Physical Sciences students switch to other fields, while less than 5% of Humanities, Engineering, or Social Sciences students switch to others.
  - Student and department perspectives offer accounts and advice to explore different majors to find one's passion.
featured_image:
  url: change-major/featured_image.png
scripts:
 - //ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
 - //d3js.org/d3.v5.min.js
 - //unpkg.com/d3-array@1
 - //unpkg.com/d3-collection@1
 - //unpkg.com/d3-path@1
 - //unpkg.com/d3-shape@1
 - //unpkg.com/d3-sankey@0
 - //unpkg.com/d3-sankey@0
 - /js/posts/change-major/sankey.js

---

At this time of the year, wide-eyed newly admitted students excitedly tour the campus while accomplished seniors take graduation photos as they reflect on their careers. College is often referred to as a time of exploration, and often, this involves the all-too-important choice of what to study during one’s time here. To explore how these personal choices are brought about, let’s deep-dive into the data of students’ major from admissions to graduation.

Before analyzing the data, there are some caveats that must be stated.

The dataset was provided by the Office of Academic Planning and Budget (ABP). The data is based on aggregated Bachelor’s degrees awarded from 2013 to 2018 for both freshmen and transfer students. The admissions major is based on a student’s major at their first enrolled term at UCLA, while graduation major is based on their eventual degree.  

Due to UCLA’s privacy policies, any headcounts of less than 10 students are excluded from the dataset. For instance, if there are eight students who switched from one major to another, or graduated with a particular degree, these are not reflected in the dataset. Therefore, if the diagram displays no switches in or out of a major, it still may be the case that there were few students who did but was simply not counted.

Counts of “pre-majors” are combined with those officially declared majors. Students who are admitted as “pre-majors”, mostly from impacted departments like Economics and Psychology, need to complete certain requirements before being officially admitted. Lastly, if a student has more than one major, only the primary one will count.

Explore how UCLA students change their majors from the diagram below. 

<p style="text-align: center; font-weight:bold">UCLA Students' Change of Majors Statistics</p>
<p style="text-align: center; font-style:italic">Select either an admissions major or graduation major to identify switches in or out.</p>


<div class="dropdown"></div>
<div class="dropdown2"></div>
<div id="chart"></div>
<div id="label"></div>

Overall, about 30% of UCLA students switch their majors from admissions, on par with the [national average](https://nces.ed.gov/pubs2018/2018434.pdf). Excluding Undeclared, the five most popular major by admitted students were Business Economics, Biology, Psychology, Political Science, and Biochemistry. 

The major with the highest rate of switches out was Business Economics, with roughly 75% of students switching out of the major. Without counting intradepartmental switches to Economics or Mathematics/Economics, this rate dropped to about 33%. However, these admitted students are considered as "Pre-Business Economics" and are not officially in the program - once approved, official Business Economics students do not tend to switch, according to the Economics department.

Shashwat Agarwal is one of the students who switched out of Pre-Business Economics to Economics due to the high GPA required from pre-requisite classes to officially declare the major. "I understand there is a high GPA requirement, but I also wish Business Economics has more class variety." Despite the switch, Agarwal seems satisfied with his choice. “I am still exploring my passions, but Economics has helped me see broader career paths,” stating his intended pursuit of a marketing career and an MBA in the future.

Julie Plotkin, Undergraduate Counselor for the Economics department, echoes Agarwal’s comments. “Many students select Pre-Business Economics since they think that it is a business major. When they find out that it is actually economics, not a business major, and is quantitative in nature, they sometimes realize that it is not the right fit for them," Plotkin said. Plotkin advises students to consider what the Business and Economics majors entail, especially their quantitative nature,before deciding to pursue a degree in them.

Interestingly, Computer Science and Engineering had the next highest rate of switches out of the major at about 73%, but most of these switches are intradepartmental into Computer Science. Biology, the second most popular major by admitted students, have about 55% of students switching out, with 26 unique major changes - the highest out of all.

Jessica Gonzalez is an Undergraduate Student Affairs Officer at the Ecology and Evolutionary Biology department. When asked about the popularity of Biology major, Gonzalez said, "the major reason that students pick the major is because it's what they _know_. Most students stick with what's familiar, and a lot of them have taken biology classes in high school. It is a broad field, and students tend to switch out once they realize that a lot of the classes are non-human based with topics like ecology." Gonzalez advises students to explore the classes in the major, especially the upper division requirements, and speak with department counselors before commiting,

The five majors with the highest total number of students switching in are Economics, Sociology, Psychobiology, Political Science, and Psychology. While 76% of Economics degrees were awarded to students who switched into the major, the majority come from Business Economics at 50%. Additionally, around 50% Sociology degrees awarded across the five-year span of the dataset are given to students who switched into the major.

<iframe id="bar-chart" frameborder="0" scrolling="no" style="display:block;margin:auto;" src="//plot.ly/~jeanettelin8/5.embed?showlink=false"></iframe>

Life Sciences and Physical Sciences have roughly 20% of its students switching to other fields, while Humanities and Social Sciences have less than 5% of switches out of the field. While Life Sciences is the most popular category by admitted students, Social Sciences ultimately becomes the field with most degrees awarded in the dataset.

It is also well-known that switching into Engineering from other departments is not an easy-task, as indicated by this [reference](https://www.seasoasa.ucla.edu/ls-to-engineering/) on their website. However, statistics regarding students switching in to the Engineering department is not readily reflected in the data. Kristie Liu, a current second-year, had successfully switched from Linguistics and Computer Science major to Computer Science in the Engineering department. Since Liu decided to transfer while she was a freshman, the process took over two quarters, as she had to take several pre-requisite computer science and mathematics courses in order to apply. Liu believes that all her hard work paid off and this switch in majors tailors more towards her passion. In regard to those considering switching into the Engineering department, Liu recommends focusing on grades since this transfer is extremely GPA-oriented.    

Although switching majors can be daunting, Furn Techalertumpai, a student who transferred from Mathematics/Economics to Computer Science, recommends that "if you find something you are passionate in, do it! College is really a time for you to explore different fields you might have not thought of or discovered before." Techalertumpai understands that self-doubt and lack of exposure can stand as obstacles, but with the help and support of peers at UCLA, she was able to learn to ask for help and to never give up on exploring her passions.

