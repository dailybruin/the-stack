import { dropdownMenu } from './dropdownMenu.js';
import { STOPWORDS, MALE_COLOR, FEMALE_COLOR, MALE_COLOR_BRIGHT, FEMALE_COLOR_BRIGHT, W_WIDTH, W_HEIGHT, isMobile} from './globals.js'

(function(){
  /* configuration parameters */
  const config = {
    "vw": isMobile() ? Math.min(W_WIDTH * 0.65, W_HEIGHT * 0.9) : W_WIDTH * 0.65,
    "vh": isMobile() ? Math.min(W_WIDTH * 0.65, W_HEIGHT * 0.9) : W_HEIGHT * 0.9,
    "anim_speed": 1000
  }
  const CLOUD_TITLE_SIZE = config.vw/60;
  // const margin = ({top: 50, right: 20, bottom: 40, left: 150});
  const margin = ({top: config.vh * 0.02, right: config.vw * 0.02, bottom: config.vh * 0.02, left: config.vw * 0.02});
  const t = d3.transition().duration(config.anim_speed).ease(d3.easeCubic);
  let top_n_words = 30;
  const scale_factor = 10000; // for scaling word cloud font size

  /* static elements (only appended once) */
  var freq_data, sub_data;
  var cloud_layout = d3.layout.cloud();

  var WC_div = d3.select("#WC-div");
  // nest SVG in div
  var word_cloud_svg = WC_div.append("svg");
  word_cloud_svg
    .attr("id","word-cloud")
    .style("width", config.vw)
    .style("height", config.vh);
  var word_cloud_words = word_cloud_svg.append("g");

  // stats dropdown
  const stats = ["with largest difference","for female professors","for male professors"];
  // const stats = ["Largest Difference - Adj/Adverbs","Female-Professor - Adj/Adverbs","Male Professor - Adj/Adverbs"]
  var stat = stats[0]; // the stat to sort words by
  const onStatClicked = selection => {
    // re-filter data on click
    var stat;
    if (selection == stats[0]){
      stat = "difference_abs";
    }
    else if (selection == stats[1]){
      stat = "female";
    }
    else if (selection == stats[2]){
      stat = "male";
    }
    render_stats(freq_data,stat);
  };
  d3.select('#stats-menu2')
    .call(dropdownMenu,{
    options: stats,
    onOptionClicked: onStatClicked,
    selectedOption: stat,
    label: 'words... ',
    id: 'word-cloud-select-1'
    });
  
  // number of words spinner
  let num_words_input = document.getElementById('num-words-input2');
  num_words_input.onchange = () => {
      top_n_words = num_words_input.value
      // console.log('spinner',top_n_words)
      let current_stat = document.getElementById("word-cloud-select-1").value;
      onStatClicked(current_stat); // call onStatClicked to also determine first dropdown value
   }  

  // function to sort data by statistic
  const sort_data = (data,stat,top_n) => {
    data.sort((a, b) => (a[stat] > b[stat]) ? -1 : 1) // sorts descending
    return data.slice(0,top_n);
  }

  // mouseover functions
  const mouseover = function(d) {
    let word_class = d3.select(this).attr("class");
    let same_words = d3.selectAll("." + word_class);
    same_words
      // .transition()
      // .duration("500")
      .style("opacity", () => 0.6); // get font size from this -> mult
      // .style("font-size", () => {return (parseInt(this.style.fontSize.split('px')[0]) * 1.2)}); // get font size from this -> mult
  }
  const mouseleave = function(d) {
    let word_class = d3.select(this).attr("class");
    let same_words = d3.selectAll("." + word_class);
    same_words
      //.transition()c
      // .ease("elastic")
      // .duration("500")
      .style("opacity", () => 1);
      // .style("font-size", () => {return (parseInt(this.style.fontSize.split('px')[0]) / 1.2)});
  }

  // function to draw both male and female WCs
  const render_stats = (data,stat="both",num_words = top_n_words) =>{
    // sort data by selected statistic and slice top n
    sub_data = sort_data(data,stat,num_words);

    sub_data = sub_data.map(d => ({text: d.word,value: d.both * scale_factor}))

    let sqrtScale = d3.scaleSqrt() // if rare words too small
      .domain([0,d3.max(sub_data, d => {return d.value})])
      .range([0,95]);
    let linearScale = d3.scaleLinear()
      .domain([0,d3.max(sub_data, d => {return d.value})])
      .range([0,95]);

    cloud_layout
      .size([config.vw * 0.9,config.vh *  0.9])
      .words(sub_data)
      .font("Impact")
      .fontSize(d => sqrtScale(d.value))
      .spiral("rectangular")
      .rotate(0)
      .on("end", draw_cloud);
    cloud_layout.start()
  }

  // draws cloud
  function draw_cloud(words) {
    const t = d3.transition().duration(config.anim_speed).ease(d3.easeCubic);
    word_cloud_words
      .attr("transform", "translate(" + (cloud_layout.size()[0] / 2) + "," +(cloud_layout.size()[1] / 2) + ")") // center text
      .selectAll("text")
      .data(words, d => {
        if(d==undefined){
          // console.log(d);
          return('an-undefined-m-word')
        }
        else{
          // console.log("wordcloud d",d);
          // console.log(d, d==undefined, String(d)=='undefined');
          return(d);
        }
      })
      .join(
        enter => enter.append("text") // add text data for each word and set attributes
            .text((d) => d.text)
            .style('font-size', 1)
            .style("fill-opacity",1e-6)
            .style("font-family", (d) => d.font)
            .style("fill", MALE_COLOR)
            .attr("text-anchor", "middle")
            .attr("class",d => d.text + "-word")
            .on("mouseover", mouseover)
            .on("mouseout", mouseleave)
            .call(enter => enter
              .transition(t)
                .style("font-size", (d) => d.size + "px")
                .style("fill-opacity",1)
                .attr("transform", (d) => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"),
        update => update
          .call(update => update)
        ),
        exit => exit
          .call(exit => exit
            .transition(t)
              .style('fill-opacity', 1e-6)
              .attr('font-size', 1)
              .remove()
        )
      );
  }

  // load male and female professor frequency data
  d3.csv('/datasets/prof-reviews/prof_word_freqs_POS.csv')
  .then(data => {
    data.forEach(d => {
      d.male = +d.male;
      d.female = +d.female;
      d.both = d.male + d.female; // combine both genders for one wordcloud
      d.difference_abs = +d.difference_abs;
    });  
    // freq_data = data.filter(function (el) {
    //   return !STOPWORDS.includes(el.word);
    // });
    freq_data = data; // no longer filter out words
    var stat = "both";
    console.log(freq_data);
    onStatClicked(freq_data,stat);
  });
})();