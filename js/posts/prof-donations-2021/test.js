let ctx = document.getElementById('test');

var uclaBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'ActBlue',
      'Biden Victory Fund',
      'Biden for President',
      'DNC Services Corp / Democratic National Committee',
      'DCCC',
    ],
    datasets: [
      {
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: [441971.4, 201469.93, 199178.67, 113315.32, 52796.0],
      },
    ],
  },
  options: {},
});

// let ctxBerkeley = document.getElementById('uc-berkeley-chart');
// var uclatop5chart = new Chart(ctxBerkeley, {
//   data: {
//     x: 'x',
//     columns: [
//       [
//         'x',
//         'ActBlue',
//         'Biden Victory Fund',
//         'Biden For President',
//         'DNC Services Corp / Democratic National Committee',
//         'DCCC',
//       ],
//       ['Total Donations', 441971.4, 201469.93, 199178.67, 113315.32, 52796.00],
//     ],
//     type: 'bar',
//     color: function(color, d) {
//       // d will be 'id' when called for legends
//       return d.index == 2 ? '#104E8B' : '#87CEFA';
//     },
//     legend: {
//       position: 'right',
//     },
//   },
//   bar: {
//     width: {
//       ratio: 0.5, // this makes bar width 50% of length between ticks
//     },
//     // or
//     //width: 100 // this makes bar width 100px
//   },

//   size: {
//     height: 400,
//   },
//   axis: {
//     x: {
//       type: 'category',
//       tick: {
//         rotate: 0,
//         multiline: true,
//       },
//       height: 60,
//     },
//     rotated: false,
//   },
//   bindto: '#ucla-donations-chart',
// });

// var usc_top5_chart = c3.generate({
//   data: {
//     x: 'x',
//     columns: [
//       [
//         'x',
//         'ActBlue',
//         'Biden for President',
//         'DCCC',
//         'Biden Victory Fund',
//         'DSCC',
//       ],
//       ['Total Donations', 416044.09, 143908.88, 127033.00, 58636.77, 47079.17],
//     ],
//     type: 'bar',
//     color: function(color, d) {
//       // d will be 'id' when called for legends
//       return d.index == 2 ? '#104E8B' : '#87CEFA';
//     },
//     legend: {
//       position: 'right',
//     },
//   },
//   bar: {
//     width: {
//       ratio: 0.5, // this makes bar width 50% of length between ticks
//     },
//     // or
//     //width: 100 // this makes bar width 100px
//   },

//   size: {
//     height: 400,
//   },
//   axis: {
//     x: {
//       type: 'category',
//       tick: {
//         rotate: 0,
//         multiline: true,
//       },
//       height: 60,
//     },
//     rotated: false,
//   },
//   bindto: '#usc-donations-chart',
// });

// // fix y - axis max to 45000 for each graph for consistency
// // change colors
// // add titles
// // label x - axis
// // try to remove total donations label from x axis

// var ucb_top5_chart = c3.generate({
//   data: {
//     x: 'x',
//     columns: [
//       [
//         'x',
//         'ActBlue',
//         'Biden for President',
//         'Biden Victory Fund',
//         'DNC Services Corp / Democratic National Committee',
//         'Black PAC',
//       ],
//       ['Total Donations', 253892.0, 169078.98, 102776.16, 66496.79, 50000],
//     ],
//     type: 'bar',
//     color: function(color, d) {
//       // d will be 'id' when called for legends
//       return d.index == 2 ? '#104E8B' : '#87CEFA';
//     },
//     legend: {
//       position: 'right',
//     },
//   },
//   bar: {
//     width: {
//       ratio: 0.5, // this makes bar width 50% of length between ticks
//     },
//     // or
//     //width: 100 // this makes bar width 100px
//   },

//   size: {
//     height: 400,
//   },
//   axis: {
//     x: {
//       type: 'category',
//       tick: {
//         rotate: 0,
//         multiline: true,
//       },
//       height: 60,
//     },
//     rotated: false,
//   },
//   bindto: '#ucb-donations-chart',
// });
