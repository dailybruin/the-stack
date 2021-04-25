let ctx = document.getElementById('grad-rate-line');
//var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(100, 25, 142)',
            borderColor: 'rgb(255, 100, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    // Configuration options go here
    options: {}
});
