const ctx = document.getElementById('stacked-chart');
const data = {
        labels: ['On-campus dorms', 'University apartments', 'Non-university apartments'],
        datasets: [{
                label: 'Room/rent',
                backgroundColor: "#126CBD",
                data:[13080, 10472, 9594]
            },
            {
                label: 'Food',
                backgroundColor: "#E67A01",
                data: [5850, 2789, 2789],

            },
            {
                label: 'Transportation',
                backgroundColor: "#FFCB05",
                data: [635, 1080, 1080],
            },
            {
                label: 'Utilities',
                backgroundColor: "#AFAFAF",
                data: [0, 0, 963],
                    
            }


    
        ]
    
    };
const config = {
    type: 'bar',
    data,
    options: { //All of your options should be between this bracket and...
            plugins: {
                title: {
                    display: true,
                    text: 'Total Estimated Living Costs',
                    fontSize: 19,
                },
                tooltip:{
                    callbacks: {
                        label: function(tooltipItem, data) {
                            return `$${tooltipItem.formattedValue}`
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
                }
            } ,
            responsive: true,
        } //this bracket
    };
// render init block
const myChart = new Chart(
    document.getElementById('stacked-chart'),
    config
  );