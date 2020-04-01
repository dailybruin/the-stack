let buckets = 8,
    colorScheme = 'rbow2'
    lower = [
        '1', '2', '19', '31', '32', '33', '35L', 'M51A',
    '88S', '97', '99'
    ]
    upper = ['101', '111', '112', '114', '117', '118', 'CM121',
    'CM122', 'CM124', '130', '131', '132', '133', '136',
    'C137A', 'C137B', '143', '144', '145', 'M146', 'M151B',
    '151C', 'M152A', '152B', '161', '168', '170A', 'M171L',
    '174A', '174B', 'C174C', '180', '181', '183', 'M184',
    'M185', 'CM186', 'M186A', 'CM186B', 'CM186C', 'CM187',
    '188', '188SA', '188SB', '188SC', '194', '199']

    rows = [['1', '2', '19', '101', '111', '112', '114', '117', '118', 'CM121',
    'CM122', 'CM124', '130', '131', '132'],
    ['31', '32', '33','133', '136', 'C137A', 'C137B', '143', '144', '145', 'M146', 'M151B',
    '151C', 'M152A', '152B' ],
    ['35L', 'M51A','88S', '161', '168', '170A', 'M171L',
    '174A', '174B', 'C174C', '180', '181', '183', 'M184', 'M185'],
    ['97', '99', "null",'CM186', 'M186A', 'CM186B', 'CM186C', 'CM187',
    '188', '188SA', '188SB', '188SC', '194', '199', "null"]
    ],

    formattedcourse = ['1', '2', '19', '31', '32', '33', '35L', 'M51A',
    '88S', '97', '99', '101', '111', '112', '114', '117', '118', 'CM121',
    'CM122', 'CM124', '130', '131', '132', '133', '136',
    'C137A', 'C137B', '143', '144', '145', 'M146', 'M151B',
    '151C', 'M152A', '152B', '161', '168', '170A', 'M171L',
    '174A', '174B', 'C174C', '180', '181', '183', 'M184',
    'M185', 'CM186', 'M186A', 'CM186B', 'CM186C', 'CM187',
    '188', '188SA', '188SB', '188SC', '194', '199'],

    section_course = ['1', '31', '32', '33', '97', 'M51A', '101', '111', '112', '114',
    '117', '118', '130', '131', '132', '133', '136', '143', '144',
    '145', '152B', '161', '168', '170A', '174A', '174B', '180', '181',
    '183', '188', 'C137A', 'C174C', 'CM121', 'CM122', 'CM124', 'CM186',
    'CM186B', 'CM187', 'M146', 'M151B', 'M185'],
    years = ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
    sectionMap = {
        "Primary": "Lecture",
        "Secondary": "Section"
    };

d3.select('#vis').classed(colorScheme, true)

d3.json("/datasets/cs-enrollment/tile.json").then(function(json){
    let data = json;
    createTiles();
    reColorTiles(data, '2009', 'Primary');
    drawSlider(data, "Primary");

    d3.select("#section").classed("Primary", true)
    // Listener for Lecture Size and Section Size 
    $('input[name="type"]').change(function() {
		
		let type = $(this).val();
            year = d3.select("#year").attr("class");
            cur_section = d3.select("#section").attr("class");
		
		d3.selectAll('fieldset#sectype label').classed('sel', false);
		d3.select('label[for="' + type + '"]').classed('sel', true);
        
        d3.select("#section").classed(cur_section, false);
        d3.select("#section").classed(type, true);
        reColorTiles(data, year, type);
        drawDistChart(data, year, type);
        d3.select('#dist .title').html("Average " + sectionMap[type]+ " Size for CS Classes in " + year);
    });
    
    	// tiles mouseover events
	$('#tiles td').hover(function() {
	
		$(this).addClass('sel');

        let course_id = $(this).attr('id'),
            course = course_id.slice(2),
            lower_upper = (lower.includes(course) ? "lower" : "upper")
            section = d3.select("#section").attr("class"),
            year = d3.select("#year").attr("class");
            // if ()
            if (section === "Secondary"){
                if (!(section_course.includes(course)))
                    size = "No Section";
                else 
                    size = (data[year][section][lower_upper][course].avg_size > 0 ? "Size: "+ data[year][section][lower_upper][course].avg_size : "Not Offered");
            }
            else {
                let nullarr = ["r3c2null", "r3c14null"];
                if (!(nullarr.includes(course)))
                    size = (data[year][section][lower_upper][course].avg_size > 0 ? "Size: "+ data[year][section][lower_upper][course].avg_size : "Not Offered");
            }
        

        selectDistChartBar(course_id);

        //Create the tooltip label
        // d3.select("#" + course_id + " .tooltip")
        //         .append("text")
        //         .attr("id", "tooltip")
        //         .text(size);
        d3.select("#infolegends")
                .append("text")
                .attr("id", "infolegend")
                .text("Course: CS" + course + ", " + size);
                // .attr('width', w)
                // .attr('height', h);
        
        // svg.append("text")
        //     // .attr("id", "tooltip")
        //     .attr("x", xPosition)
        //     .attr("y", yPosition)
        //     .attr("text-anchor", "middle")
        //     .attr("font-family", "sans-serif")
        //     .attr("font-size", "11px")
        //     .attr("font-weight", "bold")
        //     .attr("fill", "black")
        //     .text(course);
        
	
	}, function() {
		
        $(this).removeClass('sel');
        d3.select("#tooltip").remove();
        d3.select("#infolegend").remove();
        drawDistChart(data, year, section);
		
	});
});

function createTiles() {
    let html = '<table id="lowup">'
    html += '<tr><th><div>&nbsp;</div></th>'
    html += '<th id="lower">Lower Division</th>';
    html += '<th id="upper">Upper Division</th>';
    html += '<table id="tiles" class="front">';
    // html += '<tr><th><div>&nbsp;</div></th>';

    // for (let h = 0; h < rows[0].length; h++) {
    //     if (h <3) 
    //         html += '<th class="h' + h + '">' + 'L.Div' + '</th>';
    //     else
    //     html += '<th class="h' + h + '">' + 'L.Div' + '</th>';
    // }

    html += '</tr>';

    for (let r = 0; r < rows.length; r++) {
        html += '<tr class="r' + r + '">';
        // html += '<th><div>&nbsp;</div></th>';
        html += '<th>&nbsp</th>';
        for (let c = 0; c < rows[0].length; c++) {
            if (rows[r][c] == "null"){
                html += '<td id=csr' + r + 'c' + c + rows[r][c] + ' class="c' + c +" " +rows[r][c]+ '"><div class="tooltip"></div><div class="tile"><div class="face front"><div class=text></div></div><div class="face back"><div class=text></div></div></div></td>';
            }
            else
                html += '<td id=cs' + rows[r][c] + ' class="c' + c +" " +rows[r][c]+ '"><div class="tile"><div class="tooltip"></div><div class="face front"><div class=text></div></div><div class="face back"><div class=text></div></div></div></td>';
        }
        html += '</tr>';
    }

    html += '</table>';
    html += '<div id="infolegends"></div>'
    d3.select('#vis').html(html);
    }

function getCalcs(data, section) {
	
	let min = 1,
		max = -1;
	
    // calculate min + max
    for (let i = 0; i < years.length; i++){
        for (let div in data[years[i]][section]) {
            if (data[years[i]][section].hasOwnProperty(div)) {
                for (let course in data[years[i]][section][div]) {
                    if (data[years[i]][section][div].hasOwnProperty(course)) {
                        let tot = data[years[i]][section][div][course].avg_size;

                        if (tot > max) {
                            max = tot;
                        }
                        
                        if (tot < min) {
                            min = tot;
                        }
                    }
                }
            }
        }
    }
	
	return {'min': min, 'max': max};
};

function getDistCalcs(data, year, section) {
	
	let min = 1,
		max = -1;
	
    // calculate min + max
    for (let div in data[year][section]) {
        if (data[year][section].hasOwnProperty(div)) {
            for (let course in data[year][section][div]) {
                if (data[year][section][div].hasOwnProperty(course)) {
                    let tot = data[year][section][div][course].avg_size;

                    if (tot > max) {
                        max = tot;
                    }
                    
                    if (tot < min) {
                        min = tot;
                    }
                }
            }
        }
    }
	
	return {'min': min, 'max': max};
};

function flipTiles() {

	let oldSide = d3.select('#tiles').attr('class'),
		newSide = '';
	
	if (oldSide == 'front') {
		newSide = 'back';
	} else {
		newSide = 'front';
	}
	
	let flipper = function(course,r ,c ,side) {
		return function() {
           
			let  sel = '#cs' + course + ' .tile',
				rotateY = 'rotateY(180deg)';
			
			if (side === 'back') {
				rotateY = 'rotateY(0deg)';	
			}
			// if (browser.browser === 'Safari' || browser.browser === 'Chrome') {
            d3.select(sel).style('-webkit-transform', rotateY);
			// } else {
			// 	d3.select(sel).select('.' + oldSide).classed('hidden', true);
			// 	d3.select(sel).select('.' + newSide).classed('hidden', false);
			// }
				
		};
    };
    
    for (let r = 0; r < rows.length; r++) {
        for (let c = 0; c < rows[0].length; c++) {
            let side = d3.select("#tiles").attr("class");
            let course = rows[r][c];
            setTimeout(flipper(course, r, c, side), (r * 20) + (c * 20) + (Math.random() * 100));
        }
    }
	d3.select('#tiles').attr('class', newSide);
}

function reColorTiles(data, year, section) {

    let calcs = getCalcs(data, section),
        range = [];
    
    for (let i = 1; i <= buckets; i++) {
        range.push(i);
    }
    
    let bucket = d3.scaleQuantize()
                    .domain([0, calcs.max > 0 ? calcs.max : 1])
                    .range(range),
        side = d3.select('#tiles').attr('class');
    
    
    if (side === 'front') {
        side = 'back';
    } else {
        side = 'front';
    }
    
    for (let r = 0; r < rows.length; r++) {
        for (let c = 0; c < rows[0].length; c++) {
            let course = rows[r][c];
            if (course == "null") {
                sel = '#csr' + r + 'c' + c + course + ' .tile .' + side;
            }
            else
                sel = '#cs' + course + ' .tile .' + side;
            
            
            let val = 0;
            if (section =="Secondary" && !(section_course.includes(course))){
                for (let i = 1; i <= buckets; i++) {
                    let cls = 'q' + i + '-' + buckets;
                    d3.select(sel).classed(cls , false);
                }
    
                let cls = 'q' + (val > 0 ? bucket(val) : 0) + '-' + buckets;
                d3.select(sel).classed(cls, true);
                if (course !== "null"){
                    d3.select((sel+ ' .text'))
                        .text("CS " + course)
                        .attr("font-size", "11");
                }
                continue;
            }

            if (course === "null"){
                val = 0;
            }
            else if (c < 3){
                val = data[year][section]['lower'][course].avg_size;
            }
            else {
                val = data[year][section]['upper'][course].avg_size;
            }

            for (let i = 1; i <= buckets; i++) {
                let cls = 'q' + i + '-' + buckets;
                d3.select(sel).classed(cls , false);
            }

            let cls = 'q' + (val > 0 ? bucket(val) : 0) + '-' + buckets;
            d3.select(sel).classed(cls, true);
            if (course !== "null"){
                d3.select((sel+ ' .text'))
                    .text("CS " + course)
                    .attr("font-size", "11");
            }
        }
    }
    flipTiles();
    // if (isOldBrowser() === false) {
    drawDistChart(data, '2009', 'Primary');
    // }
}

function drawDistChart(data, year, section) {
	
	d3.selectAll('#dist svg').remove();
	
    let w = 960,
        h = 260,
        hBar = 200,
        course = lower.concat(upper);
	
    let course_data = [];
    for (let div in data[year][section]) {
        if (data[year][section].hasOwnProperty(div)) { 
            if (div == 'lower'){
                for (let i = 0; i < lower.length; i++){
                    let course = lower[i];
                    if (section === "Secondary"){
                        if (!(section_course.includes(course))){
                            course_data.push(0);
                        }
                        else 
                            course_data.push(data[year][section][div][lower[i]].avg_size);
                    }   
                    else
                        course_data.push(data[year][section][div][lower[i]].avg_size);
                }
            }
            else if (div == 'upper'){
                for (let i = 0; i < upper.length; i++){
                    let course = upper[i];
                    if (section === "Secondary"){
                        if (!(section_course.includes(course))){
                            course_data.push(0);
                        }
                        else 
                            course_data.push(data[year][section][div][upper[i]].avg_size);
                    }
                    else
                        course_data.push(data[year][section][div][upper[i]].avg_size);
                }
            }

            // for (let course in data[year][section][div]) {
            //     if (data[year][section][div].hasOwnProperty(course)) {
            //         course_data.push(data[year][section][div][course].avg_size);
            //     }
            // }
        }
    }
    let xScale = d3.scaleBand()
					.domain(d3.range(course_data.length))
					.rangeRound([30, w])
					.paddingInner(0.05);
	
	let yScale = d3.scaleLinear()
		.domain([0, getDistCalcs(data, year, section).max])
		.range([hBar, 10]);

	
	let chart = d3.select('#dist .svg')
		.append('svg')
		.attr('class', 'chart')
		.attr('width', w)
        .attr('height', h);
		
	let rect = chart.selectAll('rect'),
        textCourse = chart.selectAll('text'),
        textNumber = chart.selectAll('text');
	rect.data(course_data)
		.enter()
			.append('rect')
				.attr('x', function(d, i) { return xScale(i); })
				.attr('y', function(d) { return yScale(d);})
				.attr('height', function(d) { return hBar- yScale(d); })
				.attr('width', xScale.bandwidth())
				.attr('class', function(d, i) { return 'cs' + course[i]});
         
	textCourse.data(course)
		.enter()
            .append('text')
            .text(function(d){return d;})
			// .attr('class', function(d, i) { return (i % 3) ? 'hidden hr' + i : 'visible hr' + i })
			.attr("x", function(d, i) {
                return xScale(i) + xScale.bandwidth()/2;
            })
            .attr("y", hBar + 5)
            .attr('class', function(d, i) { return 'cs' + d + " to-hide"})
            .attr("text-anchor", 'end')
            .attr("transform", function(d,i){
                return "rotate(270," + (xScale(i) + xScale.bandwidth()/2) +"," + (hBar + 5) + ")"
            });
    
    // textNumber.data(course_data)
    //     .enter()
    //         .append('text')
    //         .text(function(d){return d;})
    //         .attr("y", function(d){
    //             return hBar - yScale(d);
    //         })
    //         .attr("x", function(d, i) {
    //             return xScale(i) + xScale.bandwidth()/2;
    //         })
    //         .attr('class', function(d, i) { return 'cs' + course[i]})
    //         .attr("text-anchor", 'middle');
    let yAxis = d3.axisLeft()
                .scale(yScale)
                .ticks(5);

    chart.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + (25) + ",0)")
            .call(yAxis);

}

function drawSlider(data, section){
    let years = d3.range(14, 23).map(function (d) { return new Date(1995 + d, 10, 3); })

    let slider = d3.sliderHorizontal()
        .min(d3.min(years))
        .max(d3.max(years))
        .step(1000 * 60 * 60 * 24 * 365)
        .width(400)
        .tickFormat(d3.timeFormat('%Y'))
        .tickValues(years)
        .on('onchange', function(d){
            let new_year = d.getFullYear().toString(),
                cur_year = d3.select("#year").attr("class"),
                cur_section = d3.select("#section").attr("class");
            reColorTiles(data, new_year, cur_section);
            drawDistChart(data, new_year, cur_section);
            d3.select("#year").classed(cur_year, false);
            d3.select("#year").classed(new_year,true);
            d3.select('#dist .title').html("Average " + sectionMap[cur_section]+ " Size for CS Classes in " + new_year);
        });

    let svg = d3.select("div#slider").append("svg")
        .attr("width", 500)
        .attr("height", 100)
        .append("g")
        .attr("transform", "translate(30,30)");

    svg.call(slider);
    
    let year = (slider.value().getFullYear()).toString();
    // console.log((slider.value().getFullYear()).toString());
    reColorTiles(data, year, section);
    d3.select("#year").classed(year,true);
    // d3.select("p#value3").text(d3.timeFormat('%Y')(slider3.value()));
    // d3.select("a#setValue3").on("click", () => { slider3.value(new Date(1997, 11, 17)); d3.event.preventDefault(); });
}

function selectDistChartBar(course) {

	d3.selectAll('#dist .chart rect').classed('sel', false);
	d3.selectAll('#dist .chart rect.' + course).classed('sel', true);
	
	d3.selectAll('#dist .chart text.to-hide').classed('hidden', true);
	d3.selectAll('#dist .chart text.' + course).classed('hidden', false);

};
