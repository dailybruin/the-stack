d3.csv("https://raw.githubusercontent.com/dailybruin/the-stack/mattie/ucpdBail/datasets/ucpd/ChargesBail.csv", function( rows){
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
      }
    }

    Plotly.newPlot('myDiv', data, layout);
});