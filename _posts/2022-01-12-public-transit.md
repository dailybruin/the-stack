---
title: Public Transit near UCLA
teaser: buses are late :(
authors:
  - 

key_takeaways:
  - 

introduction:


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


<!-- Timeliness graphs -->
<!-- Overview pie chart -->
<iframe title="Timeliness Performance of Different Transportation Agencies" aria-label="Multiple Pies" id="datawrapper-chart-VJ4Gp" src="https://datawrapper.dwcdn.net/VJ4Gp/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="302"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>
<!-- pie chart for AVTA -->
<iframe title="Antelope Valley Transit Authority Timeliness Performance" aria-label="Multiple Pies" id="datawrapper-chart-NUP74" src="https://datawrapper.dwcdn.net/NUP74/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="439"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>
<!-- pie chart for LADOT -->
<iframe title="LA Department of Transportation Bus Lines" aria-label="Multiple Pies" id="datawrapper-chart-UIRWW" src="https://datawrapper.dwcdn.net/UIRWW/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="334"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>
<!-- pie chart for Santa Clarita -->
<iframe title="Santa Clarita Transit Timeliness Performance " aria-label="Multiple Pies" id="datawrapper-chart-K35BC" src="https://datawrapper.dwcdn.net/K35BC/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="430"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>
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

<!-- Ridership Graphs -->
##### Average Ridership
{% include avg-ridership.html %}

##### LADOT Ridership
{% include ladot-ridership.html %}

##### AVTA Ridership
{% include avta-ridership.html %}

##### Santa Clarita Transit Ridership
{% include sct-ridership.html %}

##### Big Blue Bus Ridership
{% include bbb-ridership.html %}
