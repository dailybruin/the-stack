$(document).ready(function(){

	var d = new Date();
	var m = d.getMonth();
	var y = d.getFullYear();

	// start date is October, 1994 (10-01-94)
	var rows = (y - 1994) * 12 + m; 
	console.log("NUMBER OF ROWS: " + rows);
	var table = [];

	for (var i = 0; i < rows; i++) {
		table[i] = [];
	}

	d3.json("http://localhost:5000/?search=racism", function(data) {
		data.forEach(function(d) {
			var tmp = new Date(d.date);
			var i = (tmp.getFullYear() - 1994) * 12 + tmp.getMonth() - 1;
			// console.log(tmp);
			// console.log(i);
			table[i].push(d);

		});

		table.forEach(function(c) {
			console.log(c);
		});

	});


});