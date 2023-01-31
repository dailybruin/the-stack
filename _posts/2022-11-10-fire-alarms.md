---
title: "Fire Alarms: A Bothersome Blessing"

teaser: While fire alarms are life saving devices, they can be a nuisance when they go off too frequently without cause. The Stack looks into the occurrence and response of fire alarms at UCLA.

authors:
  - liam_mcglynn
  - jessica_nguyen

key_takeaways:
  - UCLA had 2,462 fire alarm activations and 120 fires from 2018 to 2022. Roughly five percent of fire alarm activations were the result of an actual fire in this period. 
  - Medical buildings had the highest number of fire alarms during the period with XX alarms. followed by STEM research buildings with XX alarms..
  - The number of fire alarms tends to peak during fall quarters and drop during the winter and spring quarters.


featured_image:
  url: fire-alarms/dbfirephoto.jpg
  caption: (Daily Bruin file photo)
og_image: fire-alarms/dbfirephoto.jpg

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js
  - //unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js
  - //unpkg.com/leaflet.markercluster.layersupport@2.0.1/dist/leaflet.markercluster.layersupport.js
  - //unpkg.com/leaflet.featuregroup.subgroup@1.0.2/dist/leaflet.featuregroup.subgroup.js
  - //cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.js
  - //stamen-maps.a.ssl.fastly.net/js/tile.stamen.js?v1.3.0
  - //unpkg.com/leaflet@1.9.2/dist/leaflet.js
  - //cdnjs.cloudflare.com/ajax/libs/OverlappingMarkerSpiderfier-Leaflet/0.2.6/oms.min.js
  - /js/posts/fire-alarms/Fire Alarm Map/firegeojson.js
  - /js/posts/fire-alarms/Fire Alarm Map/firemap.js
  - /js/posts/fire-alarms/Fire Alarm Map/firemap.html

stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - //unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css
  - //unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css
  - //cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.css
  - //use.typekit.net/xmo8psg.css
  - //unpkg.com/leaflet@1.9.2/dist/leaflet.css
  - /css/posts/fire-alarms/leaflet.css
---

While being abruptly woken up at 3:00 a.m. to a blaring voice repeatedly asking for attention may be unusual for most, this experience is not uncommon for UCLA students. 

Over the past five years, UCLA and Westwood had nearly 2,500 fire alarm activations. With a total of 120 fires in the same period, roughly five percent of alarm activations were the result of an actual fire. Despite the inconvenience of repeated false alarms, fire alarms, when working properly, save lives. 

According to the National Fire Protection Agency, the death rate from 2014 to 2018 per 1,000 reported home fires was 91 percent lower when there were hard-wired smoke alarms and sprinklers.

The Stack investigated the frequency of UCLA’s fire alarms analyzing patterns to determine what buildings, time of day and areas have had a higher number of fire alarm activations. The Stack spoke with the UCLA fire department to understand how these alarm activations are handled.

## Fire Alarm Response

In the event of an on-campus fire alarm activation, the fire alarm system automatically sends a notification to UCPD. UCPD then dispatches a fire engine from the UCLA Fire Department to investigate the source of the alarm. Upon arrival, first responders examine the building’s fire panel to determine the location and type of fire alarm that was activated before entering. 

Fire alarms can be activated by a number of different devices such as smoke detectors, beam detectors, heat detectors, water flow devices or manual pull stations. Even after investigating the source, sometimes the Fire Department does not know what set the alarm off. 

“We'll investigate the origin and determine what the cause is. Sometimes we don't know what set it off,” said Ricardo Barboza, the UCLA Fire Marshall.

## Where Fire Alarms Occur Most Often

The chart below shows the 10 places that had the most fire alarm activations from 2018 through 2022. 

<!-- Fire Alarms by Locations -->
<div>
  <canvas id="FAlocations" width="400" height="150"></canvas>
</div>

Over the course of this period, Ronald Reagan UCLA Medical Center had the most alarm activations by 50 percent more. Barboza said that the higher rate of fire alarms is due to its size, constant use and type of activity.

“There's always someone there, so the propensity of activity, maliciousness and attention activations to go off is high just for those reasons,” said Barboza.

According to the data, a significant amount of fire alarms on campus occur in medical buildings. Combined, the Ronald Reagan Medical Center, Center for Health Sciences and Medical Plaza 200 Building account for over 15 percent of all fire alarms on and around campus. Additionally, STEM-related research buildings, such as Boelter Hall, Young Hall and the Biomedical Sciences Building, tend to have higher numbers of fire alarms. 

Among residence halls and university apartment buildings, Hedrick Hall (whose previous residents had dubbed the “Fire Alarm Villa” in 2018) had the most alarm activations with 62 activations. Hedrick Hall had nearly the same number of alarms as Dykstra Hall, Rieber Hall and Sproul Hall combined, despite all being the same type of residence hall and of similar size. Other than Hedrick Hall, De Neve Plaza and Rieber Vista had the most alarms with 37 each.

<div id="map"></div>

## When Fire Alarms Occur Most Often

Fire alarms tend to occur at the greatest frequency between 9 a.m. and 12 p.m., peaking around 10 a.m., when many students are awake. In contrast, there are fewer fire alarms between the times of 11 p.m. and 5 a.m. 

The distribution of alarms throughout the day is fairly similar for alarms on campus and alarms on the hill.

## Fire Alarms over Time

Having had 2,462 fire alarms from 2018 through 2022, UCLA has averaged 1.35 fire alarms per day, 41 per month and 492 per year. The following chart illustrates the number of fire alarm activations for each year since 2018.
<div>
  <canvas id="FAtimeline"></canvas>
</div>

During the COVID-19 pandemic, the number of alarm activations decreased in 2020 and 2021 when students were not on campus. In UCLA residence halls and university apartment buildings, there were 148 and 155 alarms in 2018 and 2019, respectively. Although these buildings were mostly vacated during the pandemic, the number of alarms decreased by a mere eight percent in 2020 and 2021 compared to 2018 and 2019, indicating that fire alarms are not necessarily correlated with student presence. 

<div>
  <canvas id="FAmonths" width="400" height="150"></canvas>
</div>

According to the chart, the number of alarms follows a yearly cycle. Typically, the number of fire alarms tends to peak during the fall quarter and drop during the winter and spring quarters. 

## Conclusion

For students, UCLA’s frequent fire alarms can act as an incessant nuisance. However, for some, the pros outweigh the cons.

“It's a necessity and I can see how a bunch of teenagers stuck in the room in an emergency like that, you kind of need that [fire alarm] before it gets into a fracas,” first-year pre-economics student Jack Donaldson said.

While the replacement of faulty fire alarms could help lessen the frequency of unintentional activations, in reality, fixing every single imperfect fire alarm is a costly challenge.

“A lot of the buildings we have here on campus are older and some of them have older systems. We update fire alarm systems as budgets happen. It's always a money situation,” Barboza said.

In the end, the annoyance created by fire alarms is not expected to disappear in the near future. Instead, frequent fire alarms will likely remain another part of life for UCLA students.

## About The Data

The Stack collected data from the past five years (2018-2022). This data was obtained from the UCLA Administrative Policies & Compliance Office and UCLA Police Department’s Daily Crime and Fire Log and contained a record of the date, time, location and address of each fire alarm. Notes and limitations of the data are listed below.

All fire alarms without a specified location name and those located outside of Westwood were excluded from all visualizations and statistics. 

All “actual fires” were excluded from visualizations (excluding the map of alarms and fires) due to the lack of clarity surrounding how they were reported.
