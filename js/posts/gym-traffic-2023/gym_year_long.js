const verticalLines = [
  {
    x: 'September',
    borderColor: '#5A5A5A',
    borderWidth: 2,
    borderDash: [5, 5],
    label: {
      enabled: true,
      content: 'Fall 2021',
      position: 'top',
      color: '#5A5A5A',
    },
    month: 'September', // Add month property
  },
  {
    x: 'January',
    borderColor: '#5A5A5A',
    borderWidth: 2,
    borderDash: [5, 5],
    label: {
      enabled: true,
      content: 'Winter 2022',
      position: 'bottom',
      color: '#5A5A5A',
    },
    month: 'January', // Add month property
  },
  {
    x: 'March',
    borderColor: '#5A5A5A',
    borderWidth: 2,
    borderDash: [5, 5],
    label: {
      enabled: true,
      content: 'Spring 2022',
      position: 'bottom',
      color: '#5A5A5A',
    },
    month: 'March', // Add month property
  },
  {
    x: 'June',
    borderColor: '#5A5A5A',
    borderWidth: 2,
    borderDash: [5, 5],
    label: {
      enabled: true,
      content: 'Summer 2022',
      position: 'bottom',
      color: '#5A5A5A',
    },
    month: 'June', // Add month property
  },
];

// Define the shift values for each month
const shiftValues = {
  September: 50, // September
  January: 5, // January
  March: 55, // March
  June: 52, // June
};

const verticalLinePlugin = {
  id: 'verticalLine',
  beforeDraw(chart, args, options) {
    const { ctx, chartArea: { top, bottom }, scales: { x } } = chart;
    ctx.save();
    for (let i = 0; i < verticalLines.length; i++) {
      const line = verticalLines[i];
      const xValue =
        x.getPixelForValue(line.x) + (shiftValues[line.month] || 0);
      ctx.beginPath();
      ctx.moveTo(xValue, top);
      ctx.lineTo(xValue, bottom);
      ctx.strokeStyle = line.borderColor;
      ctx.lineWidth = line.borderWidth;
      ctx.setLineDash(line.borderDash || []);
      ctx.lineDashOffset = line.borderDashOffset;
      ctx.stroke();

      if (line.label.enabled) {
        ctx.fillStyle = line.label.color || '#5A5A5A';
        ctx.font = '10px sans-serif';
        const { width } = ctx.measureText(line.label.content);
        const labelX = xValue + 4;
        const labelY = top + 5;
        ctx.fillText(line.label.content, labelX, labelY);
      }
    }
    ctx.restore();
  },
};

//Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels_time = [
  'September',
  'October',
  'November',
  'December',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
]; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const colors_time = ['rgb(255, 200, 87)', 'rgb(28, 93, 153)']; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data_time = {
  labels: labels_time,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}
  datasets: [
    {
      label: 'Wooden',
      data: [
        37166,
        73931,
        58250,
        23298,
        13731,
        63633,
        61066,
        85295,
        76599,
        32322,
        33040,
        34921,
      ], //DATA HERE
      backgroundColor: colors_time[1],
      borderColor: colors_time[1],
      borderWidth: 2,
    },
    {
      label: 'BFit',
      data: [
        8488,
        35557,
        29626,
        9516,
        3868,
        36495,
        32054,
        41305,
        36624,
        10073,
        7928,
        8013,
      ], //VALUE FOR EACH POINT
      backgroundColor: colors_time[0],
      borderColor: colors_time[0],
      borderWidth: 2,
    },
  ],
};

//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options_time = {
  tension: 0.2,
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Total Number of Visits Per Month',
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'Number of Visitors Per Month',
      font: {
        size: 20, // You can change the font size here
      },
    },
  },
  fill: false,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
};

//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxLINE = document.getElementById('gym_month_long');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart_time = new Chart(ctxLINE, {
  type: 'line',
  data: data_time,
  options: options_time,
  plugins: [verticalLinePlugin],
});
