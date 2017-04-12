(function(){
  'use strict';
  // expects Superagent, Vue.js, Papa Parse

  // alias superagent as `request`
  const request = superagent;

  const DATA_URL = '/datasets/bruinwalk-class-ratings/ratings.csv';
  const PRIMARY_COLOR = '#00a5ff';
  const SECONDARY_COLOR_ORANGE = '#ff9040';
  const TERTIARY_COLOR_RED = '#cc4714'
  const TERTIARY_COLOR_PURPLE = '#3d4899';
  const TERTIARY_COLOR_GREEN = '#00ff76'

  Vue.component('ratings-list', {
    props: ['ratings', 'ratingType'],
    template: `
    <table class="ratings-list">
      <thead>
        <tr>
          <th>Average rating</th>
          <th>Professor</th>
          <th>Course</th>
          <th class="ratings-count"># of ratings</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rating in ratings">
          <td class="rating">{{ parseFloat(rating[ratingType]).toFixed(2) }}</td>
          <td class="professor">{{ rating.first_name }} {{ rating.last_name }}</td>
          <td class="class">{{ rating.class_code }}: {{ rating.class_title }}</td>
          <td class="ratings-count">{{ rating.reviews_count }}</td>
        </tr>
      </tbody>
    </table>
    `
  });

  request
  .get(DATA_URL)
  .then(res => {
    const ratings = Papa.parse(res.text, { 
      header: true, dynamicTyping: true 
    }).data;

    const app = new Vue({
      el: '#app',
      data: {
        bestOverall: ratings.sort((a, b) => { return b.overall_rating - a.overall_rating }).slice(0, 25),
        worstOverall: ratings.sort((a, b) => { return a.overall_rating - b.overall_rating }).slice(0, 25),
        easiest: ratings.sort((a, b) => { return b.easiness_rating - a.easiness_rating }).slice(0, 25),
        hardest: ratings.sort((a, b) => { return a.easiness_rating - b.easiness_rating }).slice(0, 25)
      }
    });

    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawCharts);

    function drawCharts() {
      const histograms = [
        {
          key: 'overall_rating',
          id: 'overall'
        },
        {
          key: 'easiness_rating',
          id: 'easiness'
        }
      ];
      histograms.forEach(chart => {
        drawHistogram(chart.key, chart.id);
      });

      const scatterCharts = [
        {
          hAxis: 'easiness_rating',
          hAxisName: 'Easiness rating',
          vAxis: 'overall_rating',
          vAxisName: 'Overall rating',
          id: 'easiness-vs-overall'
        },
        {
          hAxis: 'clarity_rating',
          hAxisName: 'Clarity rating',
          vAxis: 'overall_rating',
          vAxisName: 'Overall rating',
          id: 'clarity-vs-overall'
        }
      ];
      scatterCharts.forEach(chart => {
        drawScatterChart(chart.hAxis, chart.hAxisName, chart.vAxis, 
                         chart.vAxisName, chart.id);
      });

      const pieCharts = [
        {
          id: 'overall-ratings-count',
          data: [
            ['1', 1847],
            ['2', 5423],
            ['3', 12345],
            ['4', 14028],
            ['5', 7872]
          ]
        },
        {
          id: 'easiness-ratings-count',
          data: [
            ['1', 10110],
            ['2', 16287],
            ['3', 10905],
            ['4', 3237],
            ['5', 976]
          ]
        }
      ]
      pieCharts.forEach(chart => {
        drawPieChart(chart.id, chart.data);
      });
    }

    function drawHistogram(key, id) {
      const data = google.visualization
      .arrayToDataTable([['Course', 'Rating']]
      .concat(
        ratings
        .map(rating => {
          return [`${rating.class_code} w/ ${rating.first_name} ${rating.last_name}`, rating[key].toFixed(2)]
        })
      ));

      const ticks = [];
      for (let i = 1.0; i < 5.0; i += 0.1) {
        ticks.push(i);
      }

      const options = {
        fontName: 'Open Sans',
        backgroundColor: {
          fill: 'transparent'
        },
        legend: { position: 'none' },
        hAxis: {
          slantedText: false,
          ticks: ticks
        },
        vAxis: {
          title: 'Number of classes',
        },
        histogram: {
          bucketSize: 0.1
        },
        isStacked: true,
        height: window.innerHeight * (2/3),
        chartArea: {
          width: '90%', 
          height: '90%'
        },
        colors: [PRIMARY_COLOR]
      };

      const chart = new google.visualization.Histogram(document.getElementById(id));
      chart.draw(data, options);
    }

    function drawScatterChart(hAxis, hAxisName, vAxis, vAxisName, id) {
      const data = new google.visualization.DataTable();

      data.addColumn('number', hAxisName); // Implicit domain label col.
      data.addColumn('number', vAxisName); // Implicit series 1 data col.
      data.addColumn({type:'string', role:'tooltip', p: {'html': true}});  // interval role col.
      data.addRows(
        ratings
        .map(rating => {
          const tooltip = `
            <strong>${rating.class_code} w/ ${rating.first_name} ${rating.last_name}</strong><br/>
            ${hAxisName}: <strong>${rating[hAxis].toFixed(2)}</strong><br/>
            ${vAxisName}: <strong>${rating[vAxis].toFixed(2)}</strong>
          `;
          return [rating[hAxis], rating[vAxis], tooltip];
        })
      );

      const options = {
        hAxis: {
          title: hAxisName,
          viewWindowMode: 'maximized',
          gridlines: {
            count: 4
          },
          minorGridlines: {
            count: 3
          }
        },
        vAxis: {
          title: vAxisName,
          viewWindowMode: 'maximized',
          gridlines: {
            count: 4
          },
          minorGridlines: {
            count: 3
          }
        },
        fontName: 'Open Sans',
        backgroundColor: {
          fill: 'transparent'
        },
        tooltip: {
          isHtml: true,
        },
        legend: { 
          position: 'right',
          alignment: 'center',
          textStyle: { 
            fontSize: 14
          }
        },
        height: Math.min(window.innerHeight, window.innerWidth),
        chartArea: {
          top: 20,
          left: '7.5%',
          width: '80%', 
          height: '85%'
        },
        colors: [PRIMARY_COLOR],
        dataOpacity: 0.75,
        trendlines: {
          0: {
            type: 'linear',
            color: SECONDARY_COLOR_ORANGE,
            opacity: 0.5,
            showR2: true,
            visibleInLegend: true,
            tooltip: false
          }
        }
      };

      const chart = new google.visualization.ScatterChart(document.getElementById(id));
      chart.draw(data, options);
    }

    function drawPieChart(id, _data) {
      const data = google.visualization.arrayToDataTable(
        [['Rating', 'Count']]
        .concat(_data)
      );

      const options = {
        fontName: 'Open Sans',
        backgroundColor: 'transparent',
        height: window.innerHeight * (1/3),
        chartArea: {
          height: '90%',
          width: '90%'
        },
        legend: {
          position: 'labeled'
        },
        // colors: http://paletton.com/#uid=13t0u0k++++hs++n+++++j3++aU
        colors: ['#002437', '#003E60', '#00A6FF', '#4AC0FF', '#7BD1FF']
      };

      const chart = new google.visualization.PieChart(document.getElementById(id));

      chart.draw(data, options);
    }

  });
  
})();