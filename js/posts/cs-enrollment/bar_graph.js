var engineering_data;
$.getCSV('/datasets/cs-enrollment/eng_fte_totals.csv', function(data) {
  engineering_data = data;
});

function tooltip_contents(d, defaultTitleFormat, defaultValueFormat, color) {
  var $$ = this, config = $$.config, CLASS = $$.CLASS,
      titleFormat = config.tooltip_format_title || defaultTitleFormat,
      nameFormat = config.tooltip_format_name || function (name) {return name; },
      valueFormat = config.tooltop_format_value || defaultValueFormat,
      text, i, title, value, name, bgcolor;
} //do we need the for loop stuff?

var titles = ['http://c3js.org/samples/tooltip_format.html', 'b'];
var titles2 = ['vva', 'g'];

var fte_comparison_bar_chart = c3.generate({
  data: {
    x: 'x',
    columns: [
      ['x', '2013', '2014', '2015', '2016', '2017'],
      ['Total FTE', 33479, 34461, 35511, 36968, 38353],

    ],
    type: 'bar',
    color: function(color, d) {
      //d will be 'id' when called for legends
      return (d.index == 2 ? '#104E8B':'#87CEFA' );
    },
    legend: {
      position: 'right'
    },
  },
  bar: {
    width: {
      ratio: 0.5 //this makes bar with 50% of length between ticks
    },
  },
  size: {
    height: 400
  },
  axis {
    x: {
      type: 'category',
      tick: {
        rotate: 0,
        multiline: true
      },
      height: 60
    },
    rotated: false
  },
  bindto: '#cs-engineering-comparison-chart'
});
