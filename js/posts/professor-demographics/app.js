/*
    Data sources:
        https://www.universityofcalifornia.edu/infocenter/uc-workforce-diversity
        https://factfinder.census.gov/faces/tableservices/jsf/pages/productview.xhtml?src=bkmk
*/

var years = ['2010-2011','2011-2012','2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019'];

// var genders = [female, male];
var genders = [{
    title: 'Female',
    color: '#CC79A7',
    ca: 50,
}, {
    title: 'Male',
    color: '#56B4E9',
    ca: 50,
}];

//var races = [white, asian, hispanic, black, indian, two, unknown];
var races = [{
    title: 'White',
    color: '#E69F00',
    ca: 38,
}, {
    title: 'Asian/Asian American or Pacific Islander',
    color: '#D55E00',
    ca: 14,
}, {
    title: 'Chicano(a)/Latina(o)/Hispanic',
    color: '#0072B2',
    ca: 39,
}, {
    title: 'Black or African-American',
    color: '#F0E442',
    ca: 6,
}, {
    title: 'American Indian or Alaskan Native',
    color: '#009E73',
    ca: 0,
}, {
    title: 'Two or More Races',
    color: '#6073b1',
    ca: 3,
}, {
    title: 'Unknown',
    color: '#ddcc77',
    ca: 0,
}, {
    title: 'Total',
    color: '#E69F00',
    ca: 1,
}];

var schools = [{
    name: 'ALL',
    get data() {
        var temp = [];
        for (i=0; i<114; i++)
            temp.push(i)
        return temp;
    }
}, {
    name: 'ANDERSON GRADUATE SCHOOL OF MANAGEMENT (AGSM)',
    data: [4],
}, {
    name: 'BASIC BIOMEDICAL SCIENCES',
    data: [85],
}, {
    name: 'FIELDING SCHOOL OF PUBLIC HEALTH (FSPH)',
    data: [15, 17, 26, 49, 50, 59, 60, 96, 102],
}, {
    name: 'GRADUATE SCHOOL OF EDUCATION AND INFO STUDIES (GSEIS)',
    data: [31, 45, 64],
}, {
    name: 'HENRY SAMUELI SCHOOL OF ENGINEERING & APPLIED SCIENCE (HSSEAS)',
    data: [13, 20, 24, 29, 32, 68, 82, 84],
}, {
    name: 'HERB ALPERT SCHOOL OF MUSIC (HASOM)',
    data: [33, 51, 89, 90],
}, {
    name: 'INST OF ENVIORN & SUSTAINABILITY (IOES)',
    data: [69],
}, {
    name: 'INSTITUTE OF AMERICAN CULTURES',
    data: [23],
}, {
    name: 'INTERNATIONAL INSTITUTE',
    data: [ 73, 92],
}, {
    name: 'L&S GENERAL',
    data: [67],
}, {
    name: 'L&S HUMANITIES', // updated
    data: [7, 9, 17, 23, 26, 28, 46, 52, 55, 61, 73, 76, 78, 88, 92, 95, 102, 104, 107, 109, 113],
}, {
    name: 'L&S LIFE SCIENCES',
    data: [41, 43, 67, 72, 79, 87, 88, 93, 101],
}, {
    name: 'L&S PHYSICAL SCIENCES',
    data: [12, 21, 42, 65, 70, 83, 98, 100, 110],
}, {
    name: 'L&S SOCIAL SCIENCES',
    data: [1, 2, 3, 5, 7, 10, 16, 22, 26, 44, 55, 56, 58, 61, 66, 71, 74, 86, 91, 99, 108],
}, {
    name: 'L&S UNDERGRADUATE EDUCATION',
    data: [46, 62],
}, {
    name: 'LUSKIN SCHOOL OF PUBLIC AFFAIRS (LSPA)',
    data: [34, 81, 103, 105, 107, 113],
}, {
    name: 'SCHOOL OF ARTS & ARCHITECTURE (SOAA)',
    data: [6, 8, 30, 38, 49, 51, 87, 112],
}, {
    name: 'SCHOOL OF DENTISTRY',
    data: [36, 37, 38, 39],
}, {
    name: 'SCHOOL OF LAW',
    data: [77],
}, {
    name: 'SCHOOL OF NURSING',
    data: [95],
}, {
    name: 'SCHOOL OF THEATER, FILM & TELEVISION (STFT)',
    data: [35, 52, 112],
}];

const config = {
    type: 'bar',
    options: {
        title: {
            fontSize: 20,
            display: true,
        },
        responsive: true,
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Academic Year',
                },
                gridLines: {
                    display: false,
                },
            }],
            yAxes: [{
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    beginAtZero: true,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Faculty (FTE)',
                },
            }],
        },
        tooltips: {
            mode: 'index',
            intersect: true
        },
    },
    
}


var ctx = document.getElementById('raceChart');
var myDem = new Chart(ctx, config);

var school = document.getElementById('school')
for (i=0; i<schools.length; i++) {
    var temp = document.createElement('option');
    temp.innerHTML = schools[i].name;
    school.appendChild(temp)
}

function dept(n, f, m, i, a, b, h, t, u, w, T) {
    this.name = n;
    this.total = T;
    this.races = [w, a, h, b, i, t, u];
    this.genders = [f, m];
}

d3.csv('/datasets/professor-demographics/professor-demographics.csv')
    .get(function(data) {
         
    var all = [];
    
    for (i=0; i<data.length/10; i++) {
        deptName = data[10*i].Year.toUpperCase();
        d3.select('#departments').append('option')
            .html(deptName)

        var ftemp = [], mtemp = [], itemp = [], atemp = [], btemp = [], htemp = [], ttemp = [], utemp = [], wtemp = [], Ttemp = [];
        for (j=1; j<10; j++) { // filling in each category by year
            ftemp.push(data[i*10 + j].F);
            mtemp.push(data[i*10 + j].M);
            itemp.push(data[i*10 + j].AI);
            atemp.push(data[i*10 + j].A);
            btemp.push(data[i*10 + j].B);
            htemp.push(data[i*10 + j].L);
            ttemp.push(data[i*10 + j].TW);
            utemp.push(data[i*10 + j].U);
            wtemp.push(data[i*10 + j].W);
            Ttemp.push(data[i*10 + j].T);
        }
        all.push(new dept(deptName, ftemp, mtemp, itemp, atemp, btemp, htemp, ttemp, utemp, wtemp, Ttemp) )
    }
    
    update(getdept(all));
    updateBalls(getdept(all));
    
    document.getElementById('departments').addEventListener('change', function() {
        update(getdept(all));
        updateBalls(getdept(all));
    })
    
    document.getElementById('gender').addEventListener('change', function() {
        update(getdept(all));
        updateBalls(getdept(all));
    })
    
    document.getElementById('school').addEventListener('change', function() {
        updateLabels(all);
        updateBalls(getdept(all));
    })
        
    document.getElementById('changeYear').addEventListener('mousemove', function() {
        updateBalls(getdept(all))
    })

    
});


function updateBalls(department) {
    var blank = [];
    var blank2 = [];
    
    // reset balls

    d3.selectAll("#california > circle").remove();
    d3.selectAll("#people > circle").remove();
    
    var california = d3.select('#california').selectAll('circle');
    var people = d3.select('#people').selectAll('circle');
    
    const radius = 10;
    
    var config;
    
    // configure balls
    
    if (document.getElementById('gender').selectedIndex == 1) {
        data = department.genders;
        config = genders;
        for (i=0; i<genders.length; i++) {
            for (j=0; j<genders[i].ca; j++) {
                blank.push(genders[i].color)
            }
        }
    } else {
        data = department.races;
        config = races;
        for (i=0; i<races.length; i++) {
            for (j=0; j<races[i].ca; j++) {
                blank.push(races[i].color)
            }
        }
    }
    
    // configuring balls
    
    var toThis = parseInt(document.getElementById('changeYear').value);
    toThis -= 2010;
    
    var tot = 0;
    for (i=0; i<data.length; i++) {
        tot += parseFloat(data[i][toThis]);
    }
        
    for (i=0; i<data.length; i++) {
        for (j=0; j<Math.round(data[i][toThis] * 100 / tot); j++) {
            blank2.push(config[i].color)
        }
    }
    
    const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    // making balls with d3

    for (b=0; b<10; b++) {

        california.data(a)
            .enter().append('circle')
            .attr('r', radius + 'px')
            .attr('fill', function(a) {return blank[a + (b * 10)]})
            .attr('cx', function(a) {return (a * (2*radius+5) + radius) + 'px'})
            .attr('cy', function(a) {return (b * (2*radius+5) + radius) + 'px'})

        people.data(a)
            .enter().append('circle')
            .attr('r', radius + 'px')
            .attr('fill', function(a) {return blank2[a + (b*10)]})
            .attr('cx', function(a) {return (a * (2*radius+5) + radius) + 'px'})
            .attr('cy', function(a) {return (b * (2*radius+5) + radius) + 'px'})
    }

}

function updateLabels(all) {

    document.getElementById('departments').innerHTML = '';
    var selectedSchool = schools[document.getElementById('school').selectedIndex];

    for (j=0; j<selectedSchool.data.length; j++) {
        var deptName = all[selectedSchool.data[j]].name
        d3.select('#departments').append('option').html(deptName);
    }
    update(getdept(all));
}

function getdept(all) {
    var selectedSchool = schools[document.getElementById('school').selectedIndex];
    var departmentIndex = document.getElementById('departments').selectedIndex;
    department = all[selectedSchool.data[departmentIndex]];
    
    return department;
}


function update(department) {

    var opt, config;
    
    if (document.getElementById('gender').selectedIndex == 1) {
        data = department.genders;
        config = genders;
    } else {
        data = department.races;
        config = races;
    }
    
    // Update chart
    
    var pork = {
        labels: years,
        datasets: [{
            type: 'line',
            label: 'Total',
            data: department.total,
            fill: false,
            borderColor: 'rgba(0, 0, 0)',
        }],
    };
            
    
    for (i=0; i<data.length; i++) {
        pork.datasets.push({
            type: 'bar',
            label: config[i].title,
            backgroundColor: config[i].color,
            data: data[i],
            stack: 'stack-1',
            borderWidth: 0,
            barThickness: 60,
        });
    }
    
    myDem.data = pork;
    myDem.options.title.text = department.name;
    myDem.update();
}


