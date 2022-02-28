---
title: Punctuality and Popularity of Public Transit Routes near UCLA Campus

teaser: The Stack analyzes data from four major transportation agencies serving the Westwood area, looking at how commuter students are impacted by bus schedules and how ridership levels have changed since January 2019.

authors:
  - justin_gong
  - mansa_krishna
  - nancy_zhang

key_takeaways:
  - From July 2019 to October 2021, buses operated by Antelope Valley Transit Authority, the Los Angeles Department of Transportation and Santa Clarita Transit were late 23% of the time.
  - Monthly ridership of buses run by AVTA, LADOT and Santa Clarita Transit decreased by over 70% during the pandemic.
  - A quarter of UCLA commuter students used public transit in 2019, while only 8% of students commuting to campus traveled via public transit in 2020.

featured_image:
  url:
  caption:
og_image:

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js
  - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - //code.jquery.com/jquery-3.6.0.min.js
  # - /js/posts/online-grade-distributions/MainChart.js
  - /js/posts/public-transit/test.js

stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/public-transit/app.css
---

In 2019, more than half of undergraduate students at UCLA, as well as a majority of graduate students, staff and faculty, lived off campus and commuted to class and to work (CQ link 2, pg 10 – table 2 commuter totals / table 1 population totals > 50% for undergrad, grad, faculty/staff). According to UCLA’s 2019 State of the Commute Report, nearly 64% of all UCLA commuters use sustainable transportation of some kind, while the remaining 36% drive alone to campus (CQ link 2, pg 16 table 4 all & drive alone -> 36.3, sustainable is 100 - 36.3 ).

Active transportation methods were the largest group of sustainable transportation, with walkers constituting almost 24% of all commuters and bikers making up about 3% of all commuters (CQ link 2, pg 16 table 4). After walking, the most common form of sustainable transportation was public transit, which was used by over 19% of all UCLA commuters, including more than 13% of employees and over 25% of students (CQ link 2, pg 16 table 4).

Of the commuters who use public transit, 49% report taking the BruinBus, which UCLA operates on routes around campus and Westwood Village. 59% of public transit commuters report using other public transit agencies (CQ link 2, pg 16, ctrl-F BruinBus), which include Los Angeles Metro, Big Blue Bus, Culver City Bus, Antelope Valley Transit Authority, City of Santa Clarita Transit, Long Beach Transit and Los Angeles Department of Transportation (CQ link 3, 7 hyperlinked agencies).

Many of these commuter students face issues of late buses and inconvenient transit schedules that can interfere with their classes and work.

Julie Valdez, a second-year political science (CQ 4, linkedin says communications but in interview she just says political science) student who used to commute to campus on the LADOT-operated Commuter Express 573 (CQ link 5, 7:28), said that she frequently missed classes because of public transportation (CQ link 5, 4:58). She also was not able to stay on campus for club events due to limited evening bus schedules (CQ link 5, 7:40).

Natalie Hernandez, a third-year biology student (CQ link 6) who commutes to campus, also said she had been late to classes due to buses not being on-time (CQ link 7, 2:44).

“Since it takes so much time [to commute], I have less time to study or work,” Hernandez added (CQ link 7, 3:01).

In this article, The Stack examines the punctuality of several bus lines around UCLA, as well as the monthly ridership of the bus lines. We obtained data on bus line 786 (Century City/West Los Angeles) from Antelope Valley Transit Authority (CQ 8), Commuter Express lines 431, 534 and 573 from LADOT, bus lines 792 and 797 from City of Santa Clarita Transit and bus routes 1, 2, 3, 8 and 12 from Big Blue Bus. These lines were chosen for their proximity to UCLA campus. LA Metro said they did not collect the timing or ridership data that we requested.

## Visualizing LADOT Bus Stops

The map below displays the bus stops for Commuter Express lines 431, 534 and 573, which are operated by LADOT.

The color scale shows how often buses are late at each bus stop, with a darker color corresponding to a larger proportion of late buses. Hover over a bus stop for more information, including the bus line it serves, how often buses are late to that stop and the average number of boarding passengers.

Use the controls on the right-hand side to filter by geographical region, bus line, lateness frequency, or average headway (time in between buses at that stop). To find a specific stop, use the “Stop Name” filter to search a bus stop by its stop number or address. (Note: Clear the Stop Name search bar and hit enter to reset the map.)

<div
  class='tableauPlaceholder'
  id='viz1645655548261'
  style='position: relative'
>
  <object class='tableauViz'  style='display:none;'>
    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
    <param name='embed_code_version' value='3' />
    <param name='site_root' value='' />
    <param name='name' value='LADOTBuslines&#47;Dashboard1' />
    <param name='tabs' value='no' /><param name='toolbar' value='yes' />
    <param name='animate_transition' value='yes' />
    <param name='display_static_image' value='yes' />
    <param name='display_spinner' value='yes' />
    <param name='display_overlay' value='yes' />
    <param name='display_count' value='yes' />
    <param name='language' value='en-US' />
    <param name='filter' value='publish=yes' />
  </object>
</div>
<script type='text/javascript'>
  var divElement = document.getElementById('viz1645655548261');
  var vizElement = divElement.getElementsByTagName('object')[0];
  if ( divElement.offsetWidth > 800 ) { 
    vizElement.style.width='1000px';
    vizElement.style.height='827px';
  } else if (divElement.offsetWidth > 500) { 
    vizElement.style.width='1000px';
    vizElement.style.height='827px';
  } else { 
    vizElement.style.width='100%';
    vizElement.style.height='727px';
  }
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>

## Punctuality of Buses

The pie charts below show how often buses were early, late or on-time for AVTA, LADOT and Santa Clarita Transit. Big Blue Bus did not provide us with timing data for their routes.

<!-- Timeliness graphs -->
<!-- Overview pie chart -->
<iframe title="Punctuality of different transportation agencies" aria-label="Multiple Pies" id="datawrapper-chart-aRLOq" src="https://datawrapper.dwcdn.net/aRLOq/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="289"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>

From July 2019 to October 2021, AVTA bus line 786 had the highest percentage of late buses.

LADOT buses were early more than twice as often as they were late, and Santa Clarita Transit buses were also early more often than late.

The punctuality of specific bus lines for LADOT and Santa Clarita Transit are broken down in the pie charts below.

<!-- pie chart for LADOT -->
<iframe title="Punctuality of LADOT bus lines" aria-label="Multiple Pies" id="datawrapper-chart-udyGv" src="https://datawrapper.dwcdn.net/udyGv/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="285"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>

<!-- pie chart for Santa Clarita -->
<iframe title="Punctuality of Santa Clarita Transit bus lines" aria-label="Multiple Pies" id="datawrapper-chart-kMXjH" src="https://datawrapper.dwcdn.net/kMXjH/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="305"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>

Juan Matute, the deputy director for the UCLA Institute of Transportation Studies, (CQ 9) said some transportation agencies prioritize the on-time performance of buses over how long a trip takes, sometimes adding time to the schedule and having buses wait along the route in order to be on time, rather than early (CQ link 10, 7:14).

“It's led to a deterioration of the service performance for the people who are using it. Some of it is congestion. Some of it is mismanagement of scheduling and transit,” Matute said (CQ link 10, 8:00).

## Public Transit Ridership Over Time

Even before the COVID-19 pandemic, transit ridership was declining despite efforts to expand and improve the current forms of public transportation. According to a study by UCLA’s Institute for Transportation Studies, the Los Angeles County Metropolitan Transportation Authority experienced a drop of more than 17% in ridership between 2014 and 2018 (CQ link 11, graf 2).

Since early 2020, public transit ridership has decreased significantly as many individuals attended work or school remotely and people avoided crowded public areas (CQ link 11, graf 3).

While almost 20% of all UCLA commuters used public transit to travel to campus in 2019 (CQ link 2, pg 16 table 4), the 2020 State of the Commute Report found that only 8% of commuters traveling to campus in 2020 used public transit (CQ link 1, pg 18 – 23.3% students NOT remote learning in 2020, 1.9% public transit / 23.3% physically commuting = 8%).

In our analysis of ridership data for LADOT, AVTA, Santa Clarita Transit and Big Blue Bus from January 2019 to October 2021, we found large decreases in average monthly ridership in the months following the beginning of the COVID-19 pandemic.

For each of those four public transit agencies, the following chart depicts the number of monthly riders averaged over the number of bus routes from that agency that were included in our analysis. Hover over the lines for more detailed statistics and click on any of the public transit agencies in the legend for a closer look at the ridership of any specific bus agency.

<!-- Ridership Graphs -->
<div id="avg-ridership" class="timeline"></div>

Note: Ridership data for the Big Blue Bus was unavailable for certain months, so that chart was modified to a scatter plot.

For all public transit agencies analyzed, total ridership declined significantly following the onset of the COVID-19 pandemic in early 2020.

From March 2020 to October 2021, average monthly ridership for LADOT lines 431, 534 and 573 was 83% lower than ridership from January 2019 to February 2020. Similarly, AVTA average ridership for bus line 786 declined by 85% and the average Santa Clarita Transit ridership declined by 77%.

The percentage decline in total ridership for the Big Blue Bus was approximately 42%. However, the limited number of months with Big Blue Bus ridership data may cause the results to be less accurate.

Use the dropdown below to see ridership for LADOT, Santa Clarita Transit and Big Blue Bus broken down by individual bus lines.

<div id="ladot-ridership" class="timeline"></div>

<div id="avta-ridership"  class="timeline"></div>

<div id="sct-ridership" class="timeline"></div>

<div id="bbb-ridership" class="timeline"></div>

The above ridership charts show a slow improvement in ridership since the first case of COVID-19 in Los Angeles. However, Jacob Wasserman, a research project manager with the UCLA Institute of Transportation Studies (CQ 12), said that despite the recovery, ridership is not returning to pre-pandemic levels (CQ link 13, 5:00).

“I think from our ridership research and our continuing ridership research, the message I would say is that transit can't just return back to, quote, normal unquote,” Wasserman said (CQ link 13, 5:05).

## Future of public transportation

Amidst declining public transit ridership, LA Metro is expanding their rail system. An extension of the Metro Purple (D Line) is currently under construction to connect existing metro stations in Downtown Los Angeles and Koreatown to Westwood by 2027 (CQ 14).

LA Metro is also in the planning stages of the Sepulveda Transit Corridor Project, which would connect the San Fernando Valley and West LA (CQ 15).

“Both of those are pretty ideal opportunities for rail transit that can serve a large amount of riders; there's a large density of both jobs and residents and housing around the stations,” Wasserman said (CQ link 13, 14:13).

Additionally, the D line currently runs from before 5 a.m. until after midnight(CQ 16), addressing concerns raised by some commuter students, like Valdez, about having reliable transportation home from campus at all hours.

As LA Metro works to improve its rail lines, Matute said that investing in better bus lanes can also speed up bus routes and make service more reliable (CQ link 10, 9:42).

“If we improve the quality of service on the bus network, that's where the biggest dividends come,” Matute said (CQ link 10, 9:10).

## About the data

After directly reaching out to various bus stop agencies in Los Angeles, data from AVTA, LADOT, Santa Clarita Transit and Santa Monica BBB, was collected and compiled. In particular, details on ridership per bus stop, scheduled bus departure and arrival times, delays in bus departure and arrivals and bus routes (with bus stop names and bus stop codes) were collected for a period of three years (2019 to 2021).

#### AVTA Data

From AVTA, we requested data only for bus line 786, which runs from Lancaster and Palmdale to Century City and West Los Angeles (CQ 17).

AVTA data on ridership per bus stop, scheduled and actual arrival and departure times, and bus routes (with stop information) was obtained on a monthly basis for a period of three years from 2019 to 2021.

#### LADOT Data

From LADOT, we requested data for Commuter Express lines 431, 534, and 573, the Downtown LA/Westwood, West LA/Downtown LA, and Encino/Westwood lines respectively (CQ 18).

LADOT data on total ridership per month from 2019-2021 for all three bus lines, bus stop arrival and departure statistics for on-time performance, and bus route (with stop information) was obtained.

#### Santa Clarita Transit Data

From Santa Clarita Transit, we requested data for bus lines 792 and 797, both the Century City lines (CQ 19).

Santa Clarita data on total ridership per stop for a period of three years (2019 to 2021) for each route, the breakdown of ridership per stop per month for a period of three years (2019 to 2021), bus stop arrival and departure statistics for on-time performance, and bus route (with stop information) was obtained.

#### Santa Monica BBB Data

From Big Blue Bus, we requested data for bus routes 1 (Main St & Santa Monica Blvd), 2 (Wilshire Blvd, 3 (Lincoln Blvd), 8 (Ocean Park Blvd) and Rapid 12 UCLA/Westwood to Expo Rapid) (CQ 20).

Santa Monica BBB data on ridership per month, per stop for a period of three years (2019 to 2021) and bus route (with stop information) was obtained.

#### Latitude and Longitude Positions of Bus Stops

Using the bus stop information provided by the aforementioned public transit bus agencies, the addresses of each of the bus stops were scraped (using the Scrapy package in Python) and appended to a comma-separated values file. This data was imported into Google Sheets with geocoding capabilities, thus enabling the retrieval of latitude and longitude coordinates of the bus stops. More details on the code are available in The Stack’s [GitHub repository](https://github.com/dailybruin/the-stack/tree/public-transit/python/bus_stops_scraper).
