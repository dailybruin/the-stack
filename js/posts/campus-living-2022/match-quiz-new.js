let matchChart;
function matchQuiz(){
    //global constants
    let on_camp  = 0;

    let choices = document.getElementsByTagName('input')
    console.log(choices)
    for (i=0; i<choices.length; ++i) {
        if (choices[i].checked) {
            console.log(i, choices[i].checked);
            if (choices[i].value== 'oncamp'){
                on_camp = on_camp + 1;
            }
        }
        else {
            //alert (`Please answer question ${i+1}`)
            //return
        }
    }
    //console.log(choices)

    // let maxscore = Math.max(on_camp,off_camp);

    let answerbox = document.getElementById('answer');
    let calc_on_camp = Math.ceil((on_camp/7)*100);
    let calc_off_camp = 100 - calc_on_camp;
    if (calc_on_camp >= 50) { 
        answerbox.innerHTML = "You got a " + calc_on_camp + "% match for living ON CAMPUS!";
    }
    else {
        answerbox.innerHTML = "You got a " + calc_off_camp + "% match for living OFF CAMPUS!";
    }

    matchChart.data.datasets.data = [calc_on_camp, calc_off_camp];
    matchChart.update();
    console.log(matchChart.data.datasets.data);

}

const labelsMatch = ['On-campus', 'Off-campus']; //THIS SHOULD BE A LIST OF WHAT EACH SEGMENT IN THE PIE REPRESENTS
const colorsMatch = ['blue', 'yellow','pink','purple'] //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const dataMatch = {
  labels: labelsMatch,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A RING OF THE PIE CHART 
  //CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}, BUT THIS IS *NOT* RECOMMENDED
  datasets: [{
    data:[0,0], //VALUE FOR EACH SEGMENT
    backgroundColor: colorsMatch,
    borderColor: colorsMatch,
    borderWidth: 1
  }]
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const optionsMatch = {
    plugins: {
      title: {
          display: true,
          text: 'Your Percent Match'
        },
    },
    maintainAspectRatio: false,
  }
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxPIE = document.getElementById('matchChart');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
matchChart = new Chart(ctxPIE, {
    type: 'pie', //chose "pie" or "doughnut"
    data: dataMatch,
    options: optionsMatch
  });
//let matchChartctx = document.getElementById('matchChart');

    //Chart.defaults.global.defaultFontFamily = 'Lato';
    //Chart.defaults.global.defaultFontSize = 18;
    //Chart.defaults.global.defaultFontColor = '#777';

// let matchChart = new Chart(matchChartctx, {
//         type: 'pie',
//         data: [{
//           labels: ['On-campus','Off-campus'],
//           datasets: [{
//             data: 0,
//             color: "#455C73",
//             highlight: "#34495E",
//             label: "On-Campus"
//           },
//           {
//             data: 0,
//             color: "#9B59B6",
//             highlight: "#B370CF",
//             label: "Off-Campus"
//           }], 
//         hoverOffset: 4 
//      }]
//     });
