let hoverText = [
  "Los Angeles",
  "Santa Barbara",
  "San Diego",
  "Berkeley",
  "Merced",
  "Irvine",
  "Davis",
  "Riverside",
"Santa Cruz"];


TESTER = document.getElementById('bubble_map');

var data = [{
  type: 'scattergeo',
  lat: [34.1139,34.4285,33.2247,37.8723,37.063,33.6846,38.5449,33.5275,36.9276],
  lon: [-118.407,-119.72,-117.308,-122.276,-120.841,-117.8265,-121.7405,-116.126,-121.845],
  hoverinfo: 'text',
  text: hoverText,
  marker: {
      size: [110.0620525,26.41456016,21.19686235,36.55519481,11.15705521,24.74915254,7.556603774,22.3725,9.9205],
      // size: [357.4677804,112.2254803,66.40991903,104.0519481,31.95460123,80.78983051,17.87264151,45.30416667,32.933],
      // color:   ['#3284BF',
      // '#041E42',
      // '#B3A369',
      // '#FFD200',
      // '#0091B3',
      // '#add8e6',
      // '#C69214',
      // '#f29813',
      // '#004D9F',],
      line: {
          color: 'black',
          width: 2
      },
  }
}];

var layout = {
  title: 'Density of all UC Schools',
  showlegend: false,
  geo: {
      scope: 'usa',
      // projection: {
      //     type: 'albers usa'
      // },
      showland: true,
      landcolor: 'rgb(217, 217, 217)',
      subunitwidth: 1,
      countrywidth: 1,
      subunitcolor: 'rgb(255,255,255)',
      countrycolor: 'rgb(255,255,255)'
  },
};

Plotly.newPlot(TESTER, data, layout, {showLink: false});

