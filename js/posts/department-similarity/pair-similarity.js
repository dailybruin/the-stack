d3.csv('/datasets/department-similarity/pair-similarity.csv', (error, data) => {
  // process data
  data.forEach((d, i) => {
    d.score = Number(d.score);
  });

  const defaultSubject1 = 'Anthropology',
        defaultSubject2 = 'Mathematics';

  let subjects = d3.set();
  data.forEach((d, i) => {
    subjects.add(d.subject1);
    subjects.add(d.subject2);
  });

  subjects = subjects.values().sort();
  
  d3.select('#pick-subject1')
    .on('change', e => pickPairSubjects(data))
    .selectAll('option')
    .data(subjects)
    .enter()
    .append('option')
    .property('selected', d => d == defaultSubject1)
    .text(d => d);

  d3.select('#pick-subject2')
    .on('change', e => pickPairSubjects(data))
    .selectAll('option')
    .data(subjects)
    .enter()
    .append('option')
    .property('selected', d => d == defaultSubject2)
    .text(d => d);

  renderText(defaultSubject1, defaultSubject2, data);
})

function pickPairSubjects(data) {
  const pickedSubject1 = d3.select('#pick-subject1').property('value'),
        pickedSubject2 = d3.select('#pick-subject2').property('value');
  renderText(pickedSubject1, pickedSubject2, data);
}

function renderText(subject1, subject2, data) {
  const selectedData = data.filter((d, i) => {
    return (d.subject1 == subject1 & d.subject2 == subject2) | (d.subject1 == subject2 & d.subject2 == subject1);
  });

  d3.select('#pair-similarity-score')
    .datum(selectedData[0])
    .text(d =>  subject1 == subject2 ? "~" : d.score);

  d3.select('#pair-similarity-label')
    .datum(selectedData[0])
    .text(d => subject1 == subject2 ? "Pick 2 different departments to compare" : "Similarity Score");
}