d3.queue()
  .defer(d3.json, '/datasets/department-similarity/similar-subjects.json')
  .await((error, similarData) => {

    // process data
    similarData.forEach(d => {
      d.least_similar.reverse();
    });

    renderSubjectTwinTables(similarData);

  });


function renderSubjectTwinTables(data) {
  const subjects = d3.set(data, d => d.name).values(),
        defaultSubject = 'Astronomy';

  d3.select('#pick-subject')
      .on('change', e => pickSubject(data))
      
      .selectAll('option')
      .data(subjects)
      .enter()
      .append('option')
      .property('selected', d => d == defaultSubject)
      .text(d => d)
      .attr('value', (d, i) => i);

  initTable('#most-similar-table');
  initTable('#least-similar-table');

  const defaultData = data.filter((d, i) => {
    return d.name == defaultSubject;
  });

  populateTable('#most-similar-table', defaultData, 'most_similar');
  populateTable('#least-similar-table', defaultData, 'least_similar');
}

function getPickedData(selectId, data) {
  const selectedIndex = d3.select(selectId).property('value');
  const selectedData = data.filter((d, i) => {
      return i == parseInt(selectedIndex);
  });
  return selectedData;
}

function pickSubject(data) {
  const selectedData = getPickedData('#pick-subject', data);
  populateTable('#most-similar-table', selectedData, 'most_similar');
  populateTable('#least-similar-table', selectedData, 'least_similar');
}

function initTable(table) {
  const thead = d3.select(table).append('thead');
  const tbody = d3.select(table).append('tbody');

  const headColumns = thead.append('tr')
  headColumns.append('th').text("Subject");
  headColumns.append('th').text("Similarity");
}

function populateTable(table, data, key) {
  let similar_subjects = data[0][key];
  similar_subjects.forEach((d, i) => {
      d.score = d3.format('.2f')(Number(d.score));
    });

  const tbody = d3.select(table).select('tbody');

  const rows = tbody.selectAll('tr')
      .data(similar_subjects);
  
  const tr = rows.enter()
      .append('tr');
  
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
