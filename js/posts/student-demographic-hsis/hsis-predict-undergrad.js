//const { ChartLabel } = require("react-viz");

let ctx6 = document.getElementById('HSIS_Projection_Undergrad');

var HSIS_Projection_Undergrad = new Chart(ctx6, {
    type: 'line',
    data: {
        labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040', '2041'],
        datasets: [{
            label: 'Current Yearly Growth in % Undergraduate UCLA Hispanic Students',
            data: [14., 14., 15., 15., 15., 15., 15., 15., 15., 15., 16., 17., 17., 18., 19., 20., 21., 21., 21., 21., 21.],
            borderColor: '#0066CC',
            fill: false
        }, {
            label: 'Linear Least Squares Regression Line of Growth in % Undergraduate UCLA Hispanic Students',
            data: [13.05194805, 13.46103896, 13.87012987, 14.27922078, 14.68831169, 15.0974026, 15.50649351, 15.91558442, 16.32467532, 16.73376623, 17.14285714, 17.55194805, 17.96103896, 18.37012987, 18.77922078, 19.18831169, 19.5974026, 20.00649351, 20.41558442, 20.82467532, 21.23376623],
            lineTension: 0.1,
            borderColor: '#0000CC',
            fill: false
        }, {
            label: 'Predicted Growth in % Undergraduate Hispanic Students at UCLA',
            data: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 21.23376623, 21.64285714, 22.05194805, 22.46103896, 22.87012987, 23.27922078, 23.68831169, 24.0974026, 24.50649351, 24.91558442, 25.32467532, 25.73376623, 26.14285714, 26.55194805, 26.96103896, 27.37012987, 27.77922078, 28.18831169, 28.5974026, 29.00649351, 29.41558442, 29.82467532],
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
                    text: 'Yearly Percentage of Undergraduate Hispanic Students at UCLA'
                },
                scales: {
                    y: {
                        display: true,
                        text: "Percentage of Undergraduate Hispanic Students (%)"
                    },
                    x: {
                        display: true,
                        text: "Year"
                    }
                }
            }
        },
        lineAtIndex: [
            { index: 30, text: ['2029', 'UCLA becomes', 'a HSI'] },
        ],
    }
});