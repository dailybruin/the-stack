---
title: "Growing a sustainable campus: a look at the biodiversity of plants at UCLA"

teaser: According to the California Native Plant Society, native plants are more environmentally friendly, but how much of UCLA’s landscaping is made up of native plants? 

authors:
  - angel_perez
  - junwon_choi
  - finn_liu

key_takeaways:
  - UCLA is saving about 5 million gallons of water annually, after replacing past grass and turf areas with native plants. (CQ \#3)
  - As of 2022, UCLA is home to 10 times more native plants than non-native plants. (CQ \#5)
  - The UCLA campus contains over 150 different species of plant, with over 70% of the species being native species. (CQ \#4) 


featured_image:
  url: 
  caption: (To be added)
og_image: 


scripts:
  - //cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js
  - /js/posts/biodiversity/plantsbygarden.js
  - /js/posts/biodiversity/plantypes.js
  - /js/posts/biodiversity/CA_native_pie.js
  - /js/posts/biodiversity/CA_native_over_time.js

stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/biodiversity/plantstyles.css
---

Despite the existence of around 6,500 types of California native plants, mass development and homogenized landscape practices have resulted in the degradation of these plants and by extension the local ecosystems centered around them. (CQ #1) Native plants have evolved to survive in their particular environments and in conjunction with native wildlife. Plants native to California have generally adapted to desert conditions and provide food and shelter for California’s fauna. (CQ #2) 

In terms of sustainability, native species’ adaptations to desert conditions means they require less water, nutrients, and labor when compared to non-native species. (CQ #2) Additionally, the survival of native wildlife depends on the presence of native plants, particularly for pollinators which rely on certain native pollen-producers. (CQ #2) Pollinators are essential not only for the survival of flowering plants but also for approximately 35% of food crops, which reinforces the importance of increasing the presence of these plant populations. (CQ #9) Native plants have also played a role in providing habitats for local animals and in mitigating climate change by capturing carbon dioxide. (CQ #2) 


Integrating a greater number of California native plants into constructed ecosystems, such as university campuses, reduces both the amount of resources required for maintenance and promotes biodiversity by encouraging the development of local wildlife. (CQ #1) 

In order to understand UCLA’s impact on biodiversity, The Stack analyzed data relating to the concentration of native plants on UCLA’s campus.

### UCLA’s efforts to increase biodiversity on campus

Nurit Katz, the chief sustainability officer for UCLA (CQ 8), said in an emailed statement that the school plans to increase plant diversity on campus as part of its Sustainability Plan Goals for Landscape & Biodiversity.This plan aims to bolster biodiversity and transform the campus landscape into a part of the native ecosystem. (CQ #7)

In order to meet its sustainability goals, the campus has started to implement plans to replace turf areas with native species of plants. 

“In general, many non-native species do require more water than native species which is why we have begun transitioning turf areas of campus to drought tolerant and native plants,” Katz said in an emailed statement. (CQ #3)

### Plant Distribution at UCLA

#### How many plant species does UCLA host?

Across UCLA’s campus, there are a total of 166 different plant types ranging from drought resistant succulents to large trees and a wide array of shrubs. (CQ #4)

The following chart depicts the distribution of the different plant types at UCLA. 

<div style='height: 300px'>
  <canvas id = "PlantTypes"></canvas>
</div>

At 62 different species, shrubs maintain the highest number of unique species at UCLA. A few species of shrubs include the California Sagebrush, Laurel Sumac, and the quailbush.(CQ #4) Meanwhile, succulents are in the minority of plant types with only three different species which include the chaparral yuca, snake cholla, and the coastal prickly pear (CQ #4). 

The distribution of the other plant types include 32 different species of trees, 30 forbs (also known as wildflowers), 18 grasses and sedges, 14 annuals, and 4 vines. (CQ #4)


#### Which gardens at UCLA host the most plants?

The campus contains 7 different plant communities, all with a varying distribution of plant species within them. (CQ #4)

The following chart depicts the number of different plant species per garden at UCLA. 

<div style='height: 300px'>
  <canvas id = "PlantD"></canvas>
</div>

The Bioswale/Rain Garden contains the highest distribution of unique plant species at 85, while the lowest distribution are in the alluvial corridor or have been categorized as turf alternatives with 21 different plants in both locations. (CQ #4)

Turf alternatives are a category for native plants that are replacing grass and turf areas in order to promote water conservation as native plants require less water to tend to. This conversion is currently occurring at Murphy Hall and Moore Hall, according to a written statement from Katz. (CQ #3).

#### Where are the native plants located on UCLA’s campus?

<div class = "map-container">
  <div class="legend-container">
      <div class="legend-box" style="background:#5FA0CE;"></div>
      <span class="legend-text">California Native</span>
      <div class="legend-box" style="background:#E5A539;"></div>
      <span class="legend-text">Non-native</span>
    </div>
  <iframe width="100%" height="415" src="../../../../js/posts/biodiversity/Heatmap_Visualization/CAnativeplants.html" frameboarder="0" allowfullscreen></iframe>
</div>

This map displays the locations of plants on UCLA’s campus as provided by UCLA Sustainability and iNaturalist (CQ #4)(CQ #5). There is a high concentration of native plants near Hitch Suites, with less dense clusters located west of the Anderson School of Management and in the Mildred E. Mathias Botanical Garden. (CQ #4)(CQ #5) While Katz noted past conversions of plant populations near the Humanities Building and Powell Library, between Murphy Hall and Dodd Hall, in the Molecular Garden, and in the study space area in front of Bunche Hall, the map created with iNaturalist’s observation data does not yet reflect the addition of California native plants in these areas. (CQ #3)(CQ #5)

#### How have the number of California native species changed over time at UCLA?

As of today, the campus hosts close to three times as many native plants as non-native plant species, currently maintaining a total of 121 California native and 45 non-native plant species across its campus. (CQ #4)

The number of observed plants that are native to California has increased more overtime than the number of observed non-native ones since 2016. This year there were 653 observed native and 57 observed non-native plants on campus as of this year. The gap between native and non-native plant count on campus has been increasing each year, with this year’s figures displaying over tenfold of native than non-native plants.


<div style='height: 300px'>
  <canvas id = "CA_native_linechart"></canvas>
</div>
[Note: The first iNaturalist Observations at UCLA were in 2016]

### Impacts of increased native plant species on campus

As a part of this landscaping plan, UCLA is converting previous turf areas such as the molecular garden and the study space in front of Bunche Hall into areas that house native plants. 

These efforts are saving water campuswide. 

“The rough estimate of water savings from converting these formerly grass/turf spaces to native plants is approximately 5 million gallons annually,” Katz said in an emailed statement. (CQ #3).


### Looking Forward

“The main focus will be converting areas of ornamental or ‘non-functional’ grass/turf, which use a lot of water,” Katz explained in an emailed statement. (CQ #3). In addition to turf, trees may also be replaced by native species, Katz said. One such example is the Coast Live Oak near the Bruin Bear that recently took the place of the previous tree. Katz added that when existing non-native trees or landscaping needs replacement, UCLA plans to transition those to native plants. An example of this is the tree by the Bruin Bear, which was recently replaced by a Coast Live Oak. (CQ #3)

The increasing trends in plant diversity on campus sets UCLA on track to becoming both a more resource efficient and more environmentally friendly campus for California’s native flora and fauna.


### About the Data

The data used in this article were provided by the Institute of Sustainability at UCLA (CQ #4) and collected from iNaturalist (CQ #5). The dataset provided by the Institute of Sustainability at UCLA contains plant information by species (scientific name), whether plants are native to California, and its location on UCLA’s campus. (CQ #4) The dataset provided by iNaturalist contains observation date, location, and species guess (scientific name). (CQ #5)

Some of the graphs may not reflect the actual number of plants on campus because of the following limitation:
  - Observation data provided by iNaturalist contained more observed species than officially reported by UCLA, resulting in truncation of unreported species when merging both datasets.


CQ List:
1:https://www.cnps.org/gardening/why-natives/benefits-of-california-native-plants#:~:text=California%20native%20gardens%20are%20sustainable,and%20provide%20habitat%20for%20pollinators&text=Native%20plants%20evolved%20with%20our,%2C%20soil%20types%2C%20and%20animals
2: https://www.xerces.org/blog/for-wildlife-and-humans-native-plants-are-key-to-climate-resilience#:~:text=Native%20plants%20have%20a%20large,of%20these%20actions%20are%20significant
3: https://docs.google.com/document/d/1msv4jNBp3PEhcZ3V7ql9m3IJEWcB7nVqXotwoNO9WV8/edit?usp=sharing 
4: https://docs.google.com/spreadsheets/d/1olVi67KGJL5UfZ00u79u5w6as2nYYyM-/edit?usp=share_link&ouid=116914614183044732497&rtpof=true&sd=true
5: https://drive.google.com/file/d/1AIKN7_F5ACHryJ9ppXqHDUPm_jLJrUgw/view?usp=share_link 
6: 
https://ucla.app.box.com/s/j2zya9hb0c6w6vy5ic877dlnghs69tyy
7: https://ucla.app.box.com/s/ymbzh2cgv333zig75pii2fbuv9mhqcy1
8: https://www.sustain.ucla.edu/contacts/nurit-katz/
9: https://www.usda.gov/peoples-garden/pollinators#:~:text=Pollinators%20by%20Numbers,bees%20help%20increase%20crop%20yields.
