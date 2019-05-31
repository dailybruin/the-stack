Plotly.d3.csv('gnr_westwood.csv', function(err, rows){
    function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
    }
    console.log("Hello")
       
    let place_name = unpack(rows, 'name'),
        lat = unpack(rows, 'lat'),
        lon = unpack(rows, 'lon');

    var trace = {
        type: 'scattermapbox',
        visible: true,
        mode: 'markers+text',
        text: place_name,
        hovertext: place_name,
        hoverinfo: "text",
        lon: lon,
        lat: lat,
        marker: {
            "symbol": "toilet",
            'size': 10,
        },
        name: 'Westwood Gender Neutral Bathroom'
    };

    let data = [trace];

    let layout = {
      title: "Westwood Gender Neutral Bathroom", 
      height: 650,
      dragmode: 'zoom',
      mapbox: {
        center: {
          lat: 34.06487918832413,
          lon: -118.44017028808594,
        },
        domain: {
          x: [0, 1],
          y: [0, 1]
        },
        style: 'streets',
        zoom: 15,
      },
      margin: {
        l: 150,
        r: 150,
        t: 50,
        b: 100
      },
      showlegend: false,
   };

  Plotly.setPlotConfig({
    mapboxAccessToken: "pk.eyJ1IjoidW5nbGlrdGVuZyIsImEiOiJjanQwdnM2bjAxMjY5M3lwaWp5ODF1cDAyIn0.rbraNbQac3dU6Ke0naKtyQ"
  })

    Plotly.newPlot('gnr-map', data, layout, {responsive: true});
  });

