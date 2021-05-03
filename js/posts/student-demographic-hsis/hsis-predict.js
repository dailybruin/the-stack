let years = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040', '2041']

var data = {
    labels: years,
    datasets: [{
        label: 'Current Yearly Growth in % Hispanic Students at UCLA',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#0066CC',
        borderColor: '#0066CC',
        data: [12., 12., 13., 13., 13., 13., 13., 13., 13., 13., 13., 14., 15.,15., 16., 17., 18., 18., 18., 18., 18.],
    }, {
        label: 'Current Average Growth in % Hispanic Students at UCLA',
        fill: false,
        borderColor: '#0000CC',
        lineTension: 0.1,
        data: [11.26406926, 11.604329  , 11.94458874, 12.28484848, 12.62510823, 12.96536797, 13.30562771, 13.64588745, 13.98614719, 14.32640693, 14.66666667, 15.00692641, 15.34718615, 15.68744589, 16.02770563, 16.36796537, 16.70822511, 17.04848485, 17.38874459, 17.72900433, 18.06926407],
    }, {
        label: 'Predicted Growth in % Hispanic Students at UCLA',
        fill: false,
        borderColor: '#6600CC',
        borderDash: [5,5],
        lineTension: 0.1,
        data: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 18.06926407, 18.40952381, 18.74978355, 19.09004329, 19.43030303, 19.77056277, 20.11082251, 20.45108225, 20.79134199, 21.13160173, 21.47186147, 21.81212121, 22.15238095, 22.49264069, 22.83290043, 23.17316017, 23.51341991, 23.85367965, 24.19393939, 24.53419913, 24.87445887, 25.21471861],
    }, {
        label: 'Minimum % Threshold of Hispanic Students Needed for HSI = 25%',
        fill: false,
        borderColor: '#FF0000',
        lineTension: 0.1,
        data: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
    }]
};

var options = {
    title: {
        display: true,
        text: "Yearly Percentage of Hispanic/Latino(a) Students",
    }, 
    scales: {
        yAxes: {
            display: true, 
            labelString: 'Difference between White Graduation Rate and Hispanic Graduation Rate'
        },
        xAxes: {
            display: true,
            labelString: "Year"
        }
    },
};


var ctx = document.getElementById("LineWithLine").getContext("2d");

Chart.types.Line.extend({
    name: "LineWithLine",
    draw: function () {
        Chart.types.Line.prototype.draw.apply(this, arguments);

        var point = this.datasets[0].points[this.options.lineAtIndex]
        var scale = this.scale

        // draw line
        this.chart.ctx.beginPath();
        this.chart.ctx.moveTo(point.x, scale.startPoint + 24);
        this.chart.ctx.strokeStyle = '#000000';
        this.chart.ctx.lineTo(point.x, scale.endPoint);
        this.chart.ctx.stroke();

        // write TODAY
        this.chart.ctx.textAlign = 'center';
        this.chart.ctx.fillText("UCLA becomes HSI", point.x, scale.startPoint + 12);
    }
});

new Chart(ctx).LineWithLine(data, {
    datasetFill : false,
    lineAtIndex: 41
});