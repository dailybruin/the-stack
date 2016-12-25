d3.csv('/datasets/course-catalog/tsne.csv', (error, data) => {
  data = processData(data);

  plot(data, '#scatterplot');
  $(window).resize(() => plot(data, '#scatterplot'));
});

function plot(data, container) {

  $(container).html('');

  const aspectRatio = 1,
        containerWidth = $(container).outerWidth();

  const containerChartRatio = 0.8,
        chartWidth = containerWidth * containerChartRatio,
        chartHeight = chartWidth * aspectRatio;

  const svg = d3.select(container)
      .append('svg')
      .attr('width', chartWidth)
      .attr('height', chartHeight)
      .attr('id', 'scatterplot-svg');

  const xScale = d3.scaleLinear().domain(d3.extent(data, d => d.x1)).range([15, chartWidth-15]),
        yScale = d3.scaleLinear().domain(d3.extent(data, d => d.x2)).range([chartHeight-15, 15]);
  
  data.forEach((d, i) => {
      d.x_ = xScale(d.x1);
      d.y_ = yScale(d.x2);
  })


  const labeledSubjects = [
      'Mathematics', 'Statistics', 'Computer Science', 'Life Sciences', 'Physiological Science', 
      'Bioengineering', 'Chemical Engineering', 'Physics', 'Economics', 'Management',
      'Philosophy', 'Design / Media Arts', 'Film and Television','Political Science', 'Sociology', 
      'History', 'Art History', 'Italian', 'French', 'Korean', 'Chinese', 'Dance', 'Music History'
  ];

  const labelYOffset = 0,
        labelXOffset = 0;

  const specialLabelXOffsets = {
      'Economics': -8
  }, specialLabelYOffsets = {
      'Economics': 15,
      'Bioengineering': 10,
      'Korean': -6,
      'Italian': -6
  };

  const labels = svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', d => {
          return d.x_ + labelXOffset + (specialLabelXOffsets[d.name]? specialLabelXOffsets[d.name] : 0);
      })
      .attr('y', d => {
          return d.y_ + labelYOffset + (specialLabelYOffsets[d.name]? specialLabelYOffsets[d.name] : 0);
      })
      .text((d, i) => {
          //const displayName = d.name.length >= 15? d.name.slice(0, 12) + ' ...' : d.name;
          return labeledSubjects.includes(d.name)? d.name : '';
      })
      .style('font-size', 11);

  const tip = d3.tip()
  .attr('class', 'scatterplot-tip')
  .html(d => {
      return "<span>" + d.name + "</span>";
  });

  svg.call(tip);
        
  const circles = svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => d.x_)
      .attr('cy', d => d.y_)
      .attr('r', 7)
      .attr('class', 'subject-circle default-circle')
      .attr('fill', 'darkseagreen')
      .attr('stroke', 'black 1px')
      .on('mouseover', (d, i) => {
          tip.show(d);
          d3.selectAll('circle')
            .attr('class', (p, j) => {
                return j == i? 'subject-circle default-circle circle-stroke' : 'subject-circle grey-circle';
            });
          labels.style('opacity', 0);
      })
      .on('mouseout', (d, i) => {
          tip.hide(d);
          d3.selectAll('circle')
            .attr('class', 'subject-circle default-circle')
          labels.style('opacity', 1);
      });

  labels.raise()
  
}

function processData(data) {
  data.forEach((d, i) => {
      d.x1 = Number(d.x1);
      d.x2 = Number(d.x2);
  });
  return data;
}

