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
    color: '#f763f7',
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

d3.csv('/datasets/professor-demographics/professor-demographics-updated.csv')
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


/*

var stdData = [{'data': 0.48401022561698115, 'name': 'ALL', 'total': 2237.8}, {'data': 1.4899999999999998, 'name': 'AEROSPACE STUDIES', 'total': 0.0}, {'data': 0.8009009484607423, 'name': 'AFRICAN AMERICAN STUDIES', 'total': 10.0}, {'data': 1.1079206064400582, 'name': 'AMERICAN INDIAN STUDIES', 'total': 1.0}, {'data': 0.7095330465486968, 'name': 'ANDERSON', 'total': 116.0}, {'data': 0.39914460480379493, 'name': 'ANTHROPOLOGY', 'total': 37.8}, {'data': 0.646078911965503, 'name': 'ARCHITECTURE & URBAN DESIGN', 'total': 30.9}, {'data': 1.4899999999999998, 'name': 'ARCHAEOLOGY', 'total': 0.0}, {'data': 0.5428085075517749, 'name': 'ART', 'total': 18.5}, {'data': 0.4283546459132398, 'name': 'ART HISTORY', 'total': 16.0}, {'data': 1.0942138407438535, 'name': 'ASIAN AMERICAN STUDIES', 'total': 12.0}, {'data': 0.5670283396777552, 'name': 'ASIAN LANGUAGES AND CULTURES', 'total': 46.9}, {'data': 0.7752464998458239, 'name': 'ATMOSPHERIC AND OCEANIC SCIENCES', 'total': 17.8}, {'data': 0.8312493309526099, 'name': 'BIOENGINEERING', 'total': 12.7}, {'data': 0.52959598564545, 'name': 'BIOSTATISTICS', 'total': 13.0}, {'data': 1.4899999999999998, 'name': 'CA CENTER FOR POPULATION RESEARCH', 'total': 0.0}, {'data': 0.4412539397733914, 'name': 'CANCER PREVENTION & CONTROL RES', 'total': 3.0}, {'data': 1.133920606440058, 'name': 'CENTER FOR JEWISH STUDIES', 'total': 0.5}, {'data': 0.6761738172626516, 'name': 'CHEMICAL AND BIOMOLECULAR ENGINEERING', 'total': 12.7}, {'data': 0.6628589991470706, 'name': 'CHEMISTRY AND BIOCHEMISTRY', 'total': 60.3}, {'data': 0.6425484552870233, 'name': 'CHICANA/O STUDIES', 'total': 16.1}, {'data': 1.0994998258849593, 'name': 'CHICANO STUDIES RESEARCH CENTER', 'total': 1.0}, {'data': 0.7358042422061669, 'name': 'Civil & Enviornmental Engr', 'total': 23.8}, {'data': 0.6000692642888833, 'name': 'Classics', 'total': 15.9}, {'data': 0.7182504990469374, 'name': 'Communication Studies', 'total': 19.6}, {'data': 0.47614550925190746, 'name': 'Community Health Sciences', 'total': 16.7}, {'data': 0.4510960450365493, 'name': 'Comparative Literature', 'total': 11.4}, {'data': 0.871708369317495, 'name': 'Computer Science', 'total': 37.6}, {'data': 1.3442138407438533, 'name': 'Dean, Div of Humanities', 'total': 1.0}, {'data': 1.1079206064400582, 'name': 'Dean, GSE&IS', 'total': 1.0}, {'data': 1.4899999999999998, 'name': 'Dean, HASOM', 'total': 0.0}, {'data': 0.8293697413015584, 'name': 'Dean, HSSEAS', 'total': 3.4}, {'data': 1.133920606440058, 'name': 'Dean, LSPA', 'total': 1.7}, {'data': 1.133920606440058, 'name': 'Dean, STFT', 'total': 1.0}, {'data': 0.8996256054497357, 'name': 'Dental Clinic', 'total': 1.7}, {'data': 0.5035959856454499, 'name': 'Dental Clinic-Off Campus', 'total': 2.6}, {'data': 1.3702138407438533, 'name': 'Dental Research Inst', 'total': 1.0}, {'data': 0.5607757554233264, 'name': 'Dentistry', 'total': 104.1}, {'data': 0.5332441968533347, 'name': 'Design | Media Arts', 'total': 14.0}, {'data': 1.4899999999999998, 'name': 'Duchenne Musc Dyst Research Cntr (DMD Center)', 'total': 0.0}, {'data': 0.7738536128553883, 'name': 'Earth, Planetary & Space Sciences (EPSS)', 'total': 24.2}, {'data': 0.6134435160127598, 'name': 'Ecology & Evol Biology', 'total': 33.2}, {'data': 0.6923495554155021, 'name': 'Economics', 'total': 44.2}, {'data': 0.28984193903014444, 'name': 'Education', 'total': 70.3}, {'data': 0.7715860600871371, 'name': 'Educational Initiatives', 'total': 3.1}, {'data': 0.8417835716704487, 'name': 'Electrical and Computer Engineering', 'total': 51.6}, {'data': 0.44178819242704087, 'name': 'English', 'total': 63.3}, {'data': 0.791978483968043, 'name': 'Environmental Health Sciences', 'total': 8.8}, {'data': 0.5625693930589524, 'name': 'Epidemiology', 'total': 16.0}, {'data': 0.4875169365759817, 'name': 'Ethnomusicology', 'total': 25.1}, {'data': 0.4628963048823878, 'name': 'Film, TV, & Digital Media', 'total': 39.8}, {'data': 1.4899999999999998, 'name': 'Fowler Museum', 'total': 0.0}, {'data': 0.7134911434821664, 'name': 'French and Francophone Studies', 'total': 11.8}, {'data': 0.8081438615293373, 'name': 'Gender Studies', 'total': 15.8}, {'data': 0.5824961973262492, 'name': 'Geography', 'total': 25.5}, {'data': 0.4610612597148409, 'name': 'Germanic Languages', 'total': 8.8}, {'data': 1.1079206064400582, 'name': 'Getty Convservation Program', 'total': 1.0}, {'data': 0.5917543372794782, 'name': 'Health Policy & Management', 'total': 21.8}, {'data': 1.1079206064400582, 'name': 'Health Policy Research Center', 'total': 1.0}, {'data': 0.5760693930589523, 'name': 'History', 'total': 64.0}, {'data': 1.1079206064400582, 'name': 'Honors Programs', 'total': 1.5}, {'data': 0.8398029593812346, 'name': 'Indo-European Studies', 'total': 1.7}, {'data': 0.5888378306932603, 'name': 'Information Studies', 'total': 16.5}, {'data': 1.133920606440058, 'name': 'Institute for Pure & Applied Math', 'total': 1.0}, {'data': 0.7204204323250172, 'name': 'Inst for Res on Labor & Employment', 'total': 2.5}, {'data': 0.7794288486476474, 'name': 'Inst for Society & Genetics', 'total': 9.2}, {'data': 1.4899999999999998, 'name': 'Inst for Technology Advancement', 'total': 0}, {'data': 0.4200693930589523, 'name': 'Inst of Environ & Sustainability', 'total': 12.5}, {'data': 1.4899999999999998, 'name': 'Inst for Geophysics & Planetary Physics', 'total': 0.0}, {'data': 1.4899999999999998, 'name': 'Institute for Archaeology', 'total': 0}, {'data': 0.5071166065020487, 'name': 'Int Biology & Physiology', 'total': 24.5}, {'data': 0.8418090394731818, 'name': 'Interdepartmental Degree Programs (IDPs)', 'total': 2.0}, {'data': 1.4899999999999998, 'name': 'Interdepartmental Program - Social Sciences', 'total': 0}, {'data': 0.5414056336245894, 'name': 'Italian', 'total': 5.9}, {'data': 1.4899999999999998, 'name': 'Joint Inst Reg Earth Syst Sci/Engr (JIFRESSE)', 'total': 0.0}, {'data': 0.5168016874529064, 'name': 'Law', 'total': 94.2}, {'data': 1.4899999999999998, 'name': 'Lesbian, Gay & Bisexual Studies', 'total': 0.0}, {'data': 0.581572803348295, 'name': 'Life Sciences Core Crclm Prgm', 'total': 7.3}, {'data': 0.40953634583600057, 'name': 'Linguistics', 'total': 24.1}, {'data': 1.5105951987293285, 'name': 'Luskin Cntr for Innovation', 'total': 1.0}, {'data': 0.6882315746844493, 'name': 'Materials Science & Engr (MSE)', 'total': 14.2}, {'data': 0.8496922127581594, 'name': 'Mathematics', 'total': 93.5}, {'data': 0.8753275840575696, 'name': 'Mechanical & Aerospace Engr (MANE)', 'total': 38.8}, {'data': 0.675344973499701, 'name': 'Microbiology, Immunology & Molecular Genetics (MIMG)', 'total': 28.5}, {'data': 1.4899999999999998, 'name': 'Military Science', 'total': 0.0}, {'data': 0.4672539397733914, 'name': 'Minor in Biomedical Research', 'total': 3.0}, {'data': 0.4197058757553401, 'name': 'Molecular, Cell & Develop Biology (MCDB)', 'total': 28.0}, {'data': 0.6991849781017174, 'name': 'Music', 'total': 39.9}, {'data': 0.5759125499077179, 'name': 'Musicology', 'total': 14.8}, {'data': 1.4899999999999998, 'name': 'Naval Science', 'total': 0.0}, {'data': 1.133920606440058, 'name': 'Nazarian Center for Israel Studies (NCIS)', 'total': 0.8}, {'data': 1.133920606440058, 'name': 'Neuroscience Interdepartmental Prog', 'total': 0.8}, {'data': 0.6402096827204068, 'name': 'Nr Eastern Langs & Cultures', 'total': 24.5}, {'data': 0.7140641520402476, 'name': 'Nursing', 'total': 60.1}, {'data': 0.8702138407438533, 'name': 'Occupational & Envtl Health Cntr (CTR O&EH)', 'total': 2.0}, {'data': 0.8103911946753524, 'name': 'Philosophy', 'total': 25.5}, {'data': 0.8854848081551276, 'name': 'Physics & Astronomy', 'total': 67.8}, {'data': 0.701052229010446, 'name': 'Political Science', 'total': 45.3}, {'data': 0.47831393436339864, 'name': 'Program in Computing', 'total': 7.8}, {'data': 0.43949342154288573, 'name': 'Psychology', 'total': 70.2}, {'data': 0.8815158051693863, 'name': 'Public Health', 'total': 0.8}, {'data': 0.5962153135438646, 'name': 'Public Policy', 'total': 12.8}, {'data': 0.6411344471839113, 'name': 'Scandanavian Section', 'total': 4.0}, {'data': 1.4899999999999998, 'name': 'School-wide Programs, LSPA', 'total': 0.0}, {'data': 0.7209004205540019, 'name': 'Slavic, East European & Eurasian Langs', 'total': 11.7}, {'data': 0.5850693930589522, 'name': 'Social Welfare', 'total': 20.0}, {'data': 0.4614230604182285, 'name': 'Sociology', 'total': 36.0}, {'data': 0.26866464486745195, 'name': 'Spanish & Portuguese', 'total': 31.6}, {'data': 0.6344757061398484, 'name': 'Statistics', 'total': 22.5}, {'data': 0.7833224714566009, 'name': 'Study of Religion', 'total': 1.1}, {'data': 0.44609738992014425, 'name': 'Theater', 'total': 34.8}, {'data': 0.4698107269943208, 'name': 'Urban Planning', 'total': 18.5}, {'data': 0.35725700059071874, 'name': 'World Arts & Cultures/Dance', 'total': 23.2}, {'data': 0.6819569079262786, 'name': 'Writing Program', 'total': 39.9}];





var config2 = {
    type: 'scatter',
    data: {
        datasets: getStdData(stdData),
    },
    options: {
        title: {
            display: true,
            text: 'Scatter Chart',
        },
        legend: {
            display: true,
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

function getStdData(data) {
    var big = [];
    var medium = [];
    var small = [];
    var deptSize;

    for (i=1; i<data.length; i++) {
        deptSize = data[i]['total']
        if (deptSize > 60) {
            big.push({
                x: data[i]['data'],
                y: data[i]['total'],
            })
        } else if (deptSize > 30) {
            medium.push({
                x: data[i]['data'],
                y: data[i]['total'],
            })
        } else {
            small.push({
                x: data[i]['data'],
                y: data[i]['total'],
            })
        }
    }
    return [{
        data: big,
        label: 'Big Departments',
        backgroundColor: 'rgba(255, 0, 0)',
    }, {
        data: medium,
        label: 'Medium Departments',
        backgroundColor: 'rgba(0, 255, 0)',
    }, {
        data: small,
        label: 'Small Departments',
        backgroundColor: 'rgba(0, 0, 255)',
    }]
}

//getStdData(stdData);



/*
$(document).ready(function() {
    $('#departments').find('option[value=1]').attr('selected', 'selected')
})


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


 */

//var opts = $('#departments option');
//document.getElementById('departments').getElementsByTagName('option');

//var schools = d3.csv('/datasets/professor-demographics/school-demographics.csv').then(function(data) {return data});
//console.log(schools['name'])



/*
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
    console.log('head')
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("mytable");
console.log(table)
let data = Object.keys(female[0]);
generateTableHead(table, data);
generateTable(table, mountains);
*/

var female = [
  { Department: "L&S Life Sciences", PercentChange: "31.39%"},
  { Department: "School of Arts & Architecture (SOAA)", PercentChange: "30.23%"},
  { Department: "L&S Social Sciences", PercentChange: "24.88%"},
  { Department: "Luskin School of Public Affairs (LSPA)", PercentChange: "21.48%"},
  { Department: "Henry Samueli School of Engineering & Applied Science (HSSEAS)" , PercentChange: "20.86%"}
];
var femaleHeader = ["Department", "Percent Change in Female Proportion"];

function addTable(data, header) {

  var table = document.createElement('TABLE');

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  // create header
  var tr = document.createElement('TR');
  tableBody.appendChild(tr);
  for (word of header) {
    var tdHead = document.createElement('TH');
    tdHead.appendChild(document.createTextNode(word));
    tr.appendChild(tdHead);
  }
  // create table body
  for (let element of data) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (key in element) {
      var td = document.createElement('TD');
      td.appendChild(document.createTextNode(element[key]));
      tr.appendChild(td);
    }
  }
  femaleTable.appendChild(table);
}
var femaleTable = document.getElementById("table");
var originalHTML = femaleTable.innerHTML;
addTable(female, femaleHeader);

function updateTables(){
  femaleTable.innerHTML = originalHTML;
  if (document.getElementById('tableChoice').selectedIndex == 0) {
    addTable(female, femaleHeader);
  } else if (document.getElementById('tableChoice').selectedIndex == 1) {
    var americanIndian = [
      { Department: "L&S Social Sciences", PercentChange: "73.97%"},
      { Department: "School of Nursing", PercentChange: "51.97%"},
      { Department: "Luskin School of Public Affairs (LSPA)", PercentChange: "3.70%"},
      { Department: "School of Law", PercentChange: "1.06%"},
      { Department: "Henry Samueli School of Engineering & Applied Science (HSSEAS)" , PercentChange: "0.21%"}
    ];
    var americanHeader = ["Department", "Percent Change in American Indian Proportion"];
    addTable(americanIndian, americanHeader);
  } else if (document.getElementById('tableChoice').selectedIndex == 2) {
    var asian = [
      { Department: "School of Theater, FIlm & Television (STFT)", PercentChange: "279.54%"},
      { Department: "Luskin School of Public Affairs (LSPA)", PercentChange: "101.48%"},
      { Department: "School of Nursing", PercentChange: "66.03%"},
      { Department: "L&S Physical Sciences", PercentChange: "55.52%"},
      { Department: "School of Law" , PercentChange: "39.26%"}
    ];
    var asianHeader = ["Department", "Percent Change in Asian Proportion"];
    addTable(asian, asianHeader);
  } else if (document.getElementById('tableChoice').selectedIndex == 3) {
    var black = [
      { Department: "L&S Physical Sciences", PercentChange: "161.33%"},
      { Department: "School of Theater, FIlm & Television (STFT)", PercentChange: "104.37%"},
      { Department: "L&S Humanities", PercentChange: "47.44%"},
      { Department: "Luskin School of Public Affairs (LSPA)", PercentChange: "46.57%"},
      { Department: "School of Law" , PercentChange: "21.70%"}
    ];
    var blackHeader = ["Department", "Percent Change in Black Proportion"];
    addTable(black, blackHeader);
  } else {
    var latino = [
      { Department: "School of Nursing", PercentChange: "47.07%"},
      { Department: "School of Dentistry", PercentChange: "44.37%"},
      { Department: "School of Law", PercentChange: "40.18%"},
      { Department: "L&S Humanities", PercentChange: "34.47%"},
      { Department: "L&S Life Sciences" , PercentChange: "30.89%"}
    ];
    var latinoHeader = ["Department", "Percent Change in Latino Proportion"];
    addTable(latino, latinoHeader);
  }
}

document.getElementById('tableChoice').addEventListener('change', function() {
    updateTables();
})
