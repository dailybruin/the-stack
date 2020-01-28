RATIO_LINE = document.getElementById('ratio-line');

trace1 = {
  x: [2013, 2014, 2015, 2016, 2017],
  y: [3.6510687460000004, 3.6399438060000002, 3.740671215, 3.9756888910000003, 3.992426828],
  mode: 'lines+markers',
  name: 'HSSEAS Student to FTE Ratio',
  type: 'scatter',
  uid: 'a9ab2157-9124-4f07-b8b8-9fad94e6a7a9',
  xsrc: 'MattieSanseverino:12:0d66ef',
  ysrc: 'MattieSanseverino:12:bb236e'
};
data = [trace1];
layout = {
  autosize: true,
  title: 'Student to FTE Ratios',
  xaxis: {
    autorange: true,
    dtick: '1',
    range: [2012.7159807193177, 2017.2840192806823],
    showticklabels: true,
    tick0: '2013',
    title: 'Year',
    type: 'linear'
  },
  yaxis: {
    autorange: true,
    range: [3.6126880655318705, 4.01968256846813],
    title: 'Ratio',
    type: 'linear'
  }
};
Plotly.newPlot('ratio-line',
  data,
  layout,
  {responsive: true}
);
console.log( Plotly.BUILD );
