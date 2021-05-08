
let ctx1 = document.getElementById('grad-rate-line').getContext("2d");
//let ctx = document.getElementById('myChart').getContext('2d');
isMobile = true;
//console.log(screen.width)
if (screen.width > 1000) {
    isMobile = false;
};

if (isMobile) {
    title = "Hispanic Grad Rates by Institution";
}
else {
    title = 'UC Hispanic Graduation Rates From 2011-2019 by Institution ';
}

if (isMobile) {
    yLabel = "Hispanic Grad. Rate (%)";
}
else {
    yLabel = 'Hispanic Graduation Rate (%)';
}
let RatesChart = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
            label: 'Los Angeles',
            fill: false,
            borderColor: '#3284BF',
            backgroundColor: '#3284BF',
            lineTension: 0,
            data: [85.20, 87.60, 83.50, 85.00, 87.90, 86.50, 86.40, 85.80, 86.80],

        }, {

            label: 'Los Angeles Avg.',
            borderColor: '#3284BF',
            backgroundColor: 'white',
            fill: false,
            lineTension: 0,
            data: [86.08, 86.08, 86.08, 86.08, 86.08, 86.08, 86.08, 86.08, 86.08],
            borderDash: [10, 5],
            borderWidth: 2.5,
            pointRadius: 1,

        },
        {

            label: 'Berkeley',
            fill: false,
            borderColor: '#041E42',
            backgroundColor: '#041E42',
            lineTension: 0,

            data: [81.20, 80.80, 84.30, 84.70, 84.80, 88.70, 87.30, 85.30, 84.00],
            hidden: true,

        },
        {

            label: 'Davis',
            fill: false,
            borderColor: '#B3A369',
            backgroundColor: '#B3A369',
            lineTension: 0,
            data: [70.90, 71.60, 71.70, 77.90, 76.90, 76.20, 77.00, 80.20, 80.30],
            hidden: true,


        }, {
            label: 'Irvine',
            fill: false,
            borderColor: '#FFD200',
            backgroundColor: '#FFD200',
            lineTension: 0,
            data: [79.20, 78.90, 78.30, 81.90, 83.70, 79.90, 77.40, 75.80, 78.50],
            hidden: true,


        }, {
            label: 'Merced',
            fill: false,
            borderColor: '#0091B3',
            backgroundColor: '#0091B3',
            lineTension: 0,
            data: [54.40, 58.60, 61.00, 62.20, 66.90, 63.50, 57.40, 63.40, 67.70],
            hidden: true,


        }, {

            label: 'Riverside',
            fill: false,
            borderColor: '#add8e6',
            backgroundColor: '#add8e6',
            lineTension: 0,
            data: [65.10, 57.90, 62.40, 66.20, 69.50, 70.10, 72.80, 74.80, 74.60],
            hidden: true,

        }, {

            label: 'San Diego',
            fill: false,
            borderColor: '#C69214',
            backgroundColor: '#C69214',
            lineTension: 0,
            data: [75.90, 78.90, 74.10, 76.80, 77.90, 81.50, 76.40, 76.40, 82.20],
            hidden: true,


        }, {

            label: 'Santa Cruz',
            fill: false,
            borderColor: '#f29813',
            backgroundColor: '#f29813',
            lineTension: 0,
            data: [71.80, 69.80, 67.70, 71.50, 75.00, 73.40, 73.50, 70.10, 72.40],
            hidden: true,


        }, {

            label: 'Santa Barbara',
            fill: false,
            borderColor: '#004D9F',
            backgroundColor: '#004D9F',
            lineTension: 0,
            data: [73.30, 73.50, 75.70, 78.30, 77.80, 79.60, 76.80, 78.40, 80.90],
            hidden: true
        }, {

            label: 'Berkeley Avg.',
            fill: false,
            borderColor: '#041E42',
            backgroundColor: 'white',
            lineTension: 0,
            data: [84.57, 84.57, 84.57, 84.57, 84.57, 84.57, 84.57, 84.57, 84.57],
            borderDash: [10, 5],
            borderWidth: 2.5,
            pointRadius: 1,
            hidden: true,

        }, {


            label: 'Davis Avg.',
            fill: false,
            borderColor: '#B3A369',
            backgroundColor: 'white',
            lineTension: 0,
            data: [75.86, 75.86, 75.86, 75.86, 75.86, 75.86, 75.86, 75.86, 75.86],
            borderDash: [10, 5],
            borderWidth: 2.5,
            pointRadius: 1,
            hidden: true,



        }, {

            label: 'Irvine Avg.',
            fill: false,
            borderColor: '#FFD200',
            backgroundColor: 'white',
            lineTension: 0,
            data: [79.29, 79.29, 79.29, 79.29, 79.29, 79.29, 79.29, 79.29, 79.29],
            borderDash: [10, 5],
            borderWidth: 2.5,
            pointRadius: 1,
            hidden: true,

        }, {


            label: 'Merced Avg.',
            fill: false,
            borderColor: '#0091B3',
            backgroundColor: 'white',
            lineTension: 0,
            data: [61.68, 61.68, 61.68, 61.68, 61.68, 61.68, 61.68, 61.68, 61.68],
            borderDash: [10, 5],
            borderWidth: 2.5,
            pointRadius: 1,
            hidden: true,



        }, {


            label: 'Riverside Avg.',
            fill: false,
            borderColor: '#add8e6',
            backgroundColor: 'white',
            lineTension: 0,
            data: [68.16, 68.16, 68.16, 68.16, 68.16, 68.16, 68.16, 68.16, 68.16],
            borderDash: [10, 5],
            borderWidth: 2.5,
            pointRadius: 1,
            hidden: true,



        }, {

            label: 'San Diego Avg.',
            fill: false,
            borderColor: '#C69214',
            backgroundColor: 'white',
            lineTension: 0,
            data: [77.79, 77.79, 77.79, 77.79, 77.79, 77.79, 77.79, 77.79, 77.79],
            borderDash: [10, 5],
            borderWidth: 2.5,
            pointRadius: 1,
            hidden: true,



        }, {

            label: 'Santa Cruz Avg.',
            fill: false,
            borderColor: '#f29813',
            backgroundColor: 'white',
            lineTension: 0,
            data: [71.68, 71.68, 71.68, 71.68, 71.68, 71.68, 71.68, 71.68, 71.68],
            borderDash: [10, 5],
            borderWidth: 2.5,
            pointRadius: 1,
            hidden: true,

        }, {


            label: 'Santa Barbara Avg.',
            fill: false,
            borderColor: '#004D9F',
            backgroundColor: 'white',
            lineTension: 0,
            data: [77.14, 77.14, 77.14, 77.14, 77.14, 77.14, 77.14, 77.14, 77.14],
            borderDash: [10, 5],
            borderWidth: 2.5,
            pointRadius: 1,
            hidden: true,



        },]
    },
    // Configuration options go here

    options: {
        title: {
            display: true,
            text: title
        },
        scales: {
            yAxes: [{
                ticks: {
                    callback: function (value) {
                        return (value) + '%'; // convert it to percentage
                    },
                    min: 0,
                    max: 100,
                    stepSize: 10
                },


                scaleLabel: {
                    display: true,
                    labelString: yLabel,

                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Year'
                }
            }],
            plugins: false
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var value = data.datasets[tooltipItem.datasetIndex].data[0];
                    var label = data.datasets[tooltipItem.datasetIndex].label;
                    return label + ' ' + value + '%';
                }
            }
        },
        animation: false
    }
},
);
if (window.matchMedia('(max-width: 480px)').matches) {
    RatesChart.canvas.style = 'min-height: 500px';
    RatesChart.options.maintainAspectRatio = false;
    RatesChart.update();
}








