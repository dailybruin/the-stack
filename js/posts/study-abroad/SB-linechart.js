const UCEAPdata = {
  label: 'UCEAP Destinations',
  borderColor: 'rgb(255, 99, 132)',
  data: [
      [85, 149, 170, 211, 293, 351, 387, 309, 298, 304, 64, 149, 148],
      [60, 49, 54, 68, 95, 115, 113, 72, 100, 116, 58, 107, 107],
      [49, 45, 31, 39, 65, 83, 78, 87, 123, 126, 59, 88, 75],
      [42, 48, 41, 37, 60, 57, 99, 69, 71, 69, 56, 76, 69],
      [52, 56, 31, 31, 34, 56, 51, 67, 67, 71, 26, 105, 89]
  ]
};

const TSdata = {
  label: 'Travel Study Destinations',
  borderColor: 'rgb(54, 162, 235)',
  data: [
      [289, 174, 224, 210, 184, 212, 230, 218, 197, 179, 0, 0, 129],
      [199, 144, 164, 122, 136, 134, 143, 103, 107, 98, 0, 0, 0],
      [91, 109, 124, 117, 105, 0, 105, 106, 106, 135, 0, 0, 153],
      [153, 64, 66, 90, 63, 89, 96, 60, 94, 74, 0, 0, 0],
      [122, 64, 66, 62, 63, 65, 70, 60, 68, 74, 0, 0, 24]
  ]
};

const UCEAPlabels = ['United Kingdom', 'Italy', 'Spain', 'France', 'South Korea']
const TSlabels = ['France', 'United Kingdom', 'Spain', 'Belgium', 'Netherlands']

const chartConfig = {
  type: 'line',
  data: {
      labels: ['2009-10', '2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22'],
      datasets: [
          {
              label: UCEAPlabels[0],
              borderColor: 'rgb(64, 36, 131)',
              backgroundColor: 'rgb(64, 36, 131)',
              data: UCEAPdata.data[0]
          },
          {
              label: UCEAPlabels[1],
              borderColor: 'rgb(121, 161, 228)',
              backgroundColor: 'rgb(121, 161, 228)',
              data: UCEAPdata.data[1]
          },
          {
              label: UCEAPlabels[2],
              borderColor: 'rgb(188, 210, 88)',
              backgroundColor: 'rgb(188, 210, 88)',
              data: UCEAPdata.data[2]
          },
          {
              label: UCEAPlabels[3],
              borderColor: 'rgb(248, 212, 93)',
              backgroundColor: 'rgb(248, 212, 93)',
              data: UCEAPdata.data[3]
          },
          {
              label: UCEAPlabels[4],
              borderColor: 'rgb(222, 131, 99)',
              backgroundColor: 'rgb(222, 131, 99)',
              data: UCEAPdata.data[4]
          }
      ]
  },
  options: {
      responsive: true,
      plugins: {
          title: {
              display: true,
              text: 'Top UCEAP and Travel Study Destinations',
              legend: {
                  display: true,
                  font: {
                      size: 22
                  }
              }
          }
      },
      scales: {
          x: {
              title: {
                  display: true,
                  text: 'Year'
              }
          },
          y: {
              title: {
                  display: true,
                  text: 'Number of Students'
              }
          }
      }
  }
};

const chartCanvas = document.getElementById('chart');
const chart = new Chart(chartCanvas, chartConfig);

function updateChart() {
  const selectedDataset = document.getElementById('dataset-select').value;
  const newDataset = selectedDataset === 'UCEAPdata' ? UCEAPdata : TSdata;
  const newLabels = selectedDataset === 'UCEAPdata' ? UCEAPlabels : TSlabels;
  chart.data.datasets[0].data = newDataset.data[0];
  chart.data.datasets[1].data = newDataset.data[1];
  chart.data.datasets[0].label = newLabels[0];
  chart.data.datasets[1].label = newLabels[1];
  chart.update();
}

// should I make each country have its own color?
// should I make both datasets have the same y-max?