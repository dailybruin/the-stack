d3.csv('/datasets/covid-grade-inflation/inflat_rank_sum.csv')
  .then(makeChart);

function makeChart(classes) {
  // classes is an array of objects where each object represents a class
  var classesLabels = classes.map(function(d) {return d.CLASS}).slice (361, 381);
  var inflationData = classes.map(function(d) {return d.difference}).slice (361,381);
  var departmentColors = classes.map(function(d) {return d.department === 'physical' ? '#19A0AA':'#F15F36' ;});





var chart = new Chart('top20-inflation', {
    type: 'horizontalBar',
    data: {
      labels: classesLabels,
      datasets: [
        {
            data: inflationData,
            backgroundColor: departmentColors
        }
      ],
    options: {
        scales: {
             xAxes: [
                {
                    ticks:{
                        max: 5,
                        min:-3
                    },
            scaleLabel: {
              
              
              labelString: 'Weeks at No.1',
              fontSize: 16
            }
          }
        ]
      }
    },
} 
   
  }
  
  );


}



//colors by department**
//set scales**
//multiple graphs
//drop down-- two graphs per drop down 
