const long2 = -118.437; //-118.438059;
const long1 = -118.456; //-118.453508;
const lat2 = 34.08; //34.079024;
const lat1 = 34.06; //34.058690;
const setDist = 0.0002;
const numLat = Math.trunc((lat2 - lat1) / setDist);
const numLong = Math.trunc((long2 - long1) / setDist);
const latUnit = (lat2 - lat1) / numLat;
const longUnit = (long2 - long1) / numLong;


let zeros = dimensions => {
  let array = [];
  for (let i = 0; i < dimensions[0]; ++i) {
    array.push(dimensions.length == 1 ? ({
      UCLA_WIFI: [0, 0],
      UCLA_WEB: [0, 0],
      UCLA_WIFI_RES: [0, 0],
      UCLA_WEB_RES: [0, 0],
      UCLA_SECURE_RES: [0, 0],
      eduroam: [0, 0],
    }) : zeros(dimensions.slice(1)));
  }
  return array;
};

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

let calcMetric = (metricType, wifiObj) => {
  switch (metricType) {
    case "totalAverage":
      let grandTotal = 0;
      let grandCount = 0;
      for (specificWifi in wifiObj) {
        grandTotal += wifiObj[specificWifi][0];
        grandCount += wifiObj[specificWifi][1];
      }
      if(grandCount === 0)
        return 0;
      return grandTotal / grandCount;
      break;
  }
};

let wifiArr = zeros([numLong, numLat]);
let uclaPath = 0;
let grid = 0;

const colorRelative = d3.scaleLinear()
  .domain([-90, -67, -30, 0])
  .range(["red", "yellow", "green", "#FDFDFD"]) //#D3D3D3

let svg = d3
  .select(".rough-wifi-heatmap-wrapper")
  .append("svg");

let redraw = () => {
  let width = document.getElementsByClassName("rough-wifi-heatmap-wrapper")[0].clientWidth;
  //let height = document.getElementsByClassName("rough-wifi-heatmap-wrapper")[0].clientHeight;
  //width = Math.round(width/100)*100;
  let unitWidth = Math.trunc(width / numLong);
  //geoMercator
  //geoEquirectangular
  let chosenProjection = d3
    .geoMercator()
    .fitSize([numLong * unitWidth, numLat * unitWidth], uclaPath);

  let path = d3
    .geoPath()
    .projection(chosenProjection);

  svg
  .attr("width", width)
  .attr("height", width)
  .selectAll("path")
  .remove();
  console.log("?", grid)
  console.log("?", uclaPath)
  svg
    .selectAll(".grid")
    .data(grid.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", d => {
      return colorRelative(calcMetric("totalAverage", d.properties.data))
    })
    .attr("fill", d => colorRelative(calcMetric("totalAverage", d.properties.data)))
    .on("mouseover", d => {
      d3.select(".wifi-heatmap-str").text(`str: ${calcMetric("totalAverage", d.properties.data)}`);
      d3.select(".wifi-heatmap-lat").text(`lat: ${d.properties.bottom}, ${d.properties.top}`);
      d3.select(".wifi-heatmap-lon").text(`lon: ${d.properties.left}, ${d.properties.right}`);
    })
    .on("mouseout", d => {
      d3.select(".wifi-heatmap-str").text(`HOVER TO SEE VALUE`);
      d3.select(".wifi-heatmap-lat").text(`HOVER TO SEE VALUE`);
      d3.select(".wifi-heatmap-lon").text(`HOVER TO SEE VALUE`);
    });
    svg
    .selectAll(".outline")
    .data(uclaPath.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "black")
    .attr("fill", "none");
}

Promise
  .all([d3.json("/datasets/wifi-heatmap/ucla-outline.geojson"),
    d3.csv("/datasets/wifi-heatmap/WifiData.csv")
  ])
  .then(data => {
    uclaPath = data[0];
    console.log("asdf", uclaPath);
    data[1].forEach(el => {
      if (el.name !== "UCLA_WIFI" && el.name !== "UCLA_WEB" && el.name !== "UCLA_WIFI_RES" &&
        el.name !== "UCLA_WEB_RES" && el.name !== "UCLA_SECURE_RES" && el.name !== "eduroam")
        return;
      let x = 0;
      let y = 0;
      [x, y] = findIndex(parseFloat(el.longitude), parseFloat(el.latitude));
      wifiArr[x][y][el.name][0] += parseInt(el.strength);
      wifiArr[x][y][el.name][1] += 1;
    });
    console.log(wifiArr)
    let coordinates = [],
      c = {
        x: long1,
        y: lat2
      }, //cursor
      //top-left/top-right/bottom-right/bottom-left
      tLx, tLy, tRx, tRy,
      bRx, bRy, bLx, bLy;
    let futureFeatures = [];
    for (let i = 0; i < numLong; i++) {
      for (let j = 0; j < numLat; j++) {
        tLx = bLx = c.x;
        tLy = tRy = c.y;
        tRx = bRx = c.x + longUnit;
        bRy = bLy = c.y - latUnit;
        let square = {
          type: 'Feature',
          properties: {
            left: findLongLat(i, j)[0][0],
            right: findLongLat(i, j)[0][1],
            bottom: findLongLat(i, j)[1][0],
            top: findLongLat(i, j)[1][1],
            data: wifiArr[i][j],
          },
          geometry: {
            type: 'Polygon',
            coordinates: [[
              // top-left/top-right/bottom-right/bottom-left/top-left
              [tLx, tLy],
              [tRx, tRy],
              [bRx, bRy],
              [bLx, bLy],
              [tLx, tLy]
            ]]
          }
        }
        futureFeatures.push(square);
        c.y = c.y - latUnit;
        //finalData.push([total[i][j], i, j]);
      }
      c.y = lat2;
      c.x = c.x + longUnit;
    }
    grid = {
      type: 'FeatureCollection',
      features: futureFeatures
    };
    redraw();
  })

window.addEventListener("resize", redraw);





/*


      
    let width = document.getElementsByClassName("rough-wifi-heatmap-wrapper")[0].clientWidth;
  //width = Math.round(width/100)*100;
  let unitWidth = Math.trunc(width / numLong);
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
      svg
      .selectAll("path")
      .data(uclaPath.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("stroke", "black")
      .attr("fill", "none");
      */
