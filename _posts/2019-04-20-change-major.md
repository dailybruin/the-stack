---
title: UCLA Students' Major Changes from Admissions to Graduation
teaser: A look at how UCLA Students change their majors from their time of admissions to eventual degree, data aggregated from 2013-2018.
authors:
  - jeanette_lin
  - keith_atienza
key_takeaways:
  - Roughly 30% of UCLA students change their major from admissions to graduation, with the highest changes seen among Business Economics, Sociology, Psychobiology, Political Science, and Psychology students. 
  - Students tend to remain within the same field of studies. Around 20% Life Sciences and Physical Sciences students switch to other fields, while less than 5% of Humanities, Engineering, or Social Sciences students switch to others.
featured_image:
  url: change-major/featured_image.png
scripts:
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

Due to UCLA’s privacy policies, any headcounts of less than 10 students are excluded from the dataset. For instance, if there are eight students who switched from one major to another, or graduated with a particular degree, these are not reflected in the dataset. Therefore, if the diagram displays no switches in or out of a major, it still may be the case that there were few students who did but was not counted.

Counts of “pre-majors” are combined with those officially declared majors. Students who are admitted as “pre-majors”, mostly from impacted departments, need to complete certain requirements before being officially admitted to their majors of interest. Lastly, if a student has more than one major, only the primary one will count.

Explore how UCLA students change their majors from the diagram below. 

<p style="text-align: center; font-weight:bold">UCLA Students' Change of Majors Statistics</p>
<p style="text-align: center; font-style:italic">Select either an admissions major or graduation major to identify switches in or out.</p>


<div class="dropdown"></div>
<div class="dropdown2"></div>
<div id="chart"></div>
<div id="label"></div>

Overall, about 30% of UCLA students switch their majors from admissions, on par with the [national average](https://nces.ed.gov/pubs2018/2018434.pdf). Excluding Undeclared, the five most popular major by admitted students were Business Economics, Biology, Psychology, Political Science, and Biochemistry. 

The major with the highest rate of switches out was Business Economics, with roughly 75% of students switching out of the major. Without counting intradepartmental switches to Economics or Mathematics/Economics, this rate dropped to about 33%. 

> \"maybe a block quote from student profiles like this?\"

[blip of guy who switched out]. 

The Economics Department is not available to comment at this time. 

Interestingly, Computer Science and Engineering had the next highest rate of switches out of the major at about 73%, but most of these switches are intradepartmental into Computer Science. Biology, the second most popular major by admitted students, have about 55% of students switching out, with 26 unique major changes - the highest out of all.

The five majors with the highest total number of students switching in are Economics, Sociology, Psychobiology, Political Science, and Psychology. While 76% of Economics degrees were awarded to students who switched into the major, the majority come from Business Economics at 50%. Additionally, around 50% Sociology degrees awarded across the five-year span of the dataset are given to students who switched into the major.

Students also generally stay within the same field of studies. Notably, there were only 11 students out of almost 3,000 who switched out of the Engineering department onto other majors in this dataset. Furthermore, Life Sciences and Physical Sciences have roughly 20% of its students switching to other fields, while Humanities and Social Sciences have less than 5% of switches out of the field.

It’s well-known that switching into the Engineering department from other departments is not an easy-task, as indicated by this [reference](https://www.seasoasa.ucla.edu/ls-to-engineering/) on their website. While statistics regarding students switching in to the Engineering department is not readily reflected in the data, one such success story is .

> \"maybe another block quote from student profiles like this?\"