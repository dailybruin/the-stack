Plotly.d3.csv('/datasets/ucla-housing/top_10_popular_street.csv', function(err, rows){
    function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
    }   
    
    var street = unpack(rows, "full_street_name"),
        num_listings = unpack(rows, "post")

    var trace = {
    type: 'scatter',
    x: num_listings,
    y: street,
    mode: 'markers',
    name: 'Number of listings',
    marker: {
        color: 'a9c6de',
        line: {
        color: 'rgba(156, 165, 196, 1.0)',
        width: 1,
        },
        symbol: 'circle',
        size: 16
    }
    };

    var data = [trace];

    var layout = {
    title: 'Number of Apartment Listings for Top Ten Popular Street',
    xaxis: {
        showgrid: false,
        showline: true,
        linecolor: 'rgb(102, 102, 102)',
        titlefont: {
        font: {
            color: 'rgb(204, 204, 204)'
        }
        },
        tickfont: {
        font: {
            color: 'rgb(102, 102, 102)'
        }
        },
        autotick: false,
        dtick: 100,
        ticks: 'outside',
        tickcolor: 'rgb(102, 102, 102)'
    },
    yaxis: {
        autorange: "reversed",
    },
    margin: {
        l: 140,
        r: 40,
        b: 50,
        t: 80
    },
    legend: {
        font: {
        size: 10,
        },
        yanchor: 'middle',
        xanchor: 'right'
    },
    width: 600,
    height: 600,
    paper_bgcolor: 'rgb(254, 247, 234)',
    plot_bgcolor: 'rgb(254, 247, 234)',
    hovermode: 'closest'
    };

    Plotly.newPlot('top-10-popular-street', data, layout, {responsive: true});
})