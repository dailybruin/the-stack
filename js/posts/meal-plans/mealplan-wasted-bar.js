document.addEventListener('DOMContentLoaded', function() {
    // Chart.defaults.font.family = 'Noto Serif, serif'; //FONT FOR CHART CHANGE IF NEEDED
    Chart.defaults.font.size = 15;
    Chart.defaults.font.family = 'PT Sans';
    Chart.defaults.color = '#000';
    const data = {
      //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
      datasets: [
        {
          data: [
            { x: ' 19P ', y: 569.57 },
            { x: ' 19R ', y: 242.87 },
            { x: ' 14P ', y: 429.81 },
            { x: ' 14R ', y: 230.80 },
            { x: ' 11P ', y: 588.55 },
            { x: ' 11R  ', y: 162.90 },
          ], //VALUE FOR EACH BAR
          backgroundColor: '#4B8BD0',
          borderColor: '#4B8BD0',
          borderWidth: 1,
        },
      ],
    };
    //OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Average dollars wasted per person',
          },
        },
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Meal plan',
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: 'How much money is wasted from uneaten meals?',
          font: {
            size: 22,
          },
        },
        legend: {
          display: false,
        },
      },
      maintainAspectRatio: false,
    };
    //THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
    //CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
    const ctxBAR_a = document.getElementById('MONEY-WASTED');
    //THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
    //MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
    const chart2 = new Chart(ctxBAR_a, {
      type: 'bar',
      data: data,
      options: options,
    });
  
    if (window.matchMedia('(max-width: 480px)').matches) {
      chart2.canvas.style = 'max-height:450px';
      chart2.options.maintainAspectRatio = false;
      chart2.update();
    }
  
    if (window.matchMedia('(min-width: 481px)').matches) {
      chart2.canvas.style = 'min-height:600px';
      chart2.canvas.style = 'max-height:600px';
      chart2.options.maintainAspectRatio = false;
      chart2.update();
    }
  });