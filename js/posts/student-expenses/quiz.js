//add CDNs
var chartjs = document.createElement('script');  
chartjs.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js');
document.head.appendChild(chartjs);

//global constants
var SINGLE_BEDROOM = 2995;
var TWO_BEDROOM = 4100;

function tuition(answer) {

    if (answer == "IN_STATE")
        return 13239;
    else 
        return 43093;  
}

function application(answer) {
    if (answer == "INTERNATIONAL")
        return 539.50;
    return 133.50;
}

function flights(answer) {
    if (answer == "IN_STATE")
        return 62.83; 
    else if (answer == "OUT_OF_STATE")
        return 493.50;
    else
        return 1510.61;
}

function housing(answer, n_roommates, n_flatmates) {
    //roommates start from 1, flatmates start from 0
    if (answer == "HILL")
    {
        if (n_roommates == 1)
            return 19586.34;
        else if (n_roommates == 2)
            return 17011.55;
        else if (n_roommates == 3 || n_roommates == 4)
            return 14446.08;
        
        return 0;
    }
    else if (answer == "OFFCAMPUS")
        //TODO: edit for studio numbers
    {
        if (n_flatmates == 0)
        {
            if (n_roommates < 1 || n_roommates > 4)
                return 0;   //Sanity check: This should never happen
            
            return SINGLE_BEDROOM / n_roommates;
        }
        else
            return (TWO_BEDROOM / (n_flatmates * 2));
    }    
    else if (answer == "UCLA_OFFCAMPUS")
    {
        if (n_flatmates == 0)
        {
            if (n_roommates == 1)
                return 16872;
            if (n_roommates == 2)
                return 10203;
            if (n_roommates == 3 || n_roommates == 4)
                return 7752;
        }
        else if (n_flatmates == 1)
        {
            if (n_roommates == 1)
                return -1;//TODO: option doesn't exist;
            else if (n_roommates == 2)
                return 10716;
            else if (n_roommates == 3)
                return -1;//TODO: option doesn't exist;
            else if (n_roommates == 4)
                return 6327;    //NOTE: Option doesn't exist (using nuber for 4 or more roommates/flatmates)
        }
        else if (n_flatmates == 2)
        {
            if (n_roommates == 1)
                return 10716;
            else if (n_roommates == 2)
                return 9006;
            else if (n_roommates == 3)
                return 8892;
            else if (n_roommates == 4)
                return 6327; //NOTE: Option doesn't exist (using number for 4 or more roommates/flatmates)
        }
        else if (n_flatmates == 3)
        {
            if (n_roommates == 1)
                return -1;//TODO: option doesn't exist
            else if (n_roommates == 2)
                return 8892;
            else if (n_roommates == 3)
                return 8056;
            else
                return 6327;
        }
    }   
//TODO: CASE 2 bedrooms 3 people: is cost the same? 
    else
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
        var housing_cost = parseFloat(housing(data.get('housing'), data.get('roommates'), data.get('flatmates')));
        TOTAL_COST += housing_cost;

        //flights
        var flight_cost = parseFloat(flights(data.get('student-type')));
        TOTAL_COST += flight_cost;

        //application
        var application_cost = parseFloat(application(data.get('student-type')));
        TOTAL_COST += application_cost;
        
        //commute
        var commute_cost = parseFloat(commute(data.get('commute')));
        output = output + "Commute: $" + commute_cost + "\r";
        TOTAL_COST += commute_cost;

        output = `
        Tuition:      \$${tuition_cost}
        Housing:      \$${housing_cost}
        Flights:      \$${flight_cost}
        Applications: \$${application_cost}
        Commute:      \$${commute_cost}
        TOTAL COST:   \$${TOTAL_COST}
        `
        
        //TODO: error handling if the form isn't fully filled out
        //TODO: add variables to the chart so they wait for form to be filled
        //TODO: update numbers in functions

        var insurance_cost = 2000;

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
            summaryChartDraw.data.datasets[2].data[0] = flight_cost;
            summaryChartDraw.data.datasets[3].data[0] = application_cost;
            summaryChartDraw.data.datasets[4].data[0] = insurance_cost;
            summaryChartDraw.data.datasets[5].data[0] = commute_cost;
            summaryChartDraw.update();
        }

        event.preventDefault();
    }, false);
}





