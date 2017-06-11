dataList = [];
jsonDataList = [];

d3.csv("/datasets/sexual-harassment/positions.csv", function(error, positionData) {
  if (error) throw error;

  jsonDataList.push(positionData);
  d3.csv('/datasets/sexual-harassment/genders.csv', function (error1, genderData) {
    if (error1) throw error;

    jsonDataList.push(genderData);
    d3.csv('/datasets/sexual-harassment/punishments.csv', function (error2, punishmentData) {
      if (error2) throw error;

      jsonDataList.push(punishmentData);

      var encodedPositionData = encodeURI(formatCSV(positionData, 'Position'));
      var encodedGenderData = encodeURI(formatCSV(genderData, 'Gender'));
      var encodedPunishmentData = encodeURI(formatCSV(punishmentData, 'Punishment'));

      dataList.push(encodedPositionData);
      dataList.push(encodedGenderData);
      dataList.push(encodedPunishmentData);

      initBubbleChart(encodedPositionData, 0);
      initTable(encodedPositionData);

    });
  });
});

// bubbleChartDropdown - invokes update of bubble chart
var bubbleChartSelect = document.getElementById('bubbleChartDropdown')
bubbleChartSelect.addEventListener("change", () => {
  updateBubbleChart(bubbleChartSelect.value);
})

// tableDropdown - invokes update of table
var tableSelect = document.getElementById('tableDropdown')
tableSelect.addEventListener('change', () => {
  updateTable(tableSelect.value)
})

// initialize bubble tooltip
var tooltip = d3.select('.bubble-chart-wrapper')
                .append('div')
                .attr('class', 'tooltip')
                .style('display', 'none');

function formatCSV(data, baseString) {
  const BASE = baseString;
  const COLLEGES = ["UCB","UCD","UCI","UCLA","UCM","UCR","UCSB","UCSC","UCSD","UCSF"];

  let ret = "data:text/csv;charset=utf-8,";
  ret += 'id,value' + '\n' + BASE + ',\n';

  data.forEach(d => {
    COLLEGES.forEach(c => {
      let total = d[c];
      let type;
      switch(baseString) {
        case 'Position': type = d.Position; break;
        case 'Gender': type = d.Gender; break;
        case 'Punishment': type = d.Punishment; break;
      }

      let row = BASE + '.' + type + '.' + c + ',' + total + '\n';
      ret += row;
    })
  });
  return ret;
}
