let line_chart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{ 
          data: [86,114,106,106,107,111,133,221,783,2478],
          label: "Retweets",
          borderColor: "#3e95cd",
          fill: false
        }, { 
            data: [282,350,411,502,635,809,947,1402,3700,5267],
            label: "Favorites",
            borderColor: "#8e5ea2",
            fill: false
          }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Average retweets and likes per month'
      }
    }
  });

Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#777';
line_chart.canvas.parentNode.style.width = '700px';