import { MALE_COLOR, FEMALE_COLOR, isMobile } from './globals.js';
const font_size = 16;
const tooltip_font_size = 14;

var scatterChart;

d3.csv('/datasets/prof-reviews/top_500_.csv').then(function(frequency) {
  d3.csv('/datasets/prof-reviews/top_500_1.csv').then(function(frequency_1) {
    document.getElementById('myList').addEventListener('change', change_func);

    const data_1 = [];
    const labels_data_1 = [];
    const data_5 = [];
    const labels_data_5 = [];

    let max_num = 1.4;

    frequency.forEach(row => {
      // data_1.labels.push(row.word);
      data_1.push({ x: Number(row.male), y: Number(row.female) });
      labels_data_1.push(row.word);
    });

    frequency_1.forEach(row => {
      // data_1.labels.push(row.word);
      data_5.push({ x: Number(row.male), y: Number(row.female) });
      labels_data_5.push(row.word);
    });

    const fem_data = [
      { x: 0.019, y: 0.061 },
      { x: 0.676, y: 0.709 },
      // { x: 0.081, y: 0.11 },
      { x: 0.302, y: 0.317 },
      { x: 0.02, y: 0.032 },
      { x: 0.046, y: 0.057 },
      { x: 0.027, y: 0.036 },
      { x: 0.016, y: 0.026 },
      { x: 0.216, y: 0.225 },
      { x: 0.04, y: 0.048 },
      { x: 0.075, y: 0.083 },
    ];

    const fem_labels = [
      'sweet',
      'easy',
      // 'workload',
      'helpful',
      'social',
      'specific',
      'disorganized',
      'busy',
      'bad',
      'small',
      'worst',
    ];

    const male_data = [
      { x: 0.476, y: 0.405 },
      { x: 0.125, y: 0.065 },
      { x: 0.36, y: 0.325 },
      { x: 0.054, y: 0.03 },
      { x: 0.051, y: 0.036 },
      { x: 0.052, y: 0.039 },
      { x: 0.065, y: 0.052 },
      { x: 0.186, y: 0.174 },
      { x: 0.069, y: 0.058 },
      { x: 0.04, y: 0.03 },
      { x: 0.093, y: 0.073 },
      { x: 0.034, y: 0.019 },
      { x: 0.1, y: 0.09 },
      { x: 0.042, y: 0.033 },
    ];

    const male_labels = [
      'hard',
      'funny',
      'difficult',
      'old',
      'generous',
      'impossible',
      'useful',
      'fair',
      'tough',
      'useless',
      'harder',
      'smart',
      'easier',
      'basic',
    ];

    let ctx = document.getElementById('scatter');
    scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Other words',
            data: data_1,
            labels: labels_data_1,
            pointRadius: 4,
            displayInLegend: true,
          },
          {
            label: 'Top male-skewed adjectives',
            borderColor: MALE_COLOR,
            backgroundColor: MALE_COLOR,
            data: male_data,
            labels: male_labels,
            pointRadius: 7,
            pointHoverRadius: 7,
            displayInLegend: true,
          },
          {
            label: 'Top female-skewed adjectives',
            borderColor: FEMALE_COLOR,
            backgroundColor: FEMALE_COLOR,
            data: fem_data,
            labels: fem_labels,
            pointRadius: 7,
            pointHoverRadius: 7,
            displayInLegend: true,
          },
          {
            data: [
              {
                x: 0,
                y: 0,
              },
              {
                x: 0.5,
                y: 0.5,
              },
              {
                x: 1.4,
                y: 1.4,
              },
            ],
            borderColor: 'grey',
            borderWidth: 1,
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: false,
            tension: 0,
            showLine: true,
            label: 'Line y = x',
            displayInLegend: false,
          },
        ],
      },
      options: {
        animation: false,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            color: null,
          },
        },
        legend: {
          reverse: true,
          display: true,
          labels: {
            fontSize: isMobile() ? 14 : font_size,
            filter: (legendItem, chartData) => {
              return chartData.datasets[legendItem.datasetIndex]
                .displayInLegend;
            },
          },
        },
        // title: {
        //    display: true,
        //    text: 'Words Used Most Frequently for Males vs Females'
        // },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Percent of words in female reviews',
                fontSize: font_size,
              },
              ticks: {
                min: 0,
                max: max_num,
              },
            },
          ],

          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Percent of words in male reviews',
                fontSize: font_size,
              },
              ticks: {
                min: 0,
                max: max_num,
              },
            },
          ],
        },

        responsive: true,
        tooltips: {
          titleFontSize: tooltip_font_size,
          bodyFontSize: tooltip_font_size,
          // mode: 'point',
          callbacks: {
            labelColor: function(tooltipItem, chart) {
              var color_dec = '';
              if (tooltipItem.xLabel > tooltipItem.yLabel) {
                // color_dec = MALE_COLOR;
                return {
                  borderColor: MALE_COLOR,
                  backgroundColor: MALE_COLOR,
                };
              } else {
                return {
                  borderColor: FEMALE_COLOR,
                  backgroundColor: FEMALE_COLOR,
                };
              }
            },
            // title: function(tooltipItems,data){
            //    return data.datasets[tooltipItems[0].datasetIndex].labels[tooltipItems[0].index]
            // },
            label: function(tooltipItem, data) {
              return data.datasets[tooltipItem.datasetIndex].labels[
                tooltipItem.index
              ];
            },
            afterBody: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem[0].datasetIndex];
              var index = tooltipItem.index;
              return [
                'Male frequency: ' + tooltipItem[0].xLabel + '%',
                'Female frequency: ' + tooltipItem[0].yLabel + '%',
              ];
            },
          },
        },
      },
    });

    //NEW CHART
    function change_func() {
      let mylist = document.getElementById('myList');
      let index_ = mylist.options[mylist.selectedIndex].text;

      const data_1 = [];
      const labels_data_1 = [];
      const data_5 = [];
      const labels_data_5 = [];

      let max_num;

      if (index_ === 'Words with less than 0.4% frequency') {
        max_num = 0.4;
      } else {
        max_num = 1.4;
      }

      frequency.forEach(row => {
        data_1.push({ x: Number(row.male), y: Number(row.female) });
        labels_data_1.push(row.word);
      });

      frequency_1.forEach(row => {
        data_5.push({ x: Number(row.male), y: Number(row.female) });
        labels_data_5.push(row.word);
      });

      const fem_data = [
        { x: 0.019, y: 0.061 },
        { x: 0.676, y: 0.709 },
        // { x: 0.081, y: 0.11 },
        { x: 0.302, y: 0.317 },
        { x: 0.02, y: 0.032 },
        { x: 0.046, y: 0.057 },
        { x: 0.027, y: 0.036 },
        { x: 0.016, y: 0.026 },
        { x: 0.216, y: 0.225 },
        { x: 0.04, y: 0.048 },
        { x: 0.075, y: 0.083 },
      ];

      const fem_labels = [
        'sweet',
        'easy',
        // 'workload',
        'helpful',
        'social',
        'specific',
        'disorganized',
        'busy',
        'bad',
        'small',
        'worst',
      ];

      const male_data = [
        { x: 0.476, y: 0.405 },
        { x: 0.125, y: 0.065 },
        { x: 0.36, y: 0.325 },
        { x: 0.054, y: 0.03 },
        { x: 0.051, y: 0.036 },
        { x: 0.052, y: 0.039 },
        { x: 0.065, y: 0.052 },
        { x: 0.186, y: 0.174 },
        { x: 0.069, y: 0.058 },
        { x: 0.04, y: 0.03 },
        { x: 0.093, y: 0.073 },
        { x: 0.034, y: 0.019 },
        { x: 0.1, y: 0.09 },
        { x: 0.042, y: 0.033 },
      ];

      const male_labels = [
        'hard',
        'funny',
        'difficult',
        'old',
        'generous',
        'impossible',
        'useful',
        'fair',
        'tough',
        'useless',
        'harder',
        'smart',
        'easier',
        'basic',
      ];

      scatterChart.data = {
        datasets: [
          {
            label: 'Other words',
            data: data_1,
            labels: labels_data_1,
            pointRadius: 4,
            displayInLegend: true,
          },
          {
            label: 'Top male-skewed adjectives',
            borderColor: MALE_COLOR,
            backgroundColor: MALE_COLOR,
            data: male_data,
            labels: male_labels,
            pointRadius: 7,
            pointHoverRadius: 7,
            displayInLegend: true,
          },
          {
            label: 'Top female-skewed adjectives',
            borderColor: FEMALE_COLOR,
            backgroundColor: FEMALE_COLOR,
            data: fem_data,
            labels: fem_labels,
            pointRadius: 7,
            pointHoverRadius: 7,
            displayInLegend: true,
          },
          {
            data: [
              {
                x: 0,
                y: 0,
              },
              {
                x: 0.5,
                y: 0.5,
              },
              {
                x: 1.4,
                y: 1.4,
              },
            ],
            borderColor: 'grey',
            borderWidth: 1,
            // pointBackgroundColor: ['#000', '#00bcd6', '#d300d6'],
            // pointBorderColor: ['#000', '#00bcd6', '#d300d6'],
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: false,
            tension: 0,
            showLine: true,
            label: 'Line y = x',
            displayInLegend: false,
          },
        ],
      };
      scatterChart.options = {
        animation: false,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            color: null,
          },
        },
        legend: {
          reverse: true,
          display: true,
          labels: {
            fontSize: isMobile() ? 14 : font_size,
            filter: (legendItem, chartData) => {
              return chartData.datasets[legendItem.datasetIndex]
                .displayInLegend;
            },
          },
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Percent of words in female reviews',
                fontSize: font_size,
              },
              ticks: {
                min: 0,
                max: max_num,
              },
            },
          ],

          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Percent of words in male reviews',
                fontSize: font_size,
              },
              // if (cipher_char === from_char) {
              //    result = result + to_char;
              //    x++;
              //  } else {
              //    result = result + clear_char;
              //  }
              ticks: {
                min: 0,
                max: max_num,
              },
            },
          ],
        },

        tooltips: {
          titleFontSize: tooltip_font_size,
          bodyFontSize: tooltip_font_size,
          callbacks: {
            labelColor: function(tooltipItem, chart) {
              var color_dec = '';
              if (tooltipItem.xLabel > tooltipItem.yLabel) {
                return {
                  borderColor: MALE_COLOR,
                  backgroundColor: MALE_COLOR,
                };
              } else {
                return {
                  borderColor: FEMALE_COLOR,
                  backgroundColor: FEMALE_COLOR,
                };
              }
            },
            label: function(tooltipItem, data) {
              return data.datasets[tooltipItem.datasetIndex].labels[
                tooltipItem.index
              ];
            },
            afterBody: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem[0].datasetIndex];
              var index = tooltipItem.index;
              return [
                'Male frequency: ' + tooltipItem[0].xLabel + '%',
                'Female frequency: ' + tooltipItem[0].yLabel + '%',
              ];
            },
          },
        },
      };
      scatterChart.update();
    }
  });
});
