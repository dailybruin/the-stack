const UCEAPdata = {
  label: 'UCEAP Destinations',
  data: [
      [85, 149, 170, 211, 293, 351, 387, 309, 298, 304, 64, 149, 148],
      [42, 48, 41, 37, 60, 57, 99, 69, 71, 69, 56, 76, 69],
      [49, 45, 31, 39, 65, 83, 78, 87, 123, 126, 59, 88, 75],
      [60, 49, 54, 68, 95, 115, 113, 72, 100, 116, 58, 107, 107],
      [52, 56, 31, 31, 34, 56, 51, 67, 67, 71, 26, 105, 89]
  ]
};

const TSdata = {
  label: 'Travel Study Destinations',
  data: [
      [199, 144, 164, 122, 136, 134, 143, 103, 107, 98, 0, 0, 0],
      [289, 174, 224, 210, 184, 212, 230, 218, 197, 179, 0, 0, 129],
      [91, 109, 124, 117, 105, 0, 105, 106, 106, 135, 0, 0, 153],
      [153, 64, 66, 90, 63, 89, 96, 60, 94, 74, 0, 0, 0],
      [122, 64, 66, 62, 63, 65, 70, 60, 68, 74, 0, 0, 24]
  ]
};

const UCEAPlabels = ['United Kingdom', 'France', 'Spain', 'Italy', 'South Korea']
const TSlabels = ['United Kingdom', 'France', 'Spain', 'Belgium', 'Netherlands']

const UCEAPcolors = ['rgb(64, 36, 131)', 'rgb(188, 210, 88)', 'rgb(248, 212, 93)', 'rgb(121, 161, 228)', 'rgb(222, 131, 99)']
const TScolors = ['rgb(64, 36, 131)', 'rgb(188, 210, 88)', 'rgb(248, 212, 93)', 'rgb(157, 78, 221)', 'rgb(188, 71, 73)']

const chartConfig = {
  type: 'line',
  data: {
      labels: ['2009-10', '2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22'],
      datasets: [
          {
              label: UCEAPlabels[0],
              borderColor: UCEAPcolors[0],
              backgroundColor: UCEAPcolors[0],
              data: UCEAPdata.data[0]
          },
          {
              label: UCEAPlabels[1],
              borderColor: UCEAPcolors[1],
              backgroundColor: UCEAPcolors[1],
              data: UCEAPdata.data[1]
          },
          {
              label: UCEAPlabels[2],
              borderColor: UCEAPcolors[2],
              backgroundColor: UCEAPcolors[2],
              data: UCEAPdata.data[2]
          },
          {
              label: UCEAPlabels[3],
              borderColor: UCEAPcolors[3],
              backgroundColor: UCEAPcolors[3],
              data: UCEAPdata.data[3]
          },
          {
              label: UCEAPlabels[4],
              borderColor: UCEAPcolors[4],
              backgroundColor: UCEAPcolors[4],
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
  const newColors = selectedDataset === 'UCEAPdata' ? UCEAPcolors : TScolors;

  chart.data.datasets[0].data = newDataset.data[0];
  chart.data.datasets[1].data = newDataset.data[1];
  chart.data.datasets[2].data = newDataset.data[2];
  chart.data.datasets[3].data = newDataset.data[3];
  chart.data.datasets[4].data = newDataset.data[4];

  chart.data.datasets[0].label = newLabels[0];
  chart.data.datasets[1].label = newLabels[1];
  chart.data.datasets[2].label = newLabels[2];
  chart.data.datasets[3].label = newLabels[3];
  chart.data.datasets[4].label = newLabels[4];

  chart.data.datasets[0].borderColor = newColors[0];
  chart.data.datasets[1].borderColor = newColors[1];
  chart.data.datasets[2].borderColor = newColors[2];
  chart.data.datasets[3].borderColor = newColors[3];
  chart.data.datasets[4].borderColor = newColors[4];

  chart.data.datasets[0].backgroundColor = newColors[0];
  chart.data.datasets[1].backgroundColor = newColors[1];
  chart.data.datasets[2].backgroundColor = newColors[2];
  chart.data.datasets[3].backgroundColor = newColors[3];
  chart.data.datasets[4].backgroundColor = newColors[4];
  
  chart.update();
}

// should I make each country have its own color?
// should I make both datasets have the same y-max?