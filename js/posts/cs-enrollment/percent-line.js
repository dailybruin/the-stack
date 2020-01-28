PERCENT_LINE = document.getElementById('percent-line');
trace1 = {
  x: [2013, 2014, 2015, 2016, 2017],
  y: [13.702531645569598, 15.374881366656101, 17.2276621787026, 19.1666666666667, 21.0366694237662],
  mode: 'lines+markers',
  name: 'HSSEAS to CS Enrollment Ratio',
  type: 'scatter',
  uid: '379e7ae9-5256-445a-8083-a16871504f79',
  xsrc: 'MattieSanseverino:10:f93538',
  ysrc: 'MattieSanseverino:10:64fa86'
};
data = [trace1];
layout = {
  autosize: true,
  title: 'Percent of HSSEAS in CS/CSE',
  xaxis: {
    autorange: true,
    dtick: '1',
    range: [2012.7464788732395, 2017.2535211267605],
    showticklabels: true,
    tick0: '2013',
    title: 'Year',
    type: 'linear'
  },
  yaxis: {
    autorange: true,
    range: [13.135419633462442, 21.603781435873355],
    title: 'Percent',
    type: 'linear'
  }
};
Plotly.newPlot('percent-line',
  data,
  layout,
  {responsive: true}
);
