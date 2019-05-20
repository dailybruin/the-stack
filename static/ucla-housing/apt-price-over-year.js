Plotly.d3.csv('apt_price_over_year.csv', function(err, rows){
    function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
    }

    //Change hover text
    //Someone add in number of listing 
    //Change color
    //Change chart margin   

    let year = unpack(rows, "year"),
        shared = unpack(rows, "shared").map(x => Number.parseFloat(x).toFixed(2)),
        single = unpack(rows, "single").map(x => Number.parseFloat(x).toFixed(2));

    var trace_shared = {
        x: year,
        y: shared,
        type: 'bar',
        name: 'Shared Bedroom',
        marker: {
            color: 'f6a7ba',
            opacity: 0.7,
        }
    };

    var trace_single = {
        x: year,
        y: single,
        type: 'bar',
        name: 'Single Bedroom',
        marker: {
            color: 'd2f3e0',
            opacity: 0.5
        }
    };

    var data = [trace_shared, trace_single];

    var layout = {
    title: 'Average Rent Price from 2014-2019',
    xaxis: {
        title: "Year",
        // tickmode: "array", // If "array", the placement of the ticks is set via `tickvals` and the tick text is `ticktext`.
        tickfont: {
            color:'#bfbfbf'
        }, 
        showgrid: false,
        mirror: "ticks",
        showline: true,
        // zeroline: true,
        linecolor:'#bfbfbf',
    },
    yaxis: {
        title: "Average Price ($)",
        showgrid: false,
        mirror: "ticks",
        showline: true,
        zeroline: true,
        linecolor:'#bfbfbf',
        tickfont: {
            color:'#bfbfbf'
        }, 
    },
    barmode: 'group',
    margin: {
        l: 250,
        r: 250,
      },
    };

    Plotly.newPlot('apt-price-over-year', data, layout, {responsive: true});
});