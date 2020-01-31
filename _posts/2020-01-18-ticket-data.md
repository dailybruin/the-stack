---
title: "Stick It to the Ticket"

teaser: Where are you most likely to get a parking ticket, and why? Find out the times and days when parking citations spike near you.
authors:
  - jeanette_lin
  - jc_rios
  - kelly_chen
  - keri_chen
key_takeaways:
  - The streets with the most parking tickets are Gayley Avenue, Westwood Boulevard, Weyburn Avenue, Landfair, Avenue and Lindbrook Drive.
  - Parking tickets tend to spike during street cleaning at 8AM.
featured_image:
  url: ticket-data/featured.png
og_image: ticket-data/featured.png

stylesheets:
  - /css/posts/ticket-data/index.css
  
scripts:
  - https://code.jquery.com/jquery-3.4.1.min.js
  - //d3js.org/d3.v3.min.js


  

  
---
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
#### Teaser
<p class="text" style="margin:20px;">It’s notoriously impossible to find parking at UCLA, especially in the Westwood area. The difficult parking situation is compounded by the many parking regulations enforced in the area, resulting in a multitude of parking tickets for a variety of violations. In 2017 alone, 37,931 parking tickets were issued within the surrounding Westwood area. Since this problem has affected and continues to affect many students, we decided to explore the frequency of tickets issued in certain areas and streets, the most common parking violations and the times of day and days of the week when you’re more likely to be ticketed.
</p>

<p class="text" style="margin:20px;">The top ticketing citations are for expired meters, prohibited parking/street cleaning and violating parking time limits. These three violations result in fines of $63, $73 and $58, respectively, with the average parking ticket in the Westwood area costing around $64.38 and the median at $63. However, fines can increase to as much as $171 when factoring in late fees and second offenses, making parking a little riskier for those without permits.
</p>

<br/>
<p class="text" style="margin:20px;">
Use the dropdown menu to see the parking distribution for each month in 2018.
</p>
<br/>


<div class="month-select" style="width:200px;">
<select id='month' onchange='changemonth()'>
  <option value="jan">January</option>
  <option value="feb">February</option>
  <option value="mar">March</option>
  <option value="apr">April</option>
  <option value="may">May</option>
  <option value="june">June</option>
  <option value="july">July</option>
  <option value="aug">August</option>
  <option value="sept">September</option>
  <option value="oct">October</option>
  <option value="nov">November</option>
  <option value="dec">December</option>
</select>
</div>


<div id="map"></div>
<br/>


<p class="text" style="margin:20px;">
Parking tickets are clustered most prominently around Gayley Avenue, Westwood Boulevard, Weyburn Avenue, Landfair Avenue and Lindbrook Drive. Check out the distribution around your apartment on the map above.
</p>

<p class="text" style="margin:50px;">
The frequency of parking tickets peaks during January, August and June, which coincides roughly with move-in and move-out periods for students.
</p>

<script src="/js/posts/ticket-data/index.js"></script>

<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAtIR0I3rLXvB4YTJ3L_G2iq4koHzmJgp8&libraries=visualization&callback=initMap">
</script>

<br>

<br>
<div  id="plotly-div"></div>


<p class="text" style="margin: 50px;">
As seen in this graph, the number of tickets given peaks at 8 a.m. and spikes again at 11 a.m. and noon. The high number of tickets at 8 a.m. is likely because of street cleaning regulations on Thursdays and Fridays, which contributes to the fact that approximately 50% of parking tickets in 2018 were given on Thursdays and Fridays, with one-third of Thursday tickets issued at 8 a.m. No parking/street cleaning was the most common type of parking violation in 2018, with other top violation reasons including meter expiration, parking over time limits and red zones. Daily Bruin posted a <a href="https://dailybruin.com/2019/12/07/graphics-gayley-parking-policies/">graphic</a> in 2019 that cites the parking restrictions for different areas of Westwood.
</p>



 
 <div id="plotly-div2"></div>

<br>
#### Contextualizing to the Rest of LA
<p class="text" style="margin:30px;">
Additionally, there has been <a href="https://www.w3schools.com">controversy</a> over some parking tickets doled out to UCLA students living in the Westwood area in 2015, after university police increased citations for cars that people left in areas between streets and sidewalks around Westwood. Indeed, parking on the sidewalk is one of the top-10 parking violation reasons found in the parking ticket data for the Westwood area.
 </p>
 <p class="text" style="margin:30px;">
Generalizing to the rest of the <a href="https://ladot.lacity.org/what-we-do/parking/parking-tickets">City of LA</a>, the average ticket is $68. The majority of the average ticket fine – about $45.50 – goes toward municipal services such as police and fires, while the rest is used for state and county fees. There are also additional fines for fix-it citations and parking violations in handicapped-accessible spaces.
 </p>
 <p class="text" style="margin:30px;">
If you would like to contest your Westwood parking citation, visit the <a href="https://prodpci.etimspayments.com/pbw/include/laopm/contest.htm">LA Department of Transportation</a> for more details. 
</p>







<script>




trace2 = {
  line: {color: 'rgba(31,119,180,1)'}, 
  mode: 'lines+markers', 
  type: 'scatter', 
  xsrc: 'jeanettelin8:14:dcc1d9', 
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 
  ysrc: 'jeanettelin8:14:f196ab', 
  y: [153, 647, 187, 135, 90, 140, 245, 269, 5105, 1566, 1403, 2787, 2781, 1497, 1283, 1195, 2331, 1114, 472, 490, 161, 139, 128, 33], 
  frame: null, 
  xaxis: 'x', 
  yaxis: 'y', 
  marker: {
    line: {color: 'rgba(31,119,180,1)'}, 
    color: 'rgba(31,119,180,1)'
  }, 
  mode: 'markers+lines', 
  error_x: {color: 'rgba(31,119,180,1)'}, 
  error_y: {color: 'rgba(31,119,180,1)'}
};
data2 = [trace2];
layout2 = {
  title: 'Hourly Tickets in 2018', 
  width: 4, 
  xaxis: {
    title: 'Hour', 
    domain: [0, 1], 
    tickmode: 'array', 
    ticktext: ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'], 
    tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 
    automargin: true
  }, 
  yaxis: {
    title: 'Number of Tickets', 
    domain: [0, 1], 
    automargin: true
  }, 
  margin: {
    b: 40, 
    l: 60, 
    r: 10, 
    t: 25
  }, 
  hovermode: 'closest', 
  showlegend: false
};
Plotly.plot('plotly-div2', {
  data: data2,
  layout: layout2
});






















trace1 = {
  line: {
    color: 'rgb(8,48,107)', 
    width: 10
  }, 
  sort: false, 
  type: 'bar', 
  xsrc: 'jeanettelin8:16:18b986', 
  x: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], 
  ysrc: 'jeanettelin8:16:64b793', 
  y: [1171, 2736, 3251, 3503, 5977, 6023, 1690], 
  frame: null, 
  xaxis: 'x', 
  yaxis: 'y', 
  marker: {
    line: {color: 'rgba(31,119,180,1)'}, 
    color: 'rgb(158,202,225)'
  }, 
  error_x: {color: 'rgba(31,119,180,1)'}, 
  error_y: {color: 'rgba(31,119,180,1)'}, 
  textsrc: 'jeanettelin8:16:497088', 
  text: ['4.8% of 2018 tickets', '11.2% of 2018 tickets', '13.4% of 2018 tickets', '14.4% of 2018 tickets', '24.5% of 2018 tickets', '24.7% of 2018 tickets', '6.9% of 2018 tickets']
};
data = [trace1];
layout = {
  title: 'Weekly Tickets in 2018', 
  xaxis: {
    type: 'category', 
    title: 'Day of the Week', 
    domain: [0, 1], 
    automargin: true, 
    categoryarray: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], 
    categoryorder: 'array'
  }, 
  yaxis: {
    title: 'Number of Tickets', 
    domain: [0, 1], 
    automargin: true
  }, 
  margin: {
    b: 40, 
    l: 60, 
    r: 10, 
    t: 25
  }, 
  hovermode: 'closest', 
  showlegend: false
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});
</script>
