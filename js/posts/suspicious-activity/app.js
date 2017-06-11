//Map
L.mapbox.accessToken = 'pk.eyJ1IjoiYmVuc29uaGFuIiwiYSI6ImNpdW4wc2V3NzAwZzAydG13eTB6bDdrdGMifQ.3qVecRB6mpgc1X-pURkDng';
L.MakiMarkers.accessToken = "pk.eyJ1IjoiYmVuc29uaGFuIiwiYSI6ImNpdW4wc2V3NzAwZzAydG13eTB6bDdrdGMifQ.3qVecRB6mpgc1X-pURkDng";
var map = L.mapbox.map('map', 'mapbox.light')
  .setView([34.0689, -118.442], 12);

function getAge(birthday) {
  let d = new Date(String(birthday));

  if ( Object.prototype.toString.call(d) === "[object Date]" ) {
    // it is a date
    if ( isNaN( d.getTime() ) ) {  // d.valueOf() could also work
      // date is not valid
      return -1;
    }
    else {
      // date is valid
      let ageDifMs = Date.now() - d.getTime();
      let ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  }
  else {
    // not a date
    return -1; 
  }
}

$(document).ready(function () {
  let all_markers = [];
  let gender = "all";
  let race = "all";
  let age_lower = 1000;
  let age_upper = 1000;
  let arrest = true;
  let suspicious = true;

  d3.csv('/datasets/suspicious-activity/suspicious.csv', function(suspicious_data) {

    suspicious_data.forEach(d => { d.Lat = +d.Lat; d.Long = +d.Long; });

    let icon1 = new L.MakiMarkers.Icon({
      color: "#4169e1",
      size: "m"
    });

    icon1.options.shadowSize = [0,0];

    suspicious_data.forEach(d => {
      let m = L.marker([d.Lat, d.Long], {icon: icon1}).addTo(map);

      all_markers.push({
        marker: m,
        data: d,
        type: 'suspicious'
      });
    });

    d3.csv('/datasets/suspicious-activity/arrests_loc.csv', function(arrest_data) {
      arrest_data.forEach(d => { 
        d.Lat = +d.Lat; 
        d.Long = +d.Long; 
        d.Age = getAge(d["DOB"]);
      });

      let icon2 = new L.MakiMarkers.Icon({
        // icon: "marker", 
        color: "#ff4040", 
        size: "m"
      });
      icon2.options.shadowSize = [0,0];

      arrest_data.forEach(d => {
        let m = L.marker([d.Lat, d.Long], {icon: icon2}).addTo(map);

        all_markers.push({
          marker: m,
          data: d,
          type: 'arrest'
        });
      });

      document.querySelectorAll('.map_select').forEach(s => {
        s.addEventListener('change', function(e) {
          let target = e.target;

          if (s.nodeName == "SELECT") {
            let sel = target.id;
            let val = target.value;

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
          } else if (s.nodeName == "INPUT") {
            if (target.value == "arrest") {
              arrest = target.checked == true ? true : false;
            } else if (target.value == "suspicious") {
              suspicious = target.checked == true ? true : false;
            }
          }
          
          all_markers.forEach(m => {
            if ((m.data.Sex.toLowerCase() == gender || gender == "all") &&
                (m.data.Race == race || race == "all") &&
                ((Number(m.data.Age) >= age_lower && Number(m.data.Age) <= age_upper) || age_lower == 1000) &&
                ((m.type == 'arrest' && arrest == true) || (m.type == 'suspicious' && suspicious == true))) {
              $(m.marker._icon).removeClass('hidden');
            }
            else {
              $(m.marker._icon).addClass('hidden');
            }
          })
        })
      })
      initBarChart(suspicious_data, "suspicious"); 
      initBarChart(arrest_data, "arrest"); 
    });


      
  });

  
});

function initBarChart(data, type) {
  let svg = d3.select("#" + type + "-bar-chart"),
      margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom;

  let x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
      y = d3.scaleLinear().rangeRound([height, 0]);

  let g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  let color = d3.scaleOrdinal(d3.schemeCategory20c);

  

  let genders = ["male", "female"];
  let races = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "O", "P", "S", "U", "V", "W", "X", "Z"];
  let ages = ["18-20", "21-40", "41-65", "65+"]

  let breakdown = {
    gender: new Array(2).fill(0),
    race: new Array(19).fill(0),
    age: new Array(4).fill(0)
  }

  data.forEach(function(d) {

    let g = genders.indexOf(d.Sex.toLowerCase());
    breakdown.gender[g] += 1;

    let r = races.indexOf(d.Race);
    if (r == -1) return; // skip if no race
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

  let currFilter = "gender";
  let currDomain = genders; 

  g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(4))
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Frequency");

  document.getElementById(type + '-bar-select').addEventListener('change', function(e) {

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
