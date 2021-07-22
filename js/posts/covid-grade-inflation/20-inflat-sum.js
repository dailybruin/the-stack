/*let select = document.querySelector('#chartType');

select.addEventListener('change', showHide);

function showHide() {
  // concat Chart for the canvas ID
  let chart = this.options[select.selectedIndex].value + 'Test';
    document.querySelectorAll('div')
    .forEach(c => {
      c.style.display = (c.id === chart) ? 'inherit' : 'none';
    })
}
*/


/*(document).ready(function() {
  ("select").on('change', function() {
      (this).find("option:selected").each(function() {
          var quarter = (this).attr("value");
          if (quarter) {
              (".GFG").not("." + quarter).hide();
              ("." + quarter).show();
          } else {
              (".GFG").hide();
          }

      });
  }).change();
});
*/







$(document).ready(function () {
  $("select").on('change', function () {
    $(this).find("option:selected").each(function () {
      var quarter = $(this).attr("value");
      if (quarter) {
        $(".GFG").not("." + quarter).hide();
        $("." + quarter).show();

      } else {
        $(".GFG").hide();

      }

    });
  }).change();
});



function makeCharts(classes) {

 
  var classesLabels = classes.map(function (d) { return d.class }).slice(0, 20);
  var inflationData = classes.map(function (d) { return d.difference }).slice(0, 20);


  var departmentColors = classes.map(function (d) {
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

  classesMobile= [
    'STATS 100A', 
    'ANTHRO 132', 
    'ECON106G',
    'MGMT 120A',
    'MATH 110A',
    'LING 185A',
    'INTL DV 130',
    'EPS SCI 15',
    'CHEM 14C', 
    'PHYSICS 5A', 
    'ANTHRO 153', 
    'COM SCI 31',
    'INTL DV 1', 
    'COM SCI 180', 
    'MGMT 1A', 
    'MATH 33B', 
    'HIST 97M' ,
    'ECON 106F' ,
    'COMM 114', 
    'ITALIAN 1'
  ]

  isMobile = true;
    //console.log(screen.width)
  if (screen.width > 1000) {
      isMobile = false;
  };
  
  
  if (isMobile) {
      classesLabels = classesMobile;
      ratio = 1;

  }

  var ctx = document.getElementById("inflationChart");
  var inflationChart = new Chart(ctx, {
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
        text: '20 Classes with Greatest Grade Increase'
      },
      tooltips: {
        intersect: false,
        callbacks: {
          label: function (tooltipItem, data) {
            return tooltipItem.xLabel.toLocaleString('en-US', {
              //style: 'percent',
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
              fontSize: 10,
            }
          }
        ]
      }
    },
    data: {
      labels: classesLabels,
      datasets: [
        {
          data: inflationData,
          backgroundColor: departmentColors
        }
      ]
    }
  })
  



  var classesLabels2 = classes.map(function (d) { return d.class }).slice(344, 364);
  var inflationData2 = classes.map(function (d) { return d.difference }).slice(344, 364);

  var departmentColors2 = classes.map(function (d) {
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
  }).slice(344, 364);

  classesMobile2= [
    'DIS STD M148', 
    'MECH&AE C296A' ,
    'MUSC 3' ,
    'GEOG M149', 
    'WL ARTS 33', 
    'FILM TV 122D', 
    'EDUC 129', 
    'SPAN 150',  
    'MECH&AE 156A',
    'MGMT 286', 
    'STATS 100B',
    'PHYSCI 5', 
    'ARCH&UD 401', 
    'ASL 8',
    'LING 120C',
    'URBN PL 121', 
    'MGMT 142A' , 
    'FILM TV 178', 
    'PSYCH 10',
    'PHYSCI 136',
  ]

  if (isMobile) {
    classesLabels2= classesMobile2;
    
    ratio = 1;
}

  var ctx2 = document.getElementById("deflationChart");
  var deflationChart = new Chart(ctx2, {
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
        text: '20 Classes with Greatest Grade Decrease'
      },
      tooltips: {
        intersect: false,
        callbacks: {
          label: function (tooltipItem, data) {
            return tooltipItem.xLabel.toLocaleString('en-US', {
              //style: 'percent',
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
              fontSize: 10,
            }
          }
        ]
      }
    },
    data: {
      labels: classesLabels2,
      datasets: [
        {
          data: inflationData2,
          backgroundColor: departmentColors2
        }
      ]
    }
  }

  )
  if (window.matchMedia('(max-width: 480px)').matches) {
    inflationChart.canvas.style = 'max-height:600px';
    inflationChart.options.maintainAspectRatio = false;
    console.log(inflationChart);

  }
  if (window.matchMedia('(max-width: 480px)').matches) {
    deflationChart.canvas.style = 'max-height:600px';
    deflationChart.options.maintainAspectRatio = false;
    console.log(deflationChart);

  }
 
}



d3.csv('/datasets/covid-grade-inflation/inflat_rank_sum.csv')
  .then(makeCharts);


 /*  Let classesMobile = 


  isMobile = true;
  //console.log(screen.width)
  if (screen.width > 1000) {
      isMobile = false;
  };
  
  if (isMobile) {
      labelList = classesMobile;
      ratio = 1;
  }
  */




 






