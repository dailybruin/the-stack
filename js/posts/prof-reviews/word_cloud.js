import { dropdownMenu } from './dropdownMenu.js';
(function(){
  
  console.log("here in the cloud");
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

  const cloud_width = 1000
  const cloud_height = 600
  d3.select("#cloud-svg-div")
    .append("svg")
    .attr("id","word-cloud-svg");

  const svg = d3.select("#word-cloud-svg")
    .style("width", '85%')
    .style("height", config.vh + 'px')
    .attr("font-family", "sans-serif")
    .attr("font-size", 10);
  const g = svg.append("g").attr("transform", "translate(100,100)");
  g.append("text")
    .text("this group is working")
    .style("fill", "#69b3a2");

  // // var fill = d3.scaleOrdinal(d3.schemeCategory20);
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
    .size([cloud_width,cloud_height])
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
          .style("fill", "#69b3a2")
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
})();