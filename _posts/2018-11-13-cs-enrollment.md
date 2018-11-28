---
    title: CS Enrollment Through the Ages
    teaser: temporary
    authors:
    - keith_atienza
    - lik_teng_ung
    - mattie_sanseverino
    key_takeaways: 
    - temporary
    - temporary 
    featured_image:
    url: research-funding/graph.png
    og_image: research-funding/graph.png
    stylesheets: 
    - /css/posts/cs-course-enrollment/tiles.css
    - /css/posts/cs-course-enrollment/reset.css
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
    - 
---
text text text text introduce the article and what we're going to be talking about

## CS vs. Engineering Faculty 
Below you can see how the amount of faculty within the Computer Science department has changed relative to the faculty in the overall School of Engineering. 

<div>
<a href="https://plot.ly/~MattieSanseverino/5/?share_key=3JyeDJ470xGsvNpg522Qno" target="_blank" title="Plot 5" style="display: block; text-align: center;"><img src="https://plot.ly/~MattieSanseverino/5.png?share_key=3JyeDJ470xGsvNpg522Qno" alt="Plot 5" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
<script data-plotly="MattieSanseverino:5" sharekey-plotly="3JyeDJ470xGsvNpg522Qno" src="https://plot.ly/embed.js" async></script>
</div>
<div>
<a href="https://plot.ly/~MattieSanseverino/7/?share_key=4Of6oJPZ6ITegIGW4UsABd" target="_blank" title="Plot 7" style="display: block; text-align: center;"><img src="https://plot.ly/~MattieSanseverino/7.png?share_key=4Of6oJPZ6ITegIGW4UsABd" alt="Plot 7" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
<script data-plotly="MattieSanseverino:7" sharekey-plotly="4Of6oJPZ6ITegIGW4UsABd" src="https://plot.ly/embed.js" async></script>
</div>


## CS tile chart for average lecture size
As the enrollment for CS and CSE majors (including freshmen and transfer) increases by 66% from 2000 to 2018, we also found that the enrollment number for CS classes has more than doubled from 2009 to 2017. Despite the surging demand, the number of CS classes offered has barely increased from 2009 to 2017. Some rare exceptions are CS 35L and CS M152A, which are classes that are taught by TA. 

As expected (as you might have noticed too), the average lecture size for CS classes increased from 36 in 2009 to 80 in 2017. You can use the interactive chart to examine how the lecture size for each CS course has changed from 2009-2017. Interestingly, we found out that more sections have been added to each lectures to accommodate more students and have kept the size of the sections pretty consistent at 30 to 50 students from 2009 to 2017.

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




<br>
data analysis text ?? I don't have all the data yet
<br>

## hi world


<div id="div1"></div>
<div id="div2"></div>


    
