var vorp_bar_chart = c3.generate({
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
