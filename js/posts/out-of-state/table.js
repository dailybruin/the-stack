function initTable(data) {
	var tbl     = document.createElement("table");
	var tblBody = document.createElement("tbody");

	for (var i = 0; i < data.length; i++) {
		var row = document.createElement("tr");

		for (var j in data[i]) {
			var cell = document.createElement("td");  
			var cellText = document.createTextNode(data[i][j]);
			cell.appendChild(cellText);
			row.appendChild(cell);
		}
		tblBody.appendChild(row);
	}

	tbl.appendChild(tblBody);
	document.getElementById("table").appendChild(tbl);
}