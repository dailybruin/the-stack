let bar_chart = new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      datasets: [{ 
          data: [15,16,13,19,5,7,16,19,11,10,2],
          label: "New Business",
          backgroundColor: "#57E964",
          
          
        }, { 
            data: [6,4,6,1,4,7,4,4,3,1,0],
            label: "Closed Business",
            backgroundColor:"#F75D59",
          }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'How many business opened/closed in each month of 2020?'
      }
    }
  });

Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#777';
