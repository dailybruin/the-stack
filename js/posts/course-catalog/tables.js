d3.json('/datasets/course-catalog/similar-subjects.json', (error, data) => {
  data.forEach(d => {
    d.least_similar_subjects.reverse();
  });
  table(data);
});

function table(data) {
  const subjects = d3.set(data, d => d.subject).values();

  d3.select('#pick-subject')
      .on('change', e => pickSubject(data))
      .selectAll('option')
      .data(subjects)
      .enter()
      .append('option')
      .text(d => d)
      .attr('value', (d, i) => i);

  initTable('#most-similar-table');
  initTable('#least-similar-table');

  const defaultData = data.filter((d, i) => {
      return i == 0;
  });

  populateTable('#most-similar-table', defaultData, true);
  populateTable('#least-similar-table', defaultData, false);
}

function pickSubject(data) {
  const selectedSubjectIndex = d3.select('#pick-subject').property('value');
  const selectedData = data.filter((d, i) => {
      return i == parseInt(selectedSubjectIndex);
  });

  populateTable('#most-similar-table', selectedData, true);
  populateTable('#least-similar-table', selectedData, false);
}

function initTable(table) {
  const thead = d3.select(table).append('thead');
  const tbody = d3.select(table).append('tbody');

  const headColumns = thead.append('tr')
  headColumns.append('th').text("Subject");
  headColumns.append('th').text("Similarity");
}

function populateTable(table, data, most) {
  let similar_subjects = data[0][most? 'most_similar_subjects' : 'least_similar_subjects']
  similar_subjects.forEach((d, i) => {
      d.score = d3.format('.2f')(Number(d.score));
    });

  const tbody = d3.select(table).select('tbody');

  const rows = tbody.selectAll('tr')
      .data(similar_subjects);
  
  const tr = rows.enter()
      .append('tr')
  
  const defaultCells = tr.selectAll('td')
      .data(d => [d.name, d.score])
      .enter()
      .append('td')
      .text(d => d);
  
  const cells = rows.selectAll('td')
      .data(d => [d.name, d.score])
      .text(d => d);
  
  cells.enter()
      .append('td')
      .text(d => d);

  rows.exit().remove();
  cells.exit().remove();
}
