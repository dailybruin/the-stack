//add CDNs
var chartjs = document.createElement('script');  
chartjs.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js');
document.head.appendChild(chartjs);

//global constants
var SINGLE_BEDROOM  = 2995;
var TWO_BEDROOM     = 4100;

function tuition(answer) {

    if (answer == "IN_STATE")
        return 13239;
    else 
        return 43093;  
}

function application(answer) {
    if (answer == "INTERNATIONAL")
        return 628.50;
    return 136.25;
}

function flights(answer, visits) {
    if (answer == "IN_STATE")
        return 62.83 * visits; 
    else if (answer == "OUT_OF_STATE")
        return 493.50 * visits;
    else
        return 1510.61 * visits;
}
//TODO: Add food

function housing(answer, n_roommates) {
    //roommates start from 1, flatmates start from 0
    if (answer == "HILL")
    {
        if (n_roommates == 1)
            return 14674.08;
        else if (n_roommates == 2)
            return 12012.76;
        else if (n_roommates == 3)
            return 9340.02;
        
        return 0;   //TODO: This is the N/A Case
    }
    else if (answer == "OFFCAMPUS")
    {
        if (n_roommates == 1)
            return 21582;
        else if (n_roommates == 2)
            return 9795.6;
        else if (n_roommates == 3)
            return 7240.28;
        else 
            return 5529.74;
    }    
    else if (answer == "UCLA_OFFCAMPUS")
    {
        if (n_roommates == 1)
            return 12312;
        else if (n_roommates == 2)
            return 9712.44;
        else if (n_roommates == 3)
            return 7980;
        else
            return 4788;
    }  
    // Sanity Check: This should never happen 
    else
        return 0;
}

function groceries(answer)
{
    if (answer == "HILL")
        return 5193;
    
    return 2412;
}

function utilites(answer)
{
    if (answer == "OFFCAMPUS")
        return 554.50;
    
    return 0;
}

//TODO
function commute(answer) {
    if (answer == "YES-CAR")
        return 334; 
    else if (answer == "YES-PT")
        return 10;  //update this value
    return 0;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var form = document.querySelector("form");
var log = document.querySelector("#log");
const button = document.querySelector('button');

let summaryChartDraw = null;

if (form)
{
    form.addEventListener("submit", function(event) {
        var data = new FormData(form);
       
        var output = "";
        var TOTAL_COST = 0;
        
        //tuition
        var tuition_cost = parseFloat(tuition(data.get('student-type')));
        TOTAL_COST += tuition_cost;

        //housing
        var housing_cost = parseFloat(housing(data.get('housing'), data.get('roommates')));
        TOTAL_COST += housing_cost;

        if (housing_cost == 0)
            housing_cost = "N/A: More than 3 roommates is not an option on the Hill";

        //utilites
        var utilites_cost = parseFloat(utilites(data.get('housing')));
        TOTAL_COST += utilites_cost;

        //groceries
        var groceries_cost = parseFloat(groceries(data.get('housing')));
        TOTAL_COST += groceries_cost;

        //insurance
        var insurance_cost = 2516.70;
        TOTAL_COST += insurance_cost;

        //flights
        var flight_cost = parseFloat(flights(data.get('student-type'), data.get('visits')));
        TOTAL_COST += flight_cost;

        //application
        var application_cost = parseFloat(application(data.get('student-type')));
        TOTAL_COST += application_cost;
        
        //commute
        var commute_cost = parseFloat(commute(data.get('commute')));
        output = output + "Commute: $" + commute_cost + "\r";
        TOTAL_COST += commute_cost;

        output = `
        BREAKDOWN OF COST OF ATTENDANCE*
        Tuition:            \$${numberWithCommas(Math.round(tuition_cost))}
        Housing:            \$${numberWithCommas(Math.round(housing_cost))}
        Utilities:          \$${numberWithCommas(Math.round(utilites_cost))}
        Food & Groceries:   \$${numberWithCommas(Math.round(groceries_cost))}
        Cost of Travel:     \$${numberWithCommas(Math.round(flight_cost))}
        Applications:       \$${numberWithCommas(Math.round(application_cost))}
        Insurance:          \$${numberWithCommas(Math.round(insurance_cost))}
        Commute:            \$${numberWithCommas(Math.round(commute_cost))}
        TOTAL COST:         \$${numberWithCommas(Math.round(TOTAL_COST))}
        *(numbers are based on averages, evaluated for each background)
        `

        log.innerText = output;

        let summaryChart = document.getElementById('summaryChart').getContext('2d');

        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';

        if (summaryChartDraw === null) 
        { 
            summaryChartDraw = new Chart(summaryChart, {
                type: 'horizontalBar', //bar, pie, horizontalbar, etc
                data: {
                    labels:['Total Costs'],
                    datasets:[
                        {
                            label: 'Tuition',
                            data: [tuition_cost],
                            backgroundColor: '#fbe19d'
                        },
                        {
                            label: 'Housing',
                            data: [housing_cost],
                            backgroundColor: '#f9d16b' 
                        },
                        {
                            label: 'Utilities',
                            data: [utilites_cost],
                            backgroundColor: '#f9d16b' 
                        },
                        {
                            label: 'Food & Groceries',
                            data: [groceries_cost],
                            backgroundColor: '#f9d16b' 
                        },
                        {
                            label: 'Flights',
                            data: [flight_cost],
                            backgroundColor: '#f7c23a'
                        },
                        {
                            label: 'Applications',
                            data: [application_cost],
                            backgroundColor: '#f5b209',
                        },
                        {
                            label: 'Insurance',
                            data: [insurance_cost],
                            backgroundColor: '#f5b209',
                        },
                        {
                            label: 'Commute',
                            data: [commute_cost],
                            backgroundColor: '#f5b209',                
                        }],
                },
                options: {
                    title: {
                        display: true,
                        text: "Summary of Costs",
                        fontSize: 25
                    },
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [{
                        gridLines: {
                        offsetGridLines: true
                        }
                    }],
                    xAxes: [{
                        type: 'logarithmic',
                        ticks: {
                            min: 0,
                            max: 1000000,
                            callback: function (value, index, values) {
                                if (value === 1000000) return "1M";
                                if (value === 100000) return "100K";
                                if (value === 10000) return "10K";
                                if (value === 1000) return "1K";
                                if (value === 100) return "100";
                                if (value === 10) return "10";
                                if (value === 0) return "0";
                                return null;
                            }
                    }
                    }]
                }
            }
            })
        } else {
            summaryChartDraw.data.datasets[0].data[0] = tuition_cost;
            summaryChartDraw.data.datasets[1].data[0] = housing_cost;
            summaryChartDraw.data.datasets[2].data[0] = utilites_cost;
            summaryChartDraw.data.datasets[3].data[0] = groceries_cost;
            summaryChartDraw.data.datasets[4].data[0] = flight_cost;
            summaryChartDraw.data.datasets[5].data[0] = application_cost;
            summaryChartDraw.data.datasets[6].data[0] = insurance_cost;
            summaryChartDraw.data.datasets[7].data[0] = commute_cost;
            summaryChartDraw.update();
        }

        event.preventDefault();
    }, false);
}





