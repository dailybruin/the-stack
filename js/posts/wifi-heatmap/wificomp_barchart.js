const margin = {
  top: 60,
  right: 10,
  bottom: 10,
  left: 30
};
const width = 1000 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const networks = ["eduroam", "UCLA_WEB", "UCLA_WIFI", "UCLA_WEB_RES", "UCLA_WIFI_RES", "UCLA_SECURE_RES"];
let strengths = Array(6).fill(0);
let counts = Array(6).fill(0);
let avgStr = Array(6).fill(0);

// TODO WIP
let locMap = {
  all: [1, 2, 3, 4, 5]
}

Promise.all([
  d3.csv("/datasets/wifi-heatmap/WifiData.csv", data => {
    let x = networks.indexOf(data.name);
    if (x !== -1) {
      strengths[x] += parseInt(data.strength);
      counts[x]++;
    }
  })
]).then(x => {
  avgStr = strengths.map((s, i) => {
    return s / counts[i]
  });
  makeWifiCompBarChart();
})

let makeWifiCompBarChart = () => {
  // Constructing actual wificomp_svg in body
  const wificomp_svg = d3.select("#avg-network-str-bar-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Add title
  wificomp_svg.append("g")
    .append("text")
    .attr("x", width / 2)
    .attr("y", -40)
    .attr("text-anchor", "middle")
    .text("Strengths of Different Wifi Networks by Location");

  // Initalize scales
  const xScale = d3.scaleBand()
    .domain(networks)
    .range([0, width])
    .padding(0.1);

  const yScale = d3.scaleLinear()
    .range([0, height]);

  // Initalize axes
  const xAxis = d3.axisTop(xScale);
  const yAxis = d3.axisLeft(yScale);

  // Add axes
  const xAxisDrawn = wificomp_svg.append("g")
    //.attr('transform', 'translate(0,' + height + ')')
    .call(xAxis);

  const yAxisDrawn = wificomp_svg.append("g")
    .call(yAxis);

  // Add g for rectangles
  const barGroup = wificomp_svg.append("g");

  // Function to update bars
  let updateBars = data => {
    yScale.domain([0, d3.max(data)]);
    yAxisDrawn.call(yAxis);

    const bars = barGroup.selectAll(".bar")
      .data(data);

    // Add new bars
    bars.enter()
      .append("rect")
      .attr("class", "bar")
      .attr("width", xScale.bandwidth())
      .attr("height", d => yScale(d))
      .attr("x", (d, i) => xScale(networks[i]))
    //.attr("y", d => yScale(d));

    // Update old bars
    bars.transition().duration(250)
      //.attr("y", d => yScale(d))
      .attr("height", d => height - yScale(d));

    // Delete removed bars
    bars.exit().remove();
  }

  // Dropdown logic: TODO WIP
  var locations = Object.keys(locMap);

  // Handler for dropdown value change
  var dropdownChange = function () {
    let newOption = d3.select(this).property('value');
    let newData = locMap[newOption];

    updateBars(newData);
  };

  var dropdown = d3.select("#avg-network-str-bar-chart")
    .insert("select", "svg")
    .on("change", dropdownChange);

  dropdown.selectAll("option")
    .data(locations)
    .enter().append("option")
    .attr("value", d => d)
    .text(d => d);

  // var initialData = locMap[.....];
  updateBars(avgStr);
}
