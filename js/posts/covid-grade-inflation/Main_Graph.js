//Creating the bar graphs to show grade inflation
const labels = ['1', '2', '3'];
const data = {
    labels: labels,
    datasets: [{
        label: 'COVID Grades',
        data: [65, 59],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
        ],
        borderWidth: 1,
        index: 1
    }, {
        label: 'Other Grades',
        data: [80, 56],
        backgroundColor: [
            'red',
            'pink'
        ],
        borderColor: [
            'pink',
            'red'
        ],
        index: 2,
    }]
};

var ctxMain = document.getElementById('main-chart')//.getContext('2d');
var MainChart = new Chart(ctxMain, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
});