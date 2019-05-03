Plotly.d3.csv('/datasets/posts/ucla-housing/listing_over_year.csv', function(err, rows){
    function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
    }

    var year = ['2014', '2015', '2016', '2017', '2018', '2019'],
        fillColor = ["#ffccb3", "#b3d1ff", "#b3ffb3", "#ffc2b3", "#e0e0d1", "#ffffb3"],
        lineColor = ["#ff5500", "#0066ff", "#00cc00", "#ff3300", "#999966", "#ffff00"],
        month = [1,2,3,4,5,6,7,8,9,10,11,12],
        monthAbb = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
        data = [];
    
    for (var i = 0 ; i < year.length ; i++){
        y = unpack(rows, year[i])
        hoverText = []

        for ( var j = 0 ; j < y.length; j++) {
            var currentText = monthAbb[j] + ", "+ year[i] + ": " + y[j] + " Listings";
            hoverText.push(currentText);
        }
        var trace = {
            x: month,
            y: unpack(rows, year[i]),
            stackgroup: 'one',
            name: year[i],
            hoveron: 'points+fills',
            line: {
                color: lineColor[i],
                width: 1,
              },
            fillcolor: fillColor[i],
            text: hoverText,
            hoverinfo: 'text'

        }
        data.push(trace)
    }

    //Add Annotation for year
    annotations = []
    y = 0
    yshift = [-4, -25, -35, -35, -35, 5]
    for (var i = 0 ; i < year.length ; i++){
        y += Number(unpack(rows,year[i])[5])
        annotation = {
            x: 6,
            y: y,
            xref: 'x',
            yref: 'y',
            text: year[i],
            yshift: yshift[i],
            showarrow: false,
        }
        annotations.push(annotation)
    }

    var layout = {
        title: 'Number of Listings by Month',
        annotations: annotations,
        xaxis: {
            title: "Month",
            tickmode: "array", // If "array", the placement of the ticks is set via `tickvals` and the tick text is `ticktext`.
            tickvals: month,
            ticktext: monthAbb,
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
            title: "Number of Listings",
            showgrid: false,
            mirror: "ticks",
            showline: true,
            zeroline: true,
            linecolor:'#bfbfbf',
            tickfont: {
                color:'#bfbfbf'
            }, 
        },
        margin: {
            l: 250,
            r: 250,
          },
        }
          
    // Plotly.newPlot("listing-over-year", data, {responsive: true});
    Plotly.newPlot("listing-over-year", data, layout, {responsive: true});
  });