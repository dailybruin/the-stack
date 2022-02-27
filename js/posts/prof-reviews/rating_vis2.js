import { dropdownMenu } from './dropdownMenu.js';
import { STOPWORDS, MALE_COLOR, FEMALE_COLOR  } from './globals.js'

(function(){
    /* configuration parameters */
    const W_WIDTH = window.innerWidth, W_HEIGHT = window.innerHeight;
    const config = {
      "vw": W_WIDTH * 0.8,
      "vh": W_HEIGHT * 0.9,
      "anim_speed": 3000
    }
    const margin = ({top: 50, right: 20, bottom: 100, left: 150});
    const t = d3.transition().duration(config.anim_speed).ease(d3.easeCubic);
    var stats = ['temp','values'];

    /* static elements (only append once) */
    var male_rating_data = [],female_rating_data = [];
    var date_array;

    const rating_svg = d3.select("#rating-svg-div").append("svg");
    rating_svg
      .attr("id","rating-svg")
      .style("width", '85%')
      .style("height", config.vh + 'px')
      .attr("font-family", "sans-serif")
      .attr("font-size", 10);
    // axes and labels
    var xAxisGroup = rating_svg.append("g")
      .attr("class","xaxis");
    var yAxisGroup = rating_svg.append("g")
      .attr("class","yaxis");
    var xLabel = rating_svg.append("text")
     .attr("class","xlabel")
    var yLabel = rating_svg.append("text")
      .attr("class","ylabel")
    var xScale;
   
    // calculate average rating
    const average = (array) => array.reduce((a, b) => a + b) / array.length;

    String.prototype.replaceAt = function(index, replacement) {
      return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

    // main render function
    const render_stats = (male_rating_data,female_rating_data,stat="overall_rating",word="") =>{
        const t = d3.transition().duration(config.anim_speed).ease(d3.easeCubic);
        console.log('selected_stat', stat);

        // axes, labels, title
        // find new max value for y axis
        xScale = d3.scaleBand()
          .domain(['Male','Female'])
          .range([margin.left, config.vw - margin.right])
        const xAxis = d3.axisBottom().scale(xScale);    
        xAxisGroup
          .attr("transform", "translate(0," + (config.vh - margin.bottom) + ")")
          .transition(t)
          .call(xAxis);
        xLabel
          .attr("text-anchor", "middle")
          .attr("x", (config.vw+ margin.left)/2 )
          .attr("y",config.vh)
          .style("font-size","20px")
          .text('Professor Gender');
        const yScale = d3.scaleLinear()
          .domain([5,0])
          .range([margin.top,config.vh - margin.bottom]); // need to offset bars/circles by margin.top
        const yAxis = d3.axisLeft().scale(yScale);
        yAxisGroup   
          .attr("transform", "translate("+ (margin.left) + ",0)")
          .style("font-size","15px")
          .transition(t)
          .call(yAxis);
        yLabel
          .attr("text-anchor", "middle")
          .attr("x", -config.vh/2)
          .attr("y",margin.top)
          .attr("transform", "rotate(-90)")
          .style("font-size","20px")
          .style("padding-bottom","5px")
          .text(stat);
      
      // re-calculate means for male/female -> create new array of objects
      let avg_female_rtg = average(female_rating_data.map(d => d[stat]));
      let avg_male_rtg = average(male_rating_data.map(d => d[stat]));
      console.log('fem array',female_rating_data.map(d => d[stat]),'fem avg',avg_female_rtg);
      let avg_data = [{avg: avg_female_rtg, gender: "Female", color: FEMALE_COLOR},
                      {avg: avg_male_rtg, gender: "Male", color: MALE_COLOR}]
      
      // plot rects
      rating_svg
        .selectAll("rect")
        .data(avg_data)
        .join(
          enter => enter.append("rect")
            .attr("id", d => {return String(d.gender) + String(d.avg)})
            .attr("x", d => {console.log(d.gender); return xScale(d.gender)})
            .attr("y", d => yScale(d.avg))
            .attr("width", config.vw/2 *0.75)
            .attr("height", d => yScale(d.avg))
            .attr("fill",d => d.color)
          ,
          update => update
            .call(update => update.transition(t)
          ),
          exit => exit
            .call(exit => exit.transition()
            .attr("height",0)
            .remove()
          )
      );
      
    };
  

    d3.csv('/datasets/prof-reviews/prof_sentiment_by_qtr_filt.csv')
    .then(data => {
        data.forEach(d => {
          d.overall_rating = +d.overall_rating;
          d.easiness_rating = +d.easiness_rating;
          d.workload_rating = +d.workload_rating;
          d.clarity_rating = +d.clarity_rating;
          d.helpfulness_rating = +d.helpfulness_rating;
          d.pos_score = +d.pos_score;
          d.neg_score = +d.neg_score;
          d.review_is_positive = +d.review_is_positive;
          d.time_taken = +d.time_taken; // numeric qtr (1-4)
          // d.time_taken2 = replace_qtr(d.time_taken) // alphabetic qtr
          // split male/female data
          if (d.gender_guess == "Female"){
            female_rating_data.push(d);
          }
          else{
            male_rating_data.push(d);
          }
        }); 
        // sort male and female by dates
        console.log('mf',male_rating_data,female_rating_data)
        // female_rating_data.sort((a,b) => a.time_taken > b.time_taken ? 1:-1);
        // male_rating_data.sort((a,b) => a.time_taken > b.time_taken ? 1:-1);
        // console.log('mf-sorted',male_rating_data,female_rating_data) // sorted

        // filter for stats to plot
        stats = Object.getOwnPropertyNames(data[1]);
        let not_stat = ['quarter_taken', 'year_taken', 'gender_guess', 'pre_covid', 'time_taken']
        stats = stats.filter(item => !not_stat.includes(item))
        stats = stats.slice(0,5);
        // console.log(stats);
            
        var stat = stats[0]; // overall rating
        // populate dropdown from filtered data
        d3.select('#stats-menu3')
        .call(dropdownMenu,{
        options: stats,
        onOptionClicked: onStatClicked,
        selectedOption: stat,
        label: 'Statistic: '
        });
        // create date list
        // date_array = data.map(d=>d.time_taken).sort(sort_num)
        // date_array = replace_qtr_array(date_array)
        // console.log("date-array",date_array);

        // console.log(male_rating_data,female_rating_data)
        render_stats(male_rating_data,female_rating_data,stat);
    });

    const onStatClicked = selection => {
      // if (selection == stats[3] || selection == stats[4] || selection == stats[5]){
      render_stats(male_rating_data,female_rating_data,selection);
    };
   
  
  })(); // create and run anonymous fn
