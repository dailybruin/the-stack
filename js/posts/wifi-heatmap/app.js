function zeros(dimensions) {
  let array = [];
  for (let i = 0; i < dimensions[0]; ++i) {
    array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
  }
  return array;
}

let count = zeros([100, 100]);
let total = zeros([100, 100]);
let finalData = [];
let maxVal = 0;
let minVal = 1000000;

const long2 = -118.438059;
const long1 = -118.453508;
const lat2 = 34.079024;
const lat1 = 34.058690;
const latUnit = (lat2 - lat1) / 100;
const longUnit = (long2 - long1) / 100;

const color = d3.scaleLinear()
.domain([-100, -30, 0])
.range(["#FF8C00", "green", "grey"])

let findIndex = (lat, long) => {
  let latDum = Math.trunc((lat - lat1) / latUnit);
  let longDum = Math.trunc((long - long1) / longUnit);
  return [latDum, longDum];
};

let findLatLong = (x, y) => {
  return [
    [lat1 + x * latUnit, lat1 + (x + 1) * latUnit],
    [long1 + y * longUnit, long1 + (y + 1) * longUnit]
  ];
};

d3.csv("/datasets/wifi-heatmap/WifiData.csv", data => {
  let x = 0;
  let y = 0;
  [x, y] = findIndex(parseFloat(data.latitude), parseFloat(data.longitude));
  count[x][y] += 1;
  total[x][y] += parseInt(data.strength);
});

let svg = d3
.select(".rough-wifi-heatmap-wrapper")
.append("svg");

let redraw = () => {
    let width = document.getElementsByClassName("rough-wifi-heatmap-wrapper")[0].clientWidth;
    width = Math.round(width/100)*100;
    let unitWidth = Math.trunc(width/100);
    console.log("lol", width, unitWidth);
    svg
    .attr("width", width)
    .attr("height", width)
    .selectAll("rect")
    .attr("x", d => d[1] * unitWidth)
    .attr("y", d => d[2] * unitWidth)
    .attr("width", unitWidth)
    .attr("height", unitWidth);
}


setTimeout(() => {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (count[i][j] != 0)
        total[i][j] = total[i][j] / count[i][j];
      finalData.push([total[i][j], i, j]);
      maxVal = Math.max(maxVal, Math.abs(total[i][j]));
      if (total[i][j] != 0)
        minVal = Math.min(minVal, Math.abs(total[i][j]));
    }
  }
  let width = document.getElementsByClassName("rough-wifi-heatmap-wrapper")[0].clientWidth;
  width = Math.round(width/100)*100;
  let unitWidth = Math.trunc(width/100);
  svg
  .attr("width", width)
  .attr("height", width)
  .selectAll("rect")
  .data(finalData)
  .enter()
  .append("rect")
  .attr("fill", d => color(d[0]))
  .attr("stroke", d => color(d[0]))
  .attr("x", d => d[1] * unitWidth)
  .attr("y", d => d[2] * unitWidth)
  .attr("width", unitWidth)
  .attr("height", unitWidth)
  .on("mouseover", d => {
    d3.select(".wifi-heatmap-str").text(`str: ${d[0]}`);
    d3.select(".wifi-heatmap-lat").text(`lat: ${findLatLong(d[1], d[2])[0][0]}, ${findLatLong(d[1], d[2])[0][1]}`);
    d3.select(".wifi-heatmap-lon").text(`lon: ${findLatLong(d[1], d[2])[1][0]}, ${findLatLong(d[1], d[2])[1][1]}`);
  })
  .on("mouseout", d => {
    d3.select(".wifi-heatmap-str").text(`HOVER TO SEE VALUE`);
    d3.select(".wifi-heatmap-lat").text(`HOVER TO SEE VALUE`);
    d3.select(".wifi-heatmap-lon").text(`HOVER TO SEE VALUE`);
  });
}, 1000);

window.addEventListener("resize", redraw);