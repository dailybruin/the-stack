Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
        height: '70%'
    },
    title: {
        text: 'Open Westwood Businesses in 2020 by Category'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}'
    },
    plotOptions: {
        packedbubble: {
            minSize: '10%',
            maxSize: '500%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 5
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [
    {
        name: 'Shopping',
        data: [{
   name: "Clothing ",
   value: 8
 },{
   name: "Flowers & Gifts",
   value: 5
 },{
   name: "Grocery & Homegoods",
   value: 4
 },{
   name: "Jewelry",
   value: 3
 },{
   name: "Tobacco Shops",
   value: 2
 },



]
    },
    {  name: 'Daily Service',
       data: [{
   				name: "Salon & Beauty",
   				value: 24},
          {
   				name: "Banks",
   				value: 12},
          {
   name: "Copy & Printing",
   value: 6
 },
 {
   name: "Other Services",
   value: 5
 },{
   name: "Wireless Communications",
   value: 4
 },{
   name: "Dry Cleaning, Other Services",
   value: 1
 },{
   name: "Other Services, Tailoring, Alterations",
   value: 1
 },          
          ]
    },
    {
        name: 'Dining',
        data: [{
   				name: "American Restaurants",
   				value: 26},
          {
   				name: "Asian Restaurants",
   				value: 17},
          {
   name: "Italian Restaurants",
   value: 8
 },{
   name: "Coffee & Juice",
   value: 10
 },{
   name: "Latin Restaurants",
   value: 7
 },{
   name: "Mediterranean Restaurants",
   value: 6
 },{
   name: "French Restaurants",
   value: 2
 },{
   name: "Indian Restaurants",
   value: 1
 },{
   name: "Treats",
   value: 3
 }, {
   name: "Vegetarian",
   value: 1
 }

          ]
    },
    {
       name: 'Education',
       data: [{
   			name: "Educational",
   			value: 15},{
   name: "Performing Arts",
   value: 2
 },
        ]
    },
    {
       name: 'Entertainment',
       data: [{
   name: "Lodging",
   value: 10
 },{
   name: "Fitness",
   value: 4
 },{
   name: "Movie Theatres",
   value: 3
 }, {
   name: "Bars & Nightlife",
   value: 2
 },{
   name: "Movie Theaters",
   value: 2
 },{
   name: "Museums",
   value: 2
 },
]
    },
    {
        name: 'Medical',
        data: [{
   name: "Pharmacy",
   value: 6
 },
  {
   name: "Dental Offices",
   value: 5
 },{
   name: "Medical Services",
   value: 3
 },
{
   name: "Optical & Eyewear",
   value: 3
 },

]
    },
    {
        name: 'Religious',
        data: [{
   name: "Religious",
   value: 4
 }]
    }
    
    
    
    ]
});