var config = {
    type: 'bar',
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
            graph.innerHTML = '';
            const temp = (this.selectedIndex - 1)*10;
            for (i=0; i<10; i++)
                    if (document.getElementById('what').selectedIndex == 0)
                graph.innerHTML += (data[temp + i].Year) + '<br>' + (data[temp + i].F) + '<br>' + (data[temp + i].M) + '<br>' + (data[temp + i].T) + '<br><br>';
                    else
                graph.innerHTML += (data[temp + i].Year) + '<br>' + (data[temp + i].AI) + '<br>' + (data[temp + i].A) + '<br>' + (data[temp + i].B) + '<br>' + (data[temp + i].L) + '<br>' + (data[temp + i].TW) + '<br>' + (data[temp + i].U) + '<br>' + (data[temp + i].U) + '<br>' + (data[temp + i].W) + '<br>' + (data[temp + i].T) + '<br><br>';
        }
    )
});

var el = document.getElementsByClassName('author')[0]
var wrapper = document.createElement('marquee');
el.parentNode.insertBefore(wrapper, el);
wrapper.appendChild(el);
wrapper.setAttribute('scrollamount', 20);
wrapper.setAttribute('direction', 'right');

