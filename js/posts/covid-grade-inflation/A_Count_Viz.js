let scale = .001
let ACount = [54918, 61803, 76458]
let TotalCount = [134048, 122793, 126290]

const data = {
    datasets:
        [{
            label: 'Fall',
            data: [{
                x: 1,
                y: 3,
                r: scale * ACount[0]
            }, {
                x: 1,
                y: 3,
                r: scale * TotalCount[0]
            }],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 0.5)'
            ],
            borderWidth: 1
        }, {
            label: 'Winter',
            data: [{
                x: 3,
                y: 4,
                r: scale * ACount[1]
            }, {
                x: 3,
                y: 4,
                r: scale * TotalCount[1]
            }],
            backgroundColor: [
                'rgba(25, 145, 156, 1)',
                'rgba(25, 145, 156, .5)'
            ],
            borderWidth: 1
        }, {
            label: 'Spring',
            data: [{
                x: 5,
                y: 6,
                r: scale * ACount[2]
            }, {
                x: 5,
                y: 6,
                r: scale * TotalCount[2]
            }],
            backgroundColor: [
                'rgba(122,43,132,1)',
                'rgba(122,43,132,.5)'
            ],
        }
        ]
}

var ctx2 = document.getElementById('test').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'bubble',
    data: data,
    options: {
        scales: {
            x: {
                suggestedMin: 0,
                suggestedMax: 8
            },
            y: {
                suggestedMin: 0,
                suggestedMax: 8
            }
        },
        display: false
    }
});