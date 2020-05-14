var table = document.getElementById('table');


var row;
var category;

for (i=0; i<10; i++) {
    row = document.createElement('tr');
    for (j=0; j<5; j++) {
        category = document.createElement('td');
        row.appendChild(category);
    }
    row.classList.add('row_button');
    table.appendChild(row);
}
