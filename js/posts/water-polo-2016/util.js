function parseBoxes(data, boxes) {
	data["boxes"] = [];
	for (i = 1; i <= boxes; i++) {
		data["boxes"].push(data[String(i)])
	}
}

function parseShots(row) {
	var res = [0,0];
	row.replace(/[^SG]/g, '').split('').map(function(c) { if (c === 'G') { res[0] += 1 } else { res[1] += 1 } });
	return res;
}