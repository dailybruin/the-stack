const ctx = document.getElementById('myChart');

const labels = ['2017', '2018', '2019', '2020', '2021']

const data = {
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
                'rgba(49, 185, 241, 0.8)',
                'rgba(24, 161, 35, 0.8)',
                'rgba(247, 201, 25, 0.8)',
                'rgba(49, 117, 241, 0.8)',
                'rgba(47, 59, 249, 0.8)'
            ],
            hoverOffset:4
        }
    ]

}
const myChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
        plugins: {
            datalables: {
                display: true,
                align: 'bottom',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderRadius: 3,
                font: {
                    size: 20,
                },
            },
            title: {
                display: true,
                text: "Award Data by Year"
            },
        }
    }
 });

const year = document.getElementById('year');
year.addEventListener('click', changeyear);
function changeyear(){
    const label = year.options[year.selectedIndex].text
    myChart.data.datasets[0].label = label;
    myChart.data.datasets[0].data = year.value.split(',');
    myChart.update();
}

