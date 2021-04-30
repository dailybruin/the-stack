let YearLabels = ['2005-06', '2006-07', '2007-08', '2008-09', '2009-10', '2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20'];
let schools = ['Berkeley', 'Davis', 'Irvine', 'Los Angeles', 'Merced', 'Riverside', 'San Diego', 'Santa Cruz', 'Santa Barbara']
let Berkeley = [0.0, 25.76246, 73.45564, 7.97958, 0.47818, 0.0, 7.9441, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
let Davis = [19.12404, 12.18636, 24.23477, 16.511, 38.53445, 37.93337, 84.99648, 103.3557, 125.6214, 101.25444, 58.83054, 112.10066, 71.00898, 151.53109, 562.12204];
let Irvine = [30.09908, 54.55172, 55.68793, 54.49634, 67.76135, 41.38393, 24.43576, 69.80221, 45.61843, 39.60277, 142.75504, 77.09892, 70.35876, 511.64634, 741.06779];
let LosAngeles = [101.51622, 356.66949, 90.70276, 376.20703, 212.97994, 190.25467, 130.41466, 90.86446, 131.51626, 90.6847, 117.36927, 106.08391, 123.11145, 62.28422, 515.00769];
let Merced = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 248.76037, 0.0, 0.0, 237.96112, 83.52323, 340.6626, 932.10275];
let Riverside = [22.32634, 0.0, 0.0, 3.38314, 3.33945, 2.17677, 0.0, 0.0, 0.0, 0.0, 27.97373, 35.71343, 40.49391, 41.18213, 21.52719];
let SanDiego = [29.45937, 164.70237, 82.17227, 104.50625, 118.79365, 129.89702, 143.75805, 127.36377, 96.95152, 69.65218, 90.94716, 88.273, 54.46164, 21.14617, 924.18019];
let SantaCruz = [90.5407, 149.79672, 143.44638, 209.98974, 186.09945, 173.34624, 155.70943, 134.92677, 119.87144, 81.01053, 166.11678, 109.42095, 49.59242, 49.58767, 473.73052];
let SantaBarbara = [37.9725, 65.49297, 17.23812, 49.47132, 32.41018, 33.32246, 33.98466, 9.11501, 8.92203, 0.0, 0.0, 2.61383, 11.91464, 12.421, 673.61819];
let DataNames = [Berkeley, Davis, Irvine, LosAngeles, Merced, Riverside, SanDiego, SantaCruz, SantaBarbara]
let colors = ['#041E42', '#B3A369', '#FFD200', '#3284BF', '#0091B3', '#add8e6', '#C69214', '#f29813', '#004D9F']
let data = [];


for (let i = 0; i < schools.length; ++i) {
    chartdata = {
        label: schools[i],
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
    data.push(chartdata);
}

var ctxDOE = document.getElementById('DOEChart');
var myChart = new Chart(ctxDOE, {
    type: 'line',
    data: {
        labels: YearLabels,
        datasets: data,
    },
    options: {
        title: {
            display: true,
            text: 'Grant Money from Department of Education per Student by Campus'
        },
        scales: {
            yAxes: [{
                min: 0,
                max: 600,
                scaleLabel: {
                    display: true,
                    labelString: "Grant Money per Student"
                }
            }]
        },
    },
    lineAtIndex: [
        { index: 7, text: ['2012', 'UCSC becomes', 'a HSI'] },
        { index: 10, text: ['2015', 'UCSB becomes', 'a HSI'] },
        { index: 12, text: ['2017', 'UCI becomes', 'a HSI'] },
        { index: 5, text: ['2010', 'UCMerced becomes', 'a HSI'] },
        { index: 3, text: ['2008', 'UCR becomes', 'a HSI'] }
    ],
})


