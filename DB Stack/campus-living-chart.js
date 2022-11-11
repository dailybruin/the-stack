const ctx = document.getElementById('campus-living-chart');
const data = {
        labels: ['On Campus', 'University Apartments', 'Non-University Apartments (Westwood)'],
        datasets: [{
            label: 'Total Estimated Living Costs ($)',
            data:[
                
                {x:0, y:17866, room: '$11,697', food: '$5534', trans: '$635', utilities: 'n/a'},
                {x:1, y:17304, room: '$12,492', food: '$3732', trans: '$1080', utilities: 'n/a'},
                {x:2, y:20638, room: '$14,587', food: '$3732', trans: '$1080', utilities: '$1284'}
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    
    };
const config = {
    type: 'bar',
    data,
    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true 
            }
        },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            console.log(context.raw)
                            return [`${context.label}`, `Value: $${context.raw.y}`, `Room/Rent: ${context.raw.room}`, `Food: ${context.raw.food}`, `Transporation: ${context.raw.trans}`, `Utilities: ${context.raw.utilities}`];
                        }
                    }
                },
        },
        scales: {
            
            y: {
                beginAtZero: true
            }
        }
    }
};
// render init block
const myChart = new Chart(
    document.getElementById('campus-living-chart'),
    config
  );
  //make a stacked bar chart