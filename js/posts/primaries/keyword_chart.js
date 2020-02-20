// Default Keyword Chart
// TODO: Update to most recent numbers (pulled directly using variables)
let keywordChart = new Chart(document.getElementById("keyword-chart"), {
    type: 'polarArea',
    data: {
      labels: ["Amy Klobuchar", "Bernie Sanders", "Donald Trump", 
               "Elizabeth Warren", "Joe Biden", "Michael Bloomberg", 
               "Pete Buttigieg"],
      datasets: [
        {
          backgroundColor: [color_code('amy-klobuchar', 0.9), 
                            color_code('bernie-sanders', 0.9),
                            color_code('donald-trump', 0.9), 
                            color_code('elizabeth-warren', 0.9),
                            color_code('joe-biden', 0.9), 
                            color_code('michael-bloomberg', 0.9),
                            color_code('pete-buttigieg', 0.9),
                        ],
          data: [81,133,7,207,51,100,59]
        }
      ]
    },
    options: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Frequency of Issue Discussed on Twitter'
      },
      scale: {
        //display: false,
      },
    }
});

  Chart.defaults.global.defaultFontFamily = 'Roboto';
  Chart.defaults.global.defaultFontSize = 15;
  Chart.defaults.global.defaultFontColor = '#777';
  keywordChart.canvas.parentNode.style.width = '700px'; 

// Update Keyword Chart on Button Click
function keyword_func(keyword) {
//TODO: Change to right label, Eg: mental-health should map to Mental Health
    keywordChart.data.datasets = [{
        backgroundColor: [color_code('amy-klobuchar', 0.9), 
        color_code('bernie-sanders', 0.9),
        color_code('donald-trump', 0.9), 
        color_code('elizabeth-warren', 0.9),
        color_code('joe-biden', 0.9), 
        color_code('michael-bloomberg', 0.9),
        color_code('pete-buttigieg', 0.9),
        ],
        data: [81,133,37,107,51,100,59] //TODO: (random data here): Update data according to keyword
                                        //Eg: function (_keyword_, bernie-sanders) = _data-val_ for all candidates 
    }];

    keywordChart.update();
}