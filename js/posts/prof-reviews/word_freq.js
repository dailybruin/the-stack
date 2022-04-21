import { dropdownMenu } from './dropdownMenu.js';
import {
  STOPWORDS,
  MALE_COLOR,
  FEMALE_COLOR,
  MALE_COLOR_BRIGHT,
  FEMALE_COLOR_BRIGHT,
  W_WIDTH,
  W_HEIGHT,
  isMobile,
  INCLUDEWORDS,
} from './globals.js';

(function() {
  /* configuration parameters */
  const config = {
    vw: W_WIDTH * 0.9,
    vh: isMobile() ? Math.min(W_WIDTH * 0.9, W_HEIGHT * 0.65) : W_HEIGHT * 0.65, // full height for desktop, square for mobile
    anim_speed: 1000,
  };
  let margin;
  if (!isMobile()) {
    margin = {
      top: config.vh * 0.05,
      right: config.vw * 0.02,
      bottom: config.vh * 0.1,
      left: config.vw * 0.18,
    };
  } else {
    margin = {
      top: config.vh * 0.03,
      right: config.vw * 0.01,
      bottom: config.vh * 0.15,
      left: config.vw * 0.25,
    };
  }
  const t = d3
    .transition()
    .duration(config.anim_speed)
    .ease(d3.easeCubic);
  // point radius range
  let point_radius = isMobile() ? 3 : 4;
  let point_radius_min = isMobile() ? 1 : 3;
  let point_radius_max = isMobile() ? 5 : 7;
  // y axis tick range
  let axes_tick_font_size = isMobile() ? 9 : 15;
  const axes_tick_font_size_min = isMobile() ? 7 : 12;
  const axes_tick_font_size_max = isMobile() ? 12 : 16;
  let axes_font_size = isMobile() ? 9 : 20;
  let top_n_words = isMobile() ? 15 : 25;
  let prev_n_words = top_n_words;
  let top_n_dropdown = document.getElementById('num-words-input1');
  top_n_dropdown.value = top_n_words;

  /* static elements (only append once) */
  var sub_data, adj_data;
  const stat_svg = d3.select('#lollipop-svg-div').append('svg');
  // mobile compatability
  stat_svg
    .attr('id', 'lollipop-svg')
    .style('width', config.vw  + 'px')
    .style('height', config.vh  + 'px')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 10);
  // axes and labels
  var xAxisGroup = stat_svg.append('g').attr('class', 'xaxis');
  var yAxisGroup = stat_svg.append('g').attr('class', 'lollipop-yaxis');
  var xLabel = stat_svg.append('text').attr('class', 'xlabel');
  var xScale;
  // legend
  stat_svg.append('g').attr('class', 'legend');
  let legend_x = isMobile() ? config.vw * 0.65 : config.vw * 0.75;
  let legend_y = isMobile() ? config.vh * 0.65 : config.vh * 0.65;
  let legend_font_size = isMobile() ? 8 : 15;
  stat_svg
    .select('.legend')
    .append('circle')
    .attr('cx', legend_x)
    .attr('cy', legend_y)
    .attr('r', point_radius)
    .style('stroke', 'black')
    .style('fill', MALE_COLOR_BRIGHT);
  stat_svg
    .select('.legend')
    .append('circle')
    .attr('cx', legend_x)
    .attr('cy', legend_y + 2 * legend_font_size)
    .attr('r', point_radius)
    .style('stroke', 'black')
    .style('fill', FEMALE_COLOR_BRIGHT);
  stat_svg
    .select('.legend')
    .append('text')
    .attr('x', legend_x + (2 / 3) * legend_font_size)
    .attr('y', legend_y)
    .text('Male professors')
    .style('font-size', legend_font_size)
    .attr('alignment-baseline', 'middle');
  stat_svg
    .select('.legend')
    .append('text')
    .attr('x', legend_x + (2 / 3) * legend_font_size)
    .attr('y', legend_y + 2 * legend_font_size)
    .text('Female professors')
    .style('font-size', legend_font_size)
    .attr('alignment-baseline', 'middle');

  // stat dropdown
  const stats = [
    'for female professors',
    'for male professors',
    'with largest difference',
  ];
  var stat = stats[0]; // the stat to sort words by
  const onStatClicked = selection => {
    if (selection == stats[2]) {
      stat = 'difference_abs';
    } else if (selection == stats[0]) {
      stat = 'female';
    } else if (selection == stats[1]) {
      stat = 'male';
    }
    render_stats(adj_data, stat);
  };
  d3.select('#stats-menu1').call(dropdownMenu, {
    options: stats,
    onOptionClicked: onStatClicked,
    selectedOption: stat,
    label: 'adjectives... ',
    id: 'word-freq-select-1',
  });

  // spinner
  let num_words_input = document.getElementById('num-words-input1');
  num_words_input.onchange = () => {
    prev_n_words = top_n_words;
    top_n_words = parseInt(num_words_input.value);
    console.log('top_n', top_n_words, 'prev_n', prev_n_words);

    let scale = prev_n_words / top_n_words; // scale > 1 (increasing) when current < prev; scale < 1 (decreasing) when current > prev
    point_radius = Math.max(
      Math.min(point_radius * scale, point_radius_max),
      point_radius_min
    );
    axes_tick_font_size = Math.max(
      Math.min(axes_tick_font_size * scale, axes_tick_font_size_max),
      axes_tick_font_size_min
    );

    // console.log(
    //   'new point radius',
    //   point_radius,
    //   'new font',
    //   axes_tick_font_size
    // );
    let current_stat = document.getElementById('word-freq-select-1').value;
    onStatClicked(current_stat); // call onStatClicked to also determine first dropdown value
  };

  // function to clear previous graphics by class (needed since different datasets)
  const clear_graphics = svg => {
    const all_stats = ['male', 'female', 'difference'];
    for (const stat of all_stats) {
      svg.selectAll('.' + stat + '-sorted-circles').remove();
      svg.selectAll('.' + stat + '-sorted-rects').remove();
      svg.selectAll('.' + stat + '-sorted-circle').remove();
      svg.selectAll('.' + stat + '-sorted-rect').remove();
    }
  };

  // function to plot both female/male stats
  const plot_lines = (
    svg,
    xScale,
    yScale,
    t,
    gender = 'male',
    stat = 'male',
    color = '#aa42f5',
    data = sub_data
  ) => {
    if (stat == 'difference_abs') {
      stat = 'difference';
    }
    // lines
    svg
      .append('g')
      .attr('class', stat + '-sorted-rects')
      .attr('id', gender + stat + 'sorted-r');
    svg
      .select('#' + gender + stat + 'sorted-r')
      .selectAll('rect')
      .data(data)
      .join(
        enter =>
          enter
            .append('rect')
            .attr('class', stat + '-sorted-rect')
            .attr('x', xScale(0))
            .attr('y', d => {
              // show selected gender on top
              if (stat == 'male') {
                return gender === 'male'
                  ? yScale(d.word) - (point_radius * 3) / 4
                  : yScale(d.word) + (point_radius * 3) / 4;
              } else {
                return gender === 'female'
                  ? yScale(d.word) - (point_radius * 3) / 4
                  : yScale(d.word) + (point_radius * 3) / 4;
              }
            })
            .attr('pointer-events', 'none') // testing
            .attr('width', 0)
            .attr('height', point_radius / 4)
            .call(enter =>
              enter
                .transition(t)
                .attr('fill', 'black')
                // .attr("gender", "male")
                .attr('freq', d => d[gender])
                .attr('width', d => xScale(d[gender]) - xScale(0))
            ),
        update => update.call(update => update.transition(t)),
        exit =>
          exit.call(exit =>
            exit
              .transition()
              .attr('width', xScale(0))
              .attr('x', xScale(0))
              .remove()
          )
      );
    // circles
    svg
      .append('g')
      .attr('class', stat + '-sorted-circles')
      .attr('id', gender + stat + 'sorted-c');
    svg
      .select('#' + gender + stat + 'sorted-c')
      .selectAll('circle')
      .data(data)
      .join(
        enter =>
          enter
            .append('circle')
            .on('mouseover', (event, d) => {
              mouseover(d);
              mouseover2(event);
            })
            .on('mousemove', (event, d) => {
              mousemove(event, d, stat);
              mousemove2(event);
            })
            .on('mouseout', (event, d) => {
              mouseleave(event, d);
            })
            .attr('class', stat + '-sorted-circle')
            .attr('cx', xScale(0))
            .attr('cy', d => {
              // show selected gender on top
              if (stat == 'male') {
                return gender === 'male'
                  ? yScale(d.word) - (point_radius * 3) / 4
                  : yScale(d.word) + (point_radius * 3) / 4;
              } else {
                return gender === 'female'
                  ? yScale(d.word) - (point_radius * 3) / 4
                  : yScale(d.word) + (point_radius * 3) / 4;
              }
            })
            .call(enter =>
              enter
                .transition(t)
                .attr('fill', color)
                .attr('stroke', 'black')
                .attr('stroke-width', point_radius / 4)
                .attr('gender', gender)
                .attr('freq', d => d[gender])
                .attr('cx', d => xScale(d[gender])) //p
                .attr('r', point_radius)
            ),
        update => update.call(update => update.transition(t)),
        exit =>
          exit.call(exit =>
            exit
              .transition()
              .attr('height', 0)
              .attr('y', config.inner_vh)
              .remove()
          )
      );
  };

  // function to sort data by statistic
  const sort_data = (data, stat, top_n) => {
    data.sort((a, b) => (a[stat] > b[stat] ? -1 : 1)); // sorts descending
    return data.slice(0, top_n);
  };

  // main render function
  const render_stats = (data, stat = 'female', num_words = top_n_words) => {
    // console.log('render',data,stat)
    const t = d3
      .transition()
      .duration(config.anim_speed)
      .ease(d3.easeCubic);
    // sort data by selected statistic and slice top n
    sub_data = sort_data(data, stat, num_words);

    // axes, labels, title
    // find new max value for x axis
    let max1 = Math.max(...sub_data.map(d => d.male));
    let max2 = Math.max(...sub_data.map(d => d.female));
    let max = Math.max(max1, max2) * 1.05;
    xScale = d3
      .scaleLinear()
      .domain([0, max])
      .range([margin.left, config.vw - margin.right]);
    const xAxis = d3.axisBottom().scale(xScale);
    xAxisGroup
      .attr(
        'transform',
        'translate(0,' + (config.vh - (margin.bottom * 2) / 3) + ')'
      )
      .transition(t)
      .call(xAxis);
    xLabel
      .attr('text-anchor', 'middle')
      .attr('x', (config.vw + margin.left) / 2)
      .attr('y', config.vh)
      .style('font-size', axes_font_size)
      .text('Percent of all words');

    const yScale = d3
      .scalePoint()
      .domain(sub_data.map(d => d.word))
      .range([margin.top, config.vh - margin.bottom]); // need to offset bars/circles by margin.top
    const yAxis = d3.axisLeft().scale(yScale);
    yAxisGroup
      .attr('transform', 'translate(' + margin.left + ',0)')
      .style('font-size', '15px')
      .transition(t)
      .call(yAxis);

    // assign ID to y-axis tick text so can bold on hover and set size for screen
    d3.select('g.lollipop-yaxis')
      .selectAll('.tick text')
      .attr('id', (d, i) => {
        return d + '-word';
      })
      .style('font-size', axes_tick_font_size + 'px'); // scale for number of words (more words -> smaller)

    // clear other lines from svg
    clear_graphics(stat_svg);
    // then plot data
    plot_lines(
      stat_svg,
      xScale,
      yScale,
      t,
      'male',
      stat,
      MALE_COLOR_BRIGHT,
      sub_data
    ); // plot male
    plot_lines(
      stat_svg,
      xScale,
      yScale,
      t,
      'female',
      stat,
      FEMALE_COLOR_BRIGHT,
      sub_data
    ); // plot female
  };

  // mouseover/tooltip functions
  var tooltip1 = d3
    .select('body')
    .append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);
  const mouseover = function(d) {
    // show tooltip
    tooltip1
      .transition()
      .duration(200)
      .style('opacity', 0.9)
      .style('padding', '0px 8px');
    d3.select(this).attr('r', point_radius * 1.2);
  };
  const mousemove = function(event, d, stat) {
    // add text
    let tooltip_text;
    // determine color of diff
    let diff_color;
    if (d.male > d.female) {
      diff_color = MALE_COLOR_BRIGHT;
    } else {
      diff_color = FEMALE_COLOR_BRIGHT;
    }
    if (stat == 'difference') {
      tooltip_text =
        "<span style='color:" +
        diff_color +
        "'><b>Difference</b>: " +
        d.difference_abs.toFixed(3) +
        '%</span><br><b>Male</b>: ' +
        d.male.toFixed(3) +
        '%<br><b>Female</b>: ' +
        d.female.toFixed(3) +
        '%';
    } else if (stat == 'male') {
      tooltip_text =
        '<b>Male</b>: ' +
        d.male.toFixed(3) +
        '%<br><b>Female</b>: ' +
        d.female.toFixed(3) +
        "%<br><span style='color:" +
        diff_color +
        "'><b>Difference</b>: " +
        d.difference_abs.toFixed(3) +
        '%</span>';
    } else {
      tooltip_text =
        '<b>Female</b>: ' +
        d.female.toFixed(3) +
        '%<br><b>Male</b>: ' +
        d.male.toFixed(3) +
        "%<br><span style='color:" +
        diff_color +
        "'><b>Difference</b>: " +
        d.difference_abs.toFixed(3) +
        '%</span>';
    }
    tooltip1
      .html(tooltip_text)
      .style('top', event.pageY + 'px')
      .style('left', event.pageX + 15 + 'px')
      .style('color', 'white');
    d3.select(this).attr('r', point_radius * 1.2);
    // bold word and color acc. to larger pct
    stat_svg
      .select('#' + d.word + '-word')
      .style('font-weight', 700)
      .style('font-size', axes_tick_font_size * 1.1)
      .style('fill', () => {
        if (d.male > d.female) {
          return MALE_COLOR_BRIGHT;
        } else {
          // console.log(d.male,d.female);
          return FEMALE_COLOR_BRIGHT;
        }
      });
  };
  const mouseleave = function(event, d) {
    tooltip1
      .style('opacity', 0)
      .style('padding', 0)
      .attr('height', 0)
      .attr('width', 0);
    let tooltip_text = '';
    tooltip1.html(tooltip_text); // clear html?
    d3.select(this).attr('r', point_radius);
    // un-bold word
    // console.log("unbold?")
    stat_svg
      .select('#' + d.word + '-word')
      .style('font-weight', 400)
      .style('font-size', axes_tick_font_size)
      .style('fill', '#000');
  };

  const mouseover2 = function(event) {
    let mousex = event.pageX;
    vertical_guide.style('opacity', 1);
    percent_text.style('opacity', 1).attr('text-anchor', 'left');
  };
  // get margin and padding as offset
  let post_div = document.getElementsByClassName('post-content')[0];
  const mouse_offset =
    post_div.offsetLeft +
    parseFloat(
      window.getComputedStyle(post_div, null).getPropertyValue('padding-left')
    );
  const mousemove2 = function(event) {
    let mousex = event.pageX;
    // console.log("mousex",mousex);
    vertical_guide
      .attr('x1', mousex - mouse_offset)
      .attr('x2', mousex - mouse_offset);
    percent_text
      .html(xScale.invert(mousex - mouse_offset).toFixed(3) + '%')
      .attr('x', mousex - mouse_offset + config.vw * 0.01)
      .attr('y', config.vh - margin.bottom * 1.5)
      .attr('text-anchor', 'left');
  };
  const mouseleave2 = function(event, d) {
    vertical_guide.style('opacity', 0);
    percent_text.style('opacity', 0);
  };

  // static components before/above data
  var overlay_g = stat_svg.append('g').classed('overlay-g', true);
  var overlay_rect = overlay_g.append('rect');
  // add hover effects for circles
  overlay_rect
    .attr('class', 'overlay-rect')
    .attr('width', config.vw - margin.left - margin.right) // set to graph area
    .attr('height', config.vh - margin.bottom - margin.top)
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
    .style('fill', 'none') // transparent fill
    .style('pointer-events', 'all') // tracks mouse location
    // .on('mouseover', () => {if(!isMobile()){mouseover2()};})
    .on('mouseover', mouseover2)
    .on('mousemove', mousemove2)
    .on('mouseout', mouseleave2);
  // and to words
  d3.select('g.lollipop-yaxis')
    .selectAll('.tick text')
    .on('mouseover', mouseover)
    .on('mousemove', mousemove)
    .on('mouseout', mouseleave);

  // Add vertical line to read percentages more easily (desktop only)
  if (!isMobile()) {
    var vertical_guide = overlay_g.append('line');
    vertical_guide
      .attr('class', 'vertical-guide')
      .attr('y1', margin.top)
      .attr('y2', config.vh - margin.bottom)
      .style('stroke-width', 1)
      .style('stroke', '#000')
      .style('fill', 'none')
      .style('stroke-dasharray', '2, 2')
      .style('opacity', 0);
  }
  var percent_text = overlay_g.append('text');
  percent_text
    .style('opacity', 0)
    .style('font-size', '15px')
    .attr('text-anchor', 'left')
    .attr('alignment-baseline', 'middle');

  // load male and female professor frequency data
  d3.csv('/datasets/prof-reviews/prof_word_freqs_POS.csv').then(data => {
    // console.log('freq_data',data);
    data.forEach(d => {
      d.male = +d.male;
      d.female = +d.female;
      d.difference_abs = +d.difference_abs;
    });
    adj_data = data.filter(function(el) {
      return (
        (el.POS == 'ADJ' || el.POS == 'ADV') &&
        (!STOPWORDS.includes(el.word) || INCLUDEWORDS.includes(el.word))
      );
    });
    var stat = 'female';
    render_stats(adj_data, stat);
  });

  // function to change dropdown to largest diff and re-render
  let inter_text_1 = document.getElementById('interactive-text-1');
  let largest_diff = 'with largest difference';
  inter_text_1.onclick = () => {
    document.getElementById('word-freq-select-1').value = largest_diff;
    let options = document.getElementById('word-freq-select-1').options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === largest_diff) {
        options.selectedIndex = i;
        break;
      }
    }
    let stat = 'difference_abs';
    render_stats(adj_data, stat);
  };
})(); // create and run anonymous fn
