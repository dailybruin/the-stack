---
    title: Breaking Down the Growth of the Computer Science Department -- Bit by Bit
    teaser: As the tech industry experiences intensive growth, explore the changes in UCLA's Computer Science department over time.
    authors:
    - keith_atienza
    - lik_teng_ung
    - mattie_sanseverino
    key_takeaways: 
    - The number of applications for Computer Science majors greatly increased over the years, outpacing admission numbers and increasing selectivity.
    - The student-to-faculty ratio within School of Engineering and the Computer Science department has grown since 2013.
    - Since 2009, upper and lower division lectures have increased in size. 
    featured_image:
        url: cs-enrollment/waffle_chart.png
    og_image: cs-enrollment/waffle_chart.png
    stylesheets: 
    - /css/posts/cs-course-enrollment/tiles.css
    scripts: 
    - /js/posts/cs-enrollment/ratio-linechart.js
    - /js/posts/cs-enrollment/percent-line.js
    - //cdn.plot.ly/plotly-latest.min.js
    - //cdn.plot.ly/plotly-latest.min.js
    - //d3js.org/d3.v5.min.js
    - //use.typekit.com/dkx5efl.js
    - //unpkg.com/d3-simple-slider
    - /js/posts/cs-enrollment/tiles.js
    - /js/posts/cs-enrollment/jquery-3.3.1.min.js
    - /js/posts/cs-enrollment/waffle.js
    - plotly-latest.min.js
---
<p>
According to the Bureau of Labor Statistics, the employment of software developers is <a href="https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm#tab-6">expected to increase</a>
by 24% between 2016 and 2026. While this is but one of the many specialties a Computer Science student might undertake, the demand for Computer Science graduates continue to climb across the tech industry. 
</p>
<p>   
In pace with the tech world, UCLA's Computer Science Department experienced a significant amount of growth in the past two decades. According to the 2018 QS World University Rankings, UCLA's Computer Science program currently <a href="https://www.theguardian.com/higher-education-network/2018/feb/28/qs-world-university-rankings-2018-computer-science">ranks 13th</a> in the world. UCLA currently offers three different majors in the discipline: Computer Science, Computer Science and Engineering, and Computer Engineering, the last added recently in 2017. In this report, we explore the expansion of the department in three different perspectives: <b>admissions</b>, <b>student-to-faculty ratio</b>, and <b>lecture sizes</b>.
</p>
<br> 

## Computer Science Admissions Data (with School of Engineering in Context)

<p> 
The following graph shows the Computer Science admissions data since 2001, relative to the School of Engineering. Each square represents about fifty students.
</p>
<p>*<b>Hover</b> over a colored area to display its count. <b> Click</b> on a bar to display a particular year's admissions statistics. </p>
<div class='waffle'></div>
<br>
<p>
The chart above shows the admission statistics of Computer Science majors since 2001, relative to the overall applications that the School of Engineering receives each year. There is a definite growth in Computer Science applications starting from around 2011, recovering from the downward trend that began after 2001 to around 2010 which we cannot associate a particular explanation. The applications for the three Computer Science majors in 2018 composed about 43% of the total applications to the School of Engineering, much higher than the other engineering specializations, although it did not match the composition in 2001 where it stood at around 60%. 

</p>
<p>
In addition, the number of applications more than doubled in the span of roughly two decades and the enrollees to the program roughly doubled as well. Interestingly, there is an increase of 100 students that enrolled into the programs between 2017 and 2018, the most the department has had since 2001.
</p>
<p>
It is evident in the figure below that computer science admissions rate has shown decreasing trend since around 2011. The latest data in 2018 shows the 9.28% admissions rate in computer science majors compared to 14.08% in the overall UCLA applications, which suggests the relative selectivity of the major in terms of overall applications in recent years.
</p>

<iframe width="1100" height="500" frameborder="0" scrolling="no" src="//plot.ly/~keithatienza19/41.embed?link=false&modebar=false&width=100%&height=50%"></iframe>



## Computer Science vs. Engineering Faculty 
<br>
<p>Below you can see the growth of the CS and CSE students within HSSEAS. </p>
<br> 

<head>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</head>
<div id="percent-line"></div>

<p>Computer Science majors have grown in popularity relative to other engineering majors. Relative to the enrollment in the overall School of Engineering, the enrollment in the Computer Science Department has grown significantly. For example, the percentage of Computer Science majors within the School of Engineering has risen from 13.7% in 2013 to 21.0% in 2016. </p>


<p><i>FTE stands for Full-Time-Equivalent, and according to UCLA’s Workforce Methodology, FTE is calculated based on the number of hours per week that faculty members work. For example, an FTE of 0.5 is given for a person who works half-time (20 hours per week) while an FTE of 1.0 is given for a full-time employee. </i></p>
<head>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</head>
<div id="ratio-line"></div>

<br>
<p>While the total enrollment in the Henry Samueli School of Engineering rose 9.64% from 2013 to 2016, from 3,160 to 3,480 enrolled undergraduate students, the total rise in faculty FTE within the School of Engineering rose only 1.13%. Thus, the student to faculty FTE ratio has changed from 3.65:1.00 to 4.00:1.00 in the same time period. 
</p>
<p>The enrollment in the Computer Science Department has grown dramatically, with the percent of CS/CSE majors within HSSEAS rising from 13.7% in 2013 to 21.0% in 2016. With this, one would expect the growth of FTE within the Computer Science Department to grow more dramatically than that of the School of Engineering to reflect the growth in enrolled students. However, we expect that the student-to-faculty ratio within the Computer Science Department has risen in a similar fashion to HSSEAS. </p>


<br>
<br>

## Heatmap for Computer Science Lecture and Discussion Sizes
As the enrollment for Computer Science majors doubled from 2001 to 2018, we also found that the enrollment number for Computer Science classes more than doubled from 2009 to 2017. Despite the surging demand, the number of Computer Science classes offered has barely increased from 2009 to 2017. Some rare exceptions are CS 35L and CS M152A, which are classes that are taught by Teaching Assistants. 
<br><br>
As the number of students increase at UCLA, the average lecture size for Computer Science classes increased from 36 students in 2009 to 80 students in 2017. You can use the interactive chart to examine how the lecture size for each CS course has changed from 2009 to 2017. Interestingly, we found that more discussion sections have been added to each lecture to accommodate more students and have kept the size of the sections pretty consistent at 30 to 50 students from 2009 to 2017.

<div id="container">
<div id="legend" class="rbow2">
<ul>
<li class="q1-8"></li>
<li class="q2-8"></li>
<li class="q3-8"></li>
<li class="q4-8"></li>
<li class="q5-8"></li>
<li class="q6-8"></li>
<li class="q7-8"></li>
<li class="q8-8"></li>
</ul>
<p class="more">larger class</p>
<p class="less">smaller class</p>
</div>
<div id="year"></div>
<div id="section"></div>
<div id="vis"></div> 
<div id="controls">
<div class="section">
<fieldset id="sectype">
<input type="radio" id="Primary" name = "type" value ="Primary" checked = "checked"/><label for="Primary" class="sel"><span class="lectureSize">Lecture Size</span></label>
<input type="radio" id="Secondary" name="type" value="Secondary"/><label for="Secondary"><span class="sectionSize">Section Size</span></label>
</fieldset>
</div>
<div id="slider"></div>
</div>
<div id="dist">
<h2 class="title">Average Lecture Size for CS Classes in 2009</h2>
<div class='svg'></div>
</div>
</div>
