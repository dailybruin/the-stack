anychart.onDocumentReady(function() {
    var data_tree = [
      {
        name: 'Cuisines',
        children: [
          {
            name: 'Asian/Pacific Islander',
            fill: '#A1E4F0',
            children: [
              { name: "8E8 Thai Street Food", value: 62, fill: '#A1E4F0'},
              { name: "Aloha Friday", value: 46, fill: '#A1E4F0'},
              { name: "Dina's Dumpling", value: 63, fill: '#A1E4F0'},
              { name: "Smile Hot Dog", value: 65, fill: '#A1E4F0'},
              { name: "Yuna's Bob", value: 48, fill: '#A1E4F0'},
              { name: "Pinch of Flavor", value: 83, fill: '#A1E4F0'},
              { name: "Tokyo Style", value: 50, fill: '#A1E4F0'},
              { name: "Stop Bye Café", value: 63, fill: '#A1E4F0'},
              { name: "Kogi", value: 21, fill: '#A1E4F0'},
              { name: "Bollywood Kitchen", value: 55, fill: '#A1E4F0'},
              { name: "Café Vietnam", value: 22, fill: '#A1E4F0'},
            ]
          },
          {
            name: 'Mexican',
            fill: '#EF8D7E',
            children: [
              { name: "Perro 1-10 Tacos", value: 89, fill: '#EF8D7E'},
              { name: "Cerda Vega Tacos", value: 67, fill: '#EF8D7E'},
              { name: "Cartel Taco Truck", value: 74, fill: '#EF8D7E'},
              { name: "Savage Tacos", value: 29, fill: '#EF8D7E'},
              { name: "Flaming Grain", value: 40, fill: '#EF8D7E'},
              { name: "Go Fusion", value: 35, fill: '#EF8D7E'},
              { name: "Thai Mex Cocina", value: 26, fill: '#EF8D7E'},
            ]
          },
          {
            name: 'Dessert',
            fill: '#EB9FD2',
            children: [
              { name: "Salpicon", value: 81, fill: '#EB9FD2'},
              { name: "Creamy Boys", value: 76, fill: '#EB9FD2'},
              { name: "Paradise Cookies & Ice Cream", value: 45, fill: '#EB9FD2'},
              { name: "Bittie Bitez", value: 61, fill: '#EB9FD2'},
              { name: "Dulce Europa", value: 44, fill: '#EB9FD2'},
              { name: "Sweets on Wheels", value: 35, fill: '#EB9FD2'},
              { name: "Venice Gelato Café", value: 16, fill: '#EB9FD2'},
              { name: "Bunz Gourmet Burgers", value: 5, fill: '#EB9FD2'},
            ]
          },
          {
            name: 'American',
            fill: '#9CB2F0',
            children: [
              { name: "Austyn's Burgers", value: 29, fill: '#9CB2F0'},
              { name: "Wafl", value: 61, fill: '#9CB2F0'},
              { name: "Heritage Kitchen", value: 6, fill: '#9CB2F0'},
              { name: "Bison Burger", value: 55, fill: '#9CB2F0'},
              { name: "Baby's Burgers", value: 15, fill: '#9CB2F0'},
              { name: "Flamin Hot Chicken", value: 56, fill: '#9CB2F0'},
              { name: "PhillyJay's Steaks", value: 35, fill: '#9CB2F0'},
              { name: "Pacifico Charbroiled", value: 33, fill: '#9CB2F0'},
              { name: "Heritage LA", value: 2, fill: '#9CB2F0'},
              { name: "Uncle Al's BBQ", value: 49, fill: '#9CB2F0'},
              { name: "Original Herbivore", value: 41, fill: '#9CB2F0'},
              { name: "Deli Doctor", value: 5, fill: '#9CB2F0'},
              { name: "Belly's Sliders Wings", value: 16, fill: '#9CB2F0'},
            ]
          },
          {
            name: 'Mediterranean',
            fill: '#B0EFAA',
            children: [
              { name: "Love Greek Cuisine/Kalamaki Greek LA", value: 69, fill: '#B0EFAA'},
              { name: "Habibi Shack", value: 47, fill: '#B0EFAA'},
              
            ]
          },
          {
            name: 'Middle Eastern',
            fill: '#F0C895',
            children: [
              { name: "Yalla", value: 31, fill: '#F0C895'},
            ]
          },
          {
            name: 'Canadian',
            fill: '#C7A1F0',
            children: [
              { name: "Poutine Brothers", value: 55, fill: '#C7A1F0'},
            ]
          },
          {
            name: 'Italian',
            fill: '#F0E49E',
            children: [
              { name: "Sugo Italiano", value: 29, fill: '#F0E49E'},
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