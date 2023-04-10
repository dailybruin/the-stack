const ctx1 = document.getElementById('awardspie');

const data1 = {
  labels: [
    'General',
    'Medical/health sciences',
    'STEM',
    'Humanities',
    'Letters and science',
    'Higher education',
  ],
  datasets: [
    {
      label: 'Total funding 2018-2022',
      data: [
        {
          group: 'General',
          amount: 163052484,
        },
        {
          group: 'Medical/Health Sciences',
          amount: 4337242811,
        },
        {
          group: 'STEM',
          amount: 1386346505,
        },
        {
          group: 'Humanities',
          amount: 274355868,
        },
        {
          group: 'Letters & Science',
          amount: 945147472,
        },
        {
          group: 'Higher Education',
          amount: 44144654,
        },
      ],
      backgroundColor: [
        'rgba(247, 138, 24, 0.8)',
        'rgba(50, 132, 191, 0.8)',
        'rgba(173, 216, 230, 0.8)',
        'rgba(247, 201, 25, 0.8)',
        'rgba(0, 175, 180, 0.8)',
        'rgba(179, 163, 105, 0.8)',
      ],
      hoverOffset: 4,
    },
  ],
};
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
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: $${context.formattedValue}`;
          },
        },
      },
      title: {
        display: true,
        text: 'Award dollars by year',
      },
      maintainAspectRatio: false,
    },
  },
});

const year = document.getElementById('year');
year.addEventListener('change', changeyear);
function changeyear() {
  const label = year.options[year.selectedIndex].text;
  awardspie.data.datasets[0].label = label;
  awardspie.data.datasets[0].data = year.value.split(',');
  awardspie.update();
}
changeyear();

if (window.matchMedia('(min-width: 480px)').matches) {
  awardspie.canvas.style = 'max-height:400px';
  awardspie.options.maintainAspectRatio = false;
  awardspie.update();
}
