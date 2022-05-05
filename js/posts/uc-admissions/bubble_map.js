var ctx = document.getElementById("id_of_the_div").getContext("2d");

// d3.csv('/datasets/uc-admissions/campus_size.csv').then(function(frequency) {

// )};

// d3.csv('/datasets/uc-admissions/campus_size.csv', function(err, rows){

//     function unpack(rows, key) {
//         return rows.map(function(row) { return row[key]; });
//     }

//     var cityName = unpack(rows, 'name'),
//         cityPop = unpack(rows, 'pop'),
//         cityLat = unpack(rows, 'lat'),
//         cityLon = unpack(rows, 'lon'),
//         color = [,"rgb(255,65,54)","rgb(133,20,75)","rgb(255,133,27)","lightgrey"],
//         citySize = [],
//         hoverText = [],
//         scale = 50000;

//     for ( var i = 0 ; i < cityPop.length; i++) {
//         var currentSize = cityPop[i] / scale;
//         var currentText = cityName[i] + " pop: " + cityPop[i];
//         citySize.push(currentSize);
//         hoverText.push(currentText);
//     }

//     var data = [{
//         type: 'scattergeo',
//         locationmode: 'USA-states',
//         lat: cityLat,
//         lon: cityLon,
//         hoverinfo: 'text',
//         text: hoverText,
//         marker: {
//             size: citySize,
//             line: {
//                 color: 'black',
//                 width: 2
//             },
//         }
//     }];

//     var layout = {
//         title: '2014 US City Populations',
//         showlegend: false,
//         geo: {
//             scope: 'usa',
//             projection: {
//                 type: 'albers usa'
//             },
//             showland: true,
//             landcolor: 'rgb(217, 217, 217)',
//             subunitwidth: 1,
//             countrywidth: 1,
//             subunitcolor: 'rgb(255,255,255)',
//             countrycolor: 'rgb(255,255,255)'
//         },
//     };

//     Plotly.newPlot(ctx, data, layout, {showLink: false});

// });

let hoverText = [
  'Los Angeles',
  'Santa Barbara',
  'San Diego',
  'Merced',
  'Irvine',
  'Davis',
  'Riverside',
  'Santa Cruz',
  'Berkeley',
];


TESTER = document.getElementById('tester');

var data = [{
  type: 'scattergeo',
  lat: [34.1139,34.4285,33.2247,37.8723,37.063,33.6846,38.5449,33.5275,36.9276],
  lon: [-118.407,-119.72,-117.308,-122.276,-120.841,-117.8265,-121.7405,-116.126,-121.845],
  hoverinfo: 'text',
  text: hoverText,
  marker: {
      size: [357.4677804,112.2254803,66.40991903,104.0519481,31.95460123,80.78983051,17.87264151,45.30416667,32.933],
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

// Plotly.newPlot('myDiv', data, layout);


// Plotly.newPlot(TESTER, data, layout);