import { UCLA_FILL, GREY_FILL, BLACK_BORDER } from './globals.js';

console.log("basketball js");
var m_datasets = [], w_datasets = [];
const years = [...Array(31).keys()].map(y =>{return y + 1990});
// const f_stats = ["points","PPG", "FG_pct","3PT_pct","FT_pct","rebounds","assists","blocks","steals"];
// const m_stats = ["PPG", "FG_pct","2PT_PCT", "3PT_pct","FT_pct","rebounds","assists","blocks","steals","mins_played"];

// groups array by some property
function groupBy(arr,property){
    return arr.reduce(function(memo,x){
        if (!memo[x[property]]) { memo[x[property]] = []; }
        memo[x[property]].push(x);
        return memo;
    }, {});
}

// load male and female data with d3 --> split by stat into object
d3.csv('/datasets/sports-records/ncaa_mbb_records.csv')
    .then(data => {
        console.log(data);
        let grouped_data = groupBy(data,"stat"); // group data by stat
        for (const stat in grouped_data){
            m_datasets.push(
                {
                    label: stat, // stat name
                    data: grouped_data[stat].map(row => { // year v. stat value
                        return {
                          x: row["season"],
                          y: row["stat_value"],
                          title: row["player"] + " - " + row["school"],
                          school: row["school"]
                        }
                      }),
                    borderColor: BLACK_BORDER,
                    backgroundColor: GREY_FILL // blue for UCLA
                }
            );
        } // format m_datasets for chart
        console.log(m_datasets);
    }
    );

const m_data = {
    labels: years, // axis labels (years)
    datasets: m_datasets
};
console.log("chart js data:", m_data);

const config_m = {
    type: 'scatter',
    data: m_data,
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Individual Men\'s Basketball Records'
        }, // title
        scales: {
            yAxes: [
            {
                ticks: {
                    min: 0,
                    max: 100,
                    stepSize: 10,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Stat Value',
                },
            },
            ],
            xAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: 'Year (Season Start)',
                },
            },
            ],
        }, // scales
        animation: {
            duration: 0
        },
        hover: {
            animationDuration: 0
        },
        responsiveAnimationDuration: 0
        },
};

//   render charts using configs

const mbb_chart = new Chart(
    document.getElementById('men-bb-chart'),
    config_m
);

// const wbb_chart = new Chart(
//     document.getElementById('women-bb-chart'),
//     config_w
// );