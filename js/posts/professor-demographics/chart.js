ethnicity = ["americanIndian", "asian", "black", "latino", "white"]
years = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]
color_codes = {
  "americanIndian": ["#006147", "#01825f", "#009e73", "#8fd4c1", "#c2ebe0"],
  "asian": ["#542500", "#9a4400", "#d55e00", "#ed7618", "#f49042"], 
  "black": ["#b6ad2c", "#ccc12f", "#f0e442", "#f2e972", "#ede896"], 
  "latino": ["#002b42", "#005280", "#0072b2", "#257daf", "#5099c3"],
  "white": ["#8a5f00", "#c18500", "#e69f00", "#e7bc5e", "#f2d082"],
}

function getLabels(year, ethnicity) {
  departments = [];

  for (let i = 0; i < 5; i++) {
    departments.push(eval(ethnicity)[year]['deptNames'][i]);
  }
  return departments;
} 

function getProps(year, ethnicity) {
  proportions = [];

  for (let i = 0; i < 5; i++) {
    percentage = (parseFloat(eval(ethnicity)[year]['proportions'][i]) * 100).toFixed(2);
    proportions.push(percentage.toString());
  }
  return proportions;
}


let proportionsChart = new Chart(document.getElementById("proportions_chart"), {
    type: 'horizontalBar',
    //type: 'bar',
    data: {
      //labels: getProps(years[0], ethnicity[0]),
      labels: getLabels(years[0], ethnicity[0]),
      datasets: [{
        label: "Percent",
        backgroundColor: color_codes[ethnicity[0]],
        data: getProps(years[0], ethnicity[0]),
        //data: getLabels(years[0], ethnicity[0]),
      }]
                                 
    }, 
    options: {
      title: {
        text: 'Proportions'
      },
      scales: {
        xAxes: [{
          ticks: {
            min: 0,
            max: 100,
          },
          scaleLabel: {
            display: true,
            labelString: "Proportion in Department (in percent)"
          }
        }]
      },
    }
});

Chart.defaults.global.defaultFontFamily = 'Buenard';
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 14;
proportionsChart.canvas.parentNode.style.width = '800px';


var YEAR_VAL = "2010";
var ETHNICITY_VAL = "americanIndian";

function update_chart(year, ethnicity) {
  
  proportionsChart.data.datasets = [{
    label: "Proportion",
    backgroundColor: color_codes[ethnicity],
    data: getProps(year, ethnicity)
  }]

  proportionsChart.data.labels = getLabels(year, ethnicity);
  proportionsChart.update();
}

/*$("#ethnicity").change(function() {
  var cur_ethnicity = $(this);
  var year_prefix = "201";
  if (cur_ethnicity.val() === "twoPlus") {
    for (let i = 0; i < 6; i++) {
      $("#years option[value='" + year_prefix + i.toString() + "']").remove();
    }
    proportionsChart.options.scales.xAxes = [{
      ticks: {
         min: 0,
         max: 10,
       },
       scaleLabel: {
         display: true,
         labelString: "Proportion in Department (in percent)"
       }
     }];

     proportionsChart.update();
    update_chart("2016", "twoPlus");
  }
  else {
    $("#years").empty();
    for (let i = 0; i < 9; i++) {
      $("#years").append(`<option value="${year_prefix+i.toString()}">${year_prefix+i.toString()}</option>`);
    }
     proportionsChart.options.scales.xAxes = [{
       ticks: {
         min: 0,
         max: 100,
       },
       scaleLabel: {
         display: true,
         labelString: "Proportion in Department (in percent)"
       }
     }];

     proportionsChart.update();
  }*/
let x = window.matchMedia("(max-width: 480px)");
make_responsive(x);

function make_responsive(x) {
  if (x.matches) {
    Chart.defaults.global.responsive = false;
    Chart.defaults.global.maintainAspectRatio = false;
    proportionsChart.canvas.parentNode.style.width = "340px";
    Chart.defaults.global.defaultFontSize = 12;
    update_chart(years[0], ethnicity[0]);
    //proportionsChart.update();
  }
}

