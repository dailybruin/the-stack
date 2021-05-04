//const { ChartLabel } = require("react-viz");

let ctx7 = document.getElementById('HSIS_Projection');

var HSIS_Projection = new Chart(ctx7, {
    type: 'line',
    data: {
        labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040', '2041'],
        datasets: [{
            label: 'Current Yearly Growth in % UCLA Hispanic Students',
            data: [12., 12., 13., 13., 13., 13., 13., 13., 13., 13., 13., 14., 15., 15., 16., 17., 18., 18., 18., 18., 18.],
            borderColor: '#0066CC',
            fill: false
        }, {
            label: 'Linear Least Squares Regression Line of Growth in % UCLA Hispanic Students',
            data: [11.26406926, 11.604329, 11.94458874, 12.28484848, 12.62510823, 12.96536797, 13.30562771, 13.64588745, 13.98614719, 14.32640693, 14.66666667, 15.00692641, 15.34718615, 15.68744589, 16.02770563, 16.36796537, 16.70822511, 17.04848485, 17.38874459, 17.72900433, 18.06926407],
            lineTension: 0.1,
            borderColor: '#0000CC',
            fill: false
        }, {
            label: 'Predicted Growth in % Hispanic Students at UCLA',
            data: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 18.06926407, 18.40952381, 18.74978355, 19.09004329, 19.43030303, 19.77056277, 20.11082251, 20.45108225, 20.79134199, 21.13160173, 21.47186147, 21.81212121, 22.15238095, 22.49264069, 22.83290043, 23.17316017, 23.51341991, 23.85367965, 24.19393939, 24.53419913, 24.87445887, 25.21471861],
            borderColor: '#6600CC',
            lineTension: 0.1,
            borderDash: [5, 5],
            fill: false
        }, {
            label: 'Minimum % Threshold of Hispanic Students Needed for HSI = 25%',
            borderColor: '#FF0000',
            lineTension: 0.1,
            data: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
            fill: false
        }]
    },
    config: {
        options: {
            reponsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Yearly Percentage of Hispanic Students at UCLA'
                },
                scales: {
                    y: {
                        display: true,
                        text: "Percentage of Hispanic Students (%)"
                    },
                    x: {
                        display: true,
                        text: "Year"
                    }
                }
            }
        },
        lineAtIndex: [
            { index: 41, text: ['2040', 'UCLA becomes', 'a HSI'] },
        ],
    }
});

if (window.matchMedia('(max-width: 480px)').matches) {
    DOEChart.canvas.style = 'max-height:300px';
    DOEChart.options.maintainAspectRatio = false;
    DOEChart.update();
}
