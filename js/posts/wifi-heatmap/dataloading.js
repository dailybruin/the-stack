const networks = ["eduroam", "UCLA_WEB", "UCLA_WIFI", "UCLA_WEB_RES", "UCLA_WIFI_RES", "UCLA_SECURE_RES"];
let locMap = {};
let wifiArr = Array(5).fill(
  {
    UCLA_WIFI: [0, 0],
    UCLA_WEB: [0, 0],
    UCLA_WIFI_RES: [0, 0],
    UCLA_WEB_RES: [0, 0],
    UCLA_SECURE_RES: [0, 0],
    eduroam: [0, 0],
  }
);

Promise.all([
  d3.json("/datasets/wifi-heatmap/map-7xd.geojson"),
  d3.csv("/datasets/wifi-heatmap/WifiData.csv"),
  d3.json("/datasets/wifi-heatmap/ucla-outline.geojson")
]).then(data => {
  locMap[data[2].features[0].properties.name] = {
    feature: data[2].features[0],
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
    let index = networks.indexOf(d.name);
    if (index !== -1) {
      // wifi networks for each building location
      for (loc in locMap) {
        if (!locMap.hasOwnProperty(loc)) continue;

        if (d3.geoContains(locMap[loc].feature, [parseFloat(d.longitude), parseFloat(d.latitude)])) {
          locMap[loc].strengths[index] += parseInt(d.strength, 10);
          locMap[loc].counts[index]++;
        }
      }

      // wifi array for heatmap
      let x = 0;
      let y = 0;
      [x, y] = findIndex(parseFloat(el.longitude), parseFloat(el.latitude));
      wifiArr[x][y][el.name][0] += parseInt(el.strength);
      wifiArr[x][y][el.name][1] += 1;
    }
  });

  // makeWifiCompBarChart();
  // redraw();
})
