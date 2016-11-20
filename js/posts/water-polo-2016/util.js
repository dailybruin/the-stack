function parseShots(row) {
	var res = [0,0];
	row.replace(/[^SG]/g, '').split('').map(function(c) { if (c === 'G') { res[0] += 1 } else { res[1] += 1 } });
	return res;
}