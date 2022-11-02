//const council_labels = ['2016-17','2017-18','2018-19','2019-20','2020-21','2021-22']

const data = {
    labels: labels,
    datasets:[
        {
            label: 'Asian Greek Council',
            data: [10,20,30,40,50,60]
        }
    ]
};

const council_ctx = document.getElementById('council-chart').getContext('2d');
const stackedBar = new Chart(council_ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }
});