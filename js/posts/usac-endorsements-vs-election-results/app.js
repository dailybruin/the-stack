var completeData, data;
var width, height, svg;
var x, y, r, cellPerRow;
var color = {
    endorsedAndWon: '#ffe11a',
    endorsedAndLost: '#807F83',
    notEndorsedAndWon: '#004358',
    notEndorsedAndLost: '#fd7400',
};
var grayColor = '#807F83';
var criteria = {};
var stats, yearStats, globalSuccessRate = 0.66;
var startYear = 1986, endYear = 2015;

$(function(){
    $.getJSON('/datasets/usac-endorsements-vs-election-results/data.json', function(res) {
        completeData = res;
        completeData.sort(function(a, b) {
            if (a.endorsed == b.endorsed)
                return (a.won == b.won) ? (b.year - a.year) : (b.won - a.won);
            return b.endorsed - a.endorsed;
        });
        data = completeData;

        // Event listener
        d3.select(window).on('resize', resize);

        // Init semantic modules
        updateStats();
        $('.dropdown').dropdown({onChange: function(value, text, choice) {
            var type = choice.parent().parent().data('type');
            if (text != "All")
                criteria[type] = text;
            else
                delete criteria[type];
            filter(criteria);
            var type = $('#changeType-year').hasClass('active') ? 'year' : 'result';
            redraw(type);
        }});

        draw();
        $('#d3-container circle').popup();
    });
});

function resize() {
    $('#d3-container').empty();
    $('.changeType .ui.button').removeClass('active');
    draw();
}

function determineSize(type) {
    if (type == 'year') {
        yearStats = {count: {}, wonAndEndorsed: {}, endorsed: {}, percentage: {}};
        for (var i = 0; i < data.length; i ++) {
            if (data[i].year in yearStats.count) {
                yearStats.count[data[i].year] += 1;
                data[i].x = yearStats.count[data[i].year];
            }
            else {
                data[i].x = 0;
                yearStats.count[data[i].year] = 0;
                yearStats.wonAndEndorsed[data[i].year] = 0;
                yearStats.endorsed[data[i].year] = 0;
            }
            if (data[i].endorsed) {
                yearStats.endorsed[data[i].year] += 1;
                if (data[i].won)
                    yearStats.wonAndEndorsed[data[i].year] += 1;
            }
        }
        for (var i = startYear; i <= endYear; i ++)
            yearStats.percentage[i] = yearStats.wonAndEndorsed[i] / yearStats.endorsed[i] * 100;

        var maxNum = 1 + d3.max(Object.keys(yearStats.count).map(function (key) {return yearStats.count[key]}));
        if (maxNum > 20)
            r = 2*8/Math.sqrt(maxNum - 20);
        else
            r = 8;
        y = d3.scale.ordinal()
            .domain(d3.range(startYear, endYear+1))
            .rangeRoundPoints([height - 3*r, 3*r]);
        x = d3.scale.ordinal()
            .domain(d3.range(0, maxNum))  // Max number of candidates/yr
            .rangeRoundPoints([3*r, width - 26 - 2*r]);
    }
    else {
        r = 8;
        cellPerRow = Math.min(20, data.filter(function(d){return d.won && d.endorsed;}).length);

        x = d3.scale.ordinal()
            .domain(d3.range(cellPerRow))
            .rangeRoundPoints([3*r, width - 3*r]);
        y = d3.scale.ordinal()
            .domain(d3.range(Math.ceil(data.length/cellPerRow)))
            .rangeRoundPoints([height - 3*r, 25]);
    }
}

function draw() {
    width = $('#d3-container').width();
    height = $('#d3-container').height();
    determineSize('result');

    svg = d3.select('#d3-container').append('svg')
            .attr('width', width)
            .attr('height', height);

    svg.selectAll('circle')
        .data(data, function(d) { return d.year + d.name; })
      .enter().append('circle')
        .attr('cx', function(){return Math.random()*width/2 + width/4;})
        .attr('cy', function(){return Math.random()*height/2 + height/4;})
        .attr('r', 2)
        .attr('data-title', function(d) { return d.name; })
        .attr('data-content', function(d) { return popUpContent(d); })
        .attr('fill', grayColor)
      .transition().delay(300).duration(1000)
        .attr('cx', function(d, i) {
            return x(i%cellPerRow);
        })
        .attr('cy', function(d, i) {
            return y(Math.floor(i/cellPerRow));
        })
        .attr('r', r);
}

function updateStats() {
    $('#d3-container circle').popup();
    stats = data.reduce(function(previousValue, d) {
        if (d.endorsed) {
            if (d.won)
                previousValue.eaw += 1;
            else
                previousValue.eal += 1;
        }
        else {
            if (d.won)
                previousValue.neaw += 1;
            else
                previousValue.neal += 1;
        }
        return previousValue;
    }, {eaw: 0, eal: 0, neaw: 0, neal: 0});
    for (var key in stats)
        stats[key] = Math.ceil(stats[key]/data.length*100);

    // Percentage for success predictions / total predictions
    var successPercentage = Math.ceil(stats.eaw/(stats.eaw+stats.eal)*100);
    $('.total').text(data.length + " candidates shown");
    var eawtotal = Math.floor(stats.eaw * data.length / 100);
    var etotal = Math.floor(stats.eaw * data.length / 100) + Math.floor(stats.eal * data.length / 100);
    // set the bar manually to avoid animation
    $('#success-progress>.bar').css('width', successPercentage + '%')
        .css('background-color', 'hsla(177,100%,' + Math.sqrt(successPercentage*20) + '%,1)');
    $('#success-progress>.label').html('<p>' + successPercentage + '% of Daily Bruin endorsed candidates won </br> ('+
                eawtotal +' endorsed and won candidates divided by '+etotal+' total endorsed) </p>');

    $('#stat-eaw>.value').text(stats.eaw + '%');
    $('#stat-eal>.value').text(stats.eal + '%');
    $('#stat-neaw>.value').text(stats.neaw + '%');
    $('#stat-neal>.value').text(stats.neal + '%');
}

function changeType(type) {
    if ($('#changeType-' + type).hasClass('active')) {
        $('.changeType .ui.button').removeClass('active');
        turnGray();
        $('#position-dropdown').addClass('disabled');
    }
    else {
        $('.changeType .ui.button').removeClass('active');
        $('#changeType-' + type).addClass('active');
        redraw(type);
        $('#position-dropdown').removeClass('disabled');
    }
}

function redraw(type) {
    determineSize(type);
    var circles = svg.selectAll('circle').data(data, function(d) { return d.year + d.name; });
    if (type == 'year') {
        circles.transition().duration(800)
            .attr('fill', fillByResult)
            .attr('cx', function(d) { return x(d.x); })
            .attr('cy', function(d) { return y(d.year); })
            .attr('r', r);
        circles.enter().append('circle')
            .attr('data-title', function(d) { return d.name; })
            .attr('data-content', popUpContent)
            .attr('fill', '#ffffff')
            .transition().duration(800)
            .attr('fill', fillByResult)
            .attr('cx', function(d) { return x(d.x); })
            .attr('cy', function(d) { return y(d.year); })
            .attr('r', r);

        // yspData = Object.keys(yearStats.percentage).map(function (key) {return yearStats.percentage[key]});
        // svg.selectAll('rect').remove();
        // svg.selectAll('rect').data(yspData, function(d, i) { return i; }).enter().append('rect')
        //     .attr('x', 0)
        //     .attr('width', function(d) {
        //         return width*d/100;
        //     })
        //     .attr('y', function(d, i) {
        //         return y(i + startYear) - r;
        //     })
        //     .attr('height', y.range()[0]-y.range()[1])
        //     .attr('fill', 'rgba(159, 193, 244, 0.5)')
        //     .moveToBack();
        var text = svg.selectAll('text')
            .data(y.domain(), function(d) { return d; });

        text.enter().append('text')
            .attr('y', y)
            .attr('x', width - 5)
            .attr('font-size', 11)
            .text(function(d) { return d; });
        text.transition().duration(800)
            .attr('x', width - 26)
            .attr('fill', function(d) {
                return 'hsla(177,100%,' + Math.sqrt(yearStats.percentage[d]*18) + '%,1)';
            });

    }
    else {
        svg.selectAll('text').transition()
            .attr("x", width)
            .remove();
        circles.transition().duration(800)
            .attr('cx', function(d, i) {
                return x(i%cellPerRow);
            })
            .attr('cy', function(d, i) {
                return y(Math.floor(i/cellPerRow));
            })
            .attr('r', r)
            .attr('fill', fillByResult);

        circles.enter().append('circle')
            .attr('data-title', function(d) { return d.name; })
            .attr('data-content', popUpContent)
            .attr('fill', '#ffffff')
            .transition().duration(800)
            .attr('fill', fillByResult)
            .attr('r', r)
            .attr('cx', function(d, i) {
                return x(i%cellPerRow);
            })
            .attr('cy', function(d, i) {
                return y(Math.floor(i/cellPerRow));
            });
    }

    circles.exit().transition().duration(500)
        .style("fill-opacity", 1e-6)
        .remove();

    updateStats();
}

function turnGray() {
    determineSize('result');
    svg.selectAll('text').transition()
            .attr("x", width)
            .remove();
    svg.selectAll('circle').transition().duration(800)
        .attr('fill', grayColor)
        .attr('cx', function(d, i) {
            return x(i%cellPerRow);
        })
        .attr('cy', function(d, i) {
            return y(Math.floor(i/cellPerRow));
        })
        .attr('r', r);
}

function filter(criteria) {
    var keys = Object.keys(criteria);
    data = completeData.filter(function(d){
        return !keys.some(function(key){
            // use double negation to handle the case when keys=[]
            return d[key] != criteria[key];
        });
    });
}

function fillByResult(d) {
    if (d.endorsed)
        return d.won ? color.endorsedAndWon : color.endorsedAndLost;
    return d.won ? color.notEndorsedAndWon : color.notEndorsedAndLost;
}

function popUpContent(d) {
    return d.year + '\n' + d.position;
}

d3.selection.prototype.moveToBack = function() {
    return this.each(function() {
        var firstChild = this.parentNode.firstChild;
        if (firstChild) {
            this.parentNode.insertBefore(this, firstChild);
        }
    });
};
