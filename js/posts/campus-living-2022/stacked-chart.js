Chart.defaults.font.size = 15;
Chart.defaults.font.family = 'Lato'
Chart.defaults.color = '#000';

const ctxStacked = document.getElementById('stacked-chart');
const dataStacked = {

        labels: ['On-campus dorms', 'University apartments', 'Non-university apartments'],
        datasets: [{
                label: 'Room/rent',
                backgroundColor: "#94D8FB",
                data:[13080, 10472, 9594]
            },
            {
                label: 'Food',
                backgroundColor: "#4B8BD0",
                data: [5850, 2789, 2789],

            },
            {
                label: 'Transportation',
                backgroundColor: "#ACDE7E",
                data: [635, 1080, 1080],
            },
            {
                label: 'Utilities',
                backgroundColor: "#FFDF16",
                data: [0, 0, 963],
                    
            }


    
        ]
    
    };
const config = {
    type: 'bar',
    data: dataStacked,
    options: { //All of your options should be between this bracket and...
            plugins: {
                title: {
                    display: true,
                    text: 'Total estimated yearly living costs',
                    font: {
                        size: 22
                    },
                },
                tooltip:{
                    callbacks: {
                        label: function(tooltipItem, data) {
                            return `${tooltipItem.dataset.label}: $${tooltipItem.formattedValue}`
                        },
                    },
                },
            },                
            scales: {
                x: {
                 stacked: true,
                },    
                y: {
                    stacked: true,
                    ticks: {
                        callback: function(value, index, ticks) {
                            return '$' + value;
                    },
                },
            },
            responsive: true,
        } //this bracket
    }
}
// render init block
const myChart = new Chart(
    ctxStacked,
    config
  );