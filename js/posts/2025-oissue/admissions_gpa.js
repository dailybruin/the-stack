Chart.defaults.font.family = 'PT Sans';

const average_gpa = 4.24;
const admitted_gpa = [4.115, 4.2, 4.20333333333333, 4.206, 4.21111111111111, 4.21633165829146, 4.22, 4.225, 4.22676470588235, 4.23, 4.24066666666667, 4.24176470588235, 4.24333333333333, 4.245625, 4.246, 4.24666666666667, 4.2475, 4.24833333333333, 4.251875, 4.25375, 4.254, 4.26, 4.26125, 4.26166666666667, 4.265, 4.26928571428571, 4.28, 4.29, 4.29333333333333, 4.295, 4.295, 4.3];
const applied_gpa = [3.87, 3.915, 3.86333333333333, 4.034, 3.94555555555556, 3.84316582914573, 4.17, 3.965, 3.85823529411765, 4.09, 3.815, 3.96529411764706, 3.96037037037037, 3.91796875, 4.016, 3.968, 3.9675, 3.88, 4.0040625, 3.93625, 3.96266666666667, 4.026, 3.90875, 3.97729166666667, 3.9575, 4.02071428571429, 3.99, 4.08, 3.98, 4.09, 3.975, 3.98];
const labels = ['Tulare', 'Imperial', 'San Joaquin', 'Placer', 'San Francisco', 'Los Angeles', 'Humboldt', 'Merced', 'Riverside', 'Butte', 'San Bernardino', 'Contra Costa', 'Alameda', 'Orange', 'Marin', 'Sacramento', 'Napa', 'Kern', 'Santa Clara', 'Fresno', 'Ventura', 'Santa Cruz', 'Santa Barbara', 'San Diego', 'Monterey', 'San Mateo', 'Stanislaus', 'Yolo', 'Solano', 'San Luis Obispo', 'Sonoma', 'El Dorado'];

const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Applied GPA',
      data: applied_gpa,
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: admitted_gpa.map(gpa => gpa > average_gpa
        ? 'rgba(162, 238, 238, 1)'
        : 'rgba(255, 206, 217, 1)'),
      pointRadius: 5,
      pointHoverRadius: 7,
      pointStyle: 'circle',
      fill: false,
      tension: 0
    },
    {
      type: 'bar',
      label: 'Admitted GPA',
      data: admitted_gpa,
      backgroundColor: admitted_gpa.map(gpa => gpa > average_gpa
        ? 'rgba(75, 192, 192, 1)'
        : 'rgba(255, 99, 132, 1)'),
      borderWidth: 1
    }
  ]
};

const options = {
  responsive: true,
  scales: {
    y: { 
      beginAtZero: false, 
      min: 3.70,
      max: 4.30,
      title: { display: true, text: 'County\'s Average Admitted GPA' } 
    },
    y1: {
      position: 'right',
      beginAtZero: false,
      min: 3.70 - average_gpa,
      max: 4.30 - average_gpa,
      grid: { drawOnChartArea: false },
      title: { display: true, text: 'Difference from In-State Average Admitted GPA ' },
      ticks: {
        callback: function(value) {
          return value >= 0 ? `+${value.toFixed(3)}` : value.toFixed(3);
        }
      }
    },
    x: { ticks: { maxRotation: 45, minRotation: 45 } }
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        generateLabels: function(chart) {
          return [
            {
              text: "County's average admitted GPA was lower than overall average admitted GPA",
              fillStyle: 'rgba(255, 99, 132, 1)',
              strokeStyle: 'rgba(255, 99, 132, 1)',
              lineWidth: 1
            },
            {
              text: "County's average admitted GPA was higher than overall admitted GPA",
              fillStyle: 'rgba(75, 192, 192, 1)',
              strokeStyle: 'rgba(75, 192, 192, 1)',
              lineWidth: 1
            }
          ];
        }
      }
    },
    tooltip: {
      callbacks: {
        label: ctx => {
          const g = ctx.parsed.y.toFixed(3);
          return ctx.dataset.type === 'bar'
            ? `Admitted GPA: ${g}`
            : `Applied GPA: ${g}`;
        }
      }
    },
    title: {
        display: true,
        text: 'Applied and Admitted GPA by County',
        font: {
          size: 20,
        },
    },
    subtitle: {
        display: true,
        text: ['The average GPA for in-state admitted students was 4.24.', 'Each bar represents the average GPA of admitted students for a county. Each point represents the average GPA of applicants for a county.', 'The average admitted GPA of a county was always higher than the average application GPA of that county.'],
        font: {
          size: 15,
        },
        padding: {
          bottom: 20,
        }
    },
    annotation: {
      annotations: {
        average_gpa: {
          type: 'line',
          yMin: average_gpa,
          yMax: average_gpa,
          borderColor: 'rgba(0, 0, 0, 0.8)',
          borderWidth: 2,
          borderDash: [6, 4],
          label: {
            display: true,
            content: `Avg: ${average_gpa}`,
            position: 'start',
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: '#fff',
            padding: 4
          }
        }
      }
    }
  }
};

const ctxBAR = document.getElementById('admissions_gpa_bar');
const chart = new Chart(ctxBAR, {
  type: 'bar',
  data: data,
  options: options,
  plugins: [Chart.registry.getPlugin('annotation')]
});