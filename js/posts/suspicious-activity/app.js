//Map
L.mapbox.accessToken = 'pk.eyJ1IjoiYmVuc29uaGFuIiwiYSI6ImNpdW4wc2V3NzAwZzAydG13eTB6bDdrdGMifQ.3qVecRB6mpgc1X-pURkDng';
L.MakiMarkers.accessToken = "pk.eyJ1IjoiYmVuc29uaGFuIiwiYSI6ImNpdW4wc2V3NzAwZzAydG13eTB6bDdrdGMifQ.3qVecRB6mpgc1X-pURkDng";
var map = L.mapbox.map('map', 'mapbox.light')
  .setView([34.0689, -118.442], 12);

$(document).ready(function () {
  d3.csv('/datasets/suspicious-activity/suspicious.csv', function(data) {

    data.forEach(d => { d.Lat = +d.Lat; d.Long = +d.Long; });

    let all_markers = [];

    let icon = new L.MakiMarkers.Icon({
      // icon: "marker", 
      color: "#4169e1",
      size: "m"
    });

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
  });

  d3.csv('/datasets/suspicious-activity/arrests_loc.csv', function(data) {
    data.forEach(d => { 
      d.Lat = +d.Lat; d.Long = +d.Long; 
    });

    let all_markers = [];

    let icon = new L.MakiMarkers.Icon({
      // icon: "marker", 
      color: "#ff4040", 
      size: "m"
    });
    icon.options.shadowSize = [0,0];

    data.forEach(d => {
      let m = L.marker([d.Lat, d.Long], {icon: icon}).addTo(map);

      all_markers.push({
        marker: m,
        data: d
      });
    });

    // map.addLayer({
    //   "id": "markers",
    //   "type": "symbol",
    //   "source": "markers",
    //   "layout": {
    //       "icon-image": "{marker-symbol}-15",
    //       "text-field": "{title}",
    //       "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    //       "text-offset": [0, 0.6],
    //       "text-anchor": "top"
    //   },
    //   "paint": {
    //       "text-size": 12,
    //       "icon-color" : "#ff0000"
    //   }
    // });
    
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

var color = d3.scaleOrdinal(d3.schemeCategory20c);

function initBarChart(data) {
  

  let genders = ["male", "female"];
  let races = ["B", "W", "H", "I", "O"];
  let ages = ["18-20", "21-40", "41-65", "65+"]

  let breakdown = {
    gender: new Array(2).fill(0),
    race: new Array(5).fill(0),
    age: new Array(4).fill(0)
  }

  data.forEach(function(d) {

    let g = genders.indexOf(d.Sex.toLowerCase());
    breakdown.gender[g] += 1;

    let r = races.indexOf(d.Race);
    if (r == -1) r = 4; // set to other if no race
    breakdown.race[r] += 1;

    let a = d.Age;
    let ind = -1;
    if (a > 18) {
      ind = 0;
      if (a > 20) {
        ind = 1;
        if (a > 40) {
          ind = 2;
          if (a > 65) {
            ind = 3;
          } 
        }
      }
    }
    if (ind !== -1) breakdown.age[ind] += 1;
  });

  console.log(breakdown);

  let currFilter = "gender";
  let currDomain = genders; 

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

  document.getElementById('bar-select').addEventListener('change', function(e) {

    currFilter = e.target.value;
    if (currFilter == 'gender') {
      currDomain = genders;
    } else if (currFilter == 'race') {
      currDomain = races;
    } else if (currFilter == 'age') {
      currDomain = ages;
    }

    update(currFilter, currDomain);
  })

  function update(filt, dom) {
    x.domain(dom);
    let newData = breakdown[filt];

    y.domain([0, Math.max.apply(null, newData)]);

    svg.select('.axis--y')
        .transition()
        .duration(400)
        .ease(d3.easePolyInOut)
        .call(d3.axisLeft(y).ticks(10));
    
    svg.select('.axis--x')
        .transition()
        .duration(400)
        .ease(d3.easePolyInOut)
        .call(d3.axisBottom(x));

    g.selectAll(".bar")
      .remove()

    g.selectAll(".bar")
      .data(newData)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d, i) {
          return x(dom[i]);
        })
        .attr('fill', function(d, i) {
          return color(i);
        })
        .attr("y", function(d) {
          return y(d);

        })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d); });

   }

   update(currFilter, currDomain);



  

}
