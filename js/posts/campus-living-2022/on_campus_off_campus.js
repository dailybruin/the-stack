const ctx = document.getElementById('campusData');
const campusData = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011',
    '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '% of All Students on campus',
            data: [40, 40, 40, 39, 36, 48, 35, 39, 43, 45, 47, 48, 48, 48, 48],
            //borderColor: 'rgb(54, 162, 235)',
            backgroundColor: '#00498D'
        }],
    },
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return `${tooltipItem.label}: ${tooltipItem.formattedValue}%`
                    },
                },
            },
        },
        scales: {
          y: {
            ticks: {
                callback: function(value, index, ticks) {
                    return value + '%';
            },
            beginAtZero: true
            }
          }
    }
    }
});
    const studentType = document.getElementById('studentType');
    studentType.addEventListener('change', selectChart)
    function selectChart() {
        campusData.data.datasets[0].label = studentType.options[studentType.selectedIndex].text;
        campusData.data.datasets[0].data = studentType.value.split(',');
        campusData.update();
    }