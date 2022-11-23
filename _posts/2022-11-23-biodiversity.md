---
title: "Growing a sustainable campus: A look at the biodiversity of plants at UCLA"

teaser: According to the California Native Plant Society, native plants are more environmentally friendly. But how much of UCLA’s landscaping is made up of native plants?  

authors:
  - angel_perez
  - junwon_choi
  - finn_liu

key_takeaways:
  - UCLA is saving about 5 million gallons of water annually after replacing past grass and turf areas with native plants.
  - As of 2022, UCLA is home to 10 times more native plants than non-native plants.
  - The UCLA campus contains more than 150 different species of plant, with over 70% of the species being native species.


featured_image: 
  url: biodiversity/cover_art.jpg
  caption: (Halinda Yu/Daily Bruin) 
og_image: biodiversity/cover_art.jpg


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

Despite the existence of about 6,500 types of California native plants, mass development and homogenized landscape practices have resulted in the degradation of these plants and, by extension, the local ecosystems centered around them. Native plants have evolved to survive in their particular environments and in conjunction with native wildlife. Plants native to California have generally adapted to desert conditions and provide food and shelter for California’s fauna.

In terms of sustainability, native species’ adaptations to desert conditions means they require less water, nutrients, and labor when compared to non-native species. Additionally, the survival of native wildlife depends on the presence of native plants, particularly for pollinators, which rely on certain native pollen producers. Pollinators are essential not only for the survival of flowering plants but also for approximately 35% of food crops, which reinforces the importance of increasing the presence of these plant populations. Native plants have also played a role in providing habitats for local animals and in mitigating climate change by capturing carbon dioxide.

Integrating a greater number of California native plants into constructed ecosystems, such as university campuses, reduces both the amount of resources required for maintenance and promotes biodiversity by encouraging the development of local wildlife.

In order to understand UCLA’s impact on biodiversity, The Stack analyzed data relating to the concentration of native plants on UCLA’s campus. 

### UCLA’s efforts to increase biodiversity on campus

Nurit Katz, the chief sustainability officer for UCLA, said in an emailed statement that the school plans to increase plant diversity on campus as part of its Sustainability Plan Goals for Landscape and Biodiversity. This plan aims to bolster biodiversity and transform the campus landscape into a part of the native ecosystem.

In order to meet its sustainability goals, the campus has started to implement plans to replace turf areas with native species of plants. 

“In general, many non-native species do require more water than native species, which is why we have begun transitioning turf areas of campus to drought tolerant and native plants,” Katz said in an emailed statement.

### Plant distribution at UCLA

#### How many plant species does UCLA host?

Across UCLA’s campus, there are a total of 166 different plant types, ranging from drought resistant succulents to large trees and a wide array of shrubs.

The following chart depicts the distribution of the different plant types at UCLA. 

<div class = 'pie-chart'>
  <canvas id = "PlantTypes"></canvas>
</div>

At 62 different species, shrubs maintain the highest number of unique species at UCLA. A few species of shrubs include the California sagebrush, laurel sumac and the quailbush. Meanwhile, succulents are in the minority of plant types with only three different species, which include the chaparral yucca, snake cholla and the coastal prickly pear. 

<div class = 'image-holder'>
  <div class = 'image-triad'>
   <img alt ='' src = '/img/posts/biodiversity/web.stack.biodiversity.d.CK.jpg'>
   <span class = 'caption'> (Christine Kao/Daily Bruin staff)</span>
  </div>
  <div class = 'image-triad'> 
   <img  alt ='' src = '/img/posts/biodiversity/web.stack.biodiversity.c.HY.jpg'>
   <span class = 'caption'>  (Halinda Yu/Daily Bruin)</span>
  </div>
  <div class = 'image-triad'>
    <img alt ='' src = '/img/posts/biodiversity/web.stack.biodiversity.e.CK.jpg'>
    <span class = 'caption'> (Christine Kao/Daily Bruin staff)</span>
  </div>
</div>

The distribution of the other plant types include 32 different species of trees, 30 forbs – also known as wildflowers – 18 grasses and sedges, 14 annuals and four vines.

#### Which gardens at UCLA host the most plants?

The campus contains six different plant communities, all with varying distribution of plant species within them.

![Graphic: Our data breaks UCLA's plants into six plant communities on campus. Each of the plant communities has different characteristics as broken down here.Urban Canyon - A mix of both nonnative plant species that are adjusted to the California climate and native plant species. 
Bioswale/Rain Garden - A bioswale or rain garden is an indented area of land that is able to collect water from sources such as precipitation or runoffs. An example of a bioswale on campus is near the Luskin Center. 
Turf Alternative - Areas of grass or turf that have been replaced by native species of plants. 
Sage Hill - Sage Hill is situated in the Northwest Corner of campus, around where the Hitch Residential Suites are. This region of campus makes up 3.4 acres and contains various local fauna and plant species. 
Alluvial Corridor - A plant community located in environments with heavy amounts of moisture. This plant community consists of willow scrubs and clusters of trees that thrive near water. 
Oakwoodland/Grand Savanna - A plant community containing various trees, either grouped or by themselves. The ground layer below the trees contains grasses, sedges and wildflowers, creating a meadow-like landscape with shrubs scattered throughout.](/img/posts/biodiversity/graphic.png)

The following chart depicts the number of different plant species per garden at UCLA. 

<div class = 'pie-chart'>
  <canvas id = "PlantD"></canvas>
</div>

The Grand Savanna/Oakwoodland contains the highest distribution of unique plant species at 85, while the lowest distribution are in the Bioswale/Rain Garden or have been categorized as turf alternatives with 21 different plants in both locations.

Turf alternatives are a category for native plants that are replacing grass and turf areas in order to promote water conservation, as native plants tend to require less water. This conversion is currently occurring at Murphy Hall and Moore Hall, according to a written statement from Katz.

Despite this categorization of turf alternatives, only about 57% of the plant species in the turf alternatives category are native to California. This is the category with the lowest percentage of native species. The Bioswale/Rain Garden, Alluvial Corridor, and Sage Hill communities contain only native species. 
 


#### Where are the native plants located on UCLA’s campus?

<div class = "map-container">
  <div class = 'map-title'>Location of plants on campus</div>
  <div class="legend-container">
      <div class="legend-box" style="background:#5FA0CE;"></div>
      <span class="legend-text">California native</span>
      <div class="legend-box" style="background:#E5A539;"></div>
      <span class="legend-text">Non-native</span>
    </div>
  <iframe width="100%" height="415" src="../../../../js/posts/biodiversity/Heatmap_Visualization/CAnativeplants.html" frameboarder="0" allowfullscreen></iframe>
</div>

This map displays the distribution of plants on UCLA’s campus as provided by UCLA Sustainability and iNaturalist. There is a high concentration of native plants in UCLA’s Sage Hill Preserve near Hitch Suites, with less dense clusters located west of the Anderson School of Management and in the Mildred E. Mathias Botanical Garden. While Katz noted past conversions of plant populations near the Humanities Building and Powell Library, between Murphy Hall and Dodd Hall, in the Molecular Garden, and in the study space area in front of Bunche Hall, the map created with iNaturalist’s observation data does not yet reflect the addition of California native plants in these areas.

#### How has the number of California native species changed over time at UCLA?

As of today, the campus hosts close to three times as many native plant species as non-native plant species, currently maintaining a total of 121 California native and 45 non-native plant species across its campus.

The number of observed plants that are native to California has increased more over time than the number of observed non-native ones since 2016. There were 653 observed native and 57 observed non-native plants on campus as of this year. The gap between native and non-native plant counts on campus has been increasing each year, with this year’s figures displaying ten times more plants from native species than plants from non-native species. 


<div style='height: 300px'>
  <canvas id = "CA_native_linechart"></canvas>
</div>
<div class = "caption">Note: The first iNaturalist Observations at UCLA were in 2016.</div>

### Impacts of increased native plant species on campus

As a part of this landscaping plan, UCLA is converting previous turf areas into areas that house native plants. 

These efforts are saving water campuswide. 

“The rough estimate of water savings from converting these formerly grass/turf spaces to native plants is approximately 5 million gallons annually,” Katz said in an emailed statement.



### Looking forward

<!-- <div class = vert_image_holder>
<img class = "vert_image" src = "/img/posts/biodiversity/web.stack.biodiversity.b.HY.jpg"
alt = "Image of trees near the Bruin Bear">
<div class = 'caption'> Trees near the Bruin Bear. (Halinda Yu/Daily Bruin)</div>
</div> -->

“The main focus will be converting areas of ornamental or ‘non-functional’ grass/turf, which use a lot of water,” Katz added in an emailed statement. In addition to turf, trees may also be replaced by native species, Katz said. Katz added that when existing non-native trees or landscaping needs replacement, UCLA plans to transition those to native plants. An example of this is the tree by the Bruin Bear, which was recently replaced by a coast live oak.

The increasing trends in plant diversity on campus sets UCLA on track to becoming a more resource-efficient and more environmentally friendly campus for California’s native flora and fauna.


### About the data

The data used in this article were provided by the Institute of Sustainability at UCLA and collected from iNaturalist. The dataset provided by the Institute of Sustainability at UCLA contains plant information by species by scientific name, whether plants are native to California, and its location on UCLA’s campus. The dataset provided by iNaturalist contains observation date, location, and species guess.

Some of the graphs may not reflect the actual number of plants on campus because of the following limitation:
Observation data provided by iNaturalist contained more observed species than officially reported by UCLA, resulting in truncation of unreported species when merging both datasets. The Stack only analyzed the species reported by UCLA, which allowed us to determine whether plants were native to California or not. This resulted in observations not reported by UCLA being removed in the final dataset.


