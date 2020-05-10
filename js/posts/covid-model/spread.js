function runInfections(viz, sim = false) {
  let arr = viz.infectedStudents.slice();
  for (s of arr) {
    infectNeighbors(viz, s, sim);
  }
  if (!sim) { 
    updateCountDisplays(viz);
  } else {
    return [viz.healthy_count, viz.infected_count, viz.recovered_count];
  }
}

/*
    input: id of infected student
    - iterates through every class student is in
    - randomly selects numExposed students in each class to be exposed
    - each selected student has p chance of being infected
    - infected students have status changed and are added to list of infected students
    - if original student has been sick for infectionLength period, they recover
*/
function infectNeighbors(viz, id, sim = false) {
  let student = viz.student_nodes[id];
  student.length++;
  // for (course in student['connections']) {
    // let studList = student['connections'][course];
    let studList = student.connections;
    if (studList.length === 0) {
      return;   //student has no connections
    }
    let neighbors = [];
    for (let i = 0; i < viz.numExposed; i++) {
      let x = Math.floor(Math.random() * studList.length);
      neighbors.push(studList[x]);
    }
    for (id2 of neighbors) {
      let student2 = viz.student_nodes[id2];
      if (Math.random() <= viz.p && student2.status === HEALTHY) {
        infectStudent(viz, id2, sim);
      }
    }
  // }

  if (student.length >= viz.infectionLength) {
    student.status = RECOVERED;
    viz.infected_count--;
    viz.recovered_count++;
    if (!sim)
      changeColor(viz, id, recovered_color);

    // remove from list of infected students
    for (var i = 0; i < viz.infectedStudents.length; i++) {
      if (viz.infectedStudents[i] === id) {
        viz.infectedStudents.splice(i, 1);
        break;
      }
    }
  }
}

function infectStudent(viz, id, sim = false) {
  viz.student_nodes[id].status = 1;
  viz.infectedStudents.push(id);
  viz.infected_count++;
  viz.healthy_count--;
  if (!sim)
    changeColor(viz, id, infected_color);
}

function initializeCases(viz, sim) {
  for (let i = 0; i < viz.initialCases; i++) {
    let x;
    do {
      x = Math.floor(Math.random() * viz.student_nodes.length);
    } while (viz.student_nodes[x].status === INFECTED);
    infectStudent(viz, x, sim);
  }
}

function restart(viz, sim) {
  viz.PLAYING  = false;
  d3.select('.play.button.viz' + viz.id)
    .style("background-color", 'white')
    .style("color", 'black');
  //clear old stuff
  for (let i = 0; i < viz.student_nodes.length; i++) {
    viz.student_nodes[i].status = HEALTHY;
    if (!sim)
      changeColor(viz, i, healthy_color);
  }
  viz.healthy_count = viz.student_nodes.length;
  viz.infected_count = 0;
  viz.recovered_count = 0;
  if (!sim) {
    viz.slider.silentValue(0);
    viz.sliderOldVal = 0;
  }
  viz.infectedStudents = [];

  // init first cases
  initializeCases(viz, sim);

  if (!sim) {
    updateCountDisplays(viz);
  } else {
    return [viz.healthy_count, viz.infected_count, viz.recovered_count];
  }
}

/* 
    input: student id
    - updates color of node once status changes
*/
function changeColor(viz, id, color) {
  let s = '#v' + viz.id+ 's' + id;
  d3.select(s).style('fill', color);
}

function updateCountDisplays(viz) {
  d3.select('.healthy.viz' + viz.id).html("<b style='color:"+healthy_color+"'>"+viz.healthy_count.toLocaleString('en-us')+"</b> students never infected");
  d3.select('.infected.viz' + viz.id).html("<b style='color:"+infected_color+"'>"+viz.infected_count.toLocaleString('en-us')+"</b> students infected");
  d3.select('.recovered.viz' + viz.id).html("<b style='color:"+recovered_color+"'>"+viz.recovered_count.toLocaleString('en-us') + "</b> students recovered");
}
