// Default: Shows everything stacked
let keywordChart = new Chart(document.getElementById("keyword-chart"), {
  type: 'horizontalBar',
  data: {
      labels: ["Amy Klobuchar", "Bernie Sanders", "Donald Trump", 
               "Elizabeth Warren", "Joe Biden",  
               "Pete Buttigieg"],
    datasets: [
      {
        label: "College",
        backgroundColor: [color_code('amy-klobuchar', 0.9), 
                            color_code('bernie-sanders', 0.9),
                            color_code('donald-trump', 0.9), 
                            color_code('elizabeth-warren', 0.9),
                            color_code('joe-biden', 0.9), 
                            color_code('pete-buttigieg', 0.9),
                        ],
        data: [81,133,7,207,51,59] 
      }]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Frequency of Issue Discussed on Twitter'
    },
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
          min: 0,
          max: 250, 
        }
      }],
      yAxes: [{
        stacked: true,
      }]
    }
  }
});

Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#777';
keywordChart.canvas.parentNode.style.width = '700px';

// Update Keyword Chart on Button Click
function keyword_func(keyword) {
    keywordChart.data.datasets = [{
        label: keyword.toString() + " related mentions", 
        backgroundColor: [color_code('amy-klobuchar', 0.9), 
        color_code('bernie-sanders', 0.9),
        color_code('donald-trump', 0.9), 
        color_code('elizabeth-warren', 0.9),
        color_code('joe-biden', 0.9), 
        color_code('pete-buttigieg', 0.9),
        ],
        data: get_data_from_keyword(keyword)
                                        
    }];

    keywordChart.update();
}

//return the correct array
function get_data_from_keyword(keyword) {
  if (keyword.localeCompare("college") === 0) {
    return [81, 133, 7, 207, 51, 59];
  }
  if (keyword.localeCompare("immigration") === 0) {
    return [19, 20, 3, 12, 17, 10];
  }
  if (keyword.localeCompare("mental-health") === 0) {
    return [8, 4, 0, 2, 0, 1];
  }
  if (keyword.localeCompare("discrimination-and-equality") === 0) {
    return [46, 42, 8, 65, 36, 22];
  }
  if (keyword.localeCompare("healthcare") === 0) {
    return [6, 102, 4, 3, 45, 3];
  }
  if (keyword.localeCompare("environment") === 0) {
    return [32, 72, 1, 54, 66, 13];
  }
  if (keyword.localeCompare("women-health") === 0) {
    return [29, 18, 2, 51, 18, 17];
  }
  if (keyword.localeCompare("marijuana") === 0) {
    return [0, 6, 0, 10, 2, 0];
  }
  if (keyword.localeCompare("gun-rights") === 0) {
    return [24, 5, 2, 10, 37, 8];
  }
}

function show_all() {
  keywordChart.data.datasets = [
    {
      label: "College",
      backgroundColor: [color_code('amy-klobuchar', 0.9), 
                          color_code('bernie-sanders', 0.9),
                          color_code('donald-trump', 0.9), 
                          color_code('elizabeth-warren', 0.9),
                          color_code('joe-biden', 0.9), 
                          color_code('pete-buttigieg', 0.9),
                      ],
      data: [81,133,7,207,51,59] //TODO: Enter college data in order of candidates
    },
    {
      label: "Immigration",
        backgroundColor: [color_code('amy-klobuchar', 0.8), 
                          color_code('bernie-sanders', 0.8),
                          color_code('donald-trump', 0.8), 
                          color_code('elizabeth-warren', 0.8),
                          color_code('joe-biden', 0.8), 
                          color_code('pete-buttigieg', 0.8),
                      ],
      data: [41,33,27,27,41,29], //TODO: Enter required data in order of candidates
    },
    {
      label: "Mental Health",
        backgroundColor: [color_code('amy-klobuchar', 0.7), 
                          color_code('bernie-sanders', 0.7),
                          color_code('donald-trump', 0.7), 
                          color_code('elizabeth-warren', 0.7),
                          color_code('joe-biden', 0.7), 
                          color_code('pete-buttigieg', 0.7),
                      ],
      data: [81,133,7,207,51,59], //TODO: Enter required data in order of candidates
    },
    {
      label: "Discrimination & Equality",
        backgroundColor: [color_code('amy-klobuchar', 0.6), 
                          color_code('bernie-sanders', 0.6),
                          color_code('donald-trump', 0.6), 
                          color_code('elizabeth-warren', 0.6),
                          color_code('joe-biden', 0.6), 
                          color_code('pete-buttigieg', 0.6),
                      ],
        data: [81,133,7,207,51,59], //TODO: Enter required data in order of candidates
    },
    {
      label: "Healthcare",
      backgroundColor: [color_code('amy-klobuchar', 0.5), 
                          color_code('bernie-sanders', 0.5),
                          color_code('donald-trump', 0.5), 
                          color_code('elizabeth-warren', 0.5),
                          color_code('joe-biden', 0.5), 
                          color_code('pete-buttigieg', 0.5),
                      ],
      data: [81,133,7,207,51,59], //TODO: Enter required data in order of candidates
    },
    {
      label: "Environment",
      backgroundColor: [color_code('amy-klobuchar', 0.4), 
                          color_code('bernie-sanders', 0.4),
                          color_code('donald-trump', 0.4), 
                          color_code('elizabeth-warren', 0.4),
                          color_code('joe-biden', 0.4), 
                          color_code('pete-buttigieg', 0.4),
                      ],
      data: [81,133,7,207,51,59], //TODO: Enter required data in order of candidates
    },
    {
      label: "Women",
      backgroundColor: [color_code('amy-klobuchar', 0.3), 
                          color_code('bernie-sanders', 0.3),
                          color_code('donald-trump', 0.3), 
                          color_code('elizabeth-warren', 0.3),
                          color_code('joe-biden', 0.3), 
                          color_code('pete-buttigieg', 0.3),
                      ],
      data: [81,133,7,207,51,59], //TODO: Enter required data in order of candidates
    },
    {
      label: "Weed",
      backgroundColor: [color_code('amy-klobuchar', 0.2), 
                          color_code('bernie-sanders', 0.2),
                          color_code('donald-trump', 0.2), 
                          color_code('elizabeth-warren', 0.2),
                          color_code('joe-biden', 0.2), 
                          color_code('pete-buttigieg', 0.2),
                      ],
      data: [81,133,7,207,51,59], //TODO: Enter required data in order of candidates 
    },
    {
      label: "Gun Rights",
      backgroundColor: [color_code('amy-klobuchar', 0.1), 
                          color_code('bernie-sanders', 0.1),
                          color_code('donald-trump', 0.1), 
                          color_code('elizabeth-warren', 0.1),
                          color_code('joe-biden', 0.1), 
                          color_code('pete-buttigieg', 0.1),
                      ],
      data: [81,133,7,207,51,59], //TODO: Enter required data in order of candidates
    },
  ];

  keywordChart.update();
}

//POLAR AREA CHART
// // Default Keyword Chart
// // TODO: Update to most recent numbers (pulled directly using variables)
// let keywordChart = new Chart(document.getElementById("keyword-chart"), {
//     type: 'polarArea',
//     data: {
//       labels: ["Amy Klobuchar", "Bernie Sanders", "Donald Trump", 
//                "Elizabeth Warren", "Joe Biden", "Michael Bloomberg", 
//                "Pete Buttigieg"],
//       datasets: [
//         {
//           label: "frequency",
//           backgroundColor: [color_code('amy-klobuchar', 0.9), 
//                             color_code('bernie-sanders', 0.9),
//                             color_code('donald-trump', 0.9), 
//                             color_code('elizabeth-warren', 0.9),
//                             color_code('joe-biden', 0.9), 
//                             color_code('michael-bloomberg', 0.9),
//                             color_code('pete-buttigieg', 0.9),
//                         ],
//           data: [81,133,7,207,51,100,59]
//         }
//       ]
//     },
//     options: {
//       legend: {
//         display: false,
//       },
//       title: {
//         display: true,
//         text: 'Frequency of Issue Discussed on Twitter'
//       },
//       scale: {
//         //display: false,
//       },
//     }
// });

//   Chart.defaults.global.defaultFontFamily = 'Roboto';
//   Chart.defaults.global.defaultFontSize = 15;
//   Chart.defaults.global.defaultFontColor = '#777';
//   keywordChart.canvas.parentNode.style.width = '700px'; 

// // Update Keyword Chart on Button Click
// function keyword_func(keyword) {
// //TODO: Change to right label, Eg: mental-health should map to Mental Health
//     keywordChart.data.datasets = [{
//         backgroundColor: [color_code('amy-klobuchar', 0.9), 
//         color_code('bernie-sanders', 0.9),
//         color_code('donald-trump', 0.9), 
//         color_code('elizabeth-warren', 0.9),
//         color_code('joe-biden', 0.9), 
//         color_code('michael-bloomberg', 0.9),
//         color_code('pete-buttigieg', 0.9),
//         ],
//         data: [81,133,37,107,51,100,59] //TODO: (random data here): Update data according to keyword
//                                         //Eg: function (_keyword_, bernie-sanders) = _data-val_ for all candidates 
//     }];

//     keywordChart.update();
// }