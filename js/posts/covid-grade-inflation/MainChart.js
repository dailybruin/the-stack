// Load and munge data, then make the visualization.
let precovidFileName =
  '../../../../datasets/covid-grade-inflation/Fall_data.csv';

let dropdownValue = 'All Classes';

let choice = 'A&O SCI 1 - BIANCHI, D.';
loadCSVData(choice);

d3
  .csv('/datasets/covid-grade-inflation/LGFALL19ZERO.csv', function (d) {
    return { CLASS: d.CLASS };
  })
  .then(function (data) {
    initDropdown(data);
  });

function initDropdown(classNames) {
  d3
    .select('#dropdown-menu')
    .on('change', function () {
      dropdownValue = d3.select(this).property('value');
      let choice = $('#dropdown-menu option:selected').text();
      loadCSVData(choice)
    })
    .selectAll('option')
    .data(classNames)
    .enter()
    .append('option')
    .attr('value', function (d) {
      return d.CLASS;
    })
    .text(function (d) {
      return d.CLASS;
    });
}

console.log(choice);

const labels = [
  'A+',
  'A',
  'A-',
  'B+',
  'B',
  'B-',
  'C+',
  'C',
  'C-',
  'D+',
  'D',
  'D-',
  'F',
];

function loadCSVData(choice) {
  //return new Promise(resolve => {
  d3.csv(precovidFileName)
    .then(function (csv) {
      csv = csv.filter(function (row) {
        return row['CLASS'] == choice;
      });
      let precovidData = [csv[0]["A+_x"], csv[0]["A_x"], csv[0]["A-_x"], csv[0]["B+_x"], csv[0]["B_x"], csv[0]["B-_x"], csv[0]["C+_x"], csv[0]["C_x"], csv[0]["C-_x"], csv[0]["D+_x"], csv[0]["D_x"], csv[0]["D-_x"], csv[0]["F_x"]];
      let postcovidData = [csv[0]["A+_y"], csv[0]["A_y"], csv[0]["A-_y"], csv[0]["B+_y"], csv[0]["B_y"], csv[0]["B-_y"], csv[0]["C+_y"], csv[0]["C_y"], csv[0]["C-_y"], csv[0]["D+_y"], csv[0]["D_y"], csv[0]["D-_y"], csv[0]["F_y"]];
      console.log(precovidData)
      console.log(postcovidData)
      // return precovidData;
      //resolve(csv);
      const Chartdata = {
        labels: labels,
        datasets: [
          {
            label: 'Grades During Online Learning',
            data: precovidData,
            backgroundColor: [
              'purple',
              'purple',
              'purple',
              'purple',
              'purple',
              'purple',
              'purple',
              'purple',
              'purple',
              'purple',
              'purple',
              'purple',
              'purple',
            ],
            // borderColor: [
            //     'purple',
            // ],
            borderWidth: 1,
            index: 1,
          },
          {
            label: 'Grades During On-Campus Learning',
            data: postcovidData,
            backgroundColor: [
              'teal',
              'teal',
              'teal',
              'teal',
              'teal',
              'teal',
              'teal',
              'teal',
              'teal',
              'teal',
              'teal',
              'teal',
              'teal',
            ],
            index: 2,
          },
        ],
      };

      var ctxMain = document.getElementById('main-chart').getContext('2d');
      var MainChart = new Chart(ctxMain, {
        type: 'bar',
        data: Chartdata,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          animation: false,
        },
      });
    })
}
