var years = ['2010-2011','2011-2012','2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019'];

var colors = ['rgba(255, 0, 0)', 'rgba(0, 255, 0)', 'rgba(0, 0, 255)', 'rgba(255, 0, 0)', 'rgba(0, 255, 0)', 'rgba(0, 0, 255)', 'rgba(255, 0, 0)', 'rgba(0, 255, 0)', 'rgba(0, 0, 255)'];

var female = {
    title: 'Female',
    color: '#CC79A7',
}

var male = {
    title: 'Male',
    color: '#56B4E9',
}

var genders = [female, male];

var white = {
    title: 'White',
    color: '#E69F00',
}

var asian = {
    title: 'Asian/Asian American or Pacific Islander',
    color: '#D55E00',
}

var chicano = {
    title: 'Chicano(a)/Latina(o)/Hispanic',
    color: '#0072B2',
}

var black = {
    title: 'Black or African-American',
    color: '#F0E442',
}

var indian = {
    title: 'American Indian or Alaskan Native',
    color: '#009E73',
}

var two = {
    title: 'Two or More Races',
    color: '#0077bb'
}

var unknown = {
    title: 'Unknown',
    color: '#ddcc77'
}

var total = {
    title: 'Total',
    color: '#E69F00',
};


var races = [white, asian, chicano, black, indian, two, unknown];

var config = {
    type: 'bar',
    data: {
        labels: years,
        datasets: [{
            label: 'line',
            type: 'line',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 1],
            yAxisID: 'axis-1',
            fill: false,
            borderColor: 'rgba(0, 0, 0)',
        }, {
            label: 'bar',
            type: 'bar',
            backgroundColor: '#FFC20A',
            data: [10, 3, 3, 4, 5, 6, 7, 8, 4],
            yAxisID: 'axis-2',
            stack: 'stack-1',
        }, {
            label: 'bar1',
            type: 'bar',
            backgroundColor: 'rgba(0, 0, 255, .5)',
            data: [4, 5, 6, 6, 8, 5, 7, 0, 1],
            yAxisID: 'axis-2',
            //stack: 'stack-1',
            }],
    },
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

d3.csv('/datasets/professor-demographics/professor-demographics.csv')
    .get(function(data) {
    var categories = [];
    for (i=0; i<data.length/10; i++)
        d3.select('#departments').append('option').html(data[10*i].Year.toUpperCase());
    
    
    document.getElementById('departments').addEventListener('change', function() {
        const temp = (this.selectedIndex*10);
        
        var opt;
        
        if (document.getElementById('what').selectedIndex == 0) {
            opt = genders;
        } else {
            opt = races;
        }
        
        for (i=0; i<opt.length; i++) {
            opt[i].data = [];
        }

        
        female.data = [];
        male.data = [];
        indian.data = [];
        asian.data = [];
        black.data = [];
        chicano.data = [];
        two.data = [];
        unknown.data = [];
        white.data = [];
        total.data = [];
        
        
        for (i=1; i<11; i++) {
            female.data.push(data[temp + i].F);
            male.data.push(data[temp + i].M);
            indian.data.push(data[temp + i].AI);
            asian.data.push(data[temp + i].A);
            black.data.push(data[temp + i].B);
            chicano.data.push(data[temp + i].L);
            two.data.push(data[temp + i].TW);
            unknown.data.push(data[temp + i].U);
            white.data.push(data[temp + i].W);
            total.data.push(data[temp + i].T);
        }
                
        var pork = {
            labels: years,
            datasets: [{
                type: 'line',
                label: 'Total',
                data: total.data,
                //yAxisID: 'axis-1',
                fill: false,
                borderColor: 'rgba(0, 0, 0)',
            }],
        };
        
        for (i=0; i<opt.length; i++) {
            pork.datasets.push({
                type: 'bar',
                label: opt[i].title,
                backgroundColor: opt[i].color,
                data: opt[i].data,
                stack: 'stack-1',
                borderWidth: 1,
        });
        }
        
        myDem.data = pork;
        myDem.update();
        }
    )
});



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



d3.csv('/datasets/professor-demographics/professor-demographics.csv')
    .get(function(data) {
        
        //document.getElementById('departments').addEventListener('change', function() {
            const temp = (this.selectedIndex*10 + 10);
            var a = [1, 2, 4, 5, 6];
            
            for (i=0; i<5; i++) {
                d3.select('#people')
                    .data(a)
                    .enter().append('circle')
                    .append('circle')
                    .attr('r', '40px')
                    .attr('fill', 'black')
            }
            
            
            
        //})
        
        
})

var california = d3.select('#california').selectAll('circle');

var radius = 12;

for (b=0; b<10; b++) {

    var a = [];
    for (i=0; i<10; i++) {
        a.push(i);
    }


    california.data(a)
        .enter().append('circle')
        .attr('r', radius + 'px')
        .attr('fill', 'red')
        .attr('cx', function(a) {return (a * 30 + 12) + 'px'})
        .attr('cy', function(a) {return (b * 30 + 12) + 'px'})
}

function newDots() {
    var people = d3.select('#people').selectAll('circle');

    for (b=0; b<10; b++) {

        var a = [];
    
        for (i=0; i<10; i++) {
            a.push(i);
        }
    

        people.data(a)
            .enter().append('circle')
            .attr('r', radius + 'px')
            .attr('fill', 'blue')
            .attr('cx', function(a) {return (a * 30 + 12) + 'px'})
            .attr('cy', function(a) {return (b * 30 + 12) + 'px'})
    }
}

newDots();

