const ctxt = document.getElementById('FAlocations');
const FAlocations = new Chart(ctxt, {
  type: 'bar',
  data: {
    labels: [
      'Ronald Reagan Medical Center',
      'Center for Health Sciences',
      'Medical Plaza 200 Building',
      'Boelter Hall',
      'Hedrick Hall',
      'Young Hall',
      'Franz Hall',
      'School of Dentistry',
      'Biomedical Science Building',
      'School of Public Health',
    ],
    datasets: [
      {
        label: '# of Fire Alarms',
        data: [165, 109, 104, 74, 62, 55, 55, 48, 47, 42],
        backgroundColor: [
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
        ],
        borderColor: [
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
          'rgba(255, 132, 17, .8)',
        ],
        borderWidth: 1.5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        onClick: null,
      },
    },
  },
});
if (window.matchMedia('(max-width: 480px)').matches) {
  FAlocations.data.labels = [
    'RRMC',
    'CHS',
    'MP200',
    'Boelter',
    'Hedrick',
    'Young',
    'Franz',
    'Dentistry',
    'BMSB',
    'SPH',
  ];
  FAlocations.update();
}
