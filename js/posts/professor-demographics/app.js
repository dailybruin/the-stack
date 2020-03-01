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
    color: '#009E73',
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

var config = {
    type: 'bar',
    data:
    {},
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: 'Race'
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }],
            yAxes: [{
                type: 'linear',
                display: true,
                position: 'left',
                id: 'axis-1',
                ticks: {
                    beginAtZero: true,
                },
            }, {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'axis-2',
                ticks: {
                    beginAtZero: true,
                },
                gridLines: {
                    drawOnChartArea: false,
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

var myrace = d3.select('#raceChart');

var schools = [{
        name: 'ALL',
        data: [0],
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
        name: 'L&S HUMANITIES',
        data: [9, 11, 19, 25, 28, 30, 48, 54, 57, 63, 75, 78, 80, 90, 94, 97, 104, 106, 109, 111, 115],
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
        data: [6, 8, 32, 40, 51, 53, 89, 114],
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

for (i=0; i<schools.length; i++) {
    var school = document.getElementById('school')
    var temp = document.createElement('option');
    temp.innerHTML = schools[i].name;
    school.appendChild(temp)
}

var temp = [];
for (i=0; i<116; i++) {
    temp.push(i);
}
schools[0].data = temp;
console.log(schools[0])

function dept(n, f, m, i, a, b, h, t, u, w, T) {
    this.name = n;
    this.total = T;
    
    this.races = [w, a, h, b, i, t, u];
    this.genders = [f, m];
}

d3.csv('/datasets/professor-demographics/professor-demographics.csv')
    .get(function(data) {

    var all = [];
    var allschools = [];
    var deptName;
    var deptData;
    
    
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
    update(all[0])

    document.getElementById('departments').addEventListener('change', function() {
        //alert((this.selectedIndex))
        update(all[this.selectedIndex]);
    })
    
    document.getElementById('what').addEventListener('change', function() {
        update(all[document.getElementById('departments').selectedIndex]);
    })
    
    document.getElementById('school').addEventListener('change', function() {
        update(all[document.getElementById('departments').selectedIndex]);
        updateLabels(all)
    })


    

});

function updateLabels(data) {
    document.getElementById('departments').innerHTML = '';
    var temp = schools[document.getElementById('school').selectedIndex];
    console.log(temp);
    for (i=0; i<temp.data.length; i++) {
        deptName = data[ temp.data[i] ].name.toUpperCase();
        console.log(deptName);
        d3.select('#departments').append('option').html(deptName);
    }
}

function update(department) {
    var opt;
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
    
    if (document.getElementById('what').selectedIndex == 0) {
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
    
    var tot = 0;
    for (i=0; i<data.length; i++) {
        tot += parseFloat(data[i][8]);
    }
    
    console.log(tot);
    
    for (i=0; i<data.length; i++) {
        console.log(Math.round(data[i][8] * 100 / tot))
        for (j=0; j<Math.round(data[i][8] * 100 / tot); j++) {
            blank2.push(config[i].color)
        }
    }
    
    const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    // making balls

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
            borderWidth: 1,
        });
    }
    
    myDem.data = pork;
    myDem.update();

}



function getStdData(data) {
    var d = [];
    for (i=1; i<data.length; i++) {
        d.push({
            x: data[i]['data'],
            y: data[i]['total'],
            label: data[i]['name'],
        })
    }
    return d;
}




var stdData = [{'data': 0.11207435874519617, 'name': 'ALL', 'total': 2237.8}, {'data': 0, 'name': 'AEROSPACE STUDIES', 'total': 0.0}, {'data': 0.7799999999999999, 'name': 'AFRICAN AMERICAN STUDIES', 'total': 10.0}, {'data': 0.0, 'name': 'AMERICAN INDIAN STUDIES', 'total': 1.0}, {'data': 0.09396551724137932, 'name': 'ANDERSON', 'total': 116.0}, {'data': 0.15873015873015875, 'name': 'ANTHROPOLOGY', 'total': 37.8}, {'data': 0.06472491909385114, 'name': 'ARCHITECTURE & URBAN DESIGN', 'total': 30.9}, {'data': 0, 'name': 'ARCHAEOLOGY', 'total': 0.0}, {'data': 0.12432432432432433, 'name': 'ART', 'total': 18.5}, {'data': 0.08125, 'name': 'ART HISTORY', 'total': 16.0}, {'data': 0.0, 'name': 'ASIAN AMERICAN STUDIES', 'total': 12.0}, {'data': 0.0, 'name': 'ASIAN LANGUAGES AND CULTURES', 'total': 46.9}, {'data': 0.028089887640449437, 'name': 'ATMOSPHERIC AND OCEANIC SCIENCES', 'total': 17.8}, {'data': 0.0, 'name': 'BIOENGINEERING', 'total': 12.7}, {'data': 0.07692307692307693, 'name': 'BIOENGINEERING', 'total': 13.0}, {'data': 0.07692307692307693, 'name': 'BIOSTATISTICS', 'total': 13.0}, {'data': 0, 'name': 'CA CENTER FOR POPULATION RESEARCH', 'total': 0.0}, {'data': 0.3333333333333333, 'name': 'CANCER PREVENTION & CONTROL RES', 'total': 3.0}, {'data': 0.0, 'name': 'CANCER PREVENTION & CONTROL RES', 'total': 0.5}, {'data': 0.07874015748031496, 'name': 'CHEMICAL AND BIOMOLECULAR ENGINEERING', 'total': 12.7}, {'data': 0.04975124378109453, 'name': 'CHEMISTRY AND BIOCHEMISTRY', 'total': 60.3}, {'data': 0.9813664596273292, 'name': 'CHICANA/O STUDIES', 'total': 16.1}, {'data': 1.0, 'name': 'CHICANO STUDIES RESEARCH CENTER', 'total': 1.0}, {'data': 0.08403361344537814, 'name': 'Civil & Enviornmental Engr', 'total': 23.8}, {'data': 0.06289308176100629, 'name': 'Classics', 'total': 15.9}, {'data': 0.0, 'name': 'Communication Studies', 'total': 19.6}, {'data': 0.2155688622754491, 'name': 'Community Health Sciences', 'total': 16.7}, {'data': 0.07017543859649122, 'name': 'Comparative Literature', 'total': 11.4}, {'data': 0.0, 'name': 'Computer Science', 'total': 37.6}, {'data': 0.0, 'name': 'Dean, Div of Humanities', 'total': 1.0}, {'data': 0.0, 'name': 'Dean, GSE&IS', 'total': 1.0}, {'data': 0.0, 'name': 'Dean, HSSEAS', 'total': 3.4}, {'data': 0.0, 'name': 'Dean, LSPA', 'total': 1.7}, {'data': 0.0, 'name': 'Dean, STFT', 'total': 1.0}, {'data': 0.0, 'name': 'Dental Clinic', 'total': 1.7}, {'data': 0.0, 'name': 'Dental Clinic-Off Campus', 'total': 2.6}, {'data': 0.0, 'name': 'Dental Research Inst', 'total': 1.0}, {'data': 0.08933717579250722, 'name': 'Dentistry', 'total': 104.1}, {'data': 0.07142857142857142, 'name': 'Design | Media Arts', 'total': 14.0}, {'data': 0, 'name': 'Duchenne Musc Dyst Research Cntr (DMD Center)', 'total': 0.0}, {'data': 0.0, 'name': 'Earth, Planetary & Space Sciences (EPSS)', 'total': 24.2}, {'data': 0.09036144578313252, 'name': 'Ecology & Evol Biology', 'total': 33.2}, {'data': 0.11312217194570134, 'name': 'Economics', 'total': 44.2}, {'data': 0.3200568990042674, 'name': 'Education', 'total': 70.3}, {'data': 0.0, 'name': 'Educational Initiatives', 'total': 3.1}, {'data': 0.007751937984496124, 'name': 'Electrical and Computer Engineering', 'total': 51.6}, {'data': 0.15639810426540285, 'name': 'English', 'total': 63.3}, {'data': 0.11363636363636363, 'name': 'Environmental Health Sciences', 'total': 8.8}, {'data': 0.0875, 'name': 'Epidemiology', 'total': 16.0}, {'data': 0.40239043824701193, 'name': 'Ethnomusicology', 'total': 25.1}, {'data': 0.13819095477386936, 'name': 'Film, TV, & Digital Media', 'total': 39.8}, {'data': 0, 'name': 'Fowler Museum', 'total': 0.0}, {'data': 0.0847457627118644, 'name': 'French and Francophone Studies', 'total': 11.8}, {'data': 0.2088607594936709, 'name': 'Gender Studies', 'total': 15.8}, {'data': 0.0784313725490196, 'name': 'Geography', 'total': 25.5}, {'data': 0.056818181818181816, 'name': 'Germanic Languages', 'total': 8.8}, {'data': 0.0, 'name': 'Getty Convservation Program', 'total': 1.0}, {'data': 0.05963302752293578, 'name': 'Health Policy & Management', 'total': 21.8}, {'data': 0.0, 'name': 'Health Policy Research Center', 'total': 1.0}, {'data': 0.109375, 'name': 'History', 'total': 64.0}, {'data': 0.0, 'name': 'Honors Programs', 'total': 1.5}, {'data': 0.0, 'name': 'Indo-European Studies', 'total': 1.7}, {'data': 0.0787878787878788, 'name': 'Information Studies', 'total': 16.5}, {'data': 0.0, 'name': 'Institute for Pure & Applied Math', 'total': 1.0}, {'data': 0.4, 'name': 'Inst for Res on Labor & Employment', 'total': 2.5}, {'data': 0.0, 'name': 'Inst for Society & Genetics', 'total': 9.2}, {'data': 0, 'name': 'Inst for Technology Advancement', 'total': 0}, {'data': 0.12, 'name': 'Inst for Environ & Sustainability', 'total': 12.5}, {'data': 0, 'name': 'Inst for Geophysics & Planetary Physics', 'total': 0.0}, {'data': 0, 'name': 'Institute for Archaeology', 'total': 0}, {'data': 0.12244897959183673, 'name': 'Int Biology & Physiology', 'total': 24.5}, {'data': 0.0, 'name': 'Interdepartmental Degree Programs (IDPs)', 'total': 2.0}, {'data': 0, 'name': 'Interdepartmental Program - Social Sciences', 'total': 0}, {'data': 0.0, 'name': 'Italian', 'total': 5.9}, {'data': 0, 'name': 'Joint Inst Reg Earth Syst Sci/Engr (JIFRESSE)', 'total': 0.0}, {'data': 0.11464968152866242, 'name': 'Law', 'total': 94.2}, {'data': 0, 'name': 'Lesbian, Gay & Bisexual Studies', 'total': 0.0}, {'data': 0.0, 'name': 'Life Sciences Core Crclm Prgm', 'total': 7.3}, {'data': 0.10373443983402489, 'name': 'Linguistics', 'total': 24.1}, {'data': 0.0, 'name': 'Luskin Cntr for Innovation', 'total': 1.0}, {'data': 0.07042253521126761, 'name': 'Materials Science & Engr (MSE)', 'total': 14.2}, {'data': 0.026737967914438505, 'name': 'Mathematics', 'total': 93.5}, {'data': 0.0, 'name': 'Mechanical & Aerospace Engr (MANE)', 'total': 38.8}, {'data': 0.03508771929824561, 'name': 'Microbiology, Immunology & Molecular Genetics (MIMG)', 'total': 28.5}, {'data': 0, 'name': 'Military Science', 'total': 0.0}, {'data': 0.3333333333333333, 'name': 'Minor in Biomedical Research', 'total': 3.0}, {'data': 0.14285714285714285, 'name': 'Molecular, Cell & Develop Biology (MCDB)', 'total': 28.0}, {'data': 0.03007518796992481, 'name': 'Music', 'total': 39.9}, {'data': 0.09459459459459459, 'name': 'Musicology', 'total': 14.8}, {'data': 0, 'name': 'Naval Science', 'total': 0.0}, {'data': 0.0, 'name': 'Nazarian Center for Israel Studies (NCIS)', 'total': 0.8}, {'data': 0.0, 'name': 'Neuroscience Interdepartmental Prog', 'total': 0.8}, {'data': 0.0, 'name': 'Nr Eastern Langs & Cultures', 'total': 24.5}, {'data': 0.18136439267886856, 'name': 'Nursing', 'total': 60.1}, {'data': 0.0, 'name': 'Occupational & Envtl Health Cntr (CTR O&EH)', 'total': 2.0}, {'data': 0.0, 'name': 'Philosophy', 'total': 25.5}, {'data': 0.029498525073746312, 'name': 'Physics & Astronomy', 'total': 67.8}, {'data': 0.05518763796909493, 'name': 'Political Science', 'total': 45.3}, {'data': 0.25641025641025644, 'name': 'Program in Computing', 'total': 7.8}, {'data': 0.08262108262108261, 'name': 'Psychology', 'total': 70.2}, {'data': 0.0, 'name': 'Public Health', 'total': 0.8}, {'data': 0.234375, 'name': 'Public Policy', 'total': 12.8}, {'data': 0.0, 'name': 'Scandanavian Section', 'total': 4.0}, {'data': 0, 'name': 'School-wide Programs, LSPA', 'total': 0.0}, {'data': 0.0, 'name': 'Slavic, East European & Eurasian Langs', 'total': 11.7}, {'data': 0.265, 'name': 'Social Welfare', 'total': 20.0}, {'data': 0.18888888888888888, 'name': 'Sociology', 'total': 36.0}, {'data': 0.5316455696202531, 'name': 'Spanish & Portuguese', 'total': 31.6}, {'data': 0.06666666666666667, 'name': 'Statistics', 'total': 22.5}, {'data': 0.0, 'name': 'Study of Religion', 'total': 1.1}, {'data': 0.19540229885057472, 'name': 'Theater', 'total': 34.8}, {'data': 0.10810810810810811, 'name': 'Urban Planning', 'total': 18.5}, {'data': 0.15086206896551724, 'name': 'World Arts & Cultures/Dance', 'total': 23.2}, {'data': 0.09022556390977444, 'name': 'Writing Program', 'total': 39.9}]


var config2 = {
    type: 'scatter',
    data: {
        labels: ['2', '3', '4'],
        datasets: [{
            data: getStdData(stdData),
            label: 'test',
        }],
    },
    options: {
        title: {
            display: true,
            text: 'Scatter Chart',
        },
        scales: {
            xAxes: [{
                display: true,
                type: 'linear',
                ticks: {
                    beginAtZero: true,
                },
            }],
            yAxes: [{
                display: true,
                type: 'linear',
                ticks: {
                    beginAtZero: true,
                },
            }],
        },
    }
}

var bernard = document.getElementById('scatterChart');
var newChart = new Chart(bernard, config2);



$(document).ready(function() {
    //$('#tort').innerHTML += 'no.';
    $('#departments').find('option[value=1]').attr('selected', 'selected')
})


    var schools = [{
            name: 'ALL',
            data: [0],
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
            name: 'L&S HUMANITIES',
            data: [9, 11, 19, 25, 28, 30, 48, 54, 57, 63, 75, 78, 80, 90, 94, 97, 104, 106, 109, 111, 115],
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
            data: [6, 8, 32, 40, 51, 53, 89, 114],
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
/*
    'INSTITUTE OF AMERICAN CULTURES', 23
    'INTERNATIONAL INSTITUTE', 73, 92
    'L&S GENERAL', 67
    'L&S HUMANITIES', 9, 11, 19, 25, 28, 30, 48, 54, 57, 63, 75, 78, 80, 90, 94, 97, 104, 106, 109, 111, 115
    'L&S LIFE SCIENCES', 41, 43, 67, 72, 79, 87, 88, 93, 101
    'L&S PHYSICAL SCIENCES', 12, 21, 42, 65, 70, 83, 98, 100, 110
    'L&S SOCIAL SCIENCES', 1, 2, 3, 5, 7, 10, 16, 22, 26, 44, 55, 56, 58, 61, 66, 71, 74, 86, 91, 99, 108
    'L&S UNDERGRADUATE EDUCATION', 46, 62
    'LUSKIN SCHOOL OF PUBLIC AFFAIRS (LSPA)', 34, 81, 103, 105, 107, 113
    'SCHOOL OF ARTS & ARCHITECTURE (SOAA)', 6, 8, 32, 40, 51, 53, 89, 114
    'SCHOOL OF DENTISTRY', 36, 37, 38, 39
    'SCHOOL OF LAW', 77
    'SCHOOL OF NURSING', 95
    'SCHOOL OF THEATER, FILM & TELEVISION (STFT)', 35, 52, 112

 */

//var opts = $('#departments option');
//document.getElementById('departments').getElementsByTagName('option');

for (i=1; i<100; i++) {
    //document.getElementsByTagName('div')[i].style('display', 'none')
}
