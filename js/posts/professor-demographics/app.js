var years = ['', '2010-2011','2011-2012','2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019'];

var under;

var config = {
    type: 'line',
    data: {
        labels: ['American Indian','Asian','Black','Latino','2+','Unknown','White','Total'],
        datasets: [{
            label: 'Race',
            data: [1,2,3,4,5,6,7,8],
        }],
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: 'Race'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}


var ctx = document.getElementById('raceChart');
var myDem = new Chart(ctx, config);


var graph = document.getElementById('numbers')
d3.csv('/datasets/professor-demographics/professor-demographics.csv', function(data) {
    console.log(data);
    var categories = [];
    for (i=0; i<data.length/10; i++)
        d3.select('#departments').append('option').html(data[10*i].Year.toUpperCase());
    
    
    
    document.getElementById('departments').addEventListener('change', function() {
        var fem = [];
        var mal = [];
        var ind = [];
        var ais = [];
        var bla = [];
        var lat = [];
        var two = [];
        var unk = [];
        var whi = [];
        var tot = [];
        
        const temp = (this.selectedIndex*10);
        
        for (i=0; i<10; i++) {
            fem.push(data[temp + i].F);
            mal.push(data[temp + i].M);
            ind.push(data[temp + i].AI);
            ais.push(data[temp + i].A);
            bla.push(data[temp + i].B);
            lat.push(data[temp + i].L);
            two.push(data[temp + i].TW);
            unk.push(data[temp + i].U);
            whi.push(data[temp + i].W);
            tot.push(data[temp + i].T);
        }
        
        var gen = [fem, mal, tot];
        var rac = [ind, ais, bla, lat, two, unk, whi, tot];
        var opt;
        
        if (document.getElementById('what').selectedIndex == 0) {
            opt = gen;
        } else {
            opt = rac;
        }
        
        var pork = {
            labels: years,
            datasets: [],
        };
        
        for (i=0; i<opt.length; i++) {
            pork.datasets.push({label: 'test', data: opt[i]})
        }
        
        myDem.data = pork;
        myDem.update();
        console.log(pork.datasets)
        }
    )
});


document.getElementById('test').addEventListener('click', function() {
    alert(tot[0]);
})


var el = document.getElementsByClassName('author')[0]
var wrapper = document.createElement('marquee');
el.parentNode.insertBefore(wrapper, el);
wrapper.appendChild(el);
wrapper.setAttribute('scrollamount', 20);
wrapper.setAttribute('direction', 'right');

