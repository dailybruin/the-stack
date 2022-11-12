function matchQuiz(){

    //global constants
    var on_camp  = 0;
    var off_camp = 0;

    var choices = document.getElementsByTagName('input')
    for (i=0; i<choices.length; i++) {
        if (choices[i].checked) {
            if (choices[i].value== 'oncamp')
                on_camp = on_camp + 1;
            else 
                off_camp = off_camp + 1;  
    }}
    //console.log(choices)

    var maxscore = Math.max(on_camp,off_camp);

    var answerbox = document.getElementById('answer');

    if (on_camp == maxscore) { 
        answerbox.innerHTML = "You got a " + (on_camp/9)*100 + "% match for living ON CAMPUS!";
    }
    if (off_camp == maxscore) {
        answerbox.innerHTML = "You got a " + (off_camp/9)*100 + "% match for living OFF CAMPUS!";
    }

    matchChart1.datasets.data.value = (on_camp/9)*100

}


let matchChart = document.getElementById('matchChart');

    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    matchChart1 = new Chart(matchChart, {
        title: 'Your Match',
        type: 'pie',
        datasets: [{
          label: 'Dataset',
          data: [{
            value: 0,
            color: "#455C73",
            highlight: "#34495E",
            label: "On-Campus"
          },
          {
            value: 0,
            color: "#9B59B6",
            highlight: "#B370CF",
            label: "Off-Campus"
          }], 
        hoverOffset: 4 
     }]
    });
