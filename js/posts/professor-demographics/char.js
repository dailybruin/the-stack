
/*
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
    console.log('head')
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("mytable");
console.log(table)
let data = Object.keys(female[0]);
generateTableHead(table, data);
generateTable(table, mountains);
*/

var female = [
  { Department: "L&S Life Sciences", PercentChange: "31.39%"},
  { Department: "School of Arts & Architecture (SOAA)", PercentChange: "30.23%"},
  { Department: "L&S Social Sciences", PercentChange: "24.88%"},
  { Department: "Luskin School of Public Affairs (LSPA)", PercentChange: "21.48%"},
  { Department: "Henry Samueli School of Engineering & Applied Science (HSSEAS)" , PercentChange: "20.86%"}
];

var femaleHeader = ["School", "Percent Change in Female Proportion"];

function addTable(data, header) {

  var table = document.createElement('TABLE');

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  // create header
  var tr = document.createElement('TR');
  tableBody.appendChild(tr);
  for (word of header) {
    var tdHead = document.createElement('TH');
    tdHead.appendChild(document.createTextNode(word));
    tr.appendChild(tdHead);
  }
  // create table body
  for (let element of data) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (key in element) {
      var td = document.createElement('TD');
      td.appendChild(document.createTextNode(element[key]));
      tr.appendChild(td);
    }
  }
  femaleTable.appendChild(table);
}
var femaleTable = document.getElementById("table");
var originalHTML = femaleTable.innerHTML;
addTable(female, femaleHeader);

function updateTables(){
  femaleTable.innerHTML = originalHTML;
  if (document.getElementById('tableChoice').selectedIndex == 0) {
    addTable(female, femaleHeader);
  } else if (document.getElementById('tableChoice').selectedIndex == 1) {
    var americanIndian = [
      { Department: "L&S Social Sciences", PercentChange: "73.97%"},
      { Department: "School of Nursing", PercentChange: "51.97%"},
      { Department: "Luskin School of Public Affairs (LSPA)", PercentChange: "3.70%"},
      { Department: "School of Law", PercentChange: "1.06%"},
      { Department: "Henry Samueli School of Engineering & Applied Science (HSSEAS)" , PercentChange: "0.21%"}
    ];
    var americanHeader = ["Department", "Percent Change in American Indian Proportion"];
    addTable(americanIndian, americanHeader);
  } else if (document.getElementById('tableChoice').selectedIndex == 2) {
    var asian = [
      { Department: "School of Theater, FIlm & Television (STFT)", PercentChange: "279.54%"},
      { Department: "Luskin School of Public Affairs (LSPA)", PercentChange: "101.48%"},
      { Department: "School of Nursing", PercentChange: "66.03%"},
      { Department: "L&S Physical Sciences", PercentChange: "55.52%"},
      { Department: "School of Law" , PercentChange: "39.26%"}
    ];
    var asianHeader = ["Department", "Percent Change in Asian Proportion"];
    addTable(asian, asianHeader);
  } else if (document.getElementById('tableChoice').selectedIndex == 3) {
    var black = [
      { Department: "L&S Physical Sciences", PercentChange: "161.33%"},
      { Department: "School of Theater, FIlm & Television (STFT)", PercentChange: "104.37%"},
      { Department: "L&S Humanities", PercentChange: "47.44%"},
      { Department: "Luskin School of Public Affairs (LSPA)", PercentChange: "46.57%"},
      { Department: "School of Law" , PercentChange: "21.70%"}
    ];
    var blackHeader = ["Department", "Percent Change in Black Proportion"];
    addTable(black, blackHeader);
  } else {
    var latino = [
      { Department: "School of Nursing", PercentChange: "47.07%"},
      { Department: "School of Dentistry", PercentChange: "44.37%"},
      { Department: "School of Law", PercentChange: "40.18%"},
      { Department: "L&S Humanities", PercentChange: "34.47%"},
      { Department: "L&S Life Sciences" , PercentChange: "30.89%"}
    ];
    var latinoHeader = ["Department", "Percent Change in Latino Proportion"];
    addTable(latino, latinoHeader);
  }
}

document.getElementById('tableChoice').addEventListener('change', function() {
    updateTables();
});
