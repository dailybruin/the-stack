Plotly.d3.csv('individual_apt.csv', function(err, rows){
    function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
    }

    // var scl = [[0, '#ffffd9'],
    //     [0.125, '#edf8b1'],
    //     [0.25, '#c6e9b4'],
    //     [0.375, '#7ecdbb'],
    //     [0.5, '#40b5c4'],
    //     [0.625, '#1d90c0'],
    //     [0.75, '#225da8'],
    //     [0.875, '#243392'],
    //     [1, '#081d58']],
    
    var scl = [[0, "#ffd700"],
                [0.167, "#ffb14e"],
                [0.333, "#fa8775"],
                [0.5, "#ea5f94"],
                [0.667, "#cd34b5"],
                [0.833, "#9d02d7"],
                [1,"#0000ff"]]
    
    var apt_name = unpack(rows, 'place_name'),
        shared = unpack(rows, 'shared'),
        single = unpack(rows, 'single')
        apt_lat = unpack(rows, 'lat'),
        apt_lon = unpack(rows, 'lon'),
        num_listing = unpack(rows, 'post');

    var shared = shared.map(x => Math.round(x)),
        single = single.map(x => Math.round(x));

    var apt_shared = [],
        apt_single = [],
        price_shared = [],
        price_single = [],
        lat_shared = [],
        lon_shared = [],
        lat_single = [],
        lon_single = [];

    var hover_text_shared = [],
        hover_text_single = [],
        hover_text =[];
    
    for ( var i = 0 ; i < apt_name.length; i++){
        if (shared[i] > 0) {
            apt_shared.push(apt_name[i])
            price_shared.push(shared[i])
            lat_shared.push(apt_lat[i])
            lon_shared.push(apt_lon[i])
        }
        if (single[i] > 0) {
            apt_single.push(apt_name[i])
            price_single.push(single[i])
            lat_single.push(apt_lat[i])
            lon_single.push(apt_lon[i])
        }
    }

    // console.log(lat_shared)
    // console.log(lon_shared)
    // console.log(apt_shared)
    // console.log(price_shared)

    for ( var i = 0 ; i < apt_name.length; i++) {
        if (shared[i] > 0){
            var text_shared = apt_name[i] + "<br>Average Shared Bedroom Price: $" + shared[i];
            hover_text_shared.push(text_shared)
        }
        if (single[i] > 0){
            var text_single = apt_name[i] + "<br>Average Single Bedroom Price: $" + single[i];
            hover_text_single.push(text_single)
        }
        if (num_listing[i] > 1){
            var text_listing = apt_name[i] + "<br>" + num_listing[i] + " Listings";
        }
        else {
            var text_listing = apt_name[i] + "<br>" + num_listing[i] + " Listing";
        }
        hover_text.push(text_listing);
    }


    var trace_shared = {
        type: 'scattermapbox',
        visible: true,
        mode: 'markers+text',
        text: apt_shared,
        hovertext: hover_text_shared,
        hoverinfo: "text",
        lon: lon_shared,
        lat: lat_shared,
        marker: {
          color: price_shared,
          colorscale: scl,
          reversescale: false,
          opacity: 1.0,
          size: price_shared,
          sizemode: 'diameter',
          sizeref: 6.*Math.max(...price_shared)/(7.5**2),
          sizemin: 0,
          colorbar:{
            thickness: 10,
            titleside: 'right',
            outlinecolor: 'rgba(68,68,68,0)',
            title: {
                text: "Price ($)"
            },
            tickprefix: '$',
            dtick: 100
          }
        },
        name: 'Price for Shared Bedroom'
    };

    let trace_single = {
        type: 'scattermapbox',
        visible: false,
        mode: 'markers+text',
        text: apt_single,
        hovertext: hover_text_single,
        hoverinfo: "text",
        lon: lon_single,
        lat: lat_single,
        marker: {
          color: price_single,
          colorscale: scl,
          reversescale: false,
          opacity: 1.0,
          size: price_single,
          sizemode: 'diameter',
          sizeref: 6.*Math.max(...price_single)/(7.5**2),
          sizemin: 0,
          colorbar:{
            thickness: 10,
            titleside: 'right',
            outlinecolor: 'rgba(68,68,68,0)',
            title: {
                text: "Price ($)"
            },
            tickprefix: '$',
            dtick: 250
          }
        },
        name: 'Price for Single Bedroom'
    };
    
    let trace_listing = {
        type: 'scattermapbox',
        visible: false,
        mode: 'markers+text',
        text: apt_name,
        hovertext: hover_text,
        hoverinfo: "text",
        lon: apt_lon,
        lat: apt_lat,
        marker: {
          color: num_listing,
          colorscale: scl,
          reversescale: false,
          opacity: 1.0,
          size: num_listing,
          sizemode: 'diameter',
          sizeref: 6.*Math.max(...num_listing)/(7.5**2),
          sizemin: 0,
          colorbar:{
            thickness: 10,
            titleside: 'right',
            outlinecolor: 'rgba(68,68,68,0)',
            title: {
                text: "Number of Listings"
            },
            // tickprefix: '$',
            dtick: 25
          }
        },
        name: 'Number of Listings'
    };

    let data = [trace_shared, trace_single, trace_listing]

    let updatemenus=[
        {
            buttons: [
                {
                    args: [{'visible': [true, false, false]},
                           {'title': 'Price of Shared Bedroom Apartment'}],
                    label: 'Shared Bedroom',
                    method: 'update'
                },
                {
                    args: [{'visible': [false, true, false,]},
                           {'title': 'Price of Single Bedroom Apartment'}],
                    label: 'Single Bedroom',
                    method: 'update'
                },
                {
                    args: [{'visible': [false, false, true,]},
                           {'title': 'Number of Listing for Apartment'}],
                    label: 'Number of Listings',
                    method: 'update'
                },    
            ],
            direction: 'left',
            pad: {'r': 10, 't': 10},
            showactive: true,
            type: 'buttons',
            x: 0.35,
            xanchor: 'left',
            y: 0,
            yanchor: 'center'
        },
    
    ]

    layout = {
      title: "Price of Shared Bedroom Apartment", 
      height: 650,
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
        zoom: 14,
      },
      margin: {
        l: 150,
        r: 150,
        t: 50,
        b: 100
      },
      showlegend: false,
      updatemenus: updatemenus,
   };

  Plotly.setPlotConfig({
    mapboxAccessToken: "pk.eyJ1IjoidW5nbGlrdGVuZyIsImEiOiJjanQwdnM2bjAxMjY5M3lwaWp5ODF1cDAyIn0.rbraNbQac3dU6Ke0naKtyQ"
  })

    Plotly.newPlot('individual-apt', data, layout, {responsive: true});
  });

