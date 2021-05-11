let YearLabels2 = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '  '];
let Berkeleygap = [10.80, 11.30, 5.70, 6.60, 6.60, 2.50, 3.00, 5.90, 8.10];
let Davisgap = [13.10, 11.80, 13.10, 7.90, 9.90, 10.70, 9.50, 6.70, 8.50];
let Irvinegap = [2.50, 5.10, 4.20, 3.50, 0.90, 5.70, 8.30, 4.70, 7.60];
let LosAngelesgap = [5.10, 3.40, 7.10, 6.40, 3.80, 4.60, 6.50, 4.90, 6.80];
let Mercedgap = [0.70, -8.00, -7.60, -1.80, -2.70, 0.30, 14.70, 7.40, 2.70];
let Riversidegap = [-3.90, 9.50, 5.00, 2.30, 1.70, 3.20, -0.50, -5.40, -0.50];
let SanDiegogap = [10.20, 5.30, 11.00, 8.50, 10.50, 5.70, 8.90, 8.50, 3.60];
let SantaCruzgap = [3.60, 4.90, 5.60, 7.20, 2.90, 6.00, 5.70, 6.70, 4.30];
let SantaBarbaragap = [9.50, 10.40, 6.80, 5.20, 5.40, 5.20, 7.40, 5.90, 4.00];
let DataNamesgap = [LosAngelesgap, Berkeleygap, Davisgap, Irvinegap, Mercedgap, Riversidegap, SanDiegogap, SantaCruzgap, SantaBarbaragap]


let datagap = []
for (let i = 0; i < schools.length; ++i) {
    chartdata = {
        label: labelList[i],
        fill: false,
        data: DataNamesgap[i],
        backgroundColor: colors[i],
        borderColor: colors[i],
        borderWidth: 1,
        hidden: DataNamesgap[i] != LosAngelesgap,
        lineTension: 0
    }
    datagap.push(chartdata);
};

if (isMobile) {
    title = "% Gap between White and Hispanic or Latino Grad. Rates";
}
else {
    title = "Percentage Gap between White and Hispanic or Latino Graduation Rates";
}

if (isMobile) {
    yLabel = "Difference (%)";
}
else {
    yLabel = "Difference (%)";
}

var ctx5 = document.getElementById('grad-rate-gap');

var GapChart = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: YearLabels2,
        datasets: datagap,
    },
    options: {
        title: {
            display: true,
            text: title,
        },
        scales: {
            yAxes: [{
                ticks: {
                    callback: function (value) {
                        return (value) + '%'; // convert it to percentage
                    },

                    min: -15,
                    max: 15,
                    stepSize: 3,
                },

                scaleLabel: {
                    display: true,
                    labelString: yLabel,
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Year"
                }
            }]
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var value = tooltipItem.yLabel;
                    var label = data.datasets[tooltipItem.datasetIndex].label;
                    return label + ' ' + value + '%';
                }
            }
        },
        animation: false
    },
    lineAtIndex: [
        { index: 1, text: ['2012', 'Santa Cruz became', 'an HSI'] },
        { index: 4, text: ['2015', 'Santa Barbara became', 'an HSI'] },
        { index: 6, text: ['2017', 'Irvine became', 'an HSI'] },
    ],
})

if (window.matchMedia('(max-width: 480px)').matches) {
    GapChart.canvas.style = 'max-height:300px';
    GapChart.options.maintainAspectRatio = false;
    GapChart.update();
}


