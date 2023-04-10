let matchChart;
let ctxPIE = document.getElementById('matchChart');
function matchQuiz() {
  //global constants
  let on_camp = 0;

  let choices = document.getElementsByTagName('input');
  let selections = 0;
  for (i = 0; i < choices.length; ++i) {
    if (choices[i].checked) {
      console.log(i, choices[i].checked);
      if (choices[i].value == 'oncamp') {
        on_camp = on_camp + 1;
      }
      ++selections;
    }
  }
  if (selections != 7) {
    alert(`Please answer question all the questions.`);
    return;
  }
  //console.log(choices)

  // let maxscore = Math.max(on_camp,off_camp);

  let answerbox = document.getElementById('answer');
  let calc_on_camp = Math.ceil(on_camp / 7 * 100);
  let calc_off_camp = 100 - calc_on_camp;
  if (calc_on_camp >= 50) {
    answerbox.innerHTML =
      'You got a ' + calc_on_camp + '% match for living on campus!';
  } else {
    answerbox.innerHTML =
      'You got a ' + calc_off_camp + '% match for living off campus!';
  }

  matchChart.data.datasets[0].data = [calc_on_camp, calc_off_camp];
  matchChart.update();
  ctxPIE.className = 'results';
}

const labelsMatch = ['On-campus', 'Off-campus'];
const colorsMatch = ['#4B8BD0', '#FFDF16'];
let dataMatch = {
  labels: labelsMatch,
  datasets: [
    {
      label: 'Percent match',
      data: [0, 0], //VALUE FOR EACH SEGMENT
      backgroundColor: colorsMatch,
      borderColor: colorsMatch,
      borderWidth: 1,
    },
  ],
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
let optionsMatch = {
  plugins: {
    title: {
      display: true,
      text: 'Your Percent Match',
    },
    tooltip: {
      callbacks: {
        label: function(tooltipItem, data) {
          return `${tooltipItem.label} : ${tooltipItem.formattedValue}%`;
        },
      },
    },
  },
  maintainAspectRatio: false,
};

matchChart = new Chart(ctxPIE, {
  type: 'pie',
  data: dataMatch,
  options: optionsMatch,
});

if (window.matchMedia('(max-width: 480px)').matches) {
  matchChart.canvas.style = 'min-height:500px';
  matchChart.options.maintainAspectRatio = false;
  matchChart.update();
}
