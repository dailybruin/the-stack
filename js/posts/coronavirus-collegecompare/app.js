function Uni(n, d1, d2, d3) {
    this.name = n;
    this.date1 = d1;
    this.date2 = d2;
    this.date3 = d3;
}

var university_list = [
    new Uni('UCLA (CA)', '3/1', '3/2', '3/3'),
    new Uni('UCSB (CA)', '3/1', '3/2', '3/3'),
]

var compare_table = document.getElementById('college-compare');

for (i=0; i<university_list.length; i++) {
    var temp_row = document.createElement('tr');
    var temp_u = university_list[i];
    temp_row.innerHTML += '<td>' + temp_u.name + '</td>';
    temp_row.innerHTML += '<td>' + temp_u.date1 + '</td>';
    temp_row.innerHTML += '<td>' + temp_u.date2 + '</td>';
    temp_row.innerHTML += '<td>' + temp_u.date3 + '</td>';

    compare_table.appendChild(temp_row);
}
var buttons = document.getElementsByTagName('th')
for (i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
            alert('test')
        }
    )
}

console.log('anus')
