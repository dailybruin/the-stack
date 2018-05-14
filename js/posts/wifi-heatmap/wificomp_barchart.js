const margin = {
  top: 60,
  right: 10,
  bottom: 10,
  left: 30
};
const width = 1000 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const networks = ["eduroam", "UCLA_WEB", "UCLA_WIFI", "UCLA_WEB_RES", "UCLA_WIFI_RES", "UCLA_SECURE_RES"];
let locMap = {};

Promise.all([
  d3.json("/datasets/wifi-heatmap/ucla-buildings.geojson"),
  d3.csv("/datasets/wifi-heatmap/WifiData.csv"),
  d3.json("/datasets/wifi-heatmap/ucla-outline.geojson")
]).then(data => {
  locMap[data[2].features[1].properties.name] = {
    feature: data[2].features[1],
    strengths: Array(6).fill(0),
    counts: Array(6).fill(0)
  };

  data[0].features.forEach(f => {
    locMap[f.properties.name] = {
      feature: f,
      strengths: Array(6).fill(0),
      counts: Array(6).fill(0)
    };
  });

  data[1].forEach(d => {
    let x = networks.indexOf(d.name);
    if (x !== -1) {
      for (loc in locMap) {
        if (!locMap.hasOwnProperty(loc)) continue;

        if (d3.geoContains(locMap[loc].feature, [parseFloat(d.longitude), parseFloat(d.latitude)])) {
          locMap[loc].strengths[x] += parseInt(d.strength, 10);
          locMap[loc].counts[x]++;
        }
      }
    }
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
    .text("Strengths of Different Wifi Networks by Location (higher is better)");

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
    yScale.domain([0, d3.min(data)]);
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
      .attr("y", 1);
    //.attr("y", d => yScale(d));

    // Update old bars
    bars.transition().duration(250)
      //.attr("y", d => yScale(d))
      .attr("height", d => yScale(d));

    // Delete removed bars
    bars.exit().remove();
  }

  // Dropdown logic
  let locations = Object.keys(locMap);

  // Handler for dropdown value change
  let dropdownChange = function () {
    let newOption = d3.select(this).property("value");
    let newData = locMap[newOption];

    let avgStr = Array(6);
    for (i = 0; i < 6; i++) {
      avgStr[i] = newData.strengths[i] / newData.counts[i];
      if (isNaN(avgStr[i])) {
        avgStr = Array(6).fill(0);
        break;
      }
    }

    updateBars(avgStr);
  };

  let dropdown = d3.select("#avg-network-str-bar-chart")
    .insert("select", "svg")
    .on("change", dropdownChange);

  dropdown.selectAll("option")
    .data(locations)
    .enter().append("option")
    .attr("value", d => d)
    .text(d => d);

  let initialData = Array(6);
  for (i = 0; i < 6; i++) {
    initialData[i] = locMap["UCLA (All)"].strengths[i] / locMap["UCLA (All)"].counts[i];
  }

  updateBars(initialData);
}
