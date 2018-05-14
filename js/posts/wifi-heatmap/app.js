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

let menu2Metric = menuValue => {
  switch (menuValue) {
    case "UCLA_WIFI":
      return "UCLA_WIFI_Average";
      break;
    case "UCLA_WEB":
      return "UCLA_WEB_Average";
      break;
    case "UCLA_WIFI_RES":
      return "UCLA_WIFI_RES_Average";
      break;
    case "UCLA_WEB_RES":
      return "UCLA_WEB_RES_Average";
      break;
    case "UCLA_SECURE_RES":
      return "UCLA_SECURE_RES_Average";
      break;
    case "eduroam":
      return "eduroam_Average";
      break;
    case "all":
    default:
      return "totalAverage";
  }
}

let calcMetric = (metricType, wifiObj) => {
  let specificArray = [];
  switch (metricType) {
    case "UCLA_WIFI_Average":
      specificArray = wifiObj.UCLA_WIFI;
      break;
    case "UCLA_WEB_Average":
      specificArray = wifiObj.UCLA_WEB;
      break;
    case "UCLA_WIFI_RES_Average":
      specificArray = wifiObj.UCLA_WIFI_RES;
      break;
    case "UCLA_WEB_RES_Average":
      specificArray = wifiObj.UCLA_WEB_RES;
      break;
    case "UCLA_SECURE_RES_Average":
      specificArray = wifiObj.UCLA_SECURE_RES;
      break;
    case "eduroam_Average":
      specificArray = wifiObj.eduroam;
      break;
    case "totalAverage":
    default:
      let grandTotal = 0;
      let grandCount = 0;
      for (specificWifi in wifiObj) {
        grandTotal += wifiObj[specificWifi][0];
        grandCount += wifiObj[specificWifi][1];
      }
      specificArray = [grandTotal, grandCount];
  }
  if (specificArray[1] === 0)
    return 0;
  return specificArray[0] / specificArray[1];
};

let wifiArr = zeros([numLong, numLat]);
let uclaPath = 0;
let uclaBuildings = 0;
let grid = 0;
let wifiSD = 0;
let wifiMean = 0;

const colorRelative = d3.scaleLinear()
  .domain([-90, -67, -30, 0])
  .range(["red", "yellow", "green", "#FDFDFD"]) //#D3D3D3
//["#ffffcc", "#c7e9b4", "#7fcdbb", "#41bbc4", "#2c7fb8", "#253494", "#FDFDFD"]
//["#b2182b", "#ef8a62", "#fddbc7", "#f8f6e9", "#d1e5f0", "#67a9f0", "#2166ac", "#FDFDFD"]
//
var heatMapMenu = d3
  .select(".rough-wifi-heatmap-wrapper")
  .append("div");

heatMapMenu
  .append("select")
  .selectAll("option")
  .data(["all", "UCLA_WIFI", "UCLA_WEB", "UCLA_WIFI_RES", "UCLA_WEB_RES", "UCLA_SECURE_RES", "eduroam"])
  .enter()
  .append("option")
  .attr("value", d => d)
  .text(d => d)

let svg = d3
  .select(".rough-wifi-heatmap-wrapper")
  .append("svg");

let contentWrapper = svg.append("g");

let filter = svg.append("defs")
  .append("filter")
  .attr("id", "blur")
  .append("feGaussianBlur")
  .attr("stdDeviation", 0.5);

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
    .selectAll("rect")
    .remove();

  contentWrapper
    .attr("width", width)
    .attr("height", width)
    .selectAll("path")
    .remove();

  let menuMetric = menu2Metric(heatMapMenu.select("select").property("value"));
  contentWrapper
    .selectAll(".grid")
    .data(grid.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", d => {
      return colorRelative(calcMetric(menuMetric, d.properties.data))
    })
    .attr("fill", d => colorRelative(calcMetric(menuMetric, d.properties.data)))
    //.attr("filter", "url(#blur)")
    .on("mouseover", d => {
      d3.select(".wifi-heatmap-str").text(`str: ${calcMetric(menuMetric, d.properties.data)}`);
      d3.select(".wifi-heatmap-lat").text(`lat: ${d.properties.bottom}, ${d.properties.top}`);
      d3.select(".wifi-heatmap-lon").text(`lon: ${d.properties.left}, ${d.properties.right}`);
    })
    .on("mouseout", d => {
      d3.select(".wifi-heatmap-str").text(`HOVER TO SEE VALUE`);
      d3.select(".wifi-heatmap-lat").text(`HOVER TO SEE VALUE`);
      d3.select(".wifi-heatmap-lon").text(`HOVER TO SEE VALUE`);
    });

  contentWrapper
    .selectAll(".outline")
    .data(uclaPath.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "black")
    .attr("fill", "none");

  contentWrapper
    .selectAll(".buildings")
    .data(uclaBuildings.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "steelblue")
    .attr("fill", "steelblue")
    .attr("fill-opacity", "0.25");

  svg.append("rect")
    .attr("width", width)
    .attr("height", width)
    .style("fill", "none")
    .style("pointer-events", "all")
    .call(d3.zoom()
      .scaleExtent([1, 3])
      .on("zoom", () => contentWrapper.attr("transform", d3.event.transform)));

}

Promise
  .all([d3.json("/datasets/wifi-heatmap/ucla-outline.geojson"),
    d3.csv("/datasets/wifi-heatmap/WifiData.csv"),
    d3.json("/datasets/wifi-heatmap/map-6.geojson")
  ])
  .then(data => {
    uclaPath = data[0];
    uclaBuildings = data[2];
    wifiSD = d3.deviation(data[1], d => d.strength);
    wifiMean = d3.mean(data[1], d => d.strength);
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
            coordinates: [
              [
                // top-left/top-right/bottom-right/bottom-left/top-left
                [tLx, tLy],
                [tRx, tRy],
                [bRx, bRy],
                [bLx, bLy],
                [tLx, tLy]
              ]
            ]
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
    heatMapMenu.on('change', redraw)
    redraw();
  })

window.addEventListener("resize", redraw);





/*

,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [-118.45466494560242, 34.06900488250283],
          [-118.44858169555664, 34.06900488250283],
          [-118.44858169555664, 34.074390461292076],
          [-118.45466494560242, 34.074390461292076],
          [-118.45466494560242, 34.06900488250283]
        ]
      ]
    }

        {
      "type": "Feature",
      "properties": {
        "name": "Outside UCLA Bounding Box"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -118.456,
              34.06
            ],
            [
              -118.437,
              34.06
            ],
            [
              -118.437,
              34.08
            ],
            [
              -118.456,
              34.08
            ],
            [
              -118.456,
              34.06
            ]
          ]
        ]
      }
    },

*/
