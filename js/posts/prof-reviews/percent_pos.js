import { MALE_COLOR, FEMALE_COLOR } from './globals.js'

var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: ["Male", "Female"],
    datasets: [
        {
            label: "Pre-COVID",
            data: [80.35, 79.65],
            backgroundColor: '#f0a13e',
            hoverBackgroundColor: '#f0a13e',
            // datalabels: {
            //     color: 'yellow',
            //     value: 80.35
            //   }        
        },
        {
            label: "COVID",
            data: [84.09, 85.02],
            backgroundColor: '#1293d1',
            hoverBackgroundColor: '#1293d1'
        },
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            datalabels: {
              color: 'white'
            //   labels: {
            //     title: {
            //       font: {
            //         weight: 'bold'
            //       }
            //     },
            //   }
            }
          },
                  
        // plugins: {
        //     datalabels: {
        //         color: 'white',
        //         labels: {
        //             title: {
        //                 font: {
        //                     weight: 'bold'
        //                 }
        //             },
        //         }
        //     }
        // },

        barValueSpacing: 20,
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Percentage of Positive Reviews'
                },
                ticks: {
                    min: 0,
                    max: 100
                }
            }]
        },
        title: {
            display: true,
            text: 'Percentage of Positive Reviews'
        },

    }
});
