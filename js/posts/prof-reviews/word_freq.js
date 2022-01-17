import { dropdownMenu } from './dropdownMenu.js';

// configuration parameters
const W_WIDTH = window.innerWidth, W_HEIGHT = window.innerHeight;
const MALE_COLOR = "#4885f7",FEMALE_COLOR = "#f5424b";
const top_n_diff = 20;
const config = {
  "vw": W_WIDTH * 0.75,
  "vh": W_HEIGHT * 0.9,
  "anim_speed": 3000
}
const margin = ({top: 50, right: 20, bottom: 40, left: 150});
// globals
var freq_data;
var sub_data;
var custom_words = []; // add some here
// element parameterss
const point_radius = 7;


// display and select up to top_n words on search
const select_words = () => {
  custom_words.append('test');
  console.log(custom_words);
};

// dropdown
const stats = ["Difference","Female Professors","Male Professors","Common Sentiment Words"]
var stat = stats[0]; // the stat to sort words by
const onStatClicked = selection => {
  var stat;
  if (selection == stats[2]){
    stat = "male";
  }
  else if (selection == stats[1]){
    stat = "female";
  }
  else if (selection == stats[0]){
    stat = "difference_abs";
  }
  else{
    stat = "difference_abs" // change to sentiment once list created
  }
  render_stats(freq_data,stat); // pass in full dataset to rerank top_n
  
};
d3.select('#stats-menu')
  .call(dropdownMenu,{
  options: stats,
  onOptionClicked: onStatClicked,
  selectedOption: stat,
  label: 'Sort by: '
  });

var tooltip = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

// Three function that change the tooltip when user hover / move / leave a cell
const mouseover = function(d) {
  tooltip.transition()
    .duration(200)
    .style("opacity", 0.7);
  d3.select(this)
    .attr("r", point_radius * 1.2);
}

const mousemove = function(event,d) {
  let tooltip_text = "Male %: " + d.male.toFixed(3) + "<br>Female %: " + d.female.toFixed(3);
  tooltip.html(tooltip_text)
    .style("top", (event.pageY)+"px")
    .style("left",(event.pageX + 15)+"px")
    .style('color', 'white');
  d3.select(this)
    .attr("r", point_radius * 1.2);
}

const mouseleave = function(d) {
  tooltip
    .style("opacity", 0);
  d3.select(this)
    .attr("r", point_radius);
}

// plots both F/M stats
const plot_lines = (svg,xScale,yScale,t,gender="male",stat="male",color="#aa42f5",data=sub_data) =>{
  // clear old graphics first
  svg.selectAll(".diff-circle").remove();
  svg.selectAll(".diff-rect").remove();
  
  if(stat === "male"){
    svg.selectAll(".female-sorted-circle").remove();
    svg.selectAll(".female-sorted-rect").remove();
  }
  else if(stat === "female"){
    svg.selectAll(".male-sorted-circle").remove();
    svg.selectAll(".male-sorted-rect").remove();
  }
  // lines
  svg.append("g")
    .attr("class",stat+"-sorted-rects")
    .attr("id",gender+stat+"sorted-r");
  svg.select("#"+gender+stat+"sorted-r")
     .selectAll("rect")
     .data(data)
     .join(
        enter => enter.append("rect")
          .attr("class",stat+"-sorted-rect")
          .attr("x", xScale(0))
          .attr("y", d => {
            // show selected gender on top
            if(stat=="male"){
              return gender ==="male" ? yScale(d.word) - point_radius * 3/4: yScale(d.word) + point_radius * 3/4;
            }
            else{
              return gender ==="female" ? yScale(d.word) - point_radius * 3/4: yScale(d.word) + point_radius * 3/4;
            }
          })
          .attr("width", 0)
          .attr("height", point_radius/4)
          .call(enter => enter.transition(t)
          .attr("fill", color)
          .attr("gender", "male")
          .attr("freq", d => d[gender])
          .attr("width", d => xScale(d[gender]) - xScale(0))
        ),
        update => update
          .call(update => update.transition(t)
        ),
        exit => exit
          .call(exit => exit.transition()
          .attr('width', xScale(0))
          .attr("x", xScale(0))
          .remove()
        )
    );
  // circles
  svg.append("g")
      .attr("class",stat+"-sorted-circles")
      .attr("id",gender+stat+"sorted-c");
  svg.select("#"+gender+stat+"sorted-c")
   .selectAll("circle")
   .data(data)
   .join(
     enter => enter.append("circle")
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseout", mouseleave)
      .attr("class",stat+"-sorted-circle")
      .attr("cx", xScale(0))
      .attr("cy", d => {
        // show selected gender on top
          if(stat=="male"){
            return gender ==="male" ? yScale(d.word) - point_radius * 3/4: yScale(d.word) + point_radius * 3/4;
          }
          else{
            return gender ==="female" ? yScale(d.word) - point_radius * 3/4: yScale(d.word) + point_radius * 3/4;
          }
        })
      .call(enter => enter.transition(t)
      .attr("fill", color)
      .attr("gender",gender)
      .attr("freq", d => d[gender])
      .attr("cx", d => xScale(d[gender])) //p
      .attr("r", point_radius)
     ),
     update => update
        .call(update => update.transition(t)
        ),
     exit => exit
        .call(exit => exit.transition()
        .attr('height',0)
        .attr('y',config.inner_vh)
        .remove()
        )
    );
  
};

// main render function
const render_stats = (data,stat="difference") =>{
  // console.log(data.map(d => d.difference_abs));
  data.sort((a, b) => (a[stat] > b[stat]) ? -1 : 1)
  sub_data = data.slice(0,top_n_diff);
  console.log("sorted top 20 for ",stat, sub_data);
  
  const t = d3.transition().duration(config.anim_speed).ease(d3.easeCubic);
  
  const stat_svg = d3.select("#stat-svg")
    .style("width", '85%')
    .style("height", config.vh + 'px')
    .attr("font-family", "sans-serif")
    .attr("font-size", 10);

  // axes, labels, title
  let max; // find max value for x axis
  if(stat=="difference_abs"){
    max = Math.max(...sub_data.map(d => d.difference_abs));
  }
  else{
    let max1 = Math.max(...sub_data.map(d => d.male));
    let max2 = Math.max(...sub_data.map(d => d.female));
    max = Math.max(max1,max2);
  }
  const xScale = d3.scaleLinear()
  .domain([0, max])
  .range([margin.left, config.vw - margin.right])
  const xAxis = d3.axisBottom().scale(xScale);
  
  stat_svg.select('g.xaxis')    
      .attr("transform", "translate(0," + (config.vh-margin.bottom) + ")")
      .transition(t)
      .call(xAxis);
  stat_svg.select('.xlabel')
      .attr("text-anchor", "middle")
      .attr("x", (config.vw+ margin.left)/2 )
      .attr("y",config.vh)
      .style("font-size","20px")
      .text('Percent of All Words');

  const yScale = d3.scalePoint()
    .domain(sub_data.map(d => d.word))
    .range([margin.top,config.vh - margin.bottom]); // need to offset bars/circles by margin.top
  const yAxis = d3.axisLeft().scale(yScale);
  stat_svg.select('g.yaxis')    
      .attr("transform", "translate("+ (margin.left) + ",0)")
      .style("font-size","15px")
      .transition(t)
      .call(yAxis);
  
  stat_svg.select('.ylabel')
      .attr("text-anchor", "middle")
      .attr("x", -config.vh/2)
      .attr("y",margin.top)
      .attr("transform", "rotate(-90)")
      .style("font-size","20px")
      .style("padding-bottom","5px")
      .text('Word');

  stat_svg.append('text')
    .attr("y",20)
    .style("font-size","25px")
    .html("Word Frequencies for Male and Female Professors");
  
  // plot data
  // if diff, only show diff (as opposed to male & female)
  if(stat=="difference_abs"){
    // clear old graphics
    stat_svg.selectAll(".female-sorted-circles").remove();
    stat_svg.selectAll(".female-sorted-rects").remove();
    stat_svg.selectAll(".male-sorted-circles").remove();
    stat_svg.selectAll(".male-sorted-rects").remove();
    //lines
    stat_svg.append("g")
    .attr("class","diff-rects");
    stat_svg.select('.diff-rects')
    .selectAll("rect")
    .data(sub_data)
    .join(
      enter => enter.append("rect")
        .attr("class","diff-rect")
        .attr("x", xScale(0)) //p
        .attr("y", d => d.gender === "male" ? yScale(d.word): yScale(d.word)) //p
        .attr("width", 0)
        .attr("height", point_radius/4)
        .call(enter => enter.transition(t)
        .attr("fill", d => d.difference > 0 ? MALE_COLOR: FEMALE_COLOR)
        .attr("count", d => d[stat])
        .attr("r", point_radius)
        .attr("width", d => xScale(d[stat]) - xScale(0))
      ),
      update => update
            .call(update => update.transition(t)
            ),
      exit => exit
            .call(exit => exit.transition()
            .attr('width', xScale(0))
            .remove()
            )
    );
    // circles
    stat_svg.append("g")
      .attr("class","diff-circles");
    stat_svg.select('.diff-circles')
      .selectAll("circle")
      .data(sub_data)
      .join(
        enter => enter.append("circle")
          .on("mouseover", mouseover)
          .on("mousemove", mousemove)
          .on("mouseout", mouseleave)
          .attr("class","diff-circle")
          .attr("cx", d => xScale(0))
          .attr("cy", d => yScale(d.word) )
          .call(enter => enter.transition(t)
          .attr("fill", d => d.difference > 0 ? MALE_COLOR: FEMALE_COLOR)
          .attr("gender",d => d.gender)
          .attr("percent-diff", d => d.difference_abs)
          .attr("cx", d => xScale(d.difference_abs))
          .attr("r", point_radius)
          
        ),
        update => update
          .call(update => update.transition(t)
          ),
        exit => exit
          .call(exit => exit.transition()
          .attr('height',0)
          .attr('y',config.inner_vh)
          .remove()
          )
    );
  }
  // else plot both male and female
  else{
    plot_lines(stat_svg,xScale,yScale,t,"male",stat,MALE_COLOR,sub_data); // plot male
    plot_lines(stat_svg,xScale,yScale,t,"female",stat,FEMALE_COLOR,sub_data); // plot female
  }
};

// static components
// legend
const stat_svg = d3.select("#stat-svg");
stat_svg.append("g").attr("class","legend");
stat_svg.select(".legend").append("circle").attr("cx",W_WIDTH * 0.6).attr("cy",W_HEIGHT * 0.7).attr("r", point_radius).style("fill", MALE_COLOR);
stat_svg.select(".legend").append("circle").attr("cx",W_WIDTH * 0.6).attr("cy",W_HEIGHT * 0.7+30).attr("r", point_radius).style("fill", FEMALE_COLOR);
stat_svg.select(".legend").append("text").attr("x",W_WIDTH * 0.6+20).attr("y",W_HEIGHT * 0.7).text("Male Professors").style("font-size", "15px").attr("alignment-baseline","middle");
stat_svg.select(".legend").append("text").attr("x",W_WIDTH * 0.6+20).attr("y",W_HEIGHT * 0.7+30).text("Female Professors").style("font-size", "15px").attr("alignment-baseline","middle");
// axes groups + labels
stat_svg.append("g").attr('class','xaxis');
stat_svg.append("g").attr('class','yaxis');
stat_svg.append("text")
  .attr("class", "xlabel");
stat_svg.append("text")
  .attr("class", "ylabel");


// load male and female professor frequency data
d3.csv('/datasets/prof-reviews/prof_word_freqs.csv')
.then(data => {
  // console.log(data);
  data.forEach(d => {
    d.male = +d.male;
    d.female = +d.female;
    d.difference_abs = +d.difference_abs;
  });  
  freq_data = data;
  sub_data = data;
  var stat = "difference_abs";
  render_stats(sub_data,stat);
});


