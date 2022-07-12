---
title: "Keen to go green: evaluating UCLA’s Carbon Neutrality Initiative"

teaser: Despite UCLA’s claims of being a leader in sustainability and climate action, the university is projected to fall short of its 2025 goal of carbon neutrality.

authors:
  - chelsea_chen
  - vivian_luk
  - connie_ma

key_takeaways:
  - Based on UCLA’s current carbon emission trends, The Stack projects that UCLA will reach zero net carbon emissions in 2068, 43 years after its 2025 goal.
  - Although UCLA is offsetting its carbon emissions, the university’s total carbon emissions continue to increase by an average of 1.7% each year since 2007. 
  - UC Merced is currently the only UC campus to have reached carbon neutrality. 

featured_image:
  url: carbon-neutrality/cover-art-illo.png
  caption: (Katelyn Dang/Illustrations Director)
og_image: carbon-neutrality/cover-art-illo.png

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js
  - /js/posts/carbon-neutrality/line-chart.js

stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/carbon-neutrality/app.css
---

From raging wildfires to damaging droughts to record-breaking heat waves, the effects of climate change can be felt around the globe. Climate change poses an unprecedented challenge with extensive scientific research pointing at one main cause: the release of greenhouse gases, which include carbon dioxide, methane and ​​chlorofluorocarbons, into the atmosphere from human activity.

The University of California has long been working to make improvements in the field of sustainability. In November 2013, the UC pledged to be carbon neutral by the year 2025 through the Carbon Neutrality Initiative. Achieving this goal would make the University of California the first major university system to do so.

Becoming carbon neutral means that the total amount of carbon emissions from an organization is balanced with the number of carbon offsets that the organization funds, and thus net carbon emissions are zero. Some types of carbon offsetting include reforestation, renewable energy projects and landfill management.

In 2019, the UC campuses funded carbon offsets through the Ozone Depleting Substances Projects, which has initiatives to prevent ozone-depleting substances from being released into the atmosphere, and U.S. Forest Projects, which includes reforestation and improved forest management.

Nurit Katz, the chief sustainability officer for UCLA, says that the University of California is firmly committed to meeting its milestone.

“As the University works to accomplish that goal, we will continue to challenge ourselves by harnessing the best available science and technology to achieve greater carbon reductions,” Katz said in an emailed statement.

The Stack analyzed data provided by the Climate Registry and the Association for the Advancement of Sustainability in Higher Education to examine UC campuses’ progress towards their goal of carbon neutrality. Based on the current data and emissions trends, The Stack also calculated future projections to predict when UCLA will achieve carbon neutrality.


![Graphic: Understanding Greenhouse Gas Emissions. The Greenhouse Gas Protocol Corporate Standard (or GHG protocol) classifies greenhouse gas emissions into three categories: Scope 1, Scope 2, and Scope 3. 
Scope 1 consists of emissions from direct or controlled sources from an organization, such as stationary combustion, mobile combustion, chemical processes and fugitive sources. Stationary combustion is the combustion of fossil fuels for industrial applications such as gas boilers. Mobile combustion is the combustion of fossil fuels for transportation such as cars, trucks and other petrol-run vehicles. Chemical processes release emissions from the chemical transformation of raw materials during manufacturing such as cement production. Fugitive emissions are the leaks and other unintentional gas emissions such as gas leaks from refrigeration units. 
Scope 2 consists of indirect emissions from purchased entities by an organization. These are indirect emissions released by purchased electricity, heating, cooling or steam. Scope 3 involves indirect emissions from activities organized, but neither directly owned or controlled, by an organization. Some examples include business travel, employee commute, and waste disposal.](/img/posts/carbon-neutrality/graphic.png)


### Comparing UC campuses’ carbon emissions

The Carbon Neutrality Initiative aims for emitting net-zero greenhouse gas emissions from Scope 1 and Scope 2 sources by 2025. The UCOP has also set a goal of carbon neutrality from certain Scope 3 sources by 2050 at the latest. 

The pie charts below categorize the greenhouse gas emissions from the nine undergraduate UCs into Scope 1, Scope 2 and Other. “Other” consists of Scope 3 emissions as well as biogenic emissions, which come from natural sources such as plants and soil.

The charts display data for the most recent year available for each campus, which is 2016 for UC Santa Cruz, 2017 for UC Merced, 2018 for UCLA and UC Davis, and 2019 for all other UCs.


<!-- #### Legend

Scope 1

<div class='my-legend'>
<div class='legend-scale'>
  <ul class='legend-labels'>

    <li><span style='background:#18a1cd;'></span></li>
    <li>Stationary Combustion</li>
    <li><span style='background:#15607a;'></span></li>
    <li>Mobile Combustion</li>
    <li><span style='background:#48babb;'></span></li>
    <li>Fugitive</li>
    <li><span style='background:#82f5cf;'></span></li>
    <li>Process</li>

  </ul>
</div>
</div>

<p>&nbsp;</p>
  Scope 2

<div class='my-legend'>
<div class='legend-scale'>
  <ul class='legend-labels'>

    <li><span style='background:#e7b461;'></span></li>
    <li>Purchased Electricity</li>
    <li><span style='background:#e3e3b4;'></span></li>
    <li>Purchased Heating</li>

  </ul>
</div>
</div>

<p>&nbsp;</p> -->
#### Each Campus' Carbon Emission Breakdown
<div class="pie-charts">
  <div class = "ucla-chart"><iframe class="emission-chart" id = "UCLA" title="UCLA" aria-label="Pie Chart" id="datawrapper-chart-5sDqJ" src="https://datawrapper.dwcdn.net/5sDqJ/13/" scrolling="no" frameborder="0" style="border: none; margin: auto;" height="350"></iframe></div>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCM" title="UC Merced" aria-label="Pie Chart" id="datawrapper-chart-DTcuc" src="https://datawrapper.dwcdn.net/DTcuc/12/" scrolling="no" frameborder="0" style="min-width: 33% !important; border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCB" title="UC Berkeley" aria-label="Pie Chart" id="datawrapper-chart-s4P67" src="https://datawrapper.dwcdn.net/s4P67/9/" scrolling="no" frameborder="0" style="border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCD" title="UC Davis" aria-label="Pie Chart" id="datawrapper-chart-zM2bK" src="https://datawrapper.dwcdn.net/zM2bK/11/" scrolling="no" frameborder="0" style="border: none;" width = "110%" height="400"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCI" title="UC Irvine" aria-label="Pie Chart" id="datawrapper-chart-CLGvy" src="https://datawrapper.dwcdn.net/CLGvy/8/" scrolling="no" frameborder="0" style="border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCR" title="UC Riverside" aria-label="Pie Chart" id="datawrapper-chart-Ggkky" src="https://datawrapper.dwcdn.net/Ggkky/7/" scrolling="no" frameborder="0" style="border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCSD" title="UC San Diego" aria-label="Pie Chart" id="datawrapper-chart-bjshS" src="https://datawrapper.dwcdn.net/bjshS/9/" scrolling="no" frameborder="0" style="border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCSB" title="UC Santa Barbara" aria-label="Pie Chart" id="datawrapper-chart-oeZAG" src="https://datawrapper.dwcdn.net/oeZAG/8/" scrolling="no" frameborder="0" style="border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCSC" title="UC Santa Cruz" aria-label="Pie Chart" id="datawrapper-chart-Fj6Jv" src="https://datawrapper.dwcdn.net/Fj6Jv/8/" scrolling="no" frameborder="0" style="border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

</div>

For all the UCs, the emissions from Scopes 1 and 2 cover the majority of CO2 emissions. For the majority of the UC campuses, ‘stationary combustion’ under Scope 1 and ‘purchased electricity’ under Scope 2 are major contributors to the total carbon emissions of the school.

Looking at UCLA’s emission breakdown, Scope 1 emissions constitute 60% of the total emissions, while Scope 2 accounts for 22% of emissions. ‘Stationary combustion’ is the largest individual source, responsible for 58% of the total emissions.

In 2018, UCLA had the most carbon emissions compared to the other UC campuses. UCLA had a total of over 400,000 metric tons of carbon emissions; of that total, over 45,000 tons came from the Ronald Reagan UCLA Medical Center and the Santa Monica UCLA Medical Center (CQ 18). 

The UC campuses without medical centers release fewer total emissions. In the U.S. as a whole, hospitals contribute over a third of health care-related carbon emissions, with health care constituting almost 10% of total U.S. emissions.

Notably, UC Merced is currently the only UC to have achieved net-zero carbon emissions. They reached this milestone in 2018, seven years ahead of the UC-wide Carbon Neutrality Initiative goal. 


### Evaluating UCLA’s progress toward net-zero carbon emissions

Although UCLA is offsetting its carbon emissions, its total carbon emissions continue to rise by an average of 4,750 metric tons each year. 

The line chart below displays UCLA’s total reported carbon emissions for Scope 1 and Scope 2 from 2006 to 2019, as well as the net total of Scope 1 and Scope 2 carbon emissions. Net total emissions are calculated by subtracting purchased carbon offsets from the total emissions from Scopes 1 and 2.


<div class="small-line-break"></div>
<div class="projections">
<canvas id="line-chart" width="800" height="450"></canvas>
</div>
<br/>

Since UCLA started offsetting its carbon emissions in 2013, the university’s net emissions have been decreasing by an average of 2.1% per year. At this rate, UCLA is set to reach carbon neutrality from Scope 1 and Scope 2 emissions in 2068, 43 years after its current 2025 goal. Since the 2025 goal of carbon neutrality only considers Scope 1 and Scope 2 emissions, Scope 3 was omitted from the chart.

Despite this, some remain optimistic and dedicated to the University of California’s original initiative.

“The University remains committed to meeting its carbon neutrality goals,” Katz said in an emailed statement when asked what the possible consequences are for UC not meeting its 2025 deadline.

Yet, as 2025 creeps into the near future, others see room for adjustment.

Fonna Forman, an associate professor of political science at UC San Diego and co-chair of the UC’s Global Climate Leadership Council, believes that as we approach 2025, we need to reassess and revisit our goals with new knowledge and information that we have learned over the past several years.

“Carbon neutrality is not enough. We need to go beyond carbon neutrality,” said Forman, who believes that carbon offsetting is only one step in a much larger process of climate action.

Karen McKinnon, an assistant professor at the UCLA Institute of Environment and Sustainability and the Department of Statistics, said that in order to keep global temperatures from rising more than two degrees carbon will need to be removed from the atmosphere.

“We need to additionally have negative emissions, meaning removing carbon from the atmosphere with things like direct air capture or other methodologies,” McKinnon said. 

### Looking ahead

For many, seeing the University of California’s slow progression towards carbon neutrality is disheartening, but progress doesn’t end with the Carbon Neutrality Initiative. Through individual choices and involvement in student organizations focused on sustainability, change can also be made on smaller scales.

“Change depends both on large-scale infrastructure changes and individual behavior change. We need the community engaged to achieve these ambitious goals,” Katz said in an emailed statement.

Ultimately, McKinnon believes that a positive mindset can help individuals create change at multiple levels of climate policy. 

“I think it is important to remain hopeful and remain optimistic because that will actually allow you to take action,” McKinnon said.

