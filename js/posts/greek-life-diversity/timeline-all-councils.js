const councils = [
  'All councils',
  'Asian Greek Council',
  'Interfraternity Council',
  'Latinx Greek Council',
  'Multi-Interest Greek Council',
  'National Pan-Hellenic Council',
  'Panhellenic Council',
];

//Code for init found at https://www.d3-graph-gallery.com/graph/line_select.html
function initDropdown(values, id) {
  d3
    .select(id)
    .selectAll('option')
    .data(values)
    .enter()
    .append('option')
    .text(function(d) {
      return d;
    }) // text showed in the menu
    .attr('value', function(d) {
      return d;
    }); // corresponding value returned by the button

  d3.select(id).on('change', function() {
    let dayValue = d3.select(this).property('value');
    updateData(dayValue);
  });
}

initDropdown(councils, timeline_dropdown);
