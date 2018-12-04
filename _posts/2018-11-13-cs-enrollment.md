---
    title: Breaking Down the Computer Science Department -- Bit by Bit
    teaser: As the tech world has been intensely growing, explore the changes in UCLA's CS department over time.
    authors:
    - keith_atienza
    - lik_teng_ung
    - mattie_sanseverino
    key_takeaways: 
    - Applications and enrollment in the CS department has greatly increased over the years.
    - The student to faculty ratio within HSSEAS and the CS department has grown since 2013.
    - Since 2009, upper and lower division lectures have increased in size. 
    featured_image:
    url: research-funding/graph.png
    og_image: research-funding/graph.png
    stylesheets: 
    - /css/posts/cs-course-enrollment/tiles.css
    scripts: 
    - /js/posts/cs-enrollment/ratio-linechart.js
    - /js/posts/cs-enrollment/bar_graph.js
    - //cdn.plot.ly/plotly-latest.min.js
    - //cdn.plot.ly/plotly-latest.min.js
    - //d3js.org/d3.v5.min.js
    - //use.typekit.com/dkx5efl.js
    - //unpkg.com/d3-simple-slider
    - /js/posts/cs-enrollment/tiles.js
    - /js/posts/cs-enrollment/jquery-3.3.1.min.js
    - /js/posts/cs-enrollment/waffle.js
---

<br> 
## CS Applications in context

<div class='waffle'></div>



## CS vs. Engineering Faculty 
<br>
<p>Below you can see how the amount of faculty within the Computer Science department has changed relative to the faculty in the overall School of Engineering. </p>
<br> 

<iframe align="center" width="85%" height="400" frameborder="0" scrolling="no" src="//plot.ly/~MattieSanseverino/5.embed?link=false&modebar=false&width=100%&height=50%"></iframe>

<p>CS and CSE have grown in popularity as engineering majors, as relative to the enrollment in the overall School of Engineering, the enrollment in the Computer Science Department has grown significantly. For example, while the percent of CS/CSE majors within HSSEAS has risen from 13.7% in 2013 to 21.0% in 2016. </p>

<iframe align="center" width="85%" height="400" frameborder="0" scrolling="no" src="//plot.ly/~MattieSanseverino/13.embed?
link=false&modebar=false"></iframe>
<p><i>FTE stands for Full-Time-Equivalent, and according to UCLA’s Workforce Methodology, FTE is calculated based on the number of hours per week that faculty members work. For example, an FTE of 0.5 is given for a person who works half-time (20 hours per week) while an FTE of 1.0 is given for a full-time employee. </i></p>


<br>
<p>While the total enrollment in the Henry Samueli School of Engineering rose 9.64% 2013 to 2016, from 3,160 to 3,480 enrolled undergraduate students, the total rise in faculty FTE within the School of Engineering rose 1.13%. Thus, the student to faculty FTE ratio has changed from 3.65:1.00 to 4.00:1.00. </p>
<br>
<p>Since the enrollment in the Computer Science Department has grown dramatically, the percent of CS/CSE majors within HSSEAS rising from 13.7% in 2013 to 21.0% in 2016, one would expect the growth of FTE within the Computer Science Department to grow more dramatically than that of the HSSEAS, as well as reflect the growth in enrolled students. However, the number of enrolled students in the department increased significantly compared to the growth in FTE, with the student to FTE ratio rising from ___ in 2013 to ___ in 2016. </p>


<br>
<br>
## Heatmap for CS Lecture and Section Size
As the enrollment for CS and CSE majors (including freshmen and transfer) increases by 66% from 2000 to 2018, we also found that the enrollment number for CS classes has more than doubled from 2009 to 2017. Despite the surging demand, the number of CS classes offered has barely increased from 2009 to 2017. Some rare exceptions are CS 35L and CS M152A, which are classes that are taught by TA. 
<br><br>
As there are more students at UCLA, he average lecture size for CS classes increased from 36 in 2009 to 80 in 2017. You can use the interactive chart to examine how the lecture size for each CS course has changed from 2009-2017. Interestingly, we found out that more sections have been added to each lectures to accommodate more students and have kept the size of the sections pretty consistent at 30 to 50 students from 2009 to 2017.

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









    
