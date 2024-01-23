const ctxt = document.getElementById('yearGraph');
const yearGraph = new Chart(ctxt, {
  type: 'bar',
  data: {
    labels: [
      'Class of 25', 'Class of 26', 'Class of 27'
    ],
    datasets: [
      {
        label: '# of Posts Made',
        data: [64, 162, 159],
        backgroundColor: [
          '#AED6F1','#AED6F1','#AED6F1','#AED6F1',
        ],
        borderColor: [
          '#AED6F1','#AED6F1','#AED6F1','#AED6F1',
        ],
        borderWidth: 1.5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
            display: true,
            text: 'Number of Posts',
          },
      },
    },
    plugins: {
      legend: {
        display: true,
        onClick: null,
        title: {
            display: true,
            text: 'Snapchat Requests by Class Year',
          },
      },
    },
  },
});
