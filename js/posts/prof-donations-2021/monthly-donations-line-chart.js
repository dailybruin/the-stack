var linechart;

d3.csv('/datasets/professor-donations/monthly_donations.csv').then(function(
  donations
) {
  makeChart(donations);
});

function makeChart(donations) {
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
      context.strokeStyle = '#888888';
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

  let data = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Monthly Donations',
        borderColor: '#C433FF',
        backgroundColor: '#CD8EE7',
      },
    ],
  };
  donations.forEach(month => {
    data.labels.push(month.date);
    data.datasets[0].data.push(Number(month.contribution_receipt_amount));
  });

  let options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Monthly Political Donations',
          },
          ticks: {
            callback: function(value) {
              return value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
              });
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
      text: 'Monthly political donations from UCLA professors',
      fontSize: 16,
    },
    tooltips: {
      intersect: false,
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

  let ctx = document.getElementById('timeline-chart');
  linechart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
    lineAtIndex: [
      { index: 10, text: ['2016', 'Presidential', 'Election'] },
      { index: 58, text: ['2020', 'Presidential', 'Election'] },
      { index: 34, text: ['2018', 'Midterm', 'Elections'] },
    ],
  });

  if (window.matchMedia('(max-width: 480px)').matches) {
    linechart.canvas.style = 'max-height:400px';
    linechart.options.maintainAspectRatio = false;
    //console.log(linechart);

    linechart.update();
  }
}
