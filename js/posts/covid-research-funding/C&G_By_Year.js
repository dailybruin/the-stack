const labels1 = ['2006', '2007', '2008', '2009', '2010',
'2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', 
'2019', '2020', '2021', '2022']; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const colors = ['rgba(50, 132, 191, 0.8)']; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const dataCounts = [NaN, NaN, 5380, 5714, 6212, 6483, 5994, 5194, 5386, 5648, 5554, 
5779, 6568, 6382, 6730, 7190, 7258];
const data2 = {
  labels: labels1,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  datasets: [{
    label: 'Award dollars',
    data: [717898536, 913864854, 889326185, 966264691, 1046010017, 1077641319, 
        1011808031, 893603316, 972467059, 1033159101, 1049075841,
    1060140489, 1121751691, 1271780515, 1426986822, 1607202701,
1722568065], //VALUE FOR EACH BAR
    backgroundColor: colors[0],
    borderColor: colors[0],
    borderWidth: 1
  },]
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options1 = {
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
        text: 'Amount',
        padding: 20,
        }
    },
    x: {
      title:{
        display:true,
        text: 'Year',
        padding: 20,
      }
    }
  },
  plugins: {
    title: {
        display: true,
        text: 'UCLA Contracts & grants - award dollars and counts by fiscal year (FY06-FY22)'
      },
      tooltip: {
        callbacks: {
          title: function(context) {
            console.log(context[0].label);
            return `Year: ${context[0].label}`;
          },
          beforeBody: function(context) {
            console.log(context);
            return `Counts: ${dataCounts[context[0].dataIndex]}`;
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

const ctxBAR = document.getElementById('CG_Chart');

const CG_Chart = new Chart(ctxBAR, {
    type: 'bar',
    data: data2,
    options: options1
  });