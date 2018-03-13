var data = [
    {
         "interest_rate":"< 4%",
         "Default":60,
         "Charge-off":20,
         "Current":456,
         "30 days":367.22,
         "60 days":222,
         "90 days":198,
         "Default":60
         
      },
      {
         "interest_rate":"4-7.99%",
         "Charge-off":2,
         "Default":30,
         "Current":271,
         "30 days":125,
         "60 days":78,
         "90 days":72
         
        
      }
];

 var margin = {
             top: 20,
             right: 20,
             bottom: 40,
             left: 60
         },
             width = 450 - margin.left - margin.right,
             height = 315 - margin.top - margin.bottom,
             that = this;


         var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

         var y = d3.scale.linear().rangeRound([height, 0]);

         var color = d3.scale.category20();

         var xAxis = d3.svg.axis().scale(x).orient("bottom");

         var yAxis = d3.svg.axis().scale(y).orient("left").tickFormat(d3.format("200"));

         var svg = d3.select(".viz-portfolio-delinquent-status").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

         color.domain(d3.keys(data[0]).filter(function (key) {
             return key !== "interest_rate";
         }));

   var maxvalue = 0;
         data.forEach(function (d) {
             var y0 = 0;
             d.rates = color.domain().map(function (name) {
                 return {
                     name: name,
                     y0: y0,
                     y1: y0 += +d[name],
                     amount: d[name]
                 };
             });
     if(y0 > maxvalue)
       maxvalue = y0;
         });
 
   console.log(maxvalue);
   data.forEach(function(d) {
     //choose one, first for 100% scale, second for absolute scale
       d.rates.forEach(function (name) {
           name.y0 /= maxvalue;
                   name.y1 /= maxvalue;
       });
       /*
               d.rates.forEach(function (d) {
                   d.y0 /= y0;
                   d.y1 /= y0;
               });
     */
   });
         data.sort(function (a, b) {
             return b.rates[0].y1 - a.rates[0].y1;
         });

         x.domain(data.map(function (d) {
             return d.interest_rate;
         }));

         svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);

         svg.append("g").attr("class", "y axis").call(yAxis);

         var interest_rate = svg.selectAll(".interest-rate").data(data).enter().append("g").attr("class", "interest-rate").attr("transform", function (d) {
             return "translate(" + x(d.interest_rate) + ",0)";
         });

         interest_rate.selectAll("rect").data(function (d) {
             return d.rates;
         }).enter().append("rect").attr("width", x.rangeBand()).attr("y", function (d) {
             return y(d.y1);
         }).attr("height", function (d) {
             return y(d.y0) - y(d.y1);
         }).style("fill", function (d) {
             return color(d.name);
         }).on('mouseover', function (d) {
             var total_amt;
             total_amt = d.amount;



             console.log('----');
             d3.select(".chart-tip").style('opacity', '1').html('Amount: <strong>$' + that.numberWithCommas(total_amt.toFixed(2)) + '</strong>');

         }).on('mouseout', function () {
             d3.select(".chart-tip").style('opacity', '0');
         });

         var legend = svg.selectAll(".legend").data(color.domain().slice().reverse()).enter().append("g").attr("class", "legend").attr("transform", function (d, i) {
             return "translate(" + i * -70 + ",283)";
         });


         legend.append("rect").attr("x", width + -53).attr("width", 10).attr("height", 10).style("fill", color);

         legend.append("text").attr("x", width - 40).attr("y", 5).attr("width", 40).attr("dy", ".35em").style("text-anchor", "start").text(function (d) {
             return d;
         });


