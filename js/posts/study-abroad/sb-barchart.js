Chart.defaults.font.size = 15;
Chart.defaults.font.family = 'PT Sans'
Chart.defaults.color = '#000';
const ctx = document.getElementById('studyAbroadData');
const studyAbroadData = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: ['2009-10','2010-11','2011-12','2012-13','2013-14','2014-15','2015-16',
        	'2016-17','2017-18','2018-19','2019-20','2020-21','2021-22'],
        datasets: [{
            label: 'Number of Study Abroad Students',
            data: [597,	596, 527, 562,743,986,1089,1041,1205,1266,464,754,624],
            //borderColor: 'rgb(54, 162, 235)'
            backgroundColor: '#feca1f'
        }],
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'How many students are studying abroad each year?',
                font: {
                    size: 22
                },
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return `${tooltipItem.label}: ${tooltipItem.formattedValue}`
                    },
                },
            },
        },
        scales: {
          y: {
            ticks: {
                callback: function(value, index, ticks) {
                    return value;
            },
            beginAtZero: true
            }
          }
    }
    }
});
    const Program = document.getElementById('Program');
    Program.addEventListener('change', selectChart)
    function selectChart() {
        studyAbroadData.data.datasets[0].label = Program.options[Program.selectedIndex].text;
        studyAbroadData.data.datasets[0].data = Program.value.split(',');
        studyAbroadData.update();
    }


if (window.matchMedia('(max-width: 480px)').matches) {
    studyAbroadData.canvas.style = 'max-height:350px';
    studyAbroadData.options.maintainAspectRatio = false;
    studyAbroadData.update();
    }