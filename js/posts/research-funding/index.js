d3.json("/datasets/research-funding/dummy.json", function(err, data1) {
    initLineChart(data1);

    d3.json("/datasets/research-funding/sponsors.json", function(err, data2) {
      initDonutChart(data2);

    })
})

// Dropdown function - invokes update
document.getElementById("lineChartDropdown").addEventListener("change", function() {
  updateData();
})
