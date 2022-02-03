import { dropdownMenu } from './dropdownMenu.js';
(function(){

  /* configuration parameters */
  const W_WIDTH = window.innerWidth, W_HEIGHT = window.innerHeight;
  const config = {
    "vw": W_WIDTH * 0.8,
    "vh": W_HEIGHT * 0.9,
    "anim_speed": 3000
  }
  const margin = ({top: 50, right: 20, bottom: 40, left: 150});
  const t = d3.transition().duration(config.anim_speed).ease(d3.easeCubic);
  const MALE_COLOR = "#4885f7",FEMALE_COLOR = "#f5424b";
  const top_n_words = 20;
  const scale_factor = 10000; // for scaling word cloud font size

  /* static elements (only append once) */
  var freq_data, sub_data, adj_data;
  const not_adj_adv = ['give', // verbs
                      'lab','content', 'major', // nouns
                      'basically','weekly']; // neutral adverbs
  const cloud_svg = d3.select("#cloud-svg-div").append("svg");  
  cloud_svg
    .attr("id","word-cloud-svg")
    .style("width", '85%')
    .style("height", config.vh + 'px')
    .attr("font-family", "sans-serif");
  var m_word_cloud = cloud_svg.append("g");
  m_word_cloud
    .attr("id","male-cloud")
    .style("width", config.vw/2 + "%")
    .style("height", config.vh + 'px')
  var f_word_cloud = cloud_svg.append("g");
  f_word_cloud
    .attr("id","female-cloud")
    .style("width", config.vw/2 + "%")
    .style("height", config.vh + 'px')
  var male_layout = d3.layout.cloud();
  var female_layout = d3.layout.cloud();
  const male_label = m_word_cloud
    .append("text");
  const female_label = f_word_cloud
    .append("text");


  // dropdown
  const stats = ["Largest Difference","Female Professors","Male Professors",
    "Largest Difference - Adj/Adverbs","Female-Professor - Adj/Adverbs","Male Professor - Adj/Adverbs"]
  var stat = stats[0]; // the stat to sort words by
  const onStatClicked = selection => {
    // re-filter data on click
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
  d3.select('#stats-menu2')
    .call(dropdownMenu,{
    options: stats,
    onOptionClicked: onStatClicked,
    selectedOption: stat,
    label: 'Sort by: '
    });
  
  // draw both male and female WCs
  const render_stats = (data,stat="difference_abs",y_label="Word") =>{
    // sort data by selected statistic and slice top n
    data.sort((a, b) => (a[stat] > b[stat]) ? -1 : 1)
    sub_data = data.slice(0,top_n_words);
    // if (stat == "difference_abs"){
    //   stat = "difference";
    // }
    let male_data = sub_data.map(d => ({text: d.word,value: d.male * scale_factor}))
    let female_data = sub_data.map(d => ({text: d.word,value: d.female * scale_factor}))

    // format sub_data into correct format
    console.log("m_data",male_data)
    console.log("f_data",female_data)

    // stop then start layouts
    male_layout.stop()
    male_layout
      .size([config.vw/2,config.vh *  0.9])
      .words(male_data)
      .font("Impact")
      .spiral("rectangular")
      // .rotate(function() { return ~~(Math.random() * 2) * 60; })
      .on("end", draw_m);
    male_layout.start()
    
    female_layout.stop()
    female_layout
      .size([config.vw/2,config.vh * 0.9])
      .words(female_data)
      .font("Impact")
      .spiral("rectangular")
      // .rotate(function() { return ~~(Math.random() * 2) * 60; })
      .on("end", draw_f);
    female_layout.start()
  }

  // draw male on left, female on right
  function draw_m(words) {
    const t = d3.transition().duration(config.anim_speed).ease(d3.easeCubic);
    m_word_cloud
      .attr("transform", "translate(" + male_layout.size()[0] / 2 + "," + config.vh / 2 + ")") // center text
      .selectAll("text")
      .data(words) // add word data
      .join(
        enter => enter.append("text") // add text data for each word and set attributes
            .text((d) => d.text)
            .attr('font-size', 1)
            .style("fill-opacity",1e-6)
            .style("font-family", (d) => d.font)
            .style("fill", MALE_COLOR)
            .attr("text-anchor", "middle")
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

  function draw_f(words) {
    const t = d3.transition().duration(config.anim_speed).ease(d3.easeCubic);
    f_word_cloud
      .attr("transform", "translate(" + (male_layout.size()[0] + female_layout.size()[0] / 2) + "," + config.vh / 2 + ")") // center text
      .selectAll("text")
      .data(words) // add word data
      .join(
        enter => enter.append("text") // add text data for each word and set attributes
            .text((d) => d.text)
            .attr('font-size', 1)
            .style("fill-opacity",1e-6)
            .style("font-family", (d) => d.font)
            .style("fill", FEMALE_COLOR)
            .attr("text-anchor", "middle")
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
  d3.csv('/datasets/prof-reviews/prof_sentiment.csv')
  .then(data => {
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
})();