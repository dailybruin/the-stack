Chart.defaults.font.family = 'Noto Serif, serif'
const labels = ['Social Sciences','Life Sciences','Physical Sciences','Engineering','Humanities','Other'];
const colors = ['#fff9a3', '#b5fec7','#a5bffc', '#fb8c85', '#d0adfb', '#d9d9d9']
const data = {
  datasets: [
    {
      data: [
        { x: labels[0], y: 33578 },
        { x: labels[1], y: 22248 },
        { x: labels[2], y: 12116 },
        { x: labels[3], y: 12103 },
        { x: labels[4], y: 6480 },
        { x: labels[5], y: 4114 }
      ],
      backgroundColor: [colors[0], colors[1], colors[2], colors[3], colors[4], colors[5], colors[6]]
    },
  ]
};

const options = {
  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Major category'
      }
    },
    y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of graduates'
        }
      }
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  }
}

const ctxBAR = document.getElementById('category-graduates');
const chart = new Chart(ctxBAR, {
    type: 'bar',
    data: data,
    options: options
  });