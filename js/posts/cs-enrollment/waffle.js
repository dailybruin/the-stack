        var cs_data = [
            {
                "year": 2018,
                "all": 29969,
                "cs": 13068,
                "admit": 1213,
                "enroll": 370
            },
            {
                "year": 2017,
                "all": 27613,
                "cs": 11281,
                "admit": 1122,
                "enroll": 265
            },
            {
                "year": 2016,
                "all": 26523,
                "cs": 10036,
                "admit": 1017,
                "enroll": 245
            },
            {
                "year": 2015,
                "all": 24299,
                "cs": 8392,
                "admit": 1023,
                "enroll": 230
            },
            {
                "year": 2014,
                "all": 22543,
                "cs": 6980,
                "admit": 686,
                "enroll": 141
            },
            {
                "year": 2013,
                "all": 19191,
                "cs": 5082,
                "admit": 593,
                "enroll": 110
            },
            {
                "year": 2012,
                "all": 16297,
                "cs": 4020,
                "admit": 537,
                "enroll": 127
            },
            {
                "year": 2011,
                "all": 13334,
                "cs": 2799,
                "admit": 619,
                "enroll": 166
            },
            {
                "year": 2010,
                "all": 11474,
                "cs": 2164,
                "admit": 559,
                "enroll": 165
            },
            {
                "year": 2009,
                "all": 9736,
                "cs": 2229,
                "admit": 527,
                "enroll": 151
            },
            {
                "year": 2008,
                "all": 9155,
                "cs": 2259,
                "admit": 496,
                "enroll": 135
            },
            {
                "year": 2007,
                "all": 7823,
                "cs": 1890,
                "admit": 511,
                "enroll": 208
            },
            {
                "year": 2006,
                "all": 7425,
                "cs": 1781,
                "admit": 418,
                "enroll": 139
            },
            {
                "year": 2005,
                "all": 6973,
                "cs": 1809,
                "admit": 387,
                "enroll": 124
            },
            {
                "year": 2004,
                "all": 7108,
                "cs": 2182,
                "admit": 479,
                "enroll": 161
            },
            {
                "year": 2003,
                "all": 7235,
                "cs": 2979,
                "admit": 537,
                "enroll": 186
            },
            {
                "year": 2002,
                "all": 7996,
                "cs": 3977,
                "admit": 616,
                "enroll": 218
            },
            {
                "year": 2001,
                "all": 8713,
                "cs": 5267,
                "admit": 589,
                "enroll": 180
            }

        ]

        // READ DATA ====================

        var dataset = [];

        // translate cs_data to array of objects to represent each square
        var convertData = function (csd) {
            var data = [];
            var squareValue = 50;
            var i = Math.round(csd.all / squareValue);
            while (i > 0) {
                if (i > Math.round(csd.cs / squareValue)) {
                    data.push({
                        'category': 'other',
                        'index': 0
                    });
                }
                else if (i > Math.round(csd.admit / squareValue)) {
                    data.push({
                        'category': 'cs-app',
                        'index': 1
                    });
                }
                else if (i > Math.round(csd.enroll / squareValue)) {
                    data.push({
                        'category': 'cs-admit',
                        'index': 2
                    });
                }
                else {
                    data.push({
                        'category': 'cs-enroll',
                        'index': 3
                    });
                }

                i = i - 1;
            }
            data = data.reverse();
            dataset.push(data);
        };

        cs_data.forEach(function (cs) {
            convertData(cs);
        });


        var svgWidth = 1200;
        var svgHeight = 650;

        var svg = d3.select(".waffle")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);

        svg.attr("transform", "translate(60,0)")

        var x = d3.scaleLinear()
            .domain([0, 216]) // (10 + 2) * 17 - 10 boxes + 2 padding * 17 bars
            .range([0, svgWidth])

        var y = d3.scaleLinear()
            .domain([0, 56])
            .range([0, svgHeight])

  


        // =============================


        // DRAW WAFFLE RECTANGLES ==============

        colors = ['#6bc4ea', '#e8455a', '#fccb3f', '#1fd343']

        var waffle = function (ref, data, yearCounter = 0, xValue = 0, yValue = 50) { // y Value a little higher from svgHeight
            var squaresPerRow = 10;
            //var squareSize = 4.5;

            ref.append('g')
                .attr('id', 'bar' + yearCounter)
                .attr('class', 'bar')
                .selectAll(".square")
                .data(data)
                .enter()
                .append("rect")
                .attr("class", "square")
                .attr("x", function (d, i) { return x(xValue) + x(1) * (i % squaresPerRow); })
                .attr("y", function (d, i) { return y(yValue) - Math.floor(i / squaresPerRow) * y(0.82); })
                .attr("width", x(0.8))
                .attr("height", y(0.75)) // need to put yScale, but not too important as long as width is greater than height
                .attr("fill", function (d) {
                    if (d.category == 'other') {
                        return colors[0];
                    }
                    else if (d.category == 'cs-app') {
                        return colors[1];
                    }
                    else if (d.category == 'cs-admit') {
                        return colors[2];
                    }
                    else {
                        return colors[3];//return '#de5347';
                    }
                })
                .attr("class", function (d) {
                    if (d.category == 'other') {
                        return 'square' + yearCounter + ' other';
                    }
                    else if (d.category == 'cs-app') {
                        return 'square' + yearCounter + ' cs-app';
                    }
                    else if (d.category == 'cs-admit') {
                        return 'square' + yearCounter + ' cs-admit';
                    }
                    else {
                        return 'square' + yearCounter + ' cs-enrollee';
                    }
                })
                .exit();

        };

        console.log(dataset.length);
        xValue = 2;
        dataset = dataset.reverse();
        dataset.forEach(function (d, i) {
            waffle(svg, d, 2001 + i, xValue);
            xValue = xValue + 11.5;
        });

        // ====================


        // DRAW AXIS  ===============


        var axisScale = d3.scaleBand()
            .domain(d3.range(2001, 2019))
            .range([0, svgWidth - x(7)]);

        var axis = d3.axisBottom()
            .scale(axisScale);

        svg.append('g')
            .attr("transform", "translate(0," + (svgHeight - y(4.5)) + ")")
            .call(axis)
            .style("font-size", 14);

        svg.append('text')
            .attr('x', svgWidth / 2 - x(12))
            .attr('y', svgHeight - y(0.5))
            .style("alignment-baseline", "middle")
            .style("font-size", 14)
            .style("font-family", "Helvetica, Arial, sans-serif")
            .attr('fill', 'black')
            .text('Academic Year of Admissions');

         var yaxisScale = d3.scaleLinear()
                             .domain([30000, 0]) // there are about 30,000 applicants in the latest admissions year
                             .range([0, svgHeight - 90]);

        var yaxis = d3.axisRight()
                    .scale(yaxisScale)
                    .ticks(10);

        svg.append('g')
            .call(yaxis)
            .attr("transform", "translate(" + (svgWidth - x(7.5)) + ",20)");

        svg.append('text')
            .attr('x', svgWidth - x(9.5))
            .attr('y', svgHeight - y(55.2))
            .style("alignment-baseline", "middle")
            .style("font-size", 9)
            .style("font-family", "Helvetica, Arial, sans-serif")
            .attr('fill', 'black')
            .text('# of students');

        // ===================


        // DRAW LEGEND


        var keys = ['Each square represents about 50 students.', 'Non-CS/CSE Engineering Applications', 'CS/CSE/CE Applications, Rejected', 'CS/CSE/CE Applications, Admitted not Enrolled', 'CS/CSE/CE Applications, Enrolled'];


        var legend = svg.selectAll('.legend')
            .append('g')


        legend.data(keys)
            .enter()
            .append('rect')
            .attr('x', x(5))
            .attr('y', function (d, i) {
                if (i == 0) {
                    return ((y(3) + i * y(2)));
                }
                return (y(4) + i * y(2));
            })
            .attr('width', x(1.5))
            .attr('height', y(1))
            .attr('fill', function (d, i) {
                if (i == 0) {
                    return '#B0B0B0'
                }
                else if (i == 1) {
                    return colors[0];
                }
                else if (i == 2) {
                    return colors[1];
                }
                else if (i == 3) {
                    return colors[2];
                }
                else {
                    return colors[3];
                }
            })
            .attr('class', function (d, i) {
                if (i == 0) {
                    return 'legend guide '
                }
                else if (i == 1) {
                    return 'legend other';
                }
                else if (i == 2) {
                    return 'legend cs-app';
                }
                else if (i == 3) {
                    return 'legend cs-admit';
                }
                else {
                    return 'legend cs-enrollee';
                }
            })



        legend.data(keys)
            .enter()
            .append('text')
            .attr('class', 'unclicked-legend')
            .attr('x', x(9))
            .attr('y', function (d, i) {
                if (i == 0) {
                    return ((y(3.7) + i * y(2)));
                }
                return (y(4.7) + i * y(2));
            })
            .style("alignment-baseline", "middle")
            .style("font-size", 13)
            .style("font-family", "Helvetica, Arial, sans-serif")
            .attr('fill', 'black')
            .text(function (d) { return d; });

        svg.append('line')
            .attr('class', 'unclicked-dash')
            .attr('x1', x(4.5))
            .attr('x2', x(60))
            .attr('y1', y(5))
            .attr('y2', y(5))
            .attr('stroke', 'black')
            .attr('stroke-dasharray', 4);

        svg.append('rect')
            .attr('class', 'unclicked-legend-border')
            .attr('x', x(3.7))
            .attr('y', y(1.8))
            .attr('width', x(58))
            .attr('height', y(13))
            .style("stroke", 'black')
            .style("fill", "none")
            .style("stroke-width", 1);





        // ================



        //INTERACTIVE
        var ypos = [];
        var ind;
        for (ind = 2001; ind < 2019; ind++) {
            ypos.push(d3.select('#bar' + ind + ' :last-child').attr('y'));
        }

        colors2 = ['#e8f8ff', '#ffc9d0', '#f9ebc2', '#cff7d7']

        revdata = cs_data.reverse();

        var clicked = false;

        svg.selectAll(".other")
            .on("mouseover", function () {
                d3.selectAll(".other")
                    .attr('style', "cursor:pointer");

                if (clicked == false) {
                    // d3.selectAll(".other")
                    //     .attr("fill", "pink");
                    d3.selectAll(".cs-admit")
                        .attr("fill", colors2[2]);
                    d3.selectAll(".cs-app")
                        .attr("fill", colors2[1]);
                    d3.selectAll(".cs-enrollee")
                        .attr("fill", colors2[3]);


                    svg.selectAll('.data-numbers')
                        .data(revdata)
                        .enter()
                        .append('text')
                        .attr('class', 'data-numbers')
                        .text(function (d) {
                            return d.all - d.cs;
                        })
                        .attr('x', function (d, i) {
                            return i * svgWidth / 18.8 + x(5);
                        })
                        .attr('y', function (d, i) {
                            return ypos[i] - y(1);
                        })
                        .style("alignment-baseline", "middle")
                        .style("font-size", 13)
                        .style("font-family", "Helvetica, Arial, sans-serif");
                }

            })
            .on("mouseout", function () {
                if (clicked == false) {
                    d3.selectAll(".other")
                        .attr("fill", colors[0]);
                    d3.selectAll(".cs-admit")
                        .attr("fill", colors[2]);
                    d3.selectAll(".cs-app")
                        .attr("fill", colors[1]);
                    d3.selectAll(".cs-enrollee")
                        .attr("fill", colors[3]);

                    d3.selectAll('.data-numbers')
                        .remove();
                }

            });

        svg.selectAll(".cs-admit")
            .on("mouseover", function () {
                // d3.selectAll(".cs-admit")
                //     .attr("fill", "pink");
                d3.selectAll(".cs-admit")
                    .attr('style', "cursor:pointer");

                if (clicked == false) {
                    d3.selectAll(".other")
                        .attr("fill", colors2[0]);
                    d3.selectAll(".cs-app")
                        .attr("fill", colors2[1]);
                    d3.selectAll(".cs-enrollee")
                        .attr("fill", colors2[3]);

                    svg.selectAll('.data-numbers')
                        .data(revdata)
                        .enter()
                        .append('text')
                        .attr('class', 'data-numbers')
                        .text(function (d) {
                            return d.admit - d.enroll;
                        })
                        .attr('x', function (d, i) {
                            return i * svgWidth / 18.8 + x(5);
                        })
                        .attr('y', function (d, i) {
                            return ypos[i] - y(1);
                        })
                        .style("alignment-baseline", "middle")
                        .style("font-size", 13)
                        .style("font-family", "Helvetica, Arial, sans-serif");
                }
            })
            .on("mouseout", function () {
                if (clicked == false) {
                    d3.selectAll(".other")
                        .attr("fill", colors[0]);
                    d3.selectAll(".cs-admit")
                        .attr("fill", colors[2]);
                    d3.selectAll(".cs-app")
                        .attr("fill", colors[1]);
                    d3.selectAll(".cs-enrollee")
                        .attr("fill", colors[3]);

                    d3.selectAll('.data-numbers')
                        .remove();
                }
            });

        svg.selectAll(".cs-app")
            .on("mouseover", function () {
                // d3.selectAll(".cs-admit")
                //     .attr("fill", "pink");

                d3.selectAll(".cs-app")
                    .attr('style', "cursor:pointer");

                if (clicked == false) {
                    d3.selectAll(".other")
                        .attr("fill", colors2[0]);
                    d3.selectAll(".cs-admit")
                        .attr("fill", colors2[2]);
                    d3.selectAll(".cs-enrollee")
                        .attr("fill", colors2[3]);

                    svg.selectAll('.data-numbers')
                        .data(revdata)
                        .enter()
                        .append('text')
                        .attr('class', 'data-numbers')
                        .text(function (d) {
                            return d.cs - d.admit;
                        })
                        .attr('x', function (d, i) {
                            return i * svgWidth / 18.8 + x(5);
                        })
                        .attr('y', function (d, i) {
                            return ypos[i] - y(1);
                        })
                        .style("alignment-baseline", "middle")
                        .style("font-size", 13)
                        .style("font-family", "Helvetica, Arial, sans-serif")
                }
            })
            .on("mouseout", function () {
                if (clicked == false) {
                    d3.selectAll(".other")
                        .attr("fill", colors[0]);
                    d3.selectAll(".cs-admit")
                        .attr("fill", colors[2]);
                    d3.selectAll(".cs-app")
                        .attr("fill", colors[1]);
                    d3.selectAll(".cs-enrollee")
                        .attr("fill", colors[3]);

                    d3.selectAll('.data-numbers')
                        .remove();
                }
            });

        svg.selectAll(".cs-enrollee")
            .on("mouseover", function () {
                // d3.selectAll(".cs-admit")
                //     .attr("fill", "pink");

                d3.selectAll(".cs-enrollee")
                    .attr('style', "cursor:pointer");
                if (clicked == false) {
                    d3.selectAll(".other")
                        .attr("fill", colors2[0]);
                    d3.selectAll(".cs-admit")
                        .attr("fill", colors2[2]);
                    d3.selectAll(".cs-app")
                        .attr("fill", colors2[1]);

                    svg.selectAll('.data-numbers')
                        .data(revdata)
                        .enter()
                        .append('text')
                        .attr('class', 'data-numbers')
                        .text(function (d) {
                            return d.enroll;
                        })
                        .attr('x', function (d, i) {
                            return i * svgWidth / 18.8 + x(5);
                        })
                        .attr('y', function (d, i) {
                            return ypos[i] - y(1);
                        })
                        .style("alignment-baseline", "middle")
                        .style("font-size", 13)
                        .style("font-family", "Helvetica, Arial, sans-serif");
                }
            })
            .on("mouseout", function () {
                if (clicked == false) {
                    d3.selectAll(".other")
                        .attr("fill", colors[0]);
                    d3.selectAll(".cs-admit")
                        .attr("fill", colors[2]);
                    d3.selectAll(".cs-app")
                        .attr("fill", colors[1]);
                    d3.selectAll(".cs-enrollee")
                        .attr("fill", colors[3]);

                    d3.selectAll('.data-numbers')
                        .remove();
                }
            });

        var keys1 = ['Non-CS/CSE/CE Engineering Applications: ', 'CS/CSE/CE Applications, Rejected: ', 'CS/CSE/CE Applications, Admitted not Enrolled: ', 'CS/CSE/CE Applications, Enrolled: '];
        var keys2 = ['Admissions Year: ', 'Total Engineering Applications: ', 'Total CS/CSE/CE Applications: ', 'Total CS/CSE/CE Admits: ', 'Total CS/CSE/CE Enrollees: '];

        svg.selectAll('.bar')
            .on('mousedown', function (d, index) {
                if (clicked == false) {
                    var year = d3.select(this)
                        .attr('id')
                        .slice(3);

                    d3.selectAll('.data-numbers')
                        .remove();

                    d3.selectAll('.bar ' + ':not(.square' + year + ')')
                        .attr('fill', '#fbe8ea');
                    d3.selectAll('.cs-admit.square' + year + '')
                        .attr('fill', colors[2]);
                    d3.selectAll('.cs-enrollee.square' + year + '')
                        .attr('fill', colors[3]);
                    d3.selectAll('.cs-app.square' + year + '')
                        .attr('fill', colors[1]);
                    d3.selectAll('.other.square' + year + '')
                        .attr('fill', colors[0]);

                    d3.select('.legend.cs-admit')
                        .attr('fill', colors[2]);
                    d3.select('.cs-enrollee.legend')
                        .attr('fill', colors[3]);
                    d3.select('.cs-app.legend')
                        .attr('fill', colors[1]);
                    d3.select('.other.legend')
                        .attr('fill', colors[0]);

                    var yearnums = [];

                    yearnums.push(revdata[index].year);
                    yearnums.push(revdata[index].all);
                    yearnums.push(revdata[index].cs);
                    yearnums.push(revdata[index].admit);
                    yearnums.push(revdata[index].enroll);
                    
                    var yearnums2 = [];
                    yearnums2.push(yearnums[1] - yearnums[2]);
                    yearnums2.push(yearnums[2] - yearnums[3]);
                    yearnums2.push(yearnums[3] - yearnums[4]);
                    yearnums2.push(yearnums[4]);

                    d3.selectAll('.unclicked-legend').remove();
                    d3.selectAll('.unclicked-legend-border').remove();
                    d3.selectAll('.guide').remove();
                    d3.selectAll('.legend.cs-admit').remove();
                    d3.selectAll('.legend.cs-app').remove();
                    d3.selectAll('.legend.other').remove();
                    d3.selectAll('.legend.cs-enrollee').remove();
                    d3.selectAll('.unclicked-dash').remove()


                    legend.data(keys2)
                        .enter()
                        .append('text')
                        .attr('class', 'clicked-legend')
                        .attr('x', function (d, i) {
                            if (i == 0) {
                                return x(18);
                            }
                            else {
                                return x(5.9);
                            }
                        })
                        .attr('y', function (d, i) {
                            if (i == 0) {
                                return ((y(3.7) + i * y(2)));
                            }
                            return (y(4.9) + i * y(2));
                        })
                        .style("alignment-baseline", "middle")
                        .style("font-size", 13)
                        .style("font-family", "Helvetica, Arial, sans-serif")
                        .attr('fill', 'black')
                        .text(function (d, i) {
                            return d + yearnums[i]
                        })
                        .attr('font-weight', 'bold');

                    svg.append('rect')
                        .attr('class', 'clicked-legend-border')
                        .attr('x', x(3.7))
                        .attr('y', y(1.8))
                        .attr('width', x(62))
                        .attr('height', y(22.5))
                        .style("stroke", 'black')
                        .style("fill", "none")
                        .style("stroke-width", 1);

                    legend.data(keys1)
                        .enter()
                        .append('rect')
                        .attr('x', function (d) {
                            return x(5);
                        })
                        .attr('y', function (d, i) {
                            return (y(15) + i * y(2));
                        })
                        .attr('width', x(1.5))
                        .attr('height', y(1))
                        .attr('fill', function (d, i) {
                            if (i == 1) {
                                return colors[1];
                            }
                            else if (i == 2) {
                                return colors[2];
                            }
                            else if (i == 3) {
                                return colors[3];
                            }
                            else {
                                return colors[0];
                            }
                        })
                        .attr('class', function (d, i) {
                            if (i == 1) {
                                return 'legend-clicked other';
                            }
                            else if (i == 2) {
                                return 'legend-clicked cs-app';
                            }
                            else if (i == 3) {
                                return 'legend-clicked cs-admit';
                            }
                            else {
                                return 'legend-clicked cs-enrollee';
                            }
                        });

                    legend.data(keys1)
                        .enter()
                        .append('text')
                        .attr('class', 'clicked-legend')
                        .attr('x', x(9))
                        .attr('y', function (d, i) {
                            return (y(15.8) + i * y(2));
                        })
                        .style("alignment-baseline", "middle")
                        .style("font-size", 13)
                        .style("font-family", "Helvetica, Arial, sans-serif")
                        .attr('fill', 'black')
                        .text(function (d, i) { return d + yearnums2[i] });

                    svg.append('line')
                        .attr('class', 'clicked-dash')
                        .attr('x1', x(4.5))
                        .attr('x2', x(65))
                        .attr('y1', y(5))
                        .attr('y2', y(5))
                        .attr('stroke', 'black')
                        .attr('stroke-dasharray', 4);


                    clicked = true;
                }
                else {
                    d3.selectAll(".cs-admit")
                        .attr("fill", colors[2]);
                    d3.selectAll(".other")
                        .attr("fill", colors[0]);
                    d3.selectAll(".cs-app")
                        .attr("fill", colors[1]);
                    d3.selectAll(".cs-enrollee")
                        .attr("fill", colors[3]);

                    d3.selectAll('.clicked-legend').remove();
                    d3.selectAll('.clicked-legend-border').remove();
                    d3.selectAll('.legend-clicked').remove();
                    d3.selectAll('.clicked-dash').remove();

                    legend.data(keys)
                        .enter()
                        .append('rect')
                        .attr('x', function (d) {
                            return x(5);
                        })
                        .attr('y', function (d, i) {
                            if (i == 0) {
                                return ((y(3) + i * y(2)));
                            }
                            return (y(4) + i * y(2));
                        })
                        .attr('width', x(1.5))
                        .attr('height', y(1))
                        .attr('fill', function (d, i) {
                            if (i == 0) {
                                return '#B0B0B0'
                            }
                            else if (i == 1) {
                                return colors[0];
                            }
                            else if (i == 2) {
                                return colors[1];
                            }
                            else if (i == 3) {
                                return colors[2];
                            }
                            else {
                                return colors[3];
                            }
                        })
                        .attr('class', function (d, i) {
                            if (i == 0) {
                                return 'legend guide '
                            }
                            else if (i == 1) {
                                return 'legend other';
                            }
                            else if (i == 2) {
                                return 'legend cs-app';
                            }
                            else if (i == 3) {
                                return 'legend cs-admit';
                            }
                            else {
                                return 'legend cs-enrollee';
                            }
                        })



                    legend.data(keys)
                        .enter()
                        .append('text')
                        .attr('class', 'unclicked-legend')
                        .attr('x', x(9))
                        .attr('y', function (d, i) {
                            if (i == 0) {
                                return ((y(3.7) + i * y(2)));
                            }
                            return (y(4.7) + i * y(2));
                        })
                        .style("alignment-baseline", "middle")
                        .style("font-size", 13)
                        .style("font-family", "Helvetica, Arial, sans-serif")
                        .attr('fill', 'black')
                        .text(function (d) { return d; });

                    svg.append('line')
                        .attr('class', 'unclicked-dash')
                        .attr('x1', x(4.5))
                        .attr('x2', x(60))
                        .attr('y1', y(5))
                        .attr('y2', y(5))
                        .attr('stroke', 'black')
                        .attr('stroke-dasharray', 4);

                    svg.append('rect')
                        .attr('class', 'unclicked-legend-border')
                        .attr('x', x(3.7))
                        .attr('y', y(1.8))
                        .attr('width', x(58))
                        .attr('height', y(13))
                        .style("stroke", 'black')
                        .style("fill", "none")
                        .style("stroke-width", 1);

                    clicked = false;

                }


            });

            if(screen.width < 500){
                svg.attr("transform", "scale(.70, .8) translate(-250, 0)");
            };