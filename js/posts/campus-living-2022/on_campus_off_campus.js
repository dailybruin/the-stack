// const ctx = document.getElementById('campusData');
// const campusData = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['2000-2003', '2004', '2005', '2006-2009', '2010', '2011', '2012', 
//         '2013', '2014-2015', '2017-2022'],
//         datasets: [{
//             label: '% of students living on campus',
//             data: [30, 35, 38, 40, 39, 36, 48, 35, 43, 48],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// const ctx = document.getElementById('campusData');
// const campusData = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         labels: ['On Campus', 'Off Campus'],
//         datasets: [{
//             label: '% of Transfers Living On Campus, 2020-2012',
//             data: [56, 44],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)'
//               ],
//               hoverOffset: 4
//             }]
//      },
//     });
const ctx = document.getElementById('campusData');
const campusData = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011',
    '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '% of All Students On Campus',
            data: [40, 40, 40, 39, 36, 48, 35, 39, 43, 45, 47, 48, 48, 48, 48],
            //borderColor: 'rgb(54, 162, 235)',
            backgroundColor: '#00498D'
        }],
    },
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return `${tooltipItem.label}: ${tooltipItem.formattedValue}%`
                    },
                },
            },
        scales: {
          y: {
            beginAtZero: true
          }
        }
    }
    }
});
    const studentType = document.getElementById('studentType');
    studentType.addEventListener('change', selectChart)
    function selectChart() {
        campusData.data.datasets[0].label = studentType.options[studentType.selectedIndex].text;
        campusData.data.datasets[0].data = studentType.value.split(',');
        campusData.update();
    }
// // const firstYear = new Chart(ctx, {
// //     type: 'bar', 
// //     data: {
// //         labels: ['2006', '2007', '2008', '2009', '2010', '2011',
// //     '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
// //         datasets: [{
// //             type: 'bar',
// //             label: '% of first-years living on campus',
// //             data: [94, 94, 94, 93, 94, 94, 94, 95, 96, 98, 97, 98, 98, 98, 98],
// //             borderColor: 'rgb(54, 162, 235)',
// //             backgroundColor: 'rgb(54, 162, 235)'
// //         }],
// //     },
// //     options: {
// //         scales: {
// //             y: {
// //                 beginAtZero: true
// //             }
// //         }
// //     }
// // });
// const transfers = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['2006', '2007', '2008', '2009', '2010', '2011',
//         '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
//         datasets: [{
//             type: 'bar',
//             label: '% of transfers living on campus',
//             data: [39, 39, 38, 34, 34, 34, 34, 39, 47, 51, 53, 51, 54, 56, 56],
//             borderColor: 'rgb(34, 139, 34)',
//             backgroundColor: 'rgb(34, 139, 34)'
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// })
// function changeChart() {
//     var chartSelection = document.getElementById("dd").value;
//     document.getElementById('campusData') = chartSelection;
// }


    



// const ctx = document.getElementById('campusData');
// const campusData = new Chart(ctx, {
//     type: 'scatter', 
//     data: {
//         labels: ['2006', '2007', '2008', '2009', '2010', '2011',
//     '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
//         datasets: [{
//             type: 'bar',
//             label: '% of students living on campus',
//             data: [40, 40, 40, 39, 36, 48, 35, 39, 43, 45, 47, 48, 48, 48, 48],
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.2)'
//         }
