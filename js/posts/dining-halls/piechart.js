// simple pie chart code imported from chart js
const pieData = {
  labels: [
  'The Study',
  'Rendezvous',
  'Bruin Cafe',
  'Bruin Bowl',
  'The Drey',
  'De Neve',
  'Epicuria',
  'B-Plate'],
  datasets: [
    {
      label: 'Swipes',
      backgroundColor: [
      'rgb(149, 163, 179)',
      'rgb(130, 9, 51)',
      'rgb(132, 90, 109)',
      'rgb(28, 93, 153)',
      'rgb(113, 124, 137)',
      'rgb(255, 131, 17)',
      'rgb(255, 200, 87)',
      'rgb(152, 149, 114)',
          ],
      data: [117463, 104091, 34326, 14579, 11108, 119835, 91102, 111026],
    },
  ],
};
//While your function here definitely is a good idea, for something like this that never changes, it's okay to just hard code it
let total = 603530;
  // for (let i in allData) {
  //   total += allData[i];
  // }

const pieOptions = {
  plugins:{
    title: {
      display: true,
      text: '21-22 Meal Swipes',
      fontSize: 19,
    },
    tooltip: {
			callbacks: {
        //tooltipItem is an "object" based on what your mouse hovers over. There are a bunch of values you can choose to access
          //directly from the tooltipItem. A list of these can be found by console.log(tooltipItem). If one of these matches what you
          //want, you access it by tooltipItem.item where item is the name of what you want to access
          //If none of the preset options work, then we can look at custom tooltips by accessing the chart data
				label: function(tooltipItem, data) {
          console.log(tooltipItem)
          
          //I just consolidated these steps
					// let allData = tooltipItem.formattedValue; //data.datasets.data[tooltipItem.datasetIndex];
          //console.log(allData)

          //Here I kept your main idea, but in order to increase the readablility I used what are called stirng literals
            //String literals are a way to get multi line strings, or string with lots  of variables. 
            // They are set up using backticks and access varaibles wtih ${} like `string ${variable}`
					let tooltipLabel = `${tooltipItem.label} : ${tooltipItem.formattedValue}`;
          console.log(tooltipLabel)

          //Also I moved total outside of this function. Since it doens't ever change, it's better to only have to assign 
            //the variable once rather than every time the function is run.
					let tooltipPercentage = Math.round((tooltipItem.parsed / total) * 100);
          console.log(tooltipPercentage)
					return `${tooltipLabel} swipes (${tooltipPercentage}%)`;
				}
			}
    }  
  }
}

let ctxPie = document.getElementById('SwipesPieChart')
let pieChart = new Chart(ctxPie, {
  type: 'pie',
  data: pieData,
  options: pieOptions
});








  // tooltips: {
  //   callbacks: {
  //     label: function (tooltipItem, data) {
  //       let label = data.labels[tooltipItem.index];
  //       let count =
  //         data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
  //       return (
  //         label +
  //         ': ' +
  //         count.toLocaleString('en-US', {
  //           maximumFractionDigits: 2,
  //         })
  //       );
  //     },
  //   },
  // },
  // plugins: {
  //   datalabels: {
  //     formatter: function (value, context) {
  //       val = value / (117463 + 104091 + 34326 + 14579 + 11108 + 119835 + 91102 + 111026);
  //       return val.toLocaleString('en-US', {
  //         style: 'percent',
  //         maximumFractionDigits: 2,
  //       });
  //     },
  //     font: {
  //       size: 16,
  //     },
  //     anchor: 'end',
  //     clamp: true,
  //     align: 'start',
  //   },
  // },
