

    var trace1 = {
      x: ['Arts', 'Blogging', 'Copy', 'Design', 'Graphics', 'Illustrations', 'News', 'Online', 'Opinion', 'Photo', 'Sports', 'Video'],
      y: [8, 6, 15, 9, 1, 4, 15, 8, 14, 11, 10, 7],
      name: 'First years',
      type: 'bar',
      marker: {
        color: '#32A287'
      },
      text: ['First years: 8', 'First years: 6', 'First years: 15', 'First years: 9', 'First years: 1', 'First years: 4',
      'First years: 15', 'First years: 8', 'First years: 14', 'First years: 11', 'First years: 10', 'First years: 7'
    ],
      hoverinfo: 'text'
    };

    var trace2 = {
      x: ['Arts', 'Blogging', 'Copy', 'Design', 'Graphics', 'Illustrations', 'News', 'Online', 'Opinion', 'Photo', 'Sports', 'Video'],
      y: [2, 0, 4, 1, 4, 4, 6, 1, 3, 0, 2, 11],
      name: 'Second years',
      type: 'bar',
      marker: {
        color: '#ADA8B6'
      },
      text: ['Second years: 2', 'Second years: 0', 'Second years: 4', 'Second years: 1', 'Second years: 4', 'Second years: 4',
      'Second years: 6', 'Second years: 1', 'Second years: 3', 'Second years: 0', 'Second years: 2', 'Second years: 11'
    ],
      hoverinfo: 'text'
    };

    var trace3 = {
      x: ['Arts', 'Blogging', 'Copy', 'Design', 'Graphics', 'Illustrations', 'News', 'Online', 'Opinion', 'Photo', 'Sports', 'Video'],
      y: [3, 3, 2, 0, 3, 4, 7, 6, 5, 4, 3, 3],
      name: 'Third years',
      type: 'bar',
      marker: {
        color: '#FFEEDB'
      },
      text: ['Third years: 3', 'Third years: 3', 'Third years: 2', 'Third years: 0', 'Third years: 3', 'Third years: 4',
      'Third years: 7', 'Third years: 6', 'Third years: 5', 'Third years: 4', 'Third years: 3', 'Third years: 3'
    ],
      hoverinfo: 'text'
    };

    var trace4 = {
      x: ['Arts', 'Blogging', 'Copy', 'Design', 'Graphics', 'Illustrations', 'News', 'Online', 'Opinion', 'Photo', 'Sports', 'Video'],
      y: [0, 0, 1, 0, 1, 1, 5, 1, 0, 0, 2, 4],
      name: 'Fourth years',
      type: 'bar',
      marker: {
        color: '#4C3B4D'
      },
      text: ['Fourth years: 0', 'Fourth years: 0', 'Fourth years: 1', 'Fourth years: 0', 'Fourth years: 1', 'Fourth years: 1',
            'Fourth years: 5', 'Fourth years: 1', 'Fourth years: 0', 'Fourth years: 0', 'Fourth years: 2', 'Fourth years: 4'
    ],
      hoverinfo: 'text'
    };

    var trace5 = {
      x: ['Arts', 'Blogging', 'Copy', 'Design', 'Graphics', 'Illustrations', 'News', 'Online', 'Opinion', 'Photo', 'Sports', 'Video'],
      y: [2, 0, 0, 0, 0, 0, 2, 1, 0, 0, 1, 0],
      name: 'Graduate students',
      type: 'bar',
      marker: {
        color: '#A53860'
      },
      text: ['Graduate students: 2', 'Graduate students: 0', 'Graduate students: 0', 'Graduate students: 0', 'Graduate students: 0', 'Graduate students: 0',
            'Graduate students: 2', 'Graduate students: 1', 'Graduate students: 0', 'Graduate students: 0', 'Graduate students: 1', 'Graduate students: 0'
    ],
      hoverinfo: 'text'
    };

    var data = [trace1, trace2, trace3, trace4, trace5];
    var layout = {
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      hover_bgcolor:'rgba(128, 128, 128, 0)',
      barmode: 'stack',
      title: '2018 Acceptances by Year',
      autosize: false
    };



Plotly.newPlot('acceptance-rate-by-year-graph', data, layout, {  displayModeBar: false});
