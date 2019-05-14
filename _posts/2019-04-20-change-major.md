---
title: Strike it Rich with a Major Switch
teaser: A look at how UCLA students change their majors from admissions to their attained degree, data aggregated from 2013-2018.
authors:
  - jeanette_lin
  - keith_atienza
key_takeaways:
  - Roughly 30% of UCLA students change their majors, with the highest changes seen among Business Economics, Sociology, Psychobiology, Political Science, and Psychology students. 
  - Around 20% of admitted Life Sciences and Physical Sciences students switch to other fields, while less than 5% of Humanities, Engineering, or Social Sciences students switch. 
  - Students share their personal stories and advice on switching majors that allowed them to pursue their passions and career interests.
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

Choosing a major can feel like one of the biggest decisions an incoming student makes, and the pressure of choosing the “right” major can be overwhelming. However, as students gain more experiences and exposure throughout college, they begin to realize what they are truly passionate about, and this passion may not necessarily align with their major. This phenomenon of changing majors is quite common as we will see below.


### About the Data

The dataset was provided by the Office of Academic Planning and Budget (APB). The data is based on aggregated Bachelor’s degrees awarded from 2013 to 2018 for both freshmen and transfer students. The admissions major is based on a student’s major at their first enrolled term at UCLA, while the graduation major is based on their attained degree. 

Due to UCLA’s privacy policies, any headcounts of less than 10 students are excluded. For instance, if there are eight students who switched from one major to another, these are not reflected in the dataset. Therefore, if the diagram displays no switches in or out of a major, it still may be the case that there were a few students who did but were simply not counted.

Furthermore, counts of “pre-majors” are combined with the officially declared majors. Students who are admitted as “pre-majors”, especially those from impacted departments such as Economics and Psychology, need to complete certain requirements before being officially admitted to the program. Lastly, if a student has more than one major, only the primary one will count. 


### Major Switches

Explore how UCLA students change their majors from the diagram below.


<p style="text-align: center; font-weight:bold">UCLA Students' Major Switches</p>
<p style="text-align: center; font-style:italic">Select either an admissions major or graduation major to identify switches in or out.</p>


<div class="dropdown"></div>
<div class="dropdown2"></div>
<div id="chart"></div>
<div id="label"></div>

Overall, about 30% of UCLA students switch their majors from admissions, which is on par with the [national average](https://nces.ed.gov/pubs2018/2018434.pdf). Excluding the Undeclared major, the five most popular majors by admitted students were Business Economics, Biology, Psychology, Political Science, and Biochemistry.

The major with the highest rate of switches out was Business Economics, with roughly 75% of students switching out of the major. When excluding intradepartmental switches to Economics or Mathematics/Economics, this rate dropped to about 33%. However, these admitted students are considered as "Pre-Business Economics" and are not officially in the program - once officially approved, Business Economics students do not tend to switch, according to the Economics department.

Shashwat Agarwal is one of the students who switched out of Pre-Business Economics to Economics due to the high GPA required from the prerequisite classes needed to officially declare the major. "I understand there is a high GPA requirement, but I also wish Business Economics has more class variety." Despite the switch, Agarwal seems satisfied with his choice. “I am still exploring my passions, but Economics has helped me see broader career paths,” stating his intended pursuit of a marketing career and an MBA in the future.

Julie Plotkin, Undergraduate Counselor for the Economics department, said “many students select Pre-Business Economics since they think that it is a business major. When they find out that it is actually economics, not a business major, and is quantitative in nature, they sometimes realize that it is not the right fit for them." Plotkin advises students to consider what the Business Economics and Economics majors entail, especially their quantitative nature, before deciding to pursue a degree in them.

Interestingly, Computer Science and Engineering had the next highest rate of switches out of the major at about 73%, but most of these switches are intradepartmental into Computer Science. Biology, the second most popular major by admitted students, has about 55% of its students switching out into 26 different majors, which is the highest number of unique switches from one subject.

Jessica Gonzalez is an Undergraduate Student Affairs Officer at the Ecology and Evolutionary Biology department. When asked about the popularity of Biology, Gonzalez said, "the major reason that students pick the major is because it's what they know... and a lot of them have taken biology classes in high school... students tend to switch out once they realize that a lot of the classes are non-human based with topics like ecology." Gonzalez advises students to explore the classes in the major, especially the upper division requirements, and speak with department counselors before committing.

The five majors with the highest total number of students switching in are Economics, Sociology, Psychobiology, Political Science, and Psychology. While 76% of Economics degrees were awarded to students who switched into the major, the majority come from Business Economics at 50%. Additionally, around 50% of Sociology degrees awarded in the past five years are given to students who switched into the major.


<p style="text-align: center; font-weight:bold">UCLA Students' Major Switches by Category</p>
<iframe id="bar-chart" frameborder="0" scrolling="no" style="display:block;margin:auto;" src="//plot.ly/~jeanettelin8/5.embed?showlink=false"></iframe>

<br>

Life Sciences and Physical Sciences have roughly 20% of its students switching to other fields, while Humanities and Social Sciences have less than 5% of switches out of the field. While Life Sciences is the most popular category by admitted students, Social Sciences ultimately becomes the field with the most degrees awarded.

It is also well-known that switching into Engineering from other departments is not an easy task, as indicated by this [reference](https://www.seasoasa.ucla.edu/ls-to-engineering/) on the department’s website. However, statistics regarding students switching in to the Engineering department is not readily reflected in the data. Kristie Lim, a current second-year, had successfully switched from Linguistics and Computer Science major to Computer Science in the Engineering department. Since Lim decided to transfer while she was a freshman, the process took more than two quarters, as she had to take several prerequisite computer science and mathematics courses in order to apply. Lim believes that all her hard work paid off, and this switch tailors more towards her passion. In regard to those considering switching into the Engineering department, Lim recommends focusing on grades since this transfer is extremely GPA-oriented.   

Furn Techalertumpai, a current third-year student, transferred from Mathematics/Economics to Computer Science. Techalertumpai said that self-doubt and lack of exposure can stand as obstacles, but with the support of her peers, she was able to learn how to ask for help and to never give up on exploring her passions. Although switching majors can be daunting, Techalertumpai said that "if you find something you are passionate in, do it! College is a time for you to explore different fields you might have not thought of or discovered before.”
