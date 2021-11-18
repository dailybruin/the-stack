//console.log('loaded chart')
const Budget=[13680147, 14223655, 15499349, 16281145, 16754687, 17355103, 20258656, 22375818];
const Stops=[103, 356, 389, 316, 250, 289, 276, 199];
const Arrests=[101, 309, 381, 416, 418, 481, 467, 665];
const Budget_Normalized=[136.80147, 142.23655, 154.99349, 162.81145, 167.54687, 173.55103, 202.58656, 223.75818];
const data_order = [Budget, Budget_Normalized, Arrests, Stops];
const colors = ['#FF8311', '#FF8311','#2A3C6A','#A1C7F3']
const labels = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019'
    ];
const lines = ['Budget','Budget in $100,000','Arrests','Stops'];


const options0 = {
    scales: {
        yAxes: [
            {
            ticks: {
                callback: function(value) {
                    return value.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                    }); // convert value to dollar format
                },
            min: 0,
            //max: 25000,
            //stepSize: 5000,
            },
            scaleLabel:{
                display: true,
                labelString: 'Dollars'
            },
            yAxisID: 'y'
        },
        ],
        xAxes: [
        {
            scaleLabel: {
            display: true,
            labelString: 'Year',
            },
        },
        ],
    },
    tooltips: {
        callbacks: {
            label: function(tooltipItem, data) {
            let value = tooltipItem.yLabel.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 2,
            });
            let label = data.datasets[tooltipItem.datasetIndex].label;
            return label + ': ' + value;
            },
        },
    },
}

const options1 ={
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis'
        }
        },
    scales: {
        yAxes: [{
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
                callback: function(value) {
                    return value.toLocaleString('en-US', {
                        style: 'decimal',
                        minimumFractionDigits: 0,
                    }); // convert value to dollar format
                },
                min: 0,
                max: 700,
                stepSize: 100,
            },
            scaleLabel:{
                display: true,
                labelString: 'Number of Arrests/Stops'
            },
            yAxisID: 'y',
            id:'y'
            },
        {
            type: 'linear',
            display: true,
            position: 'right',
    
            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
            ticks: {
                callback: function(value) {
                    return value.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                    }); // convert value to dollar format
                },
                min: 0,
                max: 70000000,
                stepSize: 10000000,
            },
            scaleLabel:{
                display: true,
                labelString: 'Dollars'
            },
            yAxisID: 'y1',
            id:'y1'
        },
    ],
        
        xAxes: [
        {
            scaleLabel: {
            display: true,
            labelString: 'Year',
            },
        },
        ],
    },
    tooltips: {
        callbacks: {
            label: function(tooltipItem, data) {
                if (data.datasets[tooltipItem.datasetIndex].label === 'Budget in $100,000'){ 
                    let val = tooltipItem.yLabel * 100000;
                    let value = val.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 2,
                    });
                    let label = 'Budget:';
                    return label + ' ' + value;
                }
                else {
                    let value = tooltipItem.yLabel.toLocaleString('en-US', {
                        style: 'decimal',
                        maximumFractionDigits: 0,
                    });
                    let label = data.datasets[tooltipItem.datasetIndex].label;
                    return label + ': ' + value;
                }
        },
    },
}
}


//const data = {}

const data = {
    labels: labels,
    datasets: []
};

function addData(i) {
    const info = {
        label: lines[i],
        tension: 0,
        fill: false,
        borderColor: colors[i],
        data: data_order[i],
        //yAxisID: 'y'
        }
    // ++step_number;
    data.datasets.push(info);
    console.log(data)
    myChart.update();
}

function changeOptions(i){
    if (i===0){
        console.log('options0')
        myChart.options = options0;
        //myChart.update()
    }
    else {
        console.log('options1')
        myChart.options = options1;
        //myChart.update()
    }
    myChart.update()
}

function removeData(){
    // -- step_number;
    data.datasets.pop();
}

function ChangeBar(){
    document.getElementById('myChart').id = 'stacked_bar'
    d3.csv('/datasets/ucpd-budget-arrests/ucla-pd-budget.csv').then(makeChart);
}

function ChangeLine(){
    document.getElementById('stacked_bar').id = 'myChart';
    StackedBar.destroy();
    myChart.update();
}
let myChart;
function makeBudgetArrests()
    {
        let ctx = document.getElementById('myChart');
        myChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options0
            }
    );

    if (window.matchMedia('(max-width: 480px)').matches) {
        myChart.canvas.style = 'max-height:500px';
        myChart.options.maintainAspectRatio = false;
        myChart.update();
        }
}

