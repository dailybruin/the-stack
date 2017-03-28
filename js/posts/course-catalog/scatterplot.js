d3.csv('/datasets/course-catalog/tsne.csv', (error, data) => {
  data = processData(data);

  plot(data, '#scatterplot');
  $(window).resize(() => plot(data, '#scatterplot'));
});

function plot(data, container) {

  $(container).html('');

  const aspectRatio = 1,
        containerWidth = $(container).outerWidth(),
        isMobile = containerWidth < 400;

  const containerChartRatio = 0.85,
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


  const labeledSubjects = isMobile? [
    'Mathematics', 'Computer Science',
    'Chemical Engineering', 'Economics', 'Management',
    'Geography', 'Environment', 'Sociology', 'Communication Studies'
  ] : [
    'Mathematics', 'Computer Science', 'Life Sciences', 'Psychology', 
    'Chemical Engineering', 'Economics', 'Management', 'Physics', 'Electrical Engineering',
    'Film and Television','Political Science', 'Sociology', 'Communication Studies', 
    'History', 'Classics', 'Italian', 'English', 'Korean', 'Chinese', 'Dance',
    'Geography', 'Environment'
  ];

  const labelYOffset = 0,
        labelXOffset = 0;

  const specialLabelXOffsets = {
    'Psychology': -20
  }, specialLabelYOffsets = {
    'Italian': 10,
    'Management': -15,
    'Psychology': 10,
    'Chinese': 10,
    'Economics': 10,
    'Geography': -5
  };

  const labels = svg.selectAll('text')
      .data(data.filter(d => {
        return labeledSubjects.includes(d.subject);
      }))
      .enter()
      .append('text')
      .attr('x', d => {
          return d.x_ + labelXOffset + (specialLabelXOffsets[d.subject]? specialLabelXOffsets[d.subject] : 0);
      })
      .attr('y', d => {
          return d.y_ + labelYOffset + (specialLabelYOffsets[d.subject]? specialLabelYOffsets[d.subject] : 0);
      })
      .text((d, i) => {
          //const displayName = d.subject.length >= 15? d.subject.slice(0, 12) + ' ...' : d.subject;
          return d.subject;
          //return labeledSubjects.includes(d.subject)? d.subject : '';
      })
      .style('font-size', 12);

  const tip = d3.tip()
  .attr('class', 'scatterplot-tip')
  .html(d => {
      return "<span>" + d.subject + "</span>";
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

