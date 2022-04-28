import { UCLA_FILL, GREY_FILL, BLACK_BORDER } from './globals.js';
;
let m_datasets = {}, w_datasets = [];
const years = [...Array(31).keys()].map(y =>{return y + 1990});
// const f_stats = ["points","PPG", "FG_pct","3PT_pct","FT_pct","rebounds","assists","blocks","steals"];
// const m_stats = ["PPG", "FG_pct","2PT_PCT", "3PT_pct","FT_pct","rebounds","assists","blocks","steals","mins_played"];

// create dropdown for m and f

// groups array by some property
function groupBy(arr,property){
    return arr.reduce(function(memo,x){
        if (!memo[x[property]]) { memo[x[property]] = []; }
        memo[x[property]].push(x);
        return memo;
    }, {});
}

// load male and female data with d3 --> split by stat into object (dict) display based on dropdown
d3.csv('/datasets/sports-records/ncaa_mbb_records.csv')
    .then(data => {
        // console.log(data);
        let grouped_data = groupBy(data,"stat"); // group data by stat
        console.log("groupeddata",grouped_data);
        // should be object (dict) instead of array
        for (const stat in grouped_data){
            m_datasets[stat] = grouped_data[stat].map(row => { // year v. stat value
                return {
                  x: parseInt(row["season"]), // convert to int
                  y: parseFloat(row["stat_value"]), // convert to int
                //   title: row["player"] + " - " + row["school"],
                //   school: row["school"]
                }
              })
            // m_datasets.push(
            //     {
            //         label: stat, // stat name
            //         data: grouped_data[stat].map(row => { // year v. stat value
            //             return {
            //               x: parseInt(row["season"]), // convert to int
            //               y: parseFloat(row["stat_value"]), // convert to int
            //             //   title: row["player"] + " - " + row["school"],
            //             //   school: row["school"]
            //             }
            //           }),
            //         borderColor: BLACK_BORDER,
            //         backgroundColor: GREY_FILL // blue for UCLA
            //     }
            // );
        }; // format m_datasets for chart
        console.log("m_datasets",m_datasets);
        // initially PPG stats
        let stat = "PPG"
        const [stat_range, year_range] = getRanges(m_datasets[stat]);
        console.log('ranges2',stat_range,year_range);
        generateBB(m_datasets,'Individual Men\'s Basketball Records',stat,stat_range,year_range) // generate mbb
    });

function getRanges(dataset){
    let y = Math.min(...dataset.map(row => row.y));
    console.log('test map',y);
    let stat_range = [Math.round(Math.min(...dataset.map(row => row.y)) * (1/1.2)),Math.round(Math.max(...dataset.map(row => row.y)) * 1.2)]; // get min and max from y
    let year_range = [Math.min(...dataset.map(row => row.x)) - 5, Math.max(...dataset.map(row => row.x)) + 5];
    console.log('ranges',[stat_range,year_range])
    return [stat_range,year_range]
};

function generateBB(datasets,title,stat,stat_range,year_range){
    // format data for scatter chart
    const formatted_data = {      
        datasets: [{
            label: stat,
            data: datasets[stat],
            backgroundColor: GREY_FILL
          }],
    };

    console.log("params",formatted_data,title,stat_range,year_range)
    let config_m = {
        type: 'scatter',
        data: formatted_data,
        options: {
            responsive: true,
            title: {
                display: true,
                text: title
            }, // title
            scales: {
                yAxes: [
                {
                    ticks: {
                        min: stat_range[0],
                        max: stat_range[1],
                        stepSize: (stat_range[1] - stat_range[0])/10,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: stat,
                    },
                },
                ],
                xAxes: [
                {
                    ticks: {
                    min: year_range[0],
                    max: year_range[1],
                    stepSize: 5,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Year (Season Start)',
                    },
                },
                ],
            }, // scales
            animation: false
        }
    };

    //   render charts using configs

    const mbb_chart = new Chart(
        document.getElementById('men-bb-chart'),
        config_m
    );
};


// const wbb_chart = new Chart(
//     document.getElementById('women-bb-chart'),
//     config_w
// );