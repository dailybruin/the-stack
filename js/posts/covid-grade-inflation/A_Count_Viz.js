let scale = 100;
let Count = [[0.41, 0.09], [0.5, 0.13], [0.61, 0.18], [0.44, 0.11]]
/*Thoughts: 
    Plot at x = Total Classes Covid
    Plot at y = Total Classes Non-Covid
    Two circles: Center circle radius = ACount Non-Covid by %
                Outer circel radius = ACount Covid by %
*/

let xLocation = [-.75, -.8, -.3, 1]
let yLocation = [-2, .3, 2.2, 2.7]
let Colors = ['rgba(255, 99, 132, 1)', 'rgba(25, 145, 156, 1)', 'rgba(122,43,132,1)'];
let COVIDColors = ['rgba(255, 99, 132, .5)', 'rgba(25, 145, 156, .5)', 'rgba(122,43,132,.5)']
let Quarters = ['2019 Fall', '2020 Winter', '2020 Spring', '2019 Summer'];
let datasets = [];

for (let i = 0; i < Count.length; ++i) {
    let data = {
        label: Quarters[i],
        data: [{
            x: xLocation[i],
            y: yLocation[i],
            r: scale * Count[i][1]
        }, {
            x: xLocation[i],
            y: yLocation[i],
            r: scale * Count[i][0]
        }],
        backgroundColor: [
            Colors[i],
            COVIDColors[i]
        ],
        borderWidth: 1
    }
    datasets.push(data);
}

var ctxBubble = document.getElementById('bubble-chart').getContext('2d');
var BubbleChart = new Chart(ctxBubble, {
    type: 'bubble',
    data: { datasets },
    options: {
        scales: {
            xAxes: [
                {
                    display: false,
                    ticks: {
                        min: -5,
                        max: 5,
                    },
                },
            ],
            yAxes: [
                {
                    display: false,
                    ticks: {
                        min: -3.8,
                        max: 4.5,
                    },
                },
            ],
        },
        display: false,
        drawBorder: false,
        drawTicks: false,
        pointStyle: 'star',
        plugins: {
            datalabels: {
                color: '#333333',
                labels: {
                    title: {
                        font: {
                            weight: 'bold',
                            // size: 12,
                        },
                        formatter: function (value, context) {
                            return Quarters[context.datasetIndex];
                        },
                    },
                    value: {
                        formatter: function (value, context) {
                            if (window.matchMedia('(max-width: 580px)').matches) {
                                return '';
                            }
                            return (
                                '\n\n' +
                                Count[context.datasetIndex].toLocaleString('en-US', {
                                    style: 'percent',
                                    maximumFractionDigits: 3,
                                })
                            );
                        },
                    },
                },
            },
        },
        maintainAspectRatio: false,
        animation: false,
    },
    plugins: [ChartDataLabels],
});

if (window.matchMedia('(max-width: 480px)').matches) {
    BubbleChart.canvas.style = 'max-height:200px';
    BubbleChart.options.maintainAspectRatio = false;
    BubbleChart.update();
} else if (window.matchMedia('(max-width: 580px)').matches) {
    BubbleChart.canvas.style = 'max-height:300px';
    BubbleChart.options.maintainAspectRatio = false;
    BubbleChart.update();
}