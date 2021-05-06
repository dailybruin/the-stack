//const { ChartLabel } = require("react-viz");

let ctx6 = document.getElementById('HSIS_Projection_Undergrad');

var HSIS_Projection_Undergrad = new Chart(ctx6, {
    type: 'line',
    data: {
        labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040', '2041'],
        datasets: [{
            label: 'Current Yearly Growth in % Undergraduate UCLA Hispanic Students',
            data: [.14, .14, .15, .15, .15, .15, .15, .15, .15, .15, .16, .17, .17, .18, .19, .20, .21, .21, .21, .21, .21],
            borderColor: '#0066CC',
            fill: false
        }, {
            label: 'Linear Least Squares Regression Line of Growth in % Undergraduate UCLA Hispanic Students',
            data: [.1305194805, .1346103896, .1387012987, .1427922078, .1468831169, .150974026, .1550649351, .1591558442, .1632467532, .1673376623, .1714285714, .1755194805, .1796103896, .1837012987, .1877922078, .1918831169, .195974026, .2000649351, .2041558442, .2082467532, .2123376623],
            lineTension: 0.1,
            borderColor: '#0000CC',
            fill: false
        }, {
            label: 'Predicted Growth in % Undergraduate Hispanic Students at UCLA',
            data: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, .2123376623, .2164285714, .2205194805, .2246103896, .2287012987, .2327922078, .2368831169, .240974026, .2450649351, .2491558442, .2532467532, .2573376623, .2614285714, .2655194805, .2696103896, .2737012987, .2777922078, .2818831169, .285974026, .2900649351, .2941558442, .2982467532],
            borderColor: '#6600CC',
            lineTension: 0.1,
            borderDash: [5, 5],
            fill: false
        }, {
            label: 'Minimum % Threshold of Hispanic Students Needed for HSI = 25%',
            borderColor: '#FF0000',
            lineTension: 0.1,
            data: [.25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25, .25],
            fill: false
        }]
    },
    options: {
        reponsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
        title: {
            display: true,
            text: 'Yearly Percentage of Undergraduate Hispanic Students at UCLA'
        },
        scales: {
            yAxes: [{
                ticks: {
                    callback: function (value) {
                        return value.toLocaleString('en-US', {
                            style: 'percent',
                            minimumFractionDigits: 0,
                        }); // convert value to dollar format
                    },
                    min: 0,
                    max: .3,
                    stepSize: .05
                },
                scaleLabel: {
                    display: true,
                    labelString: "Percentage of Undergraduate Hispanic Students"
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
            intersect: true,
            displayColors: true,
            callbacks: {
                label: function (tooltipItem, datasets) {
                    label = tooltipItem.yLabel.toLocaleString('en-US', {
                        style: 'percent',
                        maximumFractionDigits: 2,
                    });
                    return label;
                },
            },
        }
    },
    lineAtIndex: [
        { index: 29, text: ['2029', 'UCLA becomes', 'a HSI'] },
    ],
});

if (window.matchMedia('(max-width: 480px)').matches) {
    HSIS_Projection_Undergrad.canvas.style = 'max-height:300px';
    HSIS_Projection_Undergrad.options.maintainAspectRatio = false;
    HSIS_Projection_Undergrad.update();
}