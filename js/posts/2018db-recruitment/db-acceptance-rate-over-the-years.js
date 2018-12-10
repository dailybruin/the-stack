var myPlot = document.getElementById('acceptance-rate-years-graph'),
  hoverInfo = document.getElementById('acceptance-rate-years-hover-info');
var data = [{
  x: ['Fall 2016', 'Fall 2017', 'Fall 2018'],
  /* Quarter */
  y: [50, 46, 43],
  /* Acceptance Rate */
  name: 'Overall',
  /* Section */
  mode: 'lines+markers',
  /* shows line and point */
  text: ['Overall: Fall 2016<br />Acceptance Rate: 50%<br />Applied: 464<br />Accepted: 232',
    'Overall: Fall 2017<br />Acceptance Rate: 42%<br />Applied: 488<br />Accepted: 206',
    'Overall: Fall 2018<br />Acceptance Rate: 43%<br />Applied: 494<br />Accepted: 213'
  ],
  hoverinfo: "text",
  /* shows the above on hover */
  line: {
    width: 1.5
  },
  /* width of lines */
  marker: {
    color: '#000'
  } /* color of line */
}, {
  x: ['Fall 2016', 'Fall 2017', 'Fall 2018'],
  y: [59, 53, 54],
  name: 'Arts',
  mode: 'lines+markers',
  text: ['Arts: Fall 2016<br />Acceptance Rate: 59%<br />Applied: 29 <br />Accepted: 17',
    'Arts: Fall 2017<br />Acceptance Rate: 53%<br />Applied: 30 <br />Accepted: 16',
    'Arts: Fall 2018<br />Acceptance Rate: 54%<br />Applied: 28 <br />Accepted: 15'
  ],
  hoverinfo: "text",
  line: {

    width: 1.5
  },
  marker: {
    color: '#F865B0'
  }
}, {
  x: ['Fall 2016', 'Fall 2017', 'Fall 2018'],
  y: [50, 70, 90],
  name: 'Blogging',
  mode: 'lines+markers',
  text: ['Blogging: Fall 2016<br />Acceptance Rate: 50%<br />Applied: 22 <br />Accepted: 11',
    'Blogging: Fall 2017<br />Acceptance Rate: 70%<br />Applied: 10 <br />Accepted: 7',
    'Blogging: Fall 2018<br />Acceptance Rate: 90%<br />Applied: 10 <br />Accepted: 9'
  ],
  hoverinfo: "text",
  line: {

    width: 1.5
  },
  marker: {
    color: '#48304D'
  }
}, {
  x: ['Fall 2016', 'Fall 2017', 'Fall 2018'],
  y: [43, 50, 43],
  name: 'Copy',
  mode: 'lines+markers',
  text: ['Copy: Fall 2016<br />Acceptance Rate: 43%<br />Applied: 42 <br />Accepted: 18',
    'Copy: Fall 2017<br />Acceptance Rate: 50%<br />Applied: 42 <br />Accepted: 21',
    'Copy: Fall 2018<br />Acceptance Rate: 43%<br />Applied: 51 <br />Accepted: 22'
  ],
  hoverinfo: "text",
  line: {
    width: 1.5
  },
  marker: {
    color: '#F2C14E'
  }
}, {
  x: ['Fall 2016', 'Fall 2017', 'Fall 2018'],
  y: [45, 24, 48],
  name: 'Design',
  mode: 'lines+markers',
  text: ['Design: Fall 2016<br />Acceptance Rate: 45%<br />Applied: 31 <br />Accepted: 14',
    'Design: Fall 2017<br />Acceptance Rate: 24%<br />Applied: 42 <br />Accepted: 10',
    'Design: Fall 2018<br />Acceptance Rate: 48%<br />Applied: 21 <br />Accepted: 10'
  ],
  hoverinfo: "text",
  line: {
    width: 1.5
  },
  marker: {
    color: '#FBCAEF'
  }
}, {
  x: ['Fall 2016', 'Fall 2017', 'Fall 2018'],
  y: [100, 71, 100],
  name: 'Graphics',
  mode: 'lines+markers',
  text: ['Graphics: Fall 2016<br />Acceptance Rate: 100%<br />Applied: 5 <br />Accepted: 5',
    'Graphics: Fall 2017<br />Acceptance Rate: 71%<br />Applied: 7 <br />Accepted: 5',
    'Graphics: Fall 2018<br />Acceptance Rate: 100%<br />Applied: 9 <br />Accepted: 9'
  ],
  hoverinfo: "text",
  line: {
    width: 1.5
  },
  marker: {
    color: '#E9AFA3'
  }
}, {
  x: ['Fall 2016', 'Fall 2017', 'Fall 2018'],
  y: [69, 80, 76],
  name: 'Illustrations',
  mode: 'lines+markers',
  text: ['Illustrations: Fall 2016<br />Acceptance Rate: 69%<br />Applied: 16 <br />Accepted: 11',
    'Illustrations: Fall 2017<br />Acceptance Rate: 80%<br />Applied: 15 <br />Accepted: 12',
    'Illustrations: Fall 2018<br />Acceptance Rate: 76%<br />Applied: 17 <br />Accepted: 13'
  ],
  hoverinfo: "text",
  line: {
    width: 1.5
  },
  marker: {
    color: '#AEC5EB'
  }
},  {
  x: ['Fall 2016', 'Fall 2017', 'Fall 2018'],
  y: [72, 69, 52],
  name: 'News',
  mode: 'lines+markers',
  text: ['News: Fall 2016<br />Acceptance Rate: 72%<br />Applied: 36 <br />Accepted: 26',
    'News: Fall 2017<br />Acceptance Rate: 69%<br />Applied: 35 <br /> Accepted: 24',
    'News: Fall 2018<br />Acceptance Rate: 52%<br />Applied: 67 <br /> Accepted: 35'
  ],
  hoverinfo: "text",
  line: {
    width: 1.5
  },
  marker: {
    color: '#6C464E'
  }
}, {
  x: ['Fall 2016', 'Fall 2017', 'Fall 2018'],
  y: [38, 26, 13],
  name: 'Online',
  mode: 'lines+markers',
  text: ['Online: Fall 2016<br />Acceptance Rate: 38%<br />Applied: 87 <br />Accepted: 33',
    'Online: Fall 2017<br />Acceptance Rate: 26%<br />Applied: 124 <br />Accepted: 32',
    'Online: Fall 2018<br />Acceptance Rate: 13%<br />Applied: 132 <br />Accepted: 17'
  ],
  hoverinfo: "text",
  line: {

    width: 1.5
  },
  marker: {
    color: '#381D2A'
  }
}, {
  x: ['Fall 2016', 'Fall 2017', 'Fall 2018'],
  y: [38, 30, 59],
  name: 'Opinion',
  mode: 'lines+markers',
  text: ['Opinion: Fall 2016<br />Acceptance Rate: 38%<br />Applied: 60 <br />Accepted: 23',
    'Opinion: Fall 2017<br />Acceptance Rate: 30%<br />Applied: 37 <br />Accepted: 11',
    'Opinion: Fall 2018<br />Acceptance Rate: 59%<br />Applied: 41 <br />Accepted: 24'
  ],
  hoverinfo: "text",
  line: {
    width: 1.5
  },
  marker: {
    color: '#BA5624'
  }
}, {
  x: ['Fall 2016', 'Fall 2017', 'Fall 2018'],
  y: [47, 20, 23],
  name: 'Photo',
  mode: 'lines+markers',
  text: ['Photo: Fall 2016<br />Acceptance Rate: 47%<br />Applied: 55 <br />Accepted: 26',
    'Photo: Fall 2017<br />Acceptance Rate: 20%<br />Applied: 61 <br />Accepted: 12',
    'Photo: Fall 2018<br />Acceptance Rate: 23%<br />Applied: 66 <br />Accepted: 15'
  ],
  hoverinfo: "text",
  line: {

    width: 1.5
  },
  marker: {
    color: '#44CF6C'
  }
}, {
  x: ['Fall 2016', 'Fall 2017', 'Fall 2018'],
  y: [67],
  name: 'Radio',
  mode: 'lines+markers',
  text: ['Radio: Fall 2016<br />Acceptance Rate: 67%<br />Applied: 12 <br />Accepted: 8', ],
  hoverinfo: "text",
  line: {
    width: 1.5
  },
  marker: {
    color: '#F9DEC9'
  }
}, {
  x: ['Fall 2016', 'Fall 2017', 'Fall 2018'],
  y: [33, 32],
  name: 'Social Media',
  mode: 'lines+markers',
  text: ['Social Media: Fall 2016<br />Acceptance Rate: 33%<br />Applied: 21 <br />Accepted: 7',
    'Social Media: Fall 2017<br />Acceptance Rate: 32%<br />Applied: 44 <br />Accepted: 14'
  ],
  hoverinfo: "text",
  line: {

    width: 1.5
  },
  marker: {
    color: '#E637BF'
  }
},  {
  x: ['Fall 2016', 'Fall 2017', 'Fall 2018'],
  y: [69, 80, 78],
  name: 'Sports',
  mode: 'lines+markers',
  text: ['Sports: Fall 2016<br />Acceptance Rate: 69%<br />Applied: 16<br />Accepted: 11',
    'Sports: Fall 2017<br />Acceptance Rate: 80%<br />Applied: 25<br />Accepted: 20',
    'Sports: Fall 2018<br />Acceptance Rate: 78%<br />Applied: 23<br />Accepted: 18'
  ],
  hoverinfo: "text",
  line: {
    width: 1.5
  },
  marker: {
    color: '#3A405A'
  }
},  {
  x: ['Fall 2016', 'Fall 2017', 'Fall 2018'],
  y: [69, 79, 90],
  name: 'Video',
  mode: 'lines+markers',
  text: ['Video: Fall 2016<br />Acceptance Rate: 69%<br />Applied: 32 <br />Accepted: 22',
    'Video: Fall 2017<br />Acceptance Rate: 79%<br />Applied: 28 <br />Accepted: 22',
    'Video: Fall 2018<br />Acceptance Rate: 90%<br />Applied: 29 <br />Accepted: 26'
  ],
  hoverinfo: "text",
  line: {

    width: 1.5
  },
  marker: {
    color: '#4D9078'
  }
},];

var layout = {
  /* background color */
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
  width: 1000,
  title: 'Acceptance Rates from 2016-18',
  yaxis: {
    title: 'Percent (%)',
    showline: true,
    range: [0, 105] /* 105 so that it shows the 100 points */
  },
  xaxis: {
    title: 'Year',
    showline: false
  },
  showlegend: true,
  legend: {
    traceorder: 'normal',
    borderwidth: 1.5,
    bordercolor: '#6A8EAE',
    x: -0.27,
    /* position of legend is lower left */
    y: 0.5,
    /* see above */
  },
  hovermode: 'closest',
  height: 700,
};

Plotly.newPlot('acceptance-rate-years-graph', data, layout, { displayModeBar: false});

myPlot.on('plotly_hover', function (data) { /* code to display the hover info I pulled from somewhere */
    var infotext = data.points.map(function (d) {
      return (d.data.name + ': x= ' + d.x + ', y= ' + d.y.toPrecision(3));
    });
    hoverInfo.infotext.join('<br/>');
  })
  .on('plotly_unhover', function (data) {
    hoverInfo.innerHTML = '';
  });
