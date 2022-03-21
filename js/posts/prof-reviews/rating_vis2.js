import { dropdownMenu } from './dropdownMenu.js';
import {
  STOPWORDS,
  MALE_COLOR,
  FEMALE_COLOR,
  isMobile,
  W_WIDTH,
  W_HEIGHT,
} from './globals.js';

(function() {
  /* configuration parameters */

  // const W_HEIGHT = parent_div.clientHeight;
  const config = {
    vw: W_WIDTH,
    vh: isMobile() ? Math.min(W_WIDTH, W_HEIGHT * 0.9) : W_HEIGHT * 0.6, // full height for desktop, square for mobile
    anim_speed: 1000,
  };
  let margin;
  if (!isMobile()) {
    margin = {
      top: config.vh * 0.02,
      right: config.vw * 0.02,
      bottom: config.vh * 0.07,
      left: config.vw * 0.12,
    };
  } else {
    margin = {
      top: config.vh * 0.03,
      right: config.vw * 0.03,
      bottom: config.vh * 0.1,
      left: config.vw * 0.2,
    };
  }
  let paddingInner = isMobile() ? 0.05 : 0.2;
  let axes_font_size = isMobile() ? 14 : 20;
  let axes_tick_font_size = isMobile() ? 9 : 20;
  const t = d3
    .transition()
    .duration(config.anim_speed)
    .ease(d3.easeCubic);
  var stats = ['temp', 'values'];

  /* static elements (only append once) */
  var male_rating_data = [],
    female_rating_data = [];
  // var date_array;

  const base_font_size = isMobile() ? 6 : 10;
  const padding_bottom = 20;
  const rating_svg = d3.select('#rating-svg-div').append('svg');
  rating_svg
    .attr('id', 'rating-svg')
    .style('width', config.vw + 'px')
    .style('height', config.vh + padding_bottom + 'px')
    .attr('font-family', 'sans-serif')
    .attr('font-size', base_font_size + 'px');
  // axes and labels
  var xAxisGroup = rating_svg.append('g').attr('class', 'ratings-xaxis');
  var yAxisGroup = rating_svg.append('g').attr('class', 'ratings-yaxis');
  var xLabel = rating_svg.append('text').attr('class', 'xlabel');
  var yLabel = rating_svg.append('text').attr('class', 'ylabel');
  var xScale;

  // calculate average rating
  const average = array => array.reduce((a, b) => a + b) / array.length;

  String.prototype.replaceAt = function(index, replacement) {
    return (
      this.substr(0, index) +
      replacement +
      this.substr(index + replacement.length)
    );
  };

  // main render function
  const render_stats = (
    male_rating_data,
    female_rating_data,
    stat = 'Overall rating'
  ) => {
    const t = d3
      .transition()
      .duration(config.anim_speed)
      .ease(d3.easeCubic);
    // const t2 = d3
    //   .transition()
    //   .duration(config.anim_speed)
    //   .ease(d3.easeElastic);
    // console.log('selected_stat', stat);

    // axes, labels, title
    // find new max value for y axis
    xScale = d3
      .scaleBand()
      .domain(['Male', 'Female'])
      .range([margin.left, config.vw - margin.right])
      .paddingInner(paddingInner)
      .paddingOuter(paddingInner);
    const xAxis = d3.axisBottom().scale(xScale);
    xAxisGroup
      .attr('transform', 'translate(0,' + (config.vh - margin.bottom) + ')')
      .transition(t)
      .call(xAxis);
    xLabel
      .attr('text-anchor', 'middle')
      .attr('x', (config.vw + margin.left) / 2)
      .attr('y', config.vh)
      .style('font-size', axes_font_size)
      .text('Professor gender');

    const yScale = d3
      .scaleLinear()
      .domain([5, 0])
      .range([margin.top, config.vh - margin.bottom]); // need to offset bars/circles by margin.top
    const yAxis = d3.axisLeft().scale(yScale);
    yAxisGroup
      .attr('transform', 'translate(' + margin.left + ',0)')
      .style('font-size', '15px')
      .transition(t)
      .call(yAxis);
    yLabel
      .attr('text-anchor', 'middle')
      .attr('x', -config.vh / 2)
      .attr('y', margin.left / 2)
      .attr('transform', 'rotate(-90)')
      .style('font-size', axes_font_size)
      // .style("padding-bottom","5px")
      .text(stat);

    if (!isMobile()) {
      // increase x tick size for desktop
      d3.selectAll('.ratings-xaxis>.tick>text').each(function(d, i) {
        d3.select(this).style('font-size', '2em');
      });
    } else {
      // shrink y tick size for mobile
      // console.log('MoBiLe');
      d3.selectAll('.ratings-yaxis>.tick>text').each(function(d, i) {
        d3.select(this).style('font-size', d => axes_tick_font_size + 'px');
      });
    }

    // re-calculate means for male/female -> create new array of objects
    let avg_female_rtg = average(female_rating_data.map(d => d[stat]));
    let avg_male_rtg = average(male_rating_data.map(d => d[stat]));
    let avg_data = [
      { avg: avg_female_rtg, gender: 'Female', color: FEMALE_COLOR },
      { avg: avg_male_rtg, gender: 'Male', color: MALE_COLOR },
    ];
    // console.log(avg_data);

    // plot rects
    const bar_width = (config.vw / 2) * 0.75;
    rating_svg
      .selectAll('rect')
      .data(avg_data, d => d.gender)
      .join(
        enter =>
          enter
            .append('rect')
            // .attr("id", d => {return String(d.gender) + String(d.avg)})
            .attr('x', d => xScale(d.gender))
            .attr('y', d => yScale(0))
            .attr('height', 0)
            // .attr("width", bar_width)
            .attr('width', xScale.bandwidth())
            .attr('fill', d => d.color)
            .attr('stroke', 'black')
            .call(enter =>
              enter
                .transition(t)
                .attr('y', d => yScale(d.avg))
                .attr('height', d => config.vh - margin.bottom - yScale(d.avg))
                .attr('fill', d => d.color)
            ),
        update =>
          update.call(update =>
            update
              .transition(t)
              .attr('y', d => yScale(d.avg))
              .attr('height', d => config.vh - margin.bottom - yScale(d.avg))
          ),
        exit =>
          exit.call(exit =>
            exit
              .transition(t)
              .attr('height', 0)
              .attr('opacity', 1e-6)
              .remove()
          )
      );
    let bar_label_offset = isMobile() ? 0.23 : 0.2;
    // add text
    rating_svg
      .selectAll('.bar-label')
      .data(avg_data)
      .join(
        enter =>
          enter
            .append('text')
            .attr('class', 'bar-label')
            .attr('x', d => {
              return xScale(d.gender) + xScale.bandwidth() / 2;
            }) // transfrom margin, center on half bar width
            .attr('y', yScale(0))
            .attr('text-anchor', 'middle')
            .call(enter =>
              enter
                .transition(t)
                .attr('y', d => yScale(d.avg - bar_label_offset))
                .attr('font-size', isMobile() ? 11 : 20)
                .attr('fill', 'white')
                .text(d => d.avg.toFixed(2))
            ),
        update =>
          update.call(update =>
            update
              .transition(t)
              .attr('y', d => yScale(d.avg - bar_label_offset))
              .attr('fill', 'white')
              .text(d => d.avg.toFixed(2))
          ),
        exit =>
          exit.call(exit =>
            exit
              .transition(t)
              .attr('height', 0)
              .attr('opacity', 1e-6)
              .remove()
          )
      );
  };

  d3.csv('/datasets/prof-reviews/prof_sentiment_by_qtr_filt.csv').then(data => {
    data.forEach(d => {
      d['Overall rating'] = +d['Overall rating'];
      d['Easiness rating'] = +d['Easiness rating'];
      d['Workload rating'] = +d['Workload rating'];
      d['Clarity rating'] = +d['Clarity rating'];
      d['Helpfulness rating'] = +d['Helpfulness rating'];
      d.pos_score = +d.pos_score;
      d.neg_score = +d.neg_score;
      d.review_is_positive = +d.review_is_positive;
      d.time_taken = +d.time_taken; // numeric qtr (1-4)
      // d.time_taken2 = replace_qtr(d.time_taken) // alphabetic qtr
      // split male/female data
      if (d.gender_guess == 'Female') {
        female_rating_data.push(d);
      } else {
        male_rating_data.push(d);
      }
    });
    // sort male and female by dates
    // console.log('mf',male_rating_data,female_rating_data)
    // female_rating_data.sort((a,b) => a.time_taken > b.time_taken ? 1:-1);
    // male_rating_data.sort((a,b) => a.time_taken > b.time_taken ? 1:-1);
    // console.log('mf-sorted',male_rating_data,female_rating_data) // sorted

    // filter for stats to plot
    stats = Object.getOwnPropertyNames(data[1]);
    let not_stat = [
      'quarter_taken',
      'year_taken',
      'gender_guess',
      'pre_covid',
      'time_taken',
    ];
    stats = stats.filter(item => !not_stat.includes(item));
    stats = stats.slice(0, 5);
    // console.log("stats",stats);

    var stat = stats[0]; // overall rating
    // console.log("stat",stat);
    // populate dropdown from filtered data
    d3.select('#stats-menu3').call(dropdownMenu, {
      options: stats,
      onOptionClicked: onStatClicked,
      selectedOption: stat,
      label: 'Rating: ',
      id: 'rating-viz-select-1',
    });
    // create date list
    // date_array = data.map(d=>d.time_taken).sort(sort_num)
    // date_array = replace_qtr_array(date_array)
    // console.log("date-array",date_array);

    // console.log(male_rating_data,female_rating_data)
    render_stats(male_rating_data, female_rating_data, stat);
  });

  const onStatClicked = selection => {
    // if (selection == stats[3] || selection == stats[4] || selection == stats[5]){
    render_stats(male_rating_data, female_rating_data, selection);
  };
})(); // create and run anonymous fn
