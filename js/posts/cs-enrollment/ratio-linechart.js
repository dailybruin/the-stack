function initratio-linechart(data) {

	//old dropdown code
  let chart = document.getElementById('ratio-linechart');

  /*data.forEach(function(s) {
    var option = document.createElement("option");
    option.value = s.year;
    option.text = s.year;
    dropdown.appendChild(option);
  });*/
}
var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter'
};
var trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter'
};

var data = [trace1, trace2];
Plotly.newPlot('myDiv', data);
