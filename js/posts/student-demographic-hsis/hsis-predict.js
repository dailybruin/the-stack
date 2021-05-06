let ctx7 = document.getElementById('HSIS_Projection');

var HSIS_Projection = new Chart(ctx7, {
    type: 'line',
    data: {
        labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040', '2041'],
        datasets: [{
            label: 'Current Yearly Growth in % UCLA Hispanic Students',
            data: [.12, .12, .13, .13, .13, .13, .13, .13, .13, .13, .13, .14, .15, .15, .16, .17, .18, .18, .18, .18, .18],
            borderColor: '#0066CC',
            fill: false
        }, {
            label: 'Linear Least Squares Regression Line of Growth in % UCLA Hispanic Students',
            data: [.1126406926, .11604329, .1194458874, .1228484848, .1262510823, .1296536797, .1330562771, .1364588745, .1398614719, .1432640693, .1466666667, .1500692641, .1534718615, .1568744589, .1602770563, .1636796537, .1670822511, .1704848485, .1738874459, .1772900433, .1806926407],
            lineTension: 0.1,
            borderColor: '#0000CC',
            fill: false
        }, {
            label: 'Predicted Growth in % Hispanic Students at UCLA',
            data: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, .1806926407, .1840952381, .1874978355, .1909004329, .1943030303, .1977056277, .2011082251, .2045108225, .2079134199, .2113160173, .2147186147, .2181212121, .2215238095, .2249264069, .2283290043, .2317316017, .2351341991, .2385367965, .2419393939, .2453419913, .2487445887, .2521471861],
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
            text: 'Yearly Percentage of Hispanic Students at UCLA'
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
                    labelString: "Percentage of Hispanic Students"
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
        { index: 41, text: ['2040', 'UCLA becomes', 'a HSI'] },
    ],
});

if (window.matchMedia('(max-width: 480px)').matches) {
    HSIS_Projection.canvas.style = 'max-height:300px';
    HSIS_Projection.options.maintainAspectRatio = false;
    HSIS_Projection.update();
}
