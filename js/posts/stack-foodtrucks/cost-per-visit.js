// raw data (number of visits, average cost per visit) with labels
var rawData = [
  {x: 62, y: 9795.11, name: "8E8 Thai Street Food"},
  {x: 46, y: 8020.68, name: "Aloha Friday"},
  {x: 63, y: 6822.06, name: "Dina's Dumpling"},
  {x: 81, y: 6431.97, name: "Salpicon"},
  {x: 65, y: 5942.47, name: "Smile Hot Dog"},
  {x: 89, y: 5851.04, name: "Perro 1-10 Tacos"},
  {x: 48, y: 5769.67, name: "Yuna's Bob"},
  {x: 29, y: 4864.33, name: "Austyn's Burgers"},
  {x: 76, y: 4674.5, name: "Creamy Boys"},
  {x: 29, y: 4461.07, name: "Sugo Italiano"},
  {x: 83, y: 4333.37, name: "Pinch of Flavor"},
  {x: 45, y: 4324.82, name: "Paradise Cookies & Ice Cream"},
  {x: 67, y: 4313.57, name: "Cerda Vega Tacos"},
  {x: 50, y: 4219.52, name: "Tokyo Style"},
  {x: 61, y: 4094.5, name: "Wafl"},
  {x: 6, y: 4083.42, name: "Heritage Kitchen"},
  {x: 63, y: 4070.67, name: "Stop Bye Café"},
  {x: 61, y: 3967.57, name: "Bittie Bitez"},
  {x: 44, y: 3931.7, name: "Dulce Europa"},
  {x: 55, y: 3710.18, name: "Bison Burger"},
  {x: 40, y: 3681.49, name: "Flaming Grain"},
  {x: 15, y: 3649.9, name: "Baby's Burgers"},
  {x: 56, y: 3568.44, name: "Flamin Hot Chicken"},
  {x: 69, y: 3503.57, name: "Love Greek Cuisine/Kalamaki Greek LA"},
  {x: 35, y: 3370.6, name: "PhillyJay's Steaks"},
  {x: 33, y: 3352.35, name: "Pacifico Charbroiled"},
  {x: 2, y: 3239.5, name: "Heritage LA"},
  {x: 21, y: 3208.14, name: "Kogi"},
  {x: 74, y: 3139.88, name: "Cartel Taco Truck"},
  {x: 55, y: 3062.11, name: "Poutine Brothers"},
  {x: 35, y: 2927.63, name: "Sweets on Wheels"},
  {x: 49, y: 2807.15, name: "Uncle Al's BBQ"},
  {x: 47, y: 2725.09, name: "Habibi Shack"},
  {x: 35, y: 2706.96, name: "Go Fusion"},
  {x: 41, y: 2682.01, name: "Original Herbivore"},
  {x: 29, y: 2546.33, name: "Salvage Tacos"},
  {x: 26, y: 2524.44, name: "Thai Mex Cocina"},
  {x: 55, y: 2522.85, name: "Bollywood Kitchen"},
  {x: 22, y: 2424.66, name: "Café Vietnam"},
  {x: 31, y: 2387.87, name: "Yalla"},
  {x: 5, y: 2291.4, name: "Deli Doctor"},
  {x: 16, y: 2253.28, name: "Belly's Sliders Wings"},
  {x: 16, y: 2163.03, name: "Venice Gelato Café"},
  {x: 5, y: 1717.6, name: "Bunz Gourmet Burgers"},
  ];
  
  
  // Create scatterplot
  anychart.onDocumentReady(function () {
      
    //Create data for series
    var data = rawData.map(function(item) { return [item.x, item.y]; });
    
    // Create chart
    var chart = anychart.scatter();
    var series = chart.marker(data);

    // Create axis labels
    chart.xAxis().title("Number of times the food truck has visited UCLA");
    chart.yAxis().title("Average sales per visit");

    // Enable grid lines
    chart.xGrid(true);
    chart.yGrid(true);

    chart.xMinorGrid(true);
    chart.yMinorGrid(true);

    // Set container id
    chart.container("cost-per-visit0");

    // Draw chart
    chart.draw();

  });

