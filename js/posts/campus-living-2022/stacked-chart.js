const ctx = document.getElementById('stacked-chart');
const data = {
        labels: ['On Campus', 'University Apartments', 'Non-University Apartments (Westwood)'],
        datasets: [{
            label: 'Room/Rent',
            backgroundColor: "#126CBD",
            data:[13080,10472,9594]
            },
            {
                label: 'Food',
                backgroundColor: "#E67A01",
                data: [5850,2789,2789],

            },
            {
                label: 'Transportation',
                backgroundColor: "#FFCB05",
                data: [635,1080,1080],
            },
            {
                label: 'Utilities',
                backgroundColor: "#AFAFAF",
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