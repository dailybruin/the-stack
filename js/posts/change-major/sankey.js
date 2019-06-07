
var units = "Widgets";

var color_map = {
    "Aerospace Engineering": "#E26C5D",
    "African American Studies": "#B5BAF2",
    "American Literature & Culture": "#B5BAF2",
    "Anthropology": "#FFE589",
    "Applied Linguistics": "#B5BAF2",
    "Applied Mathematics": "#77b1d2",
    "Architectural Studies": "#dbd9d4",
    "Art": "#dbd9d4",
    "Art History": "#B5BAF2",
    "Asian American Studies": "#B5BAF2",
    "Asian Humanities": "#B5BAF2",
    "Asian Studies": "#B5BAF2",
    "Astrophysics": "#77b1d2",
    "Atmospheric And Oceanic Sciences": "#77b1d2",
    "Biochemistry": "#77b1d2",
    "Bioengineering": "#E26C5D",
    "Biology": "#A2F2A3",
    "Business Economics": "#FFE589",
    "Chemical Engineering": "#E26C5D",
    "Chemistry": "#77b1d2",
    "Chemistry - Material Science": "#77b1d2",
    "Chicana & Chicano Studies": "#B5BAF2",
    "Chinese": "#B5BAF2",
    "Civil Engineering": "#E26C5D",
    "Classical Civilization": "#B5BAF2",
    "Cognitive Science": "#A2F2A3",
    "Communication Studies": "#FFE589",
    "Comparative Literature": "#B5BAF2",
    "Computer Science": "#E26C5D",
    "Computer Science & Engineering": "#E26C5D",
    "Dance": "#dbd9d4",
    "Design Media Arts": "#dbd9d4",
    "Ecology, Behavior & Evolution": "#A2F2A3",
    "Economics": "#FFE589",
    "Electrical Engineering": "#E26C5D",
    "English": "#B5BAF2",
    "Environmental Science": "#77b1d2",
    "Ethnomusicology": "#dbd9d4",
    "Film & Television": "#dbd9d4",
    "Financial Actuarial Mathematics": "#77b1d2",
    "French": "#B5BAF2",
    "Gender Studies": "#FFE589",
    "Geography": "#FFE589",
    "Geography/Environmental Studies": "#FFE589",
    "Geology": "#77b1d2",
    "Global Studies": "#FFE589",
    "History": "#FFE589",
    "Human Biology And Society": "#A2F2A3",
    "International Development Studies": "#FFE589",
    "Japanese": "#B5BAF2",
    "Jewish Studies": "#B5BAF2",
    "Korean": "#B5BAF2",
    "Latin-American Studies": "#B5BAF2",
    "Linguistics": "#B5BAF2",
    "Linguistics & Anthropology": "#B5BAF2",
    "Linguistics & Asian Lang. & Cultures": "#B5BAF2",
    "Linguistics & Computer Science": "#B5BAF2",
    "Linguistics & Psychology": "#B5BAF2",
    "Marine Biology": "#A2F2A3",
    "Materials Engineering": "#E26C5D",
    "Mathematics": "#77b1d2",
    "Mathematics - Applied Science": "#77b1d2",
    "Mathematics For Teaching": "#77b1d2",
    "Mathematics Of Computation": "#77b1d2",
    "Mathematics/Economics": "#77b1d2",
    "Mechanical Engineering": "#E26C5D",
    "MIMG": "#A2F2A3",
    "MCDB": "#A2F2A3",
    "Music": "#dbd9d4",
    "Musicology": "#dbd9d4",
    "Neuroscience": "#A2F2A3",
    "Nursing - Four Year Program": "#dbd9d4",
    "Philosophy": "#B5BAF2",
    "Physics": "#77b1d2",
    "Physiological Science": "#A2F2A3",
    "Political Science": "#FFE589",
    "Psychobiology": "#A2F2A3",
    "Psychology": "#FFE589",
    "Sociology": "#FFE589",
    "Spanish": "#B5BAF2",
    "Spanish And Community And Culture": "#B5BAF2",
    "Statistics": "#77b1d2",
    "Study Of Religion": "#B5BAF2",
    "Theater": "#dbd9d4",
    "Undeclared": "#dbd9d4",
    "World Arts & Culture": "#dbd9d4"
  }

function mcolor(name) {
    if (name in color_map) return (color_map[name])
    else {
        return (color_map[name.substring(0, name.length - 1)]);
    }
}
//


var margin = { top: 50, right: 30, bottom: 10, left: 30 },
    width = document.getElementsByClassName('post-content')[0].clientWidth - 100,
    height = (3.2/7) * width - margin.top - margin.bottom,
    fontsize = 12,
    widthExtentLeft = 300,
    widthExtentRight =  width - 300,
    box_width = 20;
    if(height < 300) {
        width = width + 300;
        widthExtentLeft = 190;
        widthExtentRight = 340;
        height = width - 100;
        fontsize = 8;
        box_width = 10;
    }
//

function generateVis(dataset, switchin) {

    d3.select('#chart').select('*').remove();

    // append the svg canvas to the page
    var svg = d3.select("#chart")
        .style("overflow-x", "scroll")
        .append("svg")
        .attr("width", width + margin.left + margin.right + "px")
        .attr("height", height + margin.top + margin.bottom + "px")
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")")
        .attr("id", "sankeyg");


    // establish sankey object and calculate node 
    const sankey = d3.sankey()
        .nodeWidth(0.01 * width) // 15
        .nodePadding(0.02 * height) // 12
        .nodeAlign(d3.sankeyCenter)
        .extent([[widthExtentLeft, 0.008 * height], [widthExtentRight, height]]) // 250, 5 width - 300, height - 5
    //.iterations(10);

    const { nodes, links } = sankey({
        nodes: dataset.nodes.map(d => Object.assign({}, d)),
        links: dataset.links.map(d => Object.assign({}, d))
    });



    //

    // add in rectangles for sankey nodes
    var node_rect = svg.append("g")
        .attr("stroke", "#000")
        .selectAll("rect")
        .data(nodes)
        .join("rect")
        .attr("x", d => d.x0)
        .attr("y", d => d.y0)
        .attr("height", d => d.y1 - d.y0)
        .attr("width", d => d.x1 - d.x0)
        .attr('fill', d => mcolor(d.name))
        .attr("fill-opacity", 0.9)
        .attr('class', d => "node-" + d.index);

    // add in links

    const defs = svg.append('defs');

    const link = svg.append("g")
        .attr("fill", "none")
        .attr("stroke-opacity", 0.5)
        .selectAll("g")
        .data(links)
        .join("g")
        .style("mix-blend-mode", "multiply");



    var link_index = 0;
    link.append("path")
        .attr("d", d3.sankeyLinkHorizontal())
        .attr("stroke-width", d => Math.max(1, d.width))
        .attr("stroke-opacity", 0.5)
        .on('mouseover', function () {
            d3.selectAll("path").style('stroke-opacity', 0.1)
            d3.select(this).style('stroke-opacity', 0.7);
        })
        .on('mouseout', function () {
            d3.selectAll("path").style('stroke-opacity', 0.5);
        })
        .attr("stroke", d => {
            if (switchin) return (mcolor(d.target.name))
            else return (mcolor(d.source.name))
        })
        .attr("class", function (d) {
            link_index = link_index + 1;
            return ("node-" + link_index)
        })

    node_rect.on("mouseover", function () {
        rect_class = d3.select(this).attr("class");
        d3.selectAll("path").style('stroke-opacity', 0.1)
        d3.selectAll("." + rect_class).style('stroke-opacity', 0.7);
    })
        .on('mouseout', function (d) {
            d3.selectAll("path").style('stroke-opacity', 0.5);
        });


    // add in major text
    svg.append("g")
        .selectAll("text")
        .data(nodes)
        .join("text")
        .attr("x", d => {if(width < 600) {
                            if(d.x1 < width / 2) return(d.x0 - 3 * (d.name.length) - 50)
                            else return(d.x1 + 8)}
                        else if(d.x1 < width / 2) return( d.x0 - 5 * (d.name.length) - 70 ) 
                        else return(d.x1 + 8)})
        .attr("y", d => (d.y1 + d.y0) / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", d => d.x1 < width ? "start" : "end")
        .text(d => d.name + " (" + d.value + ")")
        .style("text-align", "justify")
        .style("font", fontsize + "px sans-serif");
    //



    // add text legend 

    svg.append("g")
        .selectAll(".text-legend")
        .data(["Admissions Major", "Graduation Major"])
        .join("text")
        .attr("x", (d, i) => {
            if (i == 0) {
                return (widthExtentLeft - 50)
            }
            else return (widthExtentRight - 50)
        })
        .attr("y", -7)
        .text(d => d)
        .style("font", d => "12px sans-serif")
        .style("font-weight", "bold");

}



d3.json('/datasets/change-major/major_datav2.json').then(function (d) {

    var dataset = d[0];

    majors = []
    majors.push("Select an Admissions Major")
    for (var key in d[0]) {
        majors.push(key)
    }

    majors2 = majors.slice(0, 87);
    var majors3 = majors.slice(87);
    majors3.unshift("Select a Graduation Major");

    var menu = d3.select(".dropdown").append("select").style("width", "250px")
        .attr("id", "dropdown1");
    menu
        .style("margin-left", function(){if(width > 600) return("200px")
                                        else return("80px")})
        .selectAll("option")
        .data(majors2)
        .enter()
        .append("option")
        .attr("value", function (d) {
            return d;
        })
        .text(function (d) {
            return d;
        });

    var menu2 = d3.select(".dropdown")
        .append("select").style("width", "250px")
        .attr("id", "dropdown2");

    menu2
        //.style("float", "right")
        .style("margin-left", function() {if(width > 600) return("380px")
                                            else return("80px")})
        .selectAll("option")
        .data(majors3)
        .enter()
        .append("option")
        .attr("value", function (d) {
            return d;
        })
        .text(function (d) {
            return d;
        });

    menu.on("change", function () {
        var selected_major = d3.select("#dropdown1")
            .property("value");
        if (selected_major == "Select an Admissions Major") return;

        document.getElementById('dropdown2').value = 'Select a Graduation Major';

        var current = document.getElementById("sankeyg");
        while (current.firstChild) current.removeChild(current.firstChild);
        var switchout = true;
        generateVis(dataset[selected_major], switchout);
    })

    menu2.on("change", function () {
        var selected_major2 = d3.select("#dropdown2")
            .property("value");
        if (selected_major2 == "Select a Graduation Major") return;

        document.getElementById('dropdown1').value = 'Select an Admissions Major';

        var current = document.getElementById("sankeyg");
        while (current.firstChild) current.removeChild(current.firstChild);
        var switchout = false;
        generateVis(dataset[selected_major2], switchout);
    })

    generateVis(dataset["Chemistry"], true);
    // window.addEventListener('resize', () => {
    //     var admajor = d3.select("#dropdown1").property("value");
    //     var grmajor = d3.select("#dropdown2").property("value");
    //     if (admajor === "Select an Admissions Major"){
    //         generateVis(dataset[grmajor], false)
    //     }
    //     else
    //     {
    //         generateVis(dataset[admajor], true)
    //     }
        
        
    // });

});






// legend bottom

var label_rects = d3.select("#label")
    .append("svg")
    .attr("width", width)
    .attr("height", 80);



label_rects.selectAll(".label-rect")
    .data(["Life Sciences", "Physical Sciences", "Social Sciences", "Engineering", "Humanities", "Other"])
    .enter()
    .append("rect")
    .classed("label-rect", true)
    .attr("width", box_width)
    .attr("height", box_width)
    .attr("x", (d, i) => {if(box_width > 15) return((i) * (width / 12 + 10) + (width / 4) + 30)
                            else return(i * (width / 12 + 7)) + (width/12)})
    .attr("y", 10)
    .attr("fill", function (d, i) {
        if (d === "Life Sciences") return ("#A2F2A3")
        else if (d === "Physical Sciences") return ("#77b1d2")
        else if (d === "Social Sciences") return ("#FFE589")
        else if (d === "Humanities") return ("#B5BAF2")
        else if (d === "Engineering") return ("#E26C5D")
        else return ("#dbd9d4")
    });

label_rects.selectAll(".label-text")
    .data(["Life Sciences", "Physical Sciences", "Social Sciences", "Engineering", "Humanities", "Other"])
    .enter()
    .append("text")
    .attr("class", "label-text")
    .attr("x", (d, i) => {if(box_width > 15) return( i * (width / 12 + 10) + (width / 4) + (box_width + 5) + 30)
        else return((i * (width / 12 + 10)) + (width/12) + (box_width - 25))})
                            
    .attr("y", function(){if(box_width < 20) return(25)
                            else return(20)})
    .attr("dy", "0.35em")
    .text(d => d)
    .style("font", function() {if(box_width > 15) return("10px sans-serif")
                    else return("6px sans-serif")});

// change bar graph's size width="900" height="600"
d3.select('iframe')
    .attr("width", function(){if(width > 600) return('900')
                                else return('400')})
    .attr("src", function(){if(width > 600) return("//plot.ly/~jeanettelin8/9.embed?showlink=false")
                            else return("//plot.ly/~strikeitrich/3.embed?showlink=false")})
    .attr('height', '600');
