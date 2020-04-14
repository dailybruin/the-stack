var time_labels = ['6 months','12 months','18 months'];
var color_codes = {
  'ugrad': '#3e95cd',
  'grad': '#8e5ea2'
}; //TODO: Or pick better colors?

let lineChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      datasets: [{ 
          data: [86,114,106], //dummy numbers
          label: "Undergraduate Students",
          borderColor: color_codes['ugrad'],
          fill: false
        }, { 
          data: [282,350,411], //dummy numbers
          label: "Graduate Students",
          borderColor: color_codes['grad'],
          fill: false
        },
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Level of Expected Hospital Usage by UCLA Student Population' //TODO: or better naming
      },
      scales: {
        xAxes: [{ 
          type: 'category',
          labels: time_labels,
            scaleLabel: {
            display: false,
            labelString: "Time into the future" //TODO: or better naming
            },
          display: true,
        }]
      }
    }
  });

Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#777';
lineChart.canvas.parentNode.style.width = '900px';

// Total Hospital Beds: 19,492
// Total ICU Beds: 2415
// Available Hospital Beds: 6594
// Potentially Available Hospital Beds: 13043
// Available ICU Beds: 942
// Potentially Available ICU Beds: 1679

// Adult Population: 45,742 (all UCLA students) (LA: 7,874,162)
// Projected Infected Individuals: (20, 40, 60 or slider)
// Projected Hospitalized Total(20.529945891%):
// Projected Needing ICU Care Total (infer):
// Projected 6 months (1.368653% of infected):
// Projected 12 months (0.684327% of infected):
// Projected 18 months (0.44631206242% of infected):