var data = [{
  values: [105, 39, 41, 15, 7],
  labels: ['First Year Students (Total): 105<br><br>Arts: 8<br>Blogging: 6<br>Copy: 12<br>Design: 9<br>Graphics: 1<br>Illustrations: 4<br>News: 15<br>Online: 8<br>Opinion: 14<br>Photo: 11<br>Sports: 10<br>Video: 7<br>',
    'Second Year Students (Total): 39<br><br>Arts: 2<br>Blogging: 0<br>Copy: 4<br>Design: 1<br>Graphics: 4<br>Illustrations: 4<br>News: 6<br>Online: 1<br>Opinion: 4<br>Photo: 0<br>Sports: 2<br>Video: 11<br>',
    'Third Year Students (Total): 41<br><br>Arts: 3<br>Blogging: 3<br>Copy: 2<br>Design: 0<br>Graphics: 3<br>Illustrations: 3<br>News: 7<br>Online: 6<br>Opinion: 6<br>Photo: 4<br>Sports: 3<br>Video: 3<br>',
    'Fourth Year Students (Total): 15<br><br>Arts: 0<br>Blogging: 0<br>Copy: 1<br>Design: 0<br>Graphics: 1<br>Illustrations: 1<br>News: 5<br>Online: 1<br>Opinion: 0<br>Photo: 0<br>Sports: 2<br>Video: 4<br>',
    'Graduate Students (Total): 7<br><br>Arts: 2<br>Blogging: 0<br>Copy: 0<br>Design: 0<br>Graphics: 0<br>Illustrations: 0<br>News: 2<br>Online: 1<br>Opinion: 0<br>Photo: 0<br>Sports: 1<br>Video: 1<br>'
  ],
  hoverinfo: 'label+percent',
  type: 'pie'
}];

var layout = {
  title: 'Breakdown by Year, Acceptances 2018-2019',
  height: 600,
  width: 1200,
  showlegend: false
};

Plotly.newPlot('acceptance-rate-by-year-graph', data, layout, {
  displayModeBar: false
});
