const ctx1 = document.getElementById('awardspie');

const data1 = {
    labels: [
        'General',
        'Medical/Health Sciences',
        'STEM',
        'Humanities',
        'Letters & Science',
        'Higher Education'
    ],
    datasets: [
        {
            label: 'Total Funding 2018-2022', 
            data: [
                {
                    group: 'General', amount: 163052484
                },
                {
                    group: 'Medical/Health Sciences', amount: 4337242811
                },
                {
                    group: 'STEM', amount: 1386346505
                },
                {
                    group: 'Humanities', amount: 274355868
                },
                {
                    group: 'Letters & Science', amount: 945147472
                },
                {
                    group: 'Higher Education', amount:44144654
                }
            ],
            backgroundColor: [
                'rgba(247, 138, 24, 0.8)',
                'rgba(50, 132, 191, 0.8)',
                'rgba(173, 216, 230, 0.8)',
                'rgba(247, 201, 25, 0.8)',
                'rgba(0, 145, 179, 0.8)',
                'rgba(179, 163, 105, 0.8)'
            ],
            hoverOffset:4
        }
    ]

}
const awardspie = new Chart(ctx1, {
    type: 'pie',
    data: data1,
    options: {
        plugins: {
            datalables: {
                display: true,
                align: 'bottom',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderRadius: 3,
                font: {
                    size: 25,
                },
            },
            title: {
                display: true,
                text: "Award Dollars by Year"
            },
        },
        maintainAspectRatio: false,
    }
 });

const year = document.getElementById('year');
year.addEventListener('change', changeyear);
function changeyear(){
    const label = year.options[year.selectedIndex].text
    awardspie.data.datasets[0].label = label;
    awardspie.data.datasets[0].data = year.value.split(',');
    awardspie.update();
}
changeyear();
// function makeChart(){
//     const label = year.options[year.selectedIndex].text
//     awardspie.data.datasets[0].label = label;
//     awardspie.data.datasets[0].data = year.value.split(',');
//     awardspie.update();
// }
// makeChart()
