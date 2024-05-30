// Experimental data with labels
var rawData = [
    {x: 62, y: 607297, name: "8E8 Thai Street Food"},
    {x: 46, y: 368951.5, name: "Aloha Friday"},
    {x: 63, y: 429789.5, name: "Dina's Dumpling"},
    {x: 81, y: 520989.5, name: "Salpicon"},
    {x: 65, y: 386260.5, name: "Smile Hot Dog"},
    {x: 89, y: 520742.5, name: "Perro 1-10 Tacos"},
    {x: 48, y: 276944, name: "Yuna's Bob"},
    {x: 29, y: 141065.5, name: "Austyn's Burgers"},
    {x: 76, y: 355262, name: "Creamy Boys"},
    {x: 29, y: 129371, name: "Sugo Italiano"},
    {x: 83, y: 359670, name: "Pinch of Flavor"},
    {x: 45, y: 194617, name: "Paradise Cookies & Ice Cream"},
    {x: 67, y: 289009, name: "Cerda Vega Tacos"},
    {x: 50, y: 210976, name: "Tokyo Style"},
    {x: 61, y: 249764.5, name: "Wafl"},
    {x: 6, y: 24500.5, name: "Heritage Kitchen"},
    {x: 63, y: 256452.5, name: "Stop Bye Café"},
    {x: 61, y: 242022, name: "Bittie Bitez"},
    {x: 44, y: 172995, name: "Dulce Europa"},
    {x: 55, y: 204060, name: "Bison Burger"},
    {x: 40, y: 147259.5, name: "Flaming Grain"},
    {x: 15, y: 54748.5, name: "Baby's Burgers"},
    {x: 56, y: 199832.5, name: "Flamin Hot Chicken"},
    {x: 69, y: 241746.5, name: "Love Greek Cuisine/Kalamaki Greek LA"},
    {x: 35, y: 117971, name: "PhillyJay's Steaks"},
    {x: 33, y: 110627.5, name: "Pacifico Charbroiled"},
    {x: 2, y: 6479, name: "Heritage LA"},
    {x: 21, y: 67371, name: "Kogi"},
    {x: 74, y: 232351, name: "Cartel Taco Truck"},
    {x: 55, y: 168416, name: "Poutine Brothers"},
    {x: 35, y: 102467, name: "Sweets on Wheels"},
    {x: 49, y: 137550.5, name: "Uncle Al's BBQ"},
    {x: 47, y: 128079, name: "Habibi Shack"},
    {x: 35, y: 94743.5, name: "Go Fusion"},
    {x: 41, y: 109962.5, name: "Original Herbivore"},
    {x: 29, y: 73843.5, name: "Savage Tacos"},
    {x: 26, y: 65635.5, name: "Thai Mex Cocina"},
    {x: 55, y: 138757, name: "Bollywood Kitchen"},
    {x: 22, y: 53342.5, name: "Café Vietnam"},
    {x: 31, y: 74024, name: "Yalla"},
    {x: 5, y: 11457, name: "Deli Doctor"},
    {x: 16, y: 36052.5, name: "Belly's Sliders Wings"},
    {x: 16, y: 34608.5, name: "Venice Gelato Café"},
    {x: 5, y: 8588, name: "Bunz Gourmet Burgers"},
  ];
  
  // Getting the regression object
  // The type of regression depends on the experimental data
  var result = regression('linear', rawData.map(function(item) { return [item.x, item.y]; }));
  
  // Get coefficients from the calculated formula
  var coeff = result.equation;
  
  anychart.onDocumentReady(function () {
  
    var data_1 = rawData.map(function(item) { return [item.x, item.y]; });
    var data_2 = setTheoryData(rawData.map(function(item) { return [item.x, item.y]; }));
  
    var chart = anychart.scatter();
  
    chart.title("The calculated formula: " + result.string + "\nThe coefficient of determination (R2): " + result.r2.toPrecision(2));
    chart.xAxis().title("Number of times the food truck has visited UCLA")
    chart.yAxis().title("Sales")
  
    chart.legend(true);
  
    // Creating the first series (marker) and setting the experimental data
    var series1 = chart.marker(data_1);
    series1.name("Experimental data");
  
    // Enable tooltips for the first series
    series1.tooltip().titleFormat(function() {
      return rawData[this.index].name;
    });
    series1.tooltip().format(function() {
      return "X: " + this.x + "\nY: " + this.value;
    });
  
    // Creating the second series (line) and setting the theoretical data
    var series2 = chart.line(data_2);
    series2.name("Theoretically calculated data");
    series2.markers(false); // change to true if you want to display theoretical values
  
    // Enable tooltips for the second series
    series2.tooltip().titleFormat(function() {
      return rawData[this.index].name;
    });
    series2.tooltip().format(function() {
      return "X: " + this.x + "\nY: " + this.value;
    });
  
    chart.container("lin-reg");
    chart.draw();
  });
  
  // Input X and calculate Y using the formula found
  // This works with all types of regression
  function formula(coeff, x) {
    var result = 0; // Initialize result to 0 instead of null
    for (var i = 0, j = coeff.length - 1; i < coeff.length; i++, j--) {
      result += coeff[i] * Math.pow(x, j);
    }
    return result;
  }
  
  // Setting theoretical data array of [X][Y] using experimental X coordinates
  // This works with all types of regression
  function setTheoryData(rawData) {
    var theoryData = [];
    for (var i = 0; i < rawData.length; i++) {
      theoryData[i] = [rawData[i][0], formula(coeff, rawData[i][0])];
    }
    return theoryData;
  }  