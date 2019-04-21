
        var units = "Widgets";

        // the data, for now
        var dataset = {
                "nodes":[
                {"name":"Biology"},
                {"name":"Business Economics"},
                {"name": "Biology "},
                {"name":"Psychobiology"},
                {"name":"Chemistry"},
                {"name":"Applied Mathematics"},
                {"name":"Psychology"}
                ],
                "links":[
                {"source":0,"target":1,"value":32},
                {"source":0,"target":2,"value":253},
                {"source":0,"target":3,"value":37},
                {"source":0,"target":4,"value":29},
                {"source":0,"target":5,"value":11},
                {"source":0,"target":6,"value":117}
                
            ]}

        var color_map = JSON.parse("{\"Aerospace Engineering\":\"#ff8484\",\"African American Studies\":\"#f7f37e\",\"American Literature & Culture\":\"#f7f37e\",\"Anthropology\":\"#afd3ff\",\"Applied Linguistics\":\"#f7f37e\",\"Applied Mathematics\":\"#ffd782\",\"Architectural Studies\":\"#dbd9d4\",\"Art\":\"#dbd9d4\",\"Art History\":\"#f7f37e\",\"Asian American Studies\":\"#f7f37e\",\"Asian Humanities\":\"#f7f37e\",\"Asian Studies\":\"#f7f37e\",\"Astrophysics\":\"#ffd782\",\"Atmospheric And Oceanic Sciences\":\"#ffd782\",\"Biochemistry\":\"#c1f4ab\",\"Bioengineering\":\"#ff8484\",\"Biology\":\"#c1f4ab\",\"Business Economics\":\"#afd3ff\",\"Chemical Engineering\":\"#ff8484\",\"Chemistry\":\"#ffd782\",\"Chemistry - Material Science\":\"#ffd782\",\"Chicana & Chicano Studies\":\"#f7f37e\",\"Chinese\":\"#f7f37e\",\"Civil Engineering\":\"#ff8484\",\"Classical Civilization\":\"#f7f37e\",\"Cognitive Science\":\"#c1f4ab\",\"Communication Studies\":\"#afd3ff\",\"Comparative Literature\":\"#f7f37e\",\"Computer Science\":\"#ff8484\",\"Computer Science & Engineering\":\"#ff8484\",\"Dance\":\"#dbd9d4\",\"Design Media Arts\":\"#dbd9d4\",\"Ecology, Behavior & Evolution\":\"#c1f4ab\",\"Economics\":\"#afd3ff\",\"Electrical Engineering\":\"#ff8484\",\"English\":\"#f7f37e\",\"Environmental Science\":\"#ffd782\",\"Ethnomusicology\":\"#dbd9d4\",\"Film & Television\":\"#dbd9d4\",\"Financial Actuarial Mathematics\":\"#ffd782\",\"French\":\"#f7f37e\",\"Gender Studies\":\"#afd3ff\",\"Geography\":\"#afd3ff\",\"Geography/Environmental Studies\":\"#afd3ff\",\"Geology\":\"#ffd782\",\"Global Studies\":\"#afd3ff\",\"History\":\"#afd3ff\",\"Human Biology And Society\":\"#c1f4ab\",\"International Development Studies\":\"#afd3ff\",\"Japanese\":\"#f7f37e\",\"Jewish Studies\":\"#f7f37e\",\"Korean\":\"#f7f37e\",\"Latin-American Studies\":\"#f7f37e\",\"Linguistics\":\"#f7f37e\",\"Linguistics & Anthropology\":\"#f7f37e\",\"Linguistics & Asian Languages & Cultures\":\"#f7f37e\",\"Linguistics & Computer Science\":\"#f7f37e\",\"Linguistics & Psychology\":\"#f7f37e\",\"Marine Biology\":\"#c1f4ab\",\"Materials Engineering\":\"#ff8484\",\"Mathematics\":\"#ffd782\",\"Mathematics - Applied Science\":\"#ffd782\",\"Mathematics For Teaching\":\"#ffd782\",\"Mathematics Of Computation\":\"#ffd782\",\"Mathematics/Economics\":\"#ffd782\",\"Mechanical Engineering\":\"#ff8484\",\"Microbiology - Immunology - Molecular Genetics\":\"#c1f4ab\",\"Molecular, Cell, & Developmental Biology\":\"#c1f4ab\",\"Music\":\"#dbd9d4\",\"Musicology\":\"#dbd9d4\",\"Neuroscience\":\"#c1f4ab\",\"Nursing - Four Year Program\":\"#dbd9d4\",\"Philosophy\":\"#f7f37e\",\"Physics\":\"#ffd782\",\"Physiological Science\":\"#c1f4ab\",\"Political Science\":\"#afd3ff\",\"Psychobiology\":\"#c1f4ab\",\"Psychology\":\"#afd3ff\",\"Sociology\":\"#afd3ff\",\"Spanish\":\"#f7f37e\",\"Spanish And Community And Culture\":\"#f7f37e\",\"Statistics\":\"#ffd782\",\"Study Of Religion\":\"#f7f37e\",\"Theater\":\"#dbd9d4\",\"Undeclared\":\"#dbd9d4\",\"World Arts & Culture\":\"#dbd9d4\"}")
        
        function mcolor(name){
                if(name in color_map) return(color_map[name])
                else {
                    return(color_map[name.substring(0, name.length-1)]);
                }
            }


        //



        var margin = {top: 10, right: 10, bottom: 10, left: 10},
            width =  1200 - margin.left - margin.right,
            height = 650 - margin.top - margin.bottom;
        //

        // append the svg canvas to the page
        var svg = d3.select("#chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")")
            .attr("id", "sankeyg");
        //

    function generateVis(dataset){
        
        function dragmove (d){
            console.log(d)
        }

        // establish sankey object and calculate node 
        const sankey = d3.sankey()
            .nodeWidth(15)
            .nodePadding(12)
            .nodeAlign(d3.sankeyCenter)
            .extent([[20, 5], [width - 300, height - 5]])
            //.iterations(10);
        
        const {nodes, links} = sankey({
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
            .on('mouseover', function() {
                d3.selectAll("path").style('stroke-opacity', 0.1)
                d3.select(this).style('stroke-opacity', 0.7);
            })
            .on('mouseout', function() {
                d3.selectAll("path").style('stroke-opacity', 0.5);
            })
            .attr("stroke", d => mcolor(d.target.name))
            .attr("class", function(d) {
                link_index = link_index + 1;
                return("node-" + link_index)})

        node_rect.on("mouseover", function(){
            rect_class = d3.select(this).attr("class");
            d3.selectAll("path").style('stroke-opacity', 0.1)
            d3.selectAll("." + rect_class).style('stroke-opacity', 0.7);
        })
            .on('mouseout', function(d){
            d3.selectAll("path").style('stroke-opacity', 0.5);
                });

        
        // add in text
        svg.append("g")
            .selectAll("text")
            .data(nodes)
            .join("text")
            .attr("x", d => d.x1 < width / 2 ? d.x1 + 6 : d.x1 + 6 )
            .attr("y", d => (d.y1 + d.y0) / 2)
            .attr("dy", "0.35em")
            .attr("text-anchor", d => d.x1 < width ? "start" : "end")
            .text(d => d.name + " (" + d.value + ")")
            .style("font", d => "12px sans-serif")

        //
        }

    
    
    d3.json('/datasets/change-major/major_datav2.json').then(function(d){
        var dataset = d;

        majors = []
        for(var key in d[0]){
            majors.push(key)
        }
        generateVis(d[0]["Aerospace Engineering"]);

        var menu = d3.select("#dropdown");
        menu.append("select")
        .selectAll("option")
        .data(majors)
        .enter()
        .append("option")
        .attr("value", function(d){
            return d;
        })
        .text(function(d){
            return d;
        });

        menu.on("change", function(){
            var selected_major = d3.select(this)
                .select("select")
                .property("value");

            var current = document.getElementById("sankeyg");
            while(current.firstChild) current.removeChild(current.firstChild);
            generateVis(d[0][selected_major]);
        })

        
    });
       
    var label_rects = d3.select("#label")
        .append("svg")
        .attr("width", width)
        .attr("height", 200);

        label_rects.selectAll(".label-rect")
        .data(["Life Sciences","Physical Sciences", "Social Sciences","Engineering", "Humanities", "Other"])
        .enter()
        .append("rect")
        .classed("label-rect", true)
        .attr("width", 20)
        .attr("height", 20)
        .attr("x", (d,i) =>  i * 150 + 50)
        .attr("y", 10)
        .attr("fill", function(d,i){
            if(d === "Life Sciences") return("#c1f4ab")
            else if(d === "Physical Sciences") return("#ffd782")
            else if (d === "Social Sciences") return("#afd3ff")
            else if (d === "Humanities") return("#f7f37e")
            else if (d === "Engineering") return("#ff8484")
            else return("#dbd9d4")
        });

        label_rects.selectAll(".label-text")
        .data(["Life Sciences","Physical Sciences", "Social Sciences","Engineering", "Humanities", "Other"])
        .enter()
        .append("text")
        .attr("class", "label-text")
        .attr("x", (d,i) => i * 150 + 80)
        .attr("y", 20)
        .attr("dy", "0.35em")
        .text(d => d)
        .style("font", d => "12px sans-serif");

        