var mymap = L.map('mapid', {
	center: [34.0711224,-118.4418554],
	zoom: 15.5,
	minZoom: 15,
	maxBounds : [[34.07925, -118.45774], [34.06278, -118.4362]]
});

var baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVycnlsaW5ldyIsImEiOiJjajIwc2E1YXkwMmt6MzNuMXZnaWRjb2lhIn0.u0AHZNQd8_8hFmpaVvI1nQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
});
mymap.addLayer(baseLayer);

var start_locations = {
	"Hedrick" : "hedrick", 
	"Rieber" : "rieber",
	"Sproul" : "sproul",
	"De Neve" : "cross"
};

var end_locations = {
	"Sculpture Garden" : "sculpture", 
	"Powell" : "powell",
	"Boelter" : "boelter",
	"Target" : "target"
};

d3.select('#start_location')
        .on('change', function(e) {
        	generateRoutes($('#start_location option:selected').text(),
				$('#end_location option:selected').text());
        })
    	.selectAll('option')
        .data(Object.keys(start_locations))
        .enter()
        .append('option')
    	.attr("value", function (d) {return d;})
        .text(function (d) {return d;});

d3.select('#end_location')
        .on('change', function(e) {
        	generateRoutes($('#start_location option:selected').text(),
				$('#end_location option:selected').text());
        })
    	.selectAll('option')
        .data(Object.keys(end_locations))
        .enter()
        .append('option')
    	.attr("value", function (d) {return d;})
        .text(function (d) {return d;});


generateRoutes("Hedrick", "Sculpture Garden");
calculateStats();

function generateRoutes(start, end) {
	
	mymap.eachLayer(function(layer){
		if (layer != baseLayer) {
			layer.remove();
		}
	});

	var path = "/datasets/walking-to-class/";
	var route_A_hill = path + start_locations[start] + "_cross.gpx"; 
	var route_A_campus = path + "cross_" + end_locations[end] + ".gpx";

	if (end == "Sculpture Garden" || end == "Powell") {
		var route_B_hill = path + start_locations[start] + "_stop.gpx"; 
		var route_B_campus = path + "stop_" + end_locations[end] + ".gpx";
	} else {
		var route_B_hill = path + start_locations[start] + "_cross.gpx"; 
		var route_B_campus = path + "cross_" + end_locations[end] + "_B.gpx";
	}

	if (start != "De Neve") {
		var r1 = this.generateLayer(route_A_hill, "green");
		mymap.addLayer(r1);
	}

	var r2 = this.generateLayer(route_A_campus, "green");
	mymap.addLayer(r2);

	if (start != "De Neve" || (end == "Sculpture Garden" || end == "Powell")) {
		var r3 = this.generateLayer(route_B_hill, "blue");
		mymap.addLayer(r3);
	}

	var r4 = this.generateLayer(route_B_campus, "blue");
	mymap.addLayer(r4);

}

function generateLayer(filePath, color) {
	return (new L.GPX(filePath, {
		async: true,
		marker_options: {
			startIconUrl: '',
	  		endIconUrl: '',
	    	shadowUrl: ''
		},
		polyline_options: {
	    color: color
	  }
	}).on('loaded', function(e) {
	  // mymap.fitBounds(e.target.getBounds());
	}));
}




async function calculateStats() {
	let route_data = "start,stop,route,trial,distance,elevation_gain,elevation_loss,number_stairs\n";

	for (s in start_locations) {
		let start = start_locations[s];

		for (let i = 1; i <= 3; i++) {
			let path = "/datasets/walking-to-class/";
			let suffix = i != 1 ? "_" + i + ".gpx" : ".gpx"; 
		
			if (start != "cross") {
				let route_cross = path + start + "_cross" + suffix;
				let cross_stats = await getStats(route_cross);
				route_data += (start + ",cross,A," + i + "," + cross_stats[0] + "," + cross_stats[1] + "," + cross_stats[2] + ",\n");
			}	

			let route_stop = path + start + "_stop" + suffix; 
			let stop_stats = await getStats(route_stop);

			route_data += (start + ",stop,A," + i + "," + stop_stats[0] + "," + stop_stats[1] + "," + stop_stats[2] + ",\n");
		}
	}

	for (e in end_locations) {
		let end = end_locations[e];

		for (let i = 1; i <= 3; i++) {
			let path = "/datasets/walking-to-class/";
			let suffix = i != 1 ? "_" + i + ".gpx" : ".gpx"; 

			if (end != "powell" || i == 1) {
				let route_A = path + "cross_" + end + suffix;
				let a_stats = await getStats(route_A);
				route_data += ("cross," + end + ",A," + i + "," + a_stats[0] + "," + a_stats[1] + "," + a_stats[2] + ",\n");
			}
			
			if (end == "sculpture" || end == "powell") {
				let route_B = path + "stop_" + end + suffix;
				let b_stats = await getStats(route_B);
				route_data += ("stop," + end + ",A," + i + "," + b_stats[0] + "," + b_stats[1] + "," + b_stats[2] + ",\n");
			} else if (end != "target" || i < 3){
				let route_B = path + "cross_" + end + "_B" + suffix;
				let b_stats = await getStats(route_B);
				route_data += ("cross," + end + ",B," + i + "," + b_stats[0] + "," + b_stats[1] + "," + b_stats[2] + ",\n");
			}

		}
	}

	// console.log("\n\n" + route_data);


	// var hiddenElement = document.createElement('a');
 //    hiddenElement.href = 'data:text/route_data;charset=utf-8,' + encodeURI(route_data);
 //    hiddenElement.target = '_blank';
 //    hiddenElement.download = 'route_data.csv';
 //    hiddenElement.click();
}
function getStats(filePath) {
	return new Promise(resolve => {
		let x = new L.GPX(filePath, {
			async: true,
			marker_options: {
				startIconUrl: '',
		  		endIconUrl: '',
		    	shadowUrl: ''
			}
		}).on('loaded', function(e) {
			d = e.target.get_distance_imp();
			g = e.target.get_elevation_gain();
			l = e.target.get_elevation_loss();
			resolve([d, g, l]);
		});
	});
}

function getElevationGain(filePath){
	return new Promise(resolve => {
		let x = new L.GPX(filePath, {
			async: true,
			marker_options: {
				startIconUrl: '',
		  		endIconUrl: '',
		    	shadowUrl: ''
			}
		}).on('loaded', function(e) {
			console.log(filePath + ": " + e.target.get_elevation_gain());
		  	resolve(e.target.get_elevation_gain());
		});
	});
}

function getElevationLoss(filePath){
	return new Promise(resolve => {
		let x = new L.GPX(filePath, {
			async: true,
			marker_options: {
				startIconUrl: '',
		  		endIconUrl: '',
		    	shadowUrl: ''
			}
		}).on('loaded', function(e) {
		  	resolve(e.target.get_elevation_loss());
		});
	});
}




