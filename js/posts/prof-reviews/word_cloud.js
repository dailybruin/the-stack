import { dropdownMenu } from './dropdownMenu.js';
import { WordCloud } from './d3wordcloud.js';

WordCloud("Hello, World! This is a small cloud for your enjoyment", {
  width: 250,
  height: 100,
  size: () => .3 + Math.random(),
  rotate: () => (~~(Math.random() * 6) - 3) * 30
});

// // configuration parameters
// const W_WIDTH = window.innerWidth, W_HEIGHT = window.innerHeight;
// const MALE_COLOR = "#4885f7",FEMALE_COLOR = "#f5424b";
// const top_n_diff = 20;
// const config = {
//   "vw": W_WIDTH * 0.75,
//   "vh": W_HEIGHT * 0.9,
//   "anim_speed": 3000
// }
// const margin = ({top: 50, right: 20, bottom: 40, left: 150});
// const t = d3.transition().duration(config.anim_speed).ease(d3.easeCubic);

// var freq_data, sub_data, adj_data;

// var layout = cloud()
//     .size([500, 500])
//     .words([
//       "Hello", "world", "normally", "you", "want", "more", "words",
//       "than", "this"].map(function(d) {
//       return {text: d, size: 10 + Math.random() * 90, test: "haha"};
//     }))
//     .padding(5)
//     .rotate(function() { return ~~(Math.random() * 2) * 90; })
//     .font("Impact")
//     .fontSize(function(d) { return d.size; })
//     .on("end", draw);

// layout.start();

// function draw(words) {
//   const cloud_svg = d3.select("#word-cloud-svg")
//   .style("width", '85%')
//   .style("height", config.vh + 'px')
//   .attr("font-family", "sans-serif")
//   .attr("font-size", 10);

//   cloud_svg
//     .append("g")
//       .attr("transform", "translate(" + config.vw / 2 + "," + config.vh / 2 + ")")
//     .selectAll("text")
//       .data(words)
//     .enter().append("text")
//       .style("font-size", function(d) { return d.size + "px"; })
//       .style("font-family", "Impact")
//       .attr("text-anchor", "middle")
//       .attr("transform", function(d) {
//         return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
//       })
//       .text(function(d) { return d.text; });
// }


// // load male and female professor frequency data
// d3.csv('/datasets/prof-reviews/prof_sentiment.csv')
// .then(data => {
//   data.forEach(d => {
//     d.male = +d.male;
//     d.female = +d.female;
//     d.difference_abs = +d.difference_abs;
//   });  
//   freq_data = data;
//   sub_data = data;
//   adj_data = data.filter(function (el) {
//     return (el.POS == "ADJ" ||
//            el.POS == "ADV") &&
//            !not_adj_adv.includes(el.word);
//   });
//   var stat = "difference_abs";
//   console.log("cloud")
//   render_stats(sub_data,stat);
// });