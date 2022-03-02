import {MALE_COLOR, FEMALE_COLOR } from './globals.js'

var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: ["Male", "Female"],
    datasets: [
        {
            label: "Pre-COVID",
            // backgroundColor: "blue",
            data: [80.35,79.65],
            backgroundColor: MALE_COLOR,
        },
        {
            label: "COVID",
            // backgroundColor: "red",
            data: [84.09,85.02],
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
                    labelString: 'Percentage of Positive Reviews'
                  },
                ticks: {
                    min: 0,
                }
            }]
        },
        title: {
      display: true,
      text: 'Percentage of Positive Reviews'
    },

    }
});
