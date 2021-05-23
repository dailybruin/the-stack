let scale = 100;
let ACount = [.41, .503, .43];
/*Thoughts: 
    Plot at x = Total Classes Covid
    Plot at y = Total Classes Non-Covid
    Two circles: Center circle radius = ACount Non-Covid by %
                Outer circel radius = ACount Covid by %
*/
//let Classes = [134048, 122793, 126290];
let COVIDACount = [.6, .7, .605];
let xLocation = [10, 20, 30]
let yLocation = 5
let Colors = ['rgba(255, 99, 132, 1)', 'rgba(25, 145, 156, 1)', 'rgba(122,43,132,1)'];
let COVIDColors = ['rgba(255, 99, 132, .5)', 'rgba(25, 145, 156, .5)', 'rgba(122,43,132,.5)']
let Quarters = ['Fall', 'Winter', 'Spring'];
let datasets = [];

for (let i = 0; i < ACount.length; ++i) {
    let data = {
        label: Quarters[i],
        data: [{
            x: xLocation[i],
            y: yLocation,
            r: scale * ACount[i]
        }, {
            x: xLocation[i],
            y: yLocation,
            r: scale * COVIDACount[i]
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
                        min: 0,
                        max: 40,
                    },
                },
            ],
            yAxes: [
                {
                    display: false,
                    ticks: {
                        min: 0,
                        max: 10,
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
                                ACount[context.datasetIndex].toLocaleString('en-US', {
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
    },
    plugins: [ChartDataLabels],
});

if (window.matchMedia('(max-width: 480px)').matches) {
    yearTotals.canvas.style = 'max-height:200px';
    yearTotals.options.maintainAspectRatio = false;
    yearTotals.update();
} else if (window.matchMedia('(max-width: 580px)').matches) {
    yearTotals.canvas.style = 'max-height:300px';
    yearTotals.options.maintainAspectRatio = false;
    yearTotals.update();
}