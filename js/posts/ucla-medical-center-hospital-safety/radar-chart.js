var RadarChart = {
  defaultConfig: {
    containerClass: 'radar-chart',
    w: 600,
    h: 600,
    factor: 0.95,
    factorLegend: 1,
    levels: 2,
    levelTick: false,
    TickLength: 10,
    maxValue: 100,
    radians: 2 * Math.PI,
    color: d3.scale.category10(),
    axisLine: true,
    axisText: true,
    circles: true,
    radius: 5,
    axisJoin: function(d, i) {
      return d.className || i;
    },
    transitionDuration: 300
  },
  chart: function() {
    // default config
    var cfg = Object.create(RadarChart.defaultConfig);

    function radar(selection) {
      selection.each(function(data) {
        var container = d3.select(this);

        // allow simple notation
        data = data.map(function(datum) {
          if(datum instanceof Array) {
            datum = {axes: datum};
          }
          return datum;
        });

        var maxValue = Math.max(cfg.maxValue, d3.max(data, function(d) {
          return d3.max(d.axes, function(o){ return o.value; });
        }));

        var allAxis = data[0].axes.map(function(i, j){ return {name: i.axis, xOffset: (i.xOffset)?i.xOffset:0, yOffset: (i.yOffset)?i.yOffset:0}; });
        var total = allAxis.length;
        var radius = cfg.factor * Math.min(cfg.w / 2, cfg.h / 2);

        container.classed(cfg.containerClass, 1);

        function getPosition(i, range, factor, func){
          factor = typeof factor !== 'undefined' ? factor : 1;
          return range * (1 - factor * func(i * cfg.radians / total));
        }
        function getHorizontalPosition(i, range, factor){
          return getPosition(i, range, factor, Math.sin);
        }
        function getVerticalPosition(i, range, factor){
          return getPosition(i, range, factor, Math.cos);
        }

        // levels && axises
        var levelFactors = d3.range(0, cfg.levels).map(function(level) {
          return radius * ((level + 1) / cfg.levels);
        });

        var levelGroups = container.selectAll('g.level-group').data(levelFactors);

        levelGroups.enter().append('g');
        levelGroups.exit().remove();

        levelGroups.attr('class', function(d, i) {
          return 'level-group level-group-' + i;
        });

        var levelLine = levelGroups.selectAll('.level').data(function(levelFactor) {
          return d3.range(0, total).map(function() { return levelFactor; });
        });

        levelLine.enter().append('line');
        levelLine.exit().remove();

        if (cfg.levelTick){
          levelLine
          .attr('class', 'level')
          .attr('x1', function(levelFactor, i){
            if (radius == levelFactor) {
              return getHorizontalPosition(i, levelFactor);
            } else {
              return getHorizontalPosition(i, levelFactor) + (cfg.TickLength / 2) * Math.cos(i * cfg.radians / total);
            }
          })
          .attr('y1', function(levelFactor, i){
            if (radius == levelFactor) {
              return getVerticalPosition(i, levelFactor);
            } else {
              return getVerticalPosition(i, levelFactor) - (cfg.TickLength / 2) * Math.sin(i * cfg.radians / total);
            }
          })
          .attr('x2', function(levelFactor, i){
            if (radius == levelFactor) {
              return getHorizontalPosition(i+1, levelFactor);
            } else {
              return getHorizontalPosition(i, levelFactor) - (cfg.TickLength / 2) * Math.cos(i * cfg.radians / total);
            }
          })
          .attr('y2', function(levelFactor, i){
            if (radius == levelFactor) {
              return getVerticalPosition(i+1, levelFactor);
            } else {
              return getVerticalPosition(i, levelFactor) + (cfg.TickLength / 2) * Math.sin(i * cfg.radians / total);
            }
          })
          .attr('transform', function(levelFactor) {
            return 'translate(' + (cfg.w/2-levelFactor) + ', ' + (cfg.h/2-levelFactor) + ')';
          });
        }
        else{
          levelLine
          .attr('class', 'level')
          .attr('x1', function(levelFactor, i){ return getHorizontalPosition(i, levelFactor); })
          .attr('y1', function(levelFactor, i){ return getVerticalPosition(i, levelFactor); })
          .attr('x2', function(levelFactor, i){ return getHorizontalPosition(i+1, levelFactor); })
          .attr('y2', function(levelFactor, i){ return getVerticalPosition(i+1, levelFactor); })
          .attr('transform', function(levelFactor) {
            return 'translate(' + (cfg.w/2-levelFactor) + ', ' + (cfg.h/2-levelFactor) + ')';
          });
        }
        if(cfg.axisLine || cfg.axisText) {
          var axis = container.selectAll('.axis').data(allAxis);

          var newAxis = axis.enter().append('g');
          if(cfg.axisLine) {
            newAxis.append('line');
          }
          if(cfg.axisText) {
            newAxis.append('text');
          }

          axis.exit().remove();

          axis.attr('class', 'axis');

          if(cfg.axisLine) {
            axis.select('line')
              .attr('x1', cfg.w/2)
              .attr('y1', cfg.h/2)
              .attr('x2', function(d, i) { return getHorizontalPosition(i, cfg.w / 2, cfg.factor); })
              .attr('y2', function(d, i) { return getVerticalPosition(i, cfg.h / 2, cfg.factor); });
          }

          if(cfg.axisText) {
            axis.select('text')
              .attr('class', function(d, i){
                var p = getHorizontalPosition(i, 0.5);

                return 'legend ' +
                  ((p < 0.4) ? 'left' : ((p > 0.6) ? 'right' : 'middle'));
              })
              .attr('dy', function(d, i) {
                var p = getVerticalPosition(i, 0.5);
                return ((p < 0.1) ? '1em' : ((p > 0.9) ? '0' : '0.5em'));
              })
              .text(function(d) { return d.name; })
              .attr('x', function(d, i){ return d.xOffset+ getHorizontalPosition(i, cfg.w/2, cfg.factorLegend); })
              .attr('y', function(d, i){ return d.yOffset+ getVerticalPosition(i, cfg.h/2, cfg.factorLegend); });
          }
        }

        // content
        data.forEach(function(d){
          d.axes.forEach(function(axis, i) {
            axis.x = getHorizontalPosition(i, cfg.w/2, (parseFloat(Math.max(axis.value, 0))/maxValue)*cfg.factor);
            axis.y = getVerticalPosition(i, cfg.h/2, (parseFloat(Math.max(axis.value, 0))/maxValue)*cfg.factor);
          });
        });

        var polygon = container.selectAll(".area").data(data, cfg.axisJoin);

        polygon.enter().append('polygon')
          .classed({area: 1, 'd3-enter': 1})
          .on('mouseover', function (d){
            container.classed('focus', 1);
            d3.select(this).classed('focused', 1);
          })
          .on('mouseout', function(){
            container.classed('focus', 0);
            d3.select(this).classed('focused', 0);
          });

        polygon.exit()
          .classed('d3-exit', 1) // trigger css transition
          .transition().duration(cfg.transitionDuration)
            .remove();

        polygon
          .each(function(d, i) {
            var classed = {'d3-exit': 0}; // if exiting element is being reused
            classed['radar-chart-serie' + i] = 1;
            if(d.className) {
              classed[d.className] = 1;
            }
            d3.select(this).classed(classed);
          })
          // styles should only be transitioned with css
          .style('stroke', function(d, i) { return cfg.color(i); })
          .style('fill', function(d, i) { return cfg.color(i); })
          .transition().duration(cfg.transitionDuration)
            // svg attrs with js
            .attr('points',function(d) {
              return d.axes.map(function(p) {
                return [p.x, p.y].join(',');
              }).join(' ');
            })
            .each('start', function() {
              d3.select(this).classed('d3-enter', 0); // trigger css transition
            });

        if(cfg.circles && cfg.radius) {
          var tooltip = container.selectAll('.tooltip').data([1]);
          tooltip.enter().append('text').attr('class', 'tooltip');

          var circleGroups = container.selectAll('g.circle-group').data(data, cfg.axisJoin);

          circleGroups.enter().append('g').classed({'circle-group': 1, 'd3-enter': 1});
          circleGroups.exit()
            .classed('d3-exit', 1) // trigger css transition
            .transition().duration(cfg.transitionDuration).remove();

          circleGroups
            .each(function(d) {
              var classed = {'d3-exit': 0}; // if exiting element is being reused
              if(d.className) {
                classed[d.className] = 1;
              }
              d3.select(this).classed(classed);
            })
            .transition().duration(cfg.transitionDuration)
              .each('start', function() {
                d3.select(this).classed('d3-enter', 0); // trigger css transition
              });

          var circle = circleGroups.selectAll('.circle').data(function(datum, i) {
            return datum.axes.map(function(d) { return [d, i]; });
          });

          circle.enter().append('circle')
            .classed({circle: 1, 'd3-enter': 1})
            .on('mouseover', function(d){
              var desc = "Best score: " + d[0].best_score;
              desc += "</br>Worst score: " + d[0].worst_score;
              desc += "</br>Average score: " + d[0].avg_score;
              desc += "</br>This score: " + d[0].this_score;
              $(".scores").html(desc);
              $(".measure-desc").html(d[0].measure_details);
              $(".desc-title").html(d[0].axis);
              d3.selectAll("circle").attr("r", 5).attr("stroke-width", 0);
              d3.select(this).attr("r", 10).attr("stroke", "black").attr("stroke-width", 3);
              container.classed('focus', 1);
              container.select('.area.radar-chart-serie'+d[1]).classed('focused', 1);
            })
            .on('mouseout', function(d){
              // $(".scores").html("");
              // $(".measure-desc").html("");
              // $(".desc-title").html("");
              // d3.select(this).attr("r", 5);
              container.classed('focus', 0);
              container.select('.area.radar-chart-serie'+d[1]).classed('focused', 0);
            })
            .on('mousedown', function(d){
              var score_index = this.className.baseVal % 28 + 1;
              d3.select("#chart-container svg").remove();
              $(".legend").hide();
              $(".measure-desc").hide();
              var desc = "<span class='score'>Best score: " + d[0].best_score + "</span>";
              desc += "<span class='score'>Worst score: " + d[0].worst_score + "</span>";
              desc += "<span class='score'>Average score: " + d[0].avg_score + "</span>";
              $(".scores").html(desc);
              // $("#field-desc").hide();
              var margin = {top: 20, right: 20, bottom: 30, left: 40},
                  width = 600 - margin.left - margin.right,
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
                  .ticks(10);

              var svg = d3.select('#chart-container').append('svg')
                  .attr('width', 600)
                  .attr('height', 550)
                .append("g")
                  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

              svg.append("text").text("< Back to radar chart").attr("font-size", "0.7rem")
                                      .attr("x", width - 100)
                                      .attr("y", -10).attr("class", "back")
                .on('mousedown', function(){
                        d3.select("#chart-container svg").remove();
                        $("#field-desc").show();
                        $(".measure-desc").show();
                        $(".legend").show();
                        $.getJSON('/datasets/ucla-medical-center-hospital-safety/scores.json', function(jdata) {
                          var data = jdata;
                          var chart = RadarChart.chart();
                          var cfg = chart.config();
                          chart.config({w:500,h:500,axisText: false});
                          var svg = d3.select('#chart-container').append('svg')
                            .attr('width', 500)
                            .attr('height', 500);
                          svg.append('g').classed('focus', 1).datum(data).call(chart);
                          });
                      });;

              d3.tsv("/datasets/ucla-medical-center-hospital-safety/hospitalbar.tsv", type, function(error, data) {
                x.domain(data.map(function(d) { return d.hospital_name; }));
                y.domain([0, d3.max(data, function(d) { return d["score_"+score_index]; })]);

                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis)
                    .selectAll(".tick text")
                    .call(wrap, x.rangeBand());

                svg.append("g")
                    .attr("class", "y axis")
                    .call(yAxis)
                  .append("text")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 6)
                    .attr("dy", ".71em")
                    .style("text-anchor", "end")
                    .text("Score");

                svg.selectAll(".bar")
                    .data(data)
                  .enter().append("rect")
                    .attr("class", "bar")
                    .attr("x", function(d) { return x(d.hospital_name)+7; })
                    .attr("width", x.rangeBand()-14)
                    .attr("y", function(d) { return y(d["score_"+score_index]); })
                    .attr("height", function(d) { return height - y(d["score_"+score_index]); })
                    .on("mouseover", function(d) {
                                 d3.select("g").append("text")
                                          .text(d["score_"+score_index])
                                          .attr("class", "data_label")
                                          .attr("font-size", "1.5rem")
                                          .attr("y", y(d["score_"+score_index])+40)
                                          .attr("x", x(d.hospital_name)+40)
                                          .attr("text-anchor", "middle")
                                          .attr("fill", "white");
                                        })
                    .on("mouseout", function(){
                      d3.select("g").selectAll(".data_label")
                                          .text("");
                    });
              });

              function type(d) {
                d["score_"+score_index] = +d["score_"+score_index];
                return d;
              }
            });

          circle.exit()
            .classed('d3-exit', 1) // trigger css transition
            .transition().duration(cfg.transitionDuration).remove();

          var circle_index = 0;

          circle
            .each(function(d) {
              var classed = {'d3-exit': 0}; // if exit element reused
              classed['radar-chart-serie'+d[1]] = 1;
              d3.select(this).classed(classed);
              d3.select(this).attr("class", circle_index);
              circle_index += 1;
            })
            // styles should only be transitioned with css
            .style('fill', function(d) { return cfg.color(d[1]); })
            .transition().duration(cfg.transitionDuration)
              // svg attrs with js
              .attr('r', cfg.radius)
              .attr('cx', function(d) {
                return d[0].x;
              })
              .attr('cy', function(d) {
                return d[0].y;
              })
              .each('start', function() {
                d3.select(this).classed('d3-enter', 0); // trigger css transition
              });

          // ensure tooltip is upmost layer
          var tooltipEl = tooltip.node();
          tooltipEl.parentNode.appendChild(tooltipEl);
        }
      });
    }

    radar.config = function(value) {
      if(!arguments.length) {
        return cfg;
      }
      if(arguments.length > 1) {
        cfg[arguments[0]] = arguments[1];
      }
      else {
        d3.entries(value || {}).forEach(function(option) {
          cfg[option.key] = option.value;
        });
      }
      return radar;
    };

    return radar;
  },
  draw: function(id, d, options) {
    var chart = RadarChart.chart().config(options);
    var cfg = chart.config();

    d3.select(id).select('svg').remove();
    d3.select(id)
      .append("svg")
      .attr("width", cfg.w)
      .attr("height", cfg.h)
      .datum(d)
      .call(chart);
  }
};

function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}
