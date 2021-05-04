

let YearLabels = ['2005-06', '2006-07', '2007-08', '2008-09', '2009-10', '2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20'];
//let schools = ['Berkeley', 'Davis', 'Irvine', 'Los Angeles', 'Merced', 'Riverside', 'San Diego', 'Santa Cruz', 'Santa Barbara']
//let schoolsMobile = ['UCB', 'UCD', 'UCI', 'UCLA', 'UCM', 'UCR', 'UCSD', 'UCSC', 'UCSB']
let Berkeley = [6288.44258, 6869.2864, 6989.31411, 7089.47547, 10725.06127, 10361.08214, 9024.1473, 7619.82114, 10632.86312, 8895.27475, 8449.03348, 9662.62255, 9114.92078, 8588.92032, 9360.53049];
let Davis = [7774.81294, 6756.11653, 7570.52679, 8511.40257, 11344.56569, 9639.29241, 10227.89986, 9044.8178, 9706.15248, 11197.63398, 10255.21541, 9987.62634, 11925.86362, 12553.09914, 14164.34894];
let Irvine = [5376.90969, 5377.11569, 5541.10597, 5801.94026, 6669.60125, 6399.95378, 5862.31982, 4814.28138, 5340.55394, 5358.9111, 6172.85185, 5446.56676, 6271.75826, 7288.83584, 8640.36296];
let LosAngeles = [11917.96187, 13235.12468, 13640.47173, 13934.07579, 15447.26409, 16723.85928, 14906.62545, 11643.99042, 12833.05312, 14082.89669, 13706.24444, 13547.59893, 11764.46747, 16899.23993, 18938.34845];
let Merced = [575.32124, 670.24641, 814.93874, 1454.17837, 1538.96733, 1059.32282, 1395.19351, 1281.63649, 2857.55691, 1751.51373, 1665.8127, 2383.28145, 2048.046, 3084.01989, 3280.30338];
let Riverside = [2038.34857, 2541.68697, 2590.36075, 2216.06717, 3076.39586, 2233.69202, 2640.7932, 1970.11453, 2755.89541, 3147.21791, 3365.90962, 3302.91917, 3489.56418, 4470.40161, 6259.92116];
let SanDiego = [13466.24432, 13173.73479, 14720.77329, 16212.22212, 19348.27948, 17672.52651, 18361.56836, 16708.1179, 16670.91354, 17370.30969, 18368.29634, 18139.88762, 17650.69922, 20978.37559, 19792.46861];
let SantaCruz = [3730.25633, 2762.10348, 3456.55256, 3317.01748, 4305.33872, 2888.45405, 2460.78996, 2758.18093, 2462.85985, 2677.57198, 2430.43631, 2146.27563, 2940.68655, 3294.38645, 3849.41723];
let SantaBarbara = [5779.47692, 6006.67754, 5868.87273, 6471.33441, 8415.22253, 6596.69134, 7380.91084, 5660.75372, 7029.71904, 6304.47517, 5919.80512, 5781.73782, 6652.85693, 6959.56084, 7736.84559];
let DataNames = [Berkeley, Davis, Irvine, LosAngeles, Merced, Riverside, SanDiego, SantaCruz, SantaBarbara]
let colors = ['#041E42', '#B3A369', '#FFD200', '#3284BF', '#0091B3', '#add8e6', '#C69214', '#f29813', '#004D9F']

//isMobile = true;
//console.log(screen.width)
//if (screen.width > 1000) {
//    isMobile = false;
//};

//if (isMobile) {
//    labelList = schoolsMobile;
//}
//else {
//    labelList = schools
//}


let Federaldata = [];
for (let i = 0; i < schools.length; ++i) {
    chartdata = {
        label: labelList[i],
        fill: false,
        data: DataNames[i],
        backgroundColor: [
            colors[i],
        ],
        borderColor: [
            colors[i],
        ],
        borderWidth: 1,
        hidden: DataNames[i] != LosAngeles,
        lineTension: 0,
    }
    Federaldata.push(chartdata);
}

var ctxDOE = document.getElementById('DOEChart');
var myChart = new Chart(ctxDOE, {
    type: 'line',
    data: {
        labels: YearLabels,
        datasets: Federaldata,
    },
    options: {
        title: {
            display: true,
            text: 'Federal Grant Money per Student by Campus'
        },
        scales: {
            yAxes: [{
                ticks: {
                    callback: function (value) {
                        return value.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 0,
                        }); // convert value to dollar format
                    },
                    min: 0,
                    max: 25000,
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
        maintainAspectRatio: false
    },
    lineAtIndex: [
        { index: 7, text: ['2012', 'UCSC becomes', 'a HSI'], strokeStyle: 'blue' },
        { index: 10, text: ['2015', 'UCSB becomes', 'a HSI'], strokeStyle: 'green' },
        { index: 12, text: ['2017', 'UCI becomes', 'a HSI'] },
        { index: 5, text: ['2010', 'UCM becomes', 'a HSI'] },
        { index: 3, text: ['2008', 'UCR becomes', 'a HSI'] }
    ],
})

// if (window.matchMedia('(max-width: 480px)').matches) {
//     ctxDOE.canvas.style = 'max-height:300px';
//     ctxDOE.options.maintainAspectRatio = false;
//     ctxDOE.options.scales.xAxes[0].labels = YearLabels;
//     ctxDOE.update();
// } else if (window.matchMedia('(max-width: 1000px)').matches) {
//     ctxDOE.options.scales.xAxes[0].labels = YearLabels;
//     ctxDOE.update();
// }

// let x = window.matchMedia("(max-width: 480px)");
// make_responsive(x);

// function make_responsive(x) {
//     if (x.matches) {
//         Chart.defaults.global.responsive = false;
//         Chart.defaults.global.maintainAspectRatio = false;
//         ctxDOE.canvas.parentNode.style.width = "340px";
//         Chart.defaults.global.defaultFontSize = 12;
//         update_chart(YearLabels[0], yAxes[0]);
//         //proportionsChart.update();
//     }
// }
