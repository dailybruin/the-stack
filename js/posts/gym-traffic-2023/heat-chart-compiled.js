'use strict';
$(document).ready(function() {
  (window.currentTime_ = getCurrentDayAndHour()),
    d3.csv('/datasets/gym-traffic-2023/facility-heatchart-data.csv', function(
      a,
      b
    ) {
      if (a) throw a; // process data
      (b = processFacilityData(b)),
        renderTrafficText(b),
        renderBothFacilityHeatCharts(b),
        $(window).resize(function() {
          renderBothFacilityHeatCharts(b);
        });
    }),
    d3.csv('/datasets/gym-traffic-2023/comparison-chart-data.csv', function(
      a,
      b
    ) {
      if (a) throw a; // process data
      b = processComparisonData(b);
      var c = '#comparison-heatmap'; // render chart
      renderComparisonChart(b, c),
        $(window).resize(function() {
          renderComparisonChart(b, c);
        });
    });
});
function renderTrafficText(a) {
  var b = filterFacilityData(a),
    c = null;
  b.wooden.forEach(function(f) {
    (f.hour == currentTime_.hour) &
      (f.day_of_week == currentTime_.day_of_week) && (c = f.category);
  });
  var e = null;
  b.bfit.forEach(function(f) {
    (f.hour == currentTime_.hour) &
      (f.day_of_week == currentTime_.day_of_week) && (e = f.category);
  }),
    d3
      .select('#wooden-traffic-text')
      .text(labelTrafficCategory(c))
      .attr('class', 'italic'),
    d3
      .select('#bfit-traffic-text')
      .text(labelTrafficCategory(e))
      .attr('class', 'italic');
} // render wooden and bfit heat charts
function renderBothFacilityHeatCharts(a) {
  var b = filterFacilityData(a),
    c = ['#feedde', '#fdbe85', '#fd8d3c', '#d94701'], // http://colorbrewer2.org/#type=sequential&scheme=Oranges&n=4
    e = ['Not Busy', 'Moderate', 'Busy', 'Very Busy'];
  configAndRenderChart(b.wooden, '#wooden-heatmap', 'wooden', c, e),
    configAndRenderChart(b.bfit, '#bfit-heatmap', 'bfit', c, e);
} // render comparison charts
function renderComparisonChart(a, b) {
  var // http://www.colorhexa.com/80a478
  c = ['#008FD5'].concat(['#CFDDCC']).concat(['#ffb81c']); // [darker, less dark]
  configAndRenderChart(a, b, null, c, ['Wooden', '"Same"', 'BFit']);
}
function configAndRenderChart(a, b, c, e, f) {
  $(b).html('');
  var g = ['#CCD1D1'].concat(e),
    h = ['Closed'].concat(f),
    j = d3
      .scaleOrdinal()
      .domain(d3.range(0, g.length, 1))
      .range(g); // filter data to exclude hours from 1 to 4
  a = a.filter(function(m) {
    return (1 > m.hour) | (4 < m.hour);
  }); // store color of each circle
  var k = a.map(function(m) {
      return j(m.category);
    }),
    l = g.map(function(m, n) {
      return { color: m, text: h[n] };
    }); // legend
  // render chart
  renderHeatChart(a, k, b, l);
}
function renderHeatChart(a, b, c) {
  var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
    f = $(c).outerWidth(),
    g = $(c).outerHeight(),
    h = $(window).width(),
    j = !!(650 >= h),
    k = j
      ? { left: 0, right: 0, top: 5, bottom: 5 }
      : { left: 20, right: 20, top: 10, bottom: 10 },
    l = f - k.left - k.right,
    m = j ? 85 : 140,
    n = m - k.top - k.bottom,
    o = j ? 0.018 * l : 9,
    p = j ? { vertical: 2, horizontal: 1 } : { vertical: 8, horizontal: 4 },
    q = j ? 15 : 22,
    r = j ? 40 : 75,
    s = j ? 21 : 35,
    t = j ? 2 : 4,
    u = j ? 12 : 20,
    v = j ? 8 : 8,
    w = 2 * o + p.vertical,
    x = 2 * o + p.horizontal,
    y = d3
      .select(c)
      .append('svg')
      .attr('width', l + k.left + k.right)
      .attr('height', n + k.top + k.bottom)
      .attr('class', 'heat-chart-svg-container')
      .append('g')
      .attr('transform', 'translate(' + k.left + ',' + k.top + ')'),
    z = j
      ? ['Mo~Th', 'Fri', 'Sat', 'Sun']
      : ['Mon to Thur', 'Fri', 'Sat', 'Sun']; // get browser container width
  // mobile threshold
  // margins applied to svg container
  // get dimensions of container and determine dimensions of chart
  // dimension and size configs
  // determine size of circles / grids
  // render SVG container and g element using container dimensions
  // render day of week labels vertically
  y
    .selectAll('.day-label')
    .data(z)
    .enter()
    .append('text')
    .text(function(F) {
      return F;
    })
    .attr('x', q)
    .attr('y', function(F, G) {
      return s + o / 2 + G * w;
    })
    .style('text-anchor', 'middle')
    .attr('class', 'chart-label'); // render time and hour of day labels horizontally
  var A = [{ label: 'AM' }, { label: 'Noon' }, { label: 'PM' }],
    B = j
      ? [
          { label: '0', digit: 0 },
          { label: '5', digit: 5 },
          { label: '6', digit: 6 },
          { label: '', digit: 7 },
          { label: '', digit: 8 },
          { label: '9', digit: 9 },
          { label: '', digit: 10 },
          { label: '', digit: 11 },
          { label: '12', digit: 12 },
          { label: '', digit: 13 },
          { label: '', digit: 14 },
          { label: '3', digit: 15 },
          { label: '', digit: 16 },
          { label: '', digit: 17 },
          { label: '6', digit: 18 },
          { label: '', digit: 19 },
          { label: '', digit: 20 },
          { label: '9', digit: 21 },
          { label: '', digit: 22 },
          { label: '11', digit: 23 },
        ]
      : [
          { label: '0', digit: 0 },
          { label: '5', digit: 5 },
          { label: '6', digit: 6 },
          { label: '7', digit: 7 },
          { label: '8', digit: 8 },
          { label: '9', digit: 9 },
          { label: '10', digit: 10 },
          { label: '11', digit: 11 },
          { label: '12', digit: 12 },
          { label: '1', digit: 13 },
          { label: '2', digit: 14 },
          { label: '3', digit: 15 },
          { label: '4', digit: 16 },
          { label: '5', digit: 17 },
          { label: '6', digit: 18 },
          { label: '7', digit: 19 },
          { label: '8', digit: 20 },
          { label: '9', digit: 21 },
          { label: '10', digit: 22 },
          { label: '11', digit: 23 },
        ];
  B.forEach(function(F, G) {
    (F.x = r + G * x),
      6 == F.digit
        ? (A[0].x = F.x)
        : 12 == F.digit ? (A[1].x = F.x) : 18 == F.digit && (A[2].x = F.x);
  }),
    y
      .selectAll('.time-label')
      .data(A)
      .enter()
      .append('text')
      .text(function(F) {
        return F.label;
      })
      .attr('x', function(F) {
        return F.x;
      })
      .attr('y', t)
      .style('text-anchor', 'middle')
      .attr('class', 'chart-label'),
    y
      .selectAll('.hour-label')
      .data(B)
      .enter()
      .append('text')
      .text(function(F) {
        return F.label;
      })
      .attr('x', function(F) {
        return F.x;
      })
      .attr('y', u)
      .style('text-anchor', 'middle')
      .attr('class', 'chart-label'); // tooltip
  var C = d3
    .tip()
    .attr('class', 'heatchart-tip')
    .html(function(F) {
      var G = formatHour(F.hour),
        H =
          1 == F.day_of_week
            ? 'Mon to Thur'
            : 5 == F.day_of_week ? 'Fri' : 6 == F.day_of_week ? 'Sat' : 'Sun',
        I =
          "<span class='bold'>" +
          H +
          "</span> | <span class='bold'>" +
          G +
          '</span><br>';
      return (0 >= F.n_people_rel) | (0 >= F.traffic_ratio)
        ? I + "<span class='bold'>Closed</span>"
        : 'comparison' == F.type
          ? I +
            "Wooden is <span class='bold'>" +
            F.traffic_ratio +
            '</span> times<br>as busy as BFit'
          : I +
            "<span class='bold'>" +
            parseInt(100 * F.n_people_rel) +
            '%</span> relative to peak<br>';
    });
  y.call(C),
    y
      .selectAll('.heat-circle')
      .data(a)
      .enter()
      .append('circle')
      .attr('cx', function(F) {
        var G = -1;
        return (
          B.forEach(function(H, I) {
            F.hour == H.digit && (G = I);
          }),
          r + G * x
        );
      })
      .attr('cy', function(F) {
        return getHourIndexY(F.day_of_week) * w + s;
      })
      .attr('r', o)
      .attr('class', function(F) {
        return (F.hour == window.currentTime_.hour) &
          (F.day_of_week == window.currentTime_.day_of_week)
          ? 'heat-circle black-stroke'
          : 'heat-circle no-border';
      })
      .style('fill', function(F, G) {
        return b[G];
      })
      .on('mouseover', function(F) {
        C.show(F);
      })
      .on('mouseout', function(F) {
        C.hide(F);
      }),
    d3
      .select(c)
      .append('svg')
      .attr('width', l)
      .attr('height', 4)
      .append('line')
      .attr('x1', 0)
      .attr('x2', l)
      .attr('y1', 0)
      .attr('y2', 0)
      .attr('stroke-dasharray', '5, 5')
      .style('stroke', 'black')
      .style('stroke-width', '1px'),
    e.forEach(function(F) {
      (F.stroke = 'none'), (F.stroke_width = '0px');
    }),
    (e = e.concat([
      { color: 'white', text: 'Now', stroke: 'black', stroke_width: '2.5px' },
    ]));
  var D = d3
      .select(c)
      .append('svg')
      .attr('width', l + k.left + k.right)
      .attr('height', 32),
    E = D.append('g')
      .attr('transform', 'translate(10,5)')
      .attr('class', 'circle-legend-svg');
  E.selectAll('circle')
    .data(e)
    .enter()
    .append('circle')
    .attr('r', 0.8 * o)
    .attr('cx', function(F, G) {
      return 10 + G * o * v;
    })
    .attr('cy', 5)
    .attr('fill', function(F) {
      return F.color;
    })
    .attr('stroke', function(F) {
      return F.stroke;
    })
    .attr('stroke-width', function(F) {
      return F.stroke_width;
    }),
    E.selectAll('text')
      .data(e)
      .enter()
      .append('text')
      .text(function(F) {
        return F.text;
      })
      .attr('x', function(F, G) {
        return 10 + G * o * v;
      })
      .attr('y', 15 + 1.2 * (0.8 * o))
      .attr('class', 'legend-label');
} // recode day of week from [Sunday = 0, ..., Saturday = 6] to [Monday ~ Thursday = 1, Friday = 5, Saturday = 6, Sunday = 7]
function recodeDayOfWeek(a) {
  return 0 == a ? (a = 7) : (1 <= a) & (4 >= a) && (a = 1), a;
} // process data upon loading
function processFacilityData(a) {
  return (
    a.forEach(function(b) {
      (b.day_of_week = parseInt(b.day_of_week)),
        (b.hour = parseInt(b.hour)),
        (b.n_people = parseInt(b.n_people)),
        (b.n_people_rel = +b.n_people_rel),
        (b.category = parseInt(b.category)),
        (b.type = 'facility');
    }),
    a
  );
}
function processComparisonData(a) {
  return (
    a.forEach(function(b) {
      (b.day_of_week = parseInt(b.day_of_week)),
        (b.hour = parseInt(b.hour)),
        (b.wooden_n_people = parseInt(b.wooden_n_people)),
        (b.bfit_n_people = parseInt(b.bfit_n_people)),
        (b.traffic_ratio = +b.traffic_ratio),
        (b.category = parseInt(b.category)),
        (b.type = 'comparison');
    }),
    a
  );
} // get hour's position
function getHourIndexY(a) {
  return 1 === a ? 0 : 5 === a ? 1 : 6 === a ? 2 : 7 === a ? 3 : void 0;
}
function filterFacilityData(a) {
  var b = a.filter(function(e) {
      return 'wooden' == e.facility;
    }),
    c = a.filter(function(e) {
      return 'bfit' == e.facility;
    });
  return { wooden: b, bfit: c };
} // turn traffic category into display text
function labelTrafficCategory(a) {
  return 0 === a
    ? 'closed'
    : 1 === a
      ? 'not busy'
      : 2 === a
        ? 'not too busy'
        : 3 === a ? 'somewhat busy' : 4 === a ? 'very busy' : null;
} // format tooltip time
function formatHour(a) {
  var b = d3.timeParse('%H'),
    c = d3.timeFormat('%I'),
    e = d3.timeFormat('%p'),
    f = b(a),
    g = c(f),
    h = e(f);
  return parseInt(g) + ' ' + h;
} // get current day and hour
function getCurrentDayAndHour() {
  var a = new Date(),
    b = moment(a).tz(moment.tz.guess()),
    c = b.clone().tz('America/Los_Angeles');
  return { hour: c.hour(), day_of_week: recodeDayOfWeek(c.day()) };
}
