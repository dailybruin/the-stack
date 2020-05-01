/*
    input: id of infected student
    - iterates through every class student is in
    - randomly selects numExposed students in each class to be exposed
    - each selected student has p chance of being infected
    - infected students have status changed and are added to list of infected students
    - if original student has been sick for infectionLength period, they recover
*/
async function infect(id) {
  await sleep(5000);
  let student = data['nodes'][id];
  student.length++;
  for (course in student['connections']) {
    let studList = student['connections'][course];
    let neighbors = [];
    for (let i = 0; i < numExposed; i++) {
      let x = Math.floor(Math.random() * studList.length);
      neighbors.push(studList[x]);
    }

    for (id2 of neighbors) {
      console.log(id2);
      let student2 = data['nodes'][id2];
      if (Math.random() <= p && student2.status == 0) {
        student2.status = INFECTED;
        infectedStudents.push(id2);
        changeColor(id2, 'red');
      }
    }
  }

  if (student.length >= infectionLength) {
    student.status = RECOVERED;
    changeColor(id, 'purple');

    // remove from list of infected students
    for (var i = 0; i < infectedStudents.length; i++) {
      if (infectedStudents[i] === id) {
        infectedStudents.splice(i, 1);
        break;
      }
    }
  }
  console.log(infectedStudents);
}

/* 
    input: student id
    - updates color of node once status changes
*/
function changeColor(id, color) {
  let s = '#s' + id;
  d3.select(s).style('fill', color);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
