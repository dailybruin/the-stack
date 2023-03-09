
const labels = ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];

const data = {
    labels: labels,
    datasets: [
        {
            label: "Postdoc Wage Minimum", 
            data: [39264, 42000, 42840, 42840, 48216, 49188, 50760, 53460, 54540],
            backgroundColor: 'rgb(50,85,150)', 
            borderWidth: 1
        },
        {
            label: 'Average Postdoc Wages',
            data: [47778.46472, 50395.91189, 51115.42442, 51687.42907, 55372.02317, 57087.68905, 59458.59246, 61578.49631, 62772.13265],
            backgroundColor: 'rgb(100,149,237)', 
            borderWidth: 1
        },
    ]
};

const options = {
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                callback: function(value, index, ticks) {
                    return '$' + Chart.Ticks.formatters.numeric.apply(this, [value, index, ticks])
                },
                xAxis: {
                  type: 'time',
                },
            },
            title: {
                display: true,
                text: 'Average Wage Amount',
                padding: 15
            }
        },
        x: {
            title: {
                display: true,
                text: 'Year', 
                padding: 15
            }
        }
    },
    plugins: {
        title: {
            display: true,
            text: 'Average Postdoc Wages Over Time'
          },
          tooltip: {
            callbacks: {
              title: function(context) {
                console.log(context[0].label);
                return `Year: ${context[0].label}`;
              },
                label: function(context) {
                    let label = context.dataset.label || '';
    
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                    }
                    return label;
                }
            }
        }
      },
};

const wage_bar= document.getElementById('Wage_Chart');

const chart = new Chart(wage_bar, {
    type: 'bar',
    data: data,
    options: options
});