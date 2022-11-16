const ctx = document.getElementById('myChart');

const labels = ['2017', '2018', '2019', '2020', '2021']
const data = {
    labels: labels,
    datasets: [
        {
            label: 'State Educational Appropriations',
            data: [511, 448, 493, 536, 454],
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            stack: 'Stack 0',
        },
        {
            label: 'Government Grants & Contracts',
            data: [707, 743, 773, 803, 893],
            backgroundColor: 'rgba(43, 60, 249, 0.33)',
            stack: 'Stack 0',
        },
        {
            label: 'Private Gifts',
            data: [308, 379, 367, 365, 405],
            backgroundColor: 'rgba(249, 206, 43, 0.81)',
            stack: 'Stack 1',
        },
        {
            label: 'Private Industry Grants & Contracts',
            data: [241, 273, 276, 277, 295],
            backgroundColor: 'rgba(249, 206, 43, 0.5)',
            stack: 'Stack 1',
        },
    ]

}
const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        plugins:{
            title:{
                display:true,
                text: 'Private and Public Revenue (2017 - 2021)'
            }
        },
        responsive: true,
        scales: {
            x: {
                ticks: {
                    callback: function(value, index, ticks) {
                        return '$' + value;
                    }
                },
                stacked: true,
                title: {
                    display: true,
                    text: "Revenue",
                    padding: 30,
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Year",
                    padding: 30,
                },
                beginAtZero: true,
                stacked: true,
            }
        },
        layout: {
            padding: 100
        },
        indexAxis: 'y'
    }
});



console.log("Print this")