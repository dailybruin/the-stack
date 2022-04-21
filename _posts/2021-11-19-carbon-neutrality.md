---
title: "Keen to go Green: Evaluating UCLA’s Carbon Neutrality Initiative"
teaser: Despite UCLA’s claims of being a leader in sustainability and climate action, the university is projected to fall short of its 2025 goal of carbon neutrality.

authors:
  - vivian_luk
  - chelsea_chen

key_takeaways:
  - Based on its current trajectory, UCLA is projected to reach zero net carbon emissions in 2049, 24 years after its 2025 goal.
  - Although UCLA is offsetting its carbon emissions, the university’s total carbon emissions continue to increase by 2.4% each year.
  - UC Merced is currently the only UC campus to have reached achieve carbon neutrality.

featured_image:
  url:
  caption:
og_image:

scripts:
  - //cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js
  - /js/posts/carbon-neutrality/line-chart.js

stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
  - /css/posts/carbon-neutrality/app.css
---

From raging wildfires to damaging droughts, the effects of climate change can be felt around the globe. Climate change, which is also responsible for the rise of sea levels and global temperatures, poses an unprecedented challenge with extensive scientific research pointing at one main cause: the overwhelming release of carbon emissions into the atmosphere from human activity.

The University of California has long been working to make improvements in the field of sustainability. In November 2013, UC pledged to be completely carbon neutral by the year 2025 through the Carbon Neutrality Initiative announced by President Janet Napolitano. The effort committed all ten UC campuses to emit net zero greenhouse gasses from their buildings and university vehicles. Achieving this goal would make the University of California the first major university system to do so.

Carbon neutrality is the idea that any greenhouse gas emissions released by an organization is balanced by the same amount of emissions removed from the atmosphere, achieving net zero emissions. As it is impossible for an organization to produce zero emissions, net zero is a more viable goal as an organization can balance their emissions through offsetting, the funding of carbon dioxide saving. The UC’s goal of reaching carbon neutrality is synonymous with funding carbon offsets.

Common examples of carbon offsetting include reforestation, renewable energy projects, and landfill management. In 2019, the UC campuses have funded the Ozone Depleting Substances (ODS) Projects, which provides methods to quantify greenhouse gas emissions associated with damaging the ozone layer to discover their sources and destroy them, and U.S Forest Projects, which includes reforestation and improved forest management.

Since the initial announcement of the Carbon Neutrality Initiative, the University of California has taken several next steps through forming different councils, committees, and programs to advise and engage UC in its efforts. Each of the individual campuses have also moved forward on their own with different strategies and plans.

Nurit Katz, the Chief Sustainability Officer for UCLA, is the Climate Action Plan Lead for UCLA and believes that the University of California is firmly committed to meeting their milestone.

“As the University works to accomplish that goal, we will continue to challenge ourselves by harnessing the best available science and technology to achieve greater carbon reductions,” Katz said in an emailed statement.

The Stack analyzed data provided by the Climate Registry and The Sustainability Tracking, Assessment & Rating System to examine different UC campuses’ progress over the past years towards their goal of carbon neutrality. Based on the current data and findings, the Stack also formed future projections to predict UCLA’s true time frame for achieving carbon neutrality.

### UC Greenhouse Gas Emissions by Source

Comparing UC campuses’ carbon emissions
The Carbon Neutrality Initiative aims for emitting net-zero greenhouse gas emissions from Scope 1 and Scope 2 by 2025. As these two scopes are managed directly by the organization, they are easier to measure and therefore are usually targeted first in achieving carbon neutrality. The UCOP has also set a goal of carbon neutrality from Scope 3 emissions by 2050.

The pie charts below categorize the greenhouse gas emissions from the nine undergraduate UCs into Scope 1, Scope 2 and Other, taken from the most recent data available. “Other” consists of Scope 3 emissions as well as biogenic emissions, which come from natural sources such as trees and soil.

The following CO2 gas emissions are taken from the year 2019, excluding UCLA and UC Davis reported from 2018, UC Merced from 2017, and UC Santa Cruz from 2016.

#### Legend

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

<p>&nbsp;</p>

<div class="pie-charts">
  <iframe class="emission-chart" id = "UCLA" title="UCLA" aria-label="Pie Chart" id="datawrapper-chart-5sDqJ" src="https://datawrapper.dwcdn.net/5sDqJ/13/" scrolling="no" frameborder="0" style="min-width: 33% !important; border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCM" title="UC Merced" aria-label="Pie Chart" id="datawrapper-chart-DTcuc" src="https://datawrapper.dwcdn.net/DTcuc/12/" scrolling="no" frameborder="0" style="min-width: 33% !important; border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCB" title="UC Berkeley" aria-label="Pie Chart" id="datawrapper-chart-s4P67" src="https://datawrapper.dwcdn.net/s4P67/9/" scrolling="no" frameborder="0" style="min-width: 33% !important; border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCD" title="UC Davis" aria-label="Pie Chart" id="datawrapper-chart-zM2bK" src="https://datawrapper.dwcdn.net/zM2bK/11/" scrolling="no" frameborder="0" style="min-width: 33% !important; border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCI" title="UC Irvine" aria-label="Pie Chart" id="datawrapper-chart-CLGvy" src="https://datawrapper.dwcdn.net/CLGvy/8/" scrolling="no" frameborder="0" style="min-width: 33% !important; border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCR" title="UC Riverside" aria-label="Pie Chart" id="datawrapper-chart-Ggkky" src="https://datawrapper.dwcdn.net/Ggkky/7/" scrolling="no" frameborder="0" style="min-width: 33% !important; border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCSD" title="UC San Diego" aria-label="Pie Chart" id="datawrapper-chart-bjshS" src="https://datawrapper.dwcdn.net/bjshS/9/" scrolling="no" frameborder="0" style="min-width: 33% !important; border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCSB" title="UC Santa Barbara" aria-label="Pie Chart" id="datawrapper-chart-oeZAG" src="https://datawrapper.dwcdn.net/oeZAG/8/" scrolling="no" frameborder="0" style="min-width: 33% !important; border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

  <iframe class="emission-chart" id = "UCSC" title="UC Santa Cruz" aria-label="Pie Chart" id="datawrapper-chart-Fj6Jv" src="https://datawrapper.dwcdn.net/Fj6Jv/8/" scrolling="no" frameborder="0" style="min-width: 33% !important; border: none;" height="350"></iframe>
  <!-- <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
  </script> -->

</div>

For all the UCs, the emissions from Scopes 1 and 2 cover the majority of CO2 emissions. For the majority of the UC campuses, ‘stationary combustion’ under Scope 1 and ‘purchased electricity’ under Scope 2 are major contributors to the total carbon emissions of the school.

Looking at UCLA’s emission breakdown, Scope 1 emissions constitute 60% of the total emissions, while Scope 2 accounts for 22% of emissions. ‘Stationary combustion’ is the largest individual source, alone responsible for 58% of the total emissions.

In 2018, UCLA had the most carbon emissions compared to the other UC campuses. UCLA had a total of over 400,000 metric tons of carbon emissions; of that total, over 46,000 tons came from the Ronald Reagan UCLA Medical Center and the Santa Monica UCLA Medical Center.
The UC campuses without medical centers release fewer total emissions, as hospitals omit an immense amount of greenhouse gasses. Hospitals alone are responsible for over a third of health care related carbon emissions, with health care constituting 10% of total U.S emissions.

Notably, UC Merced is currently the only UC to have achieved net-zero carbon emissions. They reached this milestone in 2018, seven years ahead of the Carbon Neutrality Initiative’s goal.

### Evaluating UCLA’s progress toward zero net carbon emissions

<canvas id="line-chart" width="800" height="450"></canvas>

Since UCLA started offsetting its carbon emissions in 2013, the university’s net emissions have been decreasing by an average of 2.7% per year. At this rate, UCLA is set to reach carbon neutrality in 2049, 24 years after its current 2025 goal.

Additionally, although UCLA is offsetting its carbon emissions, its total carbon emissions continue to rise every year by an average of 4,750 metric tons.

Despite this, some remain optimistic and dedicated to the University of California’s original initiative.

“The University remains committed to meeting its carbon neutrality goals,” Katz said in an emailed statement when asked what the possible consequences are for UC not meeting its 2025 deadline.

Yet, as 2025 creeps into the near future, others see room for adjustment.

Fonna Forman, an associate professor of political science at UC San Diego, was recently appointed to the Global Climate Leadership Council which was formed shortly after the initial carbon neutrality proposal to advise the University of California on how to achieve their goal. Forman believes that as we approach 2025, we need to reassess and revisit our goals with new knowledge and information that we have learned over the past several years.

“Carbon neutrality is not enough. We need to go beyond carbon neutrality,” said Forman, who believes that offsetting is only a stage in a much larger process.

Karen McKinnon, an assistant professor in the UCLA Institute of Environment and Sustainability and the Department of Statistics, agrees.

“We need to additionally have negative emissions, meaning removing carbon from the atmosphere with things like direct air capture or other methodologies,” McKinnon said.

### Looking ahead

For many, seeing the University of California’s slow progression towards carbon neutrality is disheartening, but progress doesn’t end with the Carbon Neutrality Initiative. Through individual choices and involvement in student organizations focused on sustainability, change can also be made on smaller scales.

“Individuals can take actions like reducing their energy use and making sustainable transportation choices in how they get to campus. Change depends both on large scale infrastructure changes and individual behavior change. We need the community engaged to achieve these ambitious goals,” Katz said.

Although by current projections it remains unclear whether or not the University of California will be able to accomplish its goal by 2025, the Carbon Neutrality Initiative is not intended to be an indicator of success or failure in the long term. Ultimately, McKinnon believes that maintaining the right mindset and attitude from individuals and institutions alike is more important for making positive environmental changes now and in the future.

“It’s important to remain hopeful and remain optimistic, because that will allow you to actually take action,” McKinnon said.
