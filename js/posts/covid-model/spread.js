//iterate thru list of infected students, have each one infect neighbors
function runInfections(sim = false) {
  let arr = viz.infectedStudents.slice();
  for (s of arr) {
    infectNeighbors(s, sim);
  }
  if (!sim) { 
    updateCountDisplays();
  } else {
    return [viz.healthy_count, viz.infected_count, viz.recovered_count];
  }
}

//iterates thru connections of student and infect an average of 5.7
function infectNeighbors(id, sim = false) {
  let student = viz.student_nodes[id];
  student.length++;
  let p = r0 / student.connections.length;
  for (id2 of student.connections) {
    let student2 = viz.student_nodes[id2];
    if (Math.random() <= p && student2.status === HEALTHY) {
      infectStudent(id2, sim);
    }
  }

  // if infection length passed, student recovers
  if (student.length >= infectionLength) {
    student.status = RECOVERED;
    viz.infected_count--;
    viz.recovered_count++;
    if (!sim)
      changeColor(id, recovered_color);

    // remove from list of infected students
    for (var i = 0; i < viz.infectedStudents.length; i++) {
      if (viz.infectedStudents[i] === id) {
        viz.infectedStudents.splice(i, 1);
        break;
      }
    }
  }
}

// change status, update counts & lists, update node color
function infectStudent(id, sim = false) {
  viz.student_nodes[id].status = 1;
  viz.infectedStudents.push(id);
  viz.infected_count++;
  viz.healthy_count--;
  if (!sim)
    changeColor(id, infected_color);
}

// start out w/ randomly selected infected student
function initializeCases(sim) {
  for (let i = 0; i < initialCases; i++) {
    let x;
    do {
      x = Math.floor(Math.random() * viz.student_nodes.length);
    } while (viz.student_nodes[x].status === INFECTED);
    infectStudent(x, sim);
  }
}

// reset infections to 0 & week to 0 and clear variables accordingly
function restart(sim) {
  viz.PLAYING  = false;
  d3.select('.play.button')
    .style("background-color", 'white')
    .style("color", 'black');
  //clear old stuff
  for (let i = 0; i < viz.student_nodes.length; i++) {
    viz.student_nodes[i].status = HEALTHY;
    if (!sim)
      changeColor(i, healthy_color);
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
  initializeCases(sim);

  if (!sim) {
    updateCountDisplays();
  } else {
    return [viz.healthy_count, viz.infected_count, viz.recovered_count];
  }
}

// change color of node on viz
function changeColor(id, color) {
  let s = '#s' + id;
  d3.select(s).style('fill', color);
}

// update counts on viz 
function updateCountDisplays() {
  d3.select('.healthy').html("<b style='color:"+healthy_color+"'>"+viz.healthy_count.toLocaleString('en-us')+"</b> students never infected");
  d3.select('.infected').html("<b style='color:"+infected_color+"'>"+viz.infected_count.toLocaleString('en-us')+"</b> students infected");
  d3.select('.recovered').html("<b style='color:"+recovered_color+"'>"+viz.recovered_count.toLocaleString('en-us') + "</b> students recovered");
}
