// display top n words + interesting words

//dropdown menu: sort by most m/f, sort by largest pct disparity


// load male and female freq data
// d3.csv('../static/data/prof_word_freqs_tidy.csv')
d3.csv('/datasets/prof-reviews/prof_word_freqs_tidy.csv')
.then(data => { 
  // console.log(data);
  data.forEach(d => {
    d.percent = +d.percent;
  });  
  // data.sort((a, b) => (a.count > b.count) ? -1 : 1)
  data = data.slice(0,20)
  render_stats(data);
});