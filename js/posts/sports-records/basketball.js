import { UCLA_FILL, GREY_FILL, BLACK_BORDER } from './globals.js';
import { dropdownMenu } from './dropdownMenu.js';
let m_datasets = {}, w_datasets = {};
let mbb_chart, wbb_chart;
const men_title = 'Individual Men\'s Basketball Records: ', 
women_title = 'Individual Women\'s Basketball Records: ';
const years = [...Array(31).keys()].map(y =>{return y + 1990});

// dropdown for m and f
const m_stats = ["PPG", "FG_pct","2PT_pct", "3PT_pct","FT_pct","rebounds","assists","blocks","steals","mins_played"];
const f_stats = ["points","PPG", "FG_pct","3PT_pct","FT_pct","rebounds","assists","blocks","steals"];
let m_stat = m_stats[0]; // the stat to sort words by

const onMaleStatClicked = selection => {
    m_stat = selection;
    mbb_chart.destroy(); // clear old chart --> add new data
    let [mctx, config_m] = generateBB(m_datasets, men_title+m_stat,m_stat); // generate new config
    mbb_chart = new Chart(
        mctx,
        config_m
    );
};
d3.select('#mbb-stats-menu').call(dropdownMenu, {
    options: m_stats,
    onOptionClicked: onMaleStatClicked,
    selectedOption: m_stat,
    label: 'Stat: ',
    id: 'mens-bb-stat',
});

// get M context
let mctx = document.getElementById('men-bb-chart');//.getContext("2d");

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
        // console.log("groupeddata",grouped_data);
        // should be object (dict) instead of array
        for (const stat in grouped_data){
            m_datasets[stat] = grouped_data[stat].map(row => { // year v. stat value
                return {
                  x: parseInt(row["season"]), // convert to int
                  y: parseFloat(row["stat_value"]), // convert to int
                  title: row["player"] + " - " + row["school"],
                  school: row["school"]
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

        let [mctx, config_m] = generateBB(m_datasets, men_title + m_stat,m_stat) // get initial config
        mbb_chart = new Chart(
            mctx,
            config_m
        );
    });

// checks if school is UCLA
function isUCLA(data){
    let UCLA_array = [];
    data.forEach(stat => {
        if (stat.school == "UCLA"){
            UCLA_array.push(true)
        }
        else{UCLA_array.push(false)}
    });
    return (UCLA_array);
}

// gets year and stat ranges
function getRanges(dataset){
    let y_min = Math.min(...dataset.map(row => row.y));
    let y_max = Math.ceil(Math.max(...dataset.map(row => row.y)));
    let y_margin = Math.round((y_max - y_min) * 0.05);
    // if stat is percentage, set range to [0,1]
    if (y_max <= 1){
        y_max = 1;
        y_margin = 0;
    }
    let x_min = Math.min(...dataset.map(row => row.x));
    let x_max = Math.max(...dataset.map(row => row.x));
    let x_margin = Math.round((x_max - x_min) * 0.05);
    // console.log('test map',y);
    let stat_range = [y_min - y_margin, y_max]; // get min and max from y
    let year_range = [x_min - x_margin, 2021];
    console.log('ranges',[stat_range,year_range]);
    return [stat_range,year_range]
};

function generateBB(datasets,title,stat){
    // mctx.data.datasets.data = []; // clear chart data before render/update
    console.log("generate",datasets,stat,datasets[stat]);
    const stat_dataset = datasets[stat];
    // get ranges for plot
    const [stat_range, year_range] = getRanges(stat_dataset);
    // get fill for each point
    let UCLA_array = isUCLA(stat_dataset);
    // split datasets by UCLA/non-UCLA
    // console.log("number UCLA", UCLA_array.filter(Boolean).length);
    let split_dataset = [], ucla_dataset = [], non_ucla_dataset = [];
    if (UCLA_array.filter(Boolean).length >= 1){
        for (var i = 0; i < UCLA_array.length; i++){
            // append to UCLA array
            if (UCLA_array[i]){
                ucla_dataset.push(stat_dataset[i]);
            }
            else{
                non_ucla_dataset.push(stat_dataset[i]);
            }
        }
        split_dataset = [{
            label: stat + " (UCLA)",
            data: ucla_dataset,
            backgroundColor: UCLA_FILL,
            borderColor: BLACK_BORDER,
            pointRadius: 5,
            pointHoverRadius: 7,
            player_name: ucla_dataset.map(row => row['title'])
          },
          {
            label: stat + " (Other Schools)",
            data: non_ucla_dataset,
            backgroundColor: GREY_FILL,
            borderColor: BLACK_BORDER,
            pointRadius: 3,
            pointHoverRadius: 4,
            player_name: non_ucla_dataset.map(row => row['title'])
          }
        ];
    }
    else{
        split_dataset = [{
            label: stat,
            data: stat_dataset,
            backgroundColor: GREY_FILL,
            borderColor: BLACK_BORDER,
            player_name: datasets[stat].map(row => row['title'])
          }];
    }

    // format data for scatter chart
    const formatted_data = {      
        datasets: split_dataset,
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
                        // stepSize: (stat_range[1] - stat_range[0])/10,
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
                    // stepSize: 5,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Year (Season Start)',
                    },
                },
                ],
            }, // scales
            // animation: false
            tooltips: {
                callbacks: {
                  title: function(mctx,data) {
                    // console.log("title fn",mctx, data, mctx[0]);
                    // return "title";
                    return data['datasets'][mctx[0].datasetIndex]['player_name'][mctx[0].index];
                  },
                  label: function(mctx) {
                    //   console.log("mctx",mctx);
                    return mctx.value + " " + stat;
                  },
                  afterLabel: function(mctx) {
                    //   console.log("mctx",mctx);
                    return mctx.label + " season";
                  }
                }
            },//tooltips
            plugins: {
                datalabels: {
                    display: false,
                },
                
            }
        }
    };

    // render (or re-render) charts using configs
    return [mctx,config_m];
};


// const wbb_chart = new Chart(
//     document.getElementById('women-bb-chart'),
//     config_w
// );