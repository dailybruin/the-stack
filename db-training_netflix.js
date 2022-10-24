const ctx = document.getElementById('ComedyChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2012', '2013', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: '# of Comedies',
            data: [1, 1, 7, 22, 48, 61, 153, 137, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'Brown',
                'Green',
                'Teal'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'Brown',
                'Maroon',
                'Teal'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});