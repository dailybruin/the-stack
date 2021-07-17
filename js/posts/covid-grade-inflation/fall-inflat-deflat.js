function makeCharts(classes2) {

  var classesLabels3 = classes2.map(function (d) { return d.class }).slice(0, 20);
  var inflationData3 = classes2.map(function (d) { return d.difference }).slice(0, 20);
  //var deptLabels3 = classes2.map(function (d) { return d.department }).slice(0, 21);
  //console.log(deptLabels3)


  var departmentColors3 = classes2.map(function (d) {
    //console.log(d);
    if (d.department === 'physical') {
      return '#77b1d2';
    } else if (d.department === 'life_science') {
      return '#A2F2A3';
    } else if (d.department === 'social') {
      return '#FFE589';
    } else if (d.department === 'humanities') {
      return '#B5BAF2';
    } else if (d.department === 'engineering') {
      return '#E26C5D';
    } else {
      return '#CFCFC4';
    }
  }).slice(0, 20);

  classesMobile3=[
    'MGMT 122', 
    'WL ARTS CM140', 
    'SPAN 7A', 
    'MATH 170E',
    'EC ENGR 170A', 
    'PHYSCI 147',  
    'PSYCH 118',  
    'CHEM 14D', 
    'SOCIOL 20',  
    'COM SCI M51A',  
    'MATH 105A' ,  
    'MATH 31AL' ,
    'PHYSICS 5B' ,
    'ESL 301' ,
    'ART 31A',
    'MATH 115A' , 
    'JAPAN 4', 
    'MIMG 101', 
    'MCD BIO M175A',  
    'SOCIOL M176' 
  ]

  isMobile = true;
  //console.log(screen.width)
  if (screen.width > 1000) {
      isMobile = false;
  };
  
  if (isMobile) {
      classesLabels3 = classesMobile3;
      ratio = 1;

  }


  var ctx3 = document.getElementById("fallinflatChart");
  var fallinflatChart = new Chart(ctx3, {
    type: 'horizontalBar',
    options: {
      maintainAspectRatio: true,
      legend: {
        display: false,
      },
      plugins: {
        datalabels: {
          display: false
        }
      },
      title: {
        display: true,
        text: '20 Most Inflated Classes'
      },
      tooltips: {
        intersect: false,
        callbacks: {
          label: function (tooltipItem, data) {
            return tooltipItem.xLabel.toLocaleString('en-US', {
             // style: 'percent', (to add percent)
              maximumFractionDigits: 2,
            });
          },
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              min: 0,
              max: 1.5, // Your absolute max value

            },
            scaleLabel: {
              display: true,
              labelString: 'Average GPA Point Difference',
              fontSize: 11,
            }
          }
        ]
      }
    },
    data: {
      labels: classesLabels3,
      datasets: [
        {
          data: inflationData3,
          backgroundColor: departmentColors3,
          //label: deptLabels3
        }
      ]
    }
  })



 

  var classesLabels4 = classes2.map(function (d) { return d.class }).slice(922, 942);
  var inflationData4 = classes2.map(function (d) { return d.difference }).slice(922, 942);

  var departmentColors4 = classes2.map(function (d) {
    //console.log(d);
    if (d.department === 'physical') {
      return '#77b1d2';
    } else if (d.department === 'life_science') {
      return '#A2F2A3';
    } else if (d.department === 'social') {
      return '#FFE589';
    } else if (d.department === 'humanities') {
      return '#B5BAF2';
    } else if (d.department === 'engineering') {
      return '#E26C5D';
    } else {
      return '#CFCFC4';
    }
  }).slice(922, 942);

  classesMobile4=['MGMTMSA 435', 
    'PHILOS 117', 
    'ENGL 184',
    'RELIGN M10',
    'ENGL 119', 
    'MATH 225A',
    'CH ENGR CM145',
    'MECH&AE 281', 
    'EC ENGR 230A', 
    'I M STD 155', 
    'EPS SCI 51 ',  
    'CHICANO 169', 
    'COMM 104', 
    'CHICANO 105F', 
    'EC ENGR 209AS', 
    'EPS SCI 61', 
    'ART HIS 124', 
    'MGMTMFE 402', 
    'MGMTMSA 433', 
    'EC ENGR M202A', 
    'EC ENGR 101A',
  ]
  
    if (isMobile) {
    classesLabels4= classesMobile4;
    
    ratio = 1;
      };
  
  var ctx4 = document.getElementById("falldeflatChart");
  var falldeflatChart = new Chart(ctx4, {
    type: 'horizontalBar',
    options: {
      maintainAspectRatio: true,
      legend: {
        display: false,
      },
      plugins: {
        datalabels: {
          display: false
        }
      },
      title: {
        display: true,
        text: '20 Most Deflated Classes'
      },
      tooltips: {
        intersect: false,
        callbacks: {
          label: function (tooltipItem, data) {
            return tooltipItem.xLabel.toLocaleString('en-US', {
              maximumFractionDigits: 2,
            });
          },
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              min: -1,
              max: 0, // Your absolute max value

            },
            scaleLabel: {
              display: true,
              labelString: 'Average GPA Point Difference',
              fontSize: 11,
            }
          }
        ]
      }
    },
    data: {
      labels: classesLabels4,
      datasets: [
        {
          data: inflationData4,
          backgroundColor: departmentColors4
        }
      ]
    }
  }



  )
  
  if (window.matchMedia('(max-width: 480px)').matches) {
    falldeflatChart.canvas.style = 'max-height:400px';
    falldeflatChart.options.maintainAspectRatio = false;
    //console.log(falldeflatChart);
    fallinflatChart.canvas.style = 'max-height:400px';
    fallinflatChart.options.maintainAspectRatio = false;
    //deflationChart.canvas.style = 'max-height:480px';
    //deflationChart.options.maintainAspectRatio = false;
    //console.log(falldeflatChart);
    //inflationChart.canvas.style = 'max-height:480px';
    //inflationChart.options.maintainAspectRatio = false;
    //console.log(falldeflatChart);
    //console.log(falldeflatChart);
    //inflationChart.update();


    //falldeflatChart.update();
  };
  
  
  

}



d3.csv('/datasets/covid-grade-inflation/inflat_rank_fall.csv')
  .then(makeCharts);



 




