document.addEventListener('DOMContentLoaded', function() {
  // Chart.defaults.font.family = 'Noto Serif, serif'; //FONT FOR CHART CHANGE IF NEEDED
  Chart.defaults.font.size = 15;
  Chart.defaults.font.family = 'PT Sans';
  Chart.defaults.color = '#000';
  const colors = ['blue', 'yellow', 'pink', 'purple']; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
  const data = {
    //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
    datasets: [
      {
        data: [
          { x: ' AI/ML ', y: 9 },
          { x: ' Agency/Coaching ', y: 15 },
          { x: ' B2B SAAS ', y: 9 },
          { x: ' Community ', y: 4 },
          { x: ' Consumer SAAS ', y: 5 },
          { x: ' Consumer Social  ', y: 5 },
          { x: ' Ecommerce/CPG ', y: 11 },
          { x: ' Education ', y: 8 },
          { x: ' Entertainment ', y: 2 },
          { x: ' Exploring ', y: 1 },
          { x: ' Hard Tech ', y: 8 },
          { x: ' Influencer Marketing ', y: 1 },
          { x: ' Marketplace ', y: 3 },
          { x: ' Nonprofit ', y: 1 },
          { x: ' VC: Venture Capital ', y: 14 },
          { x: ' Web3 ', y: 2 },
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
          text: 'Number of Startups',
        },
      },
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Type of Industry',
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'How many startups are in each industry?',
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
  const ctxBAR_a = document.getElementById('industry-frequency');
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
