

    var trace1 = {
      x: ['Arts', 'Blogging', 'Copy', 'Design', 'Graphics', 'Illustrations', 'News', 'Online', 'Opinion', 'Photo', 'Sports', 'Video'],
      y: [8, 6, 15, 9, 1, 4, 15, 8, 14, 11, 10, 7],
      name: 'First Years',
      type: 'bar',
      marker: {
        color: '#32A287'
      },
      text: ['First Years: 8', 'First Years: 6', 'First Years: 15', 'First Years: 9', 'First Years: 1', 'First Years: 4',
      'First Years: 15', 'First Years: 8', 'First Years: 14', 'First Years: 11', 'First Years: 10', 'First Years: 7'
    ],
      hoverinfo: 'text',
    };

    var trace2 = {
      x: ['Arts', 'Blogging', 'Copy', 'Design', 'Graphics', 'Illustrations', 'News', 'Online', 'Opinion', 'Photo', 'Sports', 'Video'],
      y: [2, 0, 4, 1, 4, 4, 6, 1, 3, 0, 2, 11],
      name: 'Second Years',
      type: 'bar',
      marker: {
        color: '#ADA8B6'
      },
      text: ['Second Years: 2', 'Second Years: 0', 'Second Years: 4', 'Second Years: 1', 'Second Years: 4', 'Second Years: 4',
      'Second Years: 6', 'Second Years: 1', 'Second Years: 3', 'Second Years: 0', 'Second Years: 2', 'Second Years: 11'
    ],
      hoverinfo: 'text'
    };

    var trace3 = {
      x: ['Arts', 'Blogging', 'Copy', 'Design', 'Graphics', 'Illustrations', 'News', 'Online', 'Opinion', 'Photo', 'Sports', 'Video'],
      y: [3, 3, 2, 0, 3, 4, 7, 6, 5, 4, 3, 3],
      name: 'Third Years',
      type: 'bar',
      marker: {
        color: '#FFEEDB'
      },
      text: ['Third Years: 3', 'Third Years: 3', 'Third Years: 2', 'Third Years: 0', 'Third Years: 3', 'Third Years: 4',
      'Third Years: 7', 'Third Years: 6', 'Third Years: 5', 'Third Years: 4', 'Third Years: 3', 'Third Years: 3'
    ],
      hoverinfo: 'text'
    };

    var trace4 = {
      x: ['Arts', 'Blogging', 'Copy', 'Design', 'Graphics', 'Illustrations', 'News', 'Online', 'Opinion', 'Photo', 'Sports', 'Video'],
      y: [0, 0, 1, 0, 1, 1, 5, 1, 0, 0, 2, 4],
      name: 'Fourth Years',
      type: 'bar',
      marker: {
        color: '#4C3B4D'
      },
      text: ['Fourth Years: 0', 'Fourth Years: 0', 'Fourth Years: 1', 'Fourth Years: 0', 'Fourth Years: 1', 'Fourth Years: 1',
            'Fourth Years: 5', 'Fourth Years: 1', 'Fourth Years: 0', 'Fourth Years: 0', 'Fourth Years: 2', 'Fourth Years: 4'
    ],
      hoverinfo: 'text'
    };

    var trace5 = {
      x: ['Arts', 'Blogging', 'Copy', 'Design', 'Graphics', 'Illustrations', 'News', 'Online', 'Opinion', 'Photo', 'Sports', 'Video'],
      y: [2, 0, 0, 0, 0, 0, 2, 1, 0, 0, 1, 0],
      name: 'Graduate Students',
      type: 'bar',
      marker: {
        color: '#A53860'
      },
      text: ['Graduate Students: 2', 'Graduate Students: 0', 'Graduate Students: 0', 'Graduate Students: 0', 'Graduate Students: 0', 'Graduate Students: 0',
            'Graduate Students: 2', 'Graduate Students: 1', 'Graduate Students: 0', 'Graduate Students: 0', 'Graduate Students: 1', 'Graduate Students: 0'
    ],
      hoverinfo: 'text'
    };

    var data = [trace1, trace2, trace3, trace4, trace5];
    var layout = {
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      hover_bgcolor:'rgba(128, 128, 128, 0)',
      barmode: 'stack',
      title: '2018 Acceptances by Year'

    };



Plotly.newPlot('acceptance-rate-by-year-graph', data, layout, {responsive: true, displayModeBar: false});
