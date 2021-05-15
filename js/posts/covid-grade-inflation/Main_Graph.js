//This is the basic code for the chart. We can then grab the data for each class using
//similar code to the class fill-ups article and make the data that information for each class. 
//If we want to be able to show more than one class at a time, we can work on that. 

//Creating the bar graphs to show grade inflation
const labels = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
const data = {
    labels: labels,
    datasets: [{
        label: 'Grades During Online Learning',
        data: [65, 59, 12, 150, 98, 14, 18, 23, 10, 8, 5, 13, 8],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
            'rgb(255, 99, 132)',
        ],
        borderWidth: 1,
        index: 1
    }, {
        label: 'Grades During On-Campus Learning',
        data: [80, 56, 43, 100, 25, 12, 25, 100, 10, 8, 5, 12, 32],
        backgroundColor: [
            'red',
        ],
        borderColor: [
            'pink',
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