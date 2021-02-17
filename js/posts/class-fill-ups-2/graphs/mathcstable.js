var math = [
  { Class: 'MATH 3B', PercentIncrease: '49.29%' },
  { Class: 'MATH 31A', PercentIncrease: '44.05%' },
  { Class: 'MATH 115AH', PercentIncrease: '42.50%' },
  { Class: 'MATH 31AL', PercentIncrease: '36.43%' },
  { Class: 'MATH 131BH', PercentIncrease: '32.50%' },
];

var mathHeader = ['Class', 'Percent Increase in Math Enrollment'];

var cs = [
  { Class: 'COM SCI 31', PercentIncrease: '40.50%' },
  { Class: 'COM SCI 32', PercentIncrease: '27.65%' },
  { Class: 'COM SCI 118', PercentIncrease: '20.00%' },
  { Class: 'COMSCI 180', PercentIncrease: '11.12%' },
  { Class: 'COM SCI M146', PercentIncrease: '4.38%' },
];

var csHeader = ['Class', 'Percent Increase in Computer Science Enrollment'];

function addMathTable(data, header) {
  var mathTable = document.getElementById('mathtable');
  var table = document.createElement('TABLE');
  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  var tr = document.createElement('TR');
  tableBody.appendChild(tr);

  for (word of header) {
    var tdHead = document.createElement('TH');
    tdHead.appendChild(document.createTextNode(word));
    tr.appendChild(tdHead);
  }

  for (let element of data) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (key in element) {
      var td = document.createElement('TD');
      td.appendChild(document.createTextNode(element[key]));
      tr.appendChild(td);
    }
  }

  mathTable.appendChild(table);
}

// var originalHTML = mathTable.innerHTML
addMathTable(math, mathHeader);
//addTable(cs, csHeader);

// function updateTables(){
//     mathTable.innerHTML = originalHTML
//     if(document.getElementById('tableChoice').selectedIndex==0){
//         addTable(math, mathHeader);
//     }else{
//         addTable(cs, csHeader);
//     }
//     }
//     document.getElementById('tableChoice').addEventListener('change', function(){
//         updateTables();
//     })
