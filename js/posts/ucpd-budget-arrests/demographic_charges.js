console.log('loaded demographic charges chart')
d3.csv('/datasets/ucpd-budget-arrests/charge_category_race.csv').then(makeChargesChart);
let demographic_charges;
function makeChargesChart(csvData) {
  //console.log(csvData);
  //const DemoChargeslabels = ['January', 'February','March','April','May','June'];
    let DemoChargesdata = {
    labels: [
        'CA Regs: Violate Curfew',
        'Driving Invalid License',
        'Fail to Appear After Written Promise',
        'False Identification to Specific Peace Officers',
        'Obstruct/Resist',
        'Outside Agency Infraction Warrant',
        'Threat',
        'Trespass',
        'UCPD Misdemeanor Bench Warrant',
        'Vandalism'
    ],
    datasets: [],
    };

    let colors = [
        '#FF8311',
        '#2A3C6A',
        '#A1C7F3',
        '#FFBA35',
        '#835FA8',
        '#EB548C',
    ];

    for (let i = 0; i < 6; i++) {
    DemoChargesdata.datasets.push({
        label: csvData[i].Race,
        data: Object.values(csvData[i]).slice(1),
        backgroundColor: colors[i],
        borderColor: colors[i],
    });
    }


    let ctxDemographicCharges = document.getElementById('demographic_charges').getContext('2d');
    demographic_charges = new Chart(ctxDemographicCharges, {
    type: 'horizontalBar',
    data: DemoChargesdata,
    options: {
        indexAxis: 'y',
        scales: {
            xAxes: [
                {
                    stacked: true,
                    scaleLabel:{
                        display: true,
                        labelString: 'Arrests',
                    },
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

    if (window.matchMedia('(max-width: 480px)').matches) {
        demographic_charges.canvas.style = 'min-height : 400px';
        demographic_charges.options.maintainAspectRatio = false;
        demographic_charges.update();
    }
}


