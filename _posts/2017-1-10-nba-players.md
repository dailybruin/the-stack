---
title: UCLA Basketball&#58; From Pauley to the Pros
teaser: In light of UCLA basketball's recent resurgence, explore some of the former Bruins in the NBA

authors:
    - mahir_eusufzai
key_takeaways:
    - UCLA basketball has consistently produced NBA players through the years
    - Top players include Kareem Abdul Jabbar, Russel Westbrook, and Kevin Love.
    - Some third thing

featured_image:
    url: nba-players/graph.png
og_image: nba-players/graph.png
scripts:
    - //ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
    - //cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js
    - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.js
    - /js/posts/nba-players/graphs.js

stylesheets:
    - /css/posts/nba-players/app.css
    - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css

---

There’s a reason that Den Passes burn a $169 hole in your pocket, or that students have slept in tents on Bruin Walk to secure the best seats in Pauley Pavillion.  

With 11 National Champions —  more than any other school — UCLA touts a world-class basketball program that has produced **88 NBA Players.**  

This post investigates the quantity and quality of these players over the tenure of UCLA’s basketball program.


### Trends over Time

Below you can toggle between various metrics to explore trends.
<br><br>

<blockquote>
<p id="vorp-def" class="metric-def" style="display:inline-block"> <b>NBA Performance</b> is measured by VORP (value over replacement player) during the player's best year </p>

<p id="pos-def" class="metric-def" style="display:none"> <b>Draft Position</b> shows the earliest draft pick for each year. </p>

<p id="yrs-def" class="metric-def" style="display:none"> <b>Years at UCLA</b> shows the average years playing for UCLA before entering the NBA </p>

<p id="num-drafted-def" class="metric-def" style="display:none"> <b>Number of Players Drafted</b> indicates how many Bruins were drafted into the NBA in a given year. </p>
</blockquote>
<div id="wrapper" style="text-align: center">    
    <div id="yourdiv" style="display: inline-block;">
		<input type="button" id="vorp" class ="toggleButton 1 active" value="NBA Performance" />
		<input type="button" id="pick" class ="toggleButton 1" value="Draft Position" />
		<input type="button" id="yrsCollege" class ="toggleButton 1" value="Years at UCLA" />
		<input type="button" id="numPlayers" class ="toggleButton 1" value="Number of Players Drafted" />
    </div>
</div>

<br>

<div id="chart"></div>
<div id="VORP_paragraph" class="chart_paragraph">
<blockquote>
<p> 
<ul>
<li/> If multiple players were drafted in a particular year, their VORP's are added.
<li/> A time frame of 1969 to 2009 is used, since VORP data was not thoroughly available before 1969, and players drafted after 2009 have likely not hit their peak performance. 
 </ul>
</p>
</blockquote>
</div>

<div id="Draft_paragraph" class="chart_paragraph" style="display:none" >
<blockquote>
<p> 
<ul>
<li/> An early draft number indicates that a particular player was a top prospect.
<li/> If multiple players were drafted in a particular year, the earliest pick is taken.
<li/> Undrafted players and players selected using a territorial pick were omitted.
 </ul>
</p>
</blockquote>
</div>

<div id="Yrs_paragraph" class="chart_paragraph" style="display:none" >
<blockquote>
<p> 
<ul>
<li/> If multiple players were drafted in the same year, the average was taken
 </ul>
</p>
</blockquote>
</div>

<div id="Num_drafted_paragraph" class="chart_paragraph" style="display:none" >
<blockquote>
<p> 
<ul>
<li/> Undrafted players were omitted.
</ul>
</p>
</blockquote>
</div>

<br> 

### Notable Players 


<div id="wrapper" style="text-align: center">    
    <div id="yourdiv" style="display: inline-block;">
		 <input type="button" id="top-VORP" class ="toggleButton 2 active" value="VORP" />
		 <input type="button" id="top-all-star" class ="toggleButton 2" value="All-Star" />
		 <input type="button" id="top-recent" class ="toggleButton 2" value="Recent Players" />
 	</div>
 </div>

<table id="VORP-table" class ="top-player-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Draft Year</th>
            <th>VORP of Best Year</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Kareem Abdul-Jabbar</td>
            <td>1969</td>
            <td>10.5</td>
        </tr>
        <tr>
            <td>Russell Westbrook</td>
            <td>2008</td>
            <td>8.3</td>
        </tr>
        <tr>
            <td>Kevin Love</td>
            <td>2008</td>
            <td>7.3</td>
        </tr>
        <tr>
            <td>Baron Davis</td>
            <td>1999</td>
            <td>5.2</td>
        </tr>
         <tr>
            <td>Reggie Miller</td>
            <td>1987</td>
            <td>5.2</td>
        </tr>
    </tbody>
</table>

<table id="all-star-table" class ="top-player-table" style="display:none">
    <thead>
        <tr>
            <th>Name</th>
            <th>Draft Year</th>
            <th>All Star Appearances </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Kareem Abdul-Jabbar</td>
            <td>1969</td>
            <td>19</td>
        </tr>
        <tr>
            <td>Russell Westbrook</td>
            <td>2008</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Marques Johnson</td>
            <td>1977</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Gail Goodrich</td>
            <td>1965</td>
            <td>5</td>
        </tr>
         <tr>
            <td>Reggie Miller</td>
            <td>1987</td>
            <td>5</td>
        </tr>
    </tbody>
</table>

<table id="recent-table" class="top-player-table" style="display:none">
    <thead>
        <tr>
            <th>Name</th>
            <th>Draft Year</th>
            <th>Team</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Normal Powell </td>
            <td>2015</td>
            <td>Raptors</td>
        </tr>
        <tr>
            <td>Kevon Looney</td>
            <td>2015</td>
            <td>Warriors</td>
        </tr>
        <tr>
            <td>Zach Lavine </td>
            <td>2014</td>
            <td>Timberwolves</td>
        </tr>
        <tr>
            <td>Kyle Anderson</td>
            <td>2014</td>
            <td>Spurs</td>
        </tr>
         <tr>
            <td>Jordan Adams</td>
            <td>2014</td>
            <td>Grizzlies</td>
        </tr>
    </tbody>
</table>
