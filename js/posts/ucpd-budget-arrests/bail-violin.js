function update_bail_data(data) {
    if (data == "ExcludingOutliars") {
        d3.csv("https://raw.githubusercontent.com/dailybruin/the-stack/ucpd-budget-arrests/datasets/ucpd-budget-arrests/bail_charges_without_outliars.csv").then(function( rows){
    console.log("hi");
    console.log(rows['Bail']);
    function unpack(rows, key) {
        console.log(rows);
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
      fillcolor: '#8dd3c7',
      opacity: 0.6,
      meanline: {
        visible: true
      },
      x0: "Total Bill",
      hoverinfo='skip'
    }]

    var layout = {
      title: "",
      yaxis: {
        zeroline: false
      },
      automargin: true,
    }
    var config = {responsive: true}

    Plotly.newPlot('myDiv', data, layout, config);
});
    }
    else  {  // including outliars
        d3.csv("https://raw.githubusercontent.com/dailybruin/the-stack/ucpd-budget-arrests/datasets/ucpd-budget-arrests/bail_charges_with_outliars.csv").then(function( rows){
    console.log("hi");
    console.log(rows['Bail']);
    function unpack(rows, key) {
        console.log(rows);
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
      fillcolor: '#8dd3c7',
      opacity: 0.6,
      meanline: {
        visible: true
      },
      x0: "Total Bill",
      hoverinfo='skip'
    }]

    var layout = {
      title: "",
      yaxis: {
        zeroline: false
      },
      automargin: true,
    }
    var config = {responsive: true}

    Plotly.newPlot('myDiv', data, layout, config);
});
    }
}
d3.csv("https://raw.githubusercontent.com/dailybruin/the-stack/ucpd-budget-arrests/datasets/ucpd-budget-arrests/bail_charges_without_outliars.csv").then(function(rows){
    console.log("hi");
    console.log(rows['Bail']);
    function unpack(rows, key) {
        console.log(rows);
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
      fillcolor: '#8dd3c7',
      opacity: 0.6,
      meanline: {
        visible: true
      },
      x0: "Total Bill"
    }]

    var layout = {
      title: "",
      yaxis: {
        zeroline: false
      },
      automargin: true,
    }
    var config = {responsive: true}

    Plotly.newPlot('myDiv', data, layout, config);
});