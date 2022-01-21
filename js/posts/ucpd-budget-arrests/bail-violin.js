function update_bail_data(data) {
    if (data == "ExcludingOutliars") {
      d3.csv("https://raw.githubusercontent.com/dailybruin/the-stack/ucpd-budget-arrests/datasets/ucpd-budget-arrests/bail_charges_without_outliars.csv", function(err, rows){

        function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
        }
      
      var data = [{
        type: 'violin',
        x: unpack(rows, 'Charges'),
            y: unpack(rows, 'Bail'),
        points: 'none',
        box: {
          visible: true
        },
        boxpoints: false,
        line: {
          color: 'black'
        },
        fillcolor: '#2A3C6A',
        opacity: 0.6,
        meanline: {
          visible: true
        },
        x0: "Bail Amount"
      }]
      
      var layout = {
        title: "Bail Amounts Offered Per Charge Type",
        yaxis: {
          zeroline: false
        },
        margin: {
          b: 160,
        }
      }
      var config = {responsive: true}
      
      Plotly.newPlot('bailViolin', data, layout, config);
      });      
    }
    else  {  // including outliars
      d3.csv("https://raw.githubusercontent.com/dailybruin/the-stack/ucpd-budget-arrests/datasets/ucpd-budget-arrests/bail_charges_with_outliars.csv", function(err, rows){
        function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
        }
      
      var data = [{
        type: 'violin',
        x: unpack(rows, 'Charges'),
            y: unpack(rows, 'Bail'),
        points: 'none',
        box: {
          visible: true
        },
        boxpoints: false,
        line: {
          color: 'black'
        },
        fillcolor: '#2A3C6A',
        opacity: 0.6,
        meanline: {
          visible: true
        },
        x0: "Bail Amount"
      }]
      
      var layout = {
        title: "Bail Amounts Offered Per Charge Type",
        yaxis: {
          zeroline: false
        },
        margin: {
          b: 160,
        }
      }
      var config = {responsive: true}
      
      Plotly.newPlot('bailViolin', data, layout, config);
      });
      
    }
}
d3.csv("https://raw.githubusercontent.com/dailybruin/the-stack/ucpd-budget-arrests/datasets/ucpd-budget-arrests/bail_charges_without_outliars.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }

var data = [{
  type: 'violin',
  x: unpack(rows, 'Charges'),
      y: unpack(rows, 'Bail'),
  points: 'none',
  box: {
    visible: true
  },
  boxpoints: false,
  line: {
    color: 'black'
  },
  fillcolor: '#2A3C6A',
  opacity: 0.6,
  meanline: {
    visible: true
  },
  x0: "Bail Amount"
}]

var layout = {
  title: "Bail Amounts Offered Per Charge Type",
  yaxis: {
    zeroline: false
  },
  margin: {
    b: 160,
  }
}
var config = {responsive: true}

Plotly.newPlot('bailViolin', data, layout, config);
});