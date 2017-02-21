var offset = $('#nav-container').offset().top  + 505
$(window).scroll(function() {
  if ($(window).scrollTop() > offset) {
    $('#nav-container').addClass('affixed');
  }
  else {
    $('#nav-container').removeClass('affixed');

  }
});

var data_structure = []

var curr_cand;
var curr_filter = "total";
var ordered_colleges = ['na', 'ucb', 'ucd', 'uci', 'ucla', 'ucm', 'ucr', 'ucsb', 'ucsc', 'ucsd', 'ucsf']

// VERTICAL BAR
var colleges = ['ucb', 'ucsd', 'ucr', 'ucd', 'ucsb', 'ucla', 'ucsf', 'uci', 'ucsc', 'ucm', 'na'];
var colorList = ['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#e6550d', '#fd8d3c', '#fdae6b', '#fdd0a2',
        '#31a354', '#74c476', '9edae5'];
var color = d3.scale.category20()
  .domain(colleges)
  .range(colorList);

var margin = {top: 40, right: 80, bottom: 50, left: 40},
    width = 720 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")

var verticalTip = d3.select("body")
  .append("div")
  .attr("class", "vertical-tip");

var horizontalTip = d3.select("body")
  .append("div")
  .attr("class", "horizontal-tip");

var svg = d3.select("#vertical-bar").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr('class', 'wrapper')
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// HORIZONTAL BAR
var margin2 = {top: 40, right: 10, bottom: 40, left: 50},
    width2 = 630 - margin2.left - margin2.right,
    height2 = 400 - margin2.top - margin2.bottom;

var xScale = d3.scale.linear()
  .domain([0, 100])
  .range([0, width2]);

var yScale = d3.scale.ordinal()
  .rangeRoundBands([height2, 0], 0.1);

var barSVG = d3.select("#horizontal-bar").append("svg")
  .attr("width", width2 + margin2.left + margin2.right)
  .attr("height", height2 + margin2.top + margin2.bottom)
  .append("g")
  .attr("transform", "translate(" + margin2.left + ", " + margin2.top + ")");

var xAxis2 = barSVG.append("g")
  .attr("class", "x axis2")
  .call(xScale.axis = d3.svg.axis().scale(xScale).orient("top"))
  .append("text")
  .attr("class", "xAxisText")
  .attr("x", 570)
  .attr("y", -20)
  .style("text-anchor", "end")
  .text("Percentage of Total UC Contribution by Campus");

var yAxis2 = barSVG.append("g")
  .attr("class", "y axis")
  .call(yScale.axis = d3.svg.axis().scale(yScale).orient("left"));

var schoolRects;

function initHorizontalBar() {
  transitionyScale(data_structure[0]);
  yScale.domain(ordered_colleges);
}

function transitionyScale(transitionData) {
  var map;
  var newYDomain = [];

  map = transitionData.colleges.map(function(d) {
    if (d["name"] == 'na') { newYDomain.push("N/A"); }
    else newYDomain.push((d["name"]).toUpperCase());
  });

  yScale.domain(newYDomain);
  yScale.rangeRoundBands([newYDomain.length*(height2/11), 0], 0.1);

  yAxis2.transition()
    .duration(500)
    .ease("linear")
    .call(yScale.axis);
}

function updateHorizontalBar() {
  var dataRects = d3.selectAll(".dataRect").select("rect")
    .transition()
    .duration(500)
    .attr("width", 0)

  d3.selectAll('.dataRect')
    .each(function() { d3.select(this).remove(); });

  // setTimeout(function() {

    var dataRects = barSVG.selectAll(".dataRect")
      .data(curr_cand.colleges)
      .enter().append("g")
      .attr("class", function(d) { return "dataRect " + d.name;});

    dataRects.append("rect")
      .attr("x", 0)
      .attr("y", function(d) { return yScale(d.name); })
      .attr("width", function(d) { return xScale((d.total/curr_cand.colleges_total) * 100); })
      .attr("height", yScale.rangeBand())
      .style("fill", "rgb(116, 205, 232)")
      .on("mousemove",function(d, i) {

        this.style.opacity = "0.6";
        this.style.cursor = "pointer";

        var val = curr_filter == "contributions" ? d.contributions : "$" + numberWithCommas(Math.round(d.total));
        var perc = curr_filter == "contributions" ? Math.round((d.contributions/curr_cand.colleges_contributions) * 100) : Math.round((d.total/curr_cand.colleges_total) * 100);

        var h = '<div class="left"><p><b style="border-bottom: 2px solid ' + color(i) + ';">' + d.name.toUpperCase() + '</b></p><p style="width:100%; background-color: yellow;"><b>' + curr_filter.toUpperCase() + '</b>: ' + val + '<p></div>';
        h += '<div class="right">' + perc + '%</div>';

        horizontalTip.style("display","none");
        horizontalTip.html(h)
          .style("left", (d3.event.pageX+12) + "px")
          .style("top", (d3.event.pageY-10) + "px")
          .style("opacity", 1)
          .style("display","block")

      })
      .on('mouseout', function() {
        this.style.opacity = "1";
        horizontalTip.html("").style("display","none");
      });

    for (var i = 0; i < curr_cand.colleges.length; i++) {
      var specificSchoolRect = d3.select("g.dataRect." + curr_cand.colleges[i].name);

      specificSchoolRect.select("rect").transition()
        .duration(400)
        .attr("y", function(d, i) {
          return yScale(d.name); })
        .attr("height", function(d) {
          return yScale.rangeBand();
        })
        .attr("width", function(d) {
          return xScale((curr_cand.colleges[i].total/curr_cand.colleges_total) * 100);
        })
    }

  // }, 800);
}

function updateHorizontalBarType() {

  if (curr_filter == "contributions") {
    var colleges = curr_cand.colleges.map(function(d) { return d.name; })
    var cont = curr_cand.colleges_contributions;

    for (var i = 0; i < colleges.length; i++) {
      d3.selectAll('.dataRect.' + colleges[i]).select('rect')
        .transition()
        .duration(1000)
        .delay(function(d, i) { return 100 * i; })
        .attr("width", function() { return xScale((curr_cand.colleges[i].contributions/cont) * 100) ; })
    }
  }
  else {
    updateHorizontalBar();
  }
}

function updateLegend() {

  d3.selectAll('.legend').attr('opacity', 0.3);

  for (var i = 0; i < curr_cand.colleges.length; i++) {
    var update = d3.select('.' + curr_cand.colleges[i].name)
      .transition().ease('cubic').duration(50).delay(function(d, i) { return i *500;}).attr('opacity', 1);

  }
}


d3.json("/datasets/presidential-campaign-donations/result.json", function(error, data) {
  var nest = d3.nest()
    .key(function(d) { return d.party; })
    .entries(data);

  data_structure = data;
  curr_cand = data_structure[5];

  initHorizontalBar();
  updateHorizontalBar();

  $( ".ui.radio.checkbox" ).checkbox( {
    onChange: function(value) {
      var d = $('#d2').prop('checked');
      if (d) {
        curr_filter = "total";
      }
      else {
        curr_filter = "contributions";
      }
      updateVerticalBar();
      updateHorizontalBarType();
    }

  });

  $('#d1').dropdown({
    onChange: function (val) {
      var s = val.split('>')
      var s2 = (s[1].split(' '));

      if (s2[1] == 'martin') {
        val = "O'Malley";
      }
      else {
        val = capitalizeFirstLetter(s2[2]);
      }
      data.map(function(d) { if (d.name == val) curr_cand = d; });

      updateVerticalBar();
      updateHorizontalBar();
    }
  });

  function updateVerticalBar() {
    var new_layers;

    if (curr_cand.colleges.length == 0) {
      new_layers = [
        [
          {
            x : 0,
            y: 0
          }
        ]
      ];
    }
    var colleges = curr_cand.colleges.map(function(c) { return c.name });

    new_layers = d3.layout.stack()(colleges.map(function(c) {

      return curr_cand.jobs.map(function(d, i) {
        if (typeof d.colleges[c] == 'undefined') {
          return( { x : i, y : 0, name: c, job: d.title })
        }
        return( { x : i, y : d.colleges[c][curr_filter], name : c, job: d.title } );
      });
    }));

    var listOfJobs = ['TECH', 'FACULTY', 'DATA', 'HEALTH', 'UGRAD', 'GRAD', 'RESEARCH',
                      'ADMIN', 'ARTS', 'LEGAL', 'RETIRED', 'OTHER'];
    x.domain(listOfJobs);
    new_layers.forEach(function(d) {
      for (var j = 0; j < d.length; j++) {
        var val = d[j].job;
        if (val == "ADMINISTRATIVE") {
          val = "ADMIN"
        }
        else if (val == "UNDERGRAD") {
          val = "UGRAD"
        }
        // else if (val == "PROFESSOR") {
        //   val = "PROF"
        // }
        var ind = listOfJobs.indexOf(val);
        d[j].x = listOfJobs[ind]
      }
    });

    y.domain([0, d3.max(new_layers[new_layers.length - 1], function(d) { return d.y0 + d.y; })]).nice()

    svg.select(".y.axis").remove()
    svg.select(".x.axis").remove()

    svg.select(".y.axis")
      .transition().duration(300)
      .call(yAxis);

    svg.select(".x.axis")
      .transition().duration(300)
      .call(xAxis);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (parseInt(height-90)).toString() + ")")
      .call(xAxis);


    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

    svg.selectAll(".layer").remove();

    var new_layer = svg.selectAll(".layer")
      .data(new_layers)
      .enter().append("g")
      .attr("class", "layer")
      .style("fill", function(d, i) {
        for (var i = 0; i < d.length; i++) {
          return color(d[i].name);
        }
      });

    new_layer.selectAll("rect")
      .data(function(d) { return d; })
      .enter().append("rect")
      .attr("x", function(d) { return x(d.x); })
      .attr("y", function(d) { return y(d.y + d.y0); })
      .attr("height", function(d) { return y(d.y0) - y(d.y + d.y0); })
      .attr("width", x.rangeBand() - 1)
      .attr("class", function(d) { return "rect-" + d.name;})
      .on("mousemove",function(d, i) {

        this.style.opacity = "0.6";
        this.style.cursor = "pointer";

        var val = curr_filter == "contributions" ? d.y : "$" + numberWithCommas(Math.round(d.y));
        var h = '<b style="width: 100%; border-bottom: 2px solid ' + color(i) + ';">' + d.job + '</b><br><br>';
        for (var j = new_layers.length - 1; j >= 0; j--) { // start backwards
          var c = new_layers[j][i];
          var s;
          if (c.name == d.name) {
            s = '<p style="width:100%; background-color: yellow;">';
          }
          else {
            s = '<p>';
          }
          var v = curr_filter == "contributions" ? c.y : "$" + numberWithCommas(Math.round(c.y));
          if (c.y != 0) {
            s += '<b>' + ((c.name).toString().toUpperCase() + '</b>: ' + v + '</p>');
            h += s;
          }
        }

        verticalTip.style("display","none");
        verticalTip.html(h)
          .style("left", (d3.event.pageX+12) + "px")
          .style("top", (d3.event.pageY-10) + "px")
          .style("opacity", 1)
          .style("display","block")

      })
      .on('mouseout', function() {
        this.style.opacity = "1";
        verticalTip.html("").style("display","none");
      });

      var legend = svg.selectAll(".legend")
      .data(ordered_colleges)
      .enter().append("g")
      .attr("class", function(d) { return "legend " + d; })
      .attr("transform", function(data, i) { return "translate(150," + (200 - i * 20) + ")"; });

      // outputs colored rectangles in order of reverseColors
    legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", function(d, i) {
        return color(d);
      })
      .on("mouseover", function(d, i) {
        svg.selectAll("rect.rect-" + d).style("stroke", "blue").style("opacity", "0.8");
      })
      .on("mouseout", function(d, i) {
        svg.selectAll("rect.rect-" + d).style("stroke", "none").style("opacity", "1");
      });


    legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(data) {
        if (data == 'na') return "N/A";
        return data.toUpperCase();
      });

      // Update text on main page using jQuery
      var percentage = ((curr_cand.colleges_total / curr_cand.total)*100);
      $('#amount').html(numberWithCommas(Math.round(curr_cand.colleges_total)));
      $('#percentage').html(Math.round(percentage*100)/100);

    updateLegend();
  }


  updateVerticalBar();

});
