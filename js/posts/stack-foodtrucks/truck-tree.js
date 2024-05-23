anychart.onDocumentReady(function() {
    var data_tree = [
      {
        name: 'Cuisines',
        children: [
          {
            name: 'DUMP',
            fill: '#ffffff',
            children: [
                { name: "8E8 Thai Street Food", value: 62, fill: '#ffffff'},
                { name: "Aloha Friday", value: 46, fill: '#ffffff'},
                { name: "Dina's Dumpling", value: 63, fill: '#ffffff'},
                { name: "Salpicon", value: 81, fill: '#ffffff'},
                { name: "Smile Hot Dog", value: 65, fill: '#ffffff'},
                { name: "Perro 1-10 Tacos", value: 89, fill: '#ffffff'},
                { name: "Yuna's Bob", value: 48, fill: '#ffffff'},
                { name: "Austyn's Burgers", value: 29, fill: '#ffffff'},
                { name: "Creamy Boys", value: 76, fill: '#ffffff'},
                { name: "Sugo Italiano", value: 29, fill: '#ffffff'},
                { name: "Pinch of Flavor", value: 83, fill: '#ffffff'},
                { name: "Paradise Cookies & Ice Cream", value: 45, fill: '#ffffff'},
                { name: "Cerda Vega Tacos", value: 67, fill: '#ffffff'},
                { name: "Tokyo Style", value: 50, fill: '#ffffff'},
                { name: "Wafl", value: 61, fill: '#ffffff'},
                { name: "Heritage Kitchen", value: 6, fill: '#ffffff'},
                { name: "Stop Bye Café", value: 63, fill: '#ffffff'},
                { name: "Bittie Bitez", value: 61, fill: '#ffffff'},
                { name: "Dulce Europa", value: 44, fill: '#ffffff'},
                { name: "Bison Burger", value: 55, fill: '#ffffff'},
                { name: "Flaming Grain", value: 40, fill: '#ffffff'},
                { name: "Baby's Burgers", value: 15, fill: '#ffffff'},
                { name: "Flamin Hot Chicken", value: 56, fill: '#ffffff'},
                { name: "Love Greek Cuisine/Kalamaki Greek LA", value: 69, fill: '#ffffff'},
                { name: "PhillyJay's Steaks", value: 35, fill: '#ffffff'},
                { name: "Pacifico Charbroiled", value: 33, fill: '#ffffff'},
                { name: "Heritage LA", value: 2, fill: '#ffffff'},
                { name: "Kogi", value: 21, fill: '#ffffff'},
                { name: "Cartel Taco Truck", value: 74, fill: '#ffffff'},
                { name: "Poutine Brothers", value: 55, fill: '#ffffff'},
                { name: "Sweets on Wheels", value: 35, fill: '#ffffff'},
                { name: "Uncle Al's BBQ", value: 49, fill: '#ffffff'},
                { name: "Habibi Shack", value: 47, fill: '#ffffff'},
                { name: "Go Fusion", value: 35, fill: '#ffffff'},
                { name: "Original Herbivore", value: 41, fill: '#ffffff'},
                { name: "Savage Tacos", value: 29, fill: '#ffffff'},
                { name: "Thai Mex Cocina", value: 26, fill: '#ffffff'},
                { name: "Bollywood Kitchen", value: 55, fill: '#ffffff'},
                { name: "Café Vietnam", value: 22, fill: '#ffffff'},
                { name: "Yalla", value: 31, fill: '#ffffff'},
                { name: "Deli Doctor", value: 5, fill: '#ffffff'},
                { name: "Belly's Sliders Wings", value: 16, fill: '#ffffff'},
                { name: "Venice Gelato Café", value: 16, fill: '#ffffff'},
                { name: "Bunz Gourmet Burgers", value: 5, fill: '#ffffff'}
            ],
          },
          {
            name: 'CATEGORY 1',
            fill: '#c9c9c9',
            children: [
                { name: "SAMPLE TRUCK 1", value: 500, fill: '#c9c9c9'},
                { name: "SAMPLE TRUCK 2", value: 500, fill: '#c9c9c9'},
            ]
          }
        ]
      }
    ];
  
    // create a chart and set the data
    var chart = anychart.treeMap(data_tree, 'as-tree');
  
    // set the container id
    chart.container('tree-map');
  
    // configure tooltips
    chart.tooltip().format('Amount: {%value}');
  
    chart.tooltip().width(800);
    chart.tooltip().wordWrap('normal');
  
    // initiate drawing the chart
    chart.draw();
  });