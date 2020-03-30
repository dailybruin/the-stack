---
layout: page
permalink: /docs/todo/
---

- issues, PRs, TODOs, bugs dashboard (some Jira like system but better) 
- include virtual environments, docker, envs in installations?
- get input from beginners
- default onboarding (create media email, add to Slack, create github account, do tutorial, do all installations  create required environment)
- write some code for path independence in python and js? may not be necessary in js)



~ Just experimenting:
<iframe title="Apple Chart" aria-label="Interactive line chart" id="datawrapper-chart-uSCVr" src="//datawrapper.dwcdn.net/uSCVr/1/" scrolling="no" frameborder="0" style="width: 500; min-width: 100% !important; border: none;" height="500"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"])for(var e in a.data["datawrapper-height"]){var t=document.getElementById("datawrapper-chart-"+e)||document.querySelector("iframe[src*='"+e+"']");t&&(t.style.height=a.data["datawrapper-height"][e]+"px")}})}();
</script>




~ Just experimenting:
<html>
  <head>
    <script> function mushrooms() {
        return 5;
    }
    </script>
    <!--Load the AJAX API-->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});
      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);
      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', mushrooms()],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);
        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':600,
                       'height':500};
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    </script>
  </head>

  <body>
    <!--Div that will hold the pie chart-->
    <div id="chart_div"></div>
  </body>
</html>