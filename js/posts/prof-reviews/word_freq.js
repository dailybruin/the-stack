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
const t = d3.transition().duration(config.anim_speed).ease(d3.easeCubic);

// globals
var freq_data, sub_data, adj_data;
const not_adj_adv = ['give', // verbs
                    'lab','content', 'major', // nouns
                    'basically','weekly']; // neutral adverbs
const custom_words = []; // add some fun words here
var xScale;

// element parameterss
const point_radius = 7;


// display and select up to top_n words on search
const select_words = () => {
  custom_words.append('test');
  console.log(custom_words);
};

// dropdown
const stats = ["Largest Difference","Female Professors","Male Professors","Largest Difference - Adj/Adverbs","Female-Professor - Adj/Adverbs","Male Professor - Adj/Adverbs"]
var stat = stats[0]; // the stat to sort words by
const onStatClicked = selection => {
  var stat;
  if (selection == stats[0] || selection == stats[3]){
    stat = "difference_abs";
  }
  else if (selection == stats[1] || selection == stats[4]){
    stat = "female";
  }
  else if (selection == stats[2] || selection == stats[5]){
    stat = "male";
  }
  if (selection == stats[3] || selection == stats[4] || selection == stats[5]){
    render_stats(adj_data,stat,"Adjective/Adverb");
  }
  else{
    render_stats(freq_data,stat); // pass in full dataset to rerank top_n
  }
  // console.log("selection",selection, " stat",stat);
};
d3.select('#stats-menu')
  .call(dropdownMenu,{
  options: stats,
  onOptionClicked: onStatClicked,
  selectedOption: stat,
  label: 'Sort by: '
  });


// bold word when hovered, fw 700


// clears previous graphics by class (needed since different datasets)
const clear_graphics = (svg) => {
  // console.log(kept_stat,"." + kept_stat + "-sorted-circle");
  const all_stats = ["male","female","difference"];
  for(const stat of all_stats){
      svg.selectAll("." + stat + "-sorted-circles").remove();
      svg.selectAll("." + stat + "-sorted-rects").remove();
      svg.selectAll("." + stat + "-sorted-circle").remove();
      svg.selectAll("." + stat + "-sorted-rect").remove();
  }
};

// function to plot both F/M stats
const plot_lines = (svg,xScale,yScale,t,gender="male",stat="male",color="#aa42f5",data=sub_data) =>{
  if(stat=="difference_abs"){
    stat="difference";
  }
  // console.log("plotted-stat",stat)
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
const render_stats = (data,stat="difference_abs",y_label="Word") =>{
  const t = d3.transition().duration(config.anim_speed).ease(d3.easeCubic);
  // sort data by selected statistic and slice top n
  data.sort((a, b) => (a[stat] > b[stat]) ? -1 : 1)
  sub_data = data.slice(0,top_n_diff);

  // svg
  const stat_svg = d3.select("#stat-svg")
    .style("width", '85%')
    .style("height", config.vh + 'px')
    .attr("font-family", "sans-serif")
    .attr("font-size", 10);

  // axes, labels, title
  // find max value for x axis
  let max1 = Math.max(...sub_data.map(d => d.male));
  let max2 = Math.max(...sub_data.map(d => d.female));
  let max = Math.max(max1,max2);
  // }
  xScale = d3.scaleLinear()
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
      .text(y_label);

  stat_svg.append('text')
    .attr("y",20)
    .style("font-size","25px")
    .html("Word Frequencies for Male and Female Professors");
  
  // plot data
  // clear existing graphics first
  clear_graphics(stat_svg)
  
  // if diff, add word,diff in tooltip, keep normal scale
  // console.log("stat here",stat)
  if(stat=="difference_abs"){
    plot_lines(stat_svg,xScale,yScale,t,"male",stat,MALE_COLOR,sub_data); // plot male
    plot_lines(stat_svg,xScale,yScale,t,"female",stat,FEMALE_COLOR,sub_data); // plot female
  }
  // else only word,male and female tooltip
  else{
    // console.log('s',stat)
    plot_lines(stat_svg,xScale,yScale,t,"male",stat,MALE_COLOR,sub_data); // plot male
    plot_lines(stat_svg,xScale,yScale,t,"female",stat,FEMALE_COLOR,sub_data); // plot female
  };
};


// mouseover/tooltip functions
var tooltip1 = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

const mouseover = function(d) {
  tooltip1.transition()
    .duration(200)
    .style("opacity", 0.7);
  d3.select(this)
    .attr("r", point_radius * 1.2);
}
const mousemove = function(event,d) {
  let tooltip_text = "<b>Male</b>: " + d.male.toFixed(3) + "%<br><b>Female</b>: " + d.female.toFixed(3) + "%";
  tooltip1.html(tooltip_text)
    .style("top", (event.pageY)+"px")
    .style("left",(event.pageX + 15)+"px")
    .style('color', 'white');
  d3.select(this)
    .attr("r", point_radius * 1.2);
}
const mouseleave = function(d) {
  tooltip1
    .style("opacity", 0);
  d3.select(this)
    .attr("r", point_radius);
}

const mouseover2 = function(event,d){  
  let mousex = event.pageX;
  vertical_guide
    .style("opacity",1);
  percent_text
    .style("opacity",1);
}

const mousemove2 = function(event,d) {
  let mousex = event.pageX;
  // console.log("mousex",mousex);
  vertical_guide
    .attr("x1",mousex-30)
    .attr("x2",mousex-30);
  percent_text
    .html(xScale.invert(mousex-30).toFixed(3) + "%")
    .attr("x", mousex+5)
    .attr("y", config.vh - margin.bottom * 1.5);
}

const mouseleave2 = function(event,d){ 
  vertical_guide
    .style("opacity",0)
}

// static components before/above data
const stat_svg = d3.select("#stat-svg");
var overlay_g = stat_svg.append("g").classed("overlay-g",true)
var overlay_rect = overlay_g.append('rect');
overlay_rect
  .attr('class', 'overlay-rect')
  .attr('width', (config.vw-margin.left-margin.right)) // set to graph area
  .attr('height', (config.vh-margin.bottom-margin.top))
  .attr('transform', 'translate('+margin.left+', ' + margin.top+')')
  .style('fill', 'none') // transparent fill
  .style("pointer-events", "all") // tracks mouse location
  .on('mouseover', mouseover2)
  .on('mousemove', mousemove2)
  .on('mouseout', mouseleave2);
// Add vertical line to read percentages more easily
var vertical_guide = overlay_g
  .append("line");
vertical_guide
  .attr("class", "vertical-guide")
  .attr("y1",margin.top)
  .attr("y2",config.vh - margin.bottom)
  .style("stroke-width", 1)
  .style("stroke", "#000")
  .style("fill", "none")
  .style("stroke-dasharray", ("2, 2"))
  .style("opacity",0);
var percent_text = overlay_g
  .append("text");
percent_text
  .style("opacity", 0)
  .attr("text-anchor", "left")
  .attr("alignment-baseline", "middle");

// load male and female professor frequency data
d3.csv('/datasets/prof-reviews/prof_sentiment.csv')
.then(data => {
  console.log(data);
  data.forEach(d => {
    d.male = +d.male;
    d.female = +d.female;
    d.difference_abs = +d.difference_abs;
  });  
  freq_data = data;
  sub_data = data;
  adj_data = data.filter(function (el) {
    return (el.POS == "ADJ" ||
           el.POS == "ADV") &&
           !not_adj_adv.includes(el.word);
  });
  var stat = "difference_abs";
  render_stats(sub_data,stat);
});


// static components after/below data
// legend
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
  .attr("class", "ylabel")
  .style("font-size","20px");
// append overlay group and rect (where vertical line limited to)
