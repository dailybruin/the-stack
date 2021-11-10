console.log('loaded demographic charges chart')
d3.csv('/datasets/ucpd-budget-arrests/ucla-pd-budget.csv').then(makeChargesChart);
function makeChargesChart(csvData) {
  //console.log(csvData);
  //const DemoChargeslabels = ['January', 'February','March','April','May','June'];
    let DemoChargesdata = {
    labels: [
        'FY 12-13',
        'FY 13-14',
        'FY 14-15',
        ' FY 15-16',
        'FY 16-17',
        'FY 17-18',
        'FY 18-19',
        'FY 19-20 (Approved but not actual)',
    ],
    datasets: [],
    };

    let colors = [
    '#374c80',
    '#7a5195',
    '#bc5090',
    '#ef5675',
    '#ff764a',
    '#ffa600',
    'green',
    'blue',
    ];

    for (let i = 4; i < 12; i++) {
    DemoChargesdata.datasets.push({
        label: csvData[i].Category,
        data: Object.values(csvData[i]).slice(1),
        backgroundColor: colors[i - 4],
        borderColor: colors[i - 4],
    });
    }


    let ctxDemographicCharges = document.getElementById('demographic_charges');
    let Demographic_Charges = new Chart(ctxDemographicCharges, {
    type: 'horizontalBar',
    data: DemoChargesdata,
    options: {
        indexAxis: 'y',
        scales: {
            xAxes: [
                {
                    stacked: true,
                },
            ],
            yAxes: [
                {
                    stacked: true,
                },
            ],
            },
    },
    });
}
