---
title: Evaluating Plant Diversity at UCLA

teaser: UCLA is taking steps to create a campus that is environmentally sustainable and friendly to California’s fauna.

authors:
  - angel_perez
  - junwon_choi
  - finn_liu

key_takeaways:
  - UCLA has continued to increase the proportion of plants native to California on campus, in accordance with their Sustainability Plan
  - Use our graphics to find out where UCLA hosts their California native plants

featured_image:
  url: 
  caption: (To be added)
og_image: 


scripts:
  - //cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js
  # - //cdn.jsdelivr.net/npm/chartjs-plugin-piechart-outlabels@1
  - /js/posts/biodiversity/plantsbygarden.js
  - /js/posts/biodiversity/plantypes.js
  - /js/posts/biodiversity/CA_native_pie.js
  - /js/posts/biodiversity/CA_native_over_time.js

stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/biodiversity/plantstyles.css
---
<script src=https://cdn.jsdelivr.net/npm/chartjs-plugin-piechart-outlabels@1></script>
Despite the existence of around 6,500 types of California native plants, mass development and homogenized landscape practices have resulted in the degradation of these local ecosystems. These native plants have evolved to survive in their particular environments and in conjunction with native wildlife, meaning that they have generally adapted to desert conditions while providing food and shelter for California’s fauna. The survival of native wildlife largely depends on the presence of native plants, particularly for pollinators which rely on certain native pollen-producers.

Plants native to California require far less maintenance than non-native species in terms of water as well as fertilizer, pesticides, and labor, which makes them far more sustainable than non-native species. (CQ #2) These native plants play an important role in both mitigating climate change and hosting a livable environment for surrounding fauna. (CQ #2) They have shown to be efficient at trapping planet-warming carbon dioxide while also providing food and shelter for insects and animals. (CQ #2)

Therefore, integrating a greater number of California native plants into constructed ecosystems, such as university campuses, reduces both the amount of resources required for maintenance and promotes biodiversity by encouraging the development of local wildlife. (CQ #1)

### UCLA’s efforts to increase biodiversity on campus

Nurit Katz, the chief sustainability officer for UCLA, says that the University of California is on track to increase plant diversity on campus as part of the school’s Sustainability Plan Goals for Landscape & Biodiversity, which aims to “Support biodiversity and integrate the campus landscape into regional ecological systems.” (CQ #7)

“In general many non-native species do require more water than native species which is why we have begun transitioning turf areas of campus to drought tolerant and native plants. Some prior areas that were converted include an area between Humanities and Powell, the area between Murphy and Dodd, the molecular garden and the study space area in front of Bunche Hall,” Katz explained in an emailed statement. (CQ #3)

### Plant Distribution at UCLA

#### How many plant species does UCLA host?

Across UCLA’s campus, there are a variety of different plant types ranging from drought resistant succulents to large trees and a wide array of shrubs. (CQ #4)

The following chart depicts the distribution of the different plant types at UCLA.

<div style='height: 300px'>
  <canvas id = "PlantTypes"></canvas>
</div>

Shrubs make up a vast majority of the plants of UCLA at 62 different species, including the California Sagebrush, California Sumac, and the quailbush.(CQ #4) Meanwhile, succulents are in the vast minority of plant types with only three different species which include the chaparral yuca, snake cholla, and the coastal prickly pear (CQ #4). 

The distribution of the other plant types include 32 different species of trees, 30 forbs, 18 grasses and sedges, 14 annuals, and 4 vines. (CQ #4)

#### Which gardens at UCLA host the most plants?

The campus contains 7 different gardens, all with a varying distribution of plant species within them. (CQ #4)

The following chart depicts the number of different plant species per garden at UCLA. 

<div style='height: 300px'>
  <canvas id = "PlantD"></canvas>
</div>

The Bioswale/Rain Garden contains the highest distribution of unique plant species at 85 while lowest distribution of different plants are contained within the category turf alternative and in the alluvial corridor at 21 for both (CQ #4). 

Turf alternatives are a category for native plants that are replacing grass and turf areas in order to promote water conservation as native plants require less water to tend to. According to Katz, this conversion is currently occurring at Murphy and Moore Hall (CQ #3).

The distribution of the other gardens include 81 different types of plants at Urban Canyon, 77 at Sage Hill, and 39 at Grand Savanna/Oakwoodland. (CQ #4)

#### What is the ratio of California native and non-native plants at UCLA?

As of today, the campus hosts close to three times as many native plants as non-native plant species. (CQ #4)

<div><canvas id = "CA_native_piechart"></canvas></div>

The school currently maintains a total of 121 California native and 45 non-native plant species across its campus.

#### How have the number of California native species changed over time at UCLA?

Plants native to California have been observed more over time than non-native ones since 2016.

<div style='height: 300px'>
  <canvas id = "CA_native_linechart"></canvas>
</div>
[Note: The first iNaturalist Observations at UCLA were in 2016]

Currently, there are 653 observed native and 57 non-native plants on campus.

#### Where are the native plants located on UCLA’s campus?

<div class = "map-container">
  <div class="legend-container">
      <div class="legend-box" style="background:#5FA0CE;"></div>
      <span class="legend-text">Native CA</span>
      <div class="legend-box" style="background:#E5A539;"></div>
      <span class="legend-text">Non-native CA</span>
    </div>
  <iframe width="100%" height="415" src="../../../../js/posts/biodiversity/Heatmap_Visualization/CAnativeplants.html" frameboarder="0" allowfullscreen></iframe>
</div>

This map displays the locations of plants on UCLA’s campus as provided by UCLA Sustainability and iNaturalist (CQ #4)(CQ #5). There is a high concentration of native plants near Hitch Suites, with less dense clusters located west of the Anderson School of Management and in the Mildred E. Mathias Botanical Garden. (CQ #4)(CQ #5)

### Impacts of increased native plant species on campus

As a part of this landscaping plan, previous turf areas such as the molecular garden and the study space in front of Bunche Hall have been converted into areas that house native plants. “The rough estimate of water savings from converting these formerly grass/turf spaces to native plants is approximately 5 million gallons annually,” Katz said in an emailed statement. (CQ #3).

### Looking Forward

Through the efforts of the Institute of Sustainability at UCLA, UCLA plans to convert non-functional grass or turf areas that demand more water for maintenance into drought-resistant native plants in order to improve native biodiversity as a part of the Sustainable LA Grand Challenge (CQ #6). “The main focus will be converting areas of ornamental or ‘non-functional’ grass/turf, which use a lot of water. Over time as some non-native trees or landscaping needs to be replaced we may also transition those to natives. For example the tree by the Bruin Bear was recently replaced by a Coast Live Oak,” Katz explained in an emailed statement. (CQ #3)

With multiple UCLA experts serving on the Biodiversity Expert Council that is developing plans for LA, we hope to see UCLA’s role playing an important role and setting a quality example in promoting and maintaining native biodiversity in California. (CQ #3)

### Data Analysis

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
