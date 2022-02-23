---
title: Public Transit near UCLA
teaser: buses are late :(
authors:
  -

key_takeaways:
  - From July 2019 to October 2021, buses operated by Antelope Valley Transit Authority, the Los Angeles Department of Transportation and Santa Clarita Transit were late 23% of the time.
  - Monthly ridership of buses run by AVTA, LADOT and Santa Clarita Transit decreased by over 70% during the pandemic.

featured_image:
  url:
  caption:
og_image:

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js
  - //cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0
  - //code.jquery.com/jquery-3.6.0.min.js
  - /js/posts/online-grade-distributions/MainChart.js

stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/online-grade-distributions/app.css
---

More than half of Bruins undergraduates, as well as a majority of graduate students, staff and faculty, live off campus and must commute to class and to work. According to UCLA’s 2019 State of the Commute Report, (CQ1) over 63% of all UCLA commuters use sustainable transportation of some form, while the remaining 37% drive alone to campus.

Active transportation methods were the largest group of sustainable transportation, with walkers constituting almost 24% of all commuters and bikers making up about 3% of all commuters. After walking, the most common form of sustainable transportation was public transit, which was used by over 19% of all UCLA commuters, including more than 13% of employees and over 25% of students.

Of the commuters who use public transit, 49% report taking the BruinBus, which UCLA operates on routes around campus and Westwood Village. 59% of public transit commuters report using other public transit agencies, which include Los Angeles Metro, Big Blue Bus, Culver City Bus, Antelope Valley Transit Authority, City of Santa Clarita Transit, Long Beach Transit and Los Angeles Department of Transportation.

Many of these commuter students face issues of late buses and inconvenient transit schedules that can interfere with their classes and work.

Julie Valdez, a second-year political science student who used to commute to campus on the LADOT-operated Commuter Express 573, said that she frequently missed classes because of public transportation. She also was not able to stay on campus for club events due to limited evening bus schedules.

Another commuter student, Natalie Hernandez, a third-year biology student, also said she had been late to classes due to the poor timeliness performance of the buses.

“Since it takes so much time[to commute], I have less time to study or work,” said Hernandez.

In this article, The Stack examines the punctuality of several bus lines around UCLA, as well as the monthly ridership of the bus lines. We obtained data on bus line 786 from AVTA, commuter express lines 431, 534 and 573 from LADOT, bus lines 792 and 797 from City of Santa Clarita and bus routes 1, 2, 3, 8 and 12 from Big Blue Bus. These lines were chosen for their proximity to UCLA campus.

## Visualizing LADOT Bus Stops

The map below displays the bus stops for Commuter Expresses 431, 534 and 573, which are operated by LADOT.

The color scale displays how often buses are late at each respective bus stop, with a darker color corresponding to a larger proportion of late buses.

Hover over the map for more information about the bus stop, including the bus line, how often buses are late to that stop, and the average number of boarding passengers. To find a specific stop, use the “Stop Name” filter to search a bus stop by its stop number or address. (Note: Clear the Stop Name search bar and hit enter to reset the map.)

<div class='tableauPlaceholder' id='viz1643678902712' style='position: relative'>
  <object class='tableauViz'  style='display:none;'>
    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
    <param name='embed_code_version' value='3' />
    <param name='site_root' value='' />
    <param name='name' value='Book1_16436639496760&#47;Dashboard1' />
    <param name='tabs' value='no' />
    <param name='toolbar' value='yes' />
    <param name='animate_transition' value='yes' />
    <param name='display_static_image' value='yes' />
    <param name='display_spinner' value='yes' />
    <param name='display_overlay' value='yes' />
    <param name='display_count' value='yes' />
    <param name='language' value='en-US' />
  </object>
</div>

<script type='text/javascript'>
  var divElement = document.getElementById('viz1643678902712');
  var vizElement = divElement.getElementsByTagName('object')[0];
  if ( divElement.offsetWidth > 800 ) { 
    vizElement.style.width='1000px';
    vizElement.style.height='827px';
  } else if (divElement.offsetWidth > 500){ 
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

## Punctualness of Buses

<!-- Timeliness graphs -->
<!-- Overview pie chart -->
<iframe title="Timeliness Performance of Different Transportation Agencies" aria-label="Multiple Pies" id="datawrapper-chart-VJ4Gp" src="https://datawrapper.dwcdn.net/VJ4Gp/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="302"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>
<!-- pie chart for AVTA -->
<!-- <iframe title="Antelope Valley Transit Authority Timeliness Performance" aria-label="Multiple Pies" id="datawrapper-chart-NUP74" src="https://datawrapper.dwcdn.net/NUP74/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="439"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script> -->
<!-- pie chart for LADOT -->
<!-- <iframe title="LA Department of Transportation Bus Lines" aria-label="Multiple Pies" id="datawrapper-chart-UIRWW" src="https://datawrapper.dwcdn.net/UIRWW/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="334"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script> -->
<!-- pie chart for Santa Clarita -->
<!-- <iframe title="Santa Clarita Transit Timeliness Performance " aria-label="Multiple Pies" id="datawrapper-chart-K35BC" src="https://datawrapper.dwcdn.net/K35BC/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="430"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script> -->

From July 2019 to October 2021, the Antelope Valley Transit Authority bus line 786 had the highest percentage of late buses among all three transportation agencies that provided scheduled and actual bus arrival times.

LADOT buses were early more than twice as often as they were late, and Santa Clarita Transit buses were also early more often than late.

According to Juan Matute, the deputy director for the UCLA Institute of Transportation Studies, transportation agencies value on-time performance over the length of trip, sometimes adding time to the schedule and having buses wait along the route in order to be on time, rather than early. “It's led to a deterioration of the service performance for the people who are using it. Some of it is congestion. Some of it is mismanagement of scheduling and transit,” said Matute.

## Public Transit Ridership Over Time

Even before the COVID-19 pandemic, transit ridership was declining despite efforts to expand and improve the current forms of public transportation. According to a study by UCLA’s Institute for Transportation Studies, the Los Angeles County Metropolitan Transportation Authority experienced a drop of more than 17% in ridership between 2014 and 2018.

Since early 2020, public transit ridership has decreased significantly as many individuals attended work or school remotely and people avoided crowded public areas.

While almost 20% of all UCLA commuters used public transit to travel to campus in 2019, the 2020 State of the Commute Report found that less than 2% of commuters in 2020 traveled to campus via public transit. The members of the UCLA community classified as commuters in the 2020 report included those who telecommuted for remote work and classes, which made up 69% and 77% of commuting employees and students, respectively.

In our analysis of ridership data for LADOT, AVTA, Santa Clarita Transit and Big Blue Bus from January 2019 to October 2021, we found large decreases in average monthly ridership in the months following the beginning of the COVID-19 pandemic.

For each of those four public transit agencies, the following chart depicts the number of monthly riders averaged over the number of bus routes from that agency that were included in our analysis. Hover over the individual bus lines for more detailed statistics and click on any of the public transit agencies in the legend for a closer look at the ridership of any specific bus agency.

<!-- Ridership Graphs -->

##### Average Ridership

{% include avg-ridership.html %}

Note: Ridership data for the Big Blue Bus was unavailable for certain months, so that chart was modified to a scatter plot.

##### LADOT Ridership

{% include ladot-ridership.html %}

##### AVTA Ridership

{% include avta-ridership.html %}

##### Santa Clarita Transit Ridership

{% include sct-ridership.html %}

##### Big Blue Bus Ridership

{% include bbb-ridership.html %}

For all public transit agencies analyzed, total ridership declined significantly following the onset of the COVID-19 pandemic in early 2020. To estimate the percentage decline in ridership due to COVID-19, the mean monthly ridership from January 2019 to February 2020 was compared to the mean monthly ridership from March 2020 to October 2021.

LADOT total ridership for bus lines 431, 534, and 573 declined by 83% after January 2020. Similarly, AVTA total ridership for bus line 786 declined by 85% and the total Santa Clarita Transit ridership declined by 77%.

The percentage decline in total ridership for the Big Blue Bus was estimated to be about 42%, which indicates a significantly better performance than the other bus routes. However, the several missing data points within the Big Blue Bus ridership data, may cause the results to be less accurate.

The above ridership charts show a slow improvement in ridership since the first case of COVID-19 in Los Angeles. However, according to Wasserman, despite the recovery, ridership is not returning to pre-pandemic levels.

“I think from our ridership research and our continuing ridership research, the message I would say is that transit can't just return back to, quote, normal unquote,” said Wasserman.

## Future of public transportation

Amidst declining public transit ridership, LA metro is expanding their rail system. An extension of the Metro Purple (D Line) is currently under construction to connect existing metro stations in Downtown Los Angeles and Koreatown to Westwood by 2027.

According to Wasserman, the D line extension “can serve a large amount of riders, as there's a large density of both jobs and residents and housing around the stations.” The closest station to UCLA will be at Westwood Boulevard and WIlshire Boulevard.

Additionally, the D line is expected to run 24 hours a day, addressing concerns raised by some commuter students, like Vadez, about having reliable transportation home from campus at all hours. .

As LA Metro works to improve its rail lines, Matute said that UCLA students can improve the public transit system by getting more involved in the decision making process, such as Culver City Transportation and the LA Metro. “I think they're always looking for UCLA people to sit on that,” said Matute.

## About the data

After directly reaching out to various bus stop agencies in Los Angeles, data from AVTA, LADOT, Santa Clarita Transit and Santa Monica BBB, was collected and compiled. In particular, details on ridership per bus stop, scheduled bus departure and arrival times, delays in bus departure and arrivals and bus routes (with bus stop names and bus stop codes) were collected for a period of three years (2019 to 2021).

AVTA Data
AVTA has operational bus lines and routes that cover an area from the Canoga & Victory stop to the 170th St. E. & Longmeadow stop and from the Scaled Composites stop to the 8th & Spring stop. The data for this article is limited to bus line 786. Both the southbound and northbound routes range from Lancaster/Palmdale to Century City/West Los Angeles and Century City/West Los Angeles to Lancaster/Palmdale respectively.

AVTA data on ridership per bus stop, scheduled and actual arrival and departure times, and bus routes (with stop information) was obtained on a monthly basis for a period of three years from 2019 to 2021.

LADOT Data
LADOT has operational bus lines and routes across Los Angeles, covering an area from Sylmar, Los Angeles to San Pedro, Los Angeles and Thousand Oaks to Pasadena. The data for this article is limited to bus lines 431, 534, and 573, the Downtown LA/Westwood, West LA/Downtown LA, and Encino/Westwood lines respectively.

LADOT data on total ridership per month from 2019-2021 for all three bus lines, bus stop arrival and departure statistics for on-time performance, and bus route (with stop information) was obtained.

Santa Clarita Transit Data
Santa Clarita Transit has operational bus lines and routes from Castaic to Downtown, Los Angeles and from Val Verde to Downtown, Los Angeles. The data for this article is limited to bus lines 792 and 797, both the Century City lines.

Santa Clarita data on total ridership per stop for a period of three years (2019 to 2021) for each route, the breakdown of ridership per stop per month for a period of three years (2019 to 2021), bus stop arrival and departure statistics for on-time performance, and bus route (with stop information) was obtained.

Santa Monica BBB Data
The Big Blue Bus has operational bus lines and routes from Westwood, Los Angeles to Aviation/LAX Station and from Pacific Palisades, Los Angeles to Downtown, Los Angeles. The data for this article is limited to bus routes 1, 2, 3, 8, and 12, the Main St & Santa Monica Blvd/UCLA, Wilshire Blvd/UCLA, Lincoln Blvd/LAX, Ocean Park Blvd & Westwood Bl/UCLA, and Westwood/UCLA-Culver City Sta bus routes respectively.

Santa Monica BBB data on ridership per month, per stop for a period of three years (2019 to 2021) and bus route (with stop information) was obtained.

Latitude and Longitude Positions of Bus Stops

Using the bus stop information provided by the aforementioned public transit bus agencies, the addresses of each of the bus stops were scraped (using the Scrapy package in Python) and appended to a comma-separated values file. This data was imported into Google Sheets with geocoding capabilities, thus enabling the retrieval of latitude and longitude coordinates of the bus stops. More details on the code are available in The Stack’s GitHub repository, available (here)[https://github.com/dailybruin/the-stack/tree/public-transit/python/bus_stops_scraper].
