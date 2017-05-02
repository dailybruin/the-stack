//Map
L.mapbox.accessToken = 'pk.eyJ1IjoiYmVuc29uaGFuIiwiYSI6ImNpdW4wc2V3NzAwZzAydG13eTB6bDdrdGMifQ.3qVecRB6mpgc1X-pURkDng';
var map = L.mapbox.map('map', 'mapbox.light')
  .setView([34.0689, -118.442], 12);

$(document).ready(function () {
  d3.csv('/datasets/suspicious-activity/suspicious.csv', function(data) {


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
              age_lower = 66;
              age_upper = 100;
              break;
            case 4:
              age_lower = 1000;
              age_upper = 1000;
              break;
          }
        }
        all_markers.forEach(m => {
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
    initBarChart(data);

    document.getElementById('myselect').addEventListener('change', function(e) {
      let val = e.target.value;

      visibleMarkers.forEach(m => {

        if (m.data.Sex.toLowerCase() !== val) {
          $(m.marker._icon).hide(); // add class "hidden"
          // $('.hidden').show();
        }
      });
    });
  });
});

var svg = d3.select("#bar-chart"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

function initBarChart(data) {

  let genders = ["male", "female"];
  let races = ["B", "W", "H", "I", "O"];
  let ages; // 18 - 81

  let breakdown = {
    gender: new Array(2).fill(0),
    race: new Array(5).fill(0),
    ages: []
  }

  data.forEach(function(d) {

    let g = genders.indexOf(d.Sex.toLowerCase());
    breakdown.gender[g] += 1;

    let r = races.indexOf(d.Race);
    breakdown.race[r] += 1;

    // do age
  });

  console.log(breakdown);

  x.domain(genders);
  y.domain([0, 250]);

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");

  g.selectAll(".bar")
    .data(breakdown.gender)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d, i) {
        return x(genders[i]);
      })
      .attr("y", function(d) {
        return y(d);
      })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d); });

}
