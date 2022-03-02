import {MALE_COLOR, FEMALE_COLOR } from './globals.js'

var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: ["Male", "Female"],
    datasets: [
        {
            label: "Pre-COVID",
            // backgroundColor: "blue",
            data: [0.1623,0.1623],
            backgroundColor: MALE_COLOR,
        },
        {
            label: "COVID",
            // backgroundColor: "red",
            data: [0.1712,0.1716],
            backgroundColor: FEMALE_COLOR
        },
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        barValueSpacing: 20,
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Average Review Positivity Score'
                  },
                ticks: {
                    min: 0,
                }
            }]
        },
        title: {
      display: true,
      text: 'Average Review Positivity Score'
    },

    }
});
