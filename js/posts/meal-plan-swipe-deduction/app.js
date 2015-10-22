d3.csv('/datasets/meal-plan-swipe-deduction/number-deducted.csv', function(data){
  var maxValue = 0;
  var freqAccum = [];
  data.forEach(function(datum){
    var deducted = parseInt(datum.deducted);
    if (deducted > maxValue)
      maxValue = deducted;
  });
  for (var i = 0; i <= maxValue; i++) {
    freqAccum.push(0);
  }
  data.forEach(function(datum){
    freqAccum[datum.deducted]++;
  });

  freqAccum.unshift('deducted');

  console.log(freqAccum);

  var distributionChart = c3.generate({
    bindto: '#distribution-chart',
    data: {
      columns: [freqAccum],
      type: 'bar',
      colors: {
        deducted: '#E82C0C',
      },
      names: {
        deducted: 'Deducted'
      },
      labels: true
    },
    axis: {
      x: {
        max: 47,
        tick: {
          culling: window.innerWidth < 960, // only display every x axis label if the window is sufficiently wide
        },
        label: {
          text: 'Swipes deducted',
          position: 'outer-center',
        }
      },
      y: {
        label: {
          text: 'Number of respondents',
          position: 'outer-middle',
        }
      }
    },
    bar: {
      width: {
        ratio: 1.5
      }
    },
    legend: {
      show: false
    },
    interaction: {
      enabled: false
    }
  });

})
