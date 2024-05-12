const data = {
  name: 'The Hill',
  children: [
    { name: 'Epicuria at Covel', value: 0.05388507949815852 },
    { name: 'De Neve', value: 0.13310776417043446 },
    { name: 'Spice Kitchen at Feast', value: 0.04439320897086565 },
    { name: 'Bruin Plate', value: 0.14970805760996497 },
    { name: 'Bruin Café', value: 0.05978381291732791 },
    { name: 'Café 1919', value: 0.024295595412761627 },
    { name: 'Rendezvous', value: 0.12755037877653683 },
    { name: 'The Study at Hedrick', value: 0.17719555648710963 },
    { name: 'The Drey', value: 0.030080546156840436 },
    { name: 'Campus Dining Options', value: 0.2 },
  ],
};

function createChart() {
  // Chart code
  const width = 928;
  const height = width;
  const margin = 1;
  const format = d3.format(',.2%');
  const colorScale = d3
    .scaleSequential(d3.interpolateBlues) // Blue color scale
    .domain([0, d3.max(data.children, d => d.value)]); // Domain based on data values
  const pack = d3
    .pack()
    .size([width - margin * 2, height - margin * 2])
    .padding(3);

  const root = pack(
    d3
      .hierarchy(data)
      .sum(d => d.value)
      .sort((a, b) => b.value - a.value)
  );

  const svg = d3
    .create('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('style', 'width: 100%; height: auto; font: 20px sans-serif;') // Increased font size to 16px
    .attr('text-anchor', 'middle');

  const node = svg
    .append('g')
    .selectAll()
    .data(root.descendants())
    .join('g')
    .attr('transform', d => `translate(${d.x},${d.y})`);

  node.append('title').text(
    d =>
      `${d
        .ancestors()
        .map(d => d.data.name)
        .reverse()
        .join('/')}\n${format(d.value)}`
  );

  node
    .append('circle')
    .attr('fill', d => (d.children ? '#fff' : colorScale(d.value))) // Use color scale
    .attr('stroke', d => (d.children ? '#bbb' : null))
    .attr('r', d => d.r);

  const text = node
    .filter(d => !d.children && d.r > 10)
    .append('text')
    .attr('clip-path', d => `circle(${d.r})`)
    .attr('fill', d =>
      d3.lab(colorScale(d.value)).l > 70 ? 'black' : 'white'
    );

  text
    .selectAll()
    .data(d => d.data.name.split(/(?=[A-Z][a-z])|\s+/g))
    .join('tspan')
    .attr('x', 0)
    .attr('y', (d, i, nodes) => `${i - nodes.length / 2 + 0.35}em`)
    .text(d => d);

  text
    .append('tspan')
    .attr('x', 0)
    .attr(
      'y',
      d => `${d.data.name.split(/(?=[A-Z][a-z])|\s+/g).length / 2 + 0.35}em`
    )
    .attr('fill-opacity', 0.7)
    .text(d => format(d.value));

  document.getElementById('circle-chart').appendChild(svg.node());
}

// Call the function to create the chart
createChart();
