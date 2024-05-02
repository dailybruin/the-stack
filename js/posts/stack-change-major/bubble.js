const data = {
  datasets: [
  {
    label: 'APPLIED MATHEMATICS',
    data: [{
      x: 64,
      y: 13,
      r: 3.03
    }],
    backgroundColor: '#a5bffc'
  },
  {
    label: 'BIOCHEMISTRY',
    data: [{
      x: 45,
      y: 144,
      r: 2.33
    }],
    backgroundColor: '#a5bffc'
  },
  {
    label: 'BUSINESS ECONOMICS',
    data: [{
      x: 116,
      y: 1419,
      r: 2.58
    }],
    backgroundColor: '#fff9a3'
  },
  {
    label: 'COGNITIVE SCIENCE',
    data: [{
      x: 98,
      y: 21,
      r: 1.92
    }],
    backgroundColor: '#b5fec7'
  },
  {
    label: 'COMPUTATIONAL AND SYSTEMS BIOLOGY',
    data: [{
      x: 10,
      y: 10,
      r: 1.79
    }],
    backgroundColor: '#b5fec7'
  },
  {
    label: 'COMPUTER SCIENCE',
    data: [{
      x: 342,
      y: 28,
      r: 2.56
    }],
    backgroundColor: '#fb8c85'
  },
  {
    label: 'ECONOMICS',
    data: [{
      x: 852,
      y: 146,
      r: 2.82
    }],
    backgroundColor: '#fff9a3'
  },
  {
    label: 'HUMAN BIOLOGY AND SOCIETY - BS',
    data: [{
      x: 102,
      y: 79,
      r: 1.69
    }],
    backgroundColor: '#b5fec7'
  },
  {
    label: 'MATHEMATICS OF COMPUTATION',
    data: [{
      x: 13,
      y: 139,
      r: 1.70
    }],
    backgroundColor: '#a5bffc'
  },
  {
    label: 'MICROBIOLOGY, IMMUNOLOGY, AND MOLECULAR GENETICS',
    data: [{
      x: 37,
      y: 50,
      r: 3.18
    }],
    backgroundColor: '#b5fec7'
  },
  {
    label: 'MOLECULAR, CELL, AND DEVELOPMENTAL BIOLOGY',
    data: [{
      x: 222,
      y: 78,
      r: 2.91
    }],
    backgroundColor: '#b5fec7'
  },
  {
    label: 'PHYSIOLOGICAL SCIENCE',
    data: [{
      x: 321,
      y: 65,
      r: 3.67
    }],
    backgroundColor: '#b5fec7'
  },
  {
    label: 'POLITICAL SCIENCE',
    data: [{
      x: 67,
      y: 254,
      r: 3.23
    }],
    backgroundColor: '#fff9a3'
  },
  {
    label: 'PSYCHOBIOLOGY',
    data: [{
      x: 622,
      y: 141,
      r: 3.56
    }],
    backgroundColor: '#b5fec7'
  },
  {
    label: 'PSYCHOLOGY',
    data: [{
      x: 126,
      y: 255,
      r: 2.56
    }],
    backgroundColor: '#fff9a3'
  },
  {
    label: 'SOCIOLOGY',
    data: [{
      x: 191,
      y: 195,
      r: 3.02
    }],
    backgroundColor: '#fff9a3'
  },
  {
    label: 'STATISTICS AND DATA SCIENCE',
    data: [{
      x: 83,
      y: 12,
      r: 2.33
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