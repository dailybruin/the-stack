$('.lollipop_select').chosen();
// JavaScript Document
function initial_selected(s, i) {
  // alert("initial calling");
  //console.log("starting");
  s.options[i - 1].selected = true;
  lollipop_graph(s.options[i - 1].value);
  return;
}
initial_selected(document.getElementById('graphs'), 1);

function lollipop_graph(testkey) {
  document.getElementById('lollipop').innerHTML = '';
  //alert('The option with value ' + testkey  );

  var margin = { top: 30, right: 30, bottom: 40, left: 170 },
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3
    .select('#lollipop')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top * 2 + margin.bottom * 2)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  d3.json('/datasets/covid-collegecompare/college_compare.json', function(
    data
  ) {
    console.log(data);
    var cases = [];
    var allschools = d3.keys(data);
    console.log(allschools[0]);
    var schools = [];
    var xvalue;
    var tooltip = d3
      .select('body')
      .append('div')
      .style('position', 'absolute')
      .style('z-index', '10')
      .style('visibility', 'hidden')
      .text('a simple tooltip');
    for (var key in data) {
      if (testkey == 'rescheduled') {
        if (data[key].rescheduled.cases != null) {
          cases.push(parseInt(data[key].rescheduled.cases));
          schools.push(key);
        }
      } else if (testkey == 'first_infection') {
        if (data[key].first_infection.cases != null) {
          cases.push(parseInt(data[key].first_infection.cases));
          schools.push(key);
        }
      } else if (testkey == 'grading_change') {
        if (data[key].grading_change.cases != null) {
          cases.push(parseInt(data[key].grading_change.cases));
          schools.push(key);
        }
      } else if (testkey == 'housing_change') {
        if (data[key].housing_change.cases != null) {
          cases.push(parseInt(data[key].housing_change.cases));
          schools.push(key);
        }
      } else if (testkey == 'graduation') {
        console.log('hi');
        if (data[key].graduation.cases != null) {
          console.log('hello');
          cases.push(parseInt(data[key].graduation.cases));
          schools.push(key);
        }
      } else if (testkey == '' || testkey == 'cancelled_classes') {
        if (data[key].cancelled_classes.cases != null) {
          cases.push(parseInt(data[key].cancelled_classes.cases));
          schools.push(key);
        }
      }
    }

    xvalue = Math.max.apply(this, cases);

    if (xvalue < 100) xvalue = (Math.round(xvalue / 10) + 1) * 10;
    else if (xvalue >= 100 && xvalue < 1000)
      xvalue = (Math.round(xvalue / 100) + 1) * 100;
    else xvalue = (Math.round(xvalue / 1000) + 1) * 1000;

    // Add X axis
    var x = d3
      .scaleLinear()
      .domain([0, xvalue])
      .range([0, width]);
    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Add X axis
    var x = d3
      .scaleLinear()
      .domain([0, xvalue])
      .range([0, width]);
    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Y axis
    var y = d3
      .scaleBand()
      .range([0, height])
      .domain(
        schools.map(function(schools) {
          return schools;
        })
      )
      .padding(1);
    svg.append('g').call(d3.axisLeft(y));

    for (var key in cases) {
      svg
        .append('line')
        .attr('x1', x(0))
        .attr('x2', x(cases[key]))
        .attr('y1', y(schools[key]))
        .attr('y2', y(schools[key]))
        .style('stroke', '#003366');

      svg
        .append('circle')
        .attr('cx', x(cases[key]))
        .attr('cy', y(schools[key]))
        .attr('r', '4')
        .style('fill', 'red')
        .style('stroke', '#000080');
      /*		.on("mouseover", function(   ) {return tooltip.style("visibility", "visible")
			                                            .text(cases[key]);})
			.on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
			.on("mouseout", function(){return tooltip.style("visibility", "hidden"); });*/

      /*				div.transition()
					.duration(200)
					.style("opacity", .9);
				div	.html("test"    )
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
	*/
      //	})
      /*		 .on("mouseout", function( ) {
					div.transition()
						.duration(500)
						.style("opacity", 0);
            })	; */
    }

    svg
      .append('text')
      .attr(
        'transform',
        'translate(' + width / 2 + ' ,' + (height + margin.top + 20) + ')'
      )
      .style('text-anchor', 'middle')
      .text('Cases in Surrounding County');

    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - margin.left + 50)
      .attr('x', 0 - height / 2)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .text('School');

    var title = '';
    if (testkey == 'rescheduled')
      title = 'Transition to long-term remote classes';
    else if (testkey == 'first_infection') title = 'First School Infection';
    else if (testkey == 'grading_change') title = 'Change in Grading Basis';
    else if (testkey == 'housing_change')
      title = 'Change in University Housing Options';
    else if (testkey == 'graduation') title = 'Change in Commencement Plans';
    else if (testkey == '' || testkey == 'cancelled_classes')
      title = 'First day of remote learning';

    svg
      .append('text')
      .attr('y', margin.top - 40)
      .attr('x', width / 2)
      .style('text-anchor', 'middle')
      .text(title);
  });
}
