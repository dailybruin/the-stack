Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels = ['2018','2019','2020','2021','2022']; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const colors = ['#B22222','#36453B', 	'#596869', '#515751', '#1E90FF', '#C2C1A5', '#483D8B'] //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data = {
  labels: labels,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}
  datasets: [{
    label: 'Total',
    data:[121751691, 1271780515, 1426986822, 1607202701, 1722568065], //VALUE FOR EACH POINT
    backgroundColor: colors[0],
    borderColor: colors[0],
    borderWidth: 1
  },{
    label: 'David Geffen School of Medicine',
    data: [525382702, 613282330, 753800275, 884464913, 974997186], //DATA HERE
    backgroundColor: colors[1],
    borderColor: colors[1],
    borderWidth: 1
  },{
    label: 'VC Research',
    data: [151180, 0, 335039,  5708172, 27306638],
    backgroundColor: colors[2],
    borderColor: colors[2],
    borderWidth: 1
  },{
    label: 'Letters and Science',
    data: [170732336, 190970123, 201660075, 189863676, 191921262],
    backgroundColor: colors[3],
    borderColor: colors[3],
    borderWidth: 1
  },
  {
    label: 'Luskin School of Public Affairs',
    data: [17602784, 31120712, 14010319,  23222474, 38324799],
    backgroundColor: colors[4],
    borderColor: colors[4],
    borderWidth: 1
  },
  {
    label: 'UCLA Fielding School of Public Health',
    data: [53535436, 50056993, 47330373, 54950164, 73068060],
    backgroundColor: colors[5],
    borderColor: colors[5],
    borderWidth: 1
  },
    {
      label: 'Henry Samueli School of Engr & Appl Science',
      data: [85923172, 100828482, 105016303, 98194574, 104567360],
      backgroundColor: colors[6],
      borderColor: colors[6],
      borderWidth: 1
    },
    {
      label: 'Office of Advanced Research Computing',
      data: [1031667, 13621208, 12648758, 25346761, 19035891],
      backgroundColor: colors[7],
      borderColor: colors[7],
      borderWidth: 1
    },
]
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value, index, ticks) {
              return '$' + Chart.Ticks.formatters.numeric.apply(this, [value, index, ticks])
          },
          xAxis: {
            // The axis for this scale is determined from the first letter of the id as `'x'`
            // It is recommended to specify `position` and / or `axis` explicitly.
            type: 'time',
          }
      },
        title:{
          display: true,
          text: 'Amount'
      }
      }
    },
    plugins: {
      title: {
          display: true,
          text: 'Notable Change in Grant Award Dollars by Organization (FY18-FY22)'
        },
        tooltip: {
          callbacks: {
            title: function(context) {
              console.log(context[0].label);
              return `Year: ${context[0].label}`;
            },
              label: function(context) {
                  let label = context.dataset.label || '';
  
                  if (label) {
                      label += ': ';
                  }
                  if (context.parsed.y !== null) {
                      label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                  }
                  return label;
              }
          }
      }
    },
    maintainAspectRatio: false,
  }
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxLINE= document.getElementById('Rate_Chart');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart = new Chart(ctxLINE, {
    type: 'line',
    data: data,
    options: options
  });