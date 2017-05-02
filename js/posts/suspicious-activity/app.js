//Map

L.mapbox.accessToken = 'pk.eyJ1IjoiYmVuc29uaGFuIiwiYSI6ImNpdW4wc2V3NzAwZzAydG13eTB6bDdrdGMifQ.3qVecRB6mpgc1X-pURkDng';
var map = L.mapbox.map('map', 'mapbox.light')
  .setView([34.0689, -118.442], 12);

$(document).ready(function () {
  d3.csv('/datasets/suspicious-activity/test.csv', function(data) {
    data.forEach(d => { d.Lat = +d.Lat; d.Long = +d.Long; });

    let all_markers = [];

    let icon = new L.Icon.Default();
    icon.options.shadowSize = [0,0];

    data.forEach(d => {
      let m = L.marker([d.Lat, d.Long], {icon: icon}).addTo(map);
      all_markers.push({
        marker: m,
        data: d
      });
    });

    // all_markers.forEach(m => {
    //   $(m.marker._icon).hide();
    // })

    $('#gender_select').change(function () {
      console.log($(this).value);
    });

    let gender = "all";
    let race = "all";
    let age_lower = 1000;
    let age_upper = 1000;

    document.querySelectorAll('select').forEach(s => {
      s.addEventListener('change', function(e) {
        let sel = e.target.id;
        let val = e.target.value;
        if (sel == "gender_select") {
          gender = val;
        }
        else if (sel == "race_select") {
          race = val;
        }
        else if (sel == "age_select") {
          switch (Number(val)) {
            case 0:
              age_lower = 0;
              age_upper = 20;
              break;
            case 1:
              age_lower = 21;
              age_upper = 40;
              break;
            case 2:
              age_lower = 41;
              age_upper = 65;
              break;
            case 3:
              age_lower = 65;
              age_upper = 100;
              break;
            case 4:
              age_lower = 1000;
              age_upper = 1000;
              break;
          }
        }
        all_markers.forEach(m => {
          console.log(Number(m.data.Age));
          if ((m.data.Sex.toLowerCase() == gender || gender == "all") &&
              (m.data.Race == race || race == "all") &&
              ((Number(m.data.Age) >= age_lower && Number(m.data.Age) <= age_upper) || age_lower == 1000)) {
            $(m.marker._icon).show();
          }
          else {
            $(m.marker._icon).hide();
          }
        })
      })
    })
  });
});

//Graph

var svg = d3.select("#bar-chart"),
  margin = {top: 20, right: 20, bottom: 30, left: 40},
  width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom,
  g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x0 = d3.scaleBand()
  .rangeRound([0, width])
  .paddingInner(0.1);

var x1 = d3.scaleBand()
  .padding(0.05);

var y = d3.scaleLinear()
  .rangeRound([height, 0]);

var z = d3.scaleOrdinal()
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

d3.csv('/datasets/suspicious-activity/dummy.csv', function(d, i, columns) {
  for (var i = 1, n = columns.length; i < n; ++i) d[columns[i]] = +d[columns[i]];
  return d;
}, function(error, data) {
  if (error) throw error;

  var keys = data.columns.slice(1);

  x0.domain(data.map(function(d) { return d.State; }));
  x1.domain(keys).rangeRound([0, x0.bandwidth()]);
  y.domain([0, d3.max(data, function(d) { return d3.max(keys, function(key) { return d[key]; }); })]).nice();

  g.append("g")
    .selectAll("g")
    .data(data)
    .enter().append("g")
      .attr("transform", function(d) { return "translate(" + x0(d.State) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
      .attr("x", function(d) { return x1(d.key); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", x1.bandwidth())
      .attr("height", function(d) { return height - y(d.value); })
      .attr("fill", function(d) { return z(d.key); });

  g.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x0));

  g.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(y).ticks(null, "s"))
    .append("text")
      .attr("x", 2)
      .attr("y", y(y.ticks().pop()) + 0.5)
      .attr("dy", "0.32em")
      .attr("fill", "#000")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
      .text("Population");

  var legend = g.append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "end")
    .selectAll("g")
    .data(keys.slice().reverse())
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
    .attr("x", width - 19)
    .attr("width", 19)
    .attr("height", 19)
    .attr("fill", z);

  legend.append("text")
    .attr("x", width - 24)
    .attr("y", 9.5)
    .attr("dy", "0.32em")
    .text(function(d) { return d; });
});
