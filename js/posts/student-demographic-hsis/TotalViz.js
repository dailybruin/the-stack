let TotalBerkeley = [6533.10302, 12290.15397, 15034.02075, 15165.52833, 17505.63043, 16980.76499, 16955.38212, 16919.53482, 17564.38678, 16537.03714, 16193.89056, 20030.81283, 16975.2556, 18591.00817, 18829.23795];
let TotalDavis = [10162.16773, 14275.57188, 15395.14767, 16137.71437, 18051.55177, 17944.07685, 20077.63721, 19728.08239, 18531.80706, 20640.22483, 20380.74396, 20436.61203, 22638.40125, 23323.4978, 27317.4188];
let TotalIrvine = [5600.26376, 763.25496, 9052.50894, 8767.10513, 9266.63395, 9186.23442, 8551.08936, 8328.40815, 8502.35534, 8139.72865, 10934.49301, 10351.06324, 9917.92628, 12034.76452, 14226.11396];
let TotalLosAngeles = [13790.54815, 20694.16299, 20107.84641, 21775.13723, 23149.21027, 24111.86214, 22808.83836, 19699.0309, 21823.46605, 23285.12226, 24178.56352, 23889.91141, 20627.37883, 28539.60817, 32227.99252];
let TotalMerced = [559.42681, 1330.58246, 1776.18831, 2507.71527, 2190.75653, 1537.026, 1906.92811, 1915.98237, 3441.94054, 2891.35594, 2667.70939, 3864.75901, 2812.39505, 5774.05493, 5026.20934];
let TotalRiverside = [2232.3638, 3838.88222, 4076.53701, 3487.64078, 4505.87701, 3646.17736, 4423.85638, 3665.20715, 4378.71249, 4879.50816, 5420.11688, 5755.42424, 6292.18276, 6943.3402, 9243.14381];
let TotalSanDiego = [12880.04159, 18591.28748, 21534.34312, 22973.26776, 27567.62781, 25300.68918, 26347.7452, 25968.11666, 28226.96303, 26397.0134, 28033.0119, 28480.28999, 29316.33976, 33900.67144, 31934.78947];
let TotalSantaCruz = [4089.69959, 4283.62062, 5146.20989, 4734.38497, 5618.29159, 4834.25257, 5518.98491, 5456.78464, 5264.39424, 5253.61473, 4699.46382, 3940.52808, 5754.08851, 6302.77772, 6012.85373];
let TotalSantaBarbara = [6394.93157, 8828.87422, 9980.21227, 8959.19216, 11507.49236, 9459.98199, 11180.31466, 8491.73192, 10660.74279, 9556.21791, 9443.97989, 9429.65169, 10750.52119, 11058.03647, 12051.52026];
let TotalDataNames = [TotalBerkeley, TotalDavis, TotalIrvine, TotalLosAngeles, TotalMerced, TotalRiverside, TotalSanDiego, TotalSantaCruz, TotalSantaBarbara];
let Totaldata = []



for (let i = 0; i < schools.length; ++i) {
    chartdata2 = {
        label: labelList[i],
        fill: false,
        data: TotalDataNames[i],
        backgroundColor: [
            colors[i],
        ],
        borderColor: [
            colors[i],
        ],
        borderWidth: 1,
        hidden: TotalDataNames[i] != TotalLosAngeles,
        lineTension: 0
    }
    Totaldata.push(chartdata2);
};
console.log(Totaldata);

var ctxTotal = document.getElementById('TotalChart');
var myChart = new Chart(ctxTotal, {
    type: 'line',
    data: {
        labels: YearLabels,
        datasets: Totaldata,
    },
    options: {
        title: {
            display: true,
            text: 'Total Grant Money per Student by Campus'
        },
        scales: {
            yAxes: [{
                ticks: {
                    callback: function (value) {
                        return value.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 0,
                        }); // convert value to dollar format // convert it to percentage
                    },
                    min: 0,
                    max: 35000,
                    stepSize: 5000
                },
                scaleLabel: {
                    display: true,
                    labelString: "Grant Money per Student"
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Years"
                }
            }]
        },
        tooltips: {
            intersect: true,
            displayColors: true,
            callbacks: {
                label: function (tooltipItem, datasets) {
                    label = tooltipItem.yLabel.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 2,
                    });
                    return label;
                },
            },
        },
        //aspectRatio: 2,
        maintainAspectRatio: false
    },
    lineAtIndex: [
        { index: 7, text: ['2012', 'UCSC becomes', 'a HSI'] },
        { index: 10, text: ['2015', 'UCSB becomes', 'a HSI'] },
        { index: 12, text: ['2017', 'UCI becomes', 'a HSI'] },
        { index: 5, text: ['2010', 'UCM becomes', 'a HSI'] },
        { index: 3, text: ['2008', 'UCR becomes', 'a HSI'] }
    ],
})


