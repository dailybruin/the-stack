const values = [
  {
    name: 'LADOT',
    divName: 'ladot-timeline',
  },
  {
    name: 'Big Blue Bus',
    divName: 'bbb-timeline',
  },
  {
    name: 'AVTA',
    divName: 'avta-timeline',
  },
  {
    name: 'Santa Clarita Transit',
    divName: 'sct-timeline',
  },
];

// init so only ladot shows
let currChart = 'ladot-timeline';
document.getElementById('bbb-timeline').style.display = 'none';
document.getElementById('avta-timeline').style.display = 'none';
document.getElementById('sct-timeline').style.display = 'none';

d3.select('#timeline-dropdown')
  .selectAll('option')
  .data(values)
  .enter()
  .append('option')
  .text(function(d) {
    return d.name; // text shown in menu
  })
  .attr('value', function(d) {
    return d.divName; // corresponding value returned by the button
  });
d3.select('#timeline-dropdown').on('change', function() {
  // hide old chart
  document.getElementById(currChart).style.display = 'none';
  // set currChart and show
  const divName = d3.select(this).property('value');
  currChart = divName;
  document.getElementById(currChart).style.display = 'block';
});
