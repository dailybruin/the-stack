function zeros(dimensions) {
  let array = [];
  for (let i = 0; i < dimensions[0]; ++i) {
    array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
  }
  return array;
}
/*
-118.456
-118.437
34.06
34.08
*/

const long2 = -118.437;//-118.438059;
const long1 = -118.456;//-118.453508;
const lat2 = 34.08;//34.079024;
const lat1 = 34.06;//34.058690;
const setDist = 0.0002;
const numLat = Math.trunc((lat2 - lat1) / setDist);
const numLong = Math.trunc((long2 - long1) / setDist);
const latUnit = (lat2 - lat1) / numLat;
const longUnit = (long2 - long1) / numLong;

console.log("long:", long2 - long1);
console.log("lat", lat2 - lat1);
console.log("numlong:", numLong);
console.log("numlat", numLat);
console.log("longUnit:", longUnit);
console.log("latUnit", latUnit);

let count = zeros([numLong, numLat]);
let total = zeros([numLong, numLat]);
let finalData = [];
let maxVal = 0;
let minVal = 1000000;

/*
const colorRelative = d3.scaleLinear()
.domain([-100, -30, 0])
.range(["#FF8C00", "green", "grey"])
*/
const colorRelative = d3.scaleLinear()
.domain([-90, -67, -30, 0])
.range(["red", "yellow", "green", "#FDFDFD"]) //#D3D3D3

let findIndex = (long, lat) => {
  let latDum = Math.trunc((lat - lat1) / latUnit);
  let longDum = Math.trunc((long - long1) / longUnit);
  //console.log("hello: ", latDum, longDum);
  return [longDum, numLat - latDum + 1];
};

let findLongLat = (x, y) => {
  return [
    [long1 + x * longUnit, long1 + (x + 1) * longUnit],
    [lat1 + (numLat - y + 1) * latUnit, lat1 + (numLat - y) * latUnit]
  ];
};

d3.csv("/datasets/wifi-heatmap/WifiData.csv", data => {
  let x = 0;
  let y = 0;
  [x, y] = findIndex(parseFloat(data.longitude), parseFloat(data.latitude));
  count[x][y] += 1;
  total[x][y] += parseInt(data.strength);
});

let svg = d3
.select(".rough-wifi-heatmap-wrapper")
.append("svg");

let uclaPath = 0;

Promise
.all([d3.json("/datasets/wifi-heatmap/ucla-outline.geojson")])
.then( mapData => { uclaPath = mapData[0]; } )

let redraw = () => {
    let width = document.getElementsByClassName("rough-wifi-heatmap-wrapper")[0].clientWidth;
    //let height = document.getElementsByClassName("rough-wifi-heatmap-wrapper")[0].clientHeight;
    //width = Math.round(width/100)*100;
    let unitWidth = Math.trunc(width/numLong);
    console.log("lol", width, unitWidth);
    svg
    .attr("width", width)
    .attr("height", width)
    .selectAll("rect")
    .attr("x", d => d[1] * unitWidth)
    .attr("y", d => d[2] * unitWidth)
    .attr("width", unitWidth)
    .attr("height", unitWidth);
    
    let chosenProjection = d3
    .geoEquirectangular()
    .fitSize([numLong * unitWidth, numLat * unitWidth], uclaPath);

    let path = d3
    .geoPath()
    .projection(chosenProjection);
    svg.selectAll("path").remove();
    svg
    .selectAll("path")
    .data(uclaPath.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "black")
    .attr("fill", "none");

}


setTimeout(() => {
  for (let i = 0; i < numLong; i++) {
    for (let j = 0; j < numLat; j++) {
      if (count[i][j] != 0)
        total[i][j] = total[i][j] / count[i][j];
      finalData.push([total[i][j], i, j]);
      maxVal = Math.max(maxVal, Math.abs(total[i][j]));
      if (total[i][j] != 0)
        minVal = Math.min(minVal, Math.abs(total[i][j]));
    }
  }
  let width = document.getElementsByClassName("rough-wifi-heatmap-wrapper")[0].clientWidth;
  //width = Math.round(width/100)*100;
  let unitWidth = Math.trunc(width/numLong);
  svg
  .attr("width", width)
  .attr("height", width)
  .selectAll("rect")
  .data(finalData)
  .enter()
  .append("rect")
  .attr("fill", d => colorRelative(d[0]))
  .attr("stroke", d => colorRelative(d[0]))
  .attr("x", d => d[1] * unitWidth)
  .attr("y", d => d[2] * unitWidth)
  .attr("width", unitWidth)
  .attr("height", unitWidth)
  .on("mouseover", d => {
    d3.select(".wifi-heatmap-str").text(`str: ${d[0]}`);
    d3.select(".wifi-heatmap-lat").text(`lat: ${findLongLat(d[1], d[2])[1][0]}, ${findLongLat(d[1], d[2])[1][1]}`);
    d3.select(".wifi-heatmap-lon").text(`lon: ${findLongLat(d[1], d[2])[0][0]}, ${findLongLat(d[1], d[2])[0][1]}`);
  })
  .on("mouseout", d => {
    d3.select(".wifi-heatmap-str").text(`HOVER TO SEE VALUE`);
    d3.select(".wifi-heatmap-lat").text(`HOVER TO SEE VALUE`);
    d3.select(".wifi-heatmap-lon").text(`HOVER TO SEE VALUE`);
  });
  redraw();
}, 1000);

//redraw();

window.addEventListener("resize", redraw);