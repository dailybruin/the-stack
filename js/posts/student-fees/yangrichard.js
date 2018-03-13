let data = [
  {
    interest_rate: '< 4%',
    Default: 60,
    'Charge-off': 20,
    Current: 456,
    '30 days': 367.22,
    '60 days': 222,
    '90 days': 198,
    Default: 60,
  },
  {
    interest_rate: '4-7.99%',
    'Charge-off': 2,
    Default: 30,
    Current: 271,
    '30 days': 125,
    '60 days': 78,
    '90 days': 72,
  },
];

let margin = {
    top: 20,
    right: 20,
    bottom: 40,
    left: 60,
  },
  width = 450 - margin.left - margin.right,
  height = 315 - margin.top - margin.bottom,
  that = this;

let x = d3
  .scaleBand()
  .rangeRound([0, width])
  .padding(0.1);

let y = d3.scaleLinear().rangeRound([height, 0]);

let color = d3.scaleOrdinal(d3.schemeCategory20);

let xAxis = d3.axisBottom(x);

let yAxis = d3.axisLeft(y).tickFormat(d3.format('200'));

let svg = d3
  .select('.bar-chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

color.domain(
  d3.keys(data[0]).filter(function(key) {
    return key !== 'interest_rate';
  })
);

let maxvalue = 0;
data.forEach(d => {
  let y0 = 0;
  d.rates = color.domain().map(name => {
    return {
      name: name,
      y0: y0,
      y1: (y0 += +d[name]),
      amount: d[name],
    };
  });
  if (y0 > maxvalue) maxvalue = y0;
  //choose one, first for absolute scale, second for 100% scale
  /*
    d.rates.forEach(function (name) {
        name.y0 /= maxvalue;
        name.y1 /= maxvalue;
    });
    */
  d.rates.forEach(d => {
    d.y0 /= y0;
    d.y1 /= y0;
  });
});

data.sort(function(a, b) {
  return b.rates[0].y1 - a.rates[0].y1;
});

x.domain(
  data.map(function(d) {
    return d.interest_rate;
  })
);

svg
  .append('g')
  .attr('class', 'x axis')
  .attr('transform', `translate(0, ${height})`)
  .call(xAxis);

svg
  .append('g')
  .attr('class', 'y axis')
  .call(yAxis);

let interest_rate = svg
  .selectAll('.interest-rate')
  .data(data)
  .enter()
  .append('g')
  .attr('class', 'interest-rate')
  .attr('transform', d => `translate(${x(d.interest_rate)}, 0)`);

let tip = d3
  .tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(
    d =>
      `<strong>Amount:</strong> <span style='color:white'>$${d.amount}</span>`
  );

svg.call(tip);

interest_rate
  .selectAll('rect')
  .data(d => d.rates)
  .enter()
  .append('rect')
  .attr('width', x.bandwidth())
  .attr('y', d => y(d.y1))
  .attr('height', d => y(d.y0) - y(d.y1))
  .style('fill', d => color(d.name))
  .on('mouseover', tip.show)
  .on('mouseout', tip.hide);
/*
let legend = svg.selectAll(".legend")
                .data(color.domain().slice().reverse())
                .enter()
                .append("g")
                .attr("class", "legend")
                .attr("transform", (d, i) => `translate(${50 + i * -100}, 283)`);
legend.append("rect")
      .attr("x", width + -53)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", color);
legend.append("text")
      .attr("x", width - 40)
      .attr("y", 5)
      .attr("width", 40)
      .attr("dy", ".35em")
      .style("text-anchor", "start")
      .text((d) => d);
*/
