---
title: From Pauley to the Pros
teaser: Explore Bruins in the NBA

authors:
    - mahir_eusufzai
key_takeaways:
    - UCLA basketball has consistently produced NBA players through the years
    - Top players include Kareem Abdul Jabbar, Russel Westbrook, and Kevin Love.
    - Some third thing

featured_image:
    url: grades-ge/scatterplot.png
og_image: grades-ge/scatterplot.png
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

 <input type="button" id="vorp" value="NBA Performance" />
 <input type="button" id="pick" value="Draft Position" />
 <input type="button" id="yrsCollege" value="Years Spent in College" />
 <input type="button" id="numPlayers" value="Number of Players Drafted" />

> The first is **VORP**, which measures how much a player contributes to the team's win over the average replacement player. While this is far from a perfect metric, star players usually have higher VORP's than role players, who usually have higher VORP's than benchwarmers.  Specifically, the graph below compares player's VORP during their best year in order to normalize the difference between active and retired players.

 <div id="chart"></div>

<p> 
<ul>
<li/> Performance is measured with VORP (how much a player contributes to the team’s wins vs the average replacement player)
<li/> The graph compares VORP in each player’s best year (not cumulative VORP) in order to normalize differences between active players and retired players
<li/> If multiple players were drafted in a particular year, the graph adds their respective VORPS
<li/> A time frame of 1969 to 2009 is used, since VORP data was not thoroughly available before 1969, and players drafted after 2009 have likely not hit their peak performance. 
 </ul>
</p>


### Notable Players 


 <h3> Top 5 VORP </h3>


<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Draft Year</th>
            <th>VORP of Best Year</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Kareem Abdul Jabbar</td>
            <td>1969</td>
            <td>10.5</td>
        </tr>
        <tr>
            <td>Russel Westbrook</td>
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


<br/>

<h3> Top 5 All Star Appearances </h3>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Draft Year</th>
            <th>All Star Appearances </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Kareem Abdul Jabbar</td>
            <td>1969</td>
            <td>19</td>
        </tr>
        <tr>
            <td>Russel Westbrook</td>
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

<br/>

<h3> Top 5 Recent Draft </h3>
<table>
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