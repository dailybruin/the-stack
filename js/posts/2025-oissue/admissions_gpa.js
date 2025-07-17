Chart.defaults.font.family = 'PT Sans';

const baseline = 4.24;

const labels = ['Tulare', 'Imperial', 'San Joaquin', 'Placer', 'San Francisco', 'Los Angeles', 'Humboldt', 'Merced', 'Riverside', 'Butte', 'San Bernardino', 'Contra Costa', 'Alameda', 'Orange', 'Marin', 'Sacramento', 'Napa', 'Kern', 'Santa Clara', 'Fresno', 'Ventura', 'Santa Cruz', 'Santa Barbara', 'San Diego', 'Monterey', 'San Mateo', 'Stanislaus', 'Yolo', 'Solano', 'San Luis Obispo', 'Sonoma', 'El Dorado'];

const rawData = [4.115, 4.2, 4.20333333333333, 4.206, 4.21111111111111, 4.21633165829146, 4.22, 4.225, 4.22676470588235, 4.23, 4.24066666666667, 4.24176470588235, 4.24333333333333, 4.245625, 4.246, 4.24666666666667, 4.2475, 4.24833333333333, 4.251875, 4.25375, 4.254, 4.26, 4.26125, 4.26166666666667, 4.265, 4.26928571428571, 4.28, 4.29, 4.29333333333333, 4.295, 4.295, 4.3];

const adjustedData = rawData.map(val => val - baseline);

const data = {
  labels: labels,
  datasets: [{
    label: 'GPA Difference from Average',
    data: adjustedData,
    backgroundColor: adjustedData.map(v => v >= 0 ? 'rgba(75, 192, 192, 0.7)' : 'rgba(255, 99, 132, 0.7)'),
    borderColor: adjustedData.map(v => v >= 0 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'),
    borderWidth: 1
  }]
};

const options = {
  plugins: {
    tooltip: {
      callbacks: {
        label: function(context) {
          const actualGPA = (context.raw + baseline).toFixed(3);
          return `Admitted GPA: ${actualGPA}`;
        }
      }
    },
    title: {
        display: true,
        text: 'Admitted GPA by County',
        font: {
            size: 20,
        },
    },
    subtitle: {
        display: true,
        text: 'The average weighted GPA for first-year in-state admits is 4.24.',
        font: {
            size: 15,
        },
        padding: {
            bottom: 20,
        }
    },
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: false,
      min: -0.15,
      max: 0.15,
      position: 'right',
      ticks: {
        callback: function(value) {
          return (value).toFixed(2);
        }
      },
      title: {
        display: true,
        text: 'Difference from Average Admitted GPA'
      },
      grid: {
        drawBorder: true,
        color: 'rgba(0,0,0,0.1)'
      }
    },
    y1: {
      beginAtZero: false,
      min: 4.09,  // 4.24 - 0.2
      max: 4.39,  // 4.24 + 0.1
      position: 'left',
      ticks: {
        callback: function(value) {
          return value.toFixed(2);
        }
      },
      title: {
        display: true,
        text: 'Admitted GPA'
      },
      grid: {
        drawOnChartArea: false
      }
    },
    x: {
      ticks: {
        autoSkip: false,
        maxRotation: 45,
        minRotation: 45
      }
    }
  }
};

const ctxBAR = document.getElementById('admissions_gpa_bar');
const chart = new Chart(ctxBAR, {
  type: 'bar',
  data: data,
  options: options
});
