const { ChartLabel } = require("react-vis");

let ctx = document.getElementById('Grant-Chart');

var Grant_Chart = new Chart(ctx, {
    const data = {
        labels: ['Berkeley', 'Santa Barbara', 'Santa Cruz', 'Los Angeles'],
        datasets: [{
            label: 'Dataset 1',
            data: [.2, .4, .1, .3],
            backgroundColor: Object.values(Utils.CHART_COLORS),
        }]
    };
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            reponsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Donation Data'
                }
            }
        },
    };
})