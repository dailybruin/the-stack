function runInfections() {
  let arr = infectedStudents.slice();
  for (s of arr) {
    infectNeighbors(s);
  }
  updateCountDisplays();
}

/*
    input: id of infected student
    - iterates through every class student is in
    - randomly selects numExposed students in each class to be exposed
    - each selected student has p chance of being infected
    - infected students have status changed and are added to list of infected students
    - if original student has been sick for infectionLength period, they recover
*/
function infectNeighbors(id) {
  let student = student_nodes[id];
  student.length++;
  for (course in student['connections']) {
    let studList = student['connections'][course];
    let neighbors = [];
    for (let i = 0; i < numExposed; i++) {
      let x = Math.floor(Math.random() * studList.length);
      neighbors.push(studList[x]);
    }
    for (id2 of neighbors) {
      let student2 = student_nodes[id2];
      if (Math.random() <= p && student2.status == 0) {
        infectStudent(id2)
      }
    }
  }

  if (student.length >= infectionLength) {
    student.status = RECOVERED;
    infected_count--;
    recovered_count++;
    changeColor(id, 'purple');

    // remove from list of infected students
    for (var i = 0; i < infectedStudents.length; i++) {
      if (infectedStudents[i] === id) {
        infectedStudents.splice(i, 1);
        break;
      }
    }
  }
}

function infectStudent(id) {
  student_nodes[id].status = 1;
  infectedStudents.push(id);
  infected_count++;
  healthy_count--;
  changeColor(id, 'red');
}

function initializeCases() {
  console.log("init");
  for (let i = 0; i < initialCases; i++) {
    let x;
    do {
      x = Math.floor(Math.random() * student_nodes.length);
      console.log(x, student_nodes[x].status);
    } while(student_nodes[x].status === INFECTED);
    infectStudent(x);
  }
  console.log(infectedStudents);
}

function restart() {

  //clear old stuff
  for (let i = 0; i < student_nodes.length; i++) {
    student_nodes[i].status = HEALTHY;
    changeColor(i, 'green');
  }
  healthy_count = student_nodes.length;
  infected_count = 0;
  recovered_count = 0;
  slider.silentValue(0);
  sliderOldVal = 0;
  infectedStudents = [];

  // init first cases
  initializeCases();
  updateCountDisplays();

  console.log(infectedStudents, infected_count);
}

/* 
    input: student id
    - updates color of node once status changes
*/
function changeColor(id, color) {
  let s = '#s' + id;
  d3.select(s).style('fill', color);
}

function updateCountDisplays() {
  d3.select('#healthy').text(healthy_count + ' students never infected');
  d3.select('#infected').text(infected_count + ' students infected');
  d3.select('#recovered').text(recovered_count + ' students recovered');
}