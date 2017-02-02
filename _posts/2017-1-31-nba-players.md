---
title: UCLA Basketball&#58; From Pauley to the Pros
teaser: In light of UCLA basketball's recent resurgence, explore some of the past and present Bruins in the NBA

authors:
    - mahir_eusufzai
key_takeaways:
    - UCLA basketball has consistently produced NBA players through the years
    - Top players include Kareem Abdul-Jabbar, Russell Westbrook, and Kevin Love.
    - Lonzo Ball could end up as one of the top 5 NBA players from UCLA

featured_image:
    url: nba-players/lonzo_thumbnail.png
og_image: nba-players/lonzo_thumbnail.png
scripts:
    - //ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
    - //cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js
    - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.js
    - /js/posts/nba-players/graphs.js

stylesheets:
    - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
    - /css/posts/nba-players/app.css

---

There’s a reason that Den Passes burn a $169 hole in your pocket, or that students have slept in tents on Bruin Walk to secure the best seats in Pauley Pavillion.  

With 11 NCAA Men’s Division I Basketball Championships —  more than any other school — UCLA touts a world-class basketball program that has produced **88 NBA players.**  

This post investigates the quantity and quality of these players over the tenure of UCLA’s basketball program.


### Trends over Time

Below you can toggle between various metrics to explore trends.
<br><br>

<blockquote>
<p id="vorp-def" class="metric-def" style="display:inline-block"> <b>"NBA Performance"</b> is measured by VORP (value over replacement player) during the player's best year </p>

<p id="pos-def" class="metric-def" style="display:none"> <b>"Draft Position"</b> shows the earliest draft pick for each year. </p>

<p id="yrs-def" class="metric-def" style="display:none"> <b>"Years at UCLA"</b> shows the average number of years playing for UCLA before entering the NBA </p>

<p id="num-drafted-def" class="metric-def" style="display:none"> <b>"Number of Players Drafted"</b> indicates how many Bruins were drafted into the NBA in a given year. </p>
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

<div id='line-chart'></div>

<div id="VORP_paragraph" class="chart_paragraph">
<blockquote>
<p>
<ul>
<li/> If multiple players were drafted in a particular year, their VORPs are added.
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

#### Interesting Facts:

* In both 1974 and 2008, UCLA sent two All-Star players to the NBA in the same year - (**Bill Walton** and **Jamaal Wilkes** in '74, **Russell Westbrook** and **Kevin Love** in '08).

* In 2006, the "Years Spent at UCLA" statistic starts to decline. This can be attributed to the **"one-and-done" phenomenon** that began from the 2006 rule in which players were required to be at least one year removed from high school before entering the NBA draft.  This forced many talented players to spend a year in college before moving on to the NBA.

* **6 players from UCLA's 1995 championship team went to the NBA.**  However, none of those players flourished in the NBA. 

<br>

### Notable Players


<div id="wrapper" style="text-align: center">    
    <div id="yourdiv" style="display: inline-block;">
		 <input type="button" id="top-VORP" class ="toggleButton 2 active" value="VORP" />
		 <input type="button" id="top-all-star" class ="toggleButton 2" value="All-Star" />
		 <input type="button" id="top-recent" class ="toggleButton 2" value="Recent Players" />
		 <input type="button" id="top-one-and-done" class ="toggleButton 2" value="One-and-Done Players" />

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
            <td>6</td>
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

<table id="one-and-done-table" class="top-player-table" style="display:none">
    <thead>
        <tr>
            <th>Name</th>
            <th>Draft Year</th>
            <th> Pick </th>
        </tr>
    </thead>
    <tbody>
         <tr>
            <td>Trevor Ariza</td>
            <td>2004</td>
            <td>43</td>
        </tr>
        <tr>
            <td>Kevin Love </td>
            <td>2008</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Jrue Holiday</td>
            <td>2009</td>
            <td>17</td>
        </tr>
        <tr>
            <td>Shabazz Muhammad</td>
            <td>2013</td>
            <td>14</td>
        </tr>
        <tr>
            <td>Zach LaVine</td>
            <td>2014</td>
            <td>13</td>
        </tr>
         <tr>
            <td>Kevon Looney</td>
            <td>2014</td>
            <td>30</td>
        </tr>
    </tbody>
</table>


<br>

### Where does Lonzo rank?

This year's revitalized UCLA basketball showcases at least 2 players expected to be selected in the NBA draft: **Lonzo Ball, expected second pick;** **T.J. Leaf, expected 20th to 22nd pick;** , and possibly a third player in **Ike Anigbogu.**

Of the three, Ball is the most likely to someday sit on the pedestal of UCLA greats.  While forecasting the trajectory of any NBA prospect is not a trivial task, examining the career of a similar player may proffer some guidance.


#### College stats of Lonzo Ball vs. Jason Kidd
<div id='bar-chart'></div>
<br>

> Ball's statistics are up to date as of Jan. 29, 2017.  Kidd's statistics are an average of his 2-year college career.

<br> 

#### Vitals of Lonzo Ball vs. Jason Kidd

<table class="vitals-table">
	<thead>
		<tr> 
			<td> </td>
			<td> Height </td>
			<td> Weight </td>
		</tr>
	</thead>
	<tr> 
		<td> Lonzo Ball </td>
		<td> 6-6 </td>
		<td> 190 lbs </td>
	</tr>
	<tr>
		<td> Jason Kidd </td>
		<td> 6-4 </td>
		<td> 205 lbs </td>
	</tr>
</table>

<br>


Admittedly, similar college production and vitals are insufficient evidence to conclude that Ball will follow Kidd's footsteps, but the comparison does warrant some attention. If Ball does follow a similar career path as Kidd, then he may end up as one of the most successful NBA players out of UCLA.

#### VORP of Best Year: Kidd vs. UCLA Greats
<div id='vorp-kidd-comparison-chart'></div>

<br> 
The chart above indicates that if Ball's career is identical to Kidd's, he could end up as the fourth best player out of UCLA (measured by VORP in a player's best NBA year).
<br>

### Data Collection and Discussion of VORP

* Statistics of the players were taken from [Basketball Reference](http://wwww.basketball-reference.com).
* Mock draft projections were referenced from [SI](http://www.si.com/nba/2017/01/27/nba-mock-draft-prospects-rankings-lonzo-ball-markelle-fultz) and [DraftExpress](http://www.draftexpress.com/nba-mock-draft/2017/)
* Value over Replacement Player (VORP) was chosen as a metric to evaluate players since it's influenced by a variety of contributions, including points, assists, rebounds, and turnovers, whereas a metric like "Points per Game" only measures one dimension of a player's performance.  
* Additionally, when discussing VORP, it is usually measured as a cumulative statistic over a player's career.  However, "VORP of Player's Best Year" was selected in order to normalize the difference between retired players and active players.  **In other words, "VORP of Player's Best Year" is a measure of a player's performance during their 'prime'.**
* More information about VORP can be found [here:](http://www.basketball-reference.com/about/bpm.html)
