var ucla_top5_chart = c3.generate({
  data: {
    x: 'x',
    columns: [
      [
        'x',
        'ActBlue',
        'Biden for President',
        'DNC Services Corp / Democratic National Committee',
        'Biden Victory Fund',
        'DCCC',
      ],
      ['Total Donations', 430911.97, 186788.08, 111998.50, 83850.00, 73143.00],
    ],
    type: 'bar',
    color: function(color, d) {
      // d will be 'id' when called for legends
      return d.index == 2 ? '#104E8B' : '#87CEFA';
    },
    legend: {
      position: 'right',
    },
  },
  bar: {
    width: {
      ratio: 0.5, // this makes bar width 50% of length between ticks
    },
    // or
    //width: 100 // this makes bar width 100px
  },

  size: {
    height: 400,
  },
  axis: {
    x: {
      type: 'category',
      tick: {
        rotate: 0,
        multiline: true,
      },
      height: 60,
    },
    rotated: false,
  },
  bindto: '#ucla-donations-chart',
});

var usc_top5_chart = c3.generate({
  data: {
    x: 'x',
    columns: [
      [
        'x',
        'ActBlue',
        'Biden for President',
        'DCCC',
        'DSCC',
        'Trump Victory',
      ],
      ['Total Donations', 359123.28, 133628.74, 98000.00, 48421.00, 35000.00],
    ],
    type: 'bar',
    color: function(color, d) {
      // d will be 'id' when called for legends
      return d.index == 2 ? '#104E8B' : '#87CEFA';
    },
    legend: {
      position: 'right',
    },
  },
  bar: {
    width: {
      ratio: 0.5, // this makes bar width 50% of length between ticks
    },
    // or
    //width: 100 // this makes bar width 100px
  },

  size: {
    height: 400,
  },
  axis: {
    x: {
      type: 'category',
      tick: {
        rotate: 0,
        multiline: true,
      },
      height: 60,
    },
    rotated: false,
  },
  bindto: '#usc-donations-chart',
});

// fix y - axis max to 45000 for each graph for consistency 
// change colors 
// add titles 
// label x - axis 
// try to remove total donations label from x axis 

var ucb_top5_chart = c3.generate({
  data: {
    x: 'x',
    columns: [
      [
        'x',
        'ActBlue',
        'Biden for President',
        'LCV Victory Fund',
        'House Majority PAC',
        'Josh Harder for Congress',
      ],
      ['Total Donations', 40172.86, 32108.73, 20000.00, 12500.00, 10420.83],
    ],
    type: 'bar',
    color: function(color, d) {
      // d will be 'id' when called for legends
      return d.index == 2 ? '#104E8B' : '#87CEFA';
    },
    legend: {
      position: 'right',
    },
  },
  bar: {
    width: {
      ratio: 0.5, // this makes bar width 50% of length between ticks
    },
    // or
    //width: 100 // this makes bar width 100px
  },

  size: {
    height: 400,
  },
  axis: {
    x: {
      type: 'category',
      tick: {
        rotate: 0,
        multiline: true,
      },
      height: 60,
    },
    rotated: false,
  },
  bindto: '#ucb-donations-chart',
});