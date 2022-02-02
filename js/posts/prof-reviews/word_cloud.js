import { dropdownMenu } from './dropdownMenu.js';

const svg = d3.select("#word-cloud-svg")
const g = svg.append("g");
g.append("text")
  .attr("text","this group is working")
  .style("fill", "#69b3a2");

// var fill = d3.scaleOrdinal(d3.schemeCategory20);
var data = [
  {text: "Hello", value:6260},
  {text: "happy", value:5370},
  {text: "beautiful", value:2480},
  {text: "rainbow", value:4350},
  {text: "unicorn", value:1250},
  {text: "glitter", value:3140},
  {text: "happy", value:990},
  {text: "pie", value:4230}];

var layout = d3.layout.cloud()
  .size([400, 300])
  .words(data)
  .on("end", draw);

layout.start()

function draw(words) {
  g
    .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")") // center text
    .selectAll("text")
    .data(words)
    .enter()
      .append("text") // add text data and set attributes
        .text((d) => d.text)
        .style("font-size", (d) => d.size + "px")
        .style("font-family", (d) => d.font)
        .attr("text-anchor", "middle")
        .attr("transform", (d) => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")");
}

// load male and female professor frequency data
// d3.csv('/datasets/prof-reviews/prof_sentiment.csv')
// .then(data => {
//   data.forEach(d => {
//     console.log("cloud data", data);
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
//   render_stats(sub_data,stat);
// });