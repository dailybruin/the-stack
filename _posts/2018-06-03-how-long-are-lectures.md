---
title: How Long Are Lectures?
teaser: How Long/Large Are Your Lectures?
featured_image:
    url: how-long-are-lectures/radial-graph.png
og_image: how-long-are-lectures/radial-graph.png
authors:
  - rishub_kumar
  - henna_dialani
  - kyle_wong
  - dinkar_khattar
stylesheets:
  # - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css
  - /css/posts/how-long-are-lectures/app.css
  - /css/posts/how-long-are-lectures/select.css
scripts:
  - //d3js.org/d3.v3.min.js # need v3 instead of v4 for radial bar chart
  # - //d3js.org/d3-transition.v1.min.js
  - //labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js
  - //ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js
  - /js/posts/how-long-are-lectures/app.js
  - /js/posts/how-long-are-lectures/select-style.js
---

<p class="para">
Have you ever wondered which lectures seem to drag on more than others? Especially after a night out, where it is easy to just skip a lecture in an auditorium filled with 200 people? Or when you definitely have not completed your assigned readings in a class of 40 people and your professor can see your sheepish expression? At the Stack, we analyzed Registrar data to look at <b>lecture lengths</b> and <b>lecture class sizes</b> across the different departments of UCLA for the 2017-2018 academic year.
</p>

<p class="para">
There were lots of data to be gathered from UCLA's Registrar website. We wanted to look at lecture lengths and lecture class sizes across different filters (so you could also play around with the data and see patterns within the data) - be it school, North or South campus, quarter, or upper or lower division classes. For the 2017-2018 academic year, the <b>average lecture length per day</b> was <b>100.68 minutes</b>. We compared this across the different undergraduate schools and saw that Art had the highest average at 216.86 minutes while Program in Computing had the lowest at 50.0. Art had the highest average number of lecture minutes per week at 383.24 minutes - that’s 6.4 hours for a single class’s lectures (excluding discussions!) in a week. On the other hand, Physiology had the lowest average number of lecture minutes per week at 80.
</p>

<p class="para">
Across all departments in all schools, we found that <b>the top 20 departments</b> by lecture length ranged from <b>Art</b> to <b>Yiddish</b>, while <b>the bottom 20 departments</b> ranged from <b>Physiology</b> to <b>Life Sciences</b>. You can use the <i>interactive radial chart</i> below to visualize the departments with respect to filters such as average lecture length per day, average lecture length per week, average lecture size, and average number of lectures per week. The lecture lengths in minutes are relative to the lowest value. We also categorized departments by North and South campus, partially based on Stack's previous post on <a href="http://stack.dailybruin.com/2017/04/23/department-similarity/">departmental similarity</a>.

</p>

<br/>

<i class="phone-text"> Graphs are not viewable on mobile devices. Check out the article on a desktop screen and be amazed. </i> <br/><br/>
<div class = "graphs">

<div class="filters1">
<div class="typo1">Show me these quarters: <br/>
    <div class="list"><span class="placeholder-quarter-radial">All quarters</span>
        <ul class="list__ul1">
            <li data-value="all"><a href="">All quarters</a></li>
            <li data-value="Fall"><a href="fall">Fall</a></li>
            <li data-value="Winter"><a href="">Winter</a></li>
            <li data-value="Spring"><a href="">Spring</a></li>
        </ul>
    </div>
</div>

<div class="typo2">Show me these class levels: <br/>
    <div class="list"><span class="placeholder-div-radial">Upper and Lower Divs</span>
        <ul class="list__ul2">
            <li data-value="all"><a href="">Upper and Lower Divs</a></li>
            <li data-value="Upper"><a href="">Upper Divs</a></li>
            <li data-value="Lower"><a href="">Lower Divs</a></li>
        </ul>
    </div>
</div>

<div class="typo3">Show me these types of classes: <br/>
    <div class="list"><span class="placeholder-campus-radial">North and South Campus</span>
        <ul class="list__ul3">
            <li data-value="all"><a href="">North and South Campus</a></li>
            <li data-value="North"><a href="">North Campus</a></li>
            <li data-value="South"><a href="">South Campus</a></li>
        </ul>
    </div>
</div>
</div>
<br/>
<div class="filters2">
<div class="typo4">Show me this filter: <br/>
    <div class="list"><span class="placeholder-num-radial">Average lecture length per day</span>
        <ul class="list__ul4">
            <li data-value="avg_lecture_length_day"><a href="">Average lecture length per day</a></li>
            <li data-value="avg_lecture_length_week"><a href="">Average lecture length per week</a></li>
            <li data-value="avg_num_lectures_week"><a href="">Average number of lectures per week</a></li>
            <li data-value="avg_lecture_size"><a href="">Average lecture size</a></li>
        </ul>
    </div>
</div>

<div class="typo5">Show me these schools: <br/>
    <div class="list"><span class="placeholder-school-radial">All Schools</span>
        <ul class="list__ul5">
            <li data-value="all"><a href="">All Schools</a></li>
            <li data-value="David Geffen School of Medicine"><a href="">David Geffen School of Medicine</a></li>
            <li data-value="Fielding School of Public Health"><a href="">Fielding School of Public Health</a></li>
            <li data-value="Luskin School of Public Affairs"><a href="">Luskin School of Public Affairs</a></li>
            <li data-value="School of Education and Information Studies"><a href="">School of Education and Information Studies</a></li>
            <li data-value="School of Engineering and Applied Science"><a href="">School of Engineering and Applied Science</a></li>
            <li data-value="School of Theater, Film and Television"><a href="">School of Theater, Film and Television</a></li>
            <li data-value="School of the Arts and Architecture"><a href="">School of the Arts and Architecture</a></li>
            <li data-value="The College of Letters and Science"><a href="">The College of Letters and Science</a></li>
        </ul>
    </div>
</div>
</div>

<br/>

<h1 style="width: 30%; margin-top:1%">Sort Values</h1>
<section class="sort-check">
    <div class="checkboxTwo">
        <input type="checkbox" value="1" id="checkboxTwoInput" name="" />
        <label for="checkboxTwoInput"></label>
    </div>
</section>

<div id="radial-chart" class="radial-chart"></div>

<h1 style="width: 30%; margin-top:1%">Bottom 20: </h1>
<div id="barBottom" class="barBottom"></div>

<h1 style="width: 30%; margin-top:1%">Top 20:</h1>
<div id="barTop" class="barTop"></div>

</div>

<p class="para">
We also looked for patterns using the <i>interactive scatterplot</i> below where you can mouse over the data points to learn more about different insights related to a particular department, such as average lecture length per day, average lecture length per week, average lecture size, and average number of lectures per week. Play around with the filters to find some trends! The first four filters manipulate the dataset, the fifth filter changes the x-axis of the scatterplot, and the sixth filter changes the y-axis of the scatterplot.

</p><br/>

<i class="phone-text"> Graphs are not viewable on mobile devices. Check out the article on a desktop screen and be amazed. </i> <br/><br/>
<div class = "graphs">

<div class="filters3">

<div class="typo6">Show me these quarters: <br/>
    <div class="list"><span class="placeholder-quarter-scatter">All quarters</span>
        <ul class="list__ul6">
            <li data-value="all"><a href="">All quarters</a></li>
            <li data-value="Fall"><a href="fall">Fall</a></li>
            <li data-value="Winter"><a href="">Winter</a></li>
            <li data-value="Spring"><a href="">Spring</a></li>
        </ul>
    </div>
</div>

<div class="typo7">Show me these class levels: <br/>
    <div class="list"><span class="placeholder-div-scatter">Upper and Lower Divs</span>
        <ul class="list__ul7">
            <li data-value="all"><a href="">Upper and Lower Divs</a></li>
            <li data-value="Upper"><a href="">Upper Divs</a></li>
            <li data-value="Lower"><a href="">Lower Divs</a></li>
        </ul>
    </div>
</div>

<div class="typo8">Show me these types of classes: <br/>
    <div class="list"><span class="placeholder-campus-scatter">North and South Campus</span>
        <ul class="list__ul8">
            <li data-value="all"><a href="">North and South Campus</a></li>
            <li data-value="North"><a href="">North Campus</a></li>
            <li data-value="South"><a href="">South Campus</a></li>
        </ul>
    </div>
</div>
</div>

<br/>

<div class="filters4">

<div class="typo9">Show me these schools: <br/>
    <div class="list"><span class="placeholder-school-scatter">All Schools</span>
        <ul class="list__ul9">
            <li data-value="all"><a href="">All Schools</a></li>
            <li data-value="David Geffen School of Medicine"><a href="">David Geffen School of Medicine</a></li>
            <li data-value="Fielding School of Public Health"><a href="">Fielding School of Public Health</a></li>
            <li data-value="Luskin School of Public Affairs"><a href="">Luskin School of Public Affairs</a></li>
            <li data-value="School of Education and Information Studies"><a href="">School of Education and Information Studies</a></li>
            <li data-value="School of Engineering and Applied Science"><a href="">School of Engineering and Applied Science</a></li>
            <li data-value="School of Theater, Film and Television"><a href="">School of Theater, Film and Television</a></li>
            <li data-value="School of the Arts and Architecture"><a href="">School of the Arts and Architecture</a></li>
            <li data-value="The College of Letters and Science"><a href="">The College of Letters and Science</a></li>
        </ul>
    </div>
</div>

<div class="typo10">Show me this as the x-axis: <br/>
    <div class="list"><span class="placeholder-filter1-scatter">Average lecture size</span>
        <ul class="list__ul10">
            <li data-value="avg_lecture_size"><a href="">Average lecture size</a></li>
            <li data-value="avg_lecture_length_day"><a href="">Average lecture length per day</a></li>
            <li data-value="avg_num_lectures_week"><a href="">Average number of lectures per week</a></li>
            <li data-value="avg_lecture_length_week"><a href="">Average lecture length per week</a></li>
        </ul>
    </div>
</div>

<div class="typo11">Show me this as the y-axis: <br/>
    <div class="list"><span class="placeholder-filter2-scatter">Average lecture length per week</span>
        <ul class="list__ul11">
            <li data-value="avg_lecture_length_week"><a href="">Average lecture length per week</a></li>
            <li data-value="avg_lecture_length_day"><a href="">Average lecture length per day</a></li>
            <li data-value="avg_num_lectures_week"><a href="">Average number of lectures per week</a></li>
            <li data-value="avg_lecture_size"><a href="">Average lecture size</a></li>
        </ul>
    </div>
</div>

</div>

<div id="scatterplot"></div>

</div>

<p class="para">
Unhappy with how courses are designed? From Beth Lazazzera, Vice Chair of Undergraduate Affairs, we found that each faculty member determines the length and frequency of lectures when the course was first created and/or revised. Afterwards, the course (and its lecture lengths) must be approved by their department and the Faculty Executive Committee of their School or College. Now you know who to look for the next time you have to sit through a long seminar for a required core class that no one wants to take.
</p>
