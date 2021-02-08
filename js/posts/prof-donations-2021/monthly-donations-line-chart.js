d3.csv('/datasets/professor-donations/monthly_donations.csv', donations =>
  makeChart(donations)
);

function makeChart(donations) {
  console.log(donations);

  const verticalLinePlugin = {
    getLinePosition: function(chart, pointIndex) {
      const meta = chart.getDatasetMeta(0); // first dataset is used to discover X coordinate of a point
      const data = meta.data;
      return data[pointIndex]._model.x;
    },
    renderVerticalLine: function(chartInstance, pointIndex) {
      const lineLeftOffset = this.getLinePosition(chartInstance, pointIndex);
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
      context.fillText(
        'Presidential Election',
        lineLeftOffset,
        (scale.bottom - scale.top) / 2
      );
    },

    afterDatasetsDraw: function(chart, easing) {
      if (chart.config.lineAtIndex) {
        chart.config.lineAtIndex.forEach(pointIndex =>
          this.renderVerticalLine(chart, pointIndex)
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
            labelString: 'Total Donations',
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
    },
    title: {
      display: true,
      text: 'Total donations by UCLA professors per month',
      fontSize: 16,
    },
    tooltips: {
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
  var linechart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
    lineAtIndex: [10, 58],
  });
}
