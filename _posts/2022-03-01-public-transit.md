---
title: Punctuality and popularity of public transit routes near UCLA’s campus

teaser: The Stack analyzes data from four major transportation agencies serving the Westwood area, looking at how commuter students are impacted by bus schedules and how ridership levels have changed since January 2019.

authors:
  - justin_gong
  - mansa_krishna
  - nancy_zhang
  - abby_zhao

key_takeaways:
  - From July 2019 to October 2021, buses operated by Antelope Valley Transit Authority, the Los Angeles Department of Transportation and City of Santa Clarita Transit were late 23% of the time.
  - Monthly ridership of buses run by AVTA, LADOT and Santa Clarita Transit decreased by over 70% during the COVID-19 pandemic.
  - A quarter of UCLA commuter students used public transit in 2019, while only 8% of students commuting to campus traveled via public transit in 2020.

featured_image:
  url: public-transit/bigbluebus.jpg
  caption: (Daily Bruin file photo)
og_image: public-transit/bigbluebus.jpg

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js
  - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - //cdn.plot.ly/plotly-2.9.0.min.js
  - //code.jquery.com/jquery-3.6.0.min.js
  - /js/posts/public-transit/avg-timeline.js
  - /js/posts/public-transit/ladot-timeline.js
  - /js/posts/public-transit/avta-timeline.js
  - /js/posts/public-transit/bbb-timeline.js
  - /js/posts/public-transit/sct-timeline.js
  - /js/posts/public-transit/dropdown.js

stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/public-transit/app.css
---

In 2019, more than half of undergraduate students at UCLA, as well as a majority of graduate students, staff and faculty, lived off campus and commuted to class and to work. According to UCLA’s 2019 State of the Commute Report, nearly 64% of all UCLA commuters use sustainable transportation of some kind, while the remaining 36% drive alone to campus.

Active transportation methods were the largest group of sustainable transportation, with walkers constituting almost 24% of all commuters and bikers making up about 3% of all commuters. After walking, the most common form of sustainable transportation was public transit, which was used by more than 19% of all UCLA commuters, including more than 13% of employees and more than 25% of students.

Of the commuters who use public transit, 49% reported taking the BruinBus, which UCLA operates on routes around campus and Westwood Village. Fifty-nine percent of public transit commuters reported using other public transit agencies, which included Los Angeles Metro, Big Blue Bus, Culver CityBus, Antelope Valley Transit Authority, City of Santa Clarita Transit, Long Beach Transit and Los Angeles Department of Transportation.

Many of these commuter students face issues with late buses and inconvenient transit schedules, which can interfere with their classes and work.

Julie Valdez, a second-year political science student who used to commute to campus on the LADOT-operated Commuter Express 573, said that she frequently missed classes because of public transportation. She also was not able to stay on campus for club events because of limited evening bus schedules.

Natalie Hernandez, a third-year biology student who commutes to campus, also said she had been late to classes because of buses not being on time.

“Since it takes so much time (to commute), I have less time to study or work,” Hernandez added.

In this article, The Stack examines the punctuality of several bus lines around UCLA as well as the monthly ridership of the bus lines. We obtained data on route 786 to Century City/West Los Angeles from AVTA, Commuter Express routes 431, 534 and 573 from LADOT, routes 792 and 797 from Santa Clarita Transit and routes 1, 2, 3, 8 and 12 from Big Blue Bus. These lines were chosen for their proximity to UCLA’s campus. LA Metro said it did not collect the timing or ridership data that the Daily Bruin requested.

<!-- AVTA -->
<iframe class="avta-gfx google-gfx" frameborder="0" src="https://www.google.com/maps/d/u/2/embed?mid=1J3BnhsGAKvaL-H3MvnBGWO0zfHkluFIu&ehbc=2E312F" height="480"></iframe>

<!-- LADOT -->
<iframe class="ladot-gfx google-gfx" frameborder="0" src="https://www.google.com/maps/d/u/2/embed?mid=1jSi0Rcw-N7mmJK9wIFWJZAbHPU2R43_y&ehbc=2E312F" height="480"></iframe>

<!-- SCT -->
<iframe class="sct-gfx google-gfx" frameborder="0" src="https://www.google.com/maps/d/u/0/embed?mid=1EH-L095zLCIlL_VKFOwCVlM0Z1vuePtk&ehbc=2E312F" height="480"></iframe>

<!-- BBB -->
<iframe class="bbb-gfx google-gfx" frameborder="0" src="https://www.google.com/maps/d/u/2/embed?mid=14hcJ4PuYN489c3crHluQeHBsIZlGVKaB&ehbc=2E312F" height="480"></iframe>
<p class="credit">Graphics by Alex Yoo, Graphics editor and Rebekah Limb, assistant Graphics editor.</p>

## Visualizing LADOT bus stops

The map below displays the bus stops for Commuter Express routes 431, 534 and 573, which are operated by LADOT.

The color scale shows how often buses are late at each bus stop, with a darker color corresponding to a larger proportion of late buses. Hover over a bus stop for more information, including the bus line it serves, how often buses are late to that stop and the average headway, which is the time in between buses at that stop.

Use the controls on the right-hand side to filter by geographical region, bus line, lateness frequency, or average headway. To find a specific stop, use the “Stop Name” filter to search a bus stop by its stop number or address.

<div class='tableauPlaceholder' id='viz1646197996554' style='position: relative'>
  <object class='tableauViz'  style='display:none;'>
    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
    <param name='embed_code_version' value='3' /> 
    <param name='site_root' value='' />
    <param name='name' value='final_public_transit_map&#47;Dashboard1' />
    <param name='tabs' value='no' />
    <param name='toolbar' value='yes' />
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
  var divElement = document.getElementById('viz1646197996554');
  var vizElement = divElement.getElementsByTagName('object')[0];
  if ( divElement.offsetWidth > 800 ) { 
    vizElement.style.width='800px';
    vizElement.style.height='727px';
  } else if ( divElement.offsetWidth > 500 ) { 
    vizElement.style.width='800px';
    vizElement.style.height='727px';
  } else { 
    vizElement.style.width='100%';
    vizElement.style.height=(divElement.offsetWidth*1.77)+'px';
  } 
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>
<p class="caption">Note: Clear the Stop Name search bar and hit enter to reset the map.</p>

## Punctuality of buses

The pie charts below show how often buses were early, late or on time for AVTA, LADOT and Santa Clarita Transit. Big Blue Bus did not provide the Daily Bruin with timing data for its routes.

<!-- Timeliness graphs -->
<!-- Overview pie chart -->
<div class='pie-chart-wrapper'>
  <iframe title="Punctuality of different transportation agencies" aria-label="Multiple Pies" id="datawrapper-chart-Nz14h" src="https://datawrapper.dwcdn.net/Nz14h/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="322"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>
</div>

From July 2019 to October 2021, AVTA route 786 had the highest percentage of late buses.

LADOT buses were early roughly twice as often as they were late, and Santa Clarita Transit buses were also early more often than late.

The punctuality of specific bus lines for LADOT and Santa Clarita Transit are broken down in the pie charts below.

<!-- pie chart for LADOT -->
<iframe title="Punctuality of LADOT bus lines" aria-label="Multiple Pies" id="datawrapper-chart-4O1Tn" src="https://datawrapper.dwcdn.net/4O1Tn/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="285"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>

<!-- pie chart for Santa Clarita -->
<iframe title="Punctuality of Santa Clarita Transit bus lines" aria-label="Multiple Pies" id="datawrapper-chart-kMXjH" src="https://datawrapper.dwcdn.net/kMXjH/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="305"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>

Juan Matute, the deputy director for the UCLA Institute of Transportation Studies, said some transportation agencies prioritize the on-time performance of buses over how long a trip takes, sometimes adding time to the schedule and having buses wait along the route in order to be on time rather than early.

“It's led to a deterioration of the service performance for the people who are using it. Some of it is congestion. Some of it is mismanagement of scheduling and transit,” Matute said.

## Public transit ridership over time

Even before the COVID-19 pandemic, transit ridership was declining despite efforts to expand and improve the current forms of public transportation. According to a study by UCLA’s Institute of Transportation Studies, the Los Angeles County Metropolitan Transportation Authority experienced a ridership drop of more than 17% between 2014 and 2018.

Since early 2020, public transit ridership has decreased significantly as many individuals attended work or school remotely and people avoided crowded public areas.

While almost 20% of all UCLA commuters used public transit to travel to campus in 2019, the 2020 State of the Commute Report found that 8% of commuters traveling to campus in 2020 used public transit.

In The Stack’s analysis of ridership data for LADOT, AVTA, Santa Clarita Transit and Big Blue Bus from January 2019 to October 2021, we found large decreases in average monthly ridership in the months following the beginning of the COVID-19 pandemic.

For each of the four public transit agencies, the following chart depicts the number of monthly riders averaged over the number of bus routes from that agency. Hover over or tap on the data points for more details, and click on any of the public transit agencies in the legend to hide it from the chart.

<!-- Ridership Graphs -->
<div id="avg-ridership" class="timeline"></div>
<div class="timeline-container">
  <div id="avg-timeline"></div>
</div>

<p class="caption">Note: Ridership data for the Big Blue Bus was unavailable for certain months, so that chart was interpreted as a scatter plot instead.</p>

For all public transit agencies analyzed, total ridership declined significantly following the onset of the COVID-19 pandemic in early 2020.

From March 2020 to October 2021, average monthly ridership for LADOT routes 431, 534 and 573 was 83% lower than ridership from January 2019 to February 2020. Similarly, AVTA average ridership for route 786 declined by 85%, and the average Santa Clarita Transit ridership declined by 77%.

The percentage decline in total ridership for the Big Blue Bus was approximately 46%. However, the limited number of months with Big Blue Bus ridership data may cause the results to be less accurate.

Use the drop-down below to see ridership for LADOT, Big Blue Bus, AVTA and Santa Clarita Transit broken down by individual bus lines.

<select id="timeline-dropdown"></select>

<div class="timeline-container">
  <div id="ladot-timeline"></div>
</div>

<div class="timeline-container">
  <div id="avta-timeline"></div>
</div>

<div class="timeline-container">
  <div id="sct-timeline"></div>
</div>

<div class="timeline-container">
  <div id="bbb-timeline"></div>
</div>

The above ridership charts show a slow improvement in ridership since the first case of COVID-19 in LA. However, Jacob Wasserman, a research project manager with the UCLA Institute of Transportation Studies, said that despite the recovery, ridership is not returning to pre-pandemic levels.

“I think from our ridership research and our continuing ridership research, the message I would say is that transit can't just return back to, quote, normal, unquote,” Wasserman said.

## Future of public transportation

Amid declining public transit ridership, LA Metro is expanding its rail system. An extension of the Metro Purple Line is currently under construction to connect existing metro stations in downtown LA and Koreatown to Westwood by 2027.

LA Metro is also in the planning stages of the Sepulveda Transit Corridor Project, which would connect the San Fernando Valley and West LA.

“Both of those are pretty ideal opportunities for rail transit that can serve a large amount of riders. There's a large density of both jobs and residents and housing around the stations,” Wasserman said.

Additionally, the Purple Line currently runs from before 5 a.m. until after midnight, addressing concerns raised by some commuter students, such as Valdez, about having reliable transportation home from campus at all hours.

As LA Metro works to improve its rail lines, Matute said that investing in better bus lanes can also speed up bus routes and make service more reliable.

“If we improve the quality of service on the bus network, that's where the biggest dividends come,” Matute said.

## About the data

After directly reaching out to various bus stop agencies in LA, data from AVTA, LADOT, Santa Clarita Transit and Big Blue Bus was collected and compiled. In particular, details on ridership per bus stop, scheduled bus departure and arrival times, delays in bus departure and arrivals and bus routes – with bus stop names and bus stop codes – were collected for a period of three years, from 2019 to 2021.

#### AVTA data

From AVTA, the Daily Bruin requested data only for bus route 786, which runs from Lancaster and Palmdale to Century City and West LA.

AVTA data on ridership per bus stop, scheduled and actual arrival and departure times, and bus routes with stop information was obtained on a monthly basis for a period of three years, from 2019 to 2021.

#### LADOT data

From LADOT, the Daily Bruin requested data for Commuter Express routes 431, 534, and 573, the downtown LA to Westwood, West LA to downtown LA, and Encino to Westwood lines, respectively.

LADOT data on total ridership per month from 2019 to 2021 for all three bus lines, bus stop arrival and departure statistics for on-time performance, and bus route with stop information was obtained.

#### Santa Clarita Transit data

From Santa Clarita Transit, the Daily Bruin requested data for bus routes 792 and 797, both the Century City lines.

Santa Clarita Transit provided data for each route on the total ridership per stop, the monthly ridership per stop and the arrival and departure times at each stop from January 2019 to October 2021.

#### Big Blue Bus data

From Big Blue Bus, the Daily Bruin requested data for bus routes 1, Main Street and Santa Monica Boulevard; 2, Wilshire Boulevard; 3, Lincoln Boulevard; 8, Ocean Park Boulevard; and Rapid 12, UCLA/Westwood to Expo Rapid.

Big Blue Bus data on ridership per month, per stop for a period of three years – 2019 to 2021 – was obtained.

#### Latitude and longitude positions of bus stops

Using the bus stop information provided by the aforementioned public transit bus agencies, the addresses of each of the bus stops were scraped, using the Scrapy package in Python, and appended to a comma-separated values file. This data was imported into Google Sheets with geocoding capabilities, thus enabling the retrieval of latitude and longitude coordinates of the bus stops. More details on the code are available in The Stack’s [GitHub repository](https://github.com/dailybruin/the-stack/tree/public-transit/python/bus_stops_scraper).
