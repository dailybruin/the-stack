var linechart;

d3
  .csv('/datasets/student-demographics-hsis/graduationrates2.csv')
  .then(function(gap) {
    makeChart(gap);
  });
//KEEP
function makeChart(gap) {
  const verticalLinePlugin = {
    getLinePosition: function(chart, line) {
      const meta = chart.getDatasetMeta(0); // first dataset is used to discover X coordinate of a point
      const data = meta.data;
      return data[line.index]._model.x;
    },
    renderVerticalLine: function(chartInstance, line) {
      const lineLeftOffset = this.getLinePosition(chartInstance, line);
      const scale = chartInstance.scales['y-axis-0'];
      const context = chartInstance.chart.ctx;

      // render vertical line
      context.beginPath();
      context.setLineDash([5, 5]);
      //context.strokeStyle;
      context.moveTo(lineLeftOffset, scale.top);
      context.lineTo(lineLeftOffset, scale.bottom);
      context.stroke();

      // write label
      context.fillStyle = '#888888';
      context.textAlign = 'center';
      context.font = 'bold 11px sans-serif';
      let y = scale.top + 20;
      let increment = 15;
      if (window.matchMedia('(max-width: 480px)').matches) {
        y -= 10;
      }
      context.fillText(line.text[0], lineLeftOffset, y);
      context.fillText(line.text[1], lineLeftOffset, y + increment);
      context.fillText(line.text[2], lineLeftOffset, y + 2 * increment);
    },

    afterDatasetsDraw: function(chart, easing) {
      if (chart.config.lineAtIndex) {
        chart.config.lineAtIndex.forEach(line =>
          this.renderVerticalLine(chart, line)
        );
      }
    },
  };

  Chart.plugins.register(verticalLinePlugin);
  //TO HERE

  let data = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'UCLA',
        fill: false,
        lineTension: 0,
        borderColor: '#3284BF',
        backgroundColor: '#3284BF',
      },
    ],
  };
  for (let i = 0; i < 3; i++) {
    data.datasets.push({
      label: gap[i].Category,
      data: Object.values(gap[i]),
      backgroundColor: colors[i + 3],
      borderColor: colors[i + 3],
    });
  }
  gap.forEach(month => {
    data.labels.push(month.ucla);
    data.datasets[3].data.push(Number(month.ucla));
  });

  let options = {
    legend: {
      display: true,
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString:
              'Difference between White and Hispanic Graduation Rate',
          },
          ticks: {
            callback: function(value) {
              return value + '%'; // convert it to percentage
            },
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            maxRotation: 0,
          },
        },
      ],
    },
    title: {
      display: true,
      text: 'The Gap Between White and Hispanice Graduation Rates',
      fontSize: 16,
    },
    tooltips: {
      intersect: true,
      displayColors: false,
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.yLabel.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
          });
        },
      },
    },
    annotation: {
      annotations: [
        {
          drawTime: 'afterDatasetsDraw',
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 3.8,
          borderWidth: 5,
          borderColor: 'red',
          label: {
            content: 'TODAY',
            enabled: true,
            position: 'top',
          },
        },
      ],
    },
  };

  let ctx = document.getElementById('nno');
  linechart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
    lineAtIndex: [
      { index: 1, text: ['2012', 'UCSC becomes', 'a HSI'] },
      { index: 4, text: ['2015', 'UCSB becomes', 'a HSI'] },
      { index: 6, text: ['2017', 'UCI becomes', 'a HSI'] },
    ],
  });

  if (window.matchMedia('(max-width: 480px)').matches) {
    linechart.canvas.style = 'max-height:400px';
    linechart.options.maintainAspectRatio = false;
    //console.log(linechart);

    linechart.update();
  }
}
