---
title: "Stick It to the Ticket"

teaser: Where are you most likely to get a parking ticket, and why? Find out the times and days when parking citations spike near you.
authors:
  - jeanette_lin
  - jc_rios
  - kelly_chen
  - keri_chen
key_takeaways:
  - Explore if your apartment is in a hotbed for parking tickets and what you’re most likely to be ticketed for.
  - Parking tickets tend to spike during street cleaning at 8AM.
featured_image:
  url: ticket-data/featured.png
og_image: ticket-data/featured.png

stylesheets:
  - /css/posts/ticket-data/index.css
  
scripts:
  - https://code.jquery.com/jquery-3.4.1.min.js
  - //d3js.org/d3.v3.min.js
  #- https://cdn.plot.ly/plotly-latest.min.js
#  - https://maps.googleapis.com/maps/api/js?key=AIzaSyAtIR0I3rLXvB4YTJ3L_G2iq4koHzmJgp8&libraries=visualization
#  - /datasets/ticket-data/january/data.js
 # - https://maps.googleapis.com/maps/api/js?key=AIzaSyAtIR0I3rLXvB4YTJ3L_G2iq4koHzmJgp8&libraries=visualization
  #- /js/posts/ticket-data/index.js
  #- https://maps.googleapis.com/maps/api/js?key=AIzaSyAtIR0I3rLXvB4YTJ3L_G2iq4koHzmJgp8&libraries=visualization

  

  
---
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
#### Teaser
<p class="text">The top ticketing citations are for expired meters, prohibited parking/street cleaning, and violating parking time limits. These three violations result in fines of $63, $73, and $58, respectively, with the average parking ticket in the Westwood area costing $64.38 and the median at $63. However, the fines could increase to as much as $171 when factoring in late fees or on a second offense, making parking a little riskier for those without permits.</p>

<p class="text">
  Walking around campus, one can spot the iconic trio of landfill, recycling, and compost bins nearly everywhere. Recycling and composting are more eco-friendly than throwing everything into landfill, but do students actually use these bins? The Daily Bruin investigates how students sort their trash into these bins on campus and the Hill.
</p>



<br/>


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


<script src="/js/posts/ticket-data/index.js"></script>







<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAtIR0I3rLXvB4YTJ3L_G2iq4koHzmJgp8&libraries=visualization&callback=initMap">
</script>



<br>
<br>
<p class="text">
When Should You Move Your Car?

The frequency of parking tickets peaks during January, August, and June, which coincides roughly with move-in and move-out periods.
</p>

<br>
<div id="plotly-div"></div>

<br>
<p class="text">
As seen in this graph, the number of tickets given peaks at the hour of 8AM and spikes again during the hours of 11AM and 12PM. The high number of tickets at 8AM is likely due to street cleaning regulations on Thursdays and Fridays, which likely contributes to the fact that approximately 50% of parking tickets in 2018 were given on Thursdays and Fridays, with ⅓ of Thursday tickets being issued at 8AM.
</p>



<iframe width="90%" height="500" frameborder="0" scrolling="no" src="//plot.ly/~jeanettelin8/15.embed?showlink=false"></iframe>
<br>
#### Contextualizing to the Rest of LA
<p>
Additionally, there has been controversy over some parking tickets doled out to UCLA students living in the Westwood area beginning in 2015, after university police increased its distribution of citations for cars left in spaces between the street and sidewalk in Westwood Indeed, “PARKED ON SIDEWALK” is one of the top 10 parking violation reasons found in the parking ticket data for the Westwood area.
 
Generalizing to the rest of LA county, the average ticket is $68. Some ($17.50 for meter violations, and $12.50 for other violations) goes to state and county fees and the remainder ($45.50) goes to the city's general fund to pay for essential municipal services, including police and fire. There are additional distributions for fix-it citations and disabled parking violations.
 
If you would like to contest your Westwood parking citation, visit the LA Department of Transportation for more details. 
</p>







<script>







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
