// Plotly.d3.json("bdr_price_per_street.json", function(figure) {
//     // console.log(fig)
//     Plotly.plot('bdr-price-per-street', figure.data, figure.layout, {responsive: true});
// });
//     // Plotly.plot('graph-id', fig.data, fig.layout);


d3.json("/datasets/ucla-housing/bdr_price_per_street.json", function(error, data){
    Plotly.newPlot('bdr-price-per-street', data.data, data.layout);
});

// d3.json(url, function(error, data) {
//     if (error) return console.warn(error);
//     var layout = {barmode: 'group'};
    
//    Plotly.newPlot('tester', data.data, layout);
//   });


