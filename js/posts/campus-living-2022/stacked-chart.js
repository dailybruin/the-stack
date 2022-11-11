const ctx = document.getElementById('stacked-chart');
const data = {
        labels: ['On Campus', 'University Apartments', 'Non-University Apartments (Westwood)'],
        datasets: [{
            label: 'Room/Rent',
            backgroundColor: "#004582",
            data:[11697,12492,14587]
                //{x:0, y:17866, room: '$11,697', food: '$5534', trans: '$635', utilities: 'n/a'},
                //{x:1, y:17304, room: '$12,492', food: '$3732', trans: '$1080', utilities: 'n/a'},
                //{x:2, y:20638, room: '$14,587', food: '$3732', trans: '$1080', utilities: '$1284'}
            },
            {
                label: 'Food',
                backgroundColor: "#3772a0",
                data: [5534,3732,3732],

            },
            {
                label: 'Transportation',
                backgroundColor: "#a7bfd4",
                data: [635,1080,1080],
            },
            {
                label: 'Utilities',
                backgroundColor: "#D3D3D3",
                data: ['n/a','n/a',1284],
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
                    text: 'Estimated Living Costs'
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