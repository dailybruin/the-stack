var female = [
  { Department: "Germanic Languages", PercentChange: "140.48%"},
  { Department: "Chemical and Biomolecular Engnieering", PercentChange: "118.90%"},
  { Department: "Dental Clinic-Off Campus", PercentChange: "115.38%"},
  { Department: "Materials Science & Engr (MSE)", PercentChange: "101.60%"},
  { Department: "Dean, Div of Humanities" , PercentChange: "100%"}
];

var femaleHeader = ["School", "Percent Change in Female Proportion"]

var americanIndian = [
  { Department: "Sociology", PercentChange: "123.89%"},
  { Department: "School-wide Programs, LSPA", PercentChange: "83.33%"},
  { Department: "Anthropology", PercentChange: "68.78%"},
  { Department: "Aerospace Studies", PercentChange: "61.01%"},
  { Department: "Nursing" , PercentChange: "51.97%"}
];

var americanHeader = ["School", "Percent Change in American Indian Proportion"]


var asian = [
  { Department: "Film, TV, & Digital Media", PercentChange: "538.44%"},
  { Department: "Earth, Planetary & Space Sciences (EPSS)", PercentChange: "331.82%"},
  { Department: "Int Biology & Physiology", PercentChange: "190.00%"},
  { Department: "Archaeology", PercentChange: "188.06%"},
  { Department: "Theater" , PercentChange: "185.06%"}
];

var asianHeader = ["School", "Percent Change in Asian Proportion"]


var black = [
  { Department: "Community Health Sciences", PercentChange: "204.37%"},
  { Department: "Chicana/o Studies", PercentChange: "147.83%"},
  { Department: "Film, TV, & Digital Media", PercentChange: "88.06%"},
  { Department: "Chemistry and Biochemistry", PercentChange: "78.16%"},
  { Department: "Theather" , PercentChange: "65.71%"}
];

var blackHeader = ["School", "Percent Change in Black Proportion"]


var latino = [
  { Department: "Psychology", PercentChange: "207.64%"},
  { Department: "Mathematics", PercentChange: "143.21%"},
  { Department: "Military Science", PercentChange: "100.00%"},
  { Department: "English", PercentChange: "84.23%"},
  { Department: "Community Health Sciences" , PercentChange: "72.04%"}
];

var latinoHeader = ["School", "Percent Change in Latino Proportion"]



function addTable(data, header) {

  var table = document.createElement('TABLE');
  //table.style.border = '1px solid black';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  // create header
  var tr = document.createElement('TR');
  tableBody.appendChild(tr);
  for (word of header) {
    var tdHead = document.createElement('TH');
    //tdHead.style.border = '1px solid black';
    tdHead.appendChild(document.createTextNode(word));
    tr.appendChild(tdHead);
  }

  // create table body
  for (let element of data) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (key in element) {
      var td = document.createElement('TD');
      //td.width = '500';
      //td.style.border = '1px solid black';
      td.appendChild(document.createTextNode(element[key]));
      tr.appendChild(td);
    }
  }
  femaleTable.appendChild(table);
}
var femaleTable = document.getElementById("table");
var originalHTML = femaleTable.innerHTML

addTable(female, femaleHeader);
function updateTables(){
  femaleTable.innerHTML = originalHTML
  if (document.getElementById('tableChoice').selectedIndex == 0) {
    addTable(female, femaleHeader);
  } else if (document.getElementById('tableChoice').selectedIndex == 1) {
    addTable(americanIndian, americanHeader);
  } else if (document.getElementById('tableChoice').selectedIndex == 2) {
    addTable(asian, asianHeader);
  } else if (document.getElementById('tableChoice').selectedIndex == 3) {
    addTable(black, blackHeader);
  } else {
    addTable(latino, latinoHeader);
  }
}

document.getElementById('tableChoice').addEventListener('change', function() {
    updateTables();
})

