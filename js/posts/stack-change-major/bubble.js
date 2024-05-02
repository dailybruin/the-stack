Chart.defaults.font.family = 'Noto Serif, serif'

const data = {
  datasets: [
  {
    label: 'Applied Mathematics',
    data: [{
      x: 64,
      y: 13,
      r: 3.16
    }],
    backgroundColor: '#a5bffc'
  },
  {
    label: 'Biochemistry',
    data: [{
      x: 45,
      y: 144,
      r: 3.43
    }],
    backgroundColor: '#a5bffc'
  },
  {
    label: 'Biology',
    data: [{
      x: 36,
      y: 810,
      r: 3.68
    }],
    backgroundColor: '#b5fec7'
  },
  {
    label: 'Business Economics',
    data: [{
      x: 116,
      y: 1419,
      r: 3.69
    }],
    backgroundColor: '#fff9a3'
  },
  {
    label: 'Cognitive Science',
    data: [{
      x: 98,
      y: 21,
      r: 3.27
    }],
    backgroundColor: '#fff9a3'
  },
  {
    label: 'Computational and Systems Biology',
    data: [{
      x: 10,
      y: 10,
      r: 2.85
    }],
    backgroundColor: '#b5fec7'
  },
  {
    label: 'Computer Science',
    data: [{
      x: 342,
      y: 28,
      r: 3.56
    }],
    backgroundColor: '#fb8c85'
  },
  {
    label: 'Economics',
    data: [{
      x: 852,
      y: 146,
      r: 3.57
    }],
    backgroundColor: '#fff9a3'
  },
  {
    label: 'Human Biology and Society - BS',
    data: [{
      x: 102,
      y: 79,
      r: 3.30
    }],
    backgroundColor: '#b5fec7'
  },
  {
    label: 'Mathematics of Computation',
    data: [{
      x: 13,
      y: 139,
      r: 2.92
    }],
    backgroundColor: '#a5bffc'
  },
  {
    label: 'Microbiology, Immunology, and Molecular Genetics',
    data: [{
      x: 37,
      y: 50,
      r: 3.26
    }],
    backgroundColor: '#b5fec7'
  },
  {
    label: 'Molecular, Cell, and Developmental Biology',
    data: [{
      x: 222,
      y: 78,
      r: 3.46
    }],
    backgroundColor: '#b5fec7'
  },
  {
    label: 'Physiological Science',
    data: [{
      x: 321,
      y: 65,
      r: 3.37
    }],
    backgroundColor: '#b5fec7'
  },
  {
    label: 'Political Science',
    data: [{
      x: 67,
      y: 254,
      r: 3.78
    }],
    backgroundColor: '#fff9a3'
  },
  {
    label: 'Psychobiology',
    data: [{
      x: 622,
      y: 141,
      r: 3.68
    }],
    backgroundColor: '#b5fec7'
  },
  {
    label: 'Psychology',
    data: [{
      x: 126,
      y: 255,
      r: 3.81
    }],
    backgroundColor: '#fff9a3'
  },
  {
    label: 'Sociology',
    data: [{
      x: 191,
      y: 195,
      r: 3.67
    }],
    backgroundColor: '#fff9a3'
  },
  {
    label: 'Statistics and Data Science',
    data: [{
      x: 83,
      y: 12,
      r: 3.08
    }],
    backgroundColor: '#a5bffc'
  }
]};

const ctx = document.getElementById('major-bubble');
const config = new Chart(ctx, {
  type: 'bubble',
  data: data,
  options: {
    plugins: {
      legend: {
        labels: {
          generateLabels: function(chart) {
            return [{
              text: 'Life Sciences',
              fillStyle: '#b5fec7',
              hidden: false
            }, {
              text: 'Physical Sciences',
              fillStyle: '#a5bffc',
              hidden: false
            }, {
              text: 'Social Sciences',
              fillStyle: '#fff9a3',
              hidden: false
            }, {
              text: 'Engineering',
              fillStyle: '#fb8c85',
              hidden: false
            }];
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Number of students who changed into the major'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Number of students who changed out of the major'
        }
      }
    }
  }
});