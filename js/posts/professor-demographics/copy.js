/*
var big_data = [{
    name: 'ALL',
    data: ['AEROSPACE STUDIES', 'AFRICAN AMERICAN STUDIES', 'AMERICAN INDIAN STUDIES', 'ANDERSON', 'ANTHROPOLOGY', 'ARCHITECTURE AND URBAN DESIGN', 'ARCHAEOLOGY', 'ART', 'ART HISTORY', 'ASIAN AMERICAN STUDIES', 'ASIAN LANGUAGES AND CULTURES', 'ATMOSPHERIC AND OCEANIC SCIENCES', 'BIOENGINEERING', 'BIOSTATISTICS', 'CENTER FOR JEWISH STUDIES', 'CHEMICAL AND BIOMOLECULAR ENGINEERING', 'CHEMISTRY AND BIOCHEMISTRY', 'CHICANA/O STUDIES', 'CIVIL AND ENVIORNMENTAL ENGR', 'CLASSICS', 'COMMUNICATION STUDIES', 'COMMUNITY HEALTH SCIENCES', 'COMPARATIVE LITERATURE', 'COMPUTER SCIENCE', 'DENTISTRY', 'DESIGN | MEDIA ARTS', 'EARTH, PLANETARY AND SPACE SCIENCES (EPSS)', 'ECOLOGY AND EVOL BIOLOGY', 'ECONOMICS', 'EDUCATION', 'EDUCATIONAL INITIATIVES', 'ELECTRICAL AND COMPUTER ENGINEERING', 'ENGLISH', 'ENVIRONMENTAL HEALTH SCIENCES', 'EPIDEMIOLOGY', 'ETHNOMUSICOLOGY', 'FILM, TV, AND DIGITAL MEDIA', 'FRENCH AND FRANCOPHONE STUDIES', 'GENDER STUDIES', 'GEOGRAPHY', 'GERMANIC LANGUAGES', 'HEALTH POLICY AND MANAGEMENT', 'HISTORY', 'HONORS PROGRAMS', 'INDO-EUROPEAN STUDIES', 'INFORMATION STUDIES', 'INST FOR RES ON LABOR AND EMPLOYMENT', 'INST FOR SOCIETY AND GENETICS', 'INST OF ENVIRON AND SUSTAINABILITY', 'INT BIOLOGY AND PHYSIOLOGY', 'ITALIAN', 'LAW', 'LESBIAN, GAY AND BISEXUAL STUDIES', 'LIFE SCIENCES CORE CRCLM PRGM', 'LINGUISTICS', 'MATERIALS SCIENCE AND ENGR (MSE)', 'MATHEMATICS', 'MECHANICAL AND AEROSPACE ENGR (MANE)', 'MICROBIOLOGY, IMMUNOLOGY AND MOLECULAR GENETICS (MIMG)', 'MILITARY SCIENCE', 'MINOR IN BIOMEDICAL RESEARCH', 'MOLECULAR, CELL AND DEVELOP BIOLOGY (MCDB)', 'MUSIC', 'MUSICOLOGY', 'NAVAL SCIENCE', 'NEUROSCIENCE INTERDEPARTMENTAL PROG', 'NR EASTERN LANGS AND CULTURES', 'NURSING', 'OCCUPATIONAL AND ENVTL HEALTH CNTR (CTR O&EH)', 'PHILOSOPHY', 'PHYSICS AND ASTRONOMY', 'POLITICAL SCIENCE', 'PROGRAM IN COMPUTING', 'PSYCHOLOGY', 'PUBLIC HEALTH', 'PUBLIC POLICY', 'SCANDANAVIAN SECTION', 'SLAVIC, EAST EUROPEAN AND EURASIAN LANGS', 'SOCIAL WELFARE', 'SOCIOLOGY', 'SPANISH AND PORTUGUESE', 'STATISTICS', 'STUDY OF RELIGION', 'THEATER', 'URBAN PLANNING', 'WORLD ARTS AND CULTURES/DANCE', 'WRITING PROGRAM']
}, {
    name: 'ANDERSON GRADUATE SCHOOL OF MANAGEMENT (AGSM)',
    data: ['ANDERSON'],
}, {
    name: 'BASIC BIOMEDICAL SCIENCES',
    data: ['MICROBIOLOGY, IMMUNOLOGY AND MOLECULAR GENETICS (MIMG)'],
}, {
    name: 'FIELDING SCHOOL OF PUBLIC HEALTH (FSPH)',
    data: ['BIOSTATISTICS', 'COMMUNITY HEALTH SCIENCES', 'ENVIRONMENTAL HEALTH SCIENCES', 'EPIDEMIOLOGY', 'HEALTH POLICY AND MANAGEMENT', 'OCCUPATIONAL AND ENVTL HEALTH CNTR (CTR O&EH)', 'PUBLIC HEALTH'],
}, {
    name: 'GRADUATE SCHOOL OF EDUCATION AND INFO STUDIES (GSEIS)',
    data: ['EDUCATION', 'INFORMATION STUDIES'],
}, {
    name: 'HENRY SAMUELI SCHOOL OF ENGINEERING AND APPLIED SCIENCE (HSSEAS)',
    data: ['BIOENGINEERING', 'CHEMICAL AND BIOMOLECULAR ENGINEERING', 'CIVIL AND ENVIORNMENTAL ENGR', 'COMPUTER SCIENCE', 'ELECTRICAL AND COMPUTER ENGINEERING', 'MATERIALS SCIENCE AND ENGR (MSE)', 'MECHANICAL AND AEROSPACE ENGR (MANE)'],
}, {
    name: 'HERB ALPERT SCHOOL OF MUSIC (HASOM)',
    data: ['ETHNOMUSICOLOGY', 'MUSIC', 'MUSICOLOGY'],
}, {
    name: 'INST OF ENVIORN AND SUSTAINABILITY (IOES)',
    data: ['INST OF ENVIRON AND SUSTAINABILITY'],
}, {
    name: 'LETTERS AND SCIENCE GENERAL',
    data: ['INST FOR SOCIETY AND GENETICS'],
}, {
    name: 'LETTERS AND SCIENCE HUMANITIES',
    data: ['ART HISTORY', 'ASIAN LANGUAGES AND CULTURES', 'CENTER FOR JEWISH STUDIES', 'CLASSICS', 'COMPARATIVE LITERATURE', 'ENGLISH', 'FRENCH AND FRANCOPHONE STUDIES', 'GERMANIC LANGUAGES', 'INDO-EUROPEAN STUDIES', 'ITALIAN', 'LESBIAN, GAY AND BISEXUAL STUDIES', 'LINGUISTICS', 'MUSICOLOGY', 'NR EASTERN LANGS AND CULTURES', 'PHILOSOPHY', 'SCANDANAVIAN SECTION', 'SLAVIC, EAST EUROPEAN AND EURASIAN LANGS', 'SPANISH AND PORTUGUESE', 'STUDY OF RELIGION', 'WRITING PROGRAM'],
}, {
    name: 'LETTERS AND SCIENCE LIFE SCIENCES',
    data: ['ECOLOGY AND EVOL BIOLOGY', 'INT BIOLOGY AND PHYSIOLOGY', 'LIFE SCIENCES CORE CRCLM PRGM', 'MINOR IN BIOMEDICAL RESEARCH', 'MOLECULAR, CELL AND DEVELOP BIOLOGY (MCDB)', 'NEUROSCIENCE INTERDEPARTMENTAL PROG', 'PSYCHOLOGY'],
}, {
    name: 'LETTERS AND SCIENCE PHYSICAL SCIENCES',
    data: ['ATMOSPHERIC AND OCEANIC SCIENCES', 'CHEMISTRY AND BIOCHEMISTRY', 'EARTH, PLANETARY AND SPACE SCIENCES (EPSS)', 'MATHEMATICS', 'PHYSICS AND ASTRONOMY', 'PROGRAM IN COMPUTING', 'STATISTICS'],
}, {
    name: 'LETTERS AND SCIENCE SOCIAL SCIENCES',
    data: ['AEROSPACE STUDIES', 'AFRICAN AMERICAN STUDIES', 'AMERICAN INDIAN STUDIES', 'ANTHROPOLOGY', 'ARCHAEOLOGY', 'ASIAN AMERICAN STUDIES', 'CHICANA/O STUDIES', 'COMMUNICATION STUDIES', 'ECONOMICS', 'GENDER STUDIES', 'GEOGRAPHY', 'HISTORY', 'INST FOR RES ON LABOR AND EMPLOYMENT', 'MILITARY SCIENCE', 'NAVAL SCIENCE', 'POLITICAL SCIENCE', 'SOCIOLOGY'],
}, {
       name: 'LETTERS AND SCIENCE UNDERGRADUATE EDUCATION',
       data: ['EDUCATIONAL INITIATIVES', 'HONORS PROGRAMS'],
}, {
    name: 'LUSKIN SCHOOL OF PUBLIC AFFAIRS (LSPA)',
    data: ['PUBLIC POLICY', 'SOCIAL WELFARE', 'URBAN PLANNING'],
}, {
    name: 'SCHOOL OF ARTS AND ARCHITECTURE (SOAA)',
    data: ['ARCHITECTURE AND URBAN DESIGN', 'ART', 'DESIGN | MEDIA ARTS', 'MUSIC', 'WORLD ARTS AND CULTURES/DANCE'],
}, {
    name: 'SCHOOL OF DENTISTRY',
    data: ['DENTISTRY'],
}, {
    name: 'SCHOOL OF LAW',
    data: ['LAW'],
}, {
    name: 'SCHOOL OF NURSING',
    data: ['NURSING'],
}, {
    name: 'SCHOOL OF THEATER, FILM AND TELEVISION (STFT)',
    data: ['FILM, TV, AND DIGITAL MEDIA', 'THEATER'],
}];

var temp_schools = []
for (i=0; i<dem_by_school.length; i++) {
    temp_schools.push(dem_by_school[i].name)
}
console.log(temp_schools)

//var haha =
*/
// var genders = [female, male];
var genders = [{
    title: 'Female',
    color: '#8A2BE2',
    ca: 50,
}, {
    title: 'Male',
    color: '#BDB76B',
    ca: 50,
}];

//var races = [white, asian, hispanic, black, indian, two, unknown];
var races = [{
    title: 'White',
    color: '#E69F00',
    ca: 38,
    cat: [40, 40, 39, 39, 38, 38, 38, 37, 37]
}, {
    title: 'Asian/Asian American or Pacific Islander',
    color: '#D55E00',
    ca: 14,
    cat: [13, 13, 14, 14, 14, 14, 14, 15, 15]
}, {
    title: 'Chicano(a)/Latina(o)/Hispanic',
    color: '#0072B2',
    ca: 39,
    cat: [38, 38, 38, 38, 39, 39, 39, 39, 39]
}, {
    title: 'Black or African-American',
    color: '#f763f7',
    ca: 6,
    cat: [6, 6, 6, 6, 6, 6, 6, 6, 6]
}, {
    title: 'American Indian or Alaskan Native',
    color: '#009E73',
    ca: 0,
    cat: [0,0,0,0,0,0,0,0,0],
}, {
    title: 'Two or More Races',
    color: '#6073b1',
    ca: 3,
    cat: [3,3,3,3,3,3,3,3,3]
}, {
    title: 'Unknown',
    color: '#ddcc77',
    ca: 0,
    cat: [0,0,0,0,0,0,0,0,0],
}, {
    title: 'Total',
    color: '#E69F00',
    ca: 1,
    cat: [0,0,0,0,0,0,0,0,0]
}];

function updateKey(bool) {
    // true == genders
    // false == race
    if (bool == true) {
        document.querySelector('#race_key').style.display = 'none'
        document.querySelector('#gender_key').style.display = 'flex'
        document.querySelector('#race_option').style.backgroundColor = 'white'
        document.querySelector('#gender_option').style.backgroundColor = 'lightgray'
    } else if (bool == false) {
        document.querySelector('#race_key').style.display = 'flex'
        document.querySelector('#gender_key').style.display = 'none'
        document.querySelector('#race_option').style.backgroundColor = 'lightgray'
        document.querySelector('#gender_option').style.backgroundColor = 'white'
    }
}
updateKey(false);

var years = ['2010-2011','2011-2012','2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019'];
var schools = document.querySelector('#school');
var depts = document.querySelector('#depts');

var school_wrap = document.querySelector('#school_wrap');
var dept_wrap = document.querySelector('#dept_wrap');


var school_list =
[
  "CAMPUSWIDE",
  "ANDERSON GRADUATE SCHOOL OF MANAGEMENT",
  "FIELDING SCHOOL OF PUBLIC HEALTH",
  "GRADUATE SCHOOL OF EDUCATION AND INFO STUDIES",
  "HENRY SAMUELI SCHOOL OF ENGINEERING AND APPLIED SCIENCE",
  "LETTERS AND SCIENCE HUMANITIES",
  "LETTERS AND SCIENCE LIFE SCIENCES",
  "LETTERS AND SCIENCE PHYSICAL SCIENCES",
  "LETTERS AND SCIENCE SOCIAL SCIENCES",
  "LUSKIN SCHOOL OF PUBLIC AFFAIRS",
  "SCHOOL OF ARTS AND ARCHITECTURE",
  "SCHOOL OF DENTISTRY",
  "SCHOOL OF LAW",
  "SCHOOL OF NURSING",
  "SCHOOL OF THEATER, FILM AND TELEVISION"
]

var dept_list =
['AEROSPACE STUDIES', 'AFRICAN AMERICAN STUDIES', 'ANDERSON', 'ANTHROPOLOGY', 'ARCHITECTURE AND URBAN DESIGN', 'ART', 'ART HISTORY', 'ASIAN AMERICAN STUDIES', 'ASIAN LANGUAGES AND CULTURES', 'ATMOSPHERIC AND OCEANIC SCIENCES', 'BIOENGINEERING', 'BIOSTATISTICS', 'CHEMICAL AND BIOMOLECULAR ENGINEERING', 'CHEMISTRY AND BIOCHEMISTRY', 'CHICANA/O STUDIES', 'CIVIL AND ENVIORNMENTAL ENGR', 'CLASSICS', 'COMMUNICATION STUDIES', 'COMMUNITY HEALTH SCIENCES', 'COMPARATIVE LITERATURE', 'COMPUTER SCIENCE', 'DENTISTRY', 'DESIGN | MEDIA ARTS', 'EARTH, PLANETARY AND SPACE SCIENCES (EPSS)', 'ECOLOGY AND EVOL BIOLOGY', 'ECONOMICS', 'EDUCATION', 'ELECTRICAL AND COMPUTER ENGINEERING', 'ENGLISH', 'ENVIRONMENTAL HEALTH SCIENCES', 'EPIDEMIOLOGY', 'ETHNOMUSICOLOGY', 'FILM, TV, AND DIGITAL MEDIA', 'FRENCH AND FRANCOPHONE STUDIES', 'GENDER STUDIES', 'GEOGRAPHY', 'GERMANIC LANGUAGES', 'HEALTH POLICY AND MANAGEMENT', 'HISTORY', 'INDO-EUROPEAN STUDIES', 'INFORMATION STUDIES', 'INST FOR SOCIETY AND GENETICS', 'INST OF ENVIRON AND SUSTAINABILITY', 'INT BIOLOGY AND PHYSIOLOGY', 'ITALIAN', 'LAW', 'LINGUISTICS', 'MATERIALS SCIENCE AND ENGR', 'MATHEMATICS', 'MECHANICAL AND AEROSPACE ENGR ', 'MICROBIOLOGY, IMMUNOLOGY AND MOLECULAR GENETICS', 'MILITARY SCIENCE', 'MOLECULAR, CELL AND DEVELOP BIOLOGY', 'MUSIC', 'MUSICOLOGY', 'NAVAL SCIENCE', 'NR EASTERN LANGS AND CULTURES', 'NURSING', 'OCCUPATIONAL AND ENVTL HEALTH CNTR', 'PHILOSOPHY', 'PHYSICS AND ASTRONOMY', 'POLITICAL SCIENCE', 'PSYCHOLOGY', 'PUBLIC HEALTH', 'PUBLIC POLICY', 'SCANDANAVIAN SECTION', 'SLAVIC, EAST EUROPEAN AND EURASIAN LANGS', 'SOCIAL WELFARE', 'SOCIOLOGY', 'SPANISH AND PORTUGUESE', 'STATISTICS', 'THEATER', 'URBAN PLANNING', 'WORLD ARTS AND CULTURES/DANCE'];

    
var temp_button;
var temp_button2;
/*
for (i=0; i<big_data.length; i++) {
    var temp_button = document.createElement('button')
    temp_button.innerHTML = big_data[i].name;
    temp_button.value = i;
    temp_button.classList.add('menu_item')
    temp_button.onclick = function() {
        depts.innerHTML = ''
        var temp_list = big_data[this.value].data
        for (j=0; j<temp_list.length; j++) {
            var temp_button2 = document.createElement('button');
            temp_button2.innerHTML = temp_list[j]
            temp_button2.onclick = function() {
                display_graph(this.innerHTML, mod, haha)
                document.querySelector('#big_name').innerHTML = this.innerHTML;
            }
            depts.appendChild(temp_button2)
        }
        display_graph(this.innerHTML, mod, dem_by_school);
        document.querySelector('#big_name').innerHTML = this.innerHTML;
    }
    
    schools.appendChild(temp_button);
}
*/
for (i=0; i<school_list.length; i++) {
    var temp_button = document.createElement('option')
    temp_button.innerHTML = school_list[i];
    temp_button.value = i;
    temp_button.onclick = function() {
        //display_graph(this.innerHTML, mod, dem_by_school);
        alert('test')

    }
    schools.appendChild(temp_button)
}
schools.addEventListener('change', function() {
    var string = this.getElementsByTagName('option')[this.selectedIndex].innerHTML
    display_graph(this.selectedIndex-1, mod, dem_by_school, string)
})
    
for (i=0; i<dept_list.length; i++) {
    var temp_button = document.createElement('option')
    temp_button.innerHTML = dept_list[i];
    temp_button.value = i;
    /*
    temp_button.onchange = function() {
        display_graph(this.innerHTML, mod, haha);
        alert('test')
    }
    */
    depts.appendChild(temp_button)
}
depts.addEventListener('change', function() {
    var string = this.getElementsByTagName('option')[this.selectedIndex].innerHTML;
    display_graph(this.selectedIndex-1, mod, haha, string);
})


const config = {
    type: 'bar',
    options: {
        title: {
            fontSize: 20,
            display: true,
        },
        responsive: false,
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
                //stacked: true,
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

var ctx = document.querySelector('#modified');
var mod = new Chart(ctx, config)

function display_graph(index, graph, type, string) {

    var temp = '';
    temp = type[index]
    
    var pork = {
        labels: years,
        datasets: [],
    };
    
    var data, config;

    if (2 == 1) {
        data = temp.genders;
        config = genders;
    } else {
        data = temp.races;
        config = races;
    }
    
    var data1 = []
    for (i=0; i<data.length; i++) {
        var data2 = []
        for (j=0; j<9; j++) {
            //data2.push(data[i][j] / temp.total[j] * 100)
            data2.push(data[i][j])
        }
        data1.push(data2)
    }
    
    for (i=0; i<data1.length; i++) {
        pork.datasets.push({
            type: 'line',
            label: config[i].title,
            borderColor: config[i].color,
            data: data1[i],
            fill: false,
            stack: 'stack-1',
            borderWidth: 3,
            lineTension: .1,
        })
    }
    graph.options.title.text = string;
    graph.data = pork
    graph.update();

}
display_graph(1, mod, dem_by_school, 'CAMPUSWIDE')

function ichange(to) {
    if (to == 'school') {
        dept_wrap.style.display = 'none';
        school_wrap.style.display = 'block';
    } else if (to == 'department'){
        school_wrap.style.display = 'none';
        dept_wrap.style.display = 'block';
    }
}

window.onload = function(){
  setTimeout(function() {document.getElementById('sch').click()}, 300)
};

function updateBalls(bool) {
    var blank = [];
    var blank2 = [];

    // reset balls

    d3.selectAll("#california > circle").remove();
    d3.selectAll("#people > circle").remove();

    var california = d3.select('#california').selectAll('circle');
    var people = d3.select('#people').selectAll('circle');
    
    const radius = 10;

    var toThis = parseInt(document.getElementById('changeYear').value);
    toThis -= 2010;
    
    var config;
    if (bool == true/*document.getElementById('gender').selectedIndex == 1*/) {
        data = dem_by_school[0].genders;
        config = genders;
        for (i=0; i<genders.length; i++) {
            for (j=0; j<genders[i].ca; j++) {
                blank.push(genders[i].color)
            }
        }
    } else {
        data = dem_by_school[0].races;
        config = races;
        for (i=0; i<races.length; i++) {
            for (j=0; j<races[i].cat[toThis]; j++) {
                blank.push(races[i].color)
            }
        }
    }
    
    

    // configuring balls

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
updateBalls(false);


var pie_gender = {
    type: 'pie',
    data: {
        labels: [
            'Male',
            'Female',
        ]
    },
    options: {
        responsive: true,
        legend: {
            display: false,
        }
    }
};


var gender_colors = ['#8A2BE2', '#BDB76B'];
var gender_titles = ['Female', 'Male']
var race_colors = ['#E69F00', '#D55E00', '#0072B2', '#f763f7', '#009E73', '#6073b1', '#ddcc77']
var race_titles = ['White', 'Asian/Asian American/Pacific Islander', 'Chicano(a)/Latina(o)/Hispanic', 'Black or African-American', 'American Indian or Alaskan Native', 'Two or More Races', 'Unknown', ]

var pie_stand = document.querySelector('#pie_stand')

var gen_pie = [{
    data: [dem_by_school[0].genders[0][8], dem_by_school[0].genders[1][8]],
    backgroundColor: gender_colors,
    label: 'Gender'
}];

var dem_pie = [{
    data: [dem_by_school[0].genders[0][8], dem_by_school[0].genders[1][8]],
    backgroundColor: gender_colors,
    label: 'Gender'
}];




for (a=0; a<dem_by_school.length; a++) {
    var plate = document.createElement('div')
    var title = document.createElement('div');
    title.classList.add('title')
    title.innerHTML = dem_by_school[a].name;
    plate.appendChild(title);
    
    var pie_wrapper = document.createElement('div');
    pie_wrapper.classList.add('pie_wrapper');
    
    var wrap = document.createElement('div');
    var wrap2 = document.createElement('div');

    wrap.classList.add('pie');
    wrap2.classList.add('pie');


    var chart = document.createElement('canvas');
    var chart2 = document.createElement('canvas');
    chart2.classList.add('asdf')

    
    var data = dem_by_school[a].genders;
    var data2 = dem_by_school[a].races
    
    var gen_pie = [{
        data: [data[0][8], data[1][8]],
        backgroundColor: gender_colors,
        label: 'Gender'
    }];
    
    var dem_pie = [{
        data: [data2[0][8], data2[1][8], data2[2][8], data2[3][8],data2[4][8],data2[5][8],data2[6][8]],
        backgroundColor: race_colors,
        label: 'Races'
    }];


    var pie_gender = {
        type: 'pie',
        data: {
            labels: gender_titles,
            datasets: gen_pie,
            fontSize: 5,
        },
        options: {
            responsive: false,
            legend: {
                display: false,
            },
            tooltips: {
                tooltipCaretSize: 0,
            }
        }
    };
    var pie_dem = {
        type: 'pie',
        data: {
            labels: race_titles,
            datasets: dem_pie,
        },
        options: {
            responsive: false,
            legend: {
                display: false,
            },
        }
    };


    var pie2 = new Chart(chart, pie_gender)
    var pie3 = new Chart(chart2, pie_dem)
    
    wrap.appendChild(chart)
    wrap2.appendChild(chart2)
    
    //pie_wrapper.appendChild(wrap2)
    //pie_wrapper.appendChild(wrap)
    
    pie_wrapper.appendChild(chart)
    pie_wrapper.appendChild(chart2)


    plate.appendChild(pie_wrapper)
    
    pie_stand.appendChild(plate)


    
}




//var pies = document.querySelector('.pie');
//var ctx = document.querySelector('.gen canvas');
//var pie2 = new Chart(ctx, pie_gender)
/*
var tot = (2237.80 - 1972.50) / 1972.50
var whi = (1453.10 - 1454.80) /1454.80
var ais = (428.2 - 310.7) /310.7
var chi = (150.5 - 113.2) /113.2
var bla = (86.6 - 61.3) /61.3
var ame = (13.7 - 7.5) / 7.5

console.log(tot)
console.log(whi)
console.log(ais)
console.log(chi)
console.log(bla)
console.log(ame)

var fem = (878.6 - 666.3) / 666.3
var mal = (1359.20 - 1306.30) / 1306.30

console.log(fem)
console.log(mal)

var change = [-0.12, 37.82, 32.00, 41.27, 82.67, 31.86, 4.05];


var race_titles = ['White', 'Asian/Asian American or Pacific Islander', 'Chicano(a)/Latina(o)/Hispanic', 'Black or African-American', 'American Indian or Alaskan Native', 'Two or More Races', 'Unknown', ]




var four = document.getElementById('four')
for (a=0; a<dem_by_school.length; a++) {
    var temp = document.createElement('option');
    temp.innerHTML = dem_by_school[a].name;
    four.appendChild(temp);
}


var config2 = {
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
                //stacked: true,
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
    data: {
        datasets: [{
            label: 'one',
            data: change_by_school_1[0]
        }, {
            label: 'twp',
            data: change_by_school_2[0]
        }],
        labels: race_titles,
    },
}

function shift_graph(graph, index) {
    temp = [{
        label: 'one',
        data: change_by_school_1[index]
    }, {
        label: 'twp',
        data: change_by_school_2[index]
    }];
    graph.data.datasets = temp;
    graph.update()
}

var cts = document.querySelector('#change');
var asfd = new Chart(cts, config2)

console.log(dem_by_school)
*/
