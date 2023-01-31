<html>
<head>
    <meta charset="utf-8">
    <title>Frequency of Fire Alarms Per Hour From 2018 to 2022</title>
</head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
<body>
<canvas id="myChart" style="width: 10000px;;max-width:10000px"></canvas>

<script>
var xValues = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var yValues = [69, 68, 73, 57, 52, 70, 104, 138, 118, 149, 156, 145, 129, 140, 118, 100, 96, 107, 114, 115, 119, 103, 106, 73];
const xLabels =  ['12AM','1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM',
    '11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM'];
Chart.defaults.font.family = 'Noto Serif, serif'  
const options = {
    legend: {display: false},
    scales: {
        x: {
          title:{
            text: "Time",
            display: true
          }
        },    
        y: {
          title: {
            text: "Number of Fire Alarms",
            display: true
          },
          beginAtZero: true,
          steps: 20,
          stepvalue: 2,
          max: 175,
        }    
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function(TooltipItem) {
            console.log(TooltipItem);
            console.log(TooltipItem[0].label) 
            let index = TooltipItem[0].dataIndex;
            let result;
            if (index === 23){
              result = xLabels[index] + '-' + xLabels[0]
            }
            else { result = xLabels[index] + '-' + xLabels[index+1]}
            return result;
          
          }
        }
      },
      title: {
        display: true,
        text: 'Frequency of Fire Alarms Per Hour From 2018 to 2022'
      }},
    maintainAspectRatio: true,
  }
new Chart("myChart", {
  type: "line",
  data: {
    labels: xLabels,
    
    datasets: [{
        label: 'Number of Fire Alarms',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(28, 93, 153)",
      borderColor: "rgba(28, 93, 153, 0.55)",
      data: yValues
    }]
  },
  options:options
});
  
</script>

</body>
</html>
