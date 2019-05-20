Plotly.d3.csv('price_by_street.csv', function(err, rows){
    function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
    }

    var scl = [[0, '#ffffd9'],
        [0.125, '#edf8b1'],
        [0.25, '#c6e9b4'],
        [0.375, '#7ecdbb'],
        [0.5, '#40b5c4'],
        [0.625, '#1d90c0'],
        [0.75, '#225da8'],
        [0.875, '#243392'],
        [1, '#081d58']];
    
    var streetName = unpack(rows, 'full_street_name'),
        rentPrice = unpack(rows, 'individual'),
        streetLat = unpack(rows, 'lat'),
        streetLon = unpack(rows, 'lon'),
        streetSize = [],
        hoverText = [],
        scale = 50000;
    
    var rentPrice = rentPrice.map(x => Math.round(x))

    for ( var i = 0 ; i < rentPrice.length; i++) {
        var currentSize = rentPrice[i] / scale;
        var currentText = streetName[i] + "<br>Average Price: $" + rentPrice[i];
        streetSize.push(currentSize);
        hoverText.push(currentText);
    }


    var data = [{
        type: 'scattermapbox',
        mode: 'markers',
        hovertext: hoverText,
        lon: streetLon,
        lat: streetLat,
        marker: {
          color: rentPrice,
          colorscale: scl,
          cmin: 714,
          cmax: 1254,
          reversescale: false,
          opacity: 1.0,
          size: rentPrice,
          sizemode: 'diameter',
          sizeref: 2.*Math.max(...rentPrice)/(7.5**2),
        //   sizemin: 2,
          colorbar:{
            thickness: 10,
            titleside: 'right',
            outlinecolor: 'rgba(68,68,68,0)',
            // ticks: 'outside',
            // ticklen: 3,
            // shoticksuffix: 'last',
            tickprefix: '$',
            // dtick: 0.1
          }
        },
        name: 'Average Rent Price around UCLA'
    }];
    
    layout = {
      dragmode: 'zoom',
      mapbox: {
        center: {
          lat: 34.050862,
          lon: -118.435060
        },
        domain: {
          x: [0, 1],
          y: [0, 1]
        },
        style: 'light',
        zoom: 12
      },
      margin: {
        l: 200,
        r: 200,
      },
      showlegend: false
   };

  Plotly.setPlotConfig({
    mapboxAccessToken: "pk.eyJ1IjoidW5nbGlrdGVuZyIsImEiOiJjanQwdnM2bjAxMjY5M3lwaWp5ODF1cDAyIn0.rbraNbQac3dU6Ke0naKtyQ"
  })

    Plotly.newPlot('westwood-apt-bubble-map', data, layout, {responsive: true});
  });



// Plotly.d3.csv('price_by_street.csv', function(err, rows){

//     function unpack(rows, key) {
//         return rows.map(function(row) { return row[key]; });
//     }

//     var streetName = unpack(rows, 'street_name'),
//         rentPrice = unpack(rows, 'individual'),
//         streetLat = unpack(rows, 'lat'),
//         streetLon = unpack(rows, 'lon'),
//         color = [,"rgb(255,65,54)","rgb(133,20,75)","rgb(255,133,27)","lightgrey"],
//         streetSize = [],
//         hoverText = [],
//         scale = 50000;

//     for ( var i = 0 ; i < rentPrice.length; i++) {
//         var currentSize = rentPrice[i] / scale;
//         var currentText = streetName[i] + " price: " + rentPrice[i];
//         streetSize.push(currentSize);
//         hoverText.push(currentText);
//     }

//     var data = [{
//         type: 'scattergeo',
//         locationmode: 'USA-states',
//         lat: streetLat,
//         lon: streetLon,
//         hoverinfo: 'text',
//         text: hoverText,
//         marker: {
//             size: streetSize,
//             line: {
//                 color: 'black',
//                 width: 2
//             },
//         }
//     }];

//     var layout = {
//         title: 'Average Rent Price around UCLA',
//         showlegend: false,
//         geo: {
//             // scope: 'usa',
//             projection: {
//                 type: "mercator"
//             },
//             showland: true,
//             showframe: false,
//             showcoastlines: true,
//             landcolor: 'rgb(217, 217, 217)',
//             subunitwidth: 1,
//             countrywidth: 1,
//             subunitcolor: 'rgb(255,255,255)',
//             countrycolor: 'rgb(255,255,255)',
//             lonaxis: { range: [-118.5, -118.3] },
//             lataxis: { range: [33.8, 34.2] }
//         },
//     };

//     Plotly.newPlot("westwood-apt-bubble-map", data, layout, {showLink: false});

// });