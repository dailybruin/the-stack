

    var trace1 = {
      x: ['Arts', 'Blogging', 'Copy', 'Design', 'Graphics', 'Illustrations', 'News', 'Online', 'Opinion', 'Photo', 'Sports', 'Video'],
      y: [8, 6, 12, 9, 1, 4, 15, 8, 14, 11, 10, 7],
      name: 'First Years',
      type: 'bar',
      marker: {
        color: 'rgb(255, 128, 255)'
      }
    };

    var trace2 = {
      x: ['Arts', 'Blogging', 'Copy', 'Design', 'Graphics', 'Illustrations', 'News', 'Online', 'Opinion', 'Photo', 'Sports', 'Video'],
      y: [2, 0, 4, 1, 4, 4, 6, 1, 3, 0, 2, 11],
      name: 'Second Years',
      type: 'bar',
      marker: {
        color: 'rgb(255, 153, 0)'
      }
    };

    var trace3 = {
      x: ['Arts', 'Blogging', 'Copy', 'Design', 'Graphics', 'Illustrations', 'News', 'Online', 'Opinion', 'Photo', 'Sports', 'Video'],
      y: [3, 3, 2, 0, 3, 3, 7, 6, 5, 4, 3, 3],
      name: 'Third Years',
      type: 'bar',
      marker: {
        color: 'rgb(51, 204, 51)'
      }
    };

    var trace4 = {
      x: ['Arts', 'Blogging', 'Copy', 'Design', 'Graphics', 'Illustrations', 'News', 'Online', 'Opinion', 'Photo', 'Sports', 'Video'],
      y: [0, 0, 1, 0, 1, 1, 5, 1, 0, 0, 2, 4],
      name: 'Fourth Years',
      type: 'bar',
      marker: {
        color: 'rgb(51, 153, 255)'
      }
    };

    var trace5 = {
      x: ['Arts', 'Blogging', 'Copy', 'Design', 'Graphics', 'Illustrations', 'News', 'Online', 'Opinion', 'Photo', 'Sports', 'Video'],
      y: [2, 0, 0, 0, 0, 0, 2, 1, 0, 0, 1, 0],
      name: 'Graduate Students',
      type: 'bar',
      marker: {
        color: 'rgb(153, 51, 255)'
      }
    };

    var data = [trace1, trace2, trace3, trace4, trace5];
    var layout = {
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      barmode: 'stack',
      title: '2018 Acceptances by Age Group'

    };





Plotly.newPlot('acceptance-rate-by-year-graph', data, layout, {
  displayModeBar: false
});
