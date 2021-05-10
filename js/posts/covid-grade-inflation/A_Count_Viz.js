let scale = .001;
let ACount = [54918, 61803, 76458];
/*Thoughts: 
    Plot at x = Total Classes Covid
    Plot at y = Total Classes Non-Covid
    Two circles: Center circle radius = ACount Non-Covid
                Outer circel radius = ACount Covid
*/
let Classes = [134048, 122793, 126290];
let COVIDACount = [80000, 72000, 45000];
let COVIDClasses = [135000, 123000, 126000];
let Colors = ['red', 'blue', 'green'];
let COVIDColors = ['pink', 'purple', 'yellow']
let Quarters = ['Fall', 'Winter', 'Spring'];
let datasets = [];
/*
for (let i = 0; i < ACount.length; ++i) {
    let data = {
        label: Quarters[i],
        data: [{
            x: COVIDClasses[i],
            y: Classes[i],
            r: scale * ACount[i]
        }, {
            x: COVIDClasses[i],
            y: Classes[i],
            r: scale * COVIDACount[i]
        }],
        backgroundColor: [Colors[i],
        COVIDColors[i]]
    }
    datasets.push(data);
}*/
const dataAs = {
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
                r: scale * Classes[0]
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
                r: scale * Classes[1]
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
                r: scale * Classes[2]
            }],
            backgroundColor: [
                'rgba(122,43,132,1)',
                'rgba(122,43,132,.5)'
            ],
        }
        ]
}

var ctxBubble = document.getElementById('bubble-chart').getContext('2d');
var BubbleChart = new Chart(ctxBubble, {
    type: 'bubble',
    data: dataAs,
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