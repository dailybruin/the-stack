


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